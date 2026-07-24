import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import DentalInteractive from "@/components/dental/DentalInteractive"
import "@/styles/dental.css"
import { Divider } from "@/components/ui/sections"
import {
  HeroSection,
  WhatJaniceHandlesSection,
  WhatItLooksLikeSection,
  MetricsBandSection,
  LiveDashboardSection,
  FaqSection,
  GetStartedSection,
  PracticeTypesSection,
  PricingTiersSection,
  CapabilitiesChipsSection,
} from "@/components/subpage-sections"
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import { RecallRing } from "@/components/ui/graphics/RecallRing"
import { PracticeTypeMap } from "@/components/ui/graphics/PracticeTypeMap"
import {
  DollarSign,
  BarChart3,
  Phone,
  Stethoscope,
  ClipboardList,
  Star,
  CalendarDays,
  Zap,
  Rocket,
  X,
  RotateCcw,
  CheckCircle2,
  Armchair,
  MessageCircle,
  CreditCard,
  Sprout,
  Globe,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react"

const CAL = "https://cal.com/pacificedge"

const CAPABILITIES = [
  { icon: <Armchair size={15} strokeWidth={2} />, label: "Fills cancelled chairs" },
  { icon: <Phone size={15} strokeWidth={2} />, label: "Missed-call text-back", soon: true },
  { icon: <MessageCircle size={15} strokeWidth={2} />, label: "24/7 text replies" },
  { icon: <Stethoscope size={15} strokeWidth={2} />, label: "New-patient capture" },
  { icon: <RotateCcw size={15} strokeWidth={2} />, label: "Hygiene recalls" },
  { icon: <CheckCircle2 size={15} strokeWidth={2} />, label: "Reminders & confirms" },
  { icon: <ClipboardList size={15} strokeWidth={2} />, label: "Treatment follow-up" },
  { icon: <Star size={15} strokeWidth={2} />, label: "Review engine" },
  { icon: <CreditCard size={15} strokeWidth={2} />, label: "Payment links", soon: true },
  { icon: <Sprout size={15} strokeWidth={2} />, label: "Reactivation" },
  { icon: <Globe size={15} strokeWidth={2} />, label: "Speaks 5 languages" },
  { icon: <BarChart3 size={15} strokeWidth={2} />, label: "Monthly ROI report" },
]

const FAQ = [
  { q: "Is patient information kept private?", a: "Privacy comes first. The AI handles scheduling and reminders without exposing sensitive health details, and you stay in control of anything that needs a human. We build to respect Canadian privacy expectations." },
  { q: "Will it sound robotic to my patients?", a: "No. We train it on your clinic's tone so it feels calm and professional, like your own front desk. You approve the voice before it speaks to a patient." },
  { q: "Does it work with our practice management software?", a: "Yes. It works alongside the phone number and scheduling tools your office already uses, so bookings and recalls land where your team already works." },
  { q: "How long until it is live?", a: "Usually about a week from our first call. We set it up, your team tests it, and we fine-tune it before it ever speaks to a patient." },
  { q: "How much does it cost?", a: "It depends on what you automate. The 15-minute discovery call is free, and we scope a flat-priced plan around your call volume and chair count." },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Dental & Health Clinics | Pacific Edge AI" },
  description:
    "AI automation for Vancouver dental and health clinics. Answer every new-patient call, confirm appointments, book recalls, and cut no-shows. Privacy-first, no tech team needed. Free 15-min call.",
  alternates: { canonical: "/dental" },
}

export default function DentalPage() {
  return (
    <SiteShell>
      <DentalInteractive />
      <div className="pe-sub">
        <HeroSection
          title={
            <>
              Fill The Schedule.
              <br />
              <span className="a">Reduce No-Shows.</span>
            </>
          }
          sub="Janice answers new-patient calls, confirms appointments, and books recalls. Custom AI built for dental offices, orthodontists, and health clinics across Greater Vancouver, from the front desk to follow-up."
          primaryCta={{ href: CAL, label: "Book a Free 15-Min Demo" }}
          secondaryCta={{ href: "/dental-pricing", label: <><DollarSign size={16} strokeWidth={2} /> See Pricing &amp; Plans</> }}
        />

        <Divider />

        <PracticeTypesSection
          title={<>Built For Any Type Of <span className="a">Practice.</span></>}
          lead="Janice adapts to how your practice runs, from a single front desk to a multi-location group."
          cards={[
            {
              visual: <PracticeTypeMap variant="single" />,
              title: "Single-Location Clinics",
              points: ["Reduce front-desk stress", "Capture missed calls", <>Handle after-hours &amp; overflow</>],
              href: "/dental-single-location",
            },
            {
              visual: <PracticeTypeMap variant="multi" />,
              title: <>Multi-Location &amp; DSOs</>,
              points: ["Standardize workflows across sites", "Centralize reporting", "Grow revenue across locations"],
              href: "/dental-multi-location",
            },
          ]}
          calculatorHref="/dental-savings-calculator"
          calculatorLabel={<><BarChart3 size={16} strokeWidth={2} /> Estimate What Filling Them Is Worth <span className="arr">→</span></>}
        />

        <Divider />

        <PricingTiersSection
          eyebrow="Pricing"
          title={<>Pricing &amp; <span className="a">Plans.</span></>}
          lead="Start with the gaps that cost you the most, then add more as your practice needs it. Flat-priced, month-to-month after your term, first month free."
          tiers={[
            {
              badge: "PART-TIME",
              icon: <CalendarDays size={32} strokeWidth={1.5} />,
              title: "Covers what you miss",
              sub: "Janice answers texts and refills cancelled chairs, around the clock.",
              features: [
                <>24/7 text replies in your clinic&apos;s voice</>,
                "Cancellation recovery",
                <>Appointment reminders &amp; confirmations</>,
                "Monthly ROI report",
              ],
              fromPrice: "$749",
            },
            {
              badge: "FULL-TIME",
              featured: true,
              icon: <Zap size={32} strokeWidth={1.5} />,
              title: "Books your schedule weeks ahead",
              sub: "Janice books straight into your schedule and keeps it full, weeks out.",
              features: [
                "Everything in Part-Time",
                <>Books &amp; reschedules in your software</>,
                <>Hygiene recalls &amp; treatment follow-up</>,
                <>Patient portal, intake forms &amp; payments</>,
              ],
              fromPrice: "$1,149",
            },
            {
              badge: "PARTNER",
              icon: <Rocket size={32} strokeWidth={1.5} />,
              title: <>Fills chairs &amp; grows the book</>,
              sub: "Adds marketing campaigns on top of the full front desk, for practices focused on growth.",
              features: [
                "Everything in Full-Time",
                <>Reactivation &amp; referral campaigns</>,
                <>Benefits-expiry &amp; win-back waves</>,
                "All add-ons included, plus quarterly strategy",
              ],
              fromPrice: "$1,999",
            },
          ]}
          ctaHref="/dental-pricing"
          ctaLabel={<>See Full Plan Details <span className="arr">→</span></>}
          note="Full feature-by-feature comparison · Priced in CAD + GST"
        />

        <Divider />

        <WhatJaniceHandlesSection
          title={<>Built For A <span className="a">Full Chair.</span></>}
          lead="Janice, your AI employee, turns missed calls, empty chairs, and slipped recalls into booked, confirmed visits, and frees up your front desk's time."
          rows={[
            {
              title: <>Fill <span className="a">Cancelled Chairs.</span></>,
              body: "When a patient cancels, that block of clinical time is empty until it's filled. Janice offers the open slot to your waitlist and rebooks it, often within minutes, while reminders keep no-shows low in the first place.",
              points: [
                "Cancellations offered to your waitlist automatically",
                "Rebooks the first patient to say yes",
                "Reminders that cut no-shows and late cancels",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Cancellation · Refilled"
                  rows={[
                    { avatar: <X size={15} strokeWidth={2} />, name: "2:00 PM cancelled", sub: "Offered to your waitlist", pill: { label: "Open", tone: "warn" } },
                    { avatar: <RotateCcw size={15} strokeWidth={2} />, name: "Rebooked in 12 min", sub: "Filled from waitlist", pill: { label: "Refilled", tone: "ok" } },
                  ]}
                />
              ),
            },
            {
              title: <>Answer <span className="a">New-Patient Calls.</span></>,
              body: "When the front desk is on two lines, a new patient can get voicemail and call another clinic instead. Janice answers or texts back within seconds, day or night, covers basics like insurance and reason for visit, and books the first exam.",
              points: [
                "Answers or texts back missed calls in seconds",
                "Confirms insurance basics and reason for visit",
                "Books the first exam into your schedule",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="New Patient · Recovered"
                  rows={[
                    { avatar: <Phone size={15} strokeWidth={2} />, name: "+1 (604) 555-0173", sub: "Missed at 9:12 AM", pill: { label: "Texted · 21s", tone: "ok" } },
                    { avatar: <Stethoscope size={15} strokeWidth={2} />, name: "New patient exam", sub: "Tomorrow 10:40 AM", pill: { label: "Booked", tone: "ok" } },
                  ]}
                />
              ),
            },
            {
              title: <>Recalls &amp; Reminders, <span className="a">Handled Automatically.</span></>,
              body: "Patients due for a cleaning don't always get a reminder and drift to another practice. Janice tracks who is overdue, reaches out in your practice's voice with an open time, and keeps hygiene chairs filled weeks ahead, while confirmations cut no-shows on what's already booked.",
              points: [
                "Overdue patients spotted and gently chased",
                "Recall reminders that rebook hygiene visits",
                "Confirmation and reminder texts on autopilot",
              ],
              visual: (
                <RecallRing
                  liveLabel="Recalls · This week"
                  done={6}
                  total={8}
                  caption="Patients due for a recall, quietly rebooked before they lapse to another practice."
                  rows={[
                    { label: "Sarah G. · 6-mo cleaning", pill: "Rebooked" },
                    { label: "Marcus L. · check-up", pill: "Rebooked" },
                    { label: "Aanya P. · hygiene", pill: "Rebooked" },
                  ]}
                />
              ),
            },
            {
              title: <>Follow Up On <span className="a">Treatment Plans.</span></>,
              body: "A patient agrees to a crown, leaves without scheduling it, and it gets forgotten. Janice sends a gentle, professional reminder to book it, and asks satisfied patients for a review.",
              points: [
                "Gentle nudges to book recommended treatment",
                "Review requests sent to happy patients",
                "You stay in control of anything sensitive",
              ],
              visual: (
                <MockFeedCard
                  live
                  headTitle="Treatment · Follow-up"
                  rows={[
                    { avatar: <ClipboardList size={15} strokeWidth={2} />, name: "Crown · recommended", sub: "Reminder sent · booked", pill: { label: "Booked", tone: "ok" } },
                    { avatar: <Star size={15} strokeWidth={2} />, name: "Patient since 2019", sub: "Review request sent", pill: { label: "5-star", tone: "ok" } },
                  ]}
                />
              ),
            },
          ]}
        />

        <CapabilitiesChipsSection
          title={<>One Employee. <span className="a">The Whole Front Desk.</span></>}
          lead="From the first missed call to the follow-up that fills next month's schedule, Janice covers the work that keeps chairs full."
          capabilities={CAPABILITIES}
        />

        <Divider />

        <WhatItLooksLikeSection
          industry="dental"
          title={<>A New Patient,<br /><span className="a">Booked.</span></>}
          lead="Here is a flow your patients would see. A new caller who would have hit voicemail becomes a booked exam instead."
          steps={[
            { title: "A new patient calls in", body: "The front desk is already on two lines. The call would normally roll to voicemail and be lost." },
            { title: "Your AI replies and books an exam", body: "It answers the basics, offers the first open exam time, and confirms the appointment, calmly and professionally." },
            { title: "It lands on your schedule", body: "The new patient appears in your system with reminders and intake already queued for your team." },
          ]}
        />

        <MetricsBandSection
          stats={[
            { to: 21, unit: "s", label: "Average answer to a new-patient call" },
            { to: 95, unit: "%", label: "Of calls answered or texted back" },
            { to: 30, unit: "%", label: "Fewer no-shows on average" },
            { to: 20, unit: "hrs", label: "Front-desk hours saved weekly" },
          ]}
          note="Outcomes we design toward for Vancouver dental and health clinics"
        />

        <LiveDashboardSection
          industry="dental"
          title={<>Your Whole Front Desk, <span className="a">In One View.</span></>}
          lead="New-patient calls answered, no-shows prevented, recalls booked, treatment followed up. Click any tab to explore."
        />

        <Divider />

        <FaqSection title={<>Clinic Owners <span className="a">Ask Us.</span></>} items={FAQ} />

        <GetStartedSection
          title={<>Ready To Fill<br /><span className="a">Your Schedule?</span></>}
          desc="Start with a free 15-minute call. We'll walk through which automations fit your practice and what they'd save your front desk. No pitch, no obligation."
          action={
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
          }
          bullets={["Free discovery call", "Working prototype in about a week", "Vancouver-based"]}
          crossLinks={[
            { href: "/restaurants", icon: <UtensilsCrossed size={14} strokeWidth={2} />, label: "Restaurants" },
            { href: "/salons", icon: <Sparkles size={14} strokeWidth={2} />, label: "Salons & Spas" },
          ]}
        />
      </div>
    </SiteShell>
  )
}
