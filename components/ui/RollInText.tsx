"use client"

import type { CSSProperties } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { EASE_OUT, viewportOnce } from "@/lib/motion"

type RollInTextProps = {
  children: string
  /** Split unit — words roll in as whole chunks, chars for tighter headline reveals. */
  by?: "word" | "char"
  className?: string
  style?: CSSProperties
  /** Delay before the first unit starts, in seconds. */
  delay?: number
  /** Gap between each unit's start, in seconds. */
  stagger?: number
  duration?: number
  as?: "span" | "h1" | "h2" | "h3" | "p"
  /** Re-trigger every time the element enters the viewport instead of once. */
  once?: boolean
}

/**
 * Rolls text in from below, masked by an overflow-hidden wrapper per unit —
 * each word (or character) rotates up into place like a mechanical display.
 */
export default function RollInText({
  children,
  by = "word",
  className,
  style,
  delay = 0,
  stagger = 0.045,
  duration = 0.7,
  as = "span",
  once = true,
}: RollInTextProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  const units =
    by === "word"
      ? children.split(/(\s+)/).filter((unit) => unit.length > 0)
      : children.split("")

  if (reduce) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    )
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  const unit: Variants = {
    hidden: { y: "110%", rotateX: 60, opacity: 0 },
    visible: {
      y: "0%",
      rotateX: 0,
      opacity: 1,
      transition: { duration, ease: EASE_OUT },
    },
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, margin: "-80px" }}
      variants={container}
      style={{ ...style, perspective: 400 }}
    >
      {units.map((textUnit, index) =>
        textUnit.trim() === "" ? (
          <span key={`space-${index}`}>{textUnit}</span>
        ) : (
          <span
            key={`${textUnit}-${index}`}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: by === "word" ? "top" : "bottom" }}
          >
            <motion.span
              variants={unit}
              className="inline-block"
              style={{ transformOrigin: "50% 100%" }}
            >
              {textUnit}
            </motion.span>
          </span>
        ),
      )}
    </Tag>
  )
}
