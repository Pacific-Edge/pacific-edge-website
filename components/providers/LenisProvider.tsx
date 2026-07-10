"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const SCROLL_CONFIG = {
  lerp: 0.075,
  wheelMultiplier: 0.82,
  touchMultiplier: 0.88,
  maxWheelDelta: 90,
} as const

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
      lerp: SCROLL_CONFIG.lerp,
      wheelMultiplier: SCROLL_CONFIG.wheelMultiplier,
      touchMultiplier: SCROLL_CONFIG.touchMultiplier,
      smoothWheel: true,
      virtualScroll: (data: { deltaX: number; deltaY: number }) => {
        const cap = SCROLL_CONFIG.maxWheelDelta
        if (Math.abs(data.deltaY) > cap) data.deltaY = Math.sign(data.deltaY) * cap
        if (Math.abs(data.deltaX) > cap) data.deltaX = Math.sign(data.deltaX) * cap
        return true
      },
    } as ConstructorParameters<typeof Lenis>[0])

    // Bridge Lenis → ScrollTrigger so pinned/scrubbed timelines stay in sync
    // with Lenis's smoothed scroll position.
    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.off("scroll", onScroll)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
