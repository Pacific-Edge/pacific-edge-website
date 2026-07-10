import Link from "next/link"
import { SITE_CONTACT } from "@/lib/content/site"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms of service for Pacific Edge AI software and consulting services.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <article className="section-py pt-28 sm:pt-32 bg-white-50">
      <div className="container-x max-w-3xl">
        <p className="rounded-xl border border-ash-400/40 bg-ash-400/10 px-5 py-4 font-ui text-sm text-midnight-900/80 mb-10">
          This is a general template. Have a qualified lawyer review before relying on it in
          production.
        </p>

        <h1 className="text-display-md text-midnight-900 mb-4">Terms of Service</h1>
        <p className="font-ui text-sm text-midnight-900/50 mb-12">
          Last updated: July 8, 2026 · Pacific Edge AI · Vancouver, British Columbia, Canada
        </p>

        <LegalSection title="1. Agreement">
          <p>
            By accessing our website, booking a call, or using services provided by Pacific Edge AI
            (&quot;Pacific Edge,&quot; &quot;we,&quot; &quot;us&quot;), you agree to these Terms of
            Service. If you do not agree, do not use our services.
          </p>
        </LegalSection>

        <LegalSection title="2. Services">
          <p>
            Pacific Edge provides done-for-you operations software and related consulting for local
            businesses, including setup, configuration, training, and ongoing support. Services are
            described on our website and in your service agreement or statement of work.
          </p>
        </LegalSection>

        <LegalSection title="3. Free trial and engagement term">
          <p>
            Unless otherwise agreed in writing, new clients receive a one-month free trial. After
            the trial, engagements typically run an initial six-month term, followed by
            month-to-month service or an orderly handover of systems and documentation if you choose
            to end the relationship.
          </p>
        </LegalSection>

        <LegalSection title="4. Fees and payment">
          <p>
            Pricing is quoted transparently before work begins. You agree to pay fees according to
            your invoice or agreement. Late payments may result in suspension of services after
            reasonable notice.
          </p>
        </LegalSection>

        <LegalSection title="5. Your responsibilities">
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate business information needed for setup and operations</li>
            <li>Maintain access to third-party tools we integrate with, where required</li>
            <li>Use services in compliance with applicable laws and platform terms</li>
            <li>Review and approve automated communications before or as they go live, as agreed</li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Intellectual property">
          <p>
            Pacific Edge retains ownership of its platform, methods, and pre-existing materials. You
            retain ownership of your business data, branding, and customer records. Custom
            workflows built for you are licensed for your use during the engagement and as set out
            in your agreement.
          </p>
        </LegalSection>

        <LegalSection title="7. Confidentiality">
          <p>
            Each party will treat non-public business information received from the other as
            confidential and use it only to perform under these terms, except as required by law.
          </p>
        </LegalSection>

        <LegalSection title="8. Disclaimers">
          <p>
            Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis to the
            fullest extent permitted by law. We do not guarantee specific revenue, booking, or
            review outcomes. Business results depend on your operations, market, and customer
            behaviour.
          </p>
        </LegalSection>

        <LegalSection title="9. Limitation of liability">
          <p>
            To the maximum extent permitted by applicable law, Pacific Edge&apos;s total liability
            arising from or related to these terms or our services will not exceed the fees paid
            by you to Pacific Edge in the twelve months before the claim. We are not liable for
            indirect, incidental, special, consequential, or punitive damages.
          </p>
        </LegalSection>

        <LegalSection title="10. Termination">
          <p>
            Either party may terminate according to your service agreement. After termination, we
            will provide reasonable assistance to export or hand over your data and documentation,
            subject to any outstanding fees.
          </p>
        </LegalSection>

        <LegalSection title="11. Governing law">
          <p>
            These terms are governed by the laws of the Province of British Columbia and the
            federal laws of Canada applicable therein. Courts in British Columbia have exclusive
            jurisdiction, subject to mandatory consumer protections that may apply.
          </p>
        </LegalSection>

        <LegalSection title="12. Contact">
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${SITE_CONTACT.email}`} className="text-midnight-700 underline">
              {SITE_CONTACT.email}
            </a>
            . {SITE_CONTACT.location}.
          </p>
        </LegalSection>

        <div className="mt-12 pt-8 border-t border-ash-300/40">
          <Link href="/privacy" className="font-ui text-sm text-midnight-900/55 hover:text-midnight-900 underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </article>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl text-midnight-900 mb-3">{title}</h2>
      <div className="font-ui text-sm text-midnight-900/70 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
        {children}
      </div>
    </section>
  )
}
