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
  { title: "Local & hands-on", description: "Vancouver-based. We meet at your clinic when you want." },
] as const

export const PROCESS_STEPS = [
  { step: 1, title: "Discovery Call", description: "15 min: find time and money leaks. No sales pitch." },
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
  "Operators, not agencies. We sell time back, face-to-face when you want it."

export const PRICING = {
  headline: "Your first month is on us",
  body: "Try it for a full month free. See the appointments booked, the hours saved, the calls that didn't go to voicemail.",
  tiers: [
    {
      name: "Standard",
      price: { monthly: 349, yearly: 3350 },
      description: "For single-location clinics that need calls, messages, bookings, and reviews handled cleanly.",
      features: [
        "Missed-call text-back",
        "Booking and reminder flows",
        "Review reply support",
        "Calendar synced to your existing tools",
        "Plain-English onboarding and training",
      ],
      isFeatured: false,
    },
    {
      name: "Professional",
      price: { monthly: 749, yearly: 7190 },
      description: "For busier front desks with more channels, waitlists, recalls, and reporting needs.",
      features: [
        "Everything in Standard",
        "Waitlist and cancellation recovery",
        "Dashboard and workflow reporting",
        "Multi-channel inbox — calls, texts, DMs",
        "Recall and follow-up sequences",
      ],
      isFeatured: true,
    },
    {
      name: "Custom",
      price: { monthly: 1149, yearly: 11030 },
      description: "For multi-location or higher-volume clinics that need deeper workflows around their tools.",
      features: [
        "Everything in Professional",
        "Custom integration buildout",
        "Priority optimization support",
        "Multi-location rollouts",
        "Dedicated workflow tuning sessions",
      ],
      isFeatured: false,
    },
  ],
  variance: "Exact fit depends on location count and message volume. We confirm the right tier on the call.",
  terms:
    "After your free month, engagements run an initial six months, long enough to prove ROI. Transparent pricing upfront. Then month-to-month, scale up, or part ways with full handover docs.",
  cta: "Book Your Free Setup Call",
} as const

/** Plans shaped for the interactive pricing table. */
export const PRICING_PLANS = PRICING.tiers.map((tier) => ({
  title: tier.name,
  price: tier.price,
  description: tier.description,
  features: [...tier.features],
  ctaText: PRICING.cta,
  ctaHref: "/contact",
  isFeatured: tier.isFeatured,
  accent: tier.isFeatured ? ("blue" as const) : tier.name === "Custom" ? ("dark" as const) : ("default" as const),
}))
