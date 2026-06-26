"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable browser scroll restoration so every page load starts at the top
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Honour prefers-reduced-motion — skip smooth scroll entirely
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Bridge Lenis → ScrollTrigger so pinned/scrubbed timelines stay in sync
    // with Lenis's smoothed scroll position.
    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.off("scroll", onScroll)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
