"use client"

import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials"

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carter Macintosh",
    role: "Owner",
    company: "Pinnacle Ridge Contracting",
    content:
      "Every missed call gets texted back in seconds, and the system holds the slot until my crew confirms it. We booked three extra jobs our first week.",
    rating: 5,
    initials: "CM",
  },
  {
    id: 2,
    name: "AJ",
    role: "Owner",
    company: "AJ Consulting",
    content:
      "The biggest surprise was how much time it gave us back. My team used to lose hours every week to callbacks and chasing cancelled slots, Pacific Edge handles all of it now. It's like adding a front-desk hire without the payroll.",
    rating: 5,
    initials: "AJ",
  },
  {
    id: 3,
    name: "Priya Anand",
    role: "Owner",
    company: "Coast Beauty Lounge",
    content:
      "Cancellations used to gut our schedule. The moment someone drops, our waitlist gets texted and the spot usually fills within minutes, even overnight. My chairs stay full and my front desk isn't chasing anyone anymore.",
    rating: 5,
    initials: "PA",
  },
]

export default function Proof() {
  return (
    <AnimatedTestimonials
      eyebrow="Client Reviews"
      title="From teams who stopped losing the day to the phone."
      testimonials={TESTIMONIALS}
      moreHref="/reviews"
    />
  )
}
