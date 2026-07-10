"use client"

import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"

type Pillar = {
  title: string
  description: string
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
}

export default function PillarGrid({ pillars }: { pillars: readonly Pillar[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
      className="grid gap-6 sm:grid-cols-2 lg:gap-8"
    >
      {pillars.map((pillar, i) => (
        <motion.article
          key={pillar.title}
          variants={item}
          className="rounded-xl border border-ash-300/40 bg-white-50 p-8 shadow-soft"
        >
          <span
            className="font-display font-bold text-electric-500 block mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1 }}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h2 className="font-display text-xl font-semibold text-midnight-900 mb-2">
            {pillar.title}
          </h2>
          <p className="font-ui text-sm text-midnight-900/60 leading-relaxed">{pillar.description}</p>
        </motion.article>
      ))}
    </motion.div>
  )
}
