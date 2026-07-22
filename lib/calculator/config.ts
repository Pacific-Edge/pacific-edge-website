/**
 * Universal ROI calculator — industry configs + the shared recovery formula.
 *
 * The numbers here are ported faithfully from the five original static
 * `*-savings-calculator.html` pages (per-type average value + margin, the
 * default weekly-miss counts, the recapture range, and each industry's
 * secondary result row). The formula is identical across industries:
 *
 *   perLoc  = (primaryMissed + secondaryMissed) * (recapture / 100)
 *   weekly  = perLoc * value * locations
 *   yearly  = weekly * 52
 *   monthly = weekly * 4.33
 *   items   = perLoc * 52 * locations                 // recovered items / yr
 *   gross   = (primary + secondary) * 52 * locations  // every message handled
 *   profit  = yearly * (margin / 100)
 *
 * Keeping it in one pure module means the wizard, the embedded restaurant
 * calculator, and any future industry page all compute the same way.
 */

export type IndustryKey = "dental" | "restaurants" | "salons" | "trades" | "retail"

export interface TypeOption {
  value: string
  label: string
  /** average $ value of one recovered item (table, patient, job, order…) */
  rev: number
  /** profit margin % on a recovered item */
  margin: number
}

/** How the second result row is derived. */
export interface SecondarySpec {
  label: string
  /** `items` = recovered items/yr · `gross` = every inbound message/yr */
  from: "items" | "gross"
  mult: number
  unit?: string
}

export interface NumericField {
  q: string
  label: string
  help?: string
  default: number
  min: number
  step: number
  /** shown inside the input, e.g. "$" */
  prefix?: string
  /** shown after the input, e.g. "/ week" */
  unit?: string
}

export interface IndustryConfig {
  key: IndustryKey
  label: string
  /** singular item noun, e.g. "table", "appointment", "job" */
  noun: string
  /** short human label for what the $ value means, e.g. "avg spend per table" */
  valueShort: string
  /** hero-style promise, e.g. "What Are Your Empty Tables Worth?" */
  headline: string
  accent: string // "Empty Tables Worth?" — the coloured half of the headline
  resultLabel: string
  resultPer: string
  typeField: { q: string; label: string; options: TypeOption[] }
  locations: NumericField
  value: NumericField
  primary: NumericField
  secondary: NumericField
  recapture: { q: string; label: string; default: number; min: number; max: number; step: number }
  marginLabel: string
  itemsRow: string
  secondaryRow: SecondarySpec
  profitRow: string
}

export const INDUSTRIES: Record<IndustryKey, IndustryConfig> = {
  restaurants: {
    key: "restaurants",
    label: "Restaurants",
    noun: "table",
    valueShort: "avg spend per table",
    headline: "What Are Your",
    accent: "Empty Tables Worth?",
    resultLabel: "You could recover about",
    resultPer: "per year, from recovered reservations & tables",
    typeField: {
      q: "What kind of restaurant do you run?",
      label: "Restaurant type",
      options: [
        { value: "fullservice", label: "Full-Service Restaurant", rev: 120, margin: 60 },
        { value: "casual", label: "Casual Dining", rev: 120, margin: 60 },
        { value: "fine", label: "Fine Dining", rev: 280, margin: 65 },
        { value: "cafe", label: "Cafe / Bistro", rev: 55, margin: 62 },
        { value: "bar", label: "Bar / Pub", rev: 95, margin: 70 },
        { value: "group", label: "Multi-Location Group", rev: 130, margin: 60 },
      ],
    },
    locations: { q: "How many locations do you run?", label: "Number of locations", default: 1, min: 1, step: 1 },
    value: { q: "What's the average spend per table?", label: "Average spend per table", default: 120, min: 0, step: 10, prefix: "$" },
    primary: { q: "In a typical week, how many reservation calls go unanswered?", label: "Missed reservation calls / week", default: 14, min: 0, step: 1, unit: "/ week" },
    secondary: { q: "And how many tables sit empty from no-shows or cancellations each week?", label: "No-show or empty tables / week", default: 9, min: 0, step: 1, unit: "/ week" },
    recapture: { q: "How much of that could Janice recapture?", label: "How much Janice recaptures", default: 60, min: 30, max: 90, step: 5 },
    marginLabel: "Profit margin on a recovered table (%)",
    itemsRow: "Tables recovered / year",
    secondaryRow: { label: "Guest covers seated / year", from: "items", mult: 2.6 },
    profitRow: "Profit recovered / year",
  },

  dental: {
    key: "dental",
    label: "Dental",
    noun: "appointment",
    valueShort: "avg revenue per patient",
    headline: "What Are Your",
    accent: "Empty Chairs Worth?",
    resultLabel: "You could recover about",
    resultPer: "per year, from filled cancellations & empty slots",
    typeField: {
      q: "What kind of practice do you run?",
      label: "Practice type",
      options: [
        { value: "general", label: "General & Family Practice (full service)", rev: 300, margin: 75 },
        { value: "ortho", label: "Orthodontics", rev: 5000, margin: 78 },
        { value: "cosmetic", label: "Cosmetic Dentistry", rev: 3000, margin: 75 },
        { value: "pediatric", label: "Pediatric Dentistry", rev: 250, margin: 72 },
        { value: "perio", label: "Periodontics & Oral Surgery", rev: 1500, margin: 68 },
      ],
    },
    locations: { q: "How many locations do you run?", label: "Number of locations", default: 1, min: 1, step: 1 },
    value: { q: "What's your average revenue per patient?", label: "Average revenue per patient", default: 300, min: 0, step: 10, prefix: "$" },
    primary: { q: "In a typical week, how many cancellations & no-shows do you get?", label: "Cancellations & no-shows / week", default: 8, min: 0, step: 1, unit: "/ week" },
    secondary: { q: "And how many open chair slots go unfilled each week?", label: "Open chair slots / week", default: 6, min: 0, step: 1, unit: "/ week" },
    recapture: { q: "How much of that could Janice refill?", label: "How much Janice refills", default: 65, min: 30, max: 90, step: 5 },
    marginLabel: "Profit margin on a recovered visit (%)",
    itemsRow: "Appointments refilled / year",
    secondaryRow: { label: "Chair-time recovered / year", from: "items", mult: 0.75, unit: " hrs" },
    profitRow: "Profit recovered / year",
  },

  salons: {
    key: "salons",
    label: "Salons & Spas",
    noun: "appointment",
    valueShort: "avg revenue per visit",
    headline: "What Are Your",
    accent: "Empty Chairs Worth?",
    resultLabel: "You could recover about",
    resultPer: "per year, from refilled cancellations & chairs",
    typeField: {
      q: "What kind of salon do you run?",
      label: "Salon type",
      options: [
        { value: "fullservice", label: "Full-Service Salon & Spa", rev: 95, margin: 58 },
        { value: "hair", label: "Hair Salon", rev: 85, margin: 55 },
        { value: "nails", label: "Nail Salon", rev: 55, margin: 60 },
        { value: "spa", label: "Day Spa", rev: 130, margin: 58 },
        { value: "barber", label: "Barbershop", rev: 40, margin: 60 },
        { value: "medspa", label: "Med Spa", rev: 260, margin: 65 },
      ],
    },
    locations: { q: "How many locations do you run?", label: "Number of locations", default: 1, min: 1, step: 1 },
    value: { q: "What's your average revenue per appointment?", label: "Average revenue per appointment", default: 85, min: 0, step: 5, prefix: "$" },
    primary: { q: "In a typical week, how many cancellations & no-shows do you get?", label: "Cancellations & no-shows / week", default: 10, min: 0, step: 1, unit: "/ week" },
    secondary: { q: "And how many open chair slots go unfilled each week?", label: "Open chair slots / week", default: 7, min: 0, step: 1, unit: "/ week" },
    recapture: { q: "How much of that could Janice refill?", label: "How much Janice refills", default: 65, min: 30, max: 90, step: 5 },
    marginLabel: "Profit margin on a recovered visit (%)",
    itemsRow: "Appointments refilled / year",
    secondaryRow: { label: "Chair-time recovered / year", from: "items", mult: 1, unit: " hrs" },
    profitRow: "Profit recovered / year",
  },

  trades: {
    key: "trades",
    label: "Trades & Home Services",
    noun: "job",
    valueShort: "avg job value",
    headline: "What Are Your",
    accent: "Missed Calls Worth?",
    resultLabel: "You could recover about",
    resultPer: "per year, from booked jobs you'd have missed",
    typeField: {
      q: "What's your trade?",
      label: "Trade type",
      options: [
        { value: "multitrade", label: "General / Multi-Trade", rev: 450, margin: 45 },
        { value: "plumbing", label: "Plumbing", rev: 450, margin: 45 },
        { value: "hvac", label: "HVAC", rev: 650, margin: 42 },
        { value: "electrical", label: "Electrical", rev: 500, margin: 45 },
        { value: "roofing", label: "Roofing", rev: 4500, margin: 35 },
        { value: "gc", label: "General Contracting", rev: 2800, margin: 32 },
        { value: "landscaping", label: "Landscaping", rev: 600, margin: 45 },
      ],
    },
    locations: { q: "How many crews do you run?", label: "Number of crews", default: 1, min: 1, step: 1 },
    value: { q: "What's your average job value?", label: "Average job value", default: 450, min: 0, step: 50, prefix: "$" },
    primary: { q: "In a typical week, how many calls do you miss?", label: "Missed calls / week", default: 15, min: 0, step: 1, unit: "/ week" },
    secondary: { q: "And how many calls come in after hours each week?", label: "After-hours calls / week", default: 6, min: 0, step: 1, unit: "/ week" },
    recapture: { q: "How many of those turn into booked jobs?", label: "How many turn into booked jobs", default: 45, min: 20, max: 90, step: 5 },
    marginLabel: "Profit margin per job (%)",
    itemsRow: "Jobs booked / year",
    secondaryRow: { label: "On-site hours filled / year", from: "items", mult: 2, unit: " hrs" },
    profitRow: "Profit recovered / year",
  },

  retail: {
    key: "retail",
    label: "Retail",
    noun: "sale",
    valueShort: "avg order value",
    headline: "What Are Your",
    accent: "Missed Customers Worth?",
    resultLabel: "You could recover about",
    resultPer: "per year, from recovered customer messages",
    typeField: {
      q: "What kind of store do you run?",
      label: "Store type",
      options: [
        { value: "generalretail", label: "General Retail Store", rev: 90, margin: 55 },
        { value: "boutique", label: "Boutique / Apparel", rev: 90, margin: 55 },
        { value: "specialty", label: "Specialty Retail", rev: 120, margin: 50 },
        { value: "home", label: "Home & Furniture", rev: 650, margin: 45 },
        { value: "jewelry", label: "Jewelry", rev: 450, margin: 50 },
        { value: "group", label: "Multi-Location Group", rev: 110, margin: 52 },
      ],
    },
    locations: { q: "How many stores do you run?", label: "Number of stores", default: 1, min: 1, step: 1 },
    value: { q: "What's your average order value?", label: "Average order value", default: 90, min: 0, step: 10, prefix: "$" },
    primary: { q: "In a typical week, how many customer messages get missed?", label: "Customer messages missed / week", default: 18, min: 0, step: 1, unit: "/ week" },
    secondary: { q: "And how many inquiries come in after hours each week?", label: "After-hours inquiries / week", default: 10, min: 0, step: 1, unit: "/ week" },
    recapture: { q: "How many of those turn into a sale?", label: "How many turn into a sale", default: 35, min: 20, max: 90, step: 5 },
    marginLabel: "Profit margin per sale (%)",
    itemsRow: "Sales recovered / year",
    secondaryRow: { label: "Messages Janice answered / year", from: "gross", mult: 1 },
    profitRow: "Profit recovered / year",
  },
}

/** Stable display order for the industry picker. */
export const INDUSTRY_ORDER: IndustryKey[] = ["restaurants", "dental", "salons", "trades", "retail"]

export interface CalcInputs {
  value: number
  locations: number
  primary: number
  secondary: number
  recapture: number
  margin: number
}

export interface CalcResults {
  yearly: number
  monthly: number
  itemsRecovered: number
  secondaryValue: number
  secondaryUnit: string
  profit: number
  recapturePct: number
}

function safe(n: number): number {
  return isFinite(n) && n >= 0 ? n : 0
}

export function calcResults(cfg: IndustryConfig, inp: CalcInputs): CalcResults {
  const loc = Math.max(1, safe(inp.locations) || 1)
  const recapture = safe(inp.recapture)
  const value = safe(inp.value)
  const primary = safe(inp.primary)
  const secondary = safe(inp.secondary)

  const perLoc = (primary + secondary) * (recapture / 100)
  const weekly = perLoc * value * loc
  const yearly = weekly * 52
  const items = perLoc * 52 * loc
  const gross = (primary + secondary) * 52 * loc
  const base = cfg.secondaryRow.from === "gross" ? gross : items

  return {
    yearly,
    monthly: weekly * 4.33,
    itemsRecovered: items,
    secondaryValue: base * cfg.secondaryRow.mult,
    secondaryUnit: cfg.secondaryRow.unit ?? "",
    profit: yearly * (safe(inp.margin) / 100),
    recapturePct: recapture,
  }
}

/** Default inputs for an industry, seeded from its first type option. */
export function defaultInputs(cfg: IndustryConfig): CalcInputs & { type: string } {
  const t = cfg.typeField.options[0]
  return {
    type: t.value,
    value: t.rev,
    locations: cfg.locations.default,
    primary: cfg.primary.default,
    secondary: cfg.secondary.default,
    recapture: cfg.recapture.default,
    margin: t.margin,
  }
}
