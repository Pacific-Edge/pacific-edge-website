import type { ReactNode } from "react"
import { CheckMark } from "@/components/ui/icons"

/**
 * Recall progress signal panel: circular done/total ring plus a list of
 * rebooked entries. Root carries "sig-visual reveal" so the legacy.css
 * entrance animations (ring fill, row stagger) play on scroll reveal.
 *
 * The static dashoffset is computed from done/total. Note: the recFill
 * keyframe in legacy.css settles at the 6/8 fill (offset 53); callers using
 * a different ratio will see the animated ring settle there unless that
 * keyframe is generalized.
 */
export interface RecallRow {
  label: ReactNode
  pill: ReactNode
}

interface RecallRingProps {
  liveLabel: ReactNode
  done: number
  total: number
  caption: ReactNode
  rows: RecallRow[]
}

const RING_CIRCUMFERENCE = 214

export function RecallRing({ liveLabel, done, total, caption, rows }: RecallRingProps) {
  const offset = RING_CIRCUMFERENCE - RING_CIRCUMFERENCE * (done / total)
  return (
    <div className="sig-panel sig-visual reveal">
      <div className="sig-head"><span className="sig-live"><i />{liveLabel}</span></div>
      <div className="rec-top">
        <div className="rec-ring">
          <svg viewBox="0 0 86 86">
            <circle className="rec-track" cx="43" cy="43" r="34" />
            <circle className="rec-prog" cx="43" cy="43" r="34" style={{ strokeDashoffset: offset }} />
          </svg>
          <span className="rec-ring-num">{done}/{total}</span>
        </div>
        <div className="rec-cap">{caption}</div>
      </div>
      <div className="rec-rows">
        {rows.map((row, i) => (
          <div key={i} className="rec-row"><span className="ck"><CheckMark size={12} strokeWidth={3} /></span>{row.label}<span className="pill">{row.pill}</span></div>
        ))}
      </div>
    </div>
  )
}
