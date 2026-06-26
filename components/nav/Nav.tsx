"use client"

import { EASE_OUT } from "@/lib/motion"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { NAV_ITEMS, type NavItem } from "@/lib/nav"

/* ─────────────────────────────────────────────────────────────────────────
   Top navigation — mega-menu on desktop, accordion sheet on mobile.

   Desktop behaviour:
   · Sticky, full-width, cream-50 background.
   · Scroll past 80 px → blur + shadow.
   · Scroll down past 200 px → hide; scroll up → reveal.
   · Hover any category label (150 ms grace) → mega-menu panel expands down.
   · Click chevron toggle also opens/closes the panel.
   · Esc or outside-click closes.

   Mobile (<1024 px):
   · Hamburger → full-screen sheet.
   · Each category is an accordion inside the sheet.
   · Sticky bottom CTA pill after first scroll.
   ───────────────────────────────────────────────────────────────────────── */

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [showMobileCta, setShowMobileCta] = useState(false)

  const { scrollY } = useScroll()
  const lastY = useRef(0)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useMotionValueEvent(scrollY, "change", (y) => {
    const goingDown = y > lastY.current
    setScrolled(y > 80)
    setHidden(goingDown && y > 200)
    if (!goingDown) setHidden(false)
    setShowMobileCta(y > window.innerHeight * 0.6)
    lastY.current = y
  })

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveCategory(null)
  }, [pathname])

  // Esc to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCategory(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  // Prevent body scroll when mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  function openCategory(label: string) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setActiveCategory(label), 150)
  }

  function closeCategory() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => setActiveCategory(null), 200)
  }

  function cancelClose() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }

  return (
    <>
      {/* Skip-to-content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-navy-900 focus:text-cream-50 focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-ui"
      >
        Skip to content
      </a>

      {/* ── Header bar ── */}
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: EASE_OUT }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled
            ? "rgba(245, 240, 230, 0.88)"
            : "rgba(245, 240, 230, 1)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "var(--shadow-nav)" : "none",
          transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="container-x">
          <div className="flex items-center h-16 lg:h-[4.5rem] justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="font-display text-navy-900 text-lg font-bold tracking-tight flex-shrink-0 hover:text-navy-700 transition-colors"
            >
              Pacific Edge
            </Link>

            {/* Desktop category buttons */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              onMouseLeave={closeCategory}
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onMouseEnter={() => openCategory(item.label)}
                  onClick={() =>
                    setActiveCategory(activeCategory === item.label ? null : item.label)
                  }
                  aria-expanded={activeCategory === item.label}
                  aria-haspopup="true"
                  className={`px-4 py-2 text-sm font-ui transition-colors rounded-md cursor-pointer ${
                    activeCategory === item.label
                      ? "text-navy-900 bg-navy-900/5"
                      : "text-navy-900/70 hover:text-navy-900 hover:bg-navy-900/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5 hidden lg:inline-flex">
                Book a Call
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-ash-400 rounded-md"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                    className="block h-px w-full bg-navy-900 origin-left"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block h-px w-full bg-navy-900"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                    className="block h-px w-full bg-navy-900 origin-left"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ── Desktop mega-menu panel ── */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              key="megamenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              className="hidden lg:block overflow-hidden border-t border-ash-300/40 bg-cream-100"
              onMouseEnter={cancelClose}
              onMouseLeave={closeCategory}
              role="dialog"
              aria-label="Navigation menu"
            >
              <div className="container-x py-8">
                <div className="grid grid-cols-4 gap-8">
                  {NAV_ITEMS.map((item, colIndex) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: colIndex * 0.05,
                        ease: EASE_OUT,
                      }}
                    >
                      <p className="eyebrow text-ash-500 mb-4">{item.label}</p>
                      <div className="border-l border-ash-300 pl-4 flex flex-col gap-2.5">
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveCategory(null)}
                            className="text-sm font-ui text-navy-900/70 hover:text-navy-900 hover:translate-x-0.5 transition-all duration-200 block"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Mobile full-screen sheet ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="lg:hidden fixed inset-0 z-40 bg-cream-50 overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="pt-20 px-6 pb-32">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <MobileAccordion
                    key={item.label}
                    item={item}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-ash-300/50">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary block w-full text-center text-base px-5 py-4"
                >
                  Book a Free Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile sticky bottom CTA (appears after first viewport) ── */}
      <AnimatePresence>
        {showMobileCta && !mobileOpen && (
          <motion.div
            key="mobile-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="lg:hidden fixed bottom-6 left-4 right-4 z-40 flex justify-center"
          >
            <Link
              href="/contact"
              className="btn-primary shadow-card text-sm px-8 py-3.5"
            >
              Book a Free Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Mobile accordion item ── */
function MobileAccordion({
  item,
  onClose,
}: {
  item: NavItem
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-ash-300/40">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className="font-display text-2xl text-navy-900">{item.label}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="text-ash-400 flex-shrink-0"
        >
          <path
            d="M4.5 6.75L9 11.25L13.5 6.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-2 flex flex-col gap-4">
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="font-ui text-base text-navy-900/70 hover:text-navy-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
