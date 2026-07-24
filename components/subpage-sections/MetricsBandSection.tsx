import type { ReactNode } from "react"
import { StatBand, type StatItem } from "@/components/ui/sections"

/**
 * Full-bleed metrics band between "What It Looks Like" and the FAQ.
 * Renders StatBand directly (not inside a Section), matching the template.
 */
interface MetricsBandSectionProps {
  stats: StatItem[]
  note?: ReactNode
}

export function MetricsBandSection({ stats, note }: MetricsBandSectionProps) {
  return <StatBand stats={stats} note={note} />
}
