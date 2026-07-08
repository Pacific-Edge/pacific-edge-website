export const NAV_ITEMS = [
  {
    label: "Product",
    links: [
      { label: "Solutions",     href: "/solutions" },
      { label: "Janice",        href: "/solutions/janice" },
      { label: "Dashboard",     href: "/dashboard" },
      { label: "Integrations",  href: "/integrations" },
    ],
  },
  {
    label: "Industries",
    links: [
      { label: "Dental & Health",      href: "/industries/dental" },
      { label: "Restaurants",          href: "/industries/restaurants" },
      { label: "Salons & Spas",        href: "/industries/salons" },
      { label: "Trades",               href: "/industries/trades" },
      { label: "Retail",               href: "/industries/retail" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Why Us",    href: "/why-us" },
      { label: "About",     href: "/about" },
      { label: "Coverage",  href: "/coverage" },
      { label: "Reviews",   href: "/reviews" },
    ],
  },
  {
    label: "Get Started",
    links: [
      { label: "Process",  href: "/process" },
      { label: "Pricing",  href: "/pricing" },
      { label: "FAQ",      href: "/faq" },
      { label: "Contact",  href: "/contact" },
    ],
  },
] as const

export type NavItem = typeof NAV_ITEMS[number]
