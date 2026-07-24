import type { ReactNode } from "react"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/sections"

/**
 * "Who It's Built For" practice-types section (dental only). The section id
 * must stay "practice-types": styles/dental.css scopes the .ptype-* classes
 * under it. Card visuals are usually <PracticeTypeMap variant=... />.
 */
export interface PracticeTypeCard {
  visual: ReactNode
  title: ReactNode
  points: ReactNode[]
  href: string
  ctaLabel?: ReactNode
}

interface PracticeTypesSectionProps {
  title: ReactNode
  lead: ReactNode
  cards: PracticeTypeCard[]
  calculatorHref: string
  calculatorLabel: ReactNode
}

export function PracticeTypesSection({ title, lead, cards, calculatorHref, calculatorLabel }: PracticeTypesSectionProps) {
  return (
    <Section id="practice-types">
      <SectionHeader center eyebrow="Who It's Built For" title={title} lead={lead} />
      <div className="ptype-grid">
        {cards.map((card, i) => (
          <div key={i} className={`ptype-card reveal d${i + 2}`}>
            <div className="ptype-visual"><div className="ptype-phone"><div className="ptype-screen">{card.visual}</div></div></div>
            <h3 className="ptype-title">{card.title}</h3>
            <ul className="ptype-list">
              {card.points.map((point, j) => <li key={j}>{point}</li>)}
            </ul>
            <Link href={card.href} className="btn-dark ptype-btn">{card.ctaLabel ?? <>See How It Works <span className="arr">→</span></>}</Link>
          </div>
        ))}
      </div>
      <div className={`reveal d${cards.length + 2}`} style={{ textAlign: "center", marginTop: 34 }}>
        <a href={calculatorHref} className="btn-dark">{calculatorLabel}</a>
      </div>
    </Section>
  )
}
