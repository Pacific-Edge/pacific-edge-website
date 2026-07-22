"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getLenis } from "@/lib/lenis"

const NAV_OFFSET = -84 // fixed nav height + breathing room

/**
 * Smooth-scrolls through Lenis for in-page navigation:
 *  - after landing on a route that carries a hash (e.g. /#services from a sub-page)
 *  - when a same-page hash link is clicked (scrolls to that section)
 *  - when a same-page no-hash link is clicked, e.g. the logo or "Home" while
 *    already on that page (scrolls to top)
 * Falls back to native smooth scroll when Lenis is off (reduced-motion).
 */
export default function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash || hash.length < 2) return
    let el: Element | null = null
    try {
      el = document.querySelector(hash)
    } catch {
      return
    }
    if (!el) return
    const t = window.setTimeout(() => {
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: NAV_OFFSET })
      else (el as HTMLElement).scrollIntoView({ behavior: "smooth" })
    }, 60)
    return () => window.clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return
      if (!anchor.getAttribute("href")) return
      let url: URL
      try {
        url = new URL(anchor.href, window.location.href)
      } catch {
        return
      }
      // External, cross-page, or protocol (mailto/tel) links: let them be.
      if (url.origin !== window.location.origin) return
      if (url.pathname !== window.location.pathname) return

      // Same-page link. With a hash, scroll to that section; without one (the
      // logo or a "Home" link while already here), scroll to the top.
      let el: Element | null = null
      if (url.hash) {
        try {
          el = document.querySelector(url.hash)
        } catch {
          return
        }
        if (!el) return
      }
      // Capture phase + stopImmediatePropagation keeps the event from ever
      // reaching Next's <Link> onClick, which otherwise fought the scroll: on a
      // re-click of an already-active URL it preventDefault'd and did nothing.
      e.preventDefault()
      e.stopImmediatePropagation()
      const lenis = getLenis()
      if (el) {
        if (lenis) lenis.scrollTo(el as HTMLElement, { offset: NAV_OFFSET })
        else (el as HTMLElement).scrollIntoView({ behavior: "smooth" })
        if (window.location.hash !== url.hash) history.pushState(null, "", url.hash)
      } else {
        if (lenis) lenis.scrollTo(0, { offset: 0 })
        else window.scrollTo({ top: 0, behavior: "smooth" })
        // Drop any stale hash from the address bar now that we're back at top.
        if (window.location.hash) history.pushState(null, "", window.location.pathname + window.location.search)
      }
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
