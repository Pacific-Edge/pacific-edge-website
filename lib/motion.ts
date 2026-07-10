import type { Transition } from "framer-motion"

/* Typed bezier curves — avoids `number[]` vs tuple inference errors. */
export const EASE_OUT:    [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_LINEAR: [number, number, number, number] = [0, 0, 1, 1]
export const EASE_IN:     [number, number, number, number] = [0.4, 0, 1, 1]
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1]
export const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1]

/* Standard transition presets */
export const t = {
  fast:   (delay = 0): Transition => ({ duration: 0.3,  delay, ease: EASE_OUT }),
  base:   (delay = 0): Transition => ({ duration: 0.6,  delay, ease: EASE_OUT }),
  slow:   (delay = 0): Transition => ({ duration: 0.85, delay, ease: EASE_OUT }),
  spring: (delay = 0): Transition => ({ duration: 0.6,  delay, ease: EASE_SPRING }),
} as const

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
