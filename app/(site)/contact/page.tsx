import Link from "next/link"
import PageHero from "@/components/sections/PageHero"
import { Button } from "@/components/ui/button"
import { SITE_CONTACT } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Book a free 15-minute call with Pacific Edge AI. Vancouver, BC | hello@pacificedge.ai",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title="Book a call"
        description="Fifteen minutes to learn where you're losing time or money. No pitch deck, no pressure."
      />

      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
            <div>
              <p className="eyebrow text-ash-500 mb-4">Reach us</p>
              <h2 className="text-display-sm text-midnight-900 mb-6">Let&apos;s talk</h2>

              <dl className="space-y-6">
                <div>
                  <dt className="eyebrow text-ash-500 mb-1">Email</dt>
                  <dd>
                    <Link
                      href={`mailto:${SITE_CONTACT.email}`}
                      className="font-ui text-lg text-midnight-900 hover:text-midnight-700 underline underline-offset-4"
                    >
                      {SITE_CONTACT.email}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ash-500 mb-1">Location</dt>
                  <dd className="font-ui text-lg text-midnight-900">{SITE_CONTACT.location}</dd>
                </div>
              </dl>

              <div className="mt-10">
                <Button asChild variant="black">
                  <a href={SITE_CONTACT.calUrl} target="_blank" rel="noopener noreferrer">
                    Book a Free 15-Min Call
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-ash-300/40 bg-midnight-900/5 p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[280px]">
              <p className="eyebrow text-ash-500 mb-3">Scheduling</p>
              <p className="font-ui text-sm text-midnight-900/55 mb-6 max-w-xs leading-relaxed">
                Cal.com embed coming soon. Use the button to pick a time that works for you.
              </p>
              <Button asChild variant="transparent" tone="dark" size="sm">
                <a href={SITE_CONTACT.calUrl} target="_blank" rel="noopener noreferrer">
                  Open calendar →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
