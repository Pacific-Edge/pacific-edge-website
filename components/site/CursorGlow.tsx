"use client"

import { useEffect, useRef } from "react"

/**
 * Faint mint radial glow that follows the cursor — ports the old site's
 * fixed `.glow` element. Skipped for reduced-motion and coarse pointers
 * (touch), and updated inside rAF so it never blocks the main thread.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${clientX}px, ${clientY}px)`
      })
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} aria-hidden className="pe-cursor-glow" />
}
