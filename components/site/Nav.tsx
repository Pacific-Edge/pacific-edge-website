"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import { getLenis } from "@/lib/lenis"

const INDUSTRIES = [
  { href: "/dental", icon: "🦷", name: "Dental & Health Clinics", desc: "New patients, recalls" },
  { href: "/restaurants", icon: "🍽️", name: "Restaurants & Food", desc: "Bookings, reviews, no-shows" },
  { href: "/salons", icon: "💆", name: "Salons & Spas", desc: "Booking, rebooking, no-shows" },
  { href: "/trades", icon: "🔧", name: "Trades & Home Services", desc: "Missed calls, quotes, jobs" },
  { href: "/retail", icon: "🛍️", name: "Retail & Local Shops", desc: "Questions, repeat customers" },
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
          <Link href="/" className="nav-back">← All industries</Link>
          <Link href="/ai-employee" className="nav-back">AI Employee</Link>
          <a href="/login.html" className="nav-back">Client Login</a>
          <a
            href="https://cal.com/pacificedge"
            target="_blank"
            rel="noopener"
            className="nav-cta"
          >
            Book a Call
          </a>
        </div>
      </nav>
    )
  }

  return (
    <nav id="siteNav" className={hidden ? "hide" : ""}>
      <Logo href="/" />
      <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        <li>
          <Link href="/#services">Services</Link>
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
                <span className="nav-dd-ico">{i.icon}</span>
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
          <Link href="/ai-employee">AI Employee</Link>
        </li>
        <li>
          <Link href="/#coverage">Coverage</Link>
        </li>
        <li>
          <Link href="/#dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/#process">Process</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
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
      <a href="/login.html" className="nav-cta">
        Client Login
      </a>
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
