import Link from "next/link"
import type { IndustrySubPage as IndustrySubPageData } from "@/lib/content/industries"
import { JANICE_CAPABILITIES } from "@/lib/content/site"

type IndustrySubPageProps = {
  data: IndustrySubPageData
}

export default function IndustrySubPage({ data }: IndustrySubPageProps) {
  return (
    <>
      <section className="section-py pt-28 sm:pt-32 bg-cream-50">
        <div className="container-x">
          <Link
            href={`/industries/${data.parent}`}
            className="font-ui text-sm text-navy-900/50 hover:text-navy-900 mb-8 inline-block transition-colors"
          >
            ← Back to {data.parent === "dental" ? "Dental & Health" : data.parent}
          </Link>
          <p className="eyebrow text-ash-500 mb-6">{data.eyebrow}</p>
          <h1 className="text-display-lg text-navy-900 mb-4 max-w-3xl">{data.headline}</h1>
          <p className="font-ui text-base text-navy-900/55 mb-8 max-w-2xl">{data.subcopy}</p>
          <Link href="/contact" className="btn-primary">
            Book a Free 15-Min Call
          </Link>
        </div>
      </section>

      <section className="section-py bg-cream-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-ash-500 mb-4">What the platform handles</p>
            <h2 className="text-display-md text-navy-900">Solutions for {data.title.toLowerCase()}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {JANICE_CAPABILITIES.slice(0, 6).map((cap) => (
              <div key={cap.title} className="card p-6">
                <p className="eyebrow text-ash-500 mb-2">{cap.label}</p>
                <p className="font-display text-lg text-navy-900 mb-2">{cap.title}</p>
                <p className="font-ui text-sm text-navy-900/55">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-cream-50">
        <div className="container-x text-center max-w-xl mx-auto">
          <p className="font-ui text-sm text-navy-900/55 mb-6">
            Placeholder page, Leone to expand with segment-specific copy and visuals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Free 15-Min Call
            </Link>
            <Link href={`/industries/${data.parent}`} className="btn-secondary">
              View all {data.parent} solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
