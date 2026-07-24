import type { Metadata } from "next"
import { BarChart3, Bot, Building, EyeOff, Globe, MapPin, MessageCircle, Moon, Phone, Stethoscope, Wrench } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import { FaqSection, GetStartedSection, MetricsBandSection } from "@/components/subpage-sections"
import { Card, CardGrid, Divider, Hero, Section, SectionHeader } from "@/components/ui/sections"
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import { CheckMark } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: { absolute: "AI for Multi-Location Dental Groups & DSOs | Pacific Edge AI" },
  description: "For multi-location dental groups and DSOs: one consistent front desk across every site. Janice answers, books, and recovers missed calls at every location, with centralized reporting. Free 15-min call.",
  alternates: { canonical: "/dental-multi-location" },
}

export default function Page() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow={<>For Multi-Location Groups &amp; DSOs</>}
          title={<>Consistent Answers.<br /><span className="a">At Every Location.</span></>}
          sub="One consistent front desk across every site, Janice answers, books, and recovers missed calls, with everything rolled into a single dashboard."
          actions={
            <>
              <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="#flow" className="btn-dark">See How It Works</a>
            </>
          }
          stats={[
            { value: "1", label: "Standard, every site" },
            { value: "24/7", label: "At all locations" },
            { value: "1", label: "Dashboard for the group" },
          ]}
        />

        <Divider />

        <Section id="problem">
          <SectionHeader
            center
            eyebrow="The Problem"
            title={<>Every Location Is <span className="a">A Different Front Desk.</span></>}
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Globe size={22} strokeWidth={1.8} />} title="Different at every site">
              One location books every call, another lets them ring to voicemail. Service depends on who picks up.
            </Card>
            <Card reveal={2} icon={<EyeOff size={22} strokeWidth={1.8} />} title="No central visibility">
              You can&apos;t see which site is dropping calls until the month-end report, after those patients have already booked elsewhere.
            </Card>
            <Card reveal={3} icon={<Moon size={22} strokeWidth={1.8} />} title="After-hours gaps, multiplied">
              Each location&apos;s nights and weekends go unanswered. Across a multi-site group, that adds up to a lot of missed bookings.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section id="flow">
          <div className="pe-show">
            <div className="pe-show-text">
              <div className="pe-eyebrow reveal">How It Works</div>
              <h2 className="pe-sechead-title reveal d1">The Same Setup, <span className="a">Rolled Out To Every Site.</span></h2>
              <div className="pe-show-steps">
                <div className="pe-show-step reveal d2">
                  <div className="pe-show-step-n">1</div>
                  <div>
                    <h4>Set one standard</h4>
                    <p>We capture how your best location answers and books, and turn it into a single playbook.</p>
                  </div>
                </div>
                <div className="pe-show-step reveal d3">
                  <div className="pe-show-step-n">2</div>
                  <div>
                    <h4>Roll out to every site</h4>
                    <p>That standard deploys to each location&apos;s existing phone and scheduling, tuned to local details.</p>
                  </div>
                </div>
                <div className="pe-show-step reveal d4">
                  <div className="pe-show-step-n">3</div>
                  <div>
                    <h4>See it all in one place</h4>
                    <p>Calls, bookings, and recovered calls roll up into one dashboard, with drill-down by location.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal d2">
              <MockFeedCard
                headTitle={<>Janice &middot; All Locations</>}
                live
                rows={[
                  { avatar: <MapPin size={15} strokeWidth={2} />, name: "Burnaby", sub: "", pill: { label: <>Booked <CheckMark size={11} strokeWidth={3} /></>, tone: "ok" } },
                  { avatar: <MapPin size={15} strokeWidth={2} />, name: "Kitsilano", sub: "", pill: { label: <>Recovered <CheckMark size={11} strokeWidth={3} /></>, tone: "ok" } },
                  { avatar: <MapPin size={15} strokeWidth={2} />, name: "Richmond", sub: "", pill: { label: <>Rebooked <CheckMark size={11} strokeWidth={3} /></>, tone: "ok" } },
                ]}
              />
              <div className="pe-mock-caption">
                <span className="mock-pill ok"><CheckMark size={11} strokeWidth={3} /> One standard &middot; every site</span>
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        <Section id="capabilities">
          <SectionHeader
            center
            eyebrow="What You Get"
            title={<>The Same Standard, <span className="a">At Every Site.</span></>}
          />
          <CardGrid cols={4}>
            <Card reveal={1} icon={<MessageCircle size={22} strokeWidth={1.8} />} title="Consistent answers">
              Callers get the same response no matter which location they reach.
            </Card>
            <Card reveal={2} icon={<Phone size={22} strokeWidth={1.8} />} title="Missed-call recovery">
              Missed calls caught &amp; texted back at each location.
            </Card>
            <Card reveal={3} icon={<BarChart3 size={22} strokeWidth={1.8} />} title="Central reporting">
              One dashboard, group roll-up, per-site drill-down.
            </Card>
            <Card reveal={4} icon={<Wrench size={22} strokeWidth={1.8} />} title="Consistent service">
              Service no longer depends on who&apos;s working that day.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <MetricsBandSection
          stats={[
            { to: 95, unit: "%", label: "Of calls answered at every site" },
            { to: 30, unit: "%", label: "Fewer no-shows across the group" },
            { to: 100, unit: "+", label: "Calls recovered per location monthly" },
            { to: 1, label: "Dashboard for all your locations" },
          ]}
        />

        <Divider />

        <FaqSection
          title={<>Quick <span className="a">Answers.</span></>}
          items={[
            { q: "Can you roll one setup out to every location?", a: "Yes. We build one standard once, then deploy it to each location, so every site answers, books, and follows up the same way, with room for location-specific details." },
            { q: "Do we get reporting per location?", a: "Yes. One dashboard rolls up across the group with drill-down into each location, so you can compare call volume, bookings, and recovered calls site by site." },
            { q: "Will it work with the software each office uses?", a: "Yes. Janice works alongside the phone numbers and scheduling tools each location already has, so bookings land where each team works." },
            { q: "How is access and privacy handled across sites?", a: "Each location's data stays scoped to that location, with group-level visibility for owners, and sensitive health details stay out of automated messages." },
          ]}
        />

        <GetStartedSection
          title={<>Consistent Answers.<br /><span className="a">At Every Location.</span></>}
          desc="A free 15-minute call. We'll look at where each location is missing calls and what one standard would recover."
          action={<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
          crossLinks={[
            { href: "/dental", icon: <Stethoscope size={16} strokeWidth={1.8} />, label: "Dental overview" },
            { href: "/dental-single-location", icon: <Building size={16} strokeWidth={1.8} />, label: "Single-location clinics" },
            { href: "/ai-employee", icon: <Bot size={16} strokeWidth={1.8} />, label: "Meet Janice" },
          ]}
        />
      </div>
    </SiteShell>
  )
}
