"use client"

import { useState } from "react"
import Link from "next/link"
import { INTEGRATION_STACKS, INTEGRATIONS_CLOSING } from "@/lib/content/integrations"

export default function IntegrationTabs() {
  const [active, setActive] = useState(INTEGRATION_STACKS[0].slug)
  const stack = INTEGRATION_STACKS.find((s) => s.slug === active) ?? INTEGRATION_STACKS[0]

  return (
    <>
      <div
        className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-10 -mx-1 px-1"
        role="tablist"
        aria-label="Integration categories"
      >
        {INTEGRATION_STACKS.map((item) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={active === item.slug}
            onClick={() => setActive(item.slug)}
            className={`font-ui text-sm px-4 py-2.5 rounded-full border whitespace-nowrap transition-colors shrink-0 ${
              active === item.slug
                ? "bg-navy-900 text-cream-50 border-navy-900"
                : "bg-transparent text-navy-900/60 border-ash-300/60 hover:border-navy-900/30"
            }`}
          >
            {item.industry}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="card p-8 sm:p-12">
        <p className="eyebrow text-ash-500 mb-6">{stack.industry}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {stack.tools.map((tool) => (
            <div
              key={tool}
              className="rounded-xl border border-ash-300/50 bg-cream-50 px-5 py-6 text-center hover:border-navy-900/15 transition-colors"
            >
              <p className="font-ui text-sm font-medium text-navy-900">{tool}</p>
            </div>
          ))}
        </div>
        <p className="font-ui text-sm text-navy-900/55 mt-10 max-w-lg">{INTEGRATIONS_CLOSING}</p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link href="/contact" className="btn-primary">
          Book a Free 15-Min Call
        </Link>
        <Link href="/industries/dental" className="btn-secondary">
          Browse by industry
        </Link>
      </div>
    </>
  )
}
