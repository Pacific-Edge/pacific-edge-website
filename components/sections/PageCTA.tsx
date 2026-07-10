import Link from "next/link"
import ElectricMotif from "@/components/ui/ElectricMotif"
import { Button } from "@/components/ui/button"

type PageCTAProps = {
  headline?: string
  body?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function PageCTA({
  headline = "Ready to get started?",
  body = "Book a free 15-minute call. No pitch deck, no pressure.",
  ctaLabel = "Book a Call",
  ctaHref = "/contact",
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden section-py bg-midnight-900">
      <ElectricMotif variant="wash" intensity="normal" className="left-1/2 top-0 -translate-x-1/2" />
      <div className="container-x relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display-md text-white-50 mb-4">{headline}</h2>
          <p className="font-ui text-base text-white-50/65 mb-8 leading-relaxed">{body}</p>
          <Button asChild variant="white">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
