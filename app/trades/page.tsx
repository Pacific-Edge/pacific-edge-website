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
              Win The Job.
              <br />
              <span className="a">Even On A Ladder.</span>
            </>
          }
          sub="Every call answered while your hands are full, every quote followed up, every job booked. Custom AI built for plumbers, electricians, HVAC, roofers, and contractors across the Lower Mainland."
          primaryCta={{ href: CAL, label: "Book a Free 15-Min Demo" }}
          secondaryCta={{ href: "/trades-savings-calculator.html", label: "See What Missed Calls Cost You" }}
        />

        <Divider />

        <WhatJaniceHandlesSection
          title={<>Built For The <span className="a">Jobsite.</span></>}
          lead="Missed calls, cold quotes, scheduling chaos. Janice, your AI employee, captures the lead, follows up, and books the job while you stay on the tools."
          rows={[
            {
              title: <>Answer Every Call, <span className="a">Hands-Free.</span></>,
              body: "Your hands are full, the phone rings out, and the homeowner just dials the next number on the list. Now the second a call goes unanswered, day or night, your AI texts them back, finds out what they need, and qualifies the job. Even the 9pm burst pipe, your best-margin call of the week, gets answered instead of dying in a voicemail box.",
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
              title: <>Follow Up On <span className="a">Every Quote.</span></>,
              body: "You price a job, send the estimate, and never hear back, so work you already quoted quietly goes to someone else. Your AI checks in after every quote, answers the common pricing questions, and nudges the customer to say yes. And when last year's furnace customer is due for a tune-up, it reaches out before they forget your company name. After a job wraps, it asks the happy customer for the review that wins you the next one.",
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
              title: <>Never Promise A Slot <span className="a">You Can&apos;t Keep.</span></>,
              body: (
                <>
                  Jobs penciled into three different places end in double-books and a customer waiting on a tech who can&apos;t make it. So on time-sensitive work, your AI <strong>holds</strong> the slot and confirms with your team before it&apos;s locked in, then sends the customer the real time. If the day slips, it reschedules them before anyone&apos;s left waiting, and your whole day stays routed without a wasted truck roll.
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
          title={<>A Missed Call,<br /><span className="a">Won.</span></>}
          lead="Here is a flow your customers would see. You stay on the job while the lead gets captured, confirmed with your team, and booked, no slot promised that you can't keep."
          steps={[
            { title: "The call comes in mid-job", body: "You are under a sink with both hands full. The phone rings out, like it does most afternoons." },
            { title: "It holds a slot and checks with your team", body: "It finds out the problem and how urgent it is, holds the first real window, and confirms with your team before promising the customer a time." },
            { title: "The confirmed job lands on your dashboard", body: "You finish what you are doing and the locked-in job is already there, with the address and details." },
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
          title={<>Every Lead And Job, <span className="a">In One View.</span></>}
          lead="Calls recovered, quotes followed up, jobs booked, revenue counted. Click any tab to explore."
        />

        <Divider />

        <FaqSection title={<>Contractors <span className="a">Ask Us.</span></>} items={FAQ} />

        <GetStartedSection
          title={<>Ready To Win<br /><span className="a">Every Lead?</span></>}
          desc="Start with a free 15-minute call. We will show you exactly which automations would capture the most jobs you are missing right now. No pitch, no obligation."
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
