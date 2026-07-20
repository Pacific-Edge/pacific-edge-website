export type NavItem = {
  href: string
  name: string
  desc: string
  comingSoon?: boolean
}

export type NavCategory = {
  key: string
  label: string
  items: NavItem[]
  footLabel: string
  footHref: string
  footText: string
}

export const NAV_CATEGORIES: NavCategory[] = [
  {
    key: "solutions",
    label: "Solutions",
    items: [
      { href: "/ai-employee", name: "AI Voice Receptionist", desc: "Your AI front desk, 24/7" },
      { href: "/custom-builds", name: "Software Solutions", desc: "PMS · POS · operations, integrated" },
      { href: "/custom-builds", name: "Custom Builds", desc: "Bespoke software for your business" },
      { href: "/ai-training", name: "AI Training", desc: "Get your team using AI well & safely" },
    ],
    footLabel: "New here?",
    footHref: "/ai-employee",
    footText: "Meet Janice →",
  },
  {
    key: "industries",
    label: "Industries",
    items: [
      { href: "/dental", name: "Dental & Health Clinics", desc: "New patients, recalls" },
      { href: "/real-estate", name: "Real Estate", desc: "Agents, brokerages & developers" },
      { href: "/restaurants", name: "Restaurants & Food", desc: "Bookings, reviews, no-shows" },
      { href: "/salons", name: "Salons & Spas", desc: "Booking, rebooking, no-shows" },
      { href: "/trades", name: "Trades & Home Services", desc: "Missed calls, quotes, jobs" },
      { href: "/retail", name: "Retail & Local Shops", desc: "Questions, repeat customers" },
      { href: "/industries", name: "Automotive", desc: "Coming soon", comingSoon: true },
    ],
    footLabel: "Not sure which fits?",
    footHref: "/industries",
    footText: "View all →",
  },
  {
    key: "company",
    label: "Company",
    items: [
      { href: "/about", name: "About", desc: "Built by operators, not agencies" },
      { href: "/#coverage", name: "Coverage", desc: "Where we work across Greater Vancouver" },
      { href: "/careers", name: "Careers", desc: "Join the team" },
      { href: "/faq", name: "FAQ", desc: "Common questions, answered" },
    ],
    footLabel: "Want to talk?",
    footHref: "/contact",
    footText: "Get in touch →",
  },
  {
    key: "get-started",
    label: "Get Started",
    items: [
      { href: "/how-it-works", name: "Process", desc: "How an engagement actually runs" },
      { href: "/contact", name: "Contact", desc: "Reach the team directly" },
      { href: "/login.html", name: "Client Login", desc: "Access your dashboard" },
    ],
    footLabel: "Ready to start?",
    footHref: "https://cal.com/pacificedge",
    footText: "Book a Demo →",
  },
]
