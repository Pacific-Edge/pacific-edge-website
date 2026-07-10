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
  platformTitle: string
  platformCapabilities: { title: string; description: string }[]
  liveEyebrow: string
  liveTitle: string
  liveDescription: string
  faq: FaqItem[]
  calculatorHref: "/tools/savings/dental"
}

export const CLINICS_PAGE: ClinicsPageData = {
  eyebrow: "Dental Clinics · Vancouver, BC",
  headline: "Fill the schedule.",
  headlineAccent: "Reduce no-shows.",
  painHook: "New-patient calls to voicemail, no-shows, missed recalls.",
  pains: [
    {
      title: "New-patient calls hit voicemail",
      description: "The line is busy and a new patient calls the clinic down the block.",
    },
    {
      title: "No-shows and late cancellations",
      description: "An empty chair is wasted clinical time with no way to backfill it.",
    },
    {
      title: "Recalls slip through the cracks",
      description: "Patients due for a cleaning never get the nudge and quietly drift away.",
    },
  ],
  platformTitle: "Built for your reception team",
  platformCapabilities: [
    {
      title: "Optimizes the booking schedule",
      description:
        "A clear view of open chairs and provider time, so your receptionist can fill the day with confidence.",
    },
    {
      title: "Manages cancellations with ease",
      description:
        "When a slot opens, the waitlist is surfaced instantly. Your team confirms the offer and books the patient.",
    },
    {
      title: "Insurance coordination (in development)",
      description:
        "Integrations to simplify benefit checks and claims handoff between receptionist and patient.",
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
    "When a patient cancels, your waitlist is ready. Your receptionist confirms the offer and the chair is filled without a scramble.",
  faq: [
    {
      question: "Is patient information kept private?",
      answer:
        "Privacy comes first. Scheduling runs without exposing sensitive health details, and your team stays in control of anything that needs a human.",
    },
    {
      question: "Does this replace our receptionist?",
      answer:
        "No. We are not building an AI receptionist. The platform is designed to help your front desk team work faster and keep the schedule full.",
    },
    {
      question: "Does it work with our practice software?",
      answer:
        "Yes. It connects to Tracker, Dentrix, Open Dental, and the scheduling tools your office already uses.",
    },
    {
      question: "How long until we are live?",
      answer: "Usually about a week from our first call: setup, test, fine-tune, then go live.",
    },
    {
      question: "How much does it cost?",
      answer:
        "It depends on what you need. The discovery call is free, and we scope a flat-priced plan around your call volume and chair count.",
    },
  ],
  calculatorHref: "/tools/savings/dental",
}
