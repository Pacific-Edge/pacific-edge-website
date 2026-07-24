import type { ScriptedChatScript } from "./scripted-chat-types"

export const SCRIPTED_CHATS: Record<string, ScriptedChatScript> = {
  dental: {
    industry: "dental",
    businessName: "Cedar Dental",
    headerSub: "Front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Mon 9:12 AM · Missed call" },
      {
        type: "customer",
        text: "Hi, do you take new patients? I chipped a tooth and it's a bit sore.",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "So sorry to hear that! Yes, we're welcoming new patients. We have an exam open tomorrow at 10:40 AM, want me to book it?",
        delayMs: 200,
        meta: "Auto-reply · 21s after the missed call",
      },
      { type: "customer", text: "Yes please, thank you", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "Booked! Tomorrow 10:40 AM with Dr. Lee. I'll text your new-patient form and a reminder.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Do you take Sun Life? And should I bring anything with me?",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "Yep, we're in-network with Sun Life. Just bring your card and a photo ID, we'll handle the rest.",
        delayMs: 200,
      },
      { type: "customer", text: "Perfect, see you tomorrow!", delayMs: 600 },
      {
        type: "badge",
        text: "New patient booked from a missed call. Intake and reminder queued.",
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
        type: "assistant",
        text: "Hi Jordan! A balayage spot with Alexa just opened today at 1:30 PM. Want me to grab it for you?",
        delayMs: 700,
        meta: "Auto-sent · 2 min after a cancellation",
      },
      { type: "customer", text: "Omg yes please!!", delayMs: 300 },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "Done, you're booked at 1:30 with Alexa. I'll send a reminder beforehand, see you this afternoon!",
        delayMs: 900,
      },
      { type: "customer", text: "Perfect — is parking easy near you?", delayMs: 750 },
      { type: "typing", durationMs: 950 },
      {
        type: "assistant",
        text: "There's a lot right behind the salon, first hour free. See you at 1:30!",
        delayMs: 200,
      },
      {
        type: "badge",
        text: "Cancelled chair refilled from your waitlist in 4 minutes.",
        delayMs: 900,
      },
    ],
  },
  restaurants: {
    industry: "restaurants",
    businessName: "Wildfire Kitchen",
    headerSub: "AI host · replies instantly",
    bubbles: [
      { type: "timestamp", text: "Fri 7:14 PM · Missed call" },
      {
        type: "customer",
        text: "Hi! Any chance you could fit 4 of us in tonight around 7:30?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "Hi, this is Wildfire Kitchen! We have a 7:45 table for 4, want me to lock it in?",
        delayMs: 200,
        meta: "Auto-reply · 19s after the missed call",
      },
      { type: "customer", text: "Perfect, yes please", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "Booked for 7:45, party of 4 under your name. Reply C to change anytime. See you tonight!",
        delayMs: 200,
      },
      {
        type: "badge",
        text: "Table booked and added to tonight's covers. Zero host time spent.",
        delayMs: 650,
      },
    ],
  },
  trades: {
    industry: "trades",
    businessName: "Coastal Plumbing & Heating",
    headerSub: "AI line · confirms before booking",
    bubbles: [
      { type: "timestamp", text: "Wed 2:38 PM · Missed call" },
      {
        type: "customer",
        text: "Hi, my water heater is leaking, can someone come out today?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "Sorry to hear that! I can hold a 4–6 PM window today and confirm with the team before locking it in. Want me to?",
        delayMs: 200,
        meta: "Auto-reply · 16s after the missed call",
      },
      { type: "customer", text: "Yes please, that would be great", delayMs: 850 },
      { type: "typing", durationMs: 1300 },
      {
        type: "assistant",
        text: "Holding 4–6 PM and checking with the team now, one sec…",
        delayMs: 200,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "Confirmed! Mike's locked in for 4–6 PM and will text when he's on the way. If anything changes, I'll reach out right away.",
        delayMs: 200,
      },
      {
        type: "badge",
        text: "Held, confirmed with your team, then booked, so a tech is never promised when they can't make it.",
        delayMs: 650,
      },
    ],
  },
  "front-desk-demo": {
    industry: "front-desk-demo",
    businessName: "Eaglewood Dental",
    headerSub: "Waitlist · auto-outreach",
    bubbles: [
      { type: "timestamp", text: "Tue 2:14 PM · Waitlist outreach" },
      {
        type: "assistant",
        text: "Hi Jordan! A hygiene slot just opened today at 3:30 PM. Want me to grab it for you?",
        delayMs: 700,
        meta: "Auto-sent · 2 min after a cancellation",
      },
      { type: "customer", text: "Yes, that works great.", delayMs: 300 },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "Done, you're booked at 3:30 with Dr. Chen. I'll send a reminder beforehand.",
        delayMs: 900,
      },
      {
        type: "customer",
        text: "How long does a cleaning usually take? I've got a 4:15 after this.",
        delayMs: 800,
      },
      { type: "typing", durationMs: 950 },
      {
        type: "assistant",
        text: "Usually about 30-40 minutes, so you'll be out with plenty of time to spare.",
        delayMs: 200,
      },
      { type: "customer", text: "Great, thank you!", delayMs: 550 },
      {
        type: "badge",
        text: "Cancelled chair refilled from your waitlist in 4 minutes.",
        delayMs: 900,
      },
    ],
  },
}

export function getScriptedChat(industry: string): ScriptedChatScript | undefined {
  return SCRIPTED_CHATS[industry]
}
