import type { ScriptedChatScript } from "./scripted-chat-types"

export const SCRIPTED_CHATS: Record<string, ScriptedChatScript> = {
  dental: {
    industry: "dental",
    businessName: "Cedar Dental",
    headerSub: "AI desk · replies instantly",
    bubbles: [
      { type: "timestamp", text: "Mon 9:12 AM · Missed call" },
      {
        type: "customer",
        text: "Hi, do you take new patients? I chipped a tooth and it's a bit sore.",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "janice",
        text: "So sorry to hear that! Yes, we're welcoming new patients. We have an exam open tomorrow at 10:40 AM — want me to book it?",
        delayMs: 200,
        meta: "Auto-reply · 21s after the missed call",
      },
      { type: "customer", text: "Yes please, thank you", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "janice",
        text: "Booked! Tomorrow 10:40 AM with Dr. Lee. I'll text your new-patient form and a reminder.",
        delayMs: 200,
      },
      {
        type: "badge",
        text: "New patient booked from a missed call. Intake and reminder queued.",
        delayMs: 650,
      },
    ],
  },
  restaurants: {
    industry: "restaurants",
    businessName: "Wildfire Kitchen",
    headerSub: "AI desk · replies instantly",
    bubbles: [
      { type: "timestamp", text: "Fri 7:14 PM · Missed call" },
      {
        type: "customer",
        text: "Hi! Any chance you could fit 4 of us in tonight around 7:30?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "janice",
        text: "Hi, this is Wildfire Kitchen! We have a 7:45 table for 4 — want me to lock it in?",
        delayMs: 200,
        meta: "Auto-reply · 19s after the missed call",
      },
      { type: "customer", text: "Perfect, yes please", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "janice",
        text: "Booked for 7:45, party of 4. Reply C to change anytime. See you tonight!",
        delayMs: 200,
      },
      {
        type: "badge",
        text: "Table booked and added to tonight's covers. Zero host time spent.",
        delayMs: 650,
      },
    ],
  },
  salons: {
    industry: "salons",
    businessName: "Luxe Hair Studio",
    headerSub: "Waitlist · auto-outreach",
    bubbles: [
      { type: "timestamp", text: "Sat 9:14 AM · Waitlist outreach" },
      {
        type: "janice",
        text: "Hi Jordan! A balayage spot with Alexa just opened today at 1:30 PM. Want me to grab it for you?",
        delayMs: 400,
        meta: "Auto-sent · 2 min after a cancellation",
      },
      { type: "customer", text: "Omg yes please!!", delayMs: 200 },
      {
        type: "janice",
        text: "Done — you're booked at 1:30 with Alexa. I'll send a reminder beforehand.",
        delayMs: 900,
      },
      {
        type: "badge",
        text: "Cancelled chair refilled from your waitlist in 4 minutes.",
        delayMs: 650,
      },
    ],
  },
  trades: {
    industry: "trades",
    businessName: "Coastal Plumbing & Heating",
    headerSub: "AI desk · replies instantly",
    bubbles: [
      { type: "timestamp", text: "Wed 2:38 PM · Missed call" },
      {
        type: "customer",
        text: "Hi, my water heater is leaking, can someone come out today?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "janice",
        text: "Sorry to hear that! I can hold a 4–6 PM window today and confirm with the team before locking it in. Want me to?",
        delayMs: 200,
        meta: "Auto-reply · 16s after the missed call",
      },
      { type: "customer", text: "Yes please, that would be great", delayMs: 850 },
      { type: "typing", durationMs: 1100 },
      {
        type: "janice",
        text: "Confirmed! Mike's locked in for 4–6 PM and will text when he's on the way.",
        delayMs: 200,
      },
      {
        type: "badge",
        text: "Held, confirmed with your team, then booked — no false promises to the customer.",
        delayMs: 650,
      },
    ],
  },
  retail: {
    industry: "retail",
    businessName: "North Arm Goods",
    headerSub: "Back-in-stock alert",
    bubbles: [
      { type: "timestamp", text: "Thu 10:05 AM · Back-in-stock alert" },
      {
        type: "janice",
        text: "Hi Mara! The olive linen jacket you asked about is back in your size (M). Want me to hold one for you?",
        delayMs: 400,
        meta: "Auto-sent · the moment it landed",
      },
      { type: "customer", text: "Yes!! Please hold it", delayMs: 200 },
      {
        type: "janice",
        text: "Done — holding 1 for you at the counter until 6 PM tomorrow.",
        delayMs: 900,
      },
      {
        type: "badge",
        text: "A sold-out no turned into a sale the second stock landed.",
        delayMs: 650,
      },
    ],
  },
}

export function getScriptedChat(industry: string): ScriptedChatScript | undefined {
  return SCRIPTED_CHATS[industry]
}
