"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useReducedMotion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/* ─────────────────────────────────────────────────────────────────────────
   Scroll choreography config — tune everything from one place.
   Phase thresholds are normalized progress (0 → 1) within the pinned scrub.
   ───────────────────────────────────────────────────────────────────────── */
const SCROLL_CONFIG = {
  /** Total pinned scroll distance as multiples of viewport height. */
  pinDurationVh: 3.2,

  /** ScrollTrigger scrub smoothing (seconds). */
  scrub: 0.8,

  /** Progress thresholds (0–1) */
  phases: {
    /** Title finishes moving up + scaling down */
    titleSettleEnd:      0.46,
    /** Dashboard finishes rising + shrinking — deliberately much longer
     *  than the title so the two animations run at clearly different rates. */
    dashboardRiseEnd:    0.74,
    /** Eyebrow "The Dashboard" fades in near the settled title */
    eyebrowRevealStart:  0.42,
    /** CTA fades in — after title has passed over it, before dash settles */
    ctaRevealStart:      0.38,
    ctaRevealEnd:        0.52,
  },

  title: {
    initialFontSize: "clamp(1.5rem, 5vw, 5.5rem)",
    initialScale: 1,
    finalScale: 0.55,
    /** How far up the title translates (fraction of vh) */
    settleTravelVh: 0.32,
  },

  dashboard: {
    /** y offset at start — pushes top of dashboard well below the fold. */
    initialOffsetVh: 0.60,
    /** Dashboard starts 2.4× larger than natural size, shrinks to finalScale */
    initialScale:    2.4,
    /** Final size — slightly above 1 so the dashboard still feels large */
    finalScale:      1.08,
    /** Final CSS position */
    finalTop:    "34vh",
    finalBottom: "5vh",
    /** Scale from the top edge so the bottom condenses upward as it shrinks */
    transformOrigin: "top center",
  },

  titleEase:     "power2.out",
  /** Steeper curve so dashboard decelerates dramatically into its final slot */
  dashboardEase: "power3.out",
} as const

/* ─────────────────────────────────────────────────────────────────────────
   Dashboard mock content
   ───────────────────────────────────────────────────────────────────────── */

const CALLS = [
  { initial: "M", name: "Mike T.",   time: "2 min ago",  note: "Booked for Thursday 3 pm" },
  { initial: "S", name: "Sarah K.",  time: "14 min ago", note: "Waitlist slot confirmed" },
  { initial: "?", name: "Unknown",   time: "1 hr ago",   note: "Callback message left" },
]

const SLOTS = [
  { time: "9:00 AM",  status: "booked",   label: "Marcus T." },
  { time: "10:30 AM", status: "booked",   label: "Jennifer L." },
  { time: "12:00 PM", status: "open",     label: "Open slot" },
  { time: "2:00 PM",  status: "booked",   label: "David R." },
  { time: "3:30 PM",  status: "waitlist", label: "+2 on waitlist" },
]

const REVIEWS = [
  { initial: "C", name: "Carter M.", stars: 5, quote: "Incredible service, will be back!" },
  { initial: "P", name: "Priya A.",  stars: 5, quote: "Waitlist filled the cancellation in minutes." },
]

const CONNECTIONS = ["Phone", "Calendar", "Reviews", "CRM"]

function DashboardMock() {
  return (
    <div className="rounded-2xl border border-ash-300/50 bg-cream-100 shadow-card overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ash-300/40 bg-cream-50/60">
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="ml-3 flex items-center gap-1.5 bg-cream-100 rounded-md px-3 h-6 flex-1 max-w-[220px]">
          <div className="w-2.5 h-2.5 rounded-full border border-ash-300/60" />
          <span className="font-ui text-[10px] text-navy-900/30 tracking-tight">
            app.pacificedge.ai
          </span>
        </div>
      </div>

      {/* Three-panel body */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ash-300/40">

        {/* Calls panel */}
        <div className="p-6">
          <p className="eyebrow text-ash-500 mb-4">Calls Handled</p>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-5xl text-navy-900">47</span>
            <span className="font-ui text-xs text-ash-500">this week</span>
          </div>
          <div className="flex flex-col gap-0">
            {CALLS.map((call, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-3 border-b border-ash-300/25 last:border-0"
              >
                <div className="w-7 h-7 rounded-full bg-navy-900/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-ui text-[11px] font-medium text-navy-900/60">
                    {call.initial}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-ui text-xs font-medium text-navy-900">
                      {call.name}
                    </span>
                    <span className="font-ui text-[10px] text-ash-400 flex-shrink-0">
                      {call.time}
                    </span>
                  </div>
                  <p className="font-ui text-[11px] text-navy-900/50 mt-0.5 truncate">
                    {call.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings panel */}
        <div className="p-6">
          <p className="eyebrow text-ash-500 mb-4">Today&apos;s Schedule</p>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-5xl text-navy-900">12</span>
            <span className="font-ui text-xs text-ash-500">jobs booked</span>
          </div>
          <div className="flex flex-col gap-2">
            {SLOTS.map((slot, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-ui ${
                  slot.status === "booked"
                    ? "bg-navy-900/8 text-navy-900"
                    : slot.status === "open"
                    ? "border border-dashed border-ash-300 text-ash-400 bg-transparent"
                    : "bg-ash-400/15 text-ash-500"
                }`}
              >
                <span className="w-16 flex-shrink-0 font-medium text-[11px]">
                  {slot.time}
                </span>
                <span className="flex-1 truncate">{slot.label}</span>
                {slot.status === "waitlist" && (
                  <span className="text-[10px] text-ash-400 flex-shrink-0">auto-fill ↑</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reviews panel */}
        <div className="p-6">
          <p className="eyebrow text-ash-500 mb-4">Reviews</p>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-5xl text-navy-900">4.9</span>
            <span className="font-ui text-xs text-ash-500">avg. rating</span>
          </div>
          <div className="flex flex-col gap-0">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="py-3 border-b border-ash-300/25 last:border-0"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-navy-900/10 flex items-center justify-center">
                      <span className="font-ui text-[10px] font-medium text-navy-900/60">
                        {review.initial}
                      </span>
                    </div>
                    <span className="font-ui text-xs font-medium text-navy-900">
                      {review.name}
                    </span>
                  </div>
                  <span className="text-ash-400 text-[11px] tracking-tight">
                    {"★".repeat(review.stars)}
                  </span>
                </div>
                <p className="font-ui text-[11px] text-navy-900/50 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
            ))}

            {/* Auto-reply preview */}
            <div className="mt-3 p-3 bg-navy-900/5 rounded-lg border border-ash-300/30">
              <p className="font-ui text-[10px] text-ash-500 mb-0.5 uppercase tracking-wide">
                Reply sent
              </p>
              <p className="font-ui text-[11px] text-navy-900/60 leading-relaxed italic">
                &ldquo;Thank you so much! We look forward to seeing you again.&rdquo;
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Connection strip */}
      <div className="flex items-center justify-center gap-8 py-3.5 bg-cream-50/50 border-t border-ash-300/30 flex-wrap px-4">
        {CONNECTIONS.map((tool) => (
          <div key={tool} className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-navy-700/35" />
            <span className="font-ui text-xs text-navy-900/40">{tool}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────────────────────────────── */

export default function ProductGlimpse() {
  const sectionRef     = useRef<HTMLElement>(null)
  /** Outer wrapper — only translates up, no scale. */
  const titleWrapRef   = useRef<HTMLDivElement>(null)
  /** Inner wrapper — only scales, not translated. */
  const titleScaleRef  = useRef<HTMLDivElement>(null)
  const eyebrowRef     = useRef<HTMLParagraphElement>(null)
  const dashWrapRef    = useRef<HTMLDivElement>(null)
  /** CTA lives inside titleWrapRef so it rides along for free. */
  const ctaRef         = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (reduce || isMobile || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const phases = SCROLL_CONFIG.phases

      // Invisible elements that fade in during the scrub
      gsap.set(eyebrowRef.current, { opacity: 0 })
      gsap.set(ctaRef.current,     { opacity: 0 })
      // Pre-set dashboard to its initial state so there's no flash before the
      // timeline takes over (fromTo recalculates on resize via invalidateOnRefresh)
      gsap.set(dashWrapRef.current, {
        y:               () => window.innerHeight * SCROLL_CONFIG.dashboard.initialOffsetVh,
        scale:           SCROLL_CONFIG.dashboard.initialScale,
        transformOrigin: SCROLL_CONFIG.dashboard.transformOrigin,
      })

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: () => `+=${window.innerHeight * SCROLL_CONFIG.pinDurationVh}`,
          pin: true,
          pinSpacing: true,
          scrub: SCROLL_CONFIG.scrub,
          invalidateOnRefresh: true,
        },
      })

      // ── Title translates up (the whole group, including CTA)
      tl.to(
        titleWrapRef.current,
        {
          y: () => -window.innerHeight * SCROLL_CONFIG.title.settleTravelVh,
          ease: SCROLL_CONFIG.titleEase,
          duration: phases.titleSettleEnd,
        },
        0
      )

      // ── H2 scales down independently so the CTA button does NOT shrink
      tl.to(
        titleScaleRef.current,
        {
          scale: SCROLL_CONFIG.title.finalScale,
          ease: SCROLL_CONFIG.titleEase,
          duration: phases.titleSettleEnd,
        },
        0
      )

      // ── Dashboard rises from below AND shrinks to natural size.
      //    Independently timed from the title (different ease + longer duration)
      //    so the two motions have a clearly distinct visual rhythm.
      //    fromTo recalculates function-based values on resize via invalidateOnRefresh.
      tl.fromTo(
        dashWrapRef.current,
        {
          y:               () => window.innerHeight * SCROLL_CONFIG.dashboard.initialOffsetVh,
          scale:           SCROLL_CONFIG.dashboard.initialScale,
          transformOrigin: SCROLL_CONFIG.dashboard.transformOrigin,
        },
        {
          y:     0,
          scale: SCROLL_CONFIG.dashboard.finalScale,
          ease:  SCROLL_CONFIG.dashboardEase,
          duration: phases.dashboardRiseEnd,
        },
        0
      )

      // ── Eyebrow appears once title is mostly settled
      tl.to(
        eyebrowRef.current,
        { opacity: 1, duration: 0.08 },
        phases.eyebrowRevealStart
      )

      // ── CTA fades in after title has moved past it, before dashboard settles
      tl.to(
        ctaRef.current,
        { opacity: 1, duration: phases.ctaRevealEnd - phases.ctaRevealStart },
        phases.ctaRevealStart
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [reduce, isMobile])

  /* Reduced-motion / mobile fallback: static layout, everything visible. */
  if (reduce || isMobile) {
    return (
      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="mb-12 lg:mb-16">
            <h2
              className="text-navy-900 max-w-xl"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 7vw, 5.5rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Your business, at a glance.
            </h2>
            <div className="mt-6">
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-2 font-ui text-sm font-medium px-6 py-3 rounded-full border border-navy-900/20 text-navy-900/70 hover:text-navy-900 hover:border-navy-900/50 hover:bg-navy-900/5 transition-all duration-300"
              >
                See the full dashboard
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
          <DashboardMock />
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream-50 h-screen overflow-hidden"
      aria-label="Dashboard preview"
    >
      <div className="relative h-full w-full">

        {/* ── Title + CTA block ─────────────────────────────────────────────
            titleWrapRef:  translates up as a unit (title + CTA move together)
            titleScaleRef: scales the h2 only — CTA button stays full size
            ctaRef:        fades in mid-scroll, pointer-events-auto so it's clickable
            z-10 keeps this layer above the dashboard for correct click targeting. */}
        <div
          ref={titleWrapRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 will-change-transform"
          style={{ pointerEvents: "none" }}
        >
          <div className="flex flex-col items-center">

            {/* h2 — scale-animated independently */}
            <div ref={titleScaleRef} className="relative will-change-transform">
              <p
                ref={eyebrowRef}
                className="eyebrow text-ash-400 absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap"
              >
                The Dashboard
              </p>
              <h2
                className="text-gradient-electric-animated text-center"
                style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      SCROLL_CONFIG.title.initialFontSize,
                  fontWeight:    700,
                  letterSpacing: "-0.02em",
                  lineHeight:    1.1,
                  whiteSpace:    "nowrap",
                }}
              >
                Your business, at a glance.
              </h2>
            </div>

            {/* CTA — rides with the title group but does not scale.
                Fades in once the title has passed over this vertical position. */}
            <div
              ref={ctaRef}
              className="mt-3 will-change-[opacity]"
              style={{ pointerEvents: "auto" }}
            >
              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-2 font-ui text-sm font-medium px-6 py-3 rounded-full border border-navy-900/20 text-navy-900/70 hover:text-navy-900 hover:border-navy-900/50 hover:bg-navy-900/5 transition-all duration-300"
              >
                See the full dashboard
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Dashboard ─────────────────────────────────────────────────────
            Starts large at the bottom (y offset pushes it below center),
            rises into the middle band in sync with the title moving up. */}
        <div
          ref={dashWrapRef}
          className="absolute inset-x-0 will-change-transform"
          style={{
            top:    SCROLL_CONFIG.dashboard.finalTop,
            bottom: SCROLL_CONFIG.dashboard.finalBottom,
          }}
        >
          <div className="mx-auto h-full max-w-5xl px-4 sm:px-6 lg:px-12 overflow-hidden">
            <DashboardMock />
          </div>
        </div>

      </div>
    </section>
  )
}
