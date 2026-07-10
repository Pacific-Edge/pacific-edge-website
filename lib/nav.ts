export const NAV_ITEMS = [
  {
    label: "Product",
    links: [
      { label: "Solutions",     href: "/solutions" },
      { label: "Platform",      href: "/solutions/janice" },
      { label: "Dashboard",     href: "/dashboard" },
      { label: "Integrations",  href: "/integrations" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Why Us",    href: "/why-us" },
      { label: "About",     href: "/about" },
      { label: "Coverage",  href: "/coverage" },
      // { label: "Reviews",   href: "/reviews" }, // Hidden until we have live client deployments
    ],
  },
  {
    label: "Get Started",
    links: [
      { label: "Clinics",  href: "/clinics" },
      { label: "Process",  href: "/process" },
      { label: "Pricing",  href: "/pricing" },
      { label: "FAQ",      href: "/faq" },
      { label: "Contact",  href: "/contact" },
    ],
  },
] as const

export type NavItem = typeof NAV_ITEMS[number]
