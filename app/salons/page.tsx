import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import DentalInteractive from "@/components/dental/DentalInteractive"
import "@/styles/dental.css"
import { Divider } from "@/components/ui/sections"
import {
  HeroSection,
  AlternatingTextSection,
  WhatItLooksLikeSection,
  MetricsBandSection,
  FaqSection,
  GetStartedSection,
  PricingTiersSection,
} from "@/components/subpage-sections"
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import {
  BarChart3,
  MessageSquare,
  RotateCcw,
  Star,
  X,
  Scissors,
  Phone,
  MessagesSquare,
  CalendarCheck2,
} from "lucide-react"

const CAL = "https://cal.com/pacificedge"

const FAQ = [
  { q: "Will the AI sound like a real person to my clients?", a: "Yes. We train it on your salon’s tone and services, so messages feel warm and personal. You approve the voice before it ever speaks to a client." },
  { q: "Do I need to change my booking software?", a: "No. It works alongside the booking tools and phone number you already use. There is nothing new for your front desk to learn." },
  { q: "Can it take deposits or enforce a cancellation policy?", a: "Yes. We can build in deposit requests and clear cancellation reminders so late cancels and no-shows stop eating into your day." },
  { q: "How long until it is live?", a: "Usually about a week from our first call. We set it up, you test it, and we fine-tune it before a single client sees it." },
  { q: "How much does it cost?", a: "Plans start at $149/mo for voice, $179/mo with texting, and $199/mo with scheduling and reminders included. There is a $100 one-time setup fee, and the 15-minute discovery call is free." },
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
      <DentalInteractive />
      <div className="pe-sub">
        <HeroSection
          title={
            <>
              Fill More Chairs.
              <br />
              <span className="a">Lose Fewer Clients.</span>
            </>
          }
          sub="Janice answers booking requests, follows up on no-shows, and reminds clients to rebook. Built for how a busy salon, spa, or clinic runs, from the front desk to the treatment room."
          primaryCta={{ href: CAL, label: "Book a Free 15-Min Demo" }}
          secondaryCta={{ href: "/salons-savings-calculator", label: "See What Empty Chairs Cost You" }}
        />

        <Divider />

        <PricingTiersSection
          eyebrow="Pricing"
          title={<>Pricing &amp; <span className="a">Plans.</span></>}
          lead="Flat-priced, month-to-month. Start with voice, add texting and scheduling as your salon needs it."
          tiers={[
            {
              badge: "VOICE",
              icon: <Phone size={32} strokeWidth={1.5} />,
              title: "Covers what you miss",
              sub: "Janice answers missed and after-hours calls, and takes booking requests for your team to confirm.",
              features: [
                "500 call minutes included",
                <>Missed &amp; after-hours calls answered</>,
                "Repeat questions handled instantly",
                "Booking requests taken for your team",
              ],
              fromPrice: "$149",
            },
            {
              badge: "VOICE + TEXT",
              featured: true,
              icon: <MessagesSquare size={32} strokeWidth={1.5} />,
              title: "Answers texts too",
              sub: "Everything in Voice, plus a texting line clients can message directly.",
              features: [
                "500 minutes + 200 messages",
                "Everything in Voice",
                <>Direct client texting line</>,
                "Answers from the same knowledge base as the phone",
              ],
              fromPrice: "$179",
            },
            {
              badge: "+ SCHEDULING",
              icon: <CalendarCheck2 size={32} strokeWidth={1.5} />,
              title: "Books straight into your calendar",
              sub: "Everything in Voice + Text, plus Janice books appointments and sends reminders at no extra cost.",
              features: [
                "500 minutes + 200 messages",
                "Everything in Voice + Text",
                <>Books straight into your calendar</>,
                "Automated appointment reminders",
              ],
              fromPrice: "$199",
            },
          ]}
          flagLabel="MOST POPULAR"
          ctaHref={CAL}
          ctaLabel={<>Book a Free 15-Min Call <span className="arr">→</span></>}
          note="$100 one-time setup · extra minutes $0.50 · extra messages $0.10 · 30-day money-back guarantee on the monthly fee"
        />

        <Divider />

        <AlternatingTextSection
          title={<>Built For A <span className="a">Full Book.</span></>}
          lead="Janice, your AI employee, handles empty chairs, no-shows, and missed messages, turning them into booked appointments, and frees up your front desk's time."
          rows={[
            {
              title: <>Fill <span className="a">Cancelled Chairs.</span></>,
              body: "A late cancellation used to mean an empty chair. Now, when a client cancels, Janice offers the slot to your waitlist and rebooks it. Reminders and optional deposits reduce no-shows.",
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
              body: "Janice follows up after each visit and reminds clients to rebook at the right time, shortening the gap between appointments. Review requests go to your happiest clients, with you approving the voice, so your online reviews reflect the work you're doing.",
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
          lead="A last-minute cancellation, refilled from your waitlist before the chair sits empty."
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

        <FaqSection title={<>Salon Owner <span className="a">FAQ.</span></>} items={FAQ} />

        <GetStartedSection
          title={<>Ready To<br /><span className="a">Fill More Chairs?</span></>}
          desc="Start with a free 15-minute call. We will show you exactly which automations would put the most appointments back on your calendar. No pitch, no obligation."
          action={
            <>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="/salons-savings-calculator" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> See What Your Empty Chairs Are Worth <span className="arr">→</span></a>
            </>
          }
          bullets={["Free discovery call", "Working prototype in about a week", "Vancouver-based"]}
        />
      </div>
    </SiteShell>
  )
}
