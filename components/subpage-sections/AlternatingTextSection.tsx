import type { ReactNode } from "react"
import { Section, SectionHeader, FeatureRow, FeatureRows } from "@/components/ui/sections"

/**
 * AlternatingTextSection: centered header (optional eyebrow + title + lead)
 * over a stack of feature rows whose layout alternates automatically (every
 * second row reversed). The standard "text beside a visual" section on every
 * subpage. Visuals come from components/ui/graphics (MockFeedCard,
 * CoveragePanel, RecallRing, DispatchRadar) or any custom ReactNode.
 */
export interface WhatRow {
  eyebrow?: ReactNode
  title: ReactNode
  body: ReactNode
  points: ReactNode[]
  visual: ReactNode
}

interface AlternatingTextSectionProps {
  id?: string
  eyebrow?: ReactNode
  title: ReactNode
  lead: ReactNode
  rows: WhatRow[]
}

export function AlternatingTextSection({ id = "capabilities", eyebrow, title, lead, rows }: AlternatingTextSectionProps) {
  return (
    <Section id={id}>
      <SectionHeader center eyebrow={eyebrow} title={title} lead={lead} />
      <FeatureRows>
        {rows.map((row, i) => (
          <FeatureRow
            key={i}
            reversed={i % 2 === 1}
            eyebrow={row.eyebrow}
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
