import type { ReactNode } from "react"
import { ChipsSection, type Capability } from "../ChipsSection"

/**
 * "Everything She Handles" capability-chip grid, the dental preset of the
 * generic ChipsSection (kept as a thin wrapper so /dental is unchanged).
 */
export type { Capability }

interface CapabilitiesChipsSectionProps {
  title: ReactNode
  lead: ReactNode
  capabilities: Capability[]
}

export function CapabilitiesChipsSection({ title, lead, capabilities }: CapabilitiesChipsSectionProps) {
  return <ChipsSection eyebrow="Everything She Handles" title={title} lead={lead} chips={capabilities} />
}
