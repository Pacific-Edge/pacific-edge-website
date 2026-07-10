"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { EASE_OUT } from "@/lib/motion"

export type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  initials: string
}

export type AnimatedTestimonialsProps = {
  eyebrow?: string
  title?: string
  testimonials: Testimonial[]
  autoRotateInterval?: number
  moreHref?: string
  moreLabel?: string
  className?: string
}

export function AnimatedTestimonials({
  eyebrow = "Client Reviews",
  title = "From the operators using it.",
  testimonials,
  autoRotateInterval = 7000,
  moreHref,
  moreLabel = "Read more reviews →",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  }

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  useEffect(() => {
    if (userInteracted || autoRotateInterval <= 0 || testimonials.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)
    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length, userInteracted])

  if (testimonials.length === 0) return null

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 bg-white-50 overflow-hidden relative ${className || ""}`}
    >
      <div className="container-x relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 w-full md:grid-cols-2 md:gap-16 lg:gap-20"
        >
          {/* Left: Heading + pagination */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-5">
              {eyebrow && <p className="eyebrow text-ash-400">{eyebrow}</p>}

              <h2 className="text-display-lg text-midnight-900">{title}</h2>

              <div className="flex items-center gap-3 pt-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setUserInteracted(true)
                      setActiveIndex(index)
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      activeIndex === index
                        ? "w-10 bg-ash-400"
                        : "w-6 bg-midnight-900/20 hover:bg-midnight-900/40"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    setUserInteracted(true)
                    setActiveIndex(
                      (current) =>
                        (current - 1 + testimonials.length) % testimonials.length,
                    )
                  }}
                  className="h-10 w-10 rounded-full border border-midnight-900/15 flex items-center justify-center text-midnight-900/70 hover:text-midnight-900 hover:border-midnight-900/40 hover:bg-midnight-900/5 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  onClick={() => {
                    setUserInteracted(true)
                    setActiveIndex(
                      (current) => (current + 1) % testimonials.length,
                    )
                  }}
                  className="h-10 w-10 rounded-full border border-midnight-900/15 flex items-center justify-center text-midnight-900/70 hover:text-midnight-900 hover:border-midnight-900/40 hover:bg-midnight-900/5 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <span className="font-ui text-xs text-midnight-900/40 ml-2 tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              {moreHref && (
                <Link
                  href={moreHref}
                  className="inline-block font-ui text-sm text-midnight-900/40 hover:text-midnight-900 transition-colors underline underline-offset-4 pt-2"
                >
                  {moreLabel}
                </Link>
              )}
            </div>
          </motion.div>

          {/* Right: Rotating testimonial cards */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[320px] sm:min-h-[300px] md:min-h-[340px]"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 40,
                  scale: activeIndex === index ? 1 : 0.985,
                }}
                transition={{
                  opacity: { duration: 1.1, ease: EASE_OUT },
                  x: { duration: 1.2, ease: EASE_OUT },
                  scale: { duration: 1.2, ease: EASE_OUT },
                }}
                style={{
                  zIndex: activeIndex === index ? 10 : 0,
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
              >
                <div className="bg-white-100 border border-ash-300/40 rounded-2xl p-7 md:p-9 h-full flex flex-col shadow-soft">
                  {/* Stars */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-ash-400 text-ash-400"
                        aria-hidden
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6 flex-1">
                    <Quote
                      className="absolute -top-2 -left-1.5 h-8 w-8 text-midnight-900/10 rotate-180"
                      aria-hidden
                    />
                    <p className="relative z-10 font-display text-lg md:text-xl leading-relaxed text-midnight-900">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>

                  {/* Hairline separator */}
                  <div className="h-px w-full bg-midnight-900/10 mb-5" />

                  {/* Attribution */}
                  <div className="flex items-center gap-4">
                    <div
                      className="h-10 w-10 rounded-full bg-midnight-900/5 border border-midnight-900/15 flex items-center justify-center flex-shrink-0"
                      aria-hidden
                    >
                      <span className="font-ui text-sm font-medium text-midnight-900/70">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-ui text-sm font-medium text-midnight-900">
                        {testimonial.name}
                      </p>
                      <p className="font-ui text-xs text-midnight-900/50">
                        {testimonial.company} · {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
