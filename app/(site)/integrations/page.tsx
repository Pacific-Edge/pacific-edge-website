import IntegrationTabs from "@/components/integrations/IntegrationTabs"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Integrations",
  description: "Janice connects to the scheduling, POS, and communication tools you already run.",
  path: "/integrations",
})

export default function IntegrationsPage() {
  return (
    <section className="section-py pt-28 sm:pt-32 bg-cream-50">
      <div className="container-x">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="eyebrow text-ash-500 mb-6">Integrations</p>
          <h1 className="text-display-lg text-navy-900 mb-4">Plays nice with what you run</h1>
          <p className="font-ui text-base text-navy-900/55 max-w-xl">
            No rip-and-replace. Janice connects to the tools your team already uses.
          </p>
        </div>

        <IntegrationTabs />
      </div>
    </section>
  )
}
