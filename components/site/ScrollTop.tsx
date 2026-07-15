"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { getLenis } from "@/lib/lenis"

/**
 * Forces the viewport to the top on every route change (unless the URL carries a
 * #hash, which HashScroll handles). Next resets window scroll on navigation, but
 * Lenis keeps its own animated scroll position and can snap the page back to
 * where it was — so we reset Lenis explicitly too. Runs again next frame in case
 * Lenis/layout settles late.
 */
export default function ScrollTop() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.location.hash) return
    const toTop = () => {
      const lenis = getLenis()
      if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
      window.scrollTo(0, 0)
    }
    toTop()
    const raf = requestAnimationFrame(toTop)
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  return null
}
