import type { FaqItem } from "./faq"

export type ClinicPain = {
  title: string
  description: string
}

export type ClinicsPageData = {
  eyebrow: string
  headline: string
  headlineAccent: string
  painHook: string
  pains: [ClinicPain, ClinicPain, ClinicPain]
  /** Category 1 — AI Automations. Front-desk-first: assists staff, never replaces them. */
  aiAutomations: {
    heading: string
    lead: string
    items: { title: string; description: string }[]
  }
  /** Category 2 — Custom Software (the shipped cancellation-fill platform). */
  customSoftwareLead: string
  platformTitle: string
  platformCapabilities: { title: string; description: string }[]
  liveEyebrow: string
  liveTitle: string
  liveDescription: string
  faq: FaqItem[]
  calculatorHref: "/tools/savings/dental"
}

export const CLINICS_PAGE: ClinicsPageData = {
  eyebrow: "Local Business Software · Vancouver, BC",
  headline: "Fill the schedule.",
  headlineAccent: "Reduce no-shows.",
  painHook: "Missed calls to voicemail, no-shows, follow-ups that slip.",
  pains: [
    {
      title: "New-customer calls hit voicemail",
      description: "The line is busy and a new customer calls the business down the block.",
    },
    {
      title: "No-shows and late cancellations",
      description: "An empty slot is wasted time with no easy way to backfill it.",
    },
    {
      title: "Follow-ups slip through the cracks",
      description: "Customers who meant to rebook never get the nudge and quietly drift away.",
    },
  ],
  aiAutomations: {
    heading: "Calls answered, reviews handled",
    lead: "Automations that back up your front desk, never replace it. Anything clinical stays with a human.",
    items: [
      {
        title: "Missed-call text-back",
        description: "A missed call gets a friendly reply in seconds, offering the caller a real opening.",
      },
      {
        title: "Review management",
        description: "On-brand replies to every review, and a nudge for happy patients to leave a rating.",
      },
      {
        title: "Patient texting",
        description: "Hours, insurance, and prep questions answered around the clock, with anything clinical handed to your team.",
      },
    ],
  },
  customSoftwareLead:
    "The system we built for dental clinics: when an appointment cancels, it matches the open slot to the right patient and fills it from your waitlist in minutes.",
  platformTitle: "Built for your front desk",
  platformCapabilities: [
    {
      title: "Optimizes the booking schedule",
      description:
        "A clear view of open slots and team availability, so your front desk can fill the day with confidence.",
    },
    {
      title: "Manages cancellations with ease",
      description:
        "When a slot opens, the waitlist is surfaced instantly. Your team confirms the offer and books the customer.",
    },
    {
      title: "Review management",
      description:
        "On-brand replies to every review, and a nudge for happy customers to leave a rating.",
    },
    {
      title: "Payment systems (in development)",
      description:
        "Streamlined collections and payment plans, less back-and-forth at the front desk.",
    },
  ],
  liveEyebrow: "Live workflow",
  liveTitle: "Waitlist fills cancellations in minutes",
  liveDescription:
    "When a customer cancels, your waitlist is ready. Your team confirms the offer and the slot is filled without a scramble.",
  faq: [
    {
      question: "Is customer information kept private?",
      answer:
        "Privacy comes first. Scheduling runs without exposing sensitive details, and your team stays in control of anything that needs a human.",
    },
    {
      question: "Does this replace our front desk?",
      answer:
        "No. The focus is helping your front desk team work faster and keep the schedule full. Automated call answering is available if you want it, but replacing your team is never the goal.",
    },
    {
      question: "Does it work with our current software?",
      answer:
        "Yes. It connects to the booking, point-of-sale, and scheduling tools your business already uses.",
    },
    {
      question: "How long until we are live?",
      answer: "Usually about a week from our first call: setup, test, fine-tune, then go live.",
    },
    {
      question: "How much does it cost?",
      answer:
        "It depends on what you need. The discovery call is free, and we scope a flat-priced plan around your call and booking volume.",
    },
  ],
  calculatorHref: "/tools/savings/dental",
}
