export const JANICE_CAPABILITIES = [
  {
    title: "Answers every call",
    label: "Calls",
    description: "Missed-call text-back in seconds — before they call someone else.",
  },
  {
    title: "Replies on every channel",
    label: "Messaging",
    description: "Phone, SMS, social, web chat, and email from one place.",
  },
  {
    title: "Books & reschedules",
    label: "Booking",
    description: "Real open times, straight into the calendar you already use.",
  },
  {
    title: "Fills cancellations",
    label: "Recovery",
    description: "Waitlist outreach the moment a slot opens.",
  },
  {
    title: "Confirms & reminds",
    label: "Reminders",
    description: "Fewer no-shows, more customers back on schedule.",
  },
  {
    title: "Follows up & earns reviews",
    label: "Follow-up",
    description: "Quote follow-ups and review requests at the right moment.",
  },
] as const

export const JANICE_CHANNELS = [
  "Phone calls",
  "SMS",
  "Instagram",
  "Web chat",
  "Email",
] as const

export const JANICE_STATS = [
  { value: "24/7", label: "Always on" },
  { value: "<30s", label: "To reply" },
  { value: "5", label: "Channels" },
] as const

export const SOLUTION_PILLARS = [
  {
    title: "Answers every lead in seconds",
    description: "Missed calls texted back. Messages answered around the clock.",
  },
  {
    title: "Turns interest into booked jobs",
    description: "Real open times. Waitlist fills cancellations into your calendar.",
  },
  {
    title: "Builds a 5-star reputation",
    description: "On-brand review replies. More ratings from happy customers.",
  },
  {
    title: "Custom-built around your business",
    description: "Workflows and a live dashboard around the tools you already run.",
  },
] as const

export const WHY_US_PILLARS = [
  { title: "No jargon", description: "Plain English. If you don't understand it, we haven't done our job." },
  { title: "Speed to value", description: "Working prototype in week one." },
  { title: "Built to deliver", description: "Six-month engagements. Transparent pricing upfront." },
  { title: "Local & hands-on", description: "Vancouver-based. We meet at your shop when you want." },
] as const

export const PROCESS_STEPS = [
  { step: 1, title: "Discovery Call", description: "15 min — find time and money leaks. No sales pitch." },
  { step: 2, title: "Deep-Dive Session", description: "Map workflow, pick automations." },
  { step: 3, title: "Custom Build", description: "Working prototype within the first week." },
  { step: 4, title: "Launch & Train", description: "Deploy and walk your team through it." },
  { step: 5, title: "Optimize & Support", description: "Ongoing monitoring as you grow." },
] as const

export const SITE_CONTACT = {
  email: "hello@pacificedge.ai",
  location: "Vancouver, BC",
  calUrl: "https://cal.com/pacificedge",
} as const

export const WHY_US_INTRO =
  "Operators, not agencies. We sell time back — face-to-face when you want it."

export const PRICING = {
  headline: "Your first month is on us",
  body: "Try it for a full month free. See the bookings, the hours saved, the calls that didn't go to voicemail.",
  terms:
    "After your free month, engagements run an initial six months — long enough to prove ROI. Transparent pricing upfront. Then month-to-month, scale up, or part ways with full handover docs.",
  cta: "Book Your Free Setup Call",
} as const
