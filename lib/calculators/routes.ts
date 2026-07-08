import type { CalculatorIndustry } from "./types"
import { CALCULATOR_CONFIGS, CALCULATOR_SLUGS, getCalculatorConfig } from "./configs"

export type CalculatorPath = `/tools/savings/${CalculatorIndustry}`

/** Canonical path for a savings calculator by industry slug. */
export function getCalculatorPath(industry: CalculatorIndustry): CalculatorPath {
  return CALCULATOR_CONFIGS[industry].path
}

/** Type guard for dynamic `[industry]` route segments. */
export function isCalculatorIndustry(slug: string): slug is CalculatorIndustry {
  return CALCULATOR_SLUGS.includes(slug as CalculatorIndustry)
}

/** Resolve config or undefined when slug is invalid. */
export { getCalculatorConfig, CALCULATOR_SLUGS }
