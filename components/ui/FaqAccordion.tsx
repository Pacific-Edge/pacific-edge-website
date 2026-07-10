"use client"

import type { FaqItem } from "@/lib/content/faq"

type FaqAccordionProps = {
  items: FaqItem[]
  className?: string
}

export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-xl border border-ash-300/50 bg-white-50 overflow-hidden"
        >
          <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-ui text-sm font-medium text-midnight-900 hover:bg-white-100/60 transition-colors [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <span
              className="shrink-0 w-5 h-5 flex items-center justify-center text-ash-500 transition-transform duration-200 group-open:rotate-45"
              aria-hidden
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5 font-ui text-sm text-midnight-900/65 leading-relaxed border-t border-ash-300/30 pt-4">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
