import type { ReactNode } from "react"
import { Section, SectionHeader } from "@/components/ui/sections"

/**
 * "Everything She Handles" capability-chip grid (dental only). Chips reuse
 * the pe-chip system in styles/components.css, with reveal delays cycling
 * d1-d4 across the grid.
 */
export interface Capability {
  icon: ReactNode
  label: string
  soon?: boolean
}

interface CapabilitiesChipsSectionProps {
  title: ReactNode
  lead: ReactNode
  capabilities: Capability[]
}

export function CapabilitiesChipsSection({ title, lead, capabilities }: CapabilitiesChipsSectionProps) {
  return (
    <Section tight>
      <SectionHeader center eyebrow="Everything She Handles" title={title} lead={lead} />
      <div className="pe-chips">
        {capabilities.map(({ icon, label, soon }, i) => (
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
