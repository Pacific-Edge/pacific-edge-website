export type CalculatorIndustry = "dental"

export type SelectOption = {
  value: string
  label: string
}

export type CalculatorField =
  | {
      id: string
      type: "select"
      label: string
      options: SelectOption[]
      defaultValue: string
    }
  | {
      id: string
      type: "number"
      label: string
      defaultValue: number
      min?: number
      max?: number
      step?: number
    }
  | {
      id: string
      type: "range"
      label: string
      defaultValue: number
      min: number
      max: number
      step: number
      valueLabel?: (value: number) => string
    }

export type CalculatorConfig = {
  industry: CalculatorIndustry
  slug: CalculatorIndustry
  path: `/tools/savings/${CalculatorIndustry}`
  eyebrow: string
  headline: string
  headlineAccent: string
  subcopy: string
  resultsHeadline: string
  resultsSubcopy: string
  rowLabels: {
    monthly: string
    count: string
    hours: string
    profit: string
  }
  fields: CalculatorField[]
  /** Maps practice-type select value → default revenue + margin */
  presets: Record<string, { revenue: number; margin: number }>
  /** Hours multiplier per recovered slot (industry-specific) */
  hoursPerSlot: number
}

export type CalculatorInputs = {
  practiceType: string
  locations: number
  revenue: number
  cancels: number
  empty: number
  refill: number
  margin: number
}

export type CalculatorResults = {
  yearly: number
  monthly: number
  appointments: number
  hours: number
  profit: number
  refillPercent: number
}
