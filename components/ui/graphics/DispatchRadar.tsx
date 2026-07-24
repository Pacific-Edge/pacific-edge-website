import type { ReactNode } from "react"

/**
 * Dispatch signal panel: live badge, count-up job counter, radar ping around
 * a pin icon with an ETA label, and a job list with status pills. Root
 * carries "sig-visual reveal" so the legacy.css entrance animations (radar
 * ping, job-row stagger) play on scroll reveal. Count-up via .count[data-to].
 */
export interface DispatchJob {
  icon: ReactNode
  label: ReactNode
  pill: { label: ReactNode; tone: "new" | "booked" }
}

interface DispatchRadarProps {
  liveLabel: ReactNode
  countTo: number
  countUnit: string
  pinIcon: ReactNode
  etaLabel: ReactNode
  jobs: DispatchJob[]
}

export function DispatchRadar({ liveLabel, countTo, countUnit, pinIcon, etaLabel, jobs }: DispatchRadarProps) {
  return (
    <div className="sig-panel sig-visual reveal">
      <div className="sig-head">
        <span className="sig-live"><i />{liveLabel}</span>
        <span className="sig-num"><span className="count" data-to={countTo}>0</span> {countUnit}</span>
      </div>
      <div className="disp-radar">
        <span className="ring" /><span className="ring" /><span className="ring" />
        <span className="disp-pin">{pinIcon}</span>
        <span className="disp-eta">{etaLabel}</span>
      </div>
      <div className="disp-jobs">
        {jobs.map((job, i) => (
          <div key={i} className="disp-job">
            <span>{job.icon}</span>
            {job.label}
            <span className={job.pill.tone === "new" ? "pill new" : "pill"}>{job.pill.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
