"use client";

import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface HeroCountUpProps {
  /** Target value counted up from 0 */
  to: number;
  /** Delay before counting begins once in view (s) */
  delay?: number;
  /** Spring feel */
  duration?: number;
}

/**
 * Spring count-up (0 → `to`) with zero layout shift: a hidden ghost of the final
 * value reserves the box, and the live number is right-anchored inside it so the
 * ones digit stays pinned to whatever follows (e.g. the "%").
 */
export default function HeroCountUp({ to, delay = 0.6, duration = 1.6 }: HeroCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const liveRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const reduce = useReducedMotion();

  // Snappy, lightly-damped spring: stays fast almost all the way to `to`, then a
  // short gentle settle (damping ratio ~1.25 → no overshoot past `to`, no long tail).
  const stiffness = 55 * (1 / duration);
  const damping = 2 * 1.25 * Math.sqrt(stiffness);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping, stiffness });

  useEffect(() => {
    if (liveRef.current) liveRef.current.textContent = "0";
  }, []);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      if (liveRef.current) liveRef.current.textContent = String(to);
      return;
    }
    const t = setTimeout(() => mv.set(to), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, reduce, to, delay, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (liveRef.current) liveRef.current.textContent = String(Math.round(latest));
    });
    return unsub;
  }, [spring]);

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
      {/* Ghost reserves the width of the final value so "%" never shifts */}
      <span aria-hidden style={{ visibility: "hidden" }}>
        {to}
      </span>
      <span
        ref={liveRef}
        style={{ position: "absolute", inset: 0, textAlign: "right" }}
      >
        {reduce ? to : 0}
      </span>
    </span>
  );
}
