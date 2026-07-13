export type FaqItem = {
  question: string
  answer: string
}

export const SITE_FAQ: FaqItem[] = [
  {
    question: "Do I need to be tech-savvy?",
    answer:
      "No. If you can use a smartphone, you can use what we build. We handle the technical work and walk you through everything in plain English.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most clients have a working prototype within the first week. Full deployment typically wraps in two to three weeks depending on complexity.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is custom-built around your workflows and team size. Book a free discovery call for a transparent quote, no hidden fees.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "Your first month is free. After that, engagements run an initial six months, long enough to prove ROI. Then month-to-month, scale up, or part ways with full handover docs.",
  },
  {
    question: "Will this work for my business?",
    answer:
      "If your business relies on appointments, customer calls and messages, or online reviews, the answer is almost certainly yes. We build around your industry and the tools you already use.",
  },
  {
    question: "Will my data be safe?",
    answer:
      "Yes. Encryption, restricted access, no selling your data. Your business data stays yours.",
  },
  {
    question: "What happens on the discovery call?",
    answer:
      "Fifteen minutes. We learn where you're losing time or money and which automations would help most. No pitch deck, no pressure.",
  },
]

export const PLATFORM_FAQ: FaqItem[] = [
  {
    question: "Does this replace my receptionist?",
    answer:
      "No. We are not building an AI receptionist. The platform helps your front desk team work faster and keeps sensitive conversations in human hands.",
  },
  {
    question: "Will messages sound robotic?",
    answer:
      "No. We configure replies around your business and tone. You approve messaging before anything goes live.",
  },
  {
    question: "What channels does the platform work across?",
    answer: "Phone, SMS, Instagram, web chat, and email, from one place, on your existing number.",
  },
  {
    question: "How does a cancelled spot get filled?",
    answer:
      "The moment a slot opens, the waitlist is surfaced. Your team confirms the offer and books the customer, so the time is not wasted.",
  },
  {
    question: "Do I stay in control?",
    answer:
      "Always. You set the rules, approve the tone, and can jump into any conversation at any time.",
  },
  {
    question: "How long until we are live?",
    answer: "Usually about a week from our first call: setup, test, fine-tune, then go live.",
  },
]
