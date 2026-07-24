import type { ReactNode } from "react"

/**
 * "Fill every cancelled slot" signal panel: live badge, count-up number,
 * coverage bar, 12-tile grid, and a booking toast. The root carries
 * "sig-visual reveal" so ScrollReveal stamps .in and the entrance animations
 * in legacy.css (bar fill, tile stagger, toast loop) actually play.
 * Count-up is driven by LegacyBehaviors via .count[data-to].
 */
interface CoveragePanelProps {
  liveLabel: ReactNode
  countTo: number
  countUnit: string
  toastIcon: ReactNode
  toastTitle: ReactNode
  toastSub: ReactNode
  toastValue: ReactNode
}

export function CoveragePanel({ liveLabel, countTo, countUnit, toastIcon, toastTitle, toastSub, toastValue }: CoveragePanelProps) {
  return (
    <div className="sig-panel sig-visual reveal">
      <div className="sig-head">
        <span className="sig-live"><i />{liveLabel}</span>
        <span className="sig-num"><span className="count" data-to={countTo}>0</span> {countUnit}</span>
      </div>
      <div className="cov-bar"><i /></div>
      <div className="cov-tiles"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="cov-toast" style={{ marginTop: "auto" }}>
        {toastIcon}
        <div>
          <b style={{ display: "block", fontSize: 13 }}>{toastTitle}</b>
          <span style={{ fontSize: 11, color: "var(--text3)" }}>{toastSub}</span>
        </div>
        <span className="mock-pill ok" style={{ marginLeft: "auto", alignSelf: "center" }}>{toastValue}</span>
      </div>
    </div>
  )
}
