"use client"

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
  className?: string
}

export function AnimatedTestimonials({
  eyebrow = "Client Reviews",
  title = "From the operators using it.",
  testimonials,
  autoRotateInterval = 7000,
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
      className={`section-py bg-navy-900 overflow-hidden relative ${className || ""}`}
    >
      {/* Subtle texture layer to match Proof aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: "var(--gradient-testimonial-vignette)" }}
      />

      <div className="container-x relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-16 w-full md:grid-cols-2 md:gap-20 lg:gap-24"
        >
          {/* Left: Heading + pagination */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-6">
              {eyebrow && <p className="eyebrow text-ash-400">{eyebrow}</p>}

              <h2 className="text-display-lg text-cream-50">{title}</h2>

              <div className="flex items-center gap-3 pt-4">
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
                        : "w-6 bg-cream-50/20 hover:bg-cream-50/40"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setUserInteracted(true)
                    setActiveIndex(
                      (current) =>
                        (current - 1 + testimonials.length) % testimonials.length,
                    )
                  }}
                  className="h-10 w-10 rounded-full border border-cream-50/15 flex items-center justify-center text-cream-50/70 hover:text-cream-50 hover:border-cream-50/40 hover:bg-cream-50/5 transition-colors cursor-pointer"
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
                  className="h-10 w-10 rounded-full border border-cream-50/15 flex items-center justify-center text-cream-50/70 hover:text-cream-50 hover:border-cream-50/40 hover:bg-cream-50/5 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
                <span className="font-ui text-xs text-cream-50/40 ml-2 tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Rotating testimonial cards */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-[360px] sm:min-h-[340px] md:min-h-[400px]"
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
                <div className="bg-cream-50/[0.04] border border-cream-50/10 rounded-2xl p-8 md:p-10 h-full flex flex-col backdrop-blur-sm">
                  {/* Stars */}
                  <div className="mb-6 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-ash-400 text-ash-400"
                        aria-hidden
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8 flex-1">
                    <Quote
                      className="absolute -top-3 -left-2 h-10 w-10 text-cream-50/10 rotate-180"
                      aria-hidden
                    />
                    <p className="relative z-10 font-display text-xl md:text-2xl leading-relaxed text-cream-50">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>

                  {/* Hairline separator */}
                  <div className="h-px w-full bg-cream-50/10 mb-6" />

                  {/* Attribution */}
                  <div className="flex items-center gap-4">
                    <div
                      className="h-11 w-11 rounded-full bg-cream-50/10 border border-cream-50/15 flex items-center justify-center flex-shrink-0"
                      aria-hidden
                    >
                      <span className="font-ui text-sm font-medium text-cream-50/70">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-ui text-sm font-medium text-cream-50">
                        {testimonial.name}
                      </p>
                      <p className="font-ui text-xs text-cream-50/50">
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
