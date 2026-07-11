"use client"

import { EASE_OUT } from "@/lib/motion"
import { useState, useRef, useEffect, useLayoutEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS, type NavItem } from "@/lib/nav"

/* ─────────────────────────────────────────────────────────────────────────
   Top navigation — mega-menu on desktop, accordion sheet on mobile.

   Desktop behaviour:
   · Fixed, full-width bar.
   · Home: transparent for the first ~250 px, then midnight background fades in.
   · Other routes: solid midnight (white pages need contrast for white text).
   · Nav bar background is scroll-driven only — it does not react to menu open.
   · Mega-menu uses an independent midnight curtain (z-behind nav chrome) that
     slides down on hover/click and retracts on mouse-leave.
   · FadeDone false (transparent nav): curtain reveals from top of screen
     through nav row + panel — acts as fill behind semi-transparent chrome.
   · FadeDone true (solid nav): curtain reveals from nav bottom into panel only
     so the dropdown bg appears immediately with no dead zone.
   · A close request that arrives while the curtain is still opening is queued
     and applied once the open animation finishes.
   · Esc closes immediately.

   Mobile (<1024 px):
   · Hamburger → full-screen sheet; solid nav bar — no curtain animation.
   · Each category is an accordion inside the sheet.
   · Sticky bottom CTA pill after first scroll.
   ───────────────────────────────────────────────────────────────────────── */

/** Scroll distance (px) over which the home nav background fades 0 → solid. */
const NAV_BG_FADE_PX = 250
/** Peak midnight opacity once fully faded in. */
const NAV_BG_MAX_OPACITY = 0.88
/** Nav row background transition duration (scroll-driven fade). */
const NAV_BG_TRANSITION_MS = 300
/** CSS cubic-bezier string matching EASE_OUT. */
const NAV_BG_EASE = `cubic-bezier(${EASE_OUT.join(",")})`
/** Mega-menu curtain slide duration. */
const CURTAIN_MS = 300
/** Content fade starts partway through the curtain so it overlaps the tail. */
const CONTENT_FADE_DELAY_MS = 120
/** Ends when the old post-curtain fade did (300 + 250 ms). */
const CONTENT_FADE_MS = CURTAIN_MS + 250 - CONTENT_FADE_DELAY_MS

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isOpening, setIsOpening] = useState(false)
  const [navBgProgress, setNavBgProgress] = useState(isHome ? 0 : 1)
  const [showMobileCta, setShowMobileCta] = useState(false)
  const [navRowHeight, setNavRowHeight] = useState(64)
  const [panelHeight, setPanelHeight] = useState(0)
  /** Horizontal center of the Product | Company | Get Started band (viewport px). */
  const [categoryBandCenter, setCategoryBandCenter] = useState<number | null>(null)

  const { scrollY } = useScroll()
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingClose = useRef(false)
  const bgProgressRef = useRef(navBgProgress)
  const fadeDoneAtOpenRef = useRef(true)
  const navRowRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const categoryNavRef = useRef<HTMLElement>(null)

  useMotionValueEvent(scrollY, "change", (y) => {
    // Once solid, stay solid — only recompute while still inside the fade band.
    if (isHome && (bgProgressRef.current < 1 || y < NAV_BG_FADE_PX)) {
      const progress = Math.min(1, Math.max(0, y / NAV_BG_FADE_PX))
      if (progress !== bgProgressRef.current) {
        setNavBgProgress(progress)
        bgProgressRef.current = progress
      }
    }
    setShowMobileCta(y > window.innerHeight * 0.6)
  })

  useLayoutEffect(() => {
    const measure = () => {
      if (navRowRef.current) setNavRowHeight(navRowRef.current.offsetHeight)
      if (panelRef.current) setPanelHeight(panelRef.current.offsetHeight)
      if (categoryNavRef.current) {
        const rect = categoryNavRef.current.getBoundingClientRect()
        setCategoryBandCenter(rect.left + rect.width / 2)
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (navRowRef.current) ro.observe(navRowRef.current)
    if (panelRef.current) ro.observe(panelRef.current)
    if (categoryNavRef.current) ro.observe(categoryNavRef.current)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  // Close everything on route change; reset home fade from current scroll
  useEffect(() => {
    setMobileOpen(false)
    setActiveCategory(null)
    setIsOpening(false)
    pendingClose.current = false
    const progress = pathname === "/"
      ? Math.min(1, Math.max(0, scrollY.get() / NAV_BG_FADE_PX))
      : 1
    setNavBgProgress(progress)
    bgProgressRef.current = progress
  }, [pathname, scrollY])

  // Esc closes immediately — deliberate escape shouldn't wait on animation state
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        pendingClose.current = false
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

  function closeAll() {
    setActiveCategory(null)
  }

  function setMobileOpenState(next: boolean) {
    setMobileOpen(next)
  }

  function requestOpen(label: string) {
    activateCategory(label)
  }

  /** Opens (or switches to) a category. Cancels any pending close request. */
  function activateCategory(label: string) {
    pendingClose.current = false
    if (!activeCategory) {
      setIsOpening(true)
      fadeDoneAtOpenRef.current = !isHome || bgProgressRef.current >= 1
    }
    setActiveCategory(label)
  }

  /** Close the panel — but if it's still animating open, queue the close
   *  instead of snapping shut mid-flight. */
  function requestClose() {
    if (isOpening) {
      pendingClose.current = true
    } else {
      closeAll()
    }
  }

  function openCategory(label: string) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => requestOpen(label), 150)
  }

  function closeCategory() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => requestClose(), 200)
  }

  function cancelClose() {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }

  function handleCategoryClick(label: string) {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    if (activeCategory === label) {
      requestClose()
    } else {
      requestOpen(label)
    }
  }

  /** Fires when the curtain open animation settles so a queued close can run. */
  function handleCurtainAnimationComplete() {
    if (activeCategory) {
      setIsOpening(false)
      if (pendingClose.current) {
        pendingClose.current = false
        closeAll()
      }
    }
  }

  const panelOpen = Boolean(activeCategory)
  const fadeDone = !isHome || navBgProgress >= 1
  const curtainPanelOnly = panelOpen ? fadeDoneAtOpenRef.current : fadeDone
  const bgProgress = mobileOpen ? 1 : navBgProgress
  const bgOpacity = bgProgress * NAV_BG_MAX_OPACITY
  const blurPx = bgProgress * 12

  const curtainTop = curtainPanelOnly ? navRowHeight : 0
  const curtainHeight = curtainPanelOnly ? panelHeight : navRowHeight + panelHeight

  const navRowBgStyle = {
    backgroundColor: `color-mix(in srgb, var(--color-midnight-900) ${bgOpacity * 100}%, transparent)`,
    backdropFilter: bgProgress > 0.02 ? `blur(${blurPx}px)` : "none",
    WebkitBackdropFilter: bgProgress > 0.02 ? `blur(${blurPx}px)` : "none",
    boxShadow: bgProgress > 0.55 ? "0 1px 0 var(--overlay-light-12)" : "none",
    transition: `background-color ${NAV_BG_TRANSITION_MS}ms ${NAV_BG_EASE}, backdrop-filter ${NAV_BG_TRANSITION_MS}ms ${NAV_BG_EASE}, box-shadow ${NAV_BG_TRANSITION_MS}ms ${NAV_BG_EASE}`,
  } as const

  return (
    <>
      {/* Skip-to-content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white-50 focus:text-midnight-900 focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-ui"
      >
        Skip to content
      </a>

      {/* ── Header bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Desktop mega-menu curtain — independent of nav row scroll bg */}
        <motion.div
          key={fadeDone ? "panel-only" : "full-header"}
          initial={false}
          animate={panelOpen ? "open" : "closed"}
          variants={{
            open: { clipPath: "inset(0 0 0% 0)" },
            closed: { clipPath: "inset(0 0 100% 0)" },
          }}
          transition={{ duration: CURTAIN_MS / 1000, ease: EASE_OUT }}
          onAnimationComplete={handleCurtainAnimationComplete}
          className="hidden lg:block absolute inset-x-0 bg-midnight-900 z-0"
          style={{
            top: curtainTop,
            height: curtainHeight,
            pointerEvents: "none",
          }}
          aria-hidden
        />

        {/* Nav row — scroll-driven background (mobile: solid when sheet open) */}
        <div ref={navRowRef} className="relative z-10" style={navRowBgStyle}>
          <div className="container-x">
            <div className="flex items-center h-16 lg:h-[4.5rem] justify-between">

              {/* Logo */}
              <Link
                href="/"
                className="font-display text-white-50 text-lg font-bold tracking-tight flex-shrink-0 hover:text-white-100 transition-colors"
              >
                Pacific Edge
              </Link>

              {/* Desktop category buttons */}
              <nav
                ref={categoryNavRef}
                className="hidden lg:flex items-center gap-0.5"
                onMouseLeave={closeCategory}
                aria-label="Main navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onMouseEnter={() => openCategory(item.label)}
                    onClick={() => handleCategoryClick(item.label)}
                    aria-expanded={activeCategory === item.label}
                    aria-haspopup="true"
                    className={`px-4 py-2 text-sm font-ui transition-colors rounded-md cursor-pointer ${
                      activeCategory === item.label
                        ? "text-white-50 bg-white-50/10"
                        : "text-white-50/70 hover:text-white-50 hover:bg-white-50/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Right: login + CTA + hamburger */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/login"
                  className="hidden lg:inline-flex font-ui text-sm text-white-50/65 hover:text-white-50 px-3 py-2 rounded-md transition-colors"
                >
                  Client Login
                </Link>
                <Button asChild variant="white" size="sm" className="hidden lg:inline-flex">
                  <Link href="/contact">Book a Call</Link>
                </Button>

                {/* Hamburger — mobile only */}
                <button
                  onClick={() => setMobileOpenState(!mobileOpen)}
                  className="lg:hidden p-2 text-white-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ash-400 rounded-md"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                >
                  <div className="w-5 h-4 flex flex-col justify-between">
                    <motion.span
                      animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT }}
                      className="block h-px w-full bg-white-50 origin-left"
                    />
                    <motion.span
                      animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      className="block h-px w-full bg-white-50"
                    />
                    <motion.span
                      animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                      transition={{ duration: 0.25, ease: EASE_OUT }}
                      className="block h-px w-full bg-white-50 origin-left"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop mega-menu links — no background; curtain provides fill */}
        <div
          ref={panelRef}
          className="hidden lg:block absolute left-0 right-0 top-full z-10 overflow-hidden border-t border-white-50/10"
          style={{ pointerEvents: panelOpen ? "auto" : "none" }}
          onMouseEnter={cancelClose}
          onMouseLeave={closeCategory}
          role="dialog"
          aria-hidden={!panelOpen}
          aria-label="Navigation menu"
        >
          <div className="relative py-8">
            <div
              className="w-max max-w-[min(42rem,calc(100vw-3rem))]"
              style={
                categoryBandCenter != null
                  ? {
                      position: "relative",
                      left: categoryBandCenter,
                      transform: "translateX(-50%)",
                    }
                  : { marginInline: "auto" }
              }
            >
              <motion.div
                className="grid grid-cols-3 gap-10"
                initial={false}
                animate={{ opacity: panelOpen ? 1 : 0 }}
                transition={{
                  duration: panelOpen ? CONTENT_FADE_MS / 1000 : 0,
                  delay: panelOpen ? CONTENT_FADE_DELAY_MS / 1000 : 0,
                  ease: EASE_OUT,
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="min-w-[8.5rem]">
                    <p className="eyebrow text-ash-400 mb-4">{item.label}</p>
                    <div className="border-l border-white-50/15 pl-4 flex flex-col gap-2.5">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          tabIndex={panelOpen ? 0 : -1}
                          onClick={() => closeAll()}
                          className="text-sm font-ui text-white-50/70 hover:text-white-50 hover:translate-x-0.5 transition-all duration-200 block"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen sheet ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="lg:hidden fixed inset-0 z-40 bg-midnight-900 overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="pt-20 px-6 pb-32">
              <div className="flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <MobileAccordion
                    key={item.label}
                    item={item}
                    onClose={() => setMobileOpenState(false)}
                  />
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white-50/10 space-y-3">
                <Button
                  asChild
                  variant="transparent"
                  tone="light"
                  size="lg"
                  className="block w-full text-center"
                >
                  <Link href="/login" onClick={() => setMobileOpenState(false)}>
                    Client Login
                  </Link>
                </Button>
                <Button asChild variant="white" size="lg" className="block w-full text-center">
                  <Link href="/contact" onClick={() => setMobileOpenState(false)}>
                    Book a Free Call
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile sticky bottom CTA (appears after first viewport; hidden on /contact) ── */}
      <AnimatePresence>
        {showMobileCta && !mobileOpen && pathname !== "/contact" && (
          <motion.div
            key="mobile-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="lg:hidden fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-4 right-4 z-40 flex justify-center pointer-events-none"
          >
            <Button asChild variant="black" className="shadow-card pointer-events-auto">
              <Link href="/contact">Book a Free Call</Link>
            </Button>
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
    <div className="border-b border-white-50/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className="font-display text-2xl text-white-50">{item.label}</span>
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
                  className="font-ui text-base text-white-50/70 hover:text-white-50 transition-colors"
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
