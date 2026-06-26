"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"

/* ─── Step data ──────────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    detail: "15 min",
    body: "We align fast. In 15 minutes you'll have clarity on what gets built, the timeline, and the cost. No pitch, just signal.",
  },
  {
    number: "02",
    title: "Deep-Dive Session",
    detail: "60 min",
    body: "We map your workflows, data, and friction points. Everything that follows is built on what we learn here.",
  },
  {
    number: "03",
    title: "Custom Build",
    detail: "Week one",
    body: "Built to your stack. Daily check-ins, no black boxes. Code ships on your schedule.",
  },
  {
    number: "04",
    title: "Launch & Train",
    detail: "Day one",
    body: "Go live with your team confident and ready. Full handoff documentation and a live walkthrough included.",
  },
  {
    number: "05",
    title: "Optimize & Support",
    detail: "Ongoing",
    body: "Real usage reveals real friction. We stay close post-launch to iterate and make sure it earns its keep.",
  },
] as const

type StepData = (typeof STEPS)[number]

/* ─── Root component ─────────────────────────────────────────────────────── */

export default function ProcessTeaser() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    // Instantly show all steps when motion is reduced
    if (reduce) {
      setProgress(1)
      return
    }

    const el = containerRef.current
    if (!el) return

    // Sticky scroll driver is desktop/tablet only — mobile uses IntersectionObserver
    const mq = window.matchMedia("(min-width: 768px)")
    if (!mq.matches) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      // Total scrollable distance = container height minus one viewport height
      const scrollableDistance = el.offsetHeight - window.innerHeight
      if (scrollableDistance <= 0) return
      // rect.top starts at 0 when container hits viewport top, then goes negative
      const p = Math.max(0, Math.min(1, -rect.top / scrollableDistance))
      setProgress(p)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initialise immediately in case page loads mid-section
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [reduce])

  // Column i activates when progress passes i × 20 %.
  // At progress = 0: only column 0 is active (first step always lit on enter).
  // At progress ≥ 0.8: all five are active.
  const activeCount = reduce ? 5 : Math.min(5, Math.floor(progress / 0.2) + 1)

  return (
    <>
      {/* ── Desktop + tablet: scroll-pinned five-column layout ─────────── */}
      <div
        ref={containerRef}
        className="relative hidden md:block"
        style={{ minHeight: "500vh" }}
        aria-label="Our process in five steps"
      >
        <div className="sticky top-0 w-full h-screen flex flex-col overflow-hidden bg-[var(--color-cream-50)]">

          {/* Header row — top 25 % of viewport, eyebrow + heading only */}
          <div
            className="flex items-end w-full shrink-0 border-b border-[var(--color-ash-300)]/50"
            style={{
              height: "25vh",
              padding: "0 2.5rem 2rem",
            }}
          >
            <div>
              <p className="eyebrow text-[var(--color-ash-400)] mb-3">The Process</p>
              <h2 className="text-display-md text-[var(--color-navy-900)]">
                Five steps, one week.
              </h2>
            </div>
          </div>

          {/* Columns row — top-aligned content, fills space between header and CTA */}
          <div className="flex flex-1 w-full min-h-0 border-b border-[var(--color-ash-300)]/50">
            {STEPS.map((step, i) => (
              <DesktopColumn
                key={step.number}
                step={step}
                isActive={i < activeCount}
                showDivider={i > 0}
              />
            ))}
          </div>

          {/* CTA row — centered button, sits above the progress bar */}
          <div
            className="shrink-0 flex justify-center items-center"
            style={{ paddingTop: "2rem", paddingBottom: "2.75rem" }}
          >
            <Link href="/process" className="btn-primary">
              Full process details →
            </Link>
          </div>

          {/* Progress bar — 2 px at very bottom edge */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: "2px", backgroundColor: "var(--color-ash-300)", opacity: 0.4 }}
            aria-hidden="true"
          >
            <div
              style={{
                height: "100%",
                width: `${progress * 100}%`,
                backgroundColor: "var(--color-electric-500)",
                transition: "width 0.06s linear",
              }}
            />
          </div>

        </div>
      </div>

      {/* ── Mobile: vertical list, IntersectionObserver fade-up ─────────── */}
      <section
        className="md:hidden bg-[var(--color-cream-50)] section-py"
        aria-label="Our process in five steps"
      >
        <div className="container-x">
          <div className="mb-10">
            <p className="eyebrow text-[var(--color-ash-400)] mb-3">The Process</p>
            <h2 className="text-display-md text-[var(--color-navy-900)]">
              Five steps, one week.
            </h2>
          </div>

          <ol className="flex flex-col divide-y divide-[var(--color-ash-300)]/50">
            {STEPS.map((step, i) => (
              <MobileStep key={step.number} step={step} index={i} />
            ))}
          </ol>

          <div className="mt-10">
            <Link
              href="/process"
              className="font-ui text-sm text-[var(--color-navy-900)]/50 hover:text-[var(--color-navy-900)] underline underline-offset-4 transition-colors duration-200"
            >
              Full process details →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Desktop column ─────────────────────────────────────────────────────── */

function DesktopColumn({
  step,
  isActive,
  showDivider,
}: {
  step: StepData
  isActive: boolean
  showDivider: boolean
}) {
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)"
  // Longer duration = perceptibly smooth fade, not a snap
  const dur = { bg: "0.75s", num: "0.65s", badge: "0.6s", title: "0.65s", body: "0.7s" }

  return (
    <div
      className="flex-1 flex flex-col justify-start overflow-hidden"
      style={{
        borderLeft: showDivider ? "1px solid rgba(155, 170, 189, 0.55)" : "none",
        backgroundColor: isActive ? "rgba(26,109,206,0.038)" : "var(--color-cream-50)",
        transition: `background-color ${dur.bg} ${ease}`,
        padding: "2.5rem 1.75rem 2rem",
      }}
    >
      {/* Large step number — always electric, opacity fades (no colour jump) */}
      <div
        className="select-none"
        aria-label={`Step ${step.number}`}
        style={{ marginBottom: "1.5rem" }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(4rem, 8vw, 7.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "var(--color-electric-500)",
            opacity: isActive ? 1 : 0.14,
            transition: `opacity ${dur.num} ${ease}`,
          }}
        >
          {step.number}
        </span>
      </div>

      {/* Text block — sits immediately below the number */}
      <div>
        {/* Timing badge */}
        <span
          className="eyebrow block mb-2"
          style={{
            color: "var(--color-ash-400)",
            opacity: isActive ? 1 : 0.2,
            transition: `opacity ${dur.badge} ${ease}`,
          }}
        >
          {step.detail}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--color-navy-900)",
            opacity: isActive ? 1 : 0.18,
            transition: `opacity ${dur.title} ${ease}`,
            marginBottom: "0.65rem",
          }}
        >
          {step.title}
        </h3>

        {/* Body copy */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.8125rem",
            lineHeight: 1.65,
            color: "var(--color-ash-500)",
            opacity: isActive ? 1 : 0.15,
            transition: `opacity ${dur.body} ${ease}`,
          }}
        >
          {step.body}
        </p>
      </div>
    </div>
  )
}

/* ─── Mobile step ────────────────────────────────────────────────────────── */

function MobileStep({
  step,
  index,
}: {
  step: StepData
  index: number
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.52, delay: index * 0.05, ease: EASE_OUT }}
      className="flex gap-4 items-start py-8"
    >
      {/* Step number */}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "2rem",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "var(--color-electric-500)",
          flexShrink: 0,
          width: "2.5rem",
        }}
        aria-hidden="true"
      >
        {String(Number(step.number))}
      </span>

      <div className="flex-1 pt-1 min-w-0">
        <span
          className="eyebrow text-[var(--color-ash-400)] block mb-2"
        >
          {step.detail}
        </span>
        <h3
          className="text-[var(--color-navy-900)] leading-snug mb-3"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1.125rem",
          }}
        >
          {step.title}
        </h3>
        <p
          className="text-sm leading-relaxed text-[var(--color-ash-500)]"
          style={{ fontFamily: "var(--font-ui)" }}
        >
          {step.body}
        </p>
      </div>
    </motion.li>
  )
}

