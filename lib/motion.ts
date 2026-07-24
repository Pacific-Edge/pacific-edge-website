import type { Transition } from "framer-motion"

/* Typed bezier curves — avoids `number[]` vs tuple inference errors. */
/* House curve (default): evenly-distributed quint-out — responds immediately,
   settles gently. Preferred over the front-loaded expo-out below for entrances. */
export const EASE_QUINT:  [number, number, number, number] = [0.22, 1, 0.36, 1]
/* Legacy expo-out — kept only for the home/landing motion already tuned to it.
   Do NOT use for new sub-page work; it dumps ~90% of travel up front (choppy). */
export const EASE_OUT:    [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_LINEAR: [number, number, number, number] = [0, 0, 1, 1]
export const EASE_IN:     [number, number, number, number] = [0.4, 0, 1, 1]
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1]
export const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1]

/* Standard transition presets (home). New sub-page motion uses `reveal` below. */
export const t = {
  fast:   (delay = 0): Transition => ({ duration: 0.3,  delay, ease: EASE_OUT }),
  base:   (delay = 0): Transition => ({ duration: 0.6,  delay, ease: EASE_OUT }),
  slow:   (delay = 0): Transition => ({ duration: 0.85, delay, ease: EASE_OUT }),
  spring: (delay = 0): Transition => ({ duration: 0.6,  delay, ease: EASE_SPRING }),
} as const

/* Premium entrance presets — slow glide-and-settle, quint-out, short travel.
   The Framer-Motion mirror of the CSS `.reveal` retime (sub-page motion). */
export const tReveal = (delay = 0): Transition => ({ duration: 1.1, delay, ease: EASE_QUINT })
export const REVEAL_STAGGER = 0.13

/* Standard enter animation (use with motion.div initial/animate) */
export const fadeUp = {
  hidden:  { opacity: 0, y: 20 } as const,
  visible: { opacity: 1, y: 0  } as const,
}

export const fadeIn = {
  hidden:  { opacity: 0 } as const,
  visible: { opacity: 1 } as const,
}

export const viewportOnce = {
  once: true,
  margin: "-80px",
} as const

export const revealContainer = (stagger = 0.07) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
})

export const revealItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: t.base(),
  },
}
