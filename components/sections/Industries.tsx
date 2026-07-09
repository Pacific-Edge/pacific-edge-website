"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Stethoscope,
  UtensilsCrossed,
  Leaf,
  Home,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react"
import { EASE_OUT } from "@/lib/motion"

type Industry = {
  slug: string
  title: string
  pain: string
  href: string
  image: string
  integrations: string[]
  icon: LucideIcon
}

const INDUSTRIES: Industry[] = [
  {
    slug: "dental",
    title: "Dental & Health Clinics",
    pain: "New patients going to voicemail. Cancellations sitting empty.",
    href: "/industries/dental",
    image: "/clinic.jpg",
    integrations: ["Tracker", "Dentrix", "Open Dental"],
    icon: Stethoscope,
  },
  {
    slug: "restaurants",
    title: "Restaurants & Food Service",
    pain: "Reservation calls missed. Reviews left unanswered.",
    href: "/industries/restaurants",
    image: "/food.webp",
    integrations: ["OpenTable", "Toast", "7shifts"],
    icon: UtensilsCrossed,
  },
  {
    slug: "salons",
    title: "Salons, Spas & Wellness",
    pain: "Empty chairs. After-hours DMs. Clients who never rebook.",
    href: "/industries/salons",
    image: "/spa.webp",
    integrations: ["Fresha", "Vagaro", "Mindbody"],
    icon: Leaf,
  },
  {
    slug: "trades",
    title: "Trades & Home Services",
    pain: "Calls missed on the job. Quotes gone cold.",
    href: "/industries/trades",
    image: "/trades.jpg",
    integrations: ["Jobber", "ServiceTitan", "Housecall Pro"],
    icon: Home,
  },
  {
    slug: "retail",
    title: "Retail & Local Shops",
    pain: "One-time buyers, unanswered questions, slow weeks.",
    href: "/industries/retail",
    image: "/retail.jpg",
    integrations: ["Shopify", "Square", "Lightspeed"],
    icon: ShoppingBag,
  },
]

export default function Industries() {
  const [active, setActive] = useState(0)
  const current = INDUSTRIES[active]

  return (
    <section
      className="relative bg-cream-100 overflow-hidden"
      aria-label="Industries we serve"
    >
      {/* Top header — full-width, asymmetric */}
      <div className="px-6 md:px-10 lg:px-16 pt-20 md:pt-28 lg:pt-36 pb-10 md:pb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="eyebrow text-ash-400 mb-3">Industries</p>
          <h2 className="text-display-md text-navy-900">
            Built for your kind of business
          </h2>
        </div>
        <p className="font-ui text-sm text-navy-900/55 max-w-sm md:text-right">
          Five verticals. One operating system tuned for each.
        </p>
      </div>

      {/* Main split — left list, right panel */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,32%)_1fr] gap-0 px-6 md:px-10 lg:px-16 pb-20 md:pb-28 lg:pb-36 items-stretch">

        {/* Mobile icon strip — replaces vertical list below sm */}
        <nav
          aria-label="Select an industry"
          className="sm:hidden flex justify-between gap-1 pt-2 pb-6"
        >
          {INDUSTRIES.map((ind, i) => {
            const isActive = i === active
            const Icon = ind.icon
            return (
              <button
                key={ind.slug}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                aria-label={ind.title}
                className="group flex flex-1 min-w-0 flex-col items-center gap-1.5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900/30 rounded-md transition-colors cursor-pointer"
              >
                <span
                  className={`flex items-center justify-center transition-colors ${
                    isActive ? "text-navy-900" : "text-navy-900/35"
                  }`}
                >
                  <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span
                  className="font-ui text-[0.6rem] tracking-[0.2em] uppercase transition-colors"
                  style={{
                    color: isActive ? "var(--color-ash-500)" : "var(--color-ash-400)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="h-[2px] w-6 transition-opacity"
                  style={{
                    background: "var(--color-ash-400)",
                    opacity: isActive ? 1 : 0,
                  }}
                />
              </button>
            )
          })}
        </nav>

        {/* Left rail — plain text list, no boxes (sm+ only) */}
        <nav
          aria-label="Select an industry"
          className="hidden sm:flex flex-col py-4 lg:pr-12 lg:py-2"
        >
          {INDUSTRIES.map((ind, i) => {
            const isActive = i === active
            return (
              <button
                key={ind.slug}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="group relative text-left py-5 lg:py-6 pl-6 lg:pl-8 border-b border-ash-300/40 last:border-b-0 transition-colors cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-ui text-[0.65rem] tracking-[0.25em] uppercase transition-colors"
                    style={{
                      color: isActive ? "var(--color-ash-500)" : "var(--color-ash-400)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-display leading-tight transition-colors duration-300 ${
                      isActive ? "text-navy-900" : "text-navy-900/40"
                    }`}
                    style={{
                      fontSize: "clamp(1.25rem, 2.2vw, 1.875rem)",
                      fontWeight: 400,
                    }}
                  >
                    {ind.title}
                  </span>
                </div>
                {/* Ash hairline indicator on active */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[2px] bg-ash-400 transition-opacity duration-300"
                  style={{ opacity: isActive ? 1 : 0 }}
                />
              </button>
            )
          })}
        </nav>

        {/* Right panel — photo background, layered editorial content */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[640px] rounded-xl overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
              className="absolute inset-0"
            >
              <Image
                src={current.image}
                alt=""
                fill
                priority={active === 0}
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              {/* Dark scrim — heavy darkening so the photo reads as background.
                  Base flat veil + bottom-weighted gradient for headline contrast. */}
              <div
                className="absolute inset-0"
                style={{ background: "var(--overlay-dark-55)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-photo-scrim)" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile layered content — simplified: title + caption top-left,
              integrations column below, CTA bottom-left */}
          <div className="sm:hidden relative h-full flex flex-col justify-between p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug + "-mobile"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
              >
                <h3
                  className="font-display text-cream-50 leading-[1.05] mb-3"
                  style={{ fontSize: "clamp(1.75rem, 8vw, 3rem)", fontWeight: 400 }}
                >
                  {current.title}
                </h3>
                <p
                  className="font-ui text-cream-50/85 mb-5 max-[332px]:hidden"
                  style={{ fontSize: "0.95rem" }}
                >
                  {current.pain}
                </p>
                <p className="eyebrow text-cream-50/70 mb-3">Compatible with</p>
                <ul className="flex flex-col items-start gap-1.5">
                  {current.integrations.map((name) => (
                    <li
                      key={name}
                      className="font-display text-cream-50/95 leading-tight"
                      style={{ fontSize: "1rem" }}
                    >
                      {name}
                    </li>
                  ))}
                  <li className="mt-1 font-ui text-[0.65rem] tracking-[0.2em] uppercase text-cream-50/45">
                    + more
                  </li>
                </ul>
              </motion.div>
            </AnimatePresence>

            <Link
              href={current.href}
              className="inline-flex items-center gap-2 font-ui text-sm text-cream-50 border-b border-cream-50/40 pb-1 self-start"
            >
              See {current.title.split(" ")[0].toLowerCase()} setup
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Desktop / tablet layered content */}
          <div className="hidden sm:flex relative h-full flex-col justify-between p-7 md:p-10 lg:p-12">

            {/* Top row: eyebrow left · compatible column right */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-3 pt-1">
                <span className="eyebrow text-cream-50/80">
                  Pacific Edge for
                </span>
                <span className="h-px w-10 bg-cream-50/40" aria-hidden="true" />
              </div>

              {/* Compatible-with column — grows down from top-right */}
              <div className="flex flex-col items-end text-right">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-cream-50/40" aria-hidden="true" />
                  <span className="eyebrow text-cream-50/70">Compatible with</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={current.slug + "-int"}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="flex flex-col items-end gap-2"
                  >
                    {current.integrations.map((name, idx) => (
                      <li
                        key={name}
                        className="flex flex-col items-end"
                      >
                        <span
                          className="font-display text-cream-50/95 leading-tight"
                          style={{ fontSize: "clamp(1rem, 1.4vw, 1.35rem)" }}
                        >
                          {name}
                        </span>
                        {idx < current.integrations.length - 1 && (
                          <span
                            className="h-px bg-cream-50/25 mt-2"
                            style={{ width: "2.5rem" }}
                            aria-hidden="true"
                          />
                        )}
                      </li>
                    ))}
                    <li className="mt-2 font-ui text-[0.65rem] tracking-[0.2em] uppercase text-cream-50/45">
                      + more
                    </li>
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom: headline + pain + link */}
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                  <h3
                    className="font-display text-cream-50 leading-[1.05] mb-5"
                    style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 400 }}
                  >
                    {current.title}
                  </h3>
                  <p
                    className="font-ui text-cream-50/85 mb-8 max-w-lg"
                    style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)" }}
                  >
                    {current.pain}
                  </p>

                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 font-ui text-sm text-cream-50 border-b border-cream-50/40 hover:border-cream-50 pb-1 transition-colors"
                  >
                    See {current.title.split(" ")[0].toLowerCase()} setup
                    <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
