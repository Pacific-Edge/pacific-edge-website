import type { Metadata } from "next"
import { Bot, Building2, CheckCircle2, Moon, Phone, RotateCcw, Star, Stethoscope, User } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import { FaqSection, GetStartedSection, MetricsBandSection } from "@/components/subpage-sections"
import { Card, CardGrid, Divider, Hero, PhoneShowcase, Section, SectionHeader } from "@/components/ui/sections"

export const metadata: Metadata = {
  title: { absolute: "AI for Independent & Single-Location Dental Clinics | Pacific Edge AI" },
  description: "For independent dental clinics: Janice answers every call and text, books the appointment, and fills cancellations 24/7, in your voice. One front desk, never overwhelmed. Free 15-min call.",
  alternates: { canonical: "/dental-single-location" },
}

export default function Page() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow={<>For Independent &amp; Single-Location Clinics</>}
          title={<>Never Miss<br /><span className="a">Another Patient.</span></>}
          sub="Janice answers every call and text, books the appointment, and fills cancellations, 24/7, in your clinic's voice."
          actions={
            <>
              <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="#flow" className="btn-dark">See How It Works</a>
            </>
          }
          stats={[
            { value: "25s", label: "To answer a call" },
            { value: "24/7", label: "Always on" },
            { value: "95%", label: "Calls answered" },
          ]}
        />

        <Divider />

        <Section id="problem">
          <SectionHeader
            center
            eyebrow="The Problem"
            title={<>When It&apos;s Just <span className="a">One Phone.</span></>}
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Phone size={22} strokeWidth={1.8} />} title="One busy line loses the patient">
              Already on a call? The new patient hits voicemail and dials the clinic down the street.
            </Card>
            <Card reveal={2} icon={<Moon size={22} strokeWidth={1.8} />} title="After-hours calls vanish">
              Evenings and weekends are prime booking hours your phone simply isn&apos;t open for.
            </Card>
            <Card reveal={3} icon={<User size={22} strokeWidth={1.8} />} title={<>No backup when it&apos;s just you</>}>
              Lunch, a sick day, a packed lobby, and your phone coverage drops to zero.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section id="flow">
          <PhoneShowcase
            eyebrow="How It Works"
            title={<>A Missed Call, <span className="a">Turned Into A Booking.</span></>}
            industry="dental-single-location"
            steps={[
              { title: "The call comes in", body: "Busy line, lunch break, or after hours, it reaches Janice instead of voicemail." },
              { title: <>Janice answers &amp; books</>, body: "She replies in seconds, in your voice, and books the exam or fills an open slot." },
              { title: "It hits your schedule", body: "The booking lands in your tools with reminders queued. You just show up." },
            ]}
          />
        </Section>

        <Divider />

        <Section id="capabilities">
          <SectionHeader
            center
            eyebrow="What You Get"
            title={<>One Front Desk, <span className="a">Never Off Duty.</span></>}
          />
          <CardGrid cols={4}>
            <Card reveal={1} icon={<Phone size={22} strokeWidth={1.8} />} title="Answers calls and texts">
              Calls and texts answered in seconds, day or night.
            </Card>
            <Card reveal={2} icon={<RotateCcw size={22} strokeWidth={1.8} />} title="Fills cancellations">
              Open chairs offered to your waitlist and rebooked.
            </Card>
            <Card reveal={3} icon={<CheckCircle2 size={22} strokeWidth={1.8} />} title="Cuts no-shows">
              Confirmations and recall nudges sent automatically.
            </Card>
            <Card reveal={4} icon={<Star size={22} strokeWidth={1.8} />} title="Grows reviews">
              Happy patients asked, treatment plans followed up.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <MetricsBandSection
          stats={[
            { to: 25, unit: "s", label: "Average answer to a new-patient call" },
            { to: 95, unit: "%", label: "Of calls answered or texted back" },
            { to: 30, unit: "%", label: "Fewer no-shows on average" },
            { to: 20, unit: "hrs", label: "Front-desk hours saved weekly" },
          ]}
        />

        <Divider />

        <FaqSection
          title={<>Quick <span className="a">Answers.</span></>}
          items={[
            { q: "Do I have to change my phone system?", a: "No. Janice works alongside the phone number and scheduling tools your office already uses." },
            { q: "Will it sound like my office?", a: "Yes. We train it on your clinic's tone, and you approve the voice before it ever speaks to a patient." },
            { q: "Is this hard to set up for a small office?", a: "No. We do the setup for you in about a week, then fine-tune it before it goes live. No tech team required." },
            { q: "What does it cost?", a: "The 15-minute discovery call is free, and we scope a simple flat-priced plan around your call volume and chair count." },
          ]}
        />

        <GetStartedSection
          title={<>Stop Missing<br /><span className="a">Patients.</span></>}
          desc="A free 15-minute call. We'll show you which calls you're missing and how Janice catches them."
          action={<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
          crossLinks={[
            { href: "/dental", icon: <Stethoscope size={16} strokeWidth={1.8} />, label: "Dental overview" },
            { href: "/dental-multi-location", icon: <Building2 size={16} strokeWidth={1.8} />, label: <>Multi-location &amp; DSOs</> },
            { href: "/ai-employee", icon: <Bot size={16} strokeWidth={1.8} />, label: "Meet Janice" },
          ]}
        />
      </div>
    </SiteShell>
  )
}
