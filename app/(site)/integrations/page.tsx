import IntegrationTabs from "@/components/integrations/IntegrationTabs"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Integrations",
  description: "Pacific Edge connects to the practice management and scheduling tools your clinic already runs.",
  path: "/integrations",
})

export default function IntegrationsPage() {
  return (
    <section className="section-py pt-28 sm:pt-32 bg-white-50">
      <div className="container-x">
        <div className="max-w-3xl mb-8 lg:mb-12">
          <p className="eyebrow text-ash-500 mb-6">Integrations</p>
          <h1 className="text-display-lg text-midnight-900 mb-4">Plays nice with what you run</h1>
          <p className="font-ui text-base text-midnight-900/55 max-w-xl">
            No rip-and-replace. The platform connects to the tools your team already uses.
          </p>
        </div>

        <IntegrationTabs />
      </div>
    </section>
  )
}
