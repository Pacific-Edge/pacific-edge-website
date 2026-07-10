"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"
import { LetterSwapPingPong } from "@/components/ui/letter-swap"
import { Button } from "@/components/ui/button"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
}

const line = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT },
  },
}

export default function CTABand() {
  return (
    <section className="section-py bg-white-50">
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.p variants={line} className="eyebrow text-ash-400 mb-8">
            For Dental Clinics · Get Started
          </motion.p>

          {/* Headline — line 1 */}
          <motion.div variants={line}>
            <span
              className="block font-display font-bold text-midnight-900 leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Your first month,
            </span>
          </motion.div>

          {/* Headline — line 2: ON US — per-letter electric gradient + letter-swap */}
          <motion.div
            variants={line}
            className="mt-1 mb-12"
            style={{ fontSize: "clamp(2.5rem, 11vw, 9rem)" }}
          >
            <LetterSwapPingPong
              label="ON US"
              staggerFrom="center"
              staggerDuration={0.045}
              reverse={false}
              transition={{ type: "spring", duration: 0.9, bounce: 0.25 }}
              className="gradient-letters-electric font-display font-black leading-none tracking-tight w-full"
            />
          </motion.div>

          {/* Divider hairline */}
          <motion.div
            variants={line}
            className="w-10 h-px bg-ash-400 mx-auto mb-10 opacity-60"
          />

          {/* Body */}
          <motion.p
            variants={line}
            className="font-ui text-base text-midnight-900/55 mb-10 leading-relaxed max-w-md mx-auto"
          >
            Try our service for a month, on us. See the appointments booked, the hours
            saved, the calls that didn&apos;t go to voicemail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={line}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild variant="black">
              <Link href="/contact">Book Your Free Setup Call</Link>
            </Button>
            <Link
              href="/pricing"
              className="font-ui text-sm text-midnight-900/55 hover:text-midnight-900 underline underline-offset-4 transition-colors duration-200"
            >
              See pricing details
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
