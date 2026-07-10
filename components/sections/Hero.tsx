"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"
import LightPillar from "@/components/ui/LightPillar"
import { Button } from "@/components/ui/button"

/** Solid colour behind the pillar (section base background, shows through
 *  the pillar's "screen" blend mode). */
const HERO_BACKDROP = "#000000"

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_OUT },
})

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden"
      style={{ background: HERO_BACKDROP }}
    >
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: EASE_OUT }}
      >
        <LightPillar
          intensity={0.85}
          rotationSpeed={0.16}
          glowAmount={0.0045}
          pillarWidth={2.6}
          pillarHeight={0.4}
          noiseIntensity={0.32}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </motion.div>

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero-vignette)" }}
      />

      {/* ── BRAND HERO ── */}
      <div className="relative z-10 container-x pt-16 pb-16 sm:pt-20 sm:pb-24 flex flex-col items-center text-center">

        <motion.p
          className="eyebrow mb-5 text-white-50/60"
          {...(reduce ? {} : enter(0))}
        >
          Dental Clinics · Vancouver, BC
        </motion.p>

        <motion.h1
          className="mb-6 w-full max-w-5xl mx-auto text-center"
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    700,
            fontSize:      "clamp(1.85rem, 5vw, 4.25rem)",
            letterSpacing: "-0.015em",
            lineHeight:    1.1,
            color:         "#FFFFFF",
          }}
          {...(reduce ? {} : enter(0.12))}
        >
          <span className="block">Helping your clinic</span>
          <span className="block">operate with an edge.</span>
        </motion.h1>

        <div className="mb-8 sm:mb-12 max-w-xl mx-auto">
          <motion.p
            className="text-white-50/75"
            style={{
              fontFamily:    "var(--font-ui)",
              fontWeight:    400,
              fontSize:      "clamp(1rem, 1.7vw, 1.25rem)",
              letterSpacing: "-0.01em",
              lineHeight:    1.4,
            }}
            {...(reduce ? {} : enter(0.22))}
          >
            Missed calls answered. Chairs filled. Recalls handled without replacing the team your patients trust.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          {...(reduce ? {} : enter(0.34))}
        >
          <Button
            asChild
            variant="white"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white-50/70"
          >
            <Link href="/contact">Book a Free 15-Min Call</Link>
          </Button>

          <Button
            asChild
            variant="transparent"
            tone="light"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white-50/40"
          >
            <Link href="/dashboard">See the Schedule</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
