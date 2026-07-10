import Link from "next/link"
import { SITE_CONTACT } from "@/lib/content/site"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How Pacific Edge AI collects, uses, and protects your information.",
  path: "/privacy",
})

const TRUST_BULLETS = [
  { title: "Encrypted", description: "Data in transit and at rest is protected using industry-standard encryption." },
  { title: "Canadian privacy", description: "We align with PIPEDA and BC privacy expectations for local businesses." },
  { title: "Never sold", description: "We do not sell your data or your customers' data to third parties." },
  { title: "You stay in control", description: "Your business data stays yours. Export or end service on your terms." },
] as const

export default function PrivacyPage() {
  return (
    <article className="section-py pt-28 sm:pt-32 bg-white-50">
      <div className="container-x max-w-3xl">
        <p className="rounded-xl border border-ash-400/40 bg-ash-400/10 px-5 py-4 font-ui text-sm text-midnight-900/80 mb-10">
          This is a general template. Have a qualified lawyer review before relying on it in
          production.
        </p>

        <h1 className="text-display-md text-midnight-900 mb-4">Privacy Policy</h1>
        <p className="font-ui text-sm text-midnight-900/50 mb-12">
          Last updated: July 8, 2026 · Pacific Edge AI · Vancouver, British Columbia, Canada
        </p>

        <section className="mb-12">
          <h2 className="font-display text-xl text-midnight-900 mb-6">Your data stays yours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_BULLETS.map((item) => (
              <div key={item.title} className="rounded-xl border border-ash-300/50 bg-white-100/50 p-5">
                <p className="font-ui text-sm font-medium text-midnight-900 mb-1">{item.title}</p>
                <p className="font-ui text-sm text-midnight-900/55">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <LegalSection title="1. Who we are">
          <p>
            Pacific Edge AI (&quot;Pacific Edge,&quot; &quot;we,&quot; &quot;us&quot;) provides
            done-for-you operations software for local businesses. We are based in Vancouver,
            British Columbia, Canada. Contact:{" "}
            <a href={`mailto:${SITE_CONTACT.email}`} className="text-midnight-700 underline">
              {SITE_CONTACT.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <p>We may collect:</p>
          <ul>
            <li>Contact details you submit through forms, email, or booking tools</li>
            <li>Business information needed to configure and operate your account</li>
            <li>Customer communication data processed on your behalf (calls, messages, bookings)</li>
            <li>Usage and diagnostic data to maintain and improve our services</li>
            <li>Billing and account records where you become a client</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How we use information">
          <p>We use information to:</p>
          <ul>
            <li>Deliver, configure, and support the services you request</li>
            <li>Respond to inquiries and schedule discovery calls</li>
            <li>Operate integrations with tools you authorize</li>
            <li>Improve reliability, security, and product quality</li>
            <li>Meet legal, accounting, and compliance obligations</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Processing on your behalf">
          <p>
            When we process customer or patient communication data for your business, we act as a
            service provider processing data on your instructions. You remain responsible for
            having appropriate notices and consents with your customers, and for how your team uses
            the system.
          </p>
        </LegalSection>

        <LegalSection title="5. Sharing">
          <p>
            We do not sell personal information. We may share data with subprocessors that help us
            operate the service (for example hosting, telephony, messaging, or analytics
            providers) under contractual safeguards, or when required by law.
          </p>
        </LegalSection>

        <LegalSection title="6. Security">
          <p>
            We use administrative, technical, and organizational measures designed to protect
            information, including encryption in transit, access controls, and least-privilege
            practices. No method of transmission or storage is completely secure.
          </p>
        </LegalSection>

        <LegalSection title="7. Retention">
          <p>
            We retain information for as long as needed to provide services, resolve disputes,
            enforce agreements, and comply with law. When you end service, we will delete or return
            your data according to your agreement and applicable law, subject to reasonable backup
            retention periods.
          </p>
        </LegalSection>

        <LegalSection title="8. Your rights">
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict
            certain processing of your personal information. Canadian residents may have rights under
            PIPEDA and applicable provincial privacy laws. To make a request, email{" "}
            <a href={`mailto:${SITE_CONTACT.email}`} className="text-midnight-700 underline">
              {SITE_CONTACT.email}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="9. Cookies and analytics">
          <p>
            Our website may use essential cookies and limited analytics to understand traffic and
            improve the site. You can control cookies through your browser settings.
          </p>
        </LegalSection>

        <LegalSection title="10. Changes">
          <p>
            We may update this policy from time to time. Material changes will be posted on this
            page with an updated date.
          </p>
        </LegalSection>

        <LegalSection title="11. Contact">
          <p>
            Privacy questions or requests:{" "}
            <a href={`mailto:${SITE_CONTACT.email}`} className="text-midnight-700 underline">
              {SITE_CONTACT.email}
            </a>
            . {SITE_CONTACT.location}.
          </p>
        </LegalSection>

        <div className="mt-12 pt-8 border-t border-ash-300/40">
          <Link href="/terms" className="font-ui text-sm text-midnight-900/55 hover:text-midnight-900 underline">
            Terms of Service
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
