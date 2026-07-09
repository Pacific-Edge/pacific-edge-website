import PageHero from "@/components/sections/PageHero"
import PageCTA from "@/components/sections/PageCTA"
import { COVERAGE_FOOTNOTE, COVERAGE_REGIONS } from "@/lib/content/industries"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Coverage",
  description: "Pacific Edge serves Greater Vancouver: Vancouver, Burnaby, Surrey, North Shore, Richmond, and across BC.",
  path: "/coverage",
})

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Greater Vancouver & BC"
        description="Local, hands-on support across five regions, and new clients province-wide."
      />

      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="max-w-3xl">
            <ol className="divide-y divide-ash-300/50 border-y border-ash-300/50">
              {COVERAGE_REGIONS.map((region, i) => (
                <li key={region.name} className="flex gap-6 py-8 items-start">
                  <span
                    className="font-display font-bold text-electric-500 shrink-0 w-8"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-navy-900 mb-1">
                      {region.name}
                    </h2>
                    <p className="font-ui text-sm text-navy-900/55">{region.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="font-ui text-sm text-ash-500 mt-10 text-center eyebrow">
              {COVERAGE_FOOTNOTE}
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        headline="Serving local businesses across BC"
        body="Book a call to see if we're the right fit for your shop."
      />
    </>
  )
}
