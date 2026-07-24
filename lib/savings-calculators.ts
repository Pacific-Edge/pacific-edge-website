/**
 * Per-industry configuration for the savings calculators. The 4 old static
 * `*-savings-calculator.html` pages were byte-identical templates that differed
 * only by this data + copy; they collapse into one <SavingsCalculator> driven
 * by the config keyed here. Formulas live in the component.
 */

export type CalcIndustry = "dental" | "restaurants" | "salons" | "trades"

export interface CalcSelectOption {
  value: string
  label: string
}

export interface CalcCrossLink {
  href: string
  icon: string
  label: string
}

export interface CalcConfig {
  meta: { title: string; description: string; canonical: string }
  hero: { line1: string; line2: string; sub: string }
  practiceLabel: string
  options: CalcSelectOption[]
  /** Average-revenue lookup by option value; also seeds the rev input default. */
  rev: Record<string, number>
  /** Profit-margin lookup by option value; also seeds the margin input default. */
  margin: Record<string, number>
  revFallback: number
  marginFallback: number
  fields: {
    locationsLabel: string
    revLabel: string
    revStep: number
    cancelsLabel: string
    cancelsDefault: number
    emptyLabel: string
    emptyDefault: number
    refillLabel: string
    refillMin: number
    refillMax: number
    refillStep: number
    refillDefault: number
    marginLabel: string
  }
  results: {
    perLabel: string
    apptsLabel: string
    hoursLabel: string
    hoursMultiplier: number
    hoursSuffix: string
  }
  icta: {
    line1: string
    line2: string
    desc: string
    crossLinks: CalcCrossLink[]
  }
}

export const SAVINGS_CALCULATORS: Record<CalcIndustry, CalcConfig> = {
  dental: {
    meta: {
      title: "Dental Savings Estimator | What Filled Cancellations Are Worth",
      description:
        "Estimate what filling your cancellations and empty chair slots is worth. See the monthly and yearly revenue Janice could recover for your dental practice.",
      canonical: "/dental-savings-calculator",
    },
    hero: {
      line1: "What Are Your",
      line2: "Empty Chairs Worth?",
      sub: "Cancellations and no-shows leave chair time empty. See what Janice could recover by filling those slots from your waitlist, automatically.",
    },
    practiceLabel: "Practice type",
    options: [
      { value: "general", label: "General Dentistry" },
      { value: "ortho", label: "Orthodontics" },
      { value: "cosmetic", label: "Cosmetic Dentistry" },
      { value: "pediatric", label: "Pediatric Dentistry" },
      { value: "perio", label: "Periodontics & Oral Surgery" },
    ],
    rev: { general: 300, ortho: 5000, cosmetic: 3000, pediatric: 250, perio: 1500 },
    margin: { general: 75, ortho: 78, cosmetic: 75, pediatric: 72, perio: 68 },
    revFallback: 300,
    marginFallback: 75,
    fields: {
      locationsLabel: "Number of locations",
      revLabel: "Average revenue per patient ($)",
      revStep: 10,
      cancelsLabel: "Cancellations & no-shows / week",
      cancelsDefault: 8,
      emptyLabel: "Open chair slots / week",
      emptyDefault: 6,
      refillLabel: "How much Janice refills",
      refillMin: 30,
      refillMax: 90,
      refillStep: 5,
      refillDefault: 65,
      marginLabel: "Profit margin on a recovered visit (%)",
    },
    results: {
      perLabel: "per year, from filled cancellations & empty slots",
      apptsLabel: "Appointments refilled / year",
      hoursLabel: "Chair-time recovered / year",
      hoursMultiplier: 0.75,
      hoursSuffix: " hrs",
    },
    icta: {
      line1: "Let's Fill",
      line2: "Those Chairs.",
      desc: "On a free 15-minute call we'll pressure-test these numbers against your real schedule and show you exactly how Janice would refill your cancellations.",
      crossLinks: [
        { href: "/dental", icon: "🦷", label: "Dental overview" },
        { href: "/dental-single-location", icon: "🏥", label: "Single-location" },
        { href: "/dental-multi-location", icon: "🏢", label: "Multi-location" },
      ],
    },
  },

  restaurants: {
    meta: {
      title: "Restaurant Savings Estimator | What Empty Tables Are Worth",
      description:
        "Estimate what catching every reservation call and no-show table is worth. See the monthly and yearly revenue Janice could recover for your restaurant.",
      canonical: "/restaurants-savings-calculator",
    },
    hero: {
      line1: "What Are Your",
      line2: "Empty Tables Worth?",
      sub: "Missed reservation calls and no-show tables leave seats empty. See what Janice could recover by catching every booking, day and night.",
    },
    practiceLabel: "Restaurant type",
    options: [
      { value: "casual", label: "Casual Dining" },
      { value: "fine", label: "Fine Dining" },
      { value: "cafe", label: "Cafe / Bistro" },
      { value: "bar", label: "Bar / Pub" },
      { value: "group", label: "Multi-Location Group" },
    ],
    rev: { casual: 120, fine: 280, cafe: 55, bar: 95, group: 130 },
    margin: { casual: 60, fine: 65, cafe: 62, bar: 70, group: 60 },
    revFallback: 120,
    marginFallback: 60,
    fields: {
      locationsLabel: "Number of locations",
      revLabel: "Average spend per table ($)",
      revStep: 10,
      cancelsLabel: "Missed reservation calls / week",
      cancelsDefault: 14,
      emptyLabel: "No-show or empty tables / week",
      emptyDefault: 9,
      refillLabel: "How much Janice recaptures",
      refillMin: 30,
      refillMax: 90,
      refillStep: 5,
      refillDefault: 60,
      marginLabel: "Profit margin on a recovered table (%)",
    },
    results: {
      perLabel: "per year, from recovered reservations & tables",
      apptsLabel: "Tables recovered / year",
      hoursLabel: "Guest covers seated / year",
      hoursMultiplier: 2.6,
      hoursSuffix: "",
    },
    icta: {
      line1: "Let's Fill",
      line2: "Those Tables.",
      desc: "On a free 15-minute call we'll pressure-test these numbers against your real covers and show you exactly how Janice would catch every booking.",
      crossLinks: [
        { href: "/restaurants", icon: "🍽️", label: "Restaurants overview" },
        { href: "/ai-employee", icon: "🤖", label: "Meet Janice" },
        { href: "/industries", icon: "🏢", label: "All industries" },
      ],
    },
  },

  salons: {
    meta: {
      title: "Salon & Spa Savings Estimator | What Empty Chairs Are Worth",
      description:
        "Estimate what refilling your cancellations and open chair slots is worth. See the monthly and yearly revenue Janice could recover for your salon or spa.",
      canonical: "/salons-savings-calculator",
    },
    hero: {
      line1: "What Are Your",
      line2: "Empty Chairs Worth?",
      sub: "Cancellations and no-shows leave chairs empty. See what Janice could recover by refilling those slots from your waitlist, automatically.",
    },
    practiceLabel: "Salon type",
    options: [
      { value: "hair", label: "Hair Salon" },
      { value: "nails", label: "Nail Salon" },
      { value: "spa", label: "Day Spa" },
      { value: "barber", label: "Barbershop" },
      { value: "medspa", label: "Med Spa" },
    ],
    rev: { hair: 85, nails: 55, spa: 130, barber: 40, medspa: 260 },
    margin: { hair: 55, nails: 60, spa: 58, barber: 60, medspa: 65 },
    revFallback: 85,
    marginFallback: 55,
    fields: {
      locationsLabel: "Number of locations",
      revLabel: "Average revenue per appointment ($)",
      revStep: 5,
      cancelsLabel: "Cancellations & no-shows / week",
      cancelsDefault: 10,
      emptyLabel: "Open chair slots / week",
      emptyDefault: 7,
      refillLabel: "How much Janice refills",
      refillMin: 30,
      refillMax: 90,
      refillStep: 5,
      refillDefault: 65,
      marginLabel: "Profit margin on a recovered visit (%)",
    },
    results: {
      perLabel: "per year, from refilled cancellations & chairs",
      apptsLabel: "Appointments refilled / year",
      hoursLabel: "Chair-time recovered / year",
      hoursMultiplier: 1,
      hoursSuffix: " hrs",
    },
    icta: {
      line1: "Let's Fill",
      line2: "Those Chairs.",
      desc: "On a free 15-minute call we'll pressure-test these numbers against your real book and show you exactly how Janice would refill your cancellations.",
      crossLinks: [
        { href: "/salons", icon: "💈", label: "Salons overview" },
        { href: "/ai-employee", icon: "🤖", label: "Meet Janice" },
        { href: "/industries", icon: "🏢", label: "All industries" },
      ],
    },
  },

  trades: {
    meta: {
      title: "Trades Savings Estimator | What Missed Calls Are Worth",
      description:
        "Estimate what answering and booking every missed call is worth. See the monthly and yearly revenue Janice could recover for your trades business.",
      canonical: "/trades-savings-calculator",
    },
    hero: {
      line1: "What Are Your",
      line2: "Missed Calls Worth?",
      sub: "Every missed call is a job going to whoever picked up first. See what Janice could recover by answering and booking every one, 24/7.",
    },
    practiceLabel: "Trade type",
    options: [
      { value: "plumbing", label: "Plumbing" },
      { value: "hvac", label: "HVAC" },
      { value: "electrical", label: "Electrical" },
      { value: "roofing", label: "Roofing" },
      { value: "gc", label: "General Contracting" },
      { value: "landscaping", label: "Landscaping" },
    ],
    rev: { plumbing: 450, hvac: 650, electrical: 500, roofing: 4500, gc: 2800, landscaping: 600 },
    margin: { plumbing: 45, hvac: 42, electrical: 45, roofing: 35, gc: 32, landscaping: 45 },
    revFallback: 450,
    marginFallback: 45,
    fields: {
      locationsLabel: "Number of crews",
      revLabel: "Average job value ($)",
      revStep: 50,
      cancelsLabel: "Missed calls / week",
      cancelsDefault: 15,
      emptyLabel: "After-hours calls / week",
      emptyDefault: 6,
      refillLabel: "How many turn into booked jobs",
      refillMin: 20,
      refillMax: 90,
      refillStep: 5,
      refillDefault: 45,
      marginLabel: "Profit margin per job (%)",
    },
    results: {
      perLabel: "per year, from booked jobs you'd have missed",
      apptsLabel: "Jobs booked / year",
      hoursLabel: "On-site hours filled / year",
      hoursMultiplier: 2,
      hoursSuffix: " hrs",
    },
    icta: {
      line1: "Let's Book",
      line2: "Those Jobs.",
      desc: "On a free 15-minute call we'll pressure-test these numbers against your real call volume and show you exactly how Janice would book the jobs you're missing.",
      crossLinks: [
        { href: "/trades", icon: "🔨", label: "Trades overview" },
        { href: "/ai-employee", icon: "🤖", label: "Meet Janice" },
        { href: "/industries", icon: "🏢", label: "All industries" },
      ],
    },
  },
}
