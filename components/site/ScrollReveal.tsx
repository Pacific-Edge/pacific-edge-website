"use client"

import { useEffect } from "react"

/**
 * Ports the old scroll-reveal behaviour: adds `.in` to `.reveal` (sub-pages)
 * and `.v` to `.r` (home) elements as they enter the viewport. Mounted once
 * per page. Reduced-motion → reveal everything immediately. No React state
 * (lint-safe); a <noscript> fallback keeps content visible without JS.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reveal = (el: Element) =>
      el.classList.add(el.classList.contains("r") ? "v" : "in")

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      document.querySelectorAll(".reveal, .r").forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    )

    document
      .querySelectorAll(".reveal:not(.in), .r:not(.v)")
      .forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
