import type { FaqItem } from "./faq"

export type IndustrySlug = "dental" | "restaurants" | "salons" | "trades" | "retail"

export type IndustryPain = {
  title: string
  description: string
}

export type IndustryPageData = {
  slug: IndustrySlug
  name: string
  eyebrow: string
  headline: string
  headlineAccent: string
  painHook: string
  pains: [IndustryPain, IndustryPain, IndustryPain]
  janiceTitle: string
  janiceCapabilities: { title: string; description: string }[]
  liveEyebrow: string
  liveTitle: string
  liveDescription: string
  faq: FaqItem[]
  calculatorHref: `/tools/savings/${IndustrySlug}`
}

export type IndustryCard = {
  slug: IndustrySlug
  name: string
  painHook: string
  href: `/industries/${IndustrySlug}`
  calculatorHref: `/tools/savings/${IndustrySlug}`
}

export const INDUSTRY_CARDS: IndustryCard[] = [
  {
    slug: "dental",
    name: "Dental & Health",
    painHook: "New-patient calls to voicemail, no-shows, missed recalls.",
    href: "/industries/dental",
    calculatorHref: "/tools/savings/dental",
  },
  {
    slug: "restaurants",
    name: "Restaurants",
    painHook: "Missed reservation calls, unanswered reviews, no-shows.",
    href: "/industries/restaurants",
    calculatorHref: "/tools/savings/restaurants",
  },
  {
    slug: "salons",
    name: "Salons & Spas",
    painHook: "Empty chairs, after-hours DMs, clients who never rebook.",
    href: "/industries/salons",
    calculatorHref: "/tools/savings/salons",
  },
  {
    slug: "trades",
    name: "Trades",
    painHook: "Calls missed on the job, quotes gone cold.",
    href: "/industries/trades",
    calculatorHref: "/tools/savings/trades",
  },
  {
    slug: "retail",
    name: "Retail",
    painHook: "One-time buyers, unanswered questions, slow weeks.",
    href: "/industries/retail",
    calculatorHref: "/tools/savings/retail",
  },
]

/** Informational sub-pages — placeholder copy for Leone to expand */
export type IndustrySubPage = {
  slug: string
  parent: IndustrySlug
  title: string
  eyebrow: string
  headline: string
  subcopy: string
  href: string
}

export const INDUSTRY_SUB_PAGES: IndustrySubPage[] = [
  {
    slug: "single-location",
    parent: "dental",
    title: "Single-Location Clinics",
    eyebrow: "Dental · Independent practice",
    headline: "One desk. Every call answered.",
    subcopy:
      "Placeholder — solutions Janice provides for independent and single-location dental clinics. Leone to expand.",
    href: "/industries/dental/single-location",
  },
  {
    slug: "multi-location",
    parent: "dental",
    title: "Multi-Location Groups",
    eyebrow: "Dental · Multi-location",
    headline: "One system across every location.",
    subcopy:
      "Placeholder — solutions for multi-location dental groups. Leone to expand.",
    href: "/industries/dental/multi-location",
  },
]

export const COVERAGE_REGIONS = [
  {
    name: "Vancouver & Downtown",
    desc: "Restaurants, retail, professional services",
  },
  {
    name: "Burnaby & New Westminster",
    desc: "Trades, wellness clinics, food service",
  },
  {
    name: "Surrey & Langley",
    desc: "Growing businesses ready to scale",
  },
  {
    name: "North Shore & Tri-Cities",
    desc: "Local operators, service-based businesses",
  },
  {
    name: "Richmond & Delta",
    desc: "Retail, hospitality, e-commerce",
  },
] as const

export const COVERAGE_FOOTNOTE = "Accepting new clients across BC"

export const INDUSTRY_SLUGS: IndustrySlug[] = [
  "dental",
  "restaurants",
  "salons",
  "trades",
  "retail",
]

export function getIndustryPage(slug: string): IndustryPageData | undefined {
  return INDUSTRY_PAGES[slug as IndustrySlug]
}

export const INDUSTRY_PAGES: Record<IndustrySlug, IndustryPageData> = {
  dental: {
    slug: "dental",
    name: "Dental & Health",
    eyebrow: "Dental & Health · Vancouver, BC",
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
    janiceTitle: "What Janice does for your clinic",
    janiceCapabilities: [
      { title: "Answers every new-patient call", description: "Missed-call text-back in seconds — before they call someone else." },
      { title: "Books into your real schedule", description: "Open times from your practice software, straight into the calendar." },
      { title: "Fills cancellations from waitlist", description: "The moment a slot opens, Janice offers it and books the first yes." },
      { title: "Sends recalls and reminders", description: "Fewer no-shows, more patients back on the hygiene schedule." },
    ],
    liveEyebrow: "Live automation",
    liveTitle: "Waitlist fills cancellations in minutes",
    liveDescription: "When a patient cancels, Janice texts your waitlist and books the first open slot — no front-desk scramble.",
    faq: [
      { question: "Is patient information kept private?", answer: "Privacy comes first. Janice handles scheduling without exposing sensitive health details, and you stay in control of anything that needs a human." },
      { question: "Will it sound robotic to my patients?", answer: "No. We train Janice on your clinic's tone. You approve the voice before she speaks to a patient." },
      { question: "Does it work with our practice software?", answer: "Yes. Janice works alongside the phone and scheduling tools your office already uses." },
      { question: "How long until Janice is live?", answer: "Usually about a week from our first call — setup, test, fine-tune, then go live." },
      { question: "How much does it cost?", answer: "It depends on what you automate. The discovery call is free, and we scope a flat-priced plan around your call volume and chair count." },
    ],
    calculatorHref: "/tools/savings/dental",
  },
  restaurants: {
    slug: "restaurants",
    name: "Restaurants",
    eyebrow: "Restaurants · Vancouver, BC",
    headline: "Every table filled.",
    headlineAccent: "Every call answered.",
    painHook: "Missed reservation calls, unanswered reviews, no-shows.",
    pains: [
      {
        title: "Reservation calls go unanswered",
        description: "The host is slammed and a party of four books somewhere else.",
      },
      {
        title: "No-shows leave tables empty",
        description: "A cancelled cover on a Friday night is revenue you cannot get back.",
      },
      {
        title: "Reviews sit unanswered",
        description: "Happy guests rarely leave a rating unless someone asks at the right moment.",
      },
    ],
    janiceTitle: "What Janice does for your restaurant",
    janiceCapabilities: [
      { title: "Answers reservation calls", description: "Missed-call text-back with real table availability — even during the dinner rush." },
      { title: "Books and confirms covers", description: "Reservations land in OpenTable, Toast, or whatever you already run." },
      { title: "Fills cancellations from waitlist", description: "A no-show becomes a booked table within minutes." },
      { title: "Drafts review replies", description: "On-brand responses ready for your quick approval." },
    ],
    liveEyebrow: "Live automation",
    liveTitle: "Waitlist turns no-shows into covers",
    liveDescription: "When a table opens, Janice texts your waitlist and locks in the first yes — zero host time.",
    faq: [
      { question: "Will Janice know our menu and hours?", answer: "Yes. We train her on your menu, hours, policies, and tone before she goes live." },
      { question: "Does it work with our reservation system?", answer: "Janice connects to OpenTable, Toast, Resy, and other tools your team already uses." },
      { question: "What about busy Friday nights?", answer: "That is when missed calls hurt most. Janice handles overflow so your host can focus on the floor." },
      { question: "How long until Janice is live?", answer: "Usually about a week from our first call." },
      { question: "How much does it cost?", answer: "Pricing depends on locations and call volume. The discovery call is free." },
    ],
    calculatorHref: "/tools/savings/restaurants",
  },
  salons: {
    slug: "salons",
    name: "Salons & Spas",
    eyebrow: "Salons & Spas · Vancouver, BC",
    headline: "Every chair booked.",
    headlineAccent: "Every DM answered.",
    painHook: "Empty chairs, after-hours DMs, clients who never rebook.",
    pains: [
      {
        title: "After-hours DMs go cold",
        description: "A client messages at 9 PM and books with whoever replies first.",
      },
      {
        title: "Cancellations leave chairs empty",
        description: "A last-minute cancel on a Saturday is revenue walking out the door.",
      },
      {
        title: "Clients never rebook",
        description: "Without a nudge, regulars quietly stretch their visits further apart.",
      },
    ],
    janiceTitle: "What Janice does for your salon",
    janiceCapabilities: [
      { title: "Replies on every channel", description: "Instagram, SMS, web chat — answered in your voice, around the clock." },
      { title: "Books with real stylist availability", description: "Open times from Fresha, Vagaro, Booksy, or your booking tool." },
      { title: "Fills cancellations from waitlist", description: "Waitlist outreach the moment a slot opens." },
      { title: "Nudges clients to rebook", description: "Gentle follow-ups that bring regulars back on schedule." },
    ],
    liveEyebrow: "Live automation",
    liveTitle: "Waitlist refills cancelled chairs",
    liveDescription: "A cancellation triggers an instant waitlist text — the chair is full again before your team notices.",
    faq: [
      { question: "Will Janice match our salon's vibe?", answer: "Yes. We train her on your tone and services. You approve everything before she goes live." },
      { question: "Does it work with our booking software?", answer: "Janice connects to Fresha, Vagaro, Booksy, Mindbody, and other tools you already use." },
      { question: "Can she handle Instagram DMs?", answer: "Yes. Phone, SMS, Instagram, web chat, and email — from one place." },
      { question: "How long until Janice is live?", answer: "Usually about a week from our first call." },
      { question: "How much does it cost?", answer: "Pricing depends on locations and message volume. The discovery call is free." },
    ],
    calculatorHref: "/tools/savings/salons",
  },
  trades: {
    slug: "trades",
    name: "Trades",
    eyebrow: "Trades · Vancouver, BC",
    headline: "Every call booked.",
    headlineAccent: "Every quote followed up.",
    painHook: "Calls missed on the job, quotes gone cold.",
    pains: [
      {
        title: "Calls missed on the job",
        description: "You are on a roof or under a sink when the phone rings — and they call the next contractor.",
      },
      {
        title: "After-hours leads go cold",
        description: "A homeowner with a leak calls at 7 PM and books whoever answers first.",
      },
      {
        title: "Quotes never followed up",
        description: "You sent an estimate last week and never heard back — because nobody followed up.",
      },
    ],
    janiceTitle: "What Janice does for your trade business",
    janiceCapabilities: [
      { title: "Answers every missed call", description: "Text-back in seconds with a real availability window — even when you are on site." },
      { title: "Books jobs on your calendar", description: "Open slots from Jobber, ServiceTitan, or your dispatch tool." },
      { title: "Qualifies leads before you call back", description: "Job type, urgency, and address — so you know what you are walking into." },
      { title: "Follows up on open quotes", description: "Gentle nudges that turn estimates into booked work." },
    ],
    liveEyebrow: "Live automation",
    liveTitle: "Missed calls become booked jobs",
    liveDescription: "Janice holds a real time window, confirms with your team, then books — no false promises to the customer.",
    faq: [
      { question: "Will Janice promise jobs I cannot do?", answer: "No. She holds a window and confirms with your team before locking anything in." },
      { question: "Does it work with Jobber or ServiceTitan?", answer: "Yes. Janice connects to the dispatch and scheduling tools you already run." },
      { question: "What about emergency calls?", answer: "You set the rules. Janice can flag urgent jobs and route them to the right person." },
      { question: "How long until Janice is live?", answer: "Usually about a week from our first call." },
      { question: "How much does it cost?", answer: "Pricing depends on crew size and call volume. The discovery call is free." },
    ],
    calculatorHref: "/tools/savings/trades",
  },
  retail: {
    slug: "retail",
    name: "Retail",
    eyebrow: "Retail · Vancouver, BC",
    headline: "Every question answered.",
    headlineAccent: "Every buyer brought back.",
    painHook: "One-time buyers, unanswered questions, slow weeks.",
    pains: [
      {
        title: "Questions go unanswered",
        description: "A shopper asks about sizing or stock and never gets a reply — so they buy elsewhere.",
      },
      {
        title: "One-time buyers never return",
        description: "A great first visit with no follow-up means they forget you exist.",
      },
      {
        title: "Slow weeks with no outreach",
        description: "You have loyal customers who would shop — if someone reminded them.",
      },
    ],
    janiceTitle: "What Janice does for your shop",
    janiceCapabilities: [
      { title: "Answers product questions", description: "Stock, sizing, hours — replied instantly on SMS, chat, and social." },
      { title: "Sends back-in-stock alerts", description: "The moment inventory lands, Janice texts customers who asked." },
      { title: "Re-engages lapsed buyers", description: "Win-back messages that bring one-time visitors back." },
      { title: "Handles order follow-ups", description: "Pickup reminders and review requests at the right moment." },
    ],
    liveEyebrow: "Live automation",
    liveTitle: "Back-in-stock alerts turn nos into sales",
    liveDescription: "When inventory lands, Janice texts everyone who asked — a sold-out no becomes a sale in minutes.",
    faq: [
      { question: "Does Janice know our inventory?", answer: "Janice connects to Shopify, Square, Lightspeed, and other systems you already use." },
      { question: "Can she answer product questions?", answer: "Yes. We train her on your catalog, policies, and tone." },
      { question: "What channels does she work on?", answer: "Phone, SMS, Instagram, web chat, and email — from one dashboard." },
      { question: "How long until Janice is live?", answer: "Usually about a week from our first call." },
      { question: "How much does it cost?", answer: "Pricing depends on locations and message volume. The discovery call is free." },
    ],
    calculatorHref: "/tools/savings/retail",
  },
}

/** Link to the per-industry savings calculator — for industry pages and cards. */
export function getIndustryCalculatorHref(slug: IndustrySlug): `/tools/savings/${IndustrySlug}` {
  return `/tools/savings/${slug}`
}
