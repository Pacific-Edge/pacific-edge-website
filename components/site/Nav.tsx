"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Logo from "./Logo"
import { getLenis } from "@/lib/lenis"
import { NAV_CATEGORIES } from "@/lib/nav"

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Hide-on-scroll
  useEffect(() => {
    let last = 0
    const onScroll = () => {
      const s = window.scrollY
      setHidden(s > last && s > 80)
      last = s
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

  return (
    <nav id="siteNav" className={hidden ? "hide" : ""}>
      <Logo href="/" />
      <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        {NAV_CATEGORIES.map((cat) => (
          <li className="nav-dd" key={cat.key}>
            <Link href={cat.items[0].href} className="nav-dd-trigger">
              {cat.label}
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
              {cat.items.map((i) => (
                <Link
                  key={i.href + i.name}
                  href={i.href}
                  className={`nav-dd-item ${i.comingSoon ? "nav-dd-item-soon" : ""}`}
                  aria-disabled={i.comingSoon || undefined}
                >
                  <span>
                    <span className="nav-dd-name">{i.name}</span>
                    <span className="nav-dd-desc">{i.desc}</span>
                  </span>
                </Link>
              ))}
              <div className="nav-dd-foot">
                <span>{cat.footLabel}</span>
                <Link href={cat.footHref}>{cat.footText}</Link>
              </div>
            </div>
          </li>
        ))}
        <li className="nav-links-cta-mobile">
          <a href="/login.html" className="btn-mint nav-nolift" style={{ marginTop: 16 }}>
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
          className="btn-mint nav-cta"
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
