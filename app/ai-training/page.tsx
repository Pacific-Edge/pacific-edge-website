import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"
import TiltParallax from "@/components/site/TiltParallax"
import { Ban, Blocks, Bot, Brain, Building2, Compass, DollarSign, Gauge, Handshake, PenLine, Recycle, RefreshCw, Rocket, Scale, Scissors, Search, ShieldAlert, ShieldCheck, Target, TrendingUp, Unlock, UserCheck, Wrench } from "lucide-react"
import "@/styles/pages.css"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI Training for Corporations & SMBs | Pacific Edge AI" },
  description:
    "Hands-on AI training for corporations and small businesses in Vancouver. Get your team using AI to its full potential without wasting tokens or leaking data. Prompting, workflows, governance, security, and cost control. PIPEDA & BC PIPA aware.",
  alternates: { canonical: "/ai-training" },
}

export default function AiTrainingPage() {
  return (
    <SiteShell variant="minimal">
      <TiltParallax />
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" data-parallax="26" />
        <div className="ihero-orb ihero-orb-2" data-parallax="-40" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" />AI Training · Corporations &amp; SMBs</div>
          <h1 className="reveal d1">
            Your Team, Using AI<br />
            <span className="a">Like They Mean It.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            Your people are already using AI, whether it&apos;s sanctioned or not. We turn scattered,
            trial-and-error use into a real capability: the whole team getting more done, spending less
            per result, and keeping your data safe while they do it.
          </p>
          <div className="ihero-actions reveal d3">
            <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
            <a href="#curriculum" className="btn-ghost">See What We Cover ↓</a>
          </div>
          <div className="ihero-trust reveal d4">
            On-site or remote · Vendor-neutral · Built around PIPEDA &amp; BC PIPA
          </div>
          <div className="px-stats reveal d5">
            <div className="px-stat"><b>75<span className="u">%</span></b><span>of knowledge workers already use AI at work*</span></div>
            <div className="px-stat"><b>78<span className="u">%</span></b><span>bring their own AI tools, often unmanaged*</span></div>
            <div className="px-stat"><b>1</b><span>standard, trained across your whole team</span></div>
            <div className="px-stat"><b>0</b><span>confidential data sent to models that train on it</span></div>
          </div>
          <p className="tac" style={{ margin: "22px auto 0", fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>* Microsoft Work Trend Index, 2024</p>
        </div>
      </header>

      <div className="divhr" />

      {/* Three pillars */}
      <section>
        <div className="wrap">
          <div className="sl reveal">Why It Matters</div>
          <h2 className="st reveal d1">Three Ways Teams <span className="a">Get AI Wrong.</span></h2>
          <p className="sd reveal d2">Most companies aren&apos;t short on AI enthusiasm. They&apos;re short on the habits that make it pay off safely. We fix all three.</p>
          <div className="px-grid">
            <div className="px-card reveal d1"><span className="px-card-ico"><Brain size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>They barely scratch the surface</h3><p>People use AI like a fancy search box and miss the 10x workflows. We show your team what it&apos;s genuinely capable of on your real work.</p></div>
            <div className="px-card reveal d2"><span className="px-card-ico"><DollarSign size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>They quietly waste money</h3><p>Overpowered models for tiny tasks, bloated prompts, re-sending the same context. Small habits that add up to a big bill.</p></div>
            <div className="px-card reveal d3"><span className="px-card-ico"><Unlock size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>They leak data without knowing</h3><p>Confidential info pasted into personal accounts on plans that can train on it. Convenient, and a real exposure.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Curriculum */}
      <section id="curriculum">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>What We Cover</div>
          <h2 className="st reveal d1 tac">A Curriculum Built On <span className="a">Your Real Work.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>No generic slide decks. We train on the tasks your team actually does, so the skills stick the same afternoon.</p>
          <div className="px-grid tilt">
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Compass size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Foundations &amp; judgment</h3><p>What today&apos;s AI is genuinely good at, and where it quietly makes things up, so your team trusts it in the right places.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><PenLine size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Prompting that works</h3><p>Repeatable prompts and templates for your real tasks, so results are good on the first try, not the fifth.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Target size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>The right tool for the job</h3><p>Which model and which tool for which task, so you stop overpaying for simple work and underusing AI for hard work.</p></article>
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><RefreshCw size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Into your workflow</h3><p>We embed AI into the tools and processes you already use, not a shiny thing nobody opens twice.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Handshake size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Your own assistants</h3><p>Build internal assistants loaded with your policies, docs, and tone of voice, ready for the whole team to use.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><TrendingUp size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Measuring the payoff</h3><p>Track adoption and time saved so you can prove the value and double down on what actually works.</p></article>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Data security */}
      <section id="security">
        <div className="wrap">
          <div className="sl reveal">Security &amp; Privacy</div>
          <h2 className="st reveal d1">Your Data <span className="a">Stays Yours.</span></h2>
          <p className="sd reveal d2">Using AI well and keeping data safe aren&apos;t a trade-off. We set up the guardrails first, so your team can move fast without putting the business at risk.</p>
          <div className="px-grid cols2">
            <div className="px-card reveal d1"><span className="px-card-ico"><UserCheck size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>We end &ldquo;shadow AI&rdquo;</h3><p>Most teams already use AI on personal accounts you can&apos;t see. We bring it into the light with a short list of approved, secure tools everyone actually uses.</p></div>
            <div className="px-card reveal d2"><span className="px-card-ico"><Ban size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>No training on your data</h3><p>Consumer AI plans can learn from what your team types in. We move you onto enterprise and zero-retention setups that don&apos;t, and show your team the difference.</p></div>
            <div className="px-card reveal d3"><span className="px-card-ico"><ShieldCheck size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Built around your compliance</h3><p>We work with Canadian privacy expectations, PIPEDA and BC PIPA, plus GDPR and SOC 2 where they apply, with access controls and audit trails.</p></div>
            <div className="px-card reveal d4"><span className="px-card-ico"><ShieldAlert size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Guardrails against mistakes</h3><p>Clear rules and redaction habits so client PII, financials, and health info never leave the building in a prompt by accident.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Cost efficiency */}
      <section id="cost">
        <div className="wrap">
          <div className="sl reveal">Cost Control</div>
          <h2 className="st reveal d1">Stop Burning <span className="a">Tokens.</span></h2>
          <p className="sd reveal d2">Most AI bills are bigger than they need to be, not because teams use AI too much, but because they use it inefficiently. A few habits cut the cost of every result.</p>
          <div className="px-grid">
            <div className="px-card reveal d1"><span className="px-card-ico"><Scale size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Right-size the model</h3><p>Using a top-tier model for a one-line task is like couriering a sticky note. We match the model to the job.</p></div>
            <div className="px-card reveal d2"><span className="px-card-ico"><Scissors size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Trim the prompt</h3><p>Bloated prompts and dumped documents burn tokens for no gain. Tighter inputs, same or better output.</p></div>
            <div className="px-card reveal d3"><span className="px-card-ico"><Recycle size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Cache &amp; reuse</h3><p>Prompt caching and reusable templates mean you stop paying to re-send the same context again and again.</p></div>
            <div className="px-card reveal d1"><span className="px-card-ico"><Search size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Retrieve, don&apos;t dump</h3><p>Pull only the relevant passage from your documents instead of pasting the whole manual into every request.</p></div>
            <div className="px-card reveal d2"><span className="px-card-ico"><Gauge size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Watch the meter</h3><p>Usage dashboards and budgets so one runaway workflow can&apos;t quietly rack up a surprise bill.</p></div>
            <div className="px-card reveal d3"><span className="px-card-ico"><Blocks size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Build it once</h3><p>Turn your best one-off prompts into shared, tested templates so the whole team gets the efficient version.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Who it's for */}
      <section>
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>Who It&apos;s For</div>
          <h2 className="st reveal d1 tac">Right-Sized For <span className="a">Your Team.</span></h2>
          <div className="px-split">
            <article className="px-aud feat reveal d1" data-tilt>
              <div className="px-aud-shine" aria-hidden="true" />
              <div className="px-aud-ico"><Building2 size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
              <h3>For Corporations</h3>
              <p>Roll one standard across every team, with the governance and controls a bigger organization needs.</p>
              <ul className="px-aud-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Role-specific training at scale</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Security review &amp; admin controls</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>A company-wide acceptable-use policy</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Adoption tracking &amp; reporting</li>
              </ul>
            </article>
            <article className="px-aud reveal d2" data-tilt>
              <div className="px-aud-shine" aria-hidden="true" />
              <div className="px-aud-ico"><Rocket size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
              <h3>For SMBs</h3>
              <p>Punch above your weight. A lean team that uses AI well does the work of a much bigger one.</p>
              <ul className="px-aud-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Practical, no-jargon sessions</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Templates your team keeps using</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Safe setup on a small budget</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>More output without more headcount</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Process */}
      <section>
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>How It Works</div>
          <h2 className="st reveal d1 tac">Trained Once. <span className="a">Sticks For Good.</span></h2>
          <div className="px-steps">
            <div className="px-step reveal d1"><h3>Assess</h3><p>We look at how your team works today and where AI will actually save time, and where it won&apos;t.</p></div>
            <div className="px-step reveal d2"><h3>Train</h3><p>Hands-on sessions on your real tasks, not generic slides. Everyone leaves able to use it.</p></div>
            <div className="px-step reveal d3"><h3>Set guardrails</h3><p>Approved tools, a plain-English policy, and secure settings so it&apos;s safe from day one.</p></div>
            <div className="px-step reveal d4"><h3>Sustain</h3><p>Templates, playbooks, and check-ins so adoption sticks instead of fizzling after week one.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Before You <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Is this for beginners or advanced teams?<span className="faq-ico" /></summary><div className="faq-body">Both. We meet your team where they are, from first-time users who are nervous about it to people ready to build their own internal assistants.</div></details>
            <details className="faq-item reveal"><summary>Which AI tools do you teach?<span className="faq-ico" /></summary><div className="faq-body">The ones that fit your work, including ChatGPT, Claude, and Microsoft Copilot. We&apos;re vendor-neutral and honest about which tool is best for each job.</div></details>
            <details className="faq-item reveal"><summary>Will our data actually be safe?<span className="faq-ico" /></summary><div className="faq-body">That&apos;s a core part of the training, not an afterthought. We set up enterprise, no-training configurations and a clear policy so confidential data stays private, with Canadian privacy law in mind.</div></details>
            <details className="faq-item reveal"><summary>On-site or remote?<span className="faq-ico" /></summary><div className="faq-body">Either. We run sessions in person or remotely, for a single team or a whole company, on a schedule that fits how you work.</div></details>
            <details className="faq-item reveal"><summary>How is it priced?<span className="faq-ico" /></summary><div className="faq-body">Scoped to your team size and goals after a free call. We&apos;ll recommend the smallest program that actually gets you there, no bloat.</div></details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Ready To Make AI<br /><span className="a">Actually Pay Off?</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute call. We&apos;ll learn how your team works, show you the quickest wins, and lay out a training plan that fits. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Demo</a>
          <div className="icta-bullets reveal d3">
            <span><i />On-site or remote</span>
            <span><i />Vendor-neutral</span>
            <span><i />Security-first</span>
          </div>
          <div className="xlinks reveal d3">
            <Link href="/ai-employee" className="xlink"><span><Bot size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Meet Janice</Link>
            <Link href="/custom-builds" className="xlink"><span><Wrench size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Custom Builds</Link>
            <Link href="/industries" className="xlink"><span><Building2 size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Industries</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
