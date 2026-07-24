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
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import {
  BarChart3,
  MessageSquare,
  RotateCcw,
  Star,
  X,
  Scissors,
  UtensilsCrossed,
  Stethoscope,
} from "lucide-react"

const CAL = "https://cal.com/pacificedge"

const FAQ = [
  { q: "Will the AI sound like a real person to my clients?", a: "Yes. We train it on your salon’s tone and services, so messages feel warm and personal. You approve the voice before it ever speaks to a client." },
  { q: "Do I need to change my booking software?", a: "No. It works alongside the booking tools and phone number you already use. There is nothing new for your front desk to learn." },
  { q: "Can it take deposits or enforce a cancellation policy?", a: "Yes. We can build in deposit requests and clear cancellation reminders so late cancels and no-shows stop eating into your day." },
  { q: "How long until it is live?", a: "Usually about a week from our first call. We set it up, you test it, and we fine-tune it before a single client sees it." },
  { q: "How much does it cost?", a: "It depends on what you automate. The 15-minute discovery call is free, and we scope a flat-priced plan around your chairs and booking volume." },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Salons & Spas | Pacific Edge AI" },
  description:
    "AI automation for Vancouver salons, spas and wellness clinics. Book requests around the clock, cut no-shows, fill cancellations, and get clients rebooking. No tech team needed. Free 15-min call.",
  alternates: { canonical: "/salons" },
}

export default function Page() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <HeroSection
          title={
            <>
              Keep Every Chair Full.
              <br />
              <span className="a">Lose Fewer Clients.</span>
            </>
          }
          sub="Every booking request answered, every no-show headed off, every client reminded to rebook. Custom AI built for how a busy salon, spa, or clinic actually runs, from the front desk to the treatment room."
          primaryCta={{ href: CAL, label: "Book a Free 15-Min Demo" }}
          secondaryCta={{ href: "/salons-savings-calculator.html", label: "See What Empty Chairs Cost You" }}
        />

        <Divider />

        <WhatJaniceHandlesSection
          title={<>Built For A <span className="a">Full Book.</span></>}
          lead="Empty chairs, no-shows, missed DMs. Janice, your AI employee, turns the gaps that quietly drain your week into booked, confirmed appointments, and gives your front desk its time back."
          rows={[
            {
              title: <>Fill Every <span className="a">Cancelled Chair.</span></>,
              body: "A late cancellation used to mean an empty chair. Now the moment a client cancels, your AI offers the slot to your waitlist and rebooks it, while reminders and optional deposits keep no-shows away.",
              points: [
                "Cancellations offered to your waitlist instantly",
                "Rebooks the first client to say yes",
                "Reminders and optional deposits that cut no-shows",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Cancellation · Refilled"
                  rows={[
                    { avatar: <X size={15} strokeWidth={2} />, name: "2:00 PM cancelled", sub: "Offered to your waitlist", pill: { label: "Open", tone: "warn" } },
                    { avatar: <RotateCcw size={15} strokeWidth={2} />, name: "Rebooked in 9 min", sub: "Filled from waitlist", pill: { label: "Refilled", tone: "ok" } },
                  ]}
                />
              ),
            },
            {
              title: <>Book Requests <span className="a">Around The Clock.</span></>,
              body: "A call, text, or Instagram DM comes in and your AI answers in seconds, offers a real open slot, and books it straight into your calendar, even at midnight.",
              points: [
                "Answers calls, texts and DMs instantly",
                "Offers real openings and books them",
                "Drops straight into the calendar you use",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Booking Requests · Today"
                  rows={[
                    { avatar: <MessageSquare size={15} strokeWidth={2} />, name: "Balayage · Sat 1:30 PM", sub: "From Instagram DM", pill: { label: "Booked", tone: "ok" } },
                    { avatar: <Scissors size={15} strokeWidth={2} />, name: "Men’s cut · Thu 5:00 PM", sub: "After-hours text", pill: { label: "Booked", tone: "ok" } },
                  ]}
                />
              ),
            },
            {
              title: <>Rebookings <span className="a">On Autopilot.</span></>,
              body: "Your AI follows up after every visit and reminds clients to rebook at the right time, so the gap between appointments shrinks and your regulars actually stay regular. Review requests go to your happiest clients, with you approving the voice, so your online presence finally matches the work.",
              points: [
                "Timed rebooking nudges after each visit",
                "Win-back texts for clients who drifted away",
                "Review requests sent to your happiest clients",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Rebooking · This week"
                  rows={[
                    { avatar: <RotateCcw size={15} strokeWidth={2} />, name: "Priya · due for a trim", sub: "Nudge sent · rebooked", pill: { label: "Rebooked", tone: "ok" } },
                    { avatar: <Star size={15} strokeWidth={2} />, name: "Jordan · loved the facial", sub: "Review request sent", pill: { label: "5-star", tone: "ok" } },
                  ]}
                />
              ),
            },
          ]}
        />

        <Divider />

        <WhatItLooksLikeSection
          industry="salons"
          title={<>A Cancellation,<br /><span className="a">Refilled.</span></>}
          lead="Here is the flow that quietly saves your day. A last-minute cancel, refilled from your waitlist before the chair ever sits empty."
          steps={[
            { title: "A client cancels last-minute", body: "It is Saturday morning and a balayage cancels. That chair would normally sit empty all afternoon." },
            { title: "Your AI texts your waitlist", body: "It offers the open slot to the next client in line and books the first to say yes, often within minutes." },
            { title: "The chair stays full", body: "The booking lands on your calendar with reminders set. You never picked up the phone." },
          ]}
        />

        <MetricsBandSection
          stats={[
            { to: 30, unit: "s", label: "Average reply to a booking request" },
            { to: 95, unit: "%", label: "Of requests answered instantly" },
            { to: 35, unit: "%", label: "Fewer no-shows on average" },
            { to: 15, unit: "hrs", label: "Front-desk hours saved weekly" },
          ]}
          note="Outcomes we design toward for Vancouver salons and spas"
        />

        <FaqSection title={<>Salon Owners <span className="a">Ask Us.</span></>} items={FAQ} />

        <GetStartedSection
          title={<>Ready To Keep<br /><span className="a">Every Chair Full?</span></>}
          desc="Start with a free 15-minute call. We will show you exactly which automations would put the most appointments back on your calendar. No pitch, no obligation."
          action={
            <>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="/salons-savings-calculator.html" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> See What Your Empty Chairs Are Worth <span className="arr">→</span></a>
            </>
          }
          bullets={["Free discovery call", "Working prototype in about a week", "Vancouver-based"]}
          crossLinks={[
            { href: "/restaurants", icon: <UtensilsCrossed size={14} strokeWidth={2} />, label: "Restaurants" },
            { href: "/dental", icon: <Stethoscope size={14} strokeWidth={2} />, label: "Dental" },
          ]}
        />
      </div>
    </SiteShell>
  )
}
