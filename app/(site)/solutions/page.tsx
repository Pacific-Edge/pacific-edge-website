import Link from "next/link"
import { SOLUTION_PILLARS } from "@/lib/content/site"
import { CUSTOM_SOFTWARE_FLAGSHIP } from "@/lib/content/industries"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Our Solutions",
  description:
    "Two categories: AI automations that answer, book, and reply for you, and custom software built around your specific workflow.",
  path: "/solutions",
})

const AI_AUTOMATIONS = SOLUTION_PILLARS.slice(0, 3)
const CUSTOM_SOFTWARE = SOLUTION_PILLARS[3]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py pt-28 sm:pt-32 bg-white-50">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow text-ash-500 mb-6">Product</p>
            <h1 className="text-display-lg text-midnight-900 mb-4">Two things we do for you</h1>
            <p className="font-ui text-base text-midnight-900/55 max-w-xl">
              Done-for-you operations software, configured around your calendar, phone, and reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Category 1 — AI Automations */}
      <section className="section-py bg-white-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-4">AI Automations</p>
            <h2 className="text-display-md text-midnight-900 mb-4">We answer, book, and reply for you.</h2>
            <p className="font-ui text-sm text-midnight-900/55 max-w-md">
              A voice receptionist, review management, and around-the-clock texting, running on the tools
              you already use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AI_AUTOMATIONS.map((pillar) => (
              <article key={pillar.title} className="card p-6 sm:p-8">
                <h3 className="font-display text-lg text-midnight-900 mb-3">{pillar.title}</h3>
                <p className="font-ui text-sm text-midnight-900/55 leading-relaxed">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category 2 — Custom Software */}
      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="eyebrow text-ash-500 mb-4">Custom Software</p>
              <h2 className="text-display-md text-midnight-900 mb-4">{CUSTOM_SOFTWARE.title}</h2>
              <p className="font-ui text-sm text-midnight-900/55 max-w-md">{CUSTOM_SOFTWARE.description}</p>
            </div>
            <div className="border-l-2 border-electric-500 pl-6 lg:pl-8">
              <p className="eyebrow text-electric-700 mb-3">Live example</p>
              <p className="font-ui text-base text-midnight-900/75 leading-relaxed">
                {CUSTOM_SOFTWARE_FLAGSHIP}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-white-100/50 border-t border-ash-300/30">
        <div className="container-x">
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="black">
              <Link href="/contact">Book a Free 15-Min Call</Link>
            </Button>
            <Button asChild variant="transparent" tone="dark">
              <Link href="/dashboard">See the dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
