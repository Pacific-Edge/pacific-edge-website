import PageHero from "@/components/sections/PageHero"
import ProcessStepper from "@/components/sections/ProcessStepper"
import PageCTA from "@/components/sections/PageCTA"
import { PROCESS_STEPS } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "How It Works",
  description: "Five steps from discovery call to launch — working prototype in week one.",
  path: "/process",
})

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Five steps, one week"
        description="From a 15-minute discovery call to a working prototype — no pitch decks, no orphaned systems."
      />

      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="max-w-3xl">
            <ProcessStepper steps={PROCESS_STEPS} />
          </div>
        </div>
      </section>

      <PageCTA
        headline="Start with a discovery call"
        body="Fifteen minutes. We learn where you're losing time or money — no pressure."
        ctaLabel="Book a Free 15-Min Call"
      />
    </>
  )
}
