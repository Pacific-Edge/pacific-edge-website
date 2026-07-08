export type Testimonial = {
  quote: string
  name: string
  business: string
  industry: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Every missed call gets texted back in seconds. We booked three extra jobs our first week.",
    name: "Carter Macintosh",
    business: "Pinnacle Ridge Contracting",
    industry: "Trades",
    initials: "CM",
  },
  {
    quote:
      "Like adding a front-desk hire without the payroll — callbacks and cancelled slots handled for us.",
    name: "AJ",
    business: "AJ Consulting",
    industry: "Professional Services",
    initials: "AJ",
  },
  {
    quote:
      "Cancellations get filled from the waitlist within minutes. My chairs stay full.",
    name: "Priya Anand",
    business: "Coast Beauty Lounge",
    industry: "Salon & Spa",
    initials: "PA",
  },
]
