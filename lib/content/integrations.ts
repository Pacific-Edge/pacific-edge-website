export type IntegrationStack = {
  industry: string
  slug: string
  tools: string[]
}

export const INTEGRATION_STACKS: IntegrationStack[] = [
  {
    industry: "Dental & Health",
    slug: "dental",
    tools: ["Tracker", "Dentrix", "Open Dental", "AbelDent", "Curve Dental"],
  },
  {
    industry: "Restaurants",
    slug: "restaurants",
    tools: ["OpenTable", "Toast", "TouchBistro", "7shifts", "Lightspeed", "Resy"],
  },
  {
    industry: "Salons & Spas",
    slug: "salons",
    tools: ["Fresha", "Vagaro", "Booksy", "Mindbody", "GlossGenius", "Square Appts"],
  },
  {
    industry: "Trades",
    slug: "trades",
    tools: ["Jobber", "ServiceTitan", "Housecall Pro", "ServiceM8", "HomeStars", "QuickBooks"],
  },
  {
    industry: "Retail",
    slug: "retail",
    tools: ["Shopify", "Lightspeed", "Square", "Clover", "WooCommerce", "Mailchimp"],
  },
]

export const INTEGRATIONS_CLOSING =
  "Don't see yours? We build custom integrations for whatever you already run."
