import PageHero from "@/components/sections/PageHero"
import FounderCard from "@/components/sections/FounderCard"
import PageCTA from "@/components/sections/PageCTA"
import { FOUNDERS } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "About",
  description: "Meet the co-founders building done-for-you operations software for Vancouver local businesses.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="The people behind Pacific Edge"
        description="Vancouver-based operators building software that hands admin time back — without enterprise pricing."
      />

      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {FOUNDERS.map((founder) => (
              <FounderCard key={founder.name} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  )
}
