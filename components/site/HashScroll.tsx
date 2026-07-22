"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getLenis } from "@/lib/lenis"

const NAV_OFFSET = -84 // fixed nav height + breathing room

/**
 * Smooth-scrolls to `#hash` targets through Lenis:
 *  - after landing on a route that carries a hash (e.g. /#services from a sub-page)
 *  - when a same-page hash link is clicked
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
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href*="#"]') as
        | HTMLAnchorElement
        | null
      if (!anchor) return
      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname || !url.hash) return
      let el: Element | null = null
      try {
        el = document.querySelector(url.hash)
      } catch {
        return
      }
      if (!el) return
      // Fully own same-page hash clicks. Capture phase + stopImmediatePropagation
      // keeps the event from ever reaching Next's <Link> onClick (React's
      // delegated root listener), which otherwise fought the scroll: on a
      // re-click of the already-active hash it preventDefault'd and did nothing,
      // and on a fresh click it reset scroll after Lenis had started.
      e.preventDefault()
      e.stopImmediatePropagation()
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: NAV_OFFSET })
      else (el as HTMLElement).scrollIntoView({ behavior: "smooth" })
      if (window.location.hash !== url.hash) history.pushState(null, "", url.hash)
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
