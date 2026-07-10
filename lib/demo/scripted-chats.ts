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
