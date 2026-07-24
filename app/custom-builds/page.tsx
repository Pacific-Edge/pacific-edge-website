import type { Metadata } from "next"
import {
  BarChart3,
  CalendarDays,
  Clock,
  DoorOpen,
  FileStack,
  Folder,
  Link2,
  Puzzle,
  Settings,
} from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import { FaqSection, GetStartedSection, ProcessStepsSection } from "@/components/subpage-sections"
import { Card, CardGrid, Divider, Hero, Section, SectionHeader } from "@/components/ui/sections"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "Custom Builds · Bespoke Software for Your Business | Pacific Edge AI" },
  description:
    "When you need something Janice doesn't cover, we build it. Pacific Edge AI designs and builds custom software around how your business actually runs: tailored CRMs, internal dashboards, and automations. Scoped and quoted per project. Vancouver, BC.",
  alternates: { canonical: "/custom-builds" },
}

export default function CustomBuildsPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow="Custom Builds · Software Built Around You"
          title={
            <>
              When Janice Doesn&apos;t Cover It,<br />
              <span className="a">We Build It.</span>
            </>
          }
          sub={
            <>
              Janice runs the front desk: calls, texts, bookings, no-show follow-ups, reviews. For most local
              businesses that&apos;s the whole job. But sometimes the thing eating your week is specific to how{" "}
              <strong>you</strong> run. That&apos;s a Custom Build.
            </>
          }
          actions={
            <>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="#what-we-build" className="btn-dark">See What We Build ↓</a>
            </>
          }
          trust={<>Scoped &amp; quoted per project · No templates, no bloat · Vancouver-based</>}
        />

        <Divider />

        <Section id="what-we-build">
          <SectionHeader
            eyebrow="What Is A Custom Build?"
            title={<>Just The Thing You <span className="a">Actually Need.</span></>}
            lead="A booking flow nobody else has. An internal tool your team keeps wishing existed. A piece of software no off-the-shelf product actually sells. We sit down, learn exactly how your business works, and build software that fits it: a tailored CRM, an internal dashboard, an automation that kills the one task that keeps stealing your time."
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Folder size={22} strokeWidth={1.8} />} title="Tailored CRM">
              A CRM built around your pipeline and your terminology, not a fixed template.
            </Card>
            <Card reveal={2} icon={<BarChart3 size={22} strokeWidth={1.8} />} title="Internal dashboards">
              One screen that pulls your numbers together instead of tracking them across separate spreadsheets.
            </Card>
            <Card reveal={3} icon={<Settings size={22} strokeWidth={1.8} />} title="Workflow automations">
              The repetitive task on your team&apos;s plate, automated from start to finish.
            </Card>
            <Card reveal={1} icon={<CalendarDays size={22} strokeWidth={1.8} />} title="Custom booking flows">
              A booking or intake flow built around how your business actually takes in work.
            </Card>
            <Card reveal={2} icon={<Link2 size={22} strokeWidth={1.8} />} title={<>Tool integrations</>}>
              Two systems that don&apos;t talk to each other, connected and kept in sync.
            </Card>
            <Card reveal={3} icon={<DoorOpen size={22} strokeWidth={1.8} />} title={<>Client &amp; team portals</>}>
              A simple, branded place for clients or staff to do the one thing they need to do.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section>
          <SectionHeader
            eyebrow="When It's Worth It"
            title={<>When A Custom Build <span className="a">Makes Sense.</span></>}
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Clock size={22} strokeWidth={1.8} />} title="A repetitive manual task">
              If a task is repetitive, rule-based, and takes real time, it can usually be automated.
            </Card>
            <Card reveal={2} icon={<Puzzle size={22} strokeWidth={1.8} />} title={<>Off-the-shelf tools don&apos;t fit</>}>
              If you&apos;ve had to adjust your process to fit a tool, we build software that fits your process instead.
            </Card>
            <Card reveal={3} icon={<FileStack size={22} strokeWidth={1.8} />} title="Records split across tools">
              If your records are split across tabs and inboxes, one purpose-built tool usually pays for itself fast.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <ProcessStepsSection
          center
          eyebrow="How It Works"
          title={<>From Idea To <span className="a">Working Software.</span></>}
          lead="You see progress in weeks, and you own what we build."
          steps={[
            { title: "We learn your business", body: <>We map how you actually work, where the time goes, and what&apos;s genuinely worth building.</> },
            { title: <>We scope &amp; quote</>, body: "You get a clear plan, a fixed scope, and a per-project price before any work starts." },
            { title: <>We build &amp; iterate</>, body: "We build in the open, show you working versions early, and adjust until it fits." },
            { title: "We support it", body: <>It&apos;s yours. We stay on to maintain, tweak, and grow it as your business changes.</> },
          ]}
        />

        <Divider />

        <FaqSection
          title={<>Before You <span className="a">Ask Us.</span></>}
          items={[
            { q: "How is this different from Janice?", a: "Janice is our ready-to-go AI front desk that answers calls and texts, books, and follows up. A Custom Build is bespoke software we design and build around a need Janice doesn't cover, like a tailored CRM or an internal tool." },
            { q: "What does it cost?", a: "Every build is scoped and quoted per project after a free call. No templates, no surprise bloat. You approve the plan and the price before we start." },
            { q: "How long does it take?", a: "It depends on scope. We break the work into small, working milestones so you see real progress in weeks, not months, and can steer as we go." },
            { q: "Do we own what you build?", a: "Yes. It's built for your business and it belongs to you. We stay on for support and improvements only if you want us to." },
            { q: "Can it work with the tools we already use?", a: "That's usually the point. A big part of what we do is connecting the systems you already run so they finally talk to each other." },
          ]}
        />

        <GetStartedSection
          title={<>Got Something<br /><span className="a">Specific In Mind?</span></>}
          desc="Tell us about it on a free 15-minute call. We'll tell you whether it's a fit, roughly what it takes, and where to start."
          action={<a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
          bullets={["Free scoping call", "Fixed per-project price", "You own what we build"]}
        />
      </div>
    </SiteShell>
  )
}
