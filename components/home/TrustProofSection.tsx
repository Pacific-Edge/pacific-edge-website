"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, Lock, ShieldCheck, Ban, KeyRound } from "lucide-react"
import { cn } from "@/lib/utils"

const TRUST = [
  { Ico: Lock, h: "Encrypted end to end", p: "Every conversation and customer record is encrypted in transit and at rest." },
  { Ico: ShieldCheck, h: "Canadian privacy first", p: "Built to align with PIPEDA and BC's privacy rules." },
  { Ico: Ban, h: "Never sold or shared", p: "Your data is yours. We never sell it, rent it, or hand it to third parties." },
  { Ico: KeyRound, h: "You stay in control", p: "Access is limited to what's needed for the work. If we ever part ways, everything is documented and handed back." },
] as const

const TESTIMONIALS = [
  { av: "CM", name: "Carter Macintosh", biz: "Pinnacle Ridge Contracting · Trades", q: "Every missed call gets texted back in seconds, and Janice holds the slot until my crew confirms it. We booked three extra jobs our first week." },
  { av: "AJ", name: "AJ", biz: "AJ Consulting · Professional Services", q: "The biggest surprise was how much time it gave us back. My team used to lose hours every week to callbacks and chasing cancelled slots, Pacific Edge AI handles all of it now. It's like adding a front-desk hire without the payroll." },
  { av: "PA", name: "Priya Anand", biz: "Coast Beauty Lounge · Salon & Spa", q: "Cancellations used to gut our schedule. The moment someone drops, Janice texts our waitlist and usually fills the spot within minutes, even overnight. My chairs stay full and my front desk isn't chasing anyone anymore." },
] as const

const EASE = [0.16, 1, 0.3, 1] as const

function TestimonialCarousel() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const n = TESTIMONIALS.length
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + n) % n)

  return (
    <div>
      <div className="relative h-[26rem] sm:h-[24rem]">
        {TESTIMONIALS.map((t, i) => {
          const offset = (i - index + n) % n
          const visual = reduce
            ? { scale: 1, x: 0, y: 0, opacity: offset === 0 ? 1 : 0 }
            : offset === 0
              ? { scale: 1, x: 0, y: 0, opacity: 1 }
              : offset === 1
                ? { scale: 0.94, x: 16, y: 16, opacity: 0.5 }
                : { scale: 0.89, x: 28, y: 28, opacity: 0 }

          return (
            <motion.div
              key={t.name}
              className="absolute inset-0 flex flex-col gap-4 rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] p-7 shadow-[var(--shadow-float)] sm:p-8"
              style={{ zIndex: n - offset, pointerEvents: offset === 0 ? "auto" : "none", originX: 1, originY: 1 }}
              animate={visual}
              transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
              aria-hidden={offset !== 0}
            >
              <div className="text-[17px] tracking-[4px] text-[var(--color-text2)]">★★★★★</div>
              <p className="flex-1 font-body text-[clamp(16px,1.9vw,19px)] font-light leading-relaxed text-[var(--color-text)]">
                &quot;{t.q}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] font-body text-sm font-bold text-[var(--color-on-accent)]">
                  {t.av}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-[var(--color-text)]">{t.name}</div>
                  <div className="font-body text-xs text-[var(--color-text2)]">{t.biz}</div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div aria-live="polite" className="sr-only">
        {TESTIMONIALS[index].name}: {TESTIMONIALS[index].q}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
        >
          <ChevronLeft size={18} strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-ink)]"
        >
          <ChevronRight size={18} strokeWidth={1.75} />
        </button>

        <div className="ml-2 flex items-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-[var(--color-accent)]" : "w-2 bg-[var(--color-border)]",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TrustList() {
  return (
    <div className="flex flex-col">
      {TRUST.map((t, i) => (
        <div
          key={t.h}
          className={cn(
            "flex items-start gap-4 py-5",
            i !== 0 && "border-t border-[var(--color-border)]",
          )}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius)] bg-[color-mix(in_oklab,var(--color-accent)_14%,transparent)] text-[var(--color-accent-ink)]">
            <t.Ico size={20} strokeWidth={1.75} />
          </div>
          <div>
            <h3 className="title-step">
              {t.h}
            </h3>
            <p className="mt-1.5 font-body text-sm font-light leading-relaxed text-[var(--color-text2)]">
              {t.p}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function TrustProofSection() {
  return (
    <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
      <TestimonialCarousel />
      <TrustList />
    </div>
  )
}
