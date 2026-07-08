import PageHero from "@/components/sections/PageHero"
import TestimonialGrid from "@/components/sections/TestimonialGrid"
import PageCTA from "@/components/sections/PageCTA"
import JsonLd from "@/components/seo/JsonLd"
import { TESTIMONIALS } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"
import { reviewsJsonLd } from "@/lib/seo/json-ld"

export const metadata = createPageMetadata({
  title: "Reviews",
  description: "What local business owners say about Pacific Edge — trades, salons, and professional services.",
  path: "/reviews",
})

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd()} />
      <PageHero
        eyebrow="Proof"
        title="From the operators using it"
        description="Real businesses across Greater Vancouver — missed calls answered, slots filled, time back."
      />

      <section className="section-py bg-cream-50">
        <div className="container-x">
          <TestimonialGrid testimonials={TESTIMONIALS} />
        </div>
      </section>

      <PageCTA
        headline="See it for yourself"
        body="Your first month is free. Book a call and we'll show you what it looks like for your business."
      />
    </>
  )
}
