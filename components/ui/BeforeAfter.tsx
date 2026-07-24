import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"
import { CheckMark, XMark } from "./icons"

/**
 * BeforeAfter — the "Without … / With Janice" comparison table (the old
 * `.cmp`), rebuilt flat: no crosshatch overlay, no gradient header fill — a
 * solid mint-tinted "after" column and a mint top-rule on the Janice header.
 * The Janice header + the X/check marks are baked in (brand-standard); the
 * page supplies only the rows and the "before" column label.
 */
export interface CompareRow {
  icon: ReactNode
  cat: string
  before: string
  after: string
}

export function BeforeAfter({ rows, beforeLabel = "Without Pacific Edge AI" }: { rows: CompareRow[]; beforeLabel?: ReactNode }) {
  return (
    <div className={cn("pe-cmp", revealCls(2))}>
      <div className="pe-cmp-row pe-cmp-head">
        <div className="pe-cmp-cell pe-cmp-corner" />
        <div className="pe-cmp-cell pe-cmp-before">{beforeLabel}</div>
        <div className="pe-cmp-cell pe-cmp-after">
          <span className="pe-cmp-janice">
            <span className="pe-cmp-jav">J</span>
            <span className="pe-cmp-jname">
              With Janice<span className="pe-cmp-jsub">Your AI employee</span>
            </span>
          </span>
        </div>
      </div>
      {rows.map((row) => (
        <div className="pe-cmp-row" key={row.cat}>
          <div className="pe-cmp-cell pe-cmp-cat">
            <span className="pe-cmp-ico">{row.icon}</span>
            {row.cat}
          </div>
          <div className="pe-cmp-cell pe-cmp-before">
            <span className="pe-cmp-x">
              <XMark />
            </span>
            {row.before}
          </div>
          <div className="pe-cmp-cell pe-cmp-after">
            <span className="pe-cmp-check">
              <CheckMark size={13} strokeWidth={3} />
            </span>
            {row.after}
          </div>
        </div>
      ))}
    </div>
  )
}
