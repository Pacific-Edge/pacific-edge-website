import type { Metadata } from "next"
import {
  Blocks,
  Brain,
  Building2,
  Coins,
  Compass,
  Gauge,
  Handshake,
  Leaf,
  PenLine,
  Recycle,
  Repeat,
  Rocket,
  Scale,
  Scissors,
  Search,
  ShieldAlert,
  ShieldOff,
  Target,
  TrendingUp,
  Unlock,
  User,
} from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import { FaqSection, GetStartedSection, ProcessStepsSection } from "@/components/subpage-sections"
import { Card, CardGrid, Divider, Hero, Section, SectionHeader } from "@/components/ui/sections"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI Training for Corporations & SMBs | Pacific Edge AI" },
  description:
    "Hands-on AI training for corporations and small businesses in Vancouver. Get your team using AI to its full potential without wasting tokens or leaking data. Prompting, workflows, governance, security, and cost control. PIPEDA & BC PIPA aware.",
  alternates: { canonical: "/ai-training" },
}

export default function AiTrainingPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow={<>AI Training · Corporations &amp; SMBs</>}
          title={
            <>
              Hands-On AI Training<br />
              <span className="a">For Your Whole Team.</span>
            </>
          }
          sub="Your people are already using AI, whether it's sanctioned or not. We turn scattered, trial-and-error use into a real capability: the whole team getting more done, spending less per result, and keeping your data safe while they do it."
          actions={
            <>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <a href="#curriculum" className="btn-dark">See What We Cover ↓</a>
            </>
          }
          sublinks={<>On-site or remote · Vendor-neutral · Built around PIPEDA &amp; BC PIPA</>}
          stats={[
            { value: <>75<span className="u">%</span></>, label: "of knowledge workers already use AI at work*" },
            { value: <>78<span className="u">%</span></>, label: "bring their own AI tools, often unmanaged*" },
            { value: "1", label: "standard, trained across your whole team" },
            { value: "0", label: "confidential data sent to models that train on it" },
          ]}
          trust="* Microsoft Work Trend Index, 2024"
        />

        <Divider />

        <Section>
          <SectionHeader
            eyebrow="Why It Matters"
            title={<>Three Ways Teams <span className="a">Get AI Wrong.</span></>}
            lead={<>Most companies aren&apos;t short on AI enthusiasm. They&apos;re short on the habits that make it pay off safely. We fix all three.</>}
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Brain size={22} strokeWidth={1.8} />} title="They barely scratch the surface">
              People use AI for basic lookups and skip the workflows that save real time. We show your team what it can do on your actual work.
            </Card>
            <Card reveal={2} icon={<Coins size={22} strokeWidth={1.8} />} title="They quietly waste money">
              Overpowered models for tiny tasks, bloated prompts, re-sending the same context. Small habits that add up to a big bill.
            </Card>
            <Card reveal={3} icon={<Unlock size={22} strokeWidth={1.8} />} title="They leak data without knowing">
              Confidential info pasted into personal accounts on plans that can train on it. That&apos;s convenient, and it&apos;s a real exposure.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section id="curriculum">
          <SectionHeader
            center
            eyebrow="What We Cover"
            title={<>A Curriculum Built On <span className="a">Your Real Work.</span></>}
            lead="No generic slide decks. We train on the tasks your team actually does, so the skills stick the same afternoon."
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Compass size={22} strokeWidth={1.8} />} title={<>Foundations &amp; judgment</>}>
              What today&apos;s AI is genuinely good at, and where it quietly makes things up, so your team trusts it in the right places.
            </Card>
            <Card reveal={2} icon={<PenLine size={22} strokeWidth={1.8} />} title="Prompting that works">
              Repeatable prompts and templates for your real tasks, so results are good on the first try, not the fifth.
            </Card>
            <Card reveal={3} icon={<Target size={22} strokeWidth={1.8} />} title="The right tool for the job">
              Which model and which tool for which task, so you stop overpaying for simple work and underusing AI for hard work.
            </Card>
            <Card reveal={1} icon={<Repeat size={22} strokeWidth={1.8} />} title="Into your workflow">
              We embed AI into the tools and processes you already use, so it becomes part of daily work instead of a tool people try once and drop.
            </Card>
            <Card reveal={2} icon={<Handshake size={22} strokeWidth={1.8} />} title="Your own assistants">
              Build internal assistants loaded with your policies, docs, and tone of voice, ready for the whole team to use.
            </Card>
            <Card reveal={3} icon={<TrendingUp size={22} strokeWidth={1.8} />} title="Measuring the payoff">
              Track adoption and time saved so you can prove the value and double down on what actually works.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section id="security">
          <SectionHeader
            eyebrow="Security &amp; Privacy"
            title={<>Your Data <span className="a">Stays Yours.</span></>}
            lead={<>Using AI well and keeping data safe aren&apos;t a trade-off. We set up the guardrails first, so your team can move fast without putting the business at risk.</>}
          />
          <CardGrid cols={2}>
            <Card reveal={1} icon={<User size={22} strokeWidth={1.8} />} title={<>We end &ldquo;shadow AI&rdquo;</>}>
              Most teams already use AI on personal accounts you can&apos;t see. We bring it into the light with a short list of approved, secure tools everyone actually uses.
            </Card>
            <Card reveal={2} icon={<ShieldOff size={22} strokeWidth={1.8} />} title="No training on your data">
              Consumer AI plans can learn from what your team types in. We move you onto enterprise and zero-retention setups that don&apos;t, and show your team the difference.
            </Card>
            <Card reveal={3} icon={<Leaf size={22} strokeWidth={1.8} />} title="Built around your compliance">
              We work with Canadian privacy expectations, PIPEDA and BC PIPA, plus GDPR and SOC 2 where they apply, with access controls and audit trails.
            </Card>
            <Card reveal={4} icon={<ShieldAlert size={22} strokeWidth={1.8} />} title="Guardrails against mistakes">
              Clear rules and redaction habits so client PII, financials, and health info never leave the building in a prompt by accident.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section id="cost">
          <SectionHeader
            eyebrow="Cost Control"
            title={<>Stop Burning <span className="a">Tokens.</span></>}
            lead="Most AI bills are bigger than they need to be, not because teams use AI too much, but because they use it inefficiently. A few habits cut the cost of every result."
          />
          <CardGrid cols={3}>
            <Card reveal={1} icon={<Scale size={22} strokeWidth={1.8} />} title="Right-size the model">
              A top-tier model for a one-line task costs more than the task is worth. We match the model to the job.
            </Card>
            <Card reveal={2} icon={<Scissors size={22} strokeWidth={1.8} />} title="Trim the prompt">
              Bloated prompts and dumped documents burn tokens for no gain. Tighter inputs, same or better output.
            </Card>
            <Card reveal={3} icon={<Recycle size={22} strokeWidth={1.8} />} title={<>Cache &amp; reuse</>}>
              Prompt caching and reusable templates mean you stop paying to re-send the same context again and again.
            </Card>
            <Card reveal={1} icon={<Search size={22} strokeWidth={1.8} />} title={<>Retrieve, don&apos;t dump</>}>
              Pull only the relevant passage from your documents instead of pasting the whole manual into every request.
            </Card>
            <Card reveal={2} icon={<Gauge size={22} strokeWidth={1.8} />} title="Watch the meter">
              Usage dashboards and budgets so one runaway workflow can&apos;t quietly rack up a surprise bill.
            </Card>
            <Card reveal={3} icon={<Blocks size={22} strokeWidth={1.8} />} title="Build it once">
              Turn your best one-off prompts into shared, tested templates so the whole team gets the efficient version.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <Section>
          <SectionHeader
            center
            eyebrow="Who It's For"
            title={<>Right-Sized For <span className="a">Your Team.</span></>}
          />
          <CardGrid cols={2}>
            <Card
              reveal={1}
              icon={<Building2 size={22} strokeWidth={1.8} />}
              title="For Corporations"
              points={[
                "Role-specific training at scale",
                <>Security review &amp; admin controls</>,
                "A company-wide acceptable-use policy",
                <>Adoption tracking &amp; reporting</>,
              ]}
            >
              Roll one standard across every team, with the governance and controls a bigger organization needs.
            </Card>
            <Card
              reveal={2}
              icon={<Rocket size={22} strokeWidth={1.8} />}
              title="For SMBs"
              points={[
                "Practical, no-jargon sessions",
                "Templates your team keeps using",
                "Safe setup on a small budget",
                "More output without more headcount",
              ]}
            >
              A lean team that uses AI well gets more done without adding headcount.
            </Card>
          </CardGrid>
        </Section>

        <Divider />

        <ProcessStepsSection
          center
          eyebrow="How It Works"
          title={<>A Program Built To <span className="a">Stick.</span></>}
          steps={[
            { title: "Assess", body: <>We look at how your team works today and where AI will actually save time, and where it won&apos;t.</> },
            { title: "Train", body: "Hands-on sessions on your real tasks, not generic slides. Everyone leaves able to use it." },
            { title: "Set guardrails", body: <>Approved tools, a plain-English policy, and secure settings so it&apos;s safe from day one.</> },
            { title: "Sustain", body: "Templates, playbooks, and check-ins so adoption sticks instead of fizzling after week one." },
          ]}
        />

        <Divider />

        <FaqSection
          title={<>Before You <span className="a">Ask Us.</span></>}
          items={[
            { q: "Is this for beginners or advanced teams?", a: "Both. We meet your team where they are, from first-time users who are nervous about it to people ready to build their own internal assistants." },
            { q: "Which AI tools do you teach?", a: "The ones that fit your work, including ChatGPT, Claude, and Microsoft Copilot. We're vendor-neutral and honest about which tool is best for each job." },
            { q: "Will our data actually be safe?", a: "That's a core part of the training, not an afterthought. We set up enterprise, no-training configurations and a clear policy so confidential data stays private, with Canadian privacy law in mind." },
            { q: "On-site or remote?", a: "Either. We run sessions in person or remotely, for a single team or a whole company, on a schedule that fits how you work." },
            { q: "How is it priced?", a: "Scoped to your team size and goals after a free call. We'll recommend the smallest program that actually gets you there, no bloat." },
          ]}
        />

        <GetStartedSection
          title={<>Ready To Make AI<br /><span className="a">Pay Off?</span></>}
          desc="Start with a free 15-minute call. We'll learn how your team works, show you the quickest wins, and lay out a training plan that fits. No pitch, no obligation."
          action={<a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
          bullets={["On-site or remote", "Vendor-neutral", "Security-first"]}
        />
      </div>
    </SiteShell>
  )
}
