"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  Bot,
  Building2,
  GraduationCap,
  Scissors,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import Logo from "./Logo"
import { getLenis } from "@/lib/lenis"

const NAV_ICON = { size: 18, strokeWidth: 1.8 } as const

const PRODUCTS: { href: string; Icon: LucideIcon; name: string; desc: string }[] = [
  { href: "/ai-employee", Icon: Bot, name: "AI Employee (Janice)", desc: "Your AI front desk, 24/7" },
  { href: "/custom-builds", Icon: Wrench, name: "Custom Builds", desc: "Bespoke software for your business" },
  { href: "/ai-training", Icon: GraduationCap, name: "AI Training", desc: "Get your team using AI well & safely" },
]

const INDUSTRIES: { href: string; Icon: LucideIcon; name: string; desc: string }[] = [
  { href: "/dental", Icon: Stethoscope, name: "Dental & Health Clinics", desc: "New patients, recalls" },
  { href: "/real-estate", Icon: Building2, name: "Real Estate", desc: "Agents, brokerages & developers" },
  { href: "/restaurants", Icon: UtensilsCrossed, name: "Restaurants & Food", desc: "Bookings, reviews, no-shows" },
  { href: "/salons", Icon: Scissors, name: "Salons & Spas", desc: "Booking, rebooking, no-shows" },
  { href: "/trades", Icon: Wrench, name: "Trades & Home Services", desc: "Missed calls, quotes, jobs" },
  { href: "/retail", Icon: ShoppingBag, name: "Retail & Local Shops", desc: "Questions, repeat customers" },
]

export default function Nav({ variant = "full" }: { variant?: "full" | "minimal" }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Hide-on-scroll (full nav only)
  useEffect(() => {
    if (variant !== "full") return
    let last = 0
    const onScroll = () => {
      const s = window.scrollY
      setHidden(s > last && s > 80)
      last = s
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [variant])

  // Lock body scroll + pause Lenis while the drawer is open; Escape closes it
  useEffect(() => {
    if (!menuOpen) return
    const lenis = getLenis()
    document.body.classList.add("menu-open")
    lenis?.stop()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.classList.remove("menu-open")
      lenis?.start()
      document.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  if (variant === "minimal") {
    return (
      <nav>
        <Logo href="/" />
        <div className="nav-right">
          <Link href="/" className="nav-back">← Home</Link>
          <Link href="/ai-employee" className="nav-back">AI Employee</Link>
          <Link href="/custom-builds" className="nav-back">Custom Builds</Link>
          <Link href="/ai-training" className="nav-back">AI Training</Link>
          <Link href="/roi-calculator" className="nav-back">ROI Calculator</Link>
          <Link href="/about" className="nav-back">About</Link>
          <a href="/login.html" className="nav-back">Client Login</a>
          <a
            href="https://cal.com/pacificedge"
            target="_blank"
            rel="noopener"
            className="nav-cta"
          >
            Book a Demo
          </a>
        </div>
      </nav>
    )
  }

  return (
    <nav id="siteNav" className={hidden ? "hide" : ""}>
      <Logo href="/" />
      <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        <li className="nav-dd">
          <Link href="/#services" className="nav-dd-trigger">
            Products
            <svg
              className="nav-chev"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </Link>
          <div className="nav-dd-panel">
            {PRODUCTS.map((i) => (
              <Link key={i.href} href={i.href} className="nav-dd-item">
                <span className="nav-dd-ico"><i.Icon {...NAV_ICON} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>
                <span>
                  <span className="nav-dd-name">{i.name}</span>
                  <span className="nav-dd-desc">{i.desc}</span>
                </span>
              </Link>
            ))}
            <div className="nav-dd-foot">
              <span>New here?</span>
              <Link href="/ai-employee">Meet Janice →</Link>
            </div>
          </div>
        </li>
        <li className="nav-dd">
          <Link href="/#industries" className="nav-dd-trigger">
            Industries
            <svg
              className="nav-chev"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </Link>
          <div className="nav-dd-panel">
            {INDUSTRIES.map((i) => (
              <Link key={i.href} href={i.href} className="nav-dd-item">
                <span className="nav-dd-ico"><i.Icon {...NAV_ICON} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>
                <span>
                  <span className="nav-dd-name">{i.name}</span>
                  <span className="nav-dd-desc">{i.desc}</span>
                </span>
              </Link>
            ))}
            <div className="nav-dd-foot">
              <span>Not sure which fits?</span>
              <Link href="/industries">View all →</Link>
            </div>
          </div>
        </li>
        <li>
          <Link href="/dental">Dental</Link>
        </li>
        <li>
          <Link href="/roi-calculator">ROI Calculator</Link>
        </li>
        <li>
          <Link href="/#coverage">Coverage</Link>
        </li>
        <li>
          <Link href="/#process">Process</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/#faq">FAQ</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
        <li className="nav-links-cta-mobile">
          <a href="/login.html" className="btn-primary" style={{ marginTop: 16 }}>
            Client Login
          </a>
        </li>
      </ul>
      <div className="nav-actions">
        <a href="/login.html" className="nav-login">Client Login</a>
        <a
          href="https://cal.com/pacificedge"
          target="_blank"
          rel="noopener"
          className="nav-cta"
        >
          Book a Demo
          <svg
            className="nav-cta-arr"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
      <button
        className={`nav-burger ${menuOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="navLinks"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
