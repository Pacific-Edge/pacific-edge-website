import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import { Divider, Hero, Section } from "@/components/ui/sections"

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Pacific Edge AI" },
  description:
    "How Pacific Edge AI Inc. collects, uses, and protects information across pacificedge.ai, including the contact form, the Text Janice demo, and site analytics.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow="Legal"
          title={<>Privacy<br /><span className="a">Policy.</span></>}
          sub="What we collect on this site, why, and how to reach us about it."
        />

        <Divider />

        <Section narrow>
          <div className="pe-legal">
            <p className="pe-legal-meta">Last updated July 24, 2026.</p>

            <h2>1. Who we are</h2>
            <p>
              This Privacy Policy covers pacificedge.ai, operated by Pacific Edge AI Inc.
              (&quot;Pacific Edge,&quot; &quot;we,&quot; &quot;us&quot;), Vancouver, British
              Columbia, Canada. Questions about this policy can be sent to{" "}
              <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a>.
            </p>

            <h2>2. Information you provide to us</h2>
            <p>
              The contact form on this site collects your name, email address, message, and,
              optionally, your business name and phone number. This site is a static export
              with no server backend, so submitting the form does not send your information to
              Pacific Edge directly. Instead, it opens a pre-filled email in your own mail
              client addressed to <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a>.
              We only receive what you type once you send that email yourself.
            </p>

            <h2>3. The &quot;Text Janice&quot; demo</h2>
            <p>
              The <a href="/ai-employee">AI Employee</a> page includes a &quot;Text
              Janice&quot; chat demo. When you use it:
            </p>
            <ul>
              <li>
                Your messages and Janice&apos;s scripted replies are saved in your browser&apos;s
                local storage (up to 300 entries) so the demo can display a running
                conversation. This data stays on your device.
              </li>
              <li>
                A randomly generated visitor ID is also stored in your browser so we can tell
                repeat demo sessions apart. It is not tied to your real identity unless you type
                identifying information into the chat.
              </li>
              <li>
                Depending on how this demo is configured at any given time, the messages you
                send may also be transmitted to a Google Sheet, via a Google Apps Script
                endpoint, so we can review how the demo is used and improve it.
              </li>
            </ul>
            <p>
              Because of this, please don&apos;t type real personal information, real customer
              data, or anything sensitive into the demo. You can clear everything the demo has
              stored at any time by clearing your browser&apos;s site data for pacificedge.ai.
            </p>

            <h2>4. Cookies and analytics</h2>
            <p>
              We use Google Analytics (GA4) on our homepage to understand traffic to the site.
              Google Analytics sets its own cookies (such as <code>_ga</code> and{" "}
              <code>_ga_*</code>) in your browser to distinguish visitors and sessions, and
              sends information about your visit, including your IP address and device
              information, to Google. You can read Google&apos;s own privacy policy at{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                policies.google.com/privacy
              </a>
              . We do not currently run any advertising, retargeting, or cross-site tracking
              cookies, and this site does not show a cookie-consent banner today. You can block
              or clear analytics cookies at any time in your browser settings, or install
              Google&apos;s{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener"
              >
                Analytics opt-out browser add-on
              </a>
              .
            </p>

            <h2>5. Savings calculators</h2>
            <p>
              The industry savings calculators on this site (dental, restaurants, salons,
              trades) run entirely in your browser. The figures you enter are used only to
              calculate an on-screen estimate and are never transmitted to or stored by Pacific
              Edge or any third party.
            </p>

            <h2>6. Embedded dashboard preview</h2>
            <p>
              Several pages embed a static preview of what a client dashboard looks like. It
              displays fixed example data only, not real business data, and loads its fonts
              from Google Fonts, which receives your IP address when the preview renders.
            </p>

            <h2>7. External links</h2>
            <p>
              Our &quot;Book a Free 15-Min Call&quot; links go to Cal.com, an external
              scheduling service. Once you follow that link you are subject to Cal.com&apos;s
              own privacy policy and terms, which Pacific Edge does not control.
            </p>

            <h2>8. How we use information</h2>
            <p>
              We use the information described above to respond to your inquiries, review and
              improve the Text Janice demo, and understand traffic to our site. We do not sell
              personal information to third parties.
            </p>

            <h2>9. Data retention</h2>
            <p>
              We don&apos;t retain contact-form submissions on any server, since none exists for
              this site. Text Janice demo data persists in your own browser until you clear it.
              Google Analytics data is retained according to Google&apos;s own default retention
              settings.
            </p>

            <h2>10. International data transfers</h2>
            <p>
              Google Analytics, the Text Janice logging endpoint, and Google Fonts are operated
              by Google and may process or store data outside Canada.
            </p>

            <h2>11. Your rights</h2>
            <p>
              Under Canadian privacy law (PIPEDA), you have the right to ask what personal
              information we hold about you, to correct it, or to request that it be deleted.
              Since most of the data described in this policy lives in your own browser or with
              Google rather than on a Pacific Edge server, a request to us mainly covers
              anything tied to your visitor ID that may have been logged to our Google Sheet.
              Email <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a> to make a
              request.
            </p>

            <h2>12. Children&apos;s privacy</h2>
            <p>
              This site is directed at business owners and is not intended for children. We do
              not knowingly collect personal information from children.
            </p>

            <h2>13. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect the
              information described in this policy. By design, contact-form submissions are
              never stored on a Pacific Edge server in the first place.
            </p>

            <h2>14. Changes to this policy</h2>
            <p>
              We may update this policy as the site changes. The date at the top of this page
              reflects the most recent update.
            </p>

            <h2>15. Contact us</h2>
            <p>
              Questions about this policy or your information can be sent to{" "}
              <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a>.
            </p>
          </div>
        </Section>
      </div>
    </SiteShell>
  )
}
