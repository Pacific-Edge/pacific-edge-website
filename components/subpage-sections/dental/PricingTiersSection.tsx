import type { ReactNode } from "react"

/**
 * "How You Hire Her" pricing-tiers section (dental only). Reproduces the
 * legacy dx-tiers markup verbatim: the root keeps "dx-tiers dx-sec" (dental.css
 * scopes all dx-* styling to it) and each card keeps data-tilt so
 * DentalInteractive's mount-time [data-tilt] wiring picks it up.
 */
export interface PricingTier {
  badge: string
  featured?: boolean
  icon: ReactNode
  title: ReactNode
  sub: ReactNode
  features: ReactNode[]
  fromPrice: string
}

interface PricingTiersSectionProps {
  eyebrow: ReactNode
  title: ReactNode
  lead: ReactNode
  tiers: PricingTier[]
  flagLabel?: string
  ctaHref: string
  ctaLabel: ReactNode
  note: ReactNode
}

function TierCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PricingTiersSection({ eyebrow, title, lead, tiers, flagLabel = "MOST HIRED", ctaHref, ctaLabel, note }: PricingTiersSectionProps) {
  return (
    <section className="dx-tiers dx-sec">
      <div className="wrap">
        <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>{eyebrow}</div>
        <h2 className="st reveal d1 tac">{title}</h2>
        <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>{lead}</p>
        <div className="dx-tier-grid">
          {tiers.map((tier, i) => (
            <article key={i} className={`dx-tier${tier.featured ? " feat" : ""} reveal d${i + 1}`} data-tilt>
              {tier.featured && <span className="dx-tier-flag">{flagLabel}</span>}
              <div className="dx-tier-shine" aria-hidden="true" />
              <span className="dx-tier-badge">{tier.badge}</span>
              <div className="dx-tier-ico">{tier.icon}</div>
              <h3 className="dx-tier-title">{tier.title}</h3>
              <p className="dx-tier-sub">{tier.sub}</p>
              <ul className="dx-tier-list">
                {tier.features.map((feature, j) => (
                  <li key={j}><TierCheck />{feature}</li>
                ))}
              </ul>
              <div className="dx-tier-foot"><span className="dx-tier-from">FROM</span><span className="dx-tier-price">{tier.fromPrice}</span><span className="dx-tier-per">/mo</span></div>
            </article>
          ))}
        </div>
        <div className="dx-tier-cta reveal d3">
          <a href={ctaHref} className="btn-mint">{ctaLabel}</a>
          <div className="dx-tier-note">{note}</div>
        </div>
      </div>
    </section>
  )
}
