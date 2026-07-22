"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Axis = "x" | "y";

interface HeroRollProps {
  /** Ordered tokens; the roller stops on the last one. e.g. ["1","2","3"] */
  sequence: string[];
  /** "x" = horizontal slide, "y" = vertical roll */
  axis?: Axis;
  /** -1 = enters from left/top (exits right/bottom); +1 = enters from right/bottom (exits left/top) */
  enterFrom?: -1 | 1;
  /** Dwell per token before advancing (ms) */
  stepMs?: number;
  /** Delay before the first token animates in (ms) */
  startDelayMs?: number;
  /** Token used to reserve the fixed box size. Defaults to the widest in `sequence`. */
  sizer?: string;
  /** Cycle the sequence forever (spinning dial) instead of stopping on the last token. */
  loop?: boolean;
  /** Accessible/static value (screen readers + reduced motion). Defaults to the last token. */
  srValue?: string;
}

/**
 * In-place token roller with zero layout shift: a hidden ghost reserves the box
 * for the widest token, and animated glyphs are absolutely positioned inside a
 * clipped window, so nothing around it ever moves or resizes.
 */
export default function HeroRoll({
  sequence,
  axis = "y",
  enterFrom = -1,
  stepMs = 400,
  startDelayMs = 2600,
  sizer,
  loop = false,
  srValue,
}: HeroRollProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const reduce = useReducedMotion();

  const last = sequence.length - 1;
  const finalValue = srValue ?? sequence[last];
  const [i, setI] = useState(0);

  const ghost = sizer ?? sequence.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    if (!inView || reduce) return;
    if (!loop && i >= last) return;
    const delay = i === 0 ? startDelayMs : stepMs;
    const t = setTimeout(
      () => setI((n) => (loop ? (n + 1) % sequence.length : n + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [inView, reduce, i, last, stepMs, startDelayMs, loop, sequence.length]);

  // Reduced motion: render the accessible/static value, no animation.
  if (reduce) {
    return (
      <span style={{ verticalAlign: "bottom", lineHeight: 1 }}>{finalValue}</span>
    );
  }

  const enter = `${enterFrom * 100}%`;
  const exit = `${-enterFrom * 100}%`;
  const transition = { type: "spring", damping: 26, stiffness: 320 } as const;

  return (
    <span
      ref={ref}
      style={{
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        lineHeight: 1,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {/* Ghost reserves exact W×H so neighbors never reflow */}
      <span aria-hidden style={{ visibility: "hidden" }}>
        {ghost}
      </span>
      <span
        aria-hidden
        style={{ position: "absolute", inset: 0, overflow: "hidden" }}
      >
        {inView && (
          <AnimatePresence initial>
            <motion.span
              key={i}
              initial={{ [axis]: enter }}
              animate={{ [axis]: 0 }}
              exit={{ [axis]: exit }}
              transition={transition}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {sequence[i]}
            </motion.span>
          </AnimatePresence>
        )}
      </span>
      {/* Accessible static value */}
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        {finalValue}
      </span>
    </span>
  );
}
