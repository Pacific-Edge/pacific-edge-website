"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

type AnimatedValueProps = {
  value: number
  format: (value: number) => string
  className?: string
  duration?: number
}

/** Counts between values with ease-out cubic — skips animation when reduced motion is on. */
export default function AnimatedValue({
  value,
  format,
  className,
  duration = 600,
}: AnimatedValueProps) {
  const reducedMotion = useReducedMotion()
  const [display, setDisplay] = useState(value)
  const currentRef = useRef(value)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }

    if (reducedMotion) {
      currentRef.current = value
      setDisplay(value)
      return
    }

    const start = currentRef.current
    const startTime = performance.now()

    function step(now: number) {
      const progress = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = start + (value - start) * eased
      setDisplay(next)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      } else {
        currentRef.current = value
        frameRef.current = null
      }
    }

    frameRef.current = requestAnimationFrame(step)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [value, duration, reducedMotion])

  return <span className={className}>{format(display)}</span>
}
