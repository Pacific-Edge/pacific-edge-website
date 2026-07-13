export type IndustryService = {
  title: string
  description: string
}

export type IndustryConfig = {
  slug: string
  /** Label used in the nav sub-links. */
  navLabel: string
  eyebrow: string
  headline: string
  headlineAccent: string
  painHook: string
  services: IndustryService[]
  /** Key into SCRIPTED_CHATS for the phone-chat demo, or null for no demo. */
  demoKey: string | null
  integrations: readonly string[]
}

/**
 * Per-industry landing content for the dynamic /industries/[slug] route.
 * Healthcare is intentionally excluded — it lives on /clinics (see CLINICS_PAGE)
 * and, by design, has no AI phone receptionist.
 */
export const INDUSTRIES: Record<string, IndustryConfig> = {
  restaurants: {
    slug: "restaurants",
    navLabel: "Restaurants",
    eyebrow: "Restaurants · Vancouver, BC",
    headline: "Never miss a",
    headlineAccent: "reservation.",
    painHook: "Missed calls, unanswered reviews, and no-shows quietly cost you covers.",
    services: [
      {
        title: "AI phone receptionist",
        description:
          "Answers every reservation call and texts back missed calls, so a full line never sends a guest to the restaurant down the block.",
      },
      {
        title: "Review management",
        description:
          "On-brand replies to every review, and a nudge for happy guests to leave a rating.",
      },
      {
        title: "Custom software solutions",
        description:
          "Built around the tools you already run, from your point-of-sale to your reservation book.",
      },
    ],
    demoKey: "front-desk-demo",
    integrations: ["OpenTable", "Toast", "TouchBistro", "7shifts", "Lightspeed", "Resy"],
  },
  salons: {
    slug: "salons",
    navLabel: "Salon & Spa",
    eyebrow: "Salon & Spa · Vancouver, BC",
    headline: "Keep every chair",
    headlineAccent: "booked.",
    painHook: "Empty chairs, after-hours messages, and clients who never rebook.",
    services: [
      {
        title: "AI phone receptionist",
        description:
          "Books appointments and answers after-hours messages while your team keeps their hands busy.",
      },
      {
        title: "Booking system",
        description:
          "A clear view of open times, with the waitlist ready to fill any cancellation in minutes.",
      },
      {
        title: "Client recall",
        description:
          "Nudges past clients to rebook before they drift to the salon down the block.",
      },
    ],
    demoKey: "dental",
    integrations: ["Fresha", "Vagaro", "Booksy", "Mindbody", "GlossGenius", "Square Appointments"],
  },
  "professional-services": {
    slug: "professional-services",
    navLabel: "Professional Services",
    eyebrow: "Professional Services · Vancouver, BC",
    headline: "Never send a client",
    headlineAccent: "to voicemail.",
    painHook: "Missed calls, scheduling back-and-forth, and follow-ups that slip.",
    services: [
      {
        title: "AI phone receptionist",
        description:
          "Every call answered and every message replied to, so no new client hits voicemail.",
      },
      {
        title: "Online booking & scheduling",
        description:
          "Clients book real open times themselves, with no back-and-forth email chains.",
      },
      {
        title: "Client follow-up",
        description:
          "Reminders and check-ins keep engagements moving and clients close.",
      },
    ],
    demoKey: "professional-services",
    integrations: ["Calendly", "Acuity", "Google Calendar", "HubSpot", "QuickBooks", "Square"],
  },
  trades: {
    slug: "trades",
    navLabel: "Trades",
    eyebrow: "Trades & Home Services · Vancouver, BC",
    headline: "Win the job before",
    headlineAccent: "they call the next name.",
    painHook: "Calls missed on the job and quotes that quietly go cold.",
    services: [
      {
        title: "AI phone receptionist",
        description:
          "Missed calls get texted back in seconds while you're on the job, before the caller tries the next name on the list.",
      },
      {
        title: "Quote & job follow-up",
        description:
          "Every estimate gets a follow-up, so quotes turn into booked work instead of going cold.",
      },
      {
        title: "Review management",
        description:
          "On-brand replies to every review, and a nudge for happy customers to leave a rating.",
      },
    ],
    demoKey: "trades",
    integrations: ["Jobber", "ServiceTitan", "Housecall Pro", "ServiceM8", "HomeStars", "QuickBooks"],
  },
  retail: {
    slug: "retail",
    navLabel: "Retail",
    eyebrow: "Retail & Local Shops · Vancouver, BC",
    headline: "Turn one-time buyers",
    headlineAccent: "into regulars.",
    painHook: "One-time shoppers, unanswered questions, and slow weeks.",
    services: [
      {
        title: "Review management",
        description:
          "On-brand replies to every review, and a nudge for happy shoppers to leave a rating.",
      },
      {
        title: "Customer question answering",
        description:
          "Questions from your website, messages, and texts get answered around the clock.",
      },
      {
        title: "Custom software solutions",
        description:
          "Built around your point-of-sale and the tools you already run.",
      },
    ],
    demoKey: "retail",
    integrations: ["Shopify", "Lightspeed", "Square", "Clover", "WooCommerce", "Mailchimp"],
  },
}

export const INDUSTRY_SLUGS = Object.keys(INDUSTRIES)

export function getIndustry(slug: string): IndustryConfig | undefined {
  return INDUSTRIES[slug]
}

export function isIndustry(slug: string): boolean {
  return slug in INDUSTRIES
}

export const INDUSTRIES_CLOSING =
  "Don't see yours? We build custom integrations for whatever your business already runs."
