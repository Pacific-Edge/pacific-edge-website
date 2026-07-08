import type { CalculatorInputs, CalculatorResults } from "./types"

/** Ported from old-website *-savings-calculator.html scripts */
export function computeSavings(
  inputs: CalculatorInputs,
  hoursPerSlot: number,
): CalculatorResults {
  const locations = Math.max(1, inputs.locations || 1)
  const refill = inputs.refill
  const perLoc = (inputs.cancels + inputs.empty) * (refill / 100)
  const weekly = perLoc * inputs.revenue * locations

  return {
    yearly: weekly * 52,
    monthly: weekly * 4.33,
    appointments: perLoc * 52 * locations,
    hours: perLoc * 52 * locations * hoursPerSlot,
    profit: weekly * 52 * (inputs.margin / 100),
    refillPercent: refill,
  }
}

export function formatMoney(value: number): string {
  return `$${Math.round(value).toLocaleString()}`
}

export function formatWhole(value: number): string {
  return Math.round(value).toLocaleString()
}
