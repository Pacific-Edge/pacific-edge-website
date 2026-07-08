import type { DashboardIndustry } from "./types"

export const INDUSTRY_LABELS: Record<DashboardIndustry, string> = {
  all: "All",
  restaurants: "Restaurant",
  salons: "Salon",
  trades: "Trades",
  retail: "Retail",
  dental: "Dental",
}

export function industryLabel(industry: DashboardIndustry): string {
  return INDUSTRY_LABELS[industry]
}
