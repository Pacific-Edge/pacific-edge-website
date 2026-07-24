import type { ReactNode } from "react"
import ScriptedChatDemo from "@/components/demo/ScriptedChatDemo"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * PhoneShowcase: the "What It Looks Like" walkthrough (replaces the legacy
 * `.show-grid` block and the per-page hand-coded phone markup). Header and
 * numbered steps on the left, the canonical ScriptedChatDemo phone on the
 * right. `industry` keys into lib/demo/scripted-chats.ts.
 */
export interface ShowStep {
  title: ReactNode
  body: ReactNode
}

interface PhoneShowcaseProps {
  eyebrow: ReactNode
  title: ReactNode
  lead?: ReactNode
  steps: ShowStep[]
  industry: string
}

export function PhoneShowcase({ eyebrow, title, lead, steps, industry }: PhoneShowcaseProps) {
  return (
    <div className="pe-show">
      <div className="pe-show-text">
        <div className={cn("pe-eyebrow", revealCls())}>{eyebrow}</div>
        <h2 className={cn("pe-sechead-title", revealCls(1))}>{title}</h2>
        {lead && <p className={cn("pe-sechead-lead", revealCls(2))}>{lead}</p>}
        <div className="pe-show-steps">
          {steps.map((s, i) => (
            <div key={i} className={cn("pe-show-step", revealCls(Math.min(i + 2, 6)))}>
              <div className="pe-show-step-n">{i + 1}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cn("pe-show-phone", revealCls(2))}>
        <ScriptedChatDemo industry={industry} />
      </div>
    </div>
  )
}
