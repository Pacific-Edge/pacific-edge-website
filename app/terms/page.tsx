import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import { Divider, Hero, Section } from "@/components/ui/sections"

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Pacific Edge AI" },
  description:
    "The terms that govern your use of pacificedge.ai, including the savings calculators, the Text Janice demo, and external links.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow="Legal"
          title={<>Terms of<br /><span className="a">Service.</span></>}
          sub="The terms that apply to using this website."
        />

        <Divider />

        <Section narrow>
          <div className="pe-legal">
            <p className="pe-legal-meta">Last updated July 24, 2026.</p>

            <h2>1. Acceptance of terms</h2>
            <p>
              By using pacificedge.ai (the &quot;site&quot;), you agree to these Terms of
              Service. If you don&apos;t agree, please don&apos;t use the site.
            </p>

            <h2>2. About Pacific Edge AI Inc.</h2>
            <p>
              This site is operated by Pacific Edge AI Inc., Vancouver, British Columbia,
              Canada, to describe our AI consulting and automation services for local
              businesses and to let visitors learn about, evaluate, and get in touch about
              those services.
            </p>

            <h2>3. Use of the site</h2>
            <p>
              You may view and use this site for your own personal or business evaluation of
              our services. You agree not to scrape, reverse-engineer, or systematically
              extract content from the site, and not to reproduce or republish site content
              without our permission.
            </p>

            <h2>4. The calculators and the Text Janice demo are illustrative</h2>
            <p>
              The savings calculators produce an estimate based on the figures you enter and
              the assumptions stated on each calculator page. They are not a guarantee of any
              particular result for your business. The &quot;Text Janice&quot; chat demo is a
              scripted illustration of how an AI receptionist can respond, not a live deployment
              connected to your business, and its responses may not reflect how an actual
              client engagement would run.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
              The site&apos;s content, design, and the &quot;Janice&quot; name and identity
              belong to Pacific Edge AI Inc. or its licensors. Nothing in these terms transfers
              any of that ownership to you.
            </p>

            <h2>6. Third-party links</h2>
            <p>
              Links on this site, including our booking link to Cal.com, take you to services
              we don&apos;t operate or control. We&apos;re not responsible for the content,
              policies, or practices of any third-party site.
            </p>

            <h2>7. No warranty</h2>
            <p>
              This site is provided &quot;as is&quot; and &quot;as available,&quot; without
              warranty of any kind. We don&apos;t guarantee the site will be uninterrupted,
              error-free, or free of inaccuracies.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the extent permitted by law, Pacific Edge AI Inc. is not liable for any
              indirect, incidental, or consequential damages arising from your use of this
              site.
            </p>

            <h2>9. Paid engagements are governed separately</h2>
            <p>
              These terms cover use of this website only. If you engage Pacific Edge AI Inc.
              for consulting, automation, or any other paid service, that engagement is
              governed by a separate services agreement signed between you and Pacific Edge,
              not by these website terms.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These terms are governed by the laws of British Columbia, Canada, without regard
              to its conflict-of-law principles.
            </p>

            <h2>11. Changes to these terms</h2>
            <p>
              We may update these terms as the site changes. The date at the top of this page
              reflects the most recent update.
            </p>

            <h2>12. Contact us</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a>.
            </p>
          </div>
        </Section>
      </div>
    </SiteShell>
  )
}
