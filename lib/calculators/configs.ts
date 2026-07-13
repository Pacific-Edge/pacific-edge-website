import type { CalculatorConfig, CalculatorIndustry, CalculatorInputs } from "./types"

export const CALCULATOR_CONFIGS: Record<CalculatorIndustry, CalculatorConfig> = {
  dental: {
    industry: "dental",
    slug: "dental",
    path: "/tools/savings/dental",
    eyebrow: "Savings Estimator",
    headline: "What Are Your",
    headlineAccent: "Empty Slots Worth?",
    subcopy:
      "Cancellations and no-shows leave booked time empty. See what the platform could recover by filling those slots from your waitlist.",
    resultsHeadline: "You could recover about",
    resultsSubcopy: "per year, from filled cancellations and empty slots",
    rowLabels: {
      monthly: "Recovered each month",
      count: "Bookings refilled / year",
      hours: "Slot-time recovered / year",
      profit: "Profit recovered / year",
    },
    fields: [
      {
        id: "practiceType",
        type: "select",
        label: "Business type",
        defaultValue: "salon",
        options: [
          { value: "salon", label: "Salon & Spa" },
          { value: "restaurant", label: "Restaurant & Food Service" },
          { value: "trades", label: "Trades & Home Services" },
          { value: "retail", label: "Retail & Local Shop" },
          { value: "dental", label: "Dental & Health Clinic" },
        ],
      },
      {
        id: "locations",
        type: "number",
        label: "Number of locations",
        defaultValue: 1,
        min: 1,
        step: 1,
      },
      {
        id: "revenue",
        type: "number",
        label: "Average revenue per booking ($)",
        defaultValue: 120,
        min: 0,
        step: 10,
      },
      {
        id: "cancels",
        type: "number",
        label: "Cancellations & no-shows / week",
        defaultValue: 8,
        min: 0,
        step: 1,
      },
      {
        id: "empty",
        type: "number",
        label: "Open slots / week",
        defaultValue: 6,
        min: 0,
        step: 1,
      },
      {
        id: "refill",
        type: "range",
        label: "How much gets refilled",
        defaultValue: 65,
        min: 30,
        max: 90,
        step: 5,
        valueLabel: (v) => `${Math.round(v)}%`,
      },
      {
        id: "margin",
        type: "number",
        label: "Profit margin on a recovered visit (%)",
        defaultValue: 75,
        min: 0,
        max: 100,
        step: 5,
      },
    ],
    presets: {
      salon: { revenue: 120, margin: 70 },
      restaurant: { revenue: 60, margin: 65 },
      trades: { revenue: 400, margin: 55 },
      retail: { revenue: 80, margin: 55 },
      dental: { revenue: 300, margin: 75 },
    },
    hoursPerSlot: 0.75,
  },
}

export const CALCULATOR_SLUGS = Object.keys(CALCULATOR_CONFIGS) as CalculatorIndustry[]

export function getCalculatorConfig(slug: string): CalculatorConfig | undefined {
  return CALCULATOR_CONFIGS[slug as CalculatorIndustry]
}

export function getDefaultCalculatorInputs(config: CalculatorConfig): CalculatorInputs {
  const practiceField = config.fields.find(
    (f): f is Extract<CalculatorConfig["fields"][number], { type: "select" }> =>
      f.id === "practiceType" && f.type === "select",
  )
  const practiceType = practiceField?.defaultValue ?? Object.keys(config.presets)[0]
  const preset = config.presets[practiceType] ?? Object.values(config.presets)[0]

  const numDefault = (id: string, fallback: number): number => {
    const field = config.fields.find(
      (f): f is Extract<CalculatorConfig["fields"][number], { type: "number" }> =>
        f.id === id && f.type === "number",
    )
    return field?.defaultValue ?? fallback
  }
  const rangeDefault = (id: string, fallback: number): number => {
    const field = config.fields.find(
      (f): f is Extract<CalculatorConfig["fields"][number], { type: "range" }> =>
        f.id === id && f.type === "range",
    )
    return field?.defaultValue ?? fallback
  }

  return {
    practiceType,
    locations: numDefault("locations", 1),
    revenue: preset.revenue,
    cancels: numDefault("cancels", 0),
    empty: numDefault("empty", 0),
    refill: rangeDefault("refill", 65),
    margin: preset.margin,
  }
}
