import Link from "next/link"
import { DENTAL_INTEGRATIONS, INTEGRATIONS_CLOSING } from "@/lib/content/integrations"
import { Button } from "@/components/ui/button"

export default function IntegrationTabs() {
  return (
    <>
      <div className="card p-8 sm:p-12">
        <p className="eyebrow text-ash-500 mb-6">Practice management</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {DENTAL_INTEGRATIONS.map((tool) => (
            <div
              key={tool}
              className="rounded-xl border border-ash-300/50 bg-white-50 px-5 py-6 text-center hover:border-midnight-900/15 transition-colors"
            >
              <p className="font-ui text-sm font-medium text-midnight-900">{tool}</p>
            </div>
          ))}
        </div>
        <p className="font-ui text-sm text-midnight-900/55 mt-10 max-w-lg">{INTEGRATIONS_CLOSING}</p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button asChild variant="black">
          <Link href="/contact">Book a Free 15-Min Call</Link>
        </Button>
        <Button asChild variant="transparent" tone="dark">
          <Link href="/clinics">See what we do for clinics</Link>
        </Button>
      </div>
    </>
  )
}
