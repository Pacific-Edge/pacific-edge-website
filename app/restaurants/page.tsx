import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import { Divider } from "@/components/ui/sections"
import {
  HeroSection,
  WhatJaniceHandlesSection,
  WhatItLooksLikeSection,
  MetricsBandSection,
  FaqSection,
  GetStartedSection,
} from "@/components/subpage-sections"
import { CoveragePanel } from "@/components/ui/graphics/CoveragePanel"
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import { BarChart3, Phone, UtensilsCrossed } from "lucide-react"

const CAL = "https://cal.com/pacificedge"

const FAQ = [
  { q: "Will the AI sound like a robot to my guests?", a: "No. We train it on your restaurant's own voice and menu, so replies read like a friendly host wrote them. You approve the tone before anything ever goes live." },
  { q: "Do I need new software or a tech person?", a: "No. It works with your existing phone number and booking tools. There is nothing for your staff to learn and no new hardware to buy." },
  { q: "What happens with a bad review?", a: "Negative reviews are flagged for you and never posted automatically. You stay in full control of how you respond to anything sensitive." },
  { q: "How long until it is live?", a: "Usually about a week from our first call. We build a working setup, you test it, and we adjust it before it ever touches a real guest." },
  { q: "How much does it cost?", a: "It depends on what you automate. The 15-minute discovery call is free, and we scope a plan around your covers and call volume with clear, flat pricing." },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Restaurants | Pacific Edge AI" },
  description:
    "AI automation for Vancouver restaurants. Recover missed reservation calls, auto-reply to Google reviews, cut no-shows, and fill more tables. No tech team needed. Free 15-min call.",
  alternates: { canonical: "/restaurants" },
}

export default function RestaurantsPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <HeroSection
          title={
            <>
              Fill More Tables.
              <br />
              <span className="a">Lose Fewer Guests.</span>
            </>
          }
          sub="Custom AI that answers every missed reservation call, replies to every review, and heads off every no-show, built for how a Vancouver restaurant actually runs."
          primaryCta={{ href: CAL, label: "Book a Free 15-Min Demo" }}
          secondaryCta={{ href: "/restaurants-savings-calculator.html", label: "See What Empty Tables Cost You" }}
        />

        <Divider />

        <WhatJaniceHandlesSection
          title={<>See What <span className="a">Janice Handles.</span></>}
          lead="Missed calls, no-shows, silent reviews. Janice, your AI employee, turns the moments that quietly cost you the most into booked, confirmed covers."
          rows={[
            {
              title: <>Fill Every <span className="a">Cancelled Table.</span></>,
              body: "The moment a table frees up, your AI fills it from your waitlist and sends reminders that stop most no-shows before they happen.",
              points: [
                "Freed tables offered to your waitlist instantly",
                "Rebooks the first guest to say yes",
                "Confirmations and reminders that cut no-shows",
              ],
              visual: (
                <CoveragePanel
                  liveLabel="Tonight · Live"
                  countTo={58}
                  countUnit="covers"
                  toastIcon={<UtensilsCrossed size={16} strokeWidth={2} style={{ color: "var(--accent-ink)" }} />}
                  toastTitle="Table for 4 · 7:45 PM"
                  toastSub="Just booked by Janice"
                  toastValue="+$220"
                />
              ),
            },
            {
              title: <>Never Miss A <span className="a">Reservation.</span></>,
              body: "When you can't pick up, your AI texts the guest back in seconds and books the table straight into your system.",
              points: [
                "Texts back in under 30 seconds, day or night",
                "Handles hours, parking and walk-in questions itself",
                "Catering and large parties answered before morning",
              ],
              visual: (
                <MockFeedCard
                  headTitle="Missed Call · Recovered"
                  rows={[
                    { avatar: <Phone size={15} strokeWidth={2} />, name: "+1 (604) 555-0148", sub: "Missed at 7:14 PM", pill: { label: "Texted · 19s", tone: "ok" } },
                    { avatar: <UtensilsCrossed size={15} strokeWidth={2} />, name: "Table for 4 · 7:45 PM", sub: "Booked by AI", pill: { label: "Confirmed", tone: "ok" } },
                  ]}
                />
              ),
            },
            {
              title: <>Own Your <span className="a">Google Reviews.</span></>,
              body: "Your AI drafts a warm, on-brand reply to every review in seconds, and follows up after a great night to bring guests back.",
              points: [
                "On-brand drafts for Google and Yelp",
                "Angry reviews flagged, never auto-posted",
                "Follow-ups that turn one-time diners into regulars",
              ],
              visual: (
                <MockFeedCard
                  headTitle="Reviews · Auto-drafted"
                  rows={[
                    { avatar: "G", name: "Sarah M.", sub: "★★★★★", stars: true, pill: { label: "Reply sent", tone: "ok" } },
                    { avatar: "★", name: "Dishan P.", sub: "★★★☆☆", stars: true, pill: { label: "Flagged for you", tone: "warn" } },
                  ]}
                />
              ),
            },
          ]}
        />

        <Divider />

        <WhatItLooksLikeSection
          industry="restaurants"
          title={<>A Missed Call,<br /><span className="a">Recovered.</span></>}
          lead="Here is a real flow your guests would see. No app to download, just a normal text thread that ends in a booking."
          steps={[
            { title: "The call goes unanswered", body: "It is Friday at 7 and every hand is full. The phone rings out, like it does most busy nights." },
            { title: "Your AI texts back in seconds", body: "It answers the question, offers a real table time, and confirms the booking in a friendly back-and-forth." },
            { title: "The booking lands in your system", body: "The table shows up in the tools you already use. You just seat them when they arrive." },
          ]}
        />

        <MetricsBandSection
          stats={[
            { to: 19, unit: "s", label: "Average text-back to a missed call" },
            { to: 95, unit: "%", label: "Of reviews getting a reply" },
            { to: 30, unit: "%", label: "Fewer no-shows on average" },
            { to: 18, unit: "hrs", label: "Saved every single week" },
          ]}
          note="Outcomes we design toward for Vancouver restaurants"
        />

        <FaqSection title={<>Restaurant Owners <span className="a">Ask Us.</span></>} items={FAQ} />

        <GetStartedSection
          title={<>Ready To Fill Every <span className="a">Table?</span></>}
          desc="Start with a free 15-minute call. We will show you exactly which automations would put the most covers back on your books. No pitch, no obligation."
          action={
            <>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="/restaurants-savings-calculator.html" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> See What Your Empty Tables Are Worth <span className="arr">→</span></a>
            </>
          }
          bullets={["Free discovery call", "Working prototype in about a week", "Vancouver-based"]}
        />
      </div>
    </SiteShell>
  )
}
