"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { EASE_IN, EASE_LINEAR, EASE_OUT } from "@/lib/motion"
import LightPillar from "@/components/ui/LightPillar"
import { Typewriter } from "@/components/ui/typewriter-text"

/** When each animation phase begins (ms from mount). */
const TIMING = {
  preLine1:         500,
  preLine2:         1500,
  preIntroOut:      3000,
  pillar:           4000,
  headline:         4200,
  taglineReveal:    4800,
  typewriter:       4800,
  ctas:             5200,
  unlock:           5200,
} as const

/** How long each element takes to animate in (seconds). */
const IN_DURATIONS = {
  preLine1:         0.85,
  preLine2:         0.85,
  pillar:           8.0,
  headline:         1.8,
  taglineReveal:    0.5,
  ctas:             0.8,
} as const

/** How long each element takes to animate out (seconds). */
const OUT_DURATIONS = {
  preLine1:    0,
  preLine2:    0,
  preIntro:    0.9,
  pillar:      0,
  headline:    0,
  tagline:     0,
  ctas:        0,
} as const

/** Typewriter character interval (ms per character). */
const TYPEWRITER_CHAR_MS = 42

/** Solid colour behind the pillar (section base background, shows through
 *  the pillar's "screen" blend mode). The pillar's own gradient colours
 *  (top/bottom) are configured in LightPillar.tsx — not duplicated here. */
const HERO_BACKDROP = "#000000"

const msToSec = (ms: number) => ms / 1000
const delayAfter = (startMs: number, anchorMs: number) =>
  Math.max(0, msToSec(startMs - anchorMs))

const brandPhaseStart = Math.min(TIMING.pillar, TIMING.headline)
const typewriterPhaseStart = Math.max(TIMING.typewriter, TIMING.taglineReveal)

const PRE_LINE: React.CSSProperties = {
  fontFamily:    "var(--font-ui)",
  fontWeight:    400,
  fontSize:      "clamp(1.25rem, 3vw, 2rem)",
  letterSpacing: "-0.01em",
  lineHeight:    1.3,
}

export default function Hero() {
  const reduce = useReducedMotion()

  const [line1,     setLine1]     = useState(false)
  const [line2,     setLine2]     = useState(false)
  const [linesOut,  setLinesOut]  = useState(false)
  const [pillarIn,  setPillarIn]  = useState(false)
  const [brandIn,   setBrandIn]   = useState(false)
  const [typeOn,    setTypeOn]    = useState(false)
  const [unlocked,  setUnlocked]  = useState(false)

  useEffect(() => {
    if (reduce) {
      setPillarIn(true)
      setBrandIn(true)
      setTypeOn(true)
      setUnlocked(true)
      return
    }

    const timers = [
      setTimeout(() => setLine1(true),    TIMING.preLine1),
      setTimeout(() => setLine2(true),    TIMING.preLine2),
      setTimeout(() => setLinesOut(true), TIMING.preIntroOut),
      setTimeout(() => setPillarIn(true), TIMING.preIntroOut),
      setTimeout(() => setBrandIn(true),  brandPhaseStart),
      setTimeout(() => setTypeOn(true),   typewriterPhaseStart),
      setTimeout(() => setUnlocked(true), TIMING.unlock),
    ]

    return () => timers.forEach(clearTimeout)
  }, [reduce])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: HERO_BACKDROP }}
    >
      {/* LightPillar — starts fading in as pre-lines fade out, finishes as headline arrives */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: pillarIn ? 1 : 0 }}
        transition={{
          duration: pillarIn ? 1.4 : 0,
          ease: EASE_OUT,
        }}
      >
        <LightPillar
          intensity={1.1}
          rotationSpeed={0.22}
          glowAmount={0.006}
          pillarWidth={2.6}
          pillarHeight={0.4}
          noiseIntensity={0.4}
          interactive={false}
          mixBlendMode="screen"
        />
      </motion.div>

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-vignette)" }}
      />

      {/* ── PRE-INTRO OVERLAY ── */}
      {!brandIn && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none select-none"
          animate={{ opacity: linesOut ? 0 : 1 }}
          transition={{ duration: OUT_DURATIONS.preIntro, ease: EASE_OUT }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <motion.p
              className="text-cream-50"
              style={PRE_LINE}
              initial={{ opacity: 0 }}
              animate={{ opacity: line1 ? 1 : 0 }}
              transition={{
                duration: line1 ? IN_DURATIONS.preLine1 : OUT_DURATIONS.preLine1,
                ease: EASE_LINEAR,
              }}
            >
              You run the business.
            </motion.p>

            <motion.p
              className="text-cream-50"
              style={PRE_LINE}
              initial={{ opacity: 0 }}
              animate={{ opacity: line2 ? 1 : 0 }}
              transition={{
                duration: line2 ? IN_DURATIONS.preLine2 : OUT_DURATIONS.preLine2,
                ease: EASE_LINEAR,
              }}
            >
              We&apos;ll give you the business edge.
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* ── BRAND HERO ── */}
      <div className="relative z-10 container-x pt-20 pb-20 sm:pt-28 sm:pb-32 flex flex-col items-center text-center">

        {/* Pacific Edge — slow fade, monumental all-caps, flat white */}
        <motion.h1
          className="mb-6 uppercase"
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    800,
            fontSize:      "clamp(2.25rem, 12vw, 9rem)",
            letterSpacing: "0.06em",
            lineHeight:    1,
            color:         "#FFFFFF",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: brandIn ? 1 : 0, y: brandIn ? 0 : 10 }}
          transition={{
            duration: brandIn ? IN_DURATIONS.headline : OUT_DURATIONS.headline,
            delay: delayAfter(TIMING.headline, brandPhaseStart),
            ease: brandIn ? EASE_IN : EASE_LINEAR,
          }}
        >
          Pacific Edge
        </motion.h1>

        {/* Tagline — one line, placeholder height held so typewriter doesn't shift layout */}
        <div className="mb-8 sm:mb-12 max-w-2xl mx-auto min-h-[1.5rem] sm:min-h-[2.5rem]">
          <motion.p
            className="text-cream-50/75"
            style={{
              fontFamily:    "var(--font-ui)",
              fontWeight:    400,
              fontSize:      "clamp(1rem, 2.5vw, 1.875rem)",
              letterSpacing: "-0.01em",
              lineHeight:    1.3,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: typeOn || reduce ? 1 : 0 }}
            transition={{
              duration: typeOn ? IN_DURATIONS.taglineReveal : OUT_DURATIONS.tagline,
              delay: delayAfter(TIMING.taglineReveal, typewriterPhaseStart),
              ease: EASE_OUT,
            }}
          >
            {reduce ? (
              <>Giving your business the edge it deserves.</>
            ) : typeOn ? (
              <Typewriter
                text={"Giving your business the edge it deserves."}
                speed={TYPEWRITER_CHAR_MS}
                cursor="|"
                cursorClassName="ml-0.5 text-ash-400/60 animate-pulse"
              />
            ) : null}
          </motion.p>
        </div>

        {/* CTAs — appear at unlock */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: unlocked ? 1 : 0, y: unlocked ? 0 : 12 }}
          transition={{
            duration: unlocked ? IN_DURATIONS.ctas : OUT_DURATIONS.ctas,
            delay: delayAfter(TIMING.ctas, TIMING.unlock),
            ease: EASE_OUT,
          }}
          style={{ pointerEvents: unlocked ? "auto" : "none" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-sm font-medium px-7 py-3.5 rounded-full whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-50/70"
            style={{
              fontFamily:      "var(--font-ui)",
              backgroundColor: "var(--color-cream-50)",
              color:           "var(--color-navy-900)",
            }}
          >
            Book a Free 15-Min Call
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center justify-center text-cream-50 text-sm font-medium px-7 py-3.5 rounded-full whitespace-nowrap border border-cream-50/40 transition-colors duration-200 hover:bg-cream-50/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cream-50/40"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            See What We Do →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
