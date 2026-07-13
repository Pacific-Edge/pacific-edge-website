import type { ScriptedChatScript } from "./scripted-chat-types"

export const SCRIPTED_CHATS: Record<string, ScriptedChatScript> = {
  dental: {
    industry: "dental",
    businessName: "Cedar Dental",
    headerSub: "Front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Tue 8:47 AM · Missed call" },
      {
        type: "customer",
        text: "Hi, I'm a new patient and I'd like to book a cleaning and checkup. Any openings soon?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "Welcome! We have a new-patient opening this Thursday at 2:15 PM, want me to hold it for you?",
        delayMs: 200,
        meta: "Auto-reply · 20s after the missed call",
      },
      { type: "customer", text: "Yes please, that works", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "You're penciled in for Thursday 2:15 PM. Our front desk will confirm and send your new-patient forms shortly.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Do you take my insurance? It's Pacific Blue Cross.",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "We do work with Pacific Blue Cross. The team will verify your coverage before the visit so there are no surprises.",
        delayMs: 200,
      },
      { type: "customer", text: "Perfect, thank you!", delayMs: 600 },
      {
        type: "badge",
        text: "New patient booked from a missed call. Front desk to confirm.",
        delayMs: 650,
      },
    ],
  },
  salons: {
    industry: "salons",
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
  "professional-services": {
    industry: "professional-services",
    businessName: "Beacon Law Group",
    headerSub: "Front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Tue 4:58 PM · Missed call" },
      {
        type: "customer",
        text: "Hi, I'd like to set up a consultation. Do you have anything this week?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "Happy to help! We have an opening Thursday at 2:00 PM, want me to hold it for you?",
        delayMs: 200,
        meta: "Auto-reply · 19s after the missed call",
      },
      { type: "customer", text: "Yes, that works. Thank you", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "Booked! Thursday 2:00 PM. I'll email a confirmation and send a reminder the day before.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Great. Should I bring any documents with me?",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "Just a photo ID and anything related to your matter. We'll take it from there.",
        delayMs: 200,
      },
      { type: "customer", text: "Perfect, see you Thursday", delayMs: 600 },
      {
        type: "badge",
        text: "New consultation booked from a missed call. Reminder queued.",
        delayMs: 650,
      },
    ],
  },
  trades: {
    industry: "trades",
    businessName: "Pinnacle Ridge Contracting",
    headerSub: "Front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Wed 11:24 AM · Missed call" },
      {
        type: "customer",
        text: "Hey, my water heater's leaking. Can someone come take a look today?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "Sorry to hear that! I can get a tech to you between 3 and 5 today, want me to lock it in?",
        delayMs: 200,
        meta: "Auto-reply · 22s after the missed call",
      },
      { type: "customer", text: "Yes please, that'd be great", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "You're booked for 3–5 today. I'll text the tech's name and an ETA when they're on the way.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Can I get a rough quote before then?",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "The service call is $120, applied to the repair. The tech will confirm the full quote on site.",
        delayMs: 200,
      },
      { type: "customer", text: "Sounds good, thanks", delayMs: 600 },
      {
        type: "badge",
        text: "New job booked from a missed call. Tech dispatched.",
        delayMs: 650,
      },
    ],
  },
  retail: {
    industry: "retail",
    businessName: "Harbour & Pine",
    headerSub: "Store front desk · auto-reply",
    bubbles: [
      { type: "timestamp", text: "Sat 2:07 PM · New message" },
      {
        type: "customer",
        text: "Hi! Do you still have the walnut side table in stock?",
        delayMs: 350,
      },
      { type: "typing", durationMs: 1200 },
      {
        type: "assistant",
        text: "We do! Two left in walnut. Want me to set one aside under your name for pickup?",
        delayMs: 200,
        meta: "Auto-reply · 15s after the message",
      },
      { type: "customer", text: "Yes please, that would be perfect", delayMs: 900 },
      { type: "typing", durationMs: 1100 },
      {
        type: "assistant",
        text: "Done! It's held for 48 hours. We're open until 6 today if you'd like to come by.",
        delayMs: 200,
      },
      {
        type: "customer",
        text: "Do you offer local delivery too?",
        delayMs: 750,
      },
      { type: "typing", durationMs: 1000 },
      {
        type: "assistant",
        text: "We do, flat $15 within Vancouver. I can add it at checkout if that's easier.",
        delayMs: 200,
      },
      { type: "customer", text: "Amazing, I'll take delivery", delayMs: 600 },
      {
        type: "badge",
        text: "Item held and delivery booked from a message. Sale saved.",
        delayMs: 650,
      },
    ],
  },
}

export function getScriptedChat(industry: string): ScriptedChatScript | undefined {
  return SCRIPTED_CHATS[industry]
}
