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
  /** Category 1 — AI Automations: receptionist, reviews, texting. */
  aiAutomations: IndustryService[]
  /** Category 2 — Custom Software, framed as illustrative examples (not shipped products). */
  customSoftware: {
    lead: string
    examples: IndustryService[]
  }
  /** Key into SCRIPTED_CHATS for the phone-chat demo, or null for no demo. */
  demoKey: string | null
  integrations: readonly string[]
}

/**
 * Per-industry landing content for the dynamic /industries/[slug] route.
 * Healthcare is intentionally excluded — it lives on /clinics (see CLINICS_PAGE),
 * where the custom-software flagship (cancellation fill) is a real, shipped build.
 *
 * Every industry tells the same two-part story:
 *   1. AI Automations — the receptionist / reviews / texting we run for you.
 *   2. Custom Software — bespoke tools we build around your specific bottleneck.
 *      For non-dental industries these are illustrative EXAMPLES of what we build,
 *      not claims of existing products. The dental flagship below is the proof.
 */
export const INDUSTRIES: Record<string, IndustryConfig> = {
  restaurants: {
    slug: "restaurants",
    navLabel: "Restaurants",
    eyebrow: "Restaurants · Vancouver, BC",
    headline: "Never miss a",
    headlineAccent: "reservation.",
    painHook: "Missed calls, unanswered reviews, and no-shows quietly cost you covers.",
    aiAutomations: [
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
        title: "After-hours texting",
        description:
          "Booking requests and questions get answered around the clock, long after last call.",
      },
    ],
    customSoftware: {
      lead: "Then we build software around the bottleneck that's costing you covers.",
      examples: [
        {
          title: "No-show risk flags",
          description: "Spot shaky reservations early and confirm them before the night.",
        },
        {
          title: "Instant table waitlist",
          description: "The next party gets texted the moment a table frees up.",
        },
      ],
    },
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
    aiAutomations: [
      {
        title: "AI phone receptionist",
        description:
          "Books appointments and answers after-hours messages while your team keeps their hands busy.",
      },
      {
        title: "Review management",
        description:
          "On-brand replies to every review, and a nudge for happy clients to leave a rating.",
      },
      {
        title: "Client recall texting",
        description:
          "Nudges past clients to rebook before they drift to the salon down the block.",
      },
    ],
    customSoftware: {
      lead: "Then we build software around the bottleneck that's leaving chairs empty.",
      examples: [
        {
          title: "Cancellation fill",
          description: "The open chair is offered to the right waitlisted client first, filled in minutes.",
        },
        {
          title: "Rebooking radar",
          description: "Catches clients who are due before they lapse for good.",
        },
      ],
    },
    demoKey: "salons",
    integrations: ["Fresha", "Vagaro", "Booksy", "Mindbody", "GlossGenius", "Square Appointments"],
  },
  "professional-services": {
    slug: "professional-services",
    navLabel: "Professional Services",
    eyebrow: "Professional Services · Vancouver, BC",
    headline: "Never send a client",
    headlineAccent: "to voicemail.",
    painHook: "Missed calls, scheduling back-and-forth, and follow-ups that slip.",
    aiAutomations: [
      {
        title: "AI phone receptionist",
        description:
          "Every call answered and every message replied to, so no new client hits voicemail.",
      },
      {
        title: "After-hours replies",
        description:
          "Enquiries that land after close still get a same-minute response.",
      },
      {
        title: "Follow-up reminders",
        description:
          "Automated check-ins keep engagements moving and clients close.",
      },
    ],
    customSoftware: {
      lead: "Then we build software around the bottleneck that's slowing your intake.",
      examples: [
        {
          title: "Intake to booked",
          description: "Turns a new enquiry into a scheduled consult without the email chain.",
        },
        {
          title: "Engagement tracker",
          description: "Flags matters that are stalling before they go cold.",
        },
      ],
    },
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
    aiAutomations: [
      {
        title: "AI phone receptionist",
        description:
          "Missed calls get texted back in seconds while you're on the job, before the caller tries the next name on the list.",
      },
      {
        title: "Quote follow-up texting",
        description:
          "Every estimate gets a follow-up, so quotes turn into booked work instead of going cold.",
      },
      {
        title: "Review management",
        description:
          "On-brand replies to every review, and a nudge for happy customers to leave a rating.",
      },
    ],
    customSoftware: {
      lead: "Then we build software around the bottleneck that's losing you jobs.",
      examples: [
        {
          title: "Quote-to-job tracker",
          description: "Flags estimates going cold and prompts the next touch.",
        },
        {
          title: "Smart dispatch",
          description: "Routes the next call to the nearest available tech.",
        },
      ],
    },
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
    aiAutomations: [
      {
        title: "AI receptionist & message desk",
        description:
          "Calls, website chat, and texts get answered around the clock, so a customer question never goes cold.",
      },
      {
        title: "Review management",
        description:
          "On-brand replies to every review, and a nudge for happy shoppers to leave a rating.",
      },
      {
        title: "Order & stock updates",
        description:
          "Customers hear the moment their item lands or their order ships.",
      },
    ],
    customSoftware: {
      lead: "Then we build software around the bottleneck that's costing you repeat sales.",
      examples: [
        {
          title: "Back-in-stock alerts",
          description: "Texts the customer who asked the moment it lands.",
        },
        {
          title: "Local delivery scheduler",
          description: "Wired to your point-of-sale, so pickup and delivery just work.",
        },
      ],
    },
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

/**
 * Real, shipped custom-software build — used as concrete proof on the industry
 * pages so the "bespoke examples" above read as capability, not vaporware.
 */
export const CUSTOM_SOFTWARE_FLAGSHIP =
  "Already in the wild: for dental clinics we built a system that fills a cancelled appointment from the waitlist in minutes, matching each open slot to the patient most likely to say yes."

export const INDUSTRIES_CLOSING =
  "Don't see yours? We build custom integrations for whatever your business already runs."
