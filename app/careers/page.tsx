import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "Careers at Pacific Edge AI | Build The AI Edge For Local Business" },
  description: "Join Pacific Edge AI. We build custom AI that helps Vancouver small businesses never miss a lead. Small team, founder-level ownership, real impact. See open roles.",
  alternates: { canonical: "/careers" },
}

export default function Page() {
  return (
    <SiteShell variant="minimal">
<header className="ihero">
<div className="ihero-orb ihero-orb-1"></div>
<div className="ihero-orb ihero-orb-2"></div>
<div className="ihero-inner">
<div className="eyebrow reveal"><span className="eyebrow-dot"></span>Careers &middot; Vancouver, BC</div>
<h1 className="reveal d1">Help Local Business<br /><span className="a">Win With AI.</span></h1>
<p className="ihero-sub reveal d2">We build the custom AI that means a Vancouver restaurant, salon, or trade never misses another lead. It's a small team doing real work with real results, and we're looking for sharp people to build it with us.</p>
<div className="ihero-actions reveal d4">
<a href="#roles" className="btn-mint">See Open Roles</a>
<a href="mailto:hello@pacificedge.ai?subject=Pacific%20Edge%20AI%20-%20Careers" className="btn-light">Email Us</a>
</div>
<div className="cr-chips reveal d5">
<div className="cr-chip"><span>&#129504;</span>Real AI impact</div>
<div className="cr-chip"><span>&#128640;</span>Move fast</div>
<div className="cr-chip"><span>&#129309;</span>Founder-level ownership</div>
<div className="cr-chip"><span>&#128205;</span>Vancouver + remote</div>
<div className="cr-chip"><span>&#127793;</span>Ground floor</div>
</div>
</div>
</header>

<div className="divhr"></div>

<section id="why">
<div className="wrap">
<div className="sl reveal">Why Pacific Edge</div>
<h2 className="st reveal d1">A Place To <span className="a">Actually Build.</span></h2>
<p className="sd reveal d2">No layers, no busywork. You'll own real problems for real local businesses and see the impact in weeks, not quarters.</p>
<div className="icards">
<div className="icard reveal d1"><div className="icard-num">01</div><h3>Real, visible impact</h3><p>Every build puts time and money back on a local owner's books. You'll watch the results land, fast, and often hear the thank-you yourself.</p><span className="tag">Outcomes</span></div>
<div className="icard reveal d2"><div className="icard-num">02</div><h3>Founder-level ownership</h3><p>Small team, big surface area. You own outcomes, not tickets, and your call shapes the product and the company.</p><span className="tag">Ownership</span></div>
<div className="icard reveal d3"><div className="icard-num">03</div><h3>Built by operators</h3><p>We ship real software for real businesses, not slideware. Pragmatic, hands-on, and allergic to theatre.</p><span className="tag">Craft</span></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="roles">
<div className="wrap">
<div className="sl reveal sl-c tac">Open Roles</div>
<h2 className="st reveal d1 tac">Where You <span className="a">Fit In.</span></h2>
<p className="sd reveal d2 tac" style={{ margin: "0 auto" }}>Early-stage means wide-open lanes. If one of these sounds like you, or close to it, let's talk.</p>
<p className="reveal d2 tac" style={{ margin: "12px auto 0", fontSize: "14px", color: "var(--text2)", maxWidth: "560px" }}>Tap a role to apply, or just email <a href="mailto:hello@pacificedge.ai?subject=Application%20-%20Pacific%20Edge%20AI" style={{ color: "var(--accent-ink)", fontWeight: "600", textDecoration: "underline", textUnderlineOffset: "3px" }}>hello@pacificedge.ai</a> and tell us which role.</p>
<div className="role-grid">
<div className="role reveal d1">
<div className="role-main"><div className="role-title">AI Automation Engineer</div><div className="role-meta"><span className="role-tag">Full-time</span><span className="role-tag">Vancouver / Remote</span><span className="role-tag">Engineering</span></div><p className="role-desc">Build the systems behind Janice, our AI employee: telephony, LLM workflows, calendar and CRM integrations, and the dashboards clients live in. You turn "it should just book the job" into shipped software.</p></div>
<a className="role-apply" href="mailto:hello@pacificedge.ai?subject=Application%20-%20AI%20Automation%20Engineer">Apply Now<span className="arr">&rarr;</span></a>
</div>
<div className="role reveal d2">
<div className="role-main"><div className="role-title">Founding Account Executive</div><div className="role-meta"><span className="role-tag">Full-time</span><span className="role-tag">Vancouver</span><span className="role-tag">Sales</span></div><p className="role-desc">Own the full cycle with local SMBs, from a 15-minute discovery call to a signed client who never misses a lead again. You're the face of Pacific Edge to the businesses we serve.</p></div>
<a className="role-apply" href="mailto:hello@pacificedge.ai?subject=Application%20-%20Founding%20Account%20Executive">Apply Now<span className="arr">&rarr;</span></a>
</div>
<div className="role reveal d3">
<div className="role-main"><div className="role-title">AI Solutions Consultant</div><div className="role-meta"><span className="role-tag">Full-time</span><span className="role-tag">Vancouver / Remote</span><span className="role-tag">Implementation</span></div><p className="role-desc">Map how each business actually runs, then tailor Janice to fit, from first call to go-live in about a week. Part strategist, part builder, fully focused on getting clients a result.</p></div>
<a className="role-apply" href="mailto:hello@pacificedge.ai?subject=Application%20-%20AI%20Solutions%20Consultant">Apply Now<span className="arr">&rarr;</span></a>
</div>
<div className="role reveal d1">
<div className="role-main"><div className="role-title">Growth &amp; Content Marketer</div><div className="role-meta"><span className="role-tag">Contract &rarr; Full-time</span><span className="role-tag">Remote</span><span className="role-tag">Marketing</span></div><p className="role-desc">Tell the Pacific Edge story and build the demand engine, content, campaigns, and the kind of marketing that fills a pipeline with the right local owners.</p></div>
<a className="role-apply" href="mailto:hello@pacificedge.ai?subject=Application%20-%20Growth%20%26%20Content%20Marketer">Apply Now<span className="arr">&rarr;</span></a>
</div>
</div>
<div className="role-open reveal d2"><p><b>Don't see your role?</b> We're always meeting sharp, driven people. Pitch us on where you'd make a dent.</p><a className="role-apply" href="mailto:hello@pacificedge.ai?subject=Careers%20-%20General%20Interest">Get In Touch<span className="arr">&rarr;</span></a></div>
</div>
</section>

<div className="statband">
<div className="stat-row">
<div className="stat-cell reveal"><div className="stat-big">&lt;<span className="count" data-to="2">0</span><span className="u">wk</span></div><div className="stat-lbl">From first hello to an offer</div></div>
<div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="1">0</span><span className="u">wk</span></div><div className="stat-lbl">To ship your first real thing</div></div>
<div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="100">0</span><span className="u">%</span></div><div className="stat-lbl">Custom builds, zero slideware</div></div>
<div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="0">0</span></div><div className="stat-lbl">Layers of red tape</div></div>
</div>
<p className="tac" style={{ margin: "30px auto 0", fontSize: "12px", color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>How we like to work</p>
</div>

<section id="hire">
<div className="wrap">
<div className="show-grid">
<div className="show-text">
<div className="sl reveal">How We Hire</div>
<h2 className="st reveal d1">Fast, Human, <span className="a">No Theatre.</span></h2>
<p className="sd reveal d2">No six-page forms, no eight rounds. We move quickly and we respect your time, you'll know where you stand at every step.</p>
<div className="show-steps">
<div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>Say hello</h4><p>Send a short note and whatever best shows your work. That's it, no essay required.</p></div></div>
<div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>Intro call</h4><p>Twenty minutes to see if there's a real fit, both ways. Honest and low-pressure.</p></div></div>
<div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>A short, paid practical</h4><p>A real slice of the work so we both see how you think. We pay for your time.</p></div></div>
<div className="show-step reveal d4"><div className="show-step-n">4</div><div><h4>Meet the team &amp; offer</h4><p>Meet who you'd build with, then an offer, usually within two weeks of the first hello.</p></div></div>
</div>
</div>
<div className="phone-wrap reveal d2">
<div className="sig-panel" style={{ minHeight: "auto" }}>
<div className="sig-head"><span className="sig-live"><i></i>Perks &amp; the deal</span></div>
<div className="cr-perks" style={{ marginTop: "6px", justifyContent: "flex-start" }}>
<div className="cr-perk"><span>&#129521;</span>Ground-floor equity</div>
<div className="cr-perk"><span>&#127968;</span>Flexible &amp; remote-friendly</div>
<div className="cr-perk"><span>&#128218;</span>Learning budget</div>
<div className="cr-perk"><span>&#128187;</span>Top gear, your setup</div>
<div className="cr-perk"><span>&#127881;</span>Real ownership &amp; upside</div>
<div className="cr-perk"><span>&#9749;</span>Vancouver team days</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="icta">
<div className="ihero-inner" style={{ margin: "0 auto" }}>
<div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Join Us</div>
<h2 className="icta-title reveal d1">Ready To Join<br /><span className="a">The Future.</span></h2>
<p className="icta-desc reveal d2">Tell us who you are and where you'd make a dent. A short, honest note beats a polished resume, every time.</p>
<a href="mailto:hello@pacificedge.ai?subject=Pacific%20Edge%20AI%20-%20Careers" className="btn-mint reveal d2">Email hello@pacificedge.ai</a>
<div className="icta-bullets reveal d3">
<span><i></i>Real impact, fast</span>
<span><i></i>Founder-level ownership</span>
<span><i></i>Vancouver-based</span>
</div>
</div>
</section>
    </SiteShell>
  )
}
