import type { ReactNode } from "react"
import { Section, SectionHeader } from "@/components/ui/sections"

/**
 * Compact capability-chip roster: a centered header plus a wrap of pe-chip
 * pills. Generic (used for dental capabilities and ai-employee channels);
 * chips reuse the pe-chip system in styles/components.css, with reveal
 * delays cycling d1-d4 across the grid.
 */
export interface Capability {
  icon: ReactNode
  label: string
  soon?: boolean
}

interface ChipsSectionProps {
  id?: string
  eyebrow: ReactNode
  title: ReactNode
  lead: ReactNode
  chips: Capability[]
}

export function ChipsSection({ id, eyebrow, title, lead, chips }: ChipsSectionProps) {
  return (
    <Section id={id} tight>
      <SectionHeader center eyebrow={eyebrow} title={title} lead={lead} />
      <div className="pe-chips">
        {chips.map(({ icon, label, soon }, i) => (
          <span key={label} className={`pe-chip reveal d${(i % 4) + 1}`}>
            {icon}
            {label}
            {soon && <span className="pe-chip-soon">SOON</span>}
          </span>
        ))}
      </div>
    </Section>
  )
}
