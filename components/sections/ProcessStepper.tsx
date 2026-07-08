"use client"

import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"

type Step = {
  step: number
  title: string
  description: string
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
}

export default function ProcessStepper({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="relative">
      <div
        className="absolute left-[1.15rem] sm:left-6 top-4 bottom-4 w-px bg-ash-300/60 hidden sm:block"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={container}
        className="flex flex-col gap-10 sm:gap-14"
      >
        {steps.map((step) => (
          <motion.li
            key={step.step}
            variants={item}
            className="relative flex gap-5 sm:gap-8 items-start"
          >
            <div
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-electric-500 flex items-center justify-center bg-cream-50 relative z-10"
              aria-hidden="true"
            >
              <span className="font-display font-bold text-electric-500 text-sm sm:text-base">
                {step.step}
              </span>
            </div>

            <div className="flex-1 min-w-0 pt-1">
              <h2 className="font-display text-display-sm text-navy-900 mb-2">{step.title}</h2>
              <p className="font-ui text-sm sm:text-base text-navy-900/60 leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.div>
    </ol>
  )
}
