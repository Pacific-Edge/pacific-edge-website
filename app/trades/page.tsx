import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import { Divider } from "@/components/ui/sections"
import {
  HeroSection,
  WhatJaniceHandlesSection,
  WhatItLooksLikeSection,
  MetricsBandSection,
  LiveDashboardSection,
  FaqSection,
  GetStartedSection,
} from "@/components/subpage-sections"
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import { DispatchRadar } from "@/components/ui/graphics/DispatchRadar"
import {
  BarChart3,
  Phone,
  Droplets,
  FileText,
  Wrench,
  Flame,
  Waves,
  UtensilsCrossed,
  Sparkles,
  Stethoscope,
} from "lucide-react"

const CAL = "https://cal.com/pacificedge"

const FAQ = [
  { q: "Can it answer when I am on a job and cannot pick up?", a: "Yes. The moment a call goes unanswered, your AI texts the customer back, finds out what they need, and books or qualifies the job while you keep working." },
  { q: "Will it work with my phone number and CRM?", a: "Yes. It works with your existing business number and the tools you already use, so leads land where you already track them." },
  { q: "Can it handle after-hours and emergency calls?", a: "Yes. After hours it can answer, triage urgency, and book the first available slot, so your best-margin emergency calls stop going to voicemail." },
  { q: "How long until it is live?", a: "Usually about a week from our first call. We build it, you test it on a few calls, and we adjust it before it handles real customers." },
  { q: "How much does it cost?", a: "It depends on what you automate. The 15-minute discovery call is free, and we scope a flat-priced plan around your call and quote volume." },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Trades & Home Services | Pacific Edge AI" },
  description:
    "AI automation for Vancouver trades and home services. Answer every call hands-free, follow up on every quote, book jobs, and capture more leads. Built for plumbers, electricians, HVAC and contractors. Free 15-min call.",
  alternates: { canonical: "/trades" },
}

export default function TradesPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <HeroSection
          title={
            <>
              Answer The Call.
              <br />
              <span className="a">Even On A Ladder.</span>
            </>
          }
          sub="Janice answers calls when your hands are full, follows up on quotes, and books the job. Built for plumbers, electricians, HVAC, roofers, and contractors across the Lower Mainland."
          primaryCta={{ href: CAL, label: "Book a Free 15-Min Demo" }}
          secondaryCta={{ href: "/trades-savings-calculator.html", label: "See What Missed Calls Cost You" }}
        />

        <Divider />

        <WhatJaniceHandlesSection
          title={<>Built For The <span className="a">Jobsite.</span></>}
          lead="Janice, your AI employee, answers missed calls, follows up on quotes, and books the job while you stay on the tools."
          rows={[
            {
              title: <>Answer Calls, <span className="a">Hands-Free.</span></>,
              body: "The moment a call goes unanswered, day or night, Janice texts the caller back, finds out what they need, and qualifies the job. That includes after-hours calls like a burst pipe at 9pm, which otherwise go to voicemail.",
              points: [
                "Texts back missed calls in seconds",
                "Captures the job type, address and urgency",
                "Emergencies triaged and booked, even after hours",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Missed Call · Recovered"
                  typingLabel="Texting the caller back"
                  rows={[
                    { avatar: <Phone size={15} strokeWidth={2} />, name: "+1 (604) 555-0192", sub: "Missed at 2:38 PM", pill: { label: "Texted · 16s", tone: "ok" } },
                    { avatar: <Droplets size={15} strokeWidth={2} />, name: "Water heater leak", sub: "Booked for today 4 PM", pill: { label: "Booked", tone: "ok" } },
                  ]}
                />
              ),
            },
            {
              title: <>Follow Up On <span className="a">Quotes.</span></>,
              body: "After you send an estimate, Janice checks in, answers common pricing questions, and asks the customer for a decision. It also reaches out to past customers when they're due for seasonal work, like a furnace tune-up, and asks for a review after a job wraps.",
              points: [
                "Automatic follow-up the day after a quote",
                "Books the job the moment they approve",
                "Seasonal reminders that bring past customers back",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Quotes · This week"
                  rows={[
                    { avatar: <FileText size={15} strokeWidth={2} />, name: "Panel upgrade · $2,400", sub: "Follow-up sent · day 1", pill: { label: "Accepted", tone: "ok" } },
                    { avatar: <FileText size={15} strokeWidth={2} />, name: "Furnace install · $5,800", sub: "Reminder sent · awaiting", pill: { label: "Following up", tone: "warn" } },
                  ]}
                />
              ),
            },
            {
              title: <>Confirm Slots <span className="a">Before They&apos;re Booked.</span></>,
              body: (
                <>
                  On time-sensitive work, Janice <strong>holds</strong> the slot and confirms with your team before it&apos;s locked in, then sends the customer the confirmed time. If the schedule slips, it reschedules them before they&apos;re left waiting.
                </>
              ),
              points: [
                "Slots held for your team's one-tap confirmation",
                "On-my-way and arrival-window texts on autopilot",
                "Running behind? It reschedules before they wait",
              ],
              visual: (
                <DispatchRadar
                  liveLabel="Dispatch · Live"
                  countTo={6}
                  countUnit="jobs today"
                  pinIcon={<Wrench size={16} strokeWidth={2} />}
                  etaLabel="Tech en route · ETA 4–6 PM"
                  jobs={[
                    { icon: <Droplets size={15} strokeWidth={2} />, label: "Water heater · Kitsilano", pill: { label: "Confirm", tone: "new" } },
                    { icon: <Flame size={15} strokeWidth={2} />, label: "Furnace tune-up · Burnaby", pill: { label: "Booked", tone: "booked" } },
                    { icon: <Waves size={15} strokeWidth={2} />, label: "Drain clear · Richmond", pill: { label: "Booked", tone: "booked" } },
                  ]}
                />
              ),
            },
          ]}
        />

        <Divider />

        <WhatItLooksLikeSection
          industry="trades"
          title={<>A Missed Call,<br /><span className="a">Recovered.</span></>}
          lead="Here is what your customer would see. Janice captures the lead, confirms with your team, and books the job, while you stay on the tools."
          steps={[
            { title: "The call comes in mid-job", body: "You are under a sink with both hands full and the phone rings out." },
            { title: "Janice holds a slot and checks with your team", body: "It finds out the problem and how urgent it is, holds the first available window, and confirms with your team before promising the customer a time." },
            { title: "The confirmed job lands on your dashboard", body: "The locked-in job is waiting for you, with the address and details, once you're free." },
          ]}
        />

        <MetricsBandSection
          stats={[
            { to: 16, unit: "s", label: "Average text-back to a missed call" },
            { to: 100, unit: "%", label: "Of calls answered, even off the tools" },
            { to: 40, unit: "%", label: "More quotes won with follow-up" },
            { to: 16, unit: "hrs", label: "Office hours saved every week" },
          ]}
          note="Outcomes we design toward for Vancouver trades and contractors"
        />

        <LiveDashboardSection
          industry="trades"
          title={<>Leads And Jobs, <span className="a">In One View.</span></>}
          lead="Calls recovered, quotes followed up, jobs booked, revenue counted. Click any tab to explore."
        />

        <Divider />

        <FaqSection title={<>Frequently Asked <span className="a">Questions.</span></>} items={FAQ} />

        <GetStartedSection
          title={<>Ready To Stop<br /><span className="a">Missing Calls?</span></>}
          desc="Start with a free 15-minute call. We'll walk through which automations would capture the jobs you're missing right now."
          action={
            <>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="/trades-savings-calculator.html" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> See What Your Missed Calls Are Worth <span className="arr">→</span></a>
            </>
          }
          bullets={["Free discovery call", "Working prototype in about a week", "Vancouver-based"]}
          crossLinks={[
            { href: "/restaurants", icon: <UtensilsCrossed size={14} strokeWidth={2} />, label: "Restaurants" },
            { href: "/salons", icon: <Sparkles size={14} strokeWidth={2} />, label: "Salons & Spas" },
            { href: "/dental", icon: <Stethoscope size={14} strokeWidth={2} />, label: "Dental" },
          ]}
        />
      </div>
    </SiteShell>
  )
}
