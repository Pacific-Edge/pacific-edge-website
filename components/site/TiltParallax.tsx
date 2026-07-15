"use client"

import { useEffect } from "react"

/**
 * Generic progressive-enhancement interactions for showcase pages:
 *   • 3D mouse-tilt on [data-tilt] elements (adds the `dx-tilting` class + --mx/--my)
 *   • parallax drift on [data-parallax] elements (value = px depth)
 * Pointer-fine + non-reduced-motion only; CSS carries the reset so touch /
 * small screens / reduced-motion look right even if this never runs.
 */
export default function TiltParallax() {
  useEffect(() => {
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    const cleanups: Array<() => void> = []
    const MAX = 8

    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        const ry = (px - 0.5) * 2 * MAX
        const rx = -(py - 0.5) * 2 * MAX
        el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.015)`
        el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`)
        el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`)
        el.classList.add("dx-tilting")
      }
      const leave = () => {
        el.style.transform = ""
        el.classList.remove("dx-tilting")
      }
      el.addEventListener("pointermove", move)
      el.addEventListener("pointerleave", leave)
      cleanups.push(() => {
        el.removeEventListener("pointermove", move)
        el.removeEventListener("pointerleave", leave)
      })
    })

    const orbs = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"))
    if (orbs.length) {
      let raf = 0
      const onMove = (e: PointerEvent) => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
          const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
          orbs.forEach((o) => {
            const depth = parseFloat(o.dataset.parallax || "20")
            o.style.transform = `translate(${(dx * depth).toFixed(1)}px, ${(dy * depth).toFixed(1)}px)`
          })
        })
      }
      window.addEventListener("pointermove", onMove)
      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove)
        cancelAnimationFrame(raf)
        orbs.forEach((o) => (o.style.transform = ""))
      })
    }

    return () => cleanups.forEach((c) => c())
  }, [])

  return null
}
