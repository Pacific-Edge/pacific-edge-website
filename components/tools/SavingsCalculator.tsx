"use client"

import { useEffect, useRef, useState } from "react"
import { SAVINGS_CALCULATORS, type CalcIndustry } from "@/lib/savings-calculators"
import { GetStartedSection } from "@/components/subpage-sections"
import "@/styles/savings-calculator.css"

const CAL = "https://cal.com/pacificedge"

/** parseFloat, clamped to >= 0 (mirrors the old val() helper). */
function num(v: string): number {
  const n = parseFloat(v)
  return isFinite(n) && n >= 0 ? n : 0
}

const money = (v: number) => Math.round(v).toLocaleString()
const moneyD = (v: number) => "$" + Math.round(v).toLocaleString()
const whole = (v: number) => Math.round(v).toLocaleString()

/**
 * One component for all four industry savings calculators — the old static
 * `*-savings-calculator.html` pages collapsed onto <SiteShell>. Formulas and the
 * 600ms ease-out count-up are ported verbatim; the animation writes formatted
 * text straight into refs (as the original did) to avoid per-frame re-renders,
 * and collapses to an instant set under prefers-reduced-motion.
 */
export default function SavingsCalculator({ industry }: { industry: CalcIndustry }) {
  const cfg = SAVINGS_CALCULATORS[industry]
  const f = cfg.fields

  const [practice, setPractice] = useState(cfg.options[0].value)
  const [locations, setLocations] = useState("1")
  const [rev, setRev] = useState(String(cfg.rev[cfg.options[0].value] ?? cfg.revFallback))
  const [cancels, setCancels] = useState(String(f.cancelsDefault))
  const [empty, setEmpty] = useState(String(f.emptyDefault))
  const [refill, setRefill] = useState(String(f.refillDefault))
  const [margin, setMargin] = useState(String(cfg.margin[cfg.options[0].value] ?? cfg.marginFallback))

  const yearlyRef = useRef<HTMLSpanElement>(null)
  const monthlyRef = useRef<HTMLElement>(null)
  const apptsRef = useRef<HTMLElement>(null)
  const hoursRef = useRef<HTMLElement>(null)
  const profitRef = useRef<HTMLElement>(null)

  // Last committed animated value per output, so tweens start where they left off.
  const cur = useRef<Record<string, number>>({})
  const frames = useRef<Record<string, number>>({})

  // Reset revenue + margin to the type's defaults when the industry sub-type changes.
  function onPracticeChange(value: string) {
    setPractice(value)
    setRev(String(cfg.rev[value] ?? cfg.revFallback))
    setMargin(String(cfg.margin[value] ?? cfg.marginFallback))
  }

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    const loc = Math.max(1, num(locations) || 1)
    const refillPct = num(refill)
    const perLoc = (num(cancels) + num(empty)) * (refillPct / 100)
    const weekly = perLoc * num(rev) * loc

    const targets: {
      key: string
      el: HTMLElement | null
      target: number
      fmt: (v: number) => string
    }[] = [
      { key: "yearly", el: yearlyRef.current, target: weekly * 52, fmt: money },
      { key: "monthly", el: monthlyRef.current, target: weekly * 4.33, fmt: moneyD },
      { key: "appts", el: apptsRef.current, target: perLoc * 52 * loc, fmt: whole },
      {
        key: "hours",
        el: hoursRef.current,
        target: perLoc * 52 * loc * cfg.results.hoursMultiplier,
        fmt: (v: number) => whole(v) + cfg.results.hoursSuffix,
      },
      { key: "profit", el: profitRef.current, target: weekly * 52 * (num(margin) / 100), fmt: moneyD },
    ]

    for (const { key, el, target, fmt } of targets) {
      if (!el) continue
      if (frames.current[key]) cancelAnimationFrame(frames.current[key])
      if (reduce) {
        el.textContent = fmt(target)
        cur.current[key] = target
        continue
      }
      const start = cur.current[key] ?? 0
      let t0: number | null = null
      const step = (ts: number) => {
        if (t0 === null) t0 = ts
        const p = Math.min(1, (ts - t0) / 600)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = fmt(start + (target - start) * e)
        if (p < 1) {
          frames.current[key] = requestAnimationFrame(step)
        } else {
          cur.current[key] = target
        }
      }
      frames.current[key] = requestAnimationFrame(step)
    }

    const captured = frames.current
    return () => {
      for (const id of Object.values(captured)) cancelAnimationFrame(id)
    }
  }, [locations, rev, cancels, empty, refill, margin, cfg])

  const refillPct = num(refill)

  return (
    <>
      <header className="calc-hero">
        <div className="ce reveal">Savings Estimator</div>
        <h1 className="reveal d1">
          {cfg.hero.line1}
          <br />
          <span className="a">{cfg.hero.line2}</span>
        </h1>
        <p className="reveal d2">{cfg.hero.sub}</p>
      </header>

      <div className="calc-wrap">
        <div className="calc-grid">
          <div className="calc-form reveal d1">
            <div className="cf-field">
              <label htmlFor="practice">{cfg.practiceLabel}</label>
              <select
                id="practice"
                value={practice}
                onChange={(e) => onPracticeChange(e.target.value)}
              >
                {cfg.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="cf-two">
              <div className="cf-field">
                <label htmlFor="locations">{f.locationsLabel}</label>
                <input
                  id="locations"
                  type="number"
                  min="1"
                  step="1"
                  value={locations}
                  onChange={(e) => setLocations(e.target.value)}
                />
              </div>
              <div className="cf-field">
                <label htmlFor="rev">{f.revLabel}</label>
                <input
                  id="rev"
                  type="number"
                  min="0"
                  step={f.revStep}
                  value={rev}
                  onChange={(e) => setRev(e.target.value)}
                />
              </div>
            </div>
            <div className="cf-two">
              <div className="cf-field">
                <label htmlFor="cancels">{f.cancelsLabel}</label>
                <input
                  id="cancels"
                  type="number"
                  min="0"
                  step="1"
                  value={cancels}
                  onChange={(e) => setCancels(e.target.value)}
                />
              </div>
              <div className="cf-field">
                <label htmlFor="empty">{f.emptyLabel}</label>
                <input
                  id="empty"
                  type="number"
                  min="0"
                  step="1"
                  value={empty}
                  onChange={(e) => setEmpty(e.target.value)}
                />
              </div>
            </div>
            <div className="cf-field">
              <label htmlFor="refill">
                {f.refillLabel} <span className="rr">{Math.round(refillPct)}%</span>
              </label>
              <input
                id="refill"
                className="cf-range"
                type="range"
                min={f.refillMin}
                max={f.refillMax}
                step={f.refillStep}
                value={refill}
                onChange={(e) => setRefill(e.target.value)}
              />
            </div>
            <div className="cf-field">
              <label htmlFor="margin">{f.marginLabel}</label>
              <input
                id="margin"
                type="number"
                min="0"
                max="100"
                step="5"
                value={margin}
                onChange={(e) => setMargin(e.target.value)}
              />
            </div>
          </div>

          <div className="calc-res reveal d2">
            <div className="glow" />
            <div className="cr-label">You could recover about</div>
            <div className="cr-big">
              <span className="cur">$</span>
              <span className="num" ref={yearlyRef}>
                0
              </span>
            </div>
            <div className="cr-per">{cfg.results.perLabel}</div>
            <div className="cr-bar">
              <div className="cr-bar-fill" style={{ width: Math.min(100, refillPct) + "%" }} />
            </div>
            <div className="cr-row">
              <span>Recovered each month</span>
              <b ref={monthlyRef}>$0</b>
            </div>
            <div className="cr-row">
              <span>{cfg.results.apptsLabel}</span>
              <b ref={apptsRef}>0</b>
            </div>
            <div className="cr-row">
              <span>{cfg.results.hoursLabel}</span>
              <b ref={hoursRef}>0{cfg.results.hoursSuffix}</b>
            </div>
            <div className="cr-row hl">
              <span>Profit recovered / year</span>
              <b ref={profitRef}>$0</b>
            </div>
            <div className="cr-cta">
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">
                Book a Free 15-Min Demo
              </a>
              <div className="cr-note">An estimate to start the conversation, not a quote.</div>
            </div>
          </div>
        </div>
      </div>

      <GetStartedSection
        eyebrow="See It For Real"
        title={<>{cfg.icta.line1} <br /><span className="a">{cfg.icta.line2}</span></>}
        desc={cfg.icta.desc}
        action={<a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
        crossLinks={cfg.icta.crossLinks.map((x) => ({ href: x.href, icon: x.icon, label: x.label }))}
      />
    </>
  )
}
