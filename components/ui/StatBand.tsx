import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * StatBand — the full-width 4-up outcomes band (the old `.statband`). Each big
 * number animates via the `.count[data-to]` count-up ported in
 * `LegacyBehaviors` (zero layout shift, reduced-motion safe). `note` is the
 * cited-outcomes caption beneath.
 */
export interface StatItem {
  to: number
  unit?: string
  label: string
}

export function StatBand({ stats, note }: { stats: StatItem[]; note?: ReactNode }) {
  return (
    <div className="pe-statband">
      <div className="pe-stat-row">
        {stats.map((s, i) => (
          <div className={cn("pe-stat", revealCls(i))} key={s.label}>
            <div className="pe-stat-big">
              <span className="count" data-to={s.to}>0</span>
              {s.unit && <span className="u">{s.unit}</span>}
            </div>
            <div className="pe-stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
      {note && <p className="pe-stat-note">{note}</p>}
    </div>
  )
}
