"use client"

import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"

type Props = { reduce: boolean | null }

/**
 * Live-operations dashboard mock for the "Custom Software Builds" card — a
 * job-routing board plus a floating metric/status stack. Styled to match the
 * WhyUsSection visuals (flat cream card + mint accents floating on the card's
 * flat mint-ink fill) so the two share one visual language. Everything
 * animates on scroll-into-view via whileInView and is reduced-motion guarded.
 */
export default function OpsDashVisual({ reduce }: Props) {
  const jobs = [
    { label: "New booking · Cedar Dental", tag: "Routed" },
    { label: "Cancellation refilled", tag: "Booked" },
    { label: "Callback · Mega Rebar", tag: "Queued" },
  ] as const

  return (
    <div className="relative flex h-full w-full items-stretch justify-center" aria-hidden>
      {/* Ops board */}
      <motion.div
        className="relative w-full max-w-[26rem] rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-4 shadow-[var(--shadow-mock)] sm:p-5"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--color-text3)]">
              Live operations
            </p>
            <p className="mt-1 font-body text-sm font-semibold text-[var(--color-text)] sm:text-base">
              Ops dashboard
            </p>
          </div>
          <motion.span
            className="flex items-center gap-1.5 rounded-[var(--radius)] bg-[var(--color-accent)] px-2.5 py-1 font-body text-[10px] font-semibold text-[var(--color-on-accent)]"
            initial={reduce ? false : { scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.4, ease: EASE_OUT }}
          >
            {!reduce ? (
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-[var(--color-on-accent)]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-on-accent)]" />
            )}
            Real-time
          </motion.span>
        </div>

        {/* Job-routing rows */}
        <div className="space-y-2">
          {jobs.map((job, i) => (
            <motion.div
              key={job.label}
              className="flex items-center gap-2.5 rounded-[var(--radius)] bg-[var(--color-text)]/[0.04] px-2.5 py-2"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.4, ease: EASE_OUT }}
            >
              <motion.span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.18, duration: 0.35, ease: EASE_OUT }}
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
                    transition={{ delay: 0.6 + i * 0.18, duration: 0.3 }}
                  />
                </svg>
              </motion.span>
              <span className="min-w-0 flex-1 truncate font-body text-[11px] font-medium text-[var(--color-text)] sm:text-[12px]">
                {job.label}
              </span>
              <span className="shrink-0 rounded bg-[color-mix(in_oklab,var(--color-accent)_16%,transparent)] px-1.5 py-0.5 font-body text-[9px] font-semibold text-[var(--color-accent-ink)]">
                {job.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Capacity bar */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-body text-[11px] text-[var(--color-text2)]">Capacity</span>
            <motion.span
              className="font-display text-sm font-bold text-[var(--color-accent-ink)]"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              86%
            </motion.span>
          </div>
          <div className="h-2 overflow-hidden rounded-[var(--radius)] bg-[var(--color-text)]/8">
            <motion.div
              className="h-full rounded-[var(--radius)] bg-[var(--color-accent)]"
              initial={reduce ? false : { width: "0%" }}
              whileInView={{ width: "86%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 1.1, ease: EASE_OUT }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
