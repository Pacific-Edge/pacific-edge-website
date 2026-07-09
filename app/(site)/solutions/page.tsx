import Link from "next/link"
import { SOLUTION_PILLARS } from "@/lib/content/site"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Our Solutions",
  description:
    "Answers every lead, books jobs, builds your reputation, and runs on the tools you already use.",
  path: "/solutions",
})

const PILLAR_VISUALS = [
  { label: "Calls", stat: "<30s", sub: "to reply" },
  { label: "Booking", stat: "24/7", sub: "always on" },
  { label: "Reviews", stat: "5★", sub: "on-brand replies" },
  { label: "Custom", stat: "1", sub: "dashboard for it all" },
] as const

export default function SolutionsPage() {
  return (
    <>
      <section className="section-py pt-28 sm:pt-32 bg-cream-50">
        <div className="container-x">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <p className="eyebrow text-ash-500 mb-6">Product</p>
            <h1 className="text-display-lg text-navy-900 mb-4">
              Four ways we give you the edge
            </h1>
            <p className="font-ui text-base text-navy-900/55 max-w-xl">
              Done-for-you operations software, configured around your calendar, phone, and reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {SOLUTION_PILLARS.map((pillar, i) => (
              <article
                key={pillar.title}
                className="card p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-start"
              >
                <div className="shrink-0 w-24 h-24 rounded-2xl bg-navy-900 flex flex-col items-center justify-center text-cream-50">
                  <span className="font-display text-2xl font-bold leading-none">
                    {PILLAR_VISUALS[i].stat}
                  </span>
                  <span className="font-ui text-[10px] uppercase tracking-widest text-cream-50/50 mt-1">
                    {PILLAR_VISUALS[i].sub}
                  </span>
                </div>
                <div>
                  <p className="eyebrow text-ash-500 mb-3">{PILLAR_VISUALS[i].label}</p>
                  <h2 className="font-display text-xl sm:text-2xl text-navy-900 mb-3">
                    {pillar.title}
                  </h2>
                  <p className="font-ui text-sm text-navy-900/55 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 lg:mt-20 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Free 15-Min Call
            </Link>
            <Link href="/dashboard" className="btn-secondary">
              See the dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
