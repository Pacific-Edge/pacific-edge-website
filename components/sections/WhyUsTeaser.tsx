"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import SoftAurora from "@/components/ui/SoftAurora"
import SpeedBlobBackground from "@/components/ui/SpeedBlobBackground"
import { Button } from "@/components/ui/button"
import { LetterSwapForward } from "@/components/ui/letter-swap"
import { WHY_US_PILLARS } from "@/lib/content"
import { EASE_OUT, revealContainer, revealItem, viewportOnce } from "@/lib/motion"
import { cn } from "@/lib/utils"

type VisualProps = { reduce: boolean | null; wide?: boolean }

/** 01 — No jargon: plain-English checklist that checks off in sequence */
function ClarityVisual({ reduce }: VisualProps) {
  const items = [
    { jargon: "Synergize workflows", plain: "We handle the busywork" },
    { jargon: "Leverage AI stack", plain: "Calls get answered" },
    { jargon: "Optimize throughput", plain: "Bookings stay filled" },
  ] as const

  return (
    <div className="relative flex h-full w-full items-end justify-center" aria-hidden>
      <motion.div
        className="w-full max-w-[17rem] rounded-2xl border border-ash-300/50 bg-white-50 p-4 shadow-card sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 24, rotate: -1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: EASE_OUT }}
      >
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <p className="font-ui text-[10px] font-medium uppercase tracking-[0.14em] text-ash-400">
              Plain English
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-midnight-900">
              What we actually mean
            </p>
          </div>
          <motion.span
            className="rounded-pill bg-electric-500/10 px-2 py-1 font-ui text-[10px] font-semibold text-electric-700"
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.35 }}
          >
            Clear
          </motion.span>
        </div>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <motion.li
              key={item.plain}
              className="flex items-start gap-3"
              initial={reduce ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.22, duration: 0.4, ease: EASE_OUT }}
            >
              <motion.span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-electric-500 text-white-50"
                initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.22, duration: 0.35, ease: EASE_OUT }}
              >
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                  <motion.path
                    d="M3.5 8.5L6.5 11.5L12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + i * 0.22, duration: 0.3 }}
                  />
                </svg>
              </motion.span>

              <div className="min-w-0 flex-1 pt-0.5">
                <motion.p
                  className="font-ui text-[11px] leading-none text-midnight-900/35 line-through"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.22, duration: 0.3 }}
                >
                  {item.jargon}
                </motion.p>
                <motion.p
                  className="mt-1 font-ui text-[12px] font-medium leading-snug text-midnight-900 sm:text-[13px]"
                  initial={reduce ? false : { opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.22, duration: 0.35, ease: EASE_OUT }}
                >
                  {item.plain}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

/** 02 — Speed to value: week-one build board + live prototype card */
function SpeedVisual({ reduce }: VisualProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const
  const doneThrough = 4
  const bars = [28, 42, 55, 68, 82, 94]

  return (
    <div className="relative flex h-full w-full items-end justify-center gap-4 sm:gap-5" aria-hidden>
      {/* Week board */}
      <motion.div
        className="relative w-[58%] max-w-[22rem] rounded-2xl border border-ash-300/50 bg-white-50 p-4 shadow-card sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 28, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-ui text-[10px] font-medium uppercase tracking-[0.14em] text-ash-400">
              Build week
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-midnight-900 sm:text-base">
              Prototype timeline
            </p>
          </div>
          <motion.span
            className="rounded-pill bg-electric-500 px-2.5 py-1 font-ui text-[10px] font-semibold text-white-50"
            initial={reduce ? false : { scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.4, ease: EASE_OUT }}
          >
            Week one
          </motion.span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {days.map((day, i) => {
            const done = i <= doneThrough
            const active = i === doneThrough
            return (
              <div key={day} className="flex flex-col items-center gap-2">
                <span className="font-ui text-[9px] text-midnight-900/40 sm:text-[10px]">{day}</span>
                <motion.div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg sm:h-9 sm:w-9",
                    done ? "bg-electric-500 text-white-50" : "bg-midnight-900/6 text-midnight-900/25",
                    active && "ring-2 ring-electric-300 ring-offset-2 ring-offset-white-50",
                  )}
                  initial={reduce ? false : { scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.35, ease: EASE_OUT }}
                >
                  {done ? (
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                      <motion.path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={reduce ? false : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
                      />
                    </svg>
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>

        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-ui text-[11px] text-midnight-900/50">Build progress</span>
            <motion.span
              className="font-display text-sm font-bold text-electric-500"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              94%
            </motion.span>
          </div>
          <div className="h-2 overflow-hidden rounded-pill bg-midnight-900/8">
            <motion.div
              className="h-full rounded-pill bg-gradient-to-r from-electric-700 to-electric-400"
              initial={reduce ? false : { width: "0%" }}
              whileInView={{ width: "94%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 1.1, ease: EASE_OUT }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating metric stack */}
      <div className="relative mb-2 flex w-[38%] max-w-[13rem] flex-col gap-3">
        <motion.div
          className="rounded-2xl border border-ash-300/45 bg-white-50 p-3.5 shadow-card sm:p-4"
          initial={reduce ? false : { opacity: 0, x: 24, y: 16 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.65, ease: EASE_OUT }}
        >
          <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-ash-400">
            Days to live
          </p>
          <div className="mt-1 flex items-end gap-1">
            <motion.span
              className="font-display text-3xl font-bold leading-none text-midnight-900 sm:text-4xl"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.45 }}
            >
              7
            </motion.span>
            <span className="mb-1 font-ui text-xs text-midnight-900/40">days</span>
          </div>
          <div className="mt-3 flex h-12 items-end gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={h}
                className={cn(
                  "flex-1 rounded-sm",
                  i === bars.length - 1 ? "bg-electric-500" : "bg-electric-500/25",
                )}
                initial={reduce ? false : { height: 4 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.55, ease: EASE_OUT }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-electric-500/20 bg-midnight-900 p-3.5 text-white-50 shadow-card sm:p-4"
          initial={reduce ? false : { opacity: 0, x: 28, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.65, ease: EASE_OUT }}
        >
          <div className="flex items-center gap-2">
            {!reduce ? (
              <motion.span
                className="h-2 w-2 rounded-full bg-electric-300"
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <span className="h-2 w-2 rounded-full bg-electric-300" />
            )}
            <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-white-50/55">
              Status
            </span>
          </div>
          <p className="mt-2 font-display text-sm font-semibold leading-snug sm:text-base">
            Working prototype
          </p>
          <p className="mt-1 font-ui text-[11px] text-white-50/50">Ready for walkthrough</p>
        </motion.div>
      </div>
    </div>
  )
}

/** 03 — Built to deliver: six-month engagement + transparent pricing card */
function DeliverVisual({ reduce }: VisualProps) {
  const phases = [
    { label: "Setup", month: "M1" },
    { label: "Launch", month: "M2" },
    { label: "Tune", month: "M3" },
    { label: "Scale", month: "M4" },
    { label: "Review", month: "M5" },
    { label: "Renew", month: "M6" },
  ] as const
  const activePhase = 2
  const lineItems = [
    { label: "Engagement length", value: "6 months" },
    { label: "Pricing", value: "Quoted upfront" },
    { label: "Surprises", value: "None" },
  ] as const

  return (
    <div className="relative flex h-full w-full items-end justify-center gap-4 sm:gap-5" aria-hidden>
      {/* Engagement roadmap */}
      <motion.div
        className="relative w-[58%] max-w-[24rem] rounded-2xl border border-ash-300/50 bg-white-50 p-4 shadow-card sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 28, rotate: 1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="font-ui text-[10px] font-medium uppercase tracking-[0.14em] text-ash-400">
              Engagement
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-midnight-900 sm:text-base">
              Six-month roadmap
            </p>
          </div>
          <motion.div
            className="rounded-xl bg-electric-100/60 px-2.5 py-1.5 text-right"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <p className="font-display text-lg font-bold leading-none text-electric-700">6</p>
            <p className="mt-0.5 font-ui text-[9px] text-electric-700/70">months</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-3.5 h-px bg-ash-300/70" />
          <motion.div
            className="absolute left-[8%] top-3.5 h-px bg-electric-500"
            initial={reduce ? false : { width: "0%" }}
            whileInView={{ width: `${(activePhase / (phases.length - 1)) * 84}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: EASE_OUT }}
          />
          <div className="relative grid grid-cols-6 gap-1">
            {phases.map((phase, i) => {
              const done = i <= activePhase
              const active = i === activePhase
              return (
                <div key={phase.month} className="flex flex-col items-center gap-2">
                  <motion.div
                    className={cn(
                      "relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 sm:h-8 sm:w-8",
                      done
                        ? "border-electric-500 bg-electric-500 text-white-50"
                        : "border-ash-300 bg-white-50 text-midnight-900/30",
                    )}
                    initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: EASE_OUT }}
                  >
                    {done && i < activePhase ? (
                      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                        <path
                          d="M3.5 8.5L6.5 11.5L12.5 4.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <span className="font-ui text-[9px] font-semibold">{i + 1}</span>
                    )}
                    {active && !reduce ? (
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-electric-300"
                        animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                      />
                    ) : null}
                  </motion.div>
                  <motion.div
                    className="text-center"
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 + i * 0.08, duration: 0.35 }}
                  >
                    <p className="font-ui text-[9px] font-medium text-midnight-900/70 sm:text-[10px]">
                      {phase.label}
                    </p>
                    <p className="font-ui text-[8px] text-midnight-900/35">{phase.month}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="mt-5 flex items-center gap-2 rounded-xl bg-midnight-900/[0.04] px-3 py-2.5"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric-500" />
          <p className="font-ui text-[11px] text-midnight-900/55">
            Currently in <span className="font-medium text-midnight-900">Tune</span> · Month 3
          </p>
        </motion.div>
      </motion.div>

      {/* Transparent pricing card */}
      <motion.div
        className="mb-3 w-[38%] max-w-[14rem] rounded-2xl border border-ash-300/45 bg-white-50 p-4 shadow-card sm:p-5"
        initial={reduce ? false : { opacity: 0, x: 24, y: 18, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 2 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7, ease: EASE_OUT }}
      >
        <p className="font-ui text-[10px] uppercase tracking-[0.12em] text-ash-400">
          Pricing
        </p>
        <p className="mt-1 font-display text-sm font-semibold text-midnight-900 sm:text-base">
          Clear from day one
        </p>

        <div className="mt-4 space-y-0">
          {lineItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center justify-between border-t border-ash-300/50 py-2.5 first:border-t-0 first:pt-0"
              initial={reduce ? false : { opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.4, ease: EASE_OUT }}
            >
              <span className="font-ui text-[11px] text-midnight-900/45">{item.label}</span>
              <span className="font-ui text-[11px] font-semibold text-midnight-900">{item.value}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-3 overflow-hidden rounded-xl bg-electric-500 px-3 py-2.5 text-center"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.95, duration: 0.45, ease: EASE_OUT }}
        >
          <p className="font-ui text-[11px] font-semibold text-white-50">No hidden fees</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

/** 04 — Local & hands-on: pulse rings */
function LocalVisual({ reduce, wide }: VisualProps) {
  const w = wide ? 420 : 280
  const h = wide ? 300 : 280
  const cx = w / 2
  const cy = h * 0.36
  const ringStep = wide ? 28 : 24
  const coreR = wide ? 12 : 10
  const pulseMax = wide ? 68 : 56
  const outerR = 22 + 3 * ringStep
  const labelGap = 28

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full overflow-visible" aria-hidden>
      {[1, 2, 3, ...(wide ? [4] : [])].map((ring) => (
        <motion.circle
          key={ring}
          cx={cx}
          cy={cy}
          r={22 + ring * ringStep}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="text-electric-500"
          initial={reduce ? false : { opacity: 0, scale: 0.65 }}
          whileInView={{ opacity: 0.5 - ring * 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 + ring * 0.1, ease: EASE_OUT }}
        />
      ))}
      <motion.circle
        cx={cx}
        cy={cy}
        r={coreR}
        className="fill-electric-500"
        initial={reduce ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15, ease: EASE_OUT }}
      />
      {!reduce ? (
        <motion.circle
          cx={cx}
          cy={cy}
          r={coreR}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-electric-400"
          animate={{ r: [coreR, pulseMax], opacity: [0.5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
      ) : null}
      <motion.text
        x={cx}
        y={cy + outerR + labelGap}
        textAnchor="middle"
        className="fill-midnight-900/45"
        style={{ fontSize: 12, fontFamily: "var(--font-ui)" }}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        Vancouver, BC
      </motion.text>
    </svg>
  )
}

const PILLAR_VISUALS = [ClarityVisual, SpeedVisual, DeliverVisual, LocalVisual] as const

/** Top: 1/3 + 2/3 · Bottom: 2/3 + 1/3 */
const BENTO_SPAN = [
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
] as const

/** Curved line fields — one composition per card, no gradient washes */
const CARD_CURVES = [
  // No jargon — tight vertical curves (rotated -45° in render)
  [
    "M 200 -60 C 175 60, 225 160, 195 280 S 230 400, 200 520",
    "M 240 -60 C 215 60, 265 160, 235 280 S 270 400, 240 520",
    "M 280 -60 C 255 60, 305 160, 275 280 S 310 400, 280 520",
    "M 320 -60 C 295 60, 345 160, 315 280 S 350 400, 320 520",
    "M 360 -60 C 335 60, 385 160, 355 280 S 390 400, 360 520",
    "M 400 -60 C 375 60, 425 160, 395 280 S 430 400, 400 520",
    "M 440 -60 C 415 60, 465 160, 435 280 S 470 400, 440 520",
  ],
  // wide horizontal flow
  [
    "M-60 80 C 120 20, 240 140, 420 70 S 700 10, 900 90",
    "M-40 130 C 140 70, 260 190, 440 120 S 720 60, 920 140",
    "M-20 180 C 160 120, 280 240, 460 170 S 740 110, 940 190",
    "M0 230 C 180 170, 300 290, 480 220 S 760 160, 960 240",
    "M20 280 C 200 220, 320 340, 500 270 S 780 210, 980 290",
  ],
  // wide rising arcs from bottom-left
  [
    "M-80 360 C 60 300, 180 200, 340 260 S 560 320, 720 200",
    "M-60 400 C 80 340, 200 240, 360 300 S 580 360, 740 240",
    "M-40 440 C 100 380, 220 280, 380 340 S 600 400, 760 280",
    "M-20 480 C 120 420, 240 320, 400 380 S 620 440, 780 320",
    "M0 520 C 140 460, 260 360, 420 420 S 640 480, 800 360",
  ],
  // concentric-ish corner curves top-left
  [
    "M-30 -20 C 40 60, 20 140, 100 200 S 180 280, 260 240",
    "M-50 10 C 20 90, 0 170, 80 230 S 160 310, 240 270",
    "M-70 40 C 0 120, -20 200, 60 260 S 140 340, 220 300",
    "M-90 70 C -20 150, -40 230, 40 290 S 120 370, 200 330",
  ],
] as const

function CardCurveBackground({
  variant,
  reduce,
}: {
  variant: number
  reduce: boolean | null
}) {
  const paths = CARD_CURVES[variant] ?? CARD_CURVES[0]
  const angled = variant === 0

  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-electric-500",
        angled && "origin-center scale-[1.65] -rotate-45",
      )}
      viewBox="0 0 640 420"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((d, i) => {
        const opacity = 0.12 + i * 0.035
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
              delay: reduce ? 0 : 0.12 + i * 0.09,
              ease: EASE_OUT,
            }}
          />
        )
      })}
      {!reduce
        ? paths.map((d, i) => (
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

export default function WhyUsTeaser() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-10 md:pt-36 md:pb-12 lg:pt-44 lg:pb-14">

      <div className="container-x relative z-10">
        <motion.h2
          className="max-w-4xl font-display text-midnight-900"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          Why Pacific Edge
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealContainer(0.1)}
          className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6"
        >
          {WHY_US_PILLARS.map((pillar, index) => {
            const Visual = PILLAR_VISUALS[index]
            const wide = index === 1 || index === 2
            const isLocal = index === 3
            const isSpeed = index === 1
            const isDeliver = index === 2
            const lightOnDark = isSpeed || isDeliver

            return (
              <motion.article
                key={pillar.title}
                variants={revealItem}
                className={cn(
                  "group relative flex min-h-[24rem] flex-col rounded-none p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:min-h-[26rem] sm:p-9 lg:min-h-[30rem]",
                  isLocal ? "overflow-visible" : "overflow-hidden",
                  isSpeed
                    ? "border border-white/15 bg-electric-500"
                    : isDeliver
                      ? "border border-white-50/12 bg-black"
                      : isLocal
                        ? "border border-ash-300/45 bg-schedule-lattice"
                        : "border border-ash-300/45 bg-white-50",
                  BENTO_SPAN[index],
                  wide && "lg:min-h-[32rem]",
                )}
              >
                {isSpeed ? (
                  <SpeedBlobBackground />
                ) : isDeliver ? (
                  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                    <SoftAurora
                      orientation="vertical"
                      speed={0.6}
                      scale={0.7}
                      brightness={1.15}
                      color1="#5FD0BC"
                      color2="#0A8474"
                      noiseFrequency={3.5}
                      noiseAmplitude={2}
                      bandHeight={0.5}
                      bandSpread={1.0}
                      octaveDecay={0.25}
                      layerOffset={0.25}
                      colorSpeed={0.4}
                      enableMouseInteraction
                      mouseInfluence={0.1}
                    />
                  </div>
                ) : isLocal ? null : (
                  <CardCurveBackground variant={index} reduce={reduce} />
                )}

                <div className="relative z-10 flex h-full flex-col">
                  <h3
                    className={cn(
                      "max-w-md font-display font-semibold tracking-tight",
                      lightOnDark ? "text-white-50" : "text-midnight-900",
                      wide
                        ? "text-[1.65rem] leading-snug sm:text-3xl lg:max-w-lg lg:text-[2rem]"
                        : "text-2xl leading-snug sm:text-[1.65rem]",
                    )}
                  >
                    <LetterSwapForward
                      label={pillar.title}
                      className="!justify-start cursor-default"
                      staggerDuration={0.025}
                    />
                  </h3>

                  <p
                    className={cn(
                      "mt-3 font-ui leading-relaxed",
                      lightOnDark ? "text-white-50/60" : "text-midnight-900/55",
                      wide ? "max-w-md text-base" : "max-w-xs text-sm sm:text-[0.95rem]",
                    )}
                  >
                    {pillar.description}
                  </p>

                  <div
                    className={cn(
                      "relative",
                      isLocal ? "mt-4 flex flex-1 items-center pt-2" : "mt-auto pt-8",
                    )}
                  >
                    <div
                      className={cn(
                        "w-full",
                        lightOnDark ? "text-white-50" : "text-midnight-900",
                        isLocal
                          ? "h-64 overflow-visible sm:h-72 lg:h-80"
                          : wide
                            ? "h-56 sm:h-64 lg:h-72"
                            : "h-44 sm:h-52 lg:h-56",
                      )}
                    >
                      {Visual ? <Visual reduce={reduce} wide={wide} /> : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={revealContainer(0.08)}
          className="mt-10 flex justify-center sm:mt-12 lg:mt-14"
        >
          <motion.div variants={revealItem}>
            <Button asChild variant="black">
              <Link href="/why-us">See more</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
