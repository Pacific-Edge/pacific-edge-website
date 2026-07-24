"use client"

import { motion, useReducedMotion } from "framer-motion"
import SoftAurora from "@/components/ui/SoftAurora"
import StyledContainer from "@/components/ui/StyledContainer"
import { cn } from "@/lib/utils"

const WHY_US_PILLARS = [
  {
    title: "No jargon",
    description: "We explain what we build in plain English. If it doesn't make sense, we haven't done our job.",
  },
  {
    title: "Speed to value",
    description: "Working prototype in week one.",
  },
  {
    title: "Built to deliver",
    description: "Six-month engagements with pricing quoted upfront.",
  },
  {
    title: "Local & hands-on",
    description: "Vancouver-based. We'll meet you at your shop, learn your workflow, and build around it.",
  },
] as const

type VisualProps = { reduce: boolean | null; wide?: boolean }

/** 01 — No jargon: plain-English checklist that checks off in sequence */
function ClarityVisual({ reduce }: VisualProps) {
  const items = [
    { jargon: "Synergize workflows", plain: "We handle the busywork" },
    { jargon: "Leverage AI stack", plain: "Calls get answered" },
    { jargon: "Optimize throughput", plain: "Chairs stay filled" },
  ] as const

  return (
    <div className="relative flex h-full w-full items-end justify-center" aria-hidden>
      <motion.div
        className="w-full max-w-[17rem] rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-[var(--shadow-mock)] sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 24, rotate: -1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text3)]">
              Plain English
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-[var(--color-text)]">
              What we actually mean
            </p>
          </div>
          <motion.span
            className="rounded-[var(--radius)] bg-[color-mix(in_oklab,var(--color-accent)_14%,transparent)] px-2 py-1 font-body text-[10px] font-semibold text-[var(--color-accent-ink)]"
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
              transition={{ delay: 0.2 + i * 0.22, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + i * 0.22, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
                  className="font-body text-[11px] leading-none text-[var(--color-text3)] line-through"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.22, duration: 0.3 }}
                >
                  {item.jargon}
                </motion.p>
                <motion.p
                  className="mt-1 font-body text-[12px] font-medium leading-snug text-[var(--color-text)] sm:text-[13px]"
                  initial={reduce ? false : { opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.22, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
        className="relative w-[58%] max-w-[22rem] rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-[var(--shadow-mock)] sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 28, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text3)]">
              Build week
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-[var(--color-text)] sm:text-base">
              Prototype timeline
            </p>
          </div>
          <motion.span
            className="rounded-[var(--radius)] bg-[var(--color-accent)] px-2.5 py-1 font-body text-[10px] font-semibold text-[var(--color-on-accent)]"
            initial={reduce ? false : { scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                <span className="font-body text-[9px] text-[var(--color-text3)] sm:text-[10px]">{day}</span>
                <motion.div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded sm:h-9 sm:w-9",
                    done ? "bg-[var(--color-accent)] text-[var(--color-on-accent)]" : "bg-[var(--color-text)]/6 text-[var(--color-text3)]",
                    active && "ring-2 ring-[var(--color-accent)]/50 ring-offset-2 ring-offset-[var(--color-bg)]",
                  )}
                  initial={reduce ? false : { scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
            <span className="font-body text-[11px] text-[var(--color-text2)]">Build progress</span>
            <motion.span
              className="font-display text-sm font-bold text-[var(--color-accent-ink)]"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              94%
            </motion.span>
          </div>
          <div className="h-2 overflow-hidden rounded-[var(--radius)] bg-[var(--color-text)]/8">
            <motion.div
              className="h-full rounded-[var(--radius)] bg-[var(--color-accent)]"
              initial={reduce ? false : { width: "0%" }}
              whileInView={{ width: "94%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating metric stack */}
      <div className="relative mb-2 flex w-[38%] max-w-[13rem] flex-col gap-3">
        <motion.div
          className="rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 shadow-[var(--shadow-mock)] sm:p-4"
          initial={reduce ? false : { opacity: 0, x: 24, y: 16 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-body text-[10px] uppercase tracking-[0.12em] text-[var(--color-text3)]">
            Days to live
          </p>
          <div className="mt-1 flex items-end gap-1">
            <motion.span
              className="font-display text-3xl font-bold leading-none text-[var(--color-text)] sm:text-4xl"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.45 }}
            >
              7
            </motion.span>
            <span className="mb-1 font-body text-xs text-[var(--color-text3)]">days</span>
          </div>
          <div className="mt-3 flex h-12 items-end gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={h}
                className={cn(
                  "flex-1 rounded",
                  i === bars.length - 1 ? "bg-[var(--color-accent)]" : "bg-[var(--color-accent)]/25",
                )}
                initial={reduce ? false : { height: 4 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-[var(--radius)] border border-[var(--color-accent)]/20 bg-[var(--color-text)] p-3.5 text-[var(--color-bg)] shadow-[var(--shadow-mock)] sm:p-4"
          initial={reduce ? false : { opacity: 0, x: 28, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2">
            {!reduce ? (
              <motion.span
                className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            )}
            <span className="font-body text-[10px] uppercase tracking-[0.12em] text-[var(--color-bg)]/55">
              Status
            </span>
          </div>
          <p className="mt-2 font-body text-sm font-semibold leading-snug sm:text-base">
            Working prototype
          </p>
          <p className="mt-1 font-body text-[11px] text-[var(--color-bg)]/50">Ready for walkthrough</p>
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
        className="relative w-[58%] max-w-[24rem] rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-[var(--shadow-mock)] sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 28, rotate: 1.5 }}
        whileInView={{ opacity: 1, y: 0, rotate: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text3)]">
              Engagement
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-[var(--color-text)] sm:text-base">
              Six-month roadmap
            </p>
          </div>
          <motion.div
            className="rounded bg-[color-mix(in_oklab,var(--color-accent)_16%,transparent)] px-2.5 py-1.5 text-right"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <p className="font-display text-lg font-bold leading-none text-[var(--color-accent-ink)]">6</p>
            <p className="mt-0.5 font-body text-[9px] text-[var(--color-accent-ink)]/70">months</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-[8%] right-[8%] top-3.5 h-px bg-[var(--color-border)]" />
          <motion.div
            className="absolute left-[8%] top-3.5 h-px bg-[var(--color-accent)]"
            initial={reduce ? false : { width: "0%" }}
            whileInView={{ width: `${(activePhase / (phases.length - 1)) * 84}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                        : "border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text3)]",
                    )}
                    initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                      <span className="font-body text-[9px] font-semibold">{i + 1}</span>
                    )}
                    {active && !reduce ? (
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)]/50"
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
                    <p className="font-body text-[9px] font-medium text-[var(--color-text2)] sm:text-[10px]">
                      {phase.label}
                    </p>
                    <p className="font-body text-[8px] text-[var(--color-text3)]">{phase.month}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <motion.div
          className="mt-5 flex items-center gap-2 rounded bg-[var(--color-text)]/[0.04] px-3 py-2.5"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          <p className="font-body text-[11px] text-[var(--color-text2)]">
            Currently in <span className="font-medium text-[var(--color-text)]">Tune</span> · Month 3
          </p>
        </motion.div>
      </motion.div>

      {/* Transparent pricing card */}
      <motion.div
        className="mb-3 w-[38%] max-w-[14rem] rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-[var(--shadow-mock)] sm:p-5"
        initial={reduce ? false : { opacity: 0, x: 24, y: 18, rotate: 3 }}
        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 2 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-body text-[10px] uppercase tracking-[0.12em] text-[var(--color-text3)]">
          Pricing
        </p>
        <p className="mt-1 font-body text-sm font-semibold text-[var(--color-text)] sm:text-base">
          Clear from day one
        </p>

        <div className="mt-4 space-y-0">
          {lineItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center justify-between border-t border-[var(--color-border)] py-2.5 first:border-t-0 first:pt-0"
              initial={reduce ? false : { opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-body text-[11px] text-[var(--color-text3)]">{item.label}</span>
              <span className="font-body text-[11px] font-semibold text-[var(--color-text)]">{item.value}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-3 overflow-hidden rounded bg-[var(--color-accent)] px-3 py-2.5 text-center"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.95, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-body text-[11px] font-semibold text-[var(--color-on-accent)]">No hidden fees</p>
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
          className="text-[var(--color-accent-ink)]"
          initial={reduce ? false : { opacity: 0, scale: 0.65 }}
          whileInView={{ opacity: 0.5 - ring * 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 + ring * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <motion.circle
        cx={cx}
        cy={cy}
        r={coreR}
        className="fill-[var(--color-accent)]"
        initial={reduce ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      {!reduce ? (
        <motion.circle
          cx={cx}
          cy={cy}
          r={coreR}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[var(--color-accent)]"
          animate={{ r: [coreR, pulseMax], opacity: [0.5, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
      ) : null}
      <motion.text
        x={cx}
        y={cy + outerR + labelGap}
        textAnchor="middle"
        className="fill-[var(--color-text3)]"
        style={{ fontSize: 12, fontFamily: "var(--body)" }}
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
const BENTO_SPAN = ["lg:col-span-1", "lg:col-span-2", "lg:col-span-2", "lg:col-span-1"] as const

/** StyledContainer treatment per pillar (fill + line pattern). `null` = leave the card
   hand-rolled (index 2 "Built to deliver" keeps its black + SoftAurora glow). */
type PillarSc = {
  background: "white" | "mint" | "black"
  pattern: "diag-wide" | "diag-tight" | "mesh" | "none"
  line?: "mint"
}
const PILLAR_SC: (PillarSc | null)[] = [
  { background: "white", pattern: "diag-wide" }, //               0 No jargon — white + animated mint curves
  { background: "mint", pattern: "diag-tight" }, //                1 Speed to value — mint + tight
  null, //                                                        2 Built to deliver — untouched
  { background: "white", pattern: "mesh" }, //                    3 Local & hands-on — white + gray mesh
]

export default function WhyUsSection() {
  const reduce = useReducedMotion()

  return (
    <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {WHY_US_PILLARS.map((pillar, index) => {
        const Visual = PILLAR_VISUALS[index]
        const wide = index === 1 || index === 2
        const isLocal = index === 3
        const isSpeed = index === 1
        const isDeliver = index === 2
        const lightOnDark = isSpeed || isDeliver
        const titleColor = lightOnDark ? "text-[var(--color-bg)]" : "text-[var(--color-text)]"
        const descColor = lightOnDark ? "text-[var(--color-bg)]/65" : "text-[var(--color-text2)]"

        const sc = PILLAR_SC[index]
        // Fill utilities are dropped for StyledContainer cards (`.sc-bg-*` owns the fill);
        // index 2 (Built to deliver) keeps its bg utility since it stays a plain <article>.
        const cardClass = cn(
          "r group relative flex min-h-0 flex-col p-8 shadow-[var(--shadow-float)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[26rem] sm:p-9 lg:min-h-[30rem]",
          isLocal ? "overflow-visible" : "overflow-hidden",
          isSpeed
            ? "border border-[var(--color-accent-ink)]/25"
            : isDeliver
              ? "border border-[var(--color-accent)]/15 bg-[var(--color-text)]"
              : "border border-[var(--color-border)]",
          BENTO_SPAN[index],
          wide && "lg:min-h-[32rem]",
          `rd${index + 1}`,
        )
        // `.sc` sets overflow:hidden (unlayered, wins over the Tailwind utility); the Local
        // card's pulse-ring visual must overflow, so restore it inline (inline beats layers).
        const cardStyle = isLocal
          ? { borderRadius: "var(--radius)", overflow: "visible" as const }
          : { borderRadius: "var(--radius)" }

        const content = (
          <div className="relative z-10 flex h-full flex-col">
            <h3
              className={cn(
                "max-w-md font-body font-semibold tracking-tight",
                titleColor,
                wide
                  ? "text-[1.85rem] leading-snug sm:text-4xl lg:max-w-lg lg:text-[2.5rem]"
                  : "text-[1.75rem] leading-snug sm:text-3xl lg:text-[2.15rem]",
              )}
            >
              {pillar.title}
            </h3>

            <p
              className={cn(
                "mt-4 font-body leading-relaxed",
                descColor,
                wide ? "max-w-md text-base" : "max-w-xs text-sm sm:text-[0.95rem]",
              )}
            >
              {pillar.description}
            </p>

            <div className={cn("relative hidden sm:block", isLocal ? "mt-4 sm:flex sm:flex-1 sm:items-center sm:pt-2" : "mt-auto sm:pt-8")}>
              <div
                className={cn(
                  "w-full",
                  lightOnDark ? "text-[var(--color-bg)]" : "text-[var(--color-text)]",
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
        )

        return sc ? (
          <StyledContainer
            as="article"
            key={pillar.title}
            background={sc.background}
            pattern={sc.pattern}
            line={sc.line}
            className={cardClass}
            style={cardStyle}
          >
            {content}
          </StyledContainer>
        ) : (
          <article key={pillar.title} className={cardClass} style={cardStyle}>
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <SoftAurora orientation="vertical" speed={0.6} scale={0.7} brightness={1.15} />
            </div>
            {content}
          </article>
        )
      })}
    </div>
  )
}
