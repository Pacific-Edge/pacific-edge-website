"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import AnimatedValue from "@/components/calculators/AnimatedValue"
import {
  computeSavings,
  formatMoney,
  formatWhole,
  getCalculatorConfig,
  getDefaultCalculatorInputs,
} from "@/lib/calculators"
import type {
  CalculatorConfig,
  CalculatorField,
  CalculatorIndustry,
  CalculatorInputs,
} from "@/lib/calculators"

type SavingsCalculatorClientProps = {
  industry: CalculatorIndustry
}

/** Clamp a numeric field value to its configured min/max. */
function clampField(field: Extract<CalculatorField, { type: "number" | "range" }>, value: number): number {
  let next = value
  if (typeof field.min === "number") next = Math.max(field.min, next)
  if (typeof field.max === "number") next = Math.min(field.max, next)
  return next
}

/** Interactive per-industry savings estimator. Ported from the old-site calculators. */
export default function SavingsCalculatorClient({ industry }: SavingsCalculatorClientProps) {
  const config = getCalculatorConfig(industry) as CalculatorConfig
  const [inputs, setInputs] = useState<CalculatorInputs>(() => getDefaultCalculatorInputs(config))

  const results = useMemo(
    () => computeSavings(inputs, config.hoursPerSlot),
    [inputs, config.hoursPerSlot],
  )

  function handleSelect(value: string) {
    const preset = config.presets[value]
    setInputs((prev) => ({
      ...prev,
      practiceType: value,
      // Match old behaviour: switching type resets revenue + margin to the preset.
      ...(preset ? { revenue: preset.revenue, margin: preset.margin } : {}),
    }))
  }

  function handleNumber(
    field: Extract<CalculatorField, { type: "number" | "range" }>,
    raw: string,
  ) {
    // Empty input → fall back to the field minimum (or 0) so the math stays valid.
    const parsed = raw === "" ? (field.min ?? 0) : Number(raw)
    if (Number.isNaN(parsed)) return
    setInputs((prev) => ({ ...prev, [field.id]: clampField(field, parsed) }))
  }

  const refillPct = Math.max(0, Math.min(100, results.refillPercent))

  return (
    <>
      <header className="pt-28 sm:pt-32 pb-10 sm:pb-14 bg-cream-50">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow text-ash-500 mb-4">{config.eyebrow}</p>
            <h1 className="text-display-lg text-navy-900 mb-4">
              {config.headline}{" "}
              <span className="italic text-ash-500">{config.headlineAccent}</span>
            </h1>
            <p className="font-ui text-base leading-relaxed max-w-xl text-navy-900/55">
              {config.subcopy}
            </p>
          </div>
        </div>
      </header>

      <section className="pb-24 sm:pb-32">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8 items-start">
            {/* Inputs */}
            <div className="card p-6 sm:p-8">
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
                aria-label={`${config.industry} savings estimator inputs`}
              >
                {config.fields.map((field) => {
                  const value = inputs[field.id as keyof CalculatorInputs]

                  if (field.type === "select") {
                    return (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block font-ui text-xs font-medium text-navy-900/70 mb-1.5"
                        >
                          {field.label}
                        </label>
                        <select
                          id={field.id}
                          value={String(value)}
                          onChange={(e) => handleSelect(e.target.value)}
                          className="w-full font-ui text-sm px-4 py-3 rounded-lg border border-ash-300/60 bg-cream-50 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900/30"
                        >
                          {field.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )
                  }

                  if (field.type === "range") {
                    const label = field.valueLabel
                      ? field.valueLabel(Number(value))
                      : String(value)
                    return (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="flex items-center justify-between font-ui text-xs font-medium text-navy-900/70 mb-2"
                        >
                          <span>{field.label}</span>
                          <span className="text-navy-900 font-semibold tabular-nums">{label}</span>
                        </label>
                        <input
                          id={field.id}
                          type="range"
                          min={field.min}
                          max={field.max}
                          step={field.step}
                          value={Number(value)}
                          onChange={(e) => handleNumber(field, e.target.value)}
                          className="w-full accent-navy-900"
                        />
                      </div>
                    )
                  }

                  return (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block font-ui text-xs font-medium text-navy-900/70 mb-1.5"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type="number"
                        inputMode="numeric"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        value={Number(value)}
                        onChange={(e) => handleNumber(field, e.target.value)}
                        className="w-full font-ui text-sm px-4 py-3 rounded-lg border border-ash-300/60 bg-cream-50 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900/30"
                      />
                    </div>
                  )
                })}
              </form>
            </div>

            {/* Results */}
            <div className="rounded-2xl bg-navy-900 text-cream-50 p-6 sm:p-8 shadow-card lg:sticky lg:top-24">
              <p className="eyebrow text-ash-400 mb-3">{config.resultsHeadline}</p>
              <AnimatedValue
                value={results.yearly}
                format={formatMoney}
                className="block font-display text-5xl sm:text-6xl leading-none tracking-tight"
              />
              <p className="font-ui text-sm text-cream-50/55 mt-2 mb-6">{config.resultsSubcopy}</p>

              <div className="h-2 rounded-full bg-cream-50/10 overflow-hidden mb-6">
                <div
                  className="h-full rounded-full bg-ash-400 transition-[width] duration-500 ease-out"
                  style={{ width: `${refillPct}%` }}
                />
              </div>

              <dl className="divide-y divide-cream-50/10">
                <ResultRow label={config.rowLabels.monthly}>
                  <AnimatedValue value={results.monthly} format={formatMoney} />
                </ResultRow>
                <ResultRow label={config.rowLabels.count}>
                  <AnimatedValue value={results.appointments} format={formatWhole} />
                </ResultRow>
                <ResultRow label={config.rowLabels.hours}>
                  <AnimatedValue value={results.hours} format={(v) => `${formatWhole(v)} hrs`} />
                </ResultRow>
                <ResultRow label={config.rowLabels.profit}>
                  <AnimatedValue value={results.profit} format={formatMoney} />
                </ResultRow>
              </dl>

              <Link href="/contact" className="btn-primary w-full mt-8 bg-cream-50 text-navy-900 hover:!shadow-none">
                Book a Free Call
              </Link>
              <p className="font-ui text-[11px] text-cream-50/40 text-center mt-3">
                Estimates only, we&apos;ll pressure-test these against your real numbers on the call.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ResultRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <dt className="font-ui text-sm text-cream-50/60">{label}</dt>
      <dd className="font-ui text-base font-semibold tabular-nums">{children}</dd>
    </div>
  )
}
