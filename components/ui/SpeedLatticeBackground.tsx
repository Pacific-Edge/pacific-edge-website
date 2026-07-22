"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const TILE = 28
// Horizontal drift distance whose projection onto the 45deg stripe axis is
// exactly one full TILE period, so the looping animation has no visible seam.
const DRIFT = TILE * Math.SQRT2

/**
 * Thin white diagonal lattice, drifting via `background-position`. No blur
 * filter and no per-frame layout/transform work on multiple nodes — a single
 * element repainting a tiny repeating gradient tile, which is dramatically
 * cheaper than several `blur-3xl` blobs animating x/y/scale in parallel.
 */
export default function SpeedLatticeBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "200px",
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const animate = reduce || !inView

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent ${TILE}px)`,
        }}
        animate={animate ? undefined : { backgroundPosition: [`0px 0px`, `${DRIFT}px 0px`] }}
        transition={animate ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.35),transparent_60%)]" />
    </div>
  )
}
