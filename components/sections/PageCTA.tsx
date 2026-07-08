import Link from "next/link"

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
    <section className="section-py bg-navy-900">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-display-md text-cream-50 mb-4">{headline}</h2>
          <p className="font-ui text-base text-cream-50/65 mb-8 leading-relaxed">{body}</p>
          <Link href={ctaHref} className="btn-primary bg-cream-50 text-navy-900 hover:bg-cream-100">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
