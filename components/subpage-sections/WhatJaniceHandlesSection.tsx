import type { ReactNode } from "react"
import { Section, SectionHeader, FeatureRow, FeatureRows } from "@/components/ui/sections"

/**
 * "See What Janice Handles" section (restaurants template): centered header
 * (title + lead, no eyebrows) over a stack of feature rows whose layout
 * alternates automatically (every second row reversed). Visuals come from
 * components/ui/graphics (MockFeedCard, CoveragePanel, RecallRing,
 * DispatchRadar) or any custom ReactNode.
 */
export interface WhatRow {
  title: ReactNode
  body: ReactNode
  points: ReactNode[]
  visual: ReactNode
}

interface WhatJaniceHandlesSectionProps {
  id?: string
  title: ReactNode
  lead: ReactNode
  rows: WhatRow[]
}

export function WhatJaniceHandlesSection({ id = "what", title, lead, rows }: WhatJaniceHandlesSectionProps) {
  return (
    <Section id={id}>
      <SectionHeader center title={title} lead={lead} />
      <FeatureRows>
        {rows.map((row, i) => (
          <FeatureRow
            key={i}
            reversed={i % 2 === 1}
            title={row.title}
            body={row.body}
            points={row.points}
            visual={row.visual}
          />
        ))}
      </FeatureRows>
    </Section>
  )
}
