import type { ScriptedChatScript } from "./scripted-chat-types"

export const SCRIPTED_CHATS: Record<string, ScriptedChatScript> = {
  dental: {
    industry: "dental",
    businessName: "Coast Salon & Spa",
    headerSub: "Front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Mon 9:12 AM · Missed call" },
      {
        type: "customer",
        text: "Hi, do you have any openings this week? I'd love a cut and color.",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "We'd love to fit you in! We have an opening tomorrow at 10:40 AM, want me to book it?",
        delayMs: 200,
        meta: "Auto-reply · 21s after the missed call",
      },
      { type: "customer", text: "Yes please, thank you", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "Booked! Tomorrow 10:40 AM with Priya. I'll text a confirmation and a reminder.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Do you take walk-ins too? And should I bring anything with me?",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "We do when there's space! Just come as you are, we'll handle the rest.",
        delayMs: 200,
      },
      { type: "customer", text: "Perfect, see you tomorrow!", delayMs: 600 },
      {
        type: "badge",
        text: "New customer booked from a missed call. Reminder queued.",
        delayMs: 650,
      },
    ],
  },
  "front-desk-demo": {
    industry: "front-desk-demo",
    businessName: "The Grove Table",
    headerSub: "Front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Fri 6:42 PM · Missed call" },
      {
        type: "customer",
        text: "Hi, do you have a table for 2 tonight around 7:30?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "We do! I can grab that 7:30 table for two right now, want me to book it?",
        delayMs: 200,
        meta: "Auto-reply · 18s after the missed call",
      },
      { type: "customer", text: "Yes please, thank you", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "Booked! Table for 2 at 7:30. I'll text a confirmation and a reminder beforehand.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Perfect. Do you have a patio table? We'd love to sit outside.",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "You're in luck, I've moved your reservation to our patio section for 7:30.",
        delayMs: 200,
      },
      { type: "customer", text: "Amazing, see you tonight!", delayMs: 600 },
      {
        type: "badge",
        text: "New reservation booked from a missed call. Reminder queued.",
        delayMs: 650,
      },
    ],
  },
}

export function getScriptedChat(industry: string): ScriptedChatScript | undefined {
  return SCRIPTED_CHATS[industry]
}
