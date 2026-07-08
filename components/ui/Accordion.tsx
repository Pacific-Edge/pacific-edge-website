"use client"

import { useId, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"

export type AccordionItem = {
  id: string
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const baseId = useId()
  const reduce = useReducedMotion()
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!allowMultiple) next.clear()
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="divide-y divide-ash-300/50 border-y border-ash-300/50">
      {items.map((item) => {
        const isOpen = openIds.has(item.id)
        const panelId = `${baseId}-${item.id}-panel`
        const buttonId = `${baseId}-${item.id}-button`

        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900/30 rounded-sm"
              >
                <span className="font-display text-lg sm:text-xl font-semibold text-navy-900 leading-snug">
                  {item.question}
                </span>
                <span
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-ash-300/60 text-ash-500 font-ui text-lg leading-none"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.35, ease: EASE_OUT }
              }
              className="overflow-hidden"
            >
              <p className="font-ui text-sm sm:text-base text-navy-900/60 leading-relaxed pb-6 pr-12">
                {item.answer}
              </p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
