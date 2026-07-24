import type { ReactNode } from "react"
import { Section, SectionHeader, DashboardEmbed } from "@/components/ui/sections"

/**
 * "Live Dashboard" section (dental and trades only). DashboardEmbed is an
 * id="idash" singleton autosized by LegacyBehaviors: render at most one per
 * page, and do not add this section to restaurants or salons.
 */
interface LiveDashboardSectionProps {
  industry: string
  title: ReactNode
  lead: ReactNode
}

export function LiveDashboardSection({ industry, title, lead }: LiveDashboardSectionProps) {
  return (
    <Section>
      <SectionHeader eyebrow="Live Dashboard" title={title} lead={lead} />
      <DashboardEmbed industry={industry} />
    </Section>
  )
}
