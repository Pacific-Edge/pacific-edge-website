import type { ReactNode } from "react"

/**
 * Generic ".mock" feed card: a small live-feed mockup with a header and 1-n
 * status rows. Used as the FeatureRow visual across every industry subpage.
 * With `live`, LegacyBehaviors sequences the rows in (.mock[data-live]); an
 * optional typing indicator plays first when `typingLabel` is set.
 */
export interface MockFeedRow {
  avatar: ReactNode
  name: ReactNode
  /** Secondary line. Rendered as .mock-sub, or .mock-stars when `stars` is set. */
  sub: ReactNode
  stars?: boolean
  pill: { label: ReactNode; tone: "ok" | "warn" }
}

interface MockFeedCardProps {
  headTitle: ReactNode
  rows: MockFeedRow[]
  live?: boolean
  typingLabel?: ReactNode
  typingDelay?: number
}

export function MockFeedCard({ headTitle, rows, live, typingLabel, typingDelay = 1300 }: MockFeedCardProps) {
  return (
    <div className="mock" {...(live ? { "data-live": "" } : {})}>
      <div className="mock-head"><span className="mock-dot" /><span className="mock-title">{headTitle}</span></div>
      {typingLabel != null && (
        <div className="mock-typing" data-typing={typingDelay}>{typingLabel}<i /><i /><i /></div>
      )}
      {rows.map((row, i) => (
        <div key={i} className="mock-row">
          <div className="mock-row-l">
            <div className="mock-avatar">{row.avatar}</div>
            <div>
              <div className="mock-name">{row.name}</div>
              <div className={row.stars ? "mock-stars" : "mock-sub"}>{row.sub}</div>
            </div>
          </div>
          <span className={`mock-pill ${row.pill.tone}`}>{row.pill.label}</span>
        </div>
      ))}
    </div>
  )
}
