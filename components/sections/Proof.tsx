"use client"

import Link from "next/link"
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials"

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carter Macintosh",
    role: "Trades",
    company: "Pinnacle Ridge Contracting",
    content:
      "Every missed call gets texted back in seconds, and the system holds the slot until my crew confirms it. We booked three extra jobs our first week.",
    rating: 5,
    initials: "CM",
  },
  {
    id: 2,
    name: "AJ",
    role: "Professional Services",
    company: "AJ Consulting",
    content:
      "The biggest surprise was how much time it gave us back. My team used to lose hours every week to callbacks and chasing cancelled slots, Pacific Edge handles all of it now. It's like adding a front-desk hire without the payroll.",
    rating: 5,
    initials: "AJ",
  },
  {
    id: 3,
    name: "Priya Anand",
    role: "Salon & Spa",
    company: "Coast Beauty Lounge",
    content:
      "Cancellations used to gut our schedule. The moment someone drops, our waitlist gets texted and the spot usually fills within minutes, even overnight. My chairs stay full and my front desk isn't chasing anyone anymore.",
    rating: 5,
    initials: "PA",
  },
]

export default function Proof() {
  return (
    <div className="relative">
      <AnimatedTestimonials
        eyebrow="Client Reviews"
        title="From the operators using it."
        testimonials={TESTIMONIALS}
      />

      {/* More reviews link sits below the rotating card */}
      <div className="bg-navy-900 pb-16 md:pb-20 lg:pb-24 text-center relative z-10">
        <Link
          href="/reviews"
          className="font-ui text-sm text-cream-50/40 hover:text-cream-50 transition-colors underline underline-offset-4"
        >
          Read more reviews →
        </Link>
      </div>
    </div>
  )
}
