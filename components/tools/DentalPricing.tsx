"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import {
  CARDS,
  COLUMN_PRICES,
  INFO,
  TABLE,
  TERMLINE,
  type Term,
  type TierMark,
} from "@/lib/dental-pricing-data"
import "@/styles/dental-pricing.css"

const CAL = "https://cal.com/pacificedge"

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  )
}

/**
 * A number that counts up (460ms ease-out-cubic) whenever `value` changes, with
 * an optional prefix/suffix preserved across the tween. Collapses to an instant
 * set under prefers-reduced-motion. Ported from the old setTerm() count-up.
 */
function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const prev = useRef(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const from = prev.current
    const to = value
    prev.current = value
    const final = prefix + to.toLocaleString("en-US") + suffix
    if (prefersReducedMotion() || from === to) {
      el.textContent = final
      return
    }
    const t0 = performance.now()
    let raf = 0
    const frame = (now: number) => {
      const p = Math.min(1, (now - t0) / 460)
      const e = 1 - Math.pow(1 - p, 3)
      el.textContent = prefix + Math.round(from + (to - from) * e).toLocaleString("en-US") + suffix
      if (p < 1) raf = requestAnimationFrame(frame)
      else el.textContent = final
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [value, prefix, suffix])

  return <span ref={ref}>{prefix + value.toLocaleString("en-US") + suffix}</span>
}

function Mark({ mark }: { mark: TierMark }) {
  if (mark === "ok") return <span className="ok">&#10003;</span>
  if (mark === "add") return <span className="ad">+</span>
  return <span className="no">&ndash;</span>
}

export default function DentalPricing() {
  const [term, setTerm] = useState<Term>("6")
  const [animate, setAnimate] = useState(true)
  const [infoKey, setInfoKey] = useState<string | null>(null)

  // Read ?term=12 / ?static=1 once on mount (matches the old location.search read).
  useEffect(() => {
    const qs = new URLSearchParams(window.location.search)
    if (qs.get("static") === "1") setAnimate(false)
    if (qs.get("term") === "12") setTerm("12")
  }, [])

  // Escape closes the info modal.
  useEffect(() => {
    if (!infoKey) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInfoKey(null)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [infoKey])

  const info = infoKey ? INFO[infoKey] : null

  return (
    <div className={`wrap${animate ? " anim" : ""}`}>
      <div className="wash" />

      <div className="hero">
        <div>
          <div className="eyebrow">
            <span className="dash" />
            PRICING &nbsp;&nbsp;&middot;&nbsp;&nbsp; DENTAL &nbsp;&nbsp;&middot;&nbsp;&nbsp; JULY 2026
          </div>
          <h1>
            THREE WAYS TO <span className="pine">HIRE JANICE.</span>
          </h1>
          <div className="sub">
            MEET JANICE. <b>SHE NEVER MISSES.</b>
            &nbsp;&nbsp;&middot;&nbsp;&nbsp; YOUR AI EMPLOYEE FOR THE FRONT DESK
          </div>
        </div>
        <div className="toggle" role="tablist" aria-label="Term">
          <button
            className={term === "6" ? "on" : ""}
            onClick={() => setTerm("6")}
            aria-selected={term === "6"}
          >
            6-MONTH TERM
          </button>
          <button
            className={term === "12" ? "on" : ""}
            onClick={() => setTerm("12")}
            aria-selected={term === "12"}
          >
            12-MONTH &middot; SAVE MORE
          </button>
        </div>
      </div>

      <div className="cards">
        {CARDS.map((c) => (
          <div key={c.name} className={`card${c.badge ? " hero-card" : ""}`}>
            {c.badge && <span className="badge">{c.badge}</span>}
            <h2>{c.name}</h2>
            <div className="tag">{c.tag}</div>
            <div className="was">
              MONTH-TO-MONTH&nbsp;&nbsp;<s>{c.was}</s>
            </div>
            <div className="price">
              {c.from && <span className="frm">FROM&nbsp;&nbsp;</span>}
              <span className="cur">$</span>
              <span className="num">
                <AnimatedNumber value={c.num[term]} />
              </span>
              <span className="per">/MO + GST</span>
            </div>
            <div className="saveline">
              <span className="save">{c.save[term]}</span>
            </div>
            <div className="termnote">{c.termnote[term]}</div>
            {c.extraSave && (
              <div className="saveline">
                <span className="save">{c.extraSave}</span>
              </div>
            )}
            <a className={`cta${c.ctaMint ? " mint" : ""}`} href={CAL} target="_blank" rel="noopener">
              BOOK A DEMO
            </a>
          </div>
        ))}
      </div>

      <div className="math">
        <span className="chip">THE MATH</span>
        <span className="t">
          <b>4 recovered visits &asymp; $1,200.</b> That covers Full-Time. Most practices lose 15+ a
          month.
        </span>
      </div>

      <div className="tablecard">
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th className="f">EVERY LINE, SIDE BY SIDE.</th>
                <th>
                  <div className="tn">PART-TIME</div>
                  <div className="tp">
                    <AnimatedNumber
                      value={COLUMN_PRICES[0].num[term]}
                      prefix={COLUMN_PRICES[0].prefix}
                      suffix={COLUMN_PRICES[0].suffix}
                    />
                  </div>
                </th>
                <th className="ft">
                  <span className="mh">MOST HIRED</span>
                  <br />
                  <div className="tn">FULL-TIME</div>
                  <div className="tp">
                    <AnimatedNumber
                      value={COLUMN_PRICES[1].num[term]}
                      prefix={COLUMN_PRICES[1].prefix}
                      suffix={COLUMN_PRICES[1].suffix}
                    />
                  </div>
                </th>
                <th>
                  <div className="tn">PARTNER</div>
                  <div className="tp">
                    <AnimatedNumber
                      value={COLUMN_PRICES[2].num[term]}
                      prefix={COLUMN_PRICES[2].prefix}
                      suffix={COLUMN_PRICES[2].suffix}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE.map((section) => (
                <Fragment key={section.title}>
                  <tr className={`grp${section.addons ? " addons" : ""}`}>
                    <td colSpan={4}>
                      <div className="gt">{section.title}</div>
                      <div className="gd">
                        {section.desc}
                        {section.descBold && <b>{section.descBold}</b>}
                      </div>
                    </td>
                  </tr>
                  {section.rows.map((row) => (
                    <tr key={row.infoKey} className={section.addons ? "addonrow" : ""}>
                      <td className="f">
                        <span>{row.label}</span>
                        {row.comingSoon && <span className="cs">COMING SOON</span>}
                        <button
                          className="ib"
                          onClick={() => setInfoKey(row.infoKey)}
                          aria-label={`More about ${INFO[row.infoKey]?.title ?? row.label}`}
                        >
                          i
                        </button>
                      </td>
                      <td>
                        <Mark mark={row.tiers[0]} />
                      </td>
                      <td className="ft">
                        <Mark mark={row.tiers[1]} />
                      </td>
                      <td>
                        <Mark mark={row.tiers[2]} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="legend">
          <span>
            <span className="ok">&#10003;</span>&nbsp;&nbsp;INCLUDED
          </span>
          <span>
            <span className="ad">+</span>&nbsp;&nbsp;AVAILABLE AS AN ADD-ON
          </span>
          <span>
            <span className="no">&ndash;</span>&nbsp;&nbsp;NOT IN THIS TIER
          </span>
          <span>
            TAP&nbsp;&nbsp;<span className="ib" style={{ cursor: "default" }}>i</span>
            &nbsp;&nbsp;FOR WHAT EACH LINE MEANS
          </span>
        </div>
      </div>

      <div className="strip">
        EVERY PLAN&nbsp;&nbsp;&middot;&nbsp;&nbsp;FIRST MONTH FREE&nbsp;&nbsp;&middot;&nbsp;&nbsp;$199
        ONE-TIME SETUP&nbsp;&nbsp;&middot;&nbsp;&nbsp;UNLIMITED USAGE, NO PER-MESSAGE
        CHARGES&nbsp;&nbsp;&middot;&nbsp;&nbsp;LIVE DASHBOARD, EVERY CONVERSATION
        LOGGED&nbsp;&nbsp;&middot;&nbsp;&nbsp;PRICED IN CAD
        <br />
        <span className="hl">
          JANICE SPEAKS ENGLISH, MANDARIN, CANTONESE, PUNJABI &amp; FARSI. INCLUDED
        </span>
        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
        <span id="termline">{TERMLINE[term]}</span>
        &nbsp;&nbsp;&middot;&nbsp;&nbsp;PRIMARY HOSTING IN CANADA (AWS MONTREAL)&nbsp;&nbsp;&middot;&nbsp;&nbsp;PIPEDA
        &amp; BC PIPA
      </div>

      <div
        className={`ovl${info ? " open" : ""}`}
        id="ovl"
        role="dialog"
        aria-modal="true"
        onClick={() => setInfoKey(null)}
      >
        <div className="dlg" onClick={(e) => e.stopPropagation()}>
          <button className="x" aria-label="Close" onClick={() => setInfoKey(null)}>
            &#10005;
          </button>
          <div className="k">WHAT THIS MEANS</div>
          <h3>{info?.title}</h3>
          <p>{info?.body}</p>
        </div>
      </div>
    </div>
  )
}
