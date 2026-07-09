export type JaniceOffer = "times" | "pricelist" | "menu" | "directions" | "callback" | null

export type JaniceReply = {
  text: string
  offer?: JaniceOffer
  badge?: string
}

export type JaniceChip = {
  label: string
  message: string
}

export const JANICE_QUICK_CHIPS: JaniceChip[] = [
  { label: "What are your hours?", message: "What are your hours?" },
  { label: "Book a time", message: "Can I book for Saturday?" },
  { label: "How much?", message: "How much does it cost?" },
  { label: "Are you real?", message: "Are you a real person?" },
]

const AFFIRM = new Set([
  "yes",
  "yeah",
  "yep",
  "yup",
  "sure",
  "ok",
  "okay",
  "please",
  "sounds good",
  "works",
  "book it",
  "lock it in",
  "yes please",
])

const DECLINE = new Set([
  "no",
  "nope",
  "nah",
  "not now",
  "maybe later",
  "no thanks",
  "all good",
])

/** Keyword → reply. First match wins. */
const INTENTS: { keys: string[]; replies: JaniceReply[] }[] = [
  {
    keys: ["what can you do", "what do you do", "how can you help", "capabilities"],
    replies: [
      {
        text: "I answer calls and texts 24/7, book appointments, fill cancellations from your waitlist, send reminders, and reply to reviews, in your voice. Want to try booking a time?",
        offer: "times",
      },
    ],
  },
  {
    keys: ["hours", "open", "close", "what time", "open today", "open now"],
    replies: [
      {
        text: "We're open Mon–Fri 9–7 and Sat 10–5. I'm here 24/7 for messages and bookings. Want me to grab you a time?",
        offer: "times",
      },
    ],
  },
  {
    keys: ["price", "pricing", "cost", "how much", "rates", "fee"],
    replies: [
      {
        text: "Most visits run about $45–$120 depending on what you need. Want me to text over the full price list?",
        offer: "pricelist",
      },
    ],
  },
  {
    keys: ["book", "appointment", "reserve", "reservation", "schedule", "opening", "saturday", "tomorrow"],
    replies: [
      {
        text: "Happy to help, I've got tomorrow at 2:30 PM or Saturday at 11 AM open. Which works better?",
        offer: "times",
      },
    ],
  },
  {
    keys: ["where", "address", "location", "directions", "parking"],
    replies: [
      {
        text: "We're in downtown Vancouver with parking out back. Want me to text you directions?",
        offer: "directions",
      },
    ],
  },
  {
    keys: ["real person", "human", "robot", "bot", "are you ai", "are you real"],
    replies: [
      {
        text: "I'm the automated front desk for this clinic. Routine scheduling goes through me, and anything sensitive gets passed to the reception team. How can I help?",
      },
    ],
  },
  {
    keys: ["cancel", "reschedule", "change my appointment", "can't make"],
    replies: [
      {
        text: "No problem. What's your name and the day you're booked? I'll move it and offer your old slot to the waitlist.",
      },
    ],
  },
  {
    keys: ["complaint", "unhappy", "refund", "bad experience", "upset"],
    replies: [
      {
        text: "I'm sorry to hear that, I'm flagging this for the team so someone can make it right. What's the best number to reach you on?",
        offer: "callback",
      },
    ],
  },
  {
    keys: ["call me", "phone me", "give me a call"],
    replies: [
      {
        text: "Of course, want someone from the team to give you a quick call back?",
        offer: "callback",
      },
    ],
  },
  {
    keys: ["thanks", "thank you", "ty", "cheers"],
    replies: [{ text: "Anytime, I'm here 24/7 if you need anything else." }],
  },
  {
    keys: ["hi", "hello", "hey", "good morning", "good afternoon"],
    replies: [
      {
        text: "Hey there, I can check hours, share pricing, or get you booked in. What do you need?",
      },
    ],
  },
  {
    keys: ["bye", "goodbye", "later", "that's all"],
    replies: [{ text: "Take care, text anytime, day or night." }],
  },
  {
    keys: ["my business", "sign up", "get janice", "hire you", "for my shop"],
    replies: [
      {
        text: "Love that, tap Book a Call on the site and the Pacific Edge team will walk you through setup. Usually live in about a week.",
      },
    ],
  },
]

const FALLBACK: JaniceReply[] = [
  {
    text: "I want to get that right, I'll loop in the team. Meanwhile I can book you in, check hours, or share pricing. What helps most?",
  },
  {
    text: "That's better for a human on the team. I'll pass it along. Want me to book you a time or answer the basics?",
  },
]

function normalize(text: string): string {
  return ` ${text.toLowerCase().replace(/[^a-z0-9$:'\s]/g, " ").replace(/\s+/g, " ")} `
}

function matches(text: string, keys: string[]): boolean {
  const t = normalize(text)
  return keys.some((k) => {
    // Word-boundary match first; fall back to substring only for keys long
    // enough that a substring hit is meaningful (catches plurals like
    // "reservations") without short words like "ok"/"sat" matching inside
    // "book"/"saturday".
    if (t.includes(` ${k} `)) return true
    return k.length >= 4 && t.includes(k)
  })
}

function bookReply(pickSaturday: boolean): JaniceReply {
  const when = pickSaturday ? "Saturday at 11 AM" : "tomorrow at 2:30 PM"
  return {
    text: `Done, you're booked for ${when}. I'll text a reminder beforehand. Anything else?`,
    badge: "Booked in seconds. Reminder scheduled.",
  }
}

export type JaniceChatState = {
  pendingOffer: JaniceOffer
  rot: Record<string, number>
}

export function createJaniceChatState(): JaniceChatState {
  return { pendingOffer: null, rot: {} }
}

function pickRotating(replies: JaniceReply[], state: JaniceChatState, key: string): JaniceReply {
  const i = (state.rot[key] ?? 0) % replies.length
  state.rot[key] = i + 1
  return replies[i]
}

export function getJaniceReply(userText: string, state: JaniceChatState): JaniceReply {
  const raw = userText.trim()
  if (!raw) {
    return { text: "Type a message and I'll reply like I would for a real customer." }
  }

  if (matches(raw, [...DECLINE])) {
    state.pendingOffer = null
    return { text: "No worries, I'm here whenever you're ready." }
  }

  if (matches(raw, ["book it", "lock it in", "book me in", "just book it"])) {
    state.pendingOffer = null
    return bookReply(matches(raw, ["saturday", "sat", "11"]))
  }

  if (matches(raw, [...AFFIRM]) && state.pendingOffer) {
    const offer = state.pendingOffer
    state.pendingOffer = null
    switch (offer) {
      case "times":
        return bookReply(matches(raw, ["saturday", "sat", "11", "morning"]))
      case "pricelist":
        state.pendingOffer = "times"
        return { text: "Sent, full price list is on its way. Want me to book you in too?" }
      case "menu":
        state.pendingOffer = "times"
        return { text: "Sent, menu is on its way. Want me to find you a time?" }
      case "directions":
        return { text: "On their way, directions headed to your phone. Anything else?" }
      case "callback":
        return { text: "Perfect, someone from the team will call you shortly." }
      default:
        break
    }
  }

  if (matches(raw, [...AFFIRM])) {
    state.pendingOffer = "times"
    return {
      text: "Happy to, tomorrow at 2:30 PM or Saturday at 11 AM. Which works?",
      offer: "times",
    }
  }

  for (const intent of INTENTS) {
    if (matches(raw, intent.keys)) {
      const reply = pickRotating(intent.replies, state, intent.keys[0])
      if (reply.offer !== undefined) state.pendingOffer = reply.offer ?? null
      return reply
    }
  }

  return pickRotating(FALLBACK, state, "fallback")
}

export const JANICE_GREETING: JaniceReply = {
  text: "Hi! This is the clinic's messaging line. Ask about hours, pricing, or try booking a time.",
}
