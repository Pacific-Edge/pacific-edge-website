"use client"

import { motion, useReducedMotion } from "framer-motion"

/**
 * Curved line field — parallel bezier curves rotated off-axis and drawn in via a
 * `pathLength` reveal, with a faint drifting duplicate underneath (the two-layer
 * "widely spaced line + subtle animated complement" effect). This is the canonical
 * `diag-wide` pattern: StyledContainer renders it for `pattern="diag-wide"` as a
 * background layer (`.sc-curve`), colored via `currentColor` from `.sc-bg-*` rules.
 *
 * Curves run the full width and extend far past the top/bottom of the 640×420 viewBox
 * so that after the `scale-1.65 -rotate-45 slice` transform NO endpoint is ever visible
 * inside the card — you only see continuous diagonals. Self-contained (reads
 * `useReducedMotion` itself), so a server component can render it directly.
 */
const COLS = [80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560]
// Near-vertical S-curve per column, spanning y = -280 → 780 (well beyond the 0–420
// viewBox) with the same gentle ±25/30px wiggle the approved short version had.
const curve = (x: number) =>
  `M ${x} -280 C ${x + 10} -140, ${x - 25} -20, ${x} 60 S ${x + 25} 160, ${x - 5} 280 S ${x + 30} 400, ${x} 520 S ${x - 20} 640, ${x} 780`
const CARD_CURVES = COLS.map(curve)

export default function CardCurveBackground({
  className = "",
}: {
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full origin-center scale-[1.65] -rotate-45 ${className}`}
      viewBox="0 0 640 420"
      preserveAspectRatio="xMidYMid slice"
    >
      {CARD_CURVES.map((d, i) => {
        const opacity = 0.1 + i * 0.018
        return (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.35}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? { opacity } : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity }}
            viewport={{ once: true }}
            transition={{
              duration: reduce ? 0 : 1.35,
              delay: reduce ? 0 : 0.12 + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        )
      })}
      {!reduce
        ? CARD_CURVES.map((d, i) => (
            <motion.g
              key={`drift-${i}`}
              animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
              transition={{
                duration: 9 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
            >
              <path
                d={d}
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity={0.05}
              />
            </motion.g>
          ))
        : null}
    </svg>
  )
}
