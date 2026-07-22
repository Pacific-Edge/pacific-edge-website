"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  Scissors,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import {
  INDUSTRIES,
  INDUSTRY_ORDER,
  calcResults,
  defaultInputs,
  type CalcInputs,
  type IndustryConfig,
  type IndustryKey,
} from "@/lib/calculator/config"
import { checkWorkEmail } from "@/lib/calculator/email"

const CAL = "https://cal.com/pacificedge"

const INDUSTRY_ICON: Record<IndustryKey, LucideIcon> = {
  restaurants: UtensilsCrossed,
  dental: Stethoscope,
  salons: Scissors,
  trades: Wrench,
  retail: ShoppingBag,
}

/* ---------- number formatting ---------- */
const money = (v: number) => Math.round(v).toLocaleString()
const moneyD = (v: number) => "$" + Math.round(v).toLocaleString()
const whole = (v: number) => Math.round(v).toLocaleString()

/* ---------- reduced-motion (no framer dependency) ---------- */
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    // Sync from the external media query, then subscribe.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return reduced
}

/* ---------- animated count-up ---------- */
function useCountUp(target: number, reduced: boolean) {
  const [display, setDisplay] = useState(0)
  const fromRef = useRef(0)
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (reduced) return // reduced motion: the hook returns `target` directly below
    const from = fromRef.current
    const dur = 600
    let start: number | null = null
    const tick = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min(1, (ts - start) / dur)
      const e = 1 - Math.pow(1 - p, 3)
      setDisplay(from + (target - from) * e)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
      else fromRef.current = target
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, reduced])

  return reduced ? target : display
}

function AnimatedNumber({
  value,
  format,
  reduced,
  className,
}: {
  value: number
  format: (n: number) => string
  reduced: boolean
  className?: string
}) {
  const n = useCountUp(value, reduced)
  return <span className={className}>{format(n)}</span>
}

type StepKey = "industry" | "type" | "locations" | "value" | "primary" | "secondary" | "email" | "results"

const BLANK_INPUTS: CalcInputs = { value: 0, locations: 1, primary: 0, secondary: 0, recapture: 60, margin: 60 }

/** Seed state from a locked industry (embedded mode) so we never setState on mount. */
function seedState(locked?: IndustryKey): { industry: IndustryKey | null; type: string; inputs: CalcInputs } {
  if (!locked) return { industry: null, type: "", inputs: BLANK_INPUTS }
  const c = INDUSTRIES[locked]
  const d = defaultInputs(c)
  return {
    industry: locked,
    type: d.type,
    inputs: { value: d.value, locations: d.locations, primary: d.primary, secondary: d.secondary, recapture: d.recapture, margin: d.margin },
  }
}

export default function RoiCalculator({
  lockedIndustry,
  id,
}: {
  /** When set, the industry question is skipped and locked to this industry. */
  lockedIndustry?: IndustryKey
  id?: string
}) {
  const reduced = useReducedMotion()

  const [industry, setIndustry] = useState<IndustryKey | null>(() => seedState(lockedIndustry).industry)
  const [type, setType] = useState<string>(() => seedState(lockedIndustry).type)
  const [inputs, setInputs] = useState<CalcInputs>(() => seedState(lockedIndustry).inputs)
  const [stepIndex, setStepIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [unlocked, setUnlocked] = useState(false)

  const cfg: IndustryConfig | null = industry ? INDUSTRIES[industry] : null

  // Seed inputs when an industry is chosen (or on mount when locked).
  const applyIndustry = (key: IndustryKey) => {
    const c = INDUSTRIES[key]
    const d = defaultInputs(c)
    setIndustry(key)
    setType(d.type)
    setInputs({
      value: d.value,
      locations: d.locations,
      primary: d.primary,
      secondary: d.secondary,
      recapture: d.recapture,
      margin: d.margin,
    })
  }

  // Universal mode only: honour ?industry= deep links from nav / other pages.
  // Runs post-mount so the prerendered HTML (no query string) hydrates cleanly;
  // the URL is an external system we're syncing from, hence the setState here.
  useEffect(() => {
    if (lockedIndustry || typeof window === "undefined") return
    const q = new URLSearchParams(window.location.search).get("industry")
    if (q && q in INDUSTRIES) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      applyIndustry(q as IndustryKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Ordered flow (results excluded from the progress count).
  const flow = useMemo<StepKey[]>(
    () =>
      lockedIndustry
        ? ["type", "locations", "value", "primary", "secondary", "email"]
        : ["industry", "type", "locations", "value", "primary", "secondary", "email"],
    [lockedIndustry],
  )
  const allSteps = useMemo<StepKey[]>(() => [...flow, "results"], [flow])
  const current = allSteps[stepIndex]

  const setField = (k: keyof CalcInputs, v: number) => setInputs((s) => ({ ...s, [k]: v }))

  const chooseType = (value: string) => {
    if (!cfg) return
    const opt = cfg.typeField.options.find((o) => o.value === value)
    setType(value)
    if (opt) setInputs((s) => ({ ...s, value: opt.rev, margin: opt.margin }))
  }

  // Ignore clicks that land inside the exit-animation window: interrupting the
  // AnimatePresence "wait" exit can strand the stage on a stale step.
  const lastNavRef = useRef(0)
  const navGuard = () => {
    if (reduced) return true
    const now = performance.now()
    if (now - lastNavRef.current < 360) return false
    lastNavRef.current = now
    return true
  }
  const goNext = () => {
    if (!navGuard()) return
    setDirection(1)
    setStepIndex((i) => Math.min(i + 1, allSteps.length - 1))
  }
  const goBack = () => {
    if (!navGuard()) return
    setDirection(-1)
    setStepIndex((i) => Math.max(i - 1, 0))
  }

  const handleUnlock = () => {
    const res = checkWorkEmail(email)
    if (!res.ok) {
      setEmailErr(res.reason || "Please enter a valid work email.")
      return
    }
    setEmailErr("")
    setUnlocked(true)
    const lead = {
      email: email.trim(),
      industry,
      type,
      inputs,
      page: typeof window !== "undefined" ? window.location.pathname : "",
      ts: new Date().toISOString(),
    }
    // Primary capture: Cloudflare Pages Function -> KV (needs the LEADS binding
    // in the Pages dashboard; see CLAUDE.md). Fire-and-forget so the UX never blocks.
    try {
      void fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        keepalive: true,
      }).catch(() => {})
    } catch {
      /* ignore */
    }
    // Local backup log: append-only list of every submission from this browser.
    try {
      const KEY = "pe_roi_leads"
      const prev = JSON.parse(window.localStorage.getItem(KEY) || "[]")
      window.localStorage.setItem(KEY, JSON.stringify([...(Array.isArray(prev) ? prev : []), lead]))
    } catch {
      /* ignore storage failures (private mode) */
    }
    goNext()
  }

  const results = cfg ? calcResults(cfg, inputs) : null

  // ----- validation for the standard Next button -----
  const canAdvance = (() => {
    switch (current) {
      case "industry":
        return industry !== null
      case "type":
        return !!type
      case "locations":
        return inputs.locations >= 1
      case "value":
        return inputs.value >= 0
      case "primary":
        return inputs.primary >= 0
      case "secondary":
        return inputs.secondary >= 0
      default:
        return true
    }
  })()

  const showProgress = current !== "results"
  const progressIdx = Math.min(stepIndex, flow.length - 1)
  const progressPct = ((progressIdx + 1) / flow.length) * 100
  const showBack = stepIndex > 0

  /* ---------- step bodies ---------- */
  function NumericStep({ field, k }: { field: IndustryConfig["value"]; k: keyof CalcInputs }) {
    const val = inputs[k]
    const safeVal = Number.isFinite(val) ? val : field.min
    return (
      <div className="roi-step">
        <div className="roi-eyebrow">{cfg!.label}</div>
        <h2 className="roi-q">{field.q}</h2>
        {field.help ? <p className="roi-help">{field.help}</p> : <p className="roi-help">A rough number is fine. You can fine-tune everything on the results screen.</p>}
        <div className="roi-numwrap">
          {field.prefix ? <span className="roi-num-prefix">{field.prefix}</span> : null}
          <input
            className="roi-num-input"
            type="number"
            inputMode="numeric"
            min={field.min}
            step={field.step}
            value={Number.isFinite(val) ? val : ""}
            onChange={(e) => {
              const raw = e.target.value
              // Allow clearing the field while typing; clamp on blur instead.
              setField(k, raw === "" ? NaN : Math.max(field.min, parseFloat(raw) || 0))
            }}
            onBlur={() => {
              if (!Number.isFinite(val)) setField(k, field.min)
            }}
            aria-label={field.label}
          />
          {field.unit ? <span className="roi-num-unit">{field.unit}</span> : null}
        </div>
        <div className="roi-steppers">
          <button type="button" className="roi-stepper" aria-label={`Decrease ${field.label}`} onClick={() => setField(k, Math.max(field.min, safeVal - field.step))}>−</button>
          <button type="button" className="roi-stepper" aria-label={`Increase ${field.label}`} onClick={() => setField(k, safeVal + field.step)}>+</button>
        </div>
      </div>
    )
  }

  function renderStep() {
    if (!cfg && current !== "industry") return null

    switch (current) {
      case "industry":
        return (
          <div className="roi-step">
            <div className="roi-eyebrow">ROI Calculator</div>
            <h2 className="roi-q">What kind of business do you run?</h2>
            <p className="roi-help">We&apos;ll tailor every question and the whole savings estimate to your industry.</p>
            <div className="roi-opts">
              {INDUSTRY_ORDER.map((key) => {
                const c = INDUSTRIES[key]
                const Ico = INDUSTRY_ICON[key]
                return (
                  <button
                    key={key}
                    type="button"
                    className={`roi-opt${industry === key ? " is-sel" : ""}`}
                    aria-pressed={industry === key}
                    onClick={() => applyIndustry(key)}
                  >
                    <span className="roi-opt-emoji"><Ico size={20} strokeWidth={1.7} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>
                    <span className="roi-opt-txt"><span className="roi-opt-name">{c.label}</span></span>
                    <span className="roi-opt-check" aria-hidden><Check /></span>
                  </button>
                )
              })}
            </div>
          </div>
        )

      case "type":
        return (
          <div className="roi-step">
            <div className="roi-eyebrow">{cfg!.label}</div>
            <h2 className="roi-q">{cfg!.typeField.q}</h2>
            <p className="roi-help">This sets a realistic starting {cfg!.valueShort}. You can adjust it later.</p>
            <div className="roi-opts">
              {cfg!.typeField.options.map((o) => {
                const Ico = INDUSTRY_ICON[cfg!.key]
                return (
                  <button
                    key={o.value}
                    type="button"
                    className={`roi-opt${type === o.value ? " is-sel" : ""}`}
                    aria-pressed={type === o.value}
                    onClick={() => chooseType(o.value)}
                  >
                    <span className="roi-opt-emoji"><Ico size={20} strokeWidth={1.7} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>
                    <span className="roi-opt-txt">
                      <span className="roi-opt-name">{o.label}</span>
                      <span className="roi-opt-sub">≈ ${o.rev.toLocaleString()} {cfg!.valueShort}</span>
                    </span>
                    <span className="roi-opt-check" aria-hidden><Check /></span>
                  </button>
                )
              })}
            </div>
          </div>
        )

      case "locations":
        return NumericStep({ field: cfg!.locations, k: "locations" })
      case "value":
        return NumericStep({ field: cfg!.value, k: "value" })
      case "primary":
        return NumericStep({ field: cfg!.primary, k: "primary" })
      case "secondary":
        return NumericStep({ field: cfg!.secondary, k: "secondary" })

      case "email":
        return (
          <div className="roi-step roi-gate">
            <div className="roi-gate-ico"><Lock /></div>
            <h2 className="roi-q">Where should we send your results?</h2>
            <p className="roi-help">Enter your <b>work email</b> to unlock your custom savings breakdown for {cfg!.label.toLowerCase()}.</p>
            <div className="roi-gate-form">
              <input
                className={`roi-gate-input${emailErr ? " err" : ""}`}
                type="email"
                placeholder="you@yourbusiness.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailErr) setEmailErr("")
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleUnlock()
                }}
                aria-label="Work email"
                aria-invalid={!!emailErr}
                aria-describedby="roi-email-err"
              />
              <button type="button" className="roi-gate-btn" onClick={handleUnlock}>Unlock results →</button>
            </div>
            <div className="roi-err" id="roi-email-err" role="alert">{emailErr}</div>
            <p className="roi-gate-note">
              <span className="roi-gate-privacy"><Shield />No spam.</span> We&apos;ll send your breakdown and, at most, one short follow-up. Personal inboxes (gmail, outlook…) aren&apos;t accepted.
            </p>
          </div>
        )

      default:
        return null
    }
  }

  /* ---------- results screen ---------- */
  function Results() {
    if (!cfg || !results) return null
    const selectedType = cfg.typeField.options.find((o) => o.value === type)
    const body = (
      <div className="roi-results">
        <div className="roi-result-head">
          <div className="roi-eyebrow">Your custom estimate</div>
          <h2 className="roi-result-title">
            {cfg.headline} <span className="a">{cfg.accent}</span>
          </h2>
          <p className="roi-result-sub">
            Based on your answers for {selectedType ? selectedType.label.toLowerCase() : `your ${cfg.label.toLowerCase()} business`}. Adjust anything below and the numbers update live.
          </p>
        </div>

        <div className="roi-grid">
          {/* editable controls */}
          <div className="roi-controls">
            <div className="roi-controls-h">Fine-tune your numbers</div>
            <div className="roi-two">
              <div className="roi-field">
                <label htmlFor="roi-loc">{cfg.locations.label}</label>
                <input id="roi-loc" type="number" min={cfg.locations.min} step={cfg.locations.step} value={inputs.locations}
                  onChange={(e) => setField("locations", Math.max(cfg.locations.min, parseFloat(e.target.value) || cfg.locations.min))} />
              </div>
              <div className="roi-field">
                <label htmlFor="roi-val">{cfg.value.label} {cfg.value.prefix ? `(${cfg.value.prefix})` : ""}</label>
                <input id="roi-val" type="number" min={0} step={cfg.value.step} value={inputs.value}
                  onChange={(e) => setField("value", Math.max(0, parseFloat(e.target.value) || 0))} />
              </div>
            </div>
            <div className="roi-two">
              <div className="roi-field">
                <label htmlFor="roi-pri">{cfg.primary.label}</label>
                <input id="roi-pri" type="number" min={0} step={1} value={inputs.primary}
                  onChange={(e) => setField("primary", Math.max(0, parseFloat(e.target.value) || 0))} />
              </div>
              <div className="roi-field">
                <label htmlFor="roi-sec">{cfg.secondary.label}</label>
                <input id="roi-sec" type="number" min={0} step={1} value={inputs.secondary}
                  onChange={(e) => setField("secondary", Math.max(0, parseFloat(e.target.value) || 0))} />
              </div>
            </div>
            <div className="roi-field">
              <label htmlFor="roi-rec">{cfg.recapture.label} <span className="rr">{Math.round(inputs.recapture)}%</span></label>
              <input id="roi-rec" className="roi-range" type="range" min={cfg.recapture.min} max={cfg.recapture.max} step={cfg.recapture.step}
                value={inputs.recapture} onChange={(e) => setField("recapture", parseFloat(e.target.value))} />
            </div>
            <div className="roi-field">
              <label htmlFor="roi-mar">{cfg.marginLabel}</label>
              <input id="roi-mar" type="number" min={0} max={100} step={5} value={inputs.margin}
                onChange={(e) => setField("margin", Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))} />
            </div>
          </div>

          {/* dark results card */}
          <div className="roi-res">
            <div className="glow" />
            <div className="cr-label">{cfg.resultLabel}</div>
            <div className="cr-big">
              <span className="cur">$</span>
              <AnimatedNumber className="num" value={results.yearly} format={money} reduced={reduced} />
            </div>
            <div className="cr-per">{cfg.resultPer}</div>
            <div className="cr-bar"><div className="cr-bar-fill" style={{ width: `${Math.min(100, inputs.recapture)}%` }} /></div>
            <div className="cr-row"><span>Recovered each month</span><AnimatedNumber value={results.monthly} format={moneyD} reduced={reduced} /></div>
            <div className="cr-row"><span>{cfg.itemsRow}</span><AnimatedNumber value={results.itemsRecovered} format={whole} reduced={reduced} /></div>
            <div className="cr-row"><span>{cfg.secondaryRow.label}</span><AnimatedNumber value={results.secondaryValue} format={(n) => whole(n) + results.secondaryUnit} reduced={reduced} /></div>
            <div className="cr-row hl"><span>{cfg.profitRow}</span><AnimatedNumber value={results.profit} format={moneyD} reduced={reduced} /></div>
            <div className="cr-cta">
              <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
              <div className="cr-note">An estimate to start the conversation, not a quote.</div>
            </div>
          </div>
        </div>

        <div className="roi-result-actions">
          <button type="button" className="roi-restart" onClick={() => { setStepIndex(0); setDirection(-1); setUnlocked(false) }}>
            <Restart />Start over
          </button>
        </div>
      </div>
    )
    return <div className="roi-resultsin">{body}</div>
  }

  /* ---------- render ---------- */
  return (
    <div className="pe-roi" id={id}>
      {current === "results" && unlocked ? (
        Results()
      ) : (
        <div className="roi">
          {showProgress && (
            <div className="roi-top">
              <span className="roi-steplabel">Step {progressIdx + 1} of {flow.length}</span>
              <div className="roi-track"><div className="roi-fill" style={{ width: `${progressPct}%` }} /></div>
            </div>
          )}

          <div className="roi-stage" aria-live="polite">
            {/* Keyed remount + CSS enter animation. Deliberately not
                AnimatePresence: its exit-tracking proved fragile here, and a
                keyed enter covers the wizard feel with none of the risk. */}
            <div key={current} className="roi-stepin" data-dir={direction >= 0 ? "f" : "b"}>
              {renderStep()}
            </div>
          </div>

          {current !== "email" && (
            <div className="roi-nav">
              <button type="button" className={`roi-back${showBack ? "" : " is-ghost"}`} onClick={goBack} tabIndex={showBack ? 0 : -1} aria-hidden={!showBack}>← Back</button>
              <button type="button" className="roi-next" onClick={goNext} disabled={!canAdvance}>
                Continue <span className="arr">→</span>
              </button>
            </div>
          )}
          {current === "email" && (
            <div className="roi-nav">
              <button type="button" className={`roi-back${showBack ? "" : " is-ghost"}`} onClick={goBack} tabIndex={showBack ? 0 : -1} aria-hidden={!showBack}>← Back</button>
              <span />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ---------- inline icons ---------- */
function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 11-13" /></svg>
  )
}
function Lock() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
  )
}
function Shield() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /></svg>
  )
}
function Restart() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>
  )
}
