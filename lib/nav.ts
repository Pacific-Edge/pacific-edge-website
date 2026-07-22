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
      { href: "/restaurants", name: "Restaurants & Food", desc: "Bookings, reviews, no-shows" },
      { href: "/salons", name: "Salons & Spas", desc: "Booking, rebooking, no-shows" },
      { href: "/trades", name: "Trades & Home Services", desc: "Missed calls, cold quotes" },
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
