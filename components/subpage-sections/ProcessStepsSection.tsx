import type { ReactNode } from "react"
import { Section, SectionHeader } from "@/components/ui/sections"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * Numbered process-step grid (the old .px-steps / .flow): section header plus
 * a row of counter-numbered steps. Steps reveal left-to-right; the grid is
 * 4-up by default and 3-up when given exactly 3 steps (.pe-steps--3).
 */
export interface ProcessStep {
  title: ReactNode
  body: ReactNode
}

interface ProcessStepsSectionProps {
  id?: string
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  steps: ProcessStep[]
  center?: boolean
}

export function ProcessStepsSection({ id, eyebrow, title, lead, steps, center }: ProcessStepsSectionProps) {
  return (
    <Section id={id}>
      <SectionHeader center={center} eyebrow={eyebrow} title={title} lead={lead} />
      <div className={cn("pe-steps", steps.length === 3 && "pe-steps--3")}>
        {steps.map((s, i) => (
          <div key={i} className={cn("pe-step", revealCls(Math.min(i + 1, 6)))}>
            <div className="pe-step-n">{String(i + 1).padStart(2, "0")}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
