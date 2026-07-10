import PageHero from "@/components/sections/PageHero"
import PillarGrid from "@/components/sections/PillarGrid"
import PageCTA from "@/components/sections/PageCTA"
import { WHY_US_INTRO, WHY_US_PILLARS } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Why Us",
  description: "Plain English, week-one prototypes, transparent pricing, and hands-on Vancouver support.",
  path: "/why-us",
})

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Built for operators, not agencies"
        description={WHY_US_INTRO}
      />

      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="max-w-2xl mb-8 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-3">Why Pacific Edge</p>
            <h2 className="text-display-md text-midnight-900">Four things we stand by</h2>
          </div>
          <PillarGrid pillars={WHY_US_PILLARS} />
        </div>
      </section>

      <PageCTA />
    </>
  )
}
