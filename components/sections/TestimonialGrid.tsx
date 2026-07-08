"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { EASE_OUT } from "@/lib/motion"
import type { Testimonial } from "@/lib/content/testimonials"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
}

export default function TestimonialGrid({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      className="grid gap-6 lg:grid-cols-3 lg:gap-8"
    >
      {testimonials.map((t) => (
        <motion.blockquote
          key={t.name}
          variants={item}
          className="flex flex-col rounded-xl border border-ash-300/40 bg-cream-50 p-8 shadow-soft"
        >
          <Quote className="w-8 h-8 text-ash-400 mb-6 shrink-0" aria-hidden="true" />
          <p className="font-ui text-base text-navy-900/80 leading-relaxed flex-1 mb-8">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer>
            <cite className="not-italic">
              <p className="font-display font-semibold text-navy-900">{t.name}</p>
              <p className="font-ui text-sm text-navy-900/50 mt-1">
                {t.business} · {t.industry}
              </p>
            </cite>
          </footer>
        </motion.blockquote>
      ))}
    </motion.div>
  )
}
