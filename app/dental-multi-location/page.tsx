import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "AI for Multi-Location Dental Groups & DSOs | Pacific Edge AI" },
  description: "For multi-location dental groups and DSOs: one consistent front desk across every site. Janice answers, books, and recovers missed calls at every location, with centralized reporting. Free 15-min call.",
  alternates: { canonical: "/dental-multi-location" },
}

export default function Page() {
  return (
    <SiteShell variant="minimal">
<header className="dhero">
<div className="dhero-grid">
<div className="dh-copy">
<div className="dh-eyebrow reveal">For Multi-Location Groups &amp; DSOs</div>
<h1 className="reveal d1">Every Location.<br /><span className="a">One Standard.</span></h1>
<p className="dh-sub reveal d2">One consistent front desk across every site, Janice answers, books, and recovers missed calls, with everything rolled into a single dashboard.</p>
<div className="dh-actions reveal d3">
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Call</a>
<a href="#flow" className="btn-ghost">See How It Works</a>
</div>
<div className="dh-stats reveal d4">
<div className="dh-stat"><b>1</b><span>Standard, every site</span></div>
<div className="dh-stat"><b>24/7</b><span>At all locations</span></div>
<div className="dh-stat"><b>1</b><span>Dashboard for the group</span></div>
</div>
</div>
<div className="dvisual reveal d2">
<div className="dphone">
<div className="dnotch"></div>
<div className="dscreen">
<div className="dhead"><span className="ddot"></span>Janice &middot; All Locations</div>
<div className="dloc"><span className="dloc-name"><i>&#128205;</i>Burnaby</span><span className="dloc-stat">Booked &#10003;</span></div>
<div className="dloc"><span className="dloc-name"><i>&#128205;</i>Kitsilano</span><span className="dloc-stat">Recovered &#10003;</span></div>
<div className="dloc"><span className="dloc-name"><i>&#128205;</i>Richmond</span><span className="dloc-stat">Rebooked &#10003;</span></div>
<div className="dbadge"><i>&#10003;</i>One standard &middot; every site</div>
</div>
</div>
</div>
</div>
</header>

<div className="divhr"></div>

<section id="problem">
<div className="wrap">
<div className="sl reveal sl-c tac">The Problem</div>
<h2 className="st reveal d1 tac">Every Location Is <span className="a">A Different Front Desk.</span></h2>
<div className="pgrid">
<div className="pcard reveal d1"><div className="pcard-ico">&#127760;</div><h4>Different at every site</h4><p>One location books beautifully, another lets calls ring out. Service depends on who picks up.</p></div>
<div className="pcard reveal d2"><div className="pcard-ico">&#128065;&#65039;</div><h4>No central visibility</h4><p>You can't see which site is dropping calls until month-end, when those patients are long gone.</p></div>
<div className="pcard reveal d3"><div className="pcard-ico">&#127769;</div><h4>After-hours gaps, multiplied</h4><p>Every location's nights and weekends are unanswered booking hours. Across a group, a big leak.</p></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="flow">
<div className="wrap">
<div className="sl reveal sl-c tac">How It Works</div>
<h2 className="st reveal d1 tac">Build Once, <span className="a">Deploy Everywhere.</span></h2>
<div className="flow">
<div className="fcard reveal d1"><div className="fnum">1</div><h4>Set one standard</h4><p>We capture how your best location answers and books, and turn it into a single playbook.</p></div>
<div className="fcard reveal d2"><div className="fnum">2</div><h4>Roll out to every site</h4><p>That standard deploys to each location's existing phone and scheduling, tuned to local details.</p></div>
<div className="fcard reveal d3"><div className="fnum">3</div><h4>See it all in one place</h4><p>Calls, bookings, and recovered opportunities roll up into one dashboard, per-location drill-down included.</p></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="handles">
<div className="wrap">
<div className="sl reveal sl-c tac">What You Get</div>
<h2 className="st reveal d1 tac">Consistency, <span className="a">At Scale.</span></h2>
<div className="tiles">
<div className="tile reveal d1"><div className="tile-ico">&#127913;</div><h4>One experience</h4><p>Every caller, every site, gets the same calm answer.</p></div>
<div className="tile reveal d2"><div className="tile-ico">&#128222;</div><h4>Recovery everywhere</h4><p>Missed calls caught &amp; texted back at each location.</p></div>
<div className="tile reveal d3"><div className="tile-ico">&#128202;</div><h4>Central reporting</h4><p>One dashboard, group roll-up, per-site drill-down.</p></div>
<div className="tile reveal d4"><div className="tile-ico">&#9874;&#65039;</div><h4>Always consistent</h4><p>Service no longer depends on who's working that day.</p></div>
</div>
</div>
</section>

<div className="divhr"></div>

<div className="statband">
<div className="stat-row">
<div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="95">0</span><span className="u">%</span></div><div className="stat-lbl">Of calls answered at every site</div></div>
<div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="30">0</span><span className="u">%</span></div><div className="stat-lbl">Fewer no-shows across the group</div></div>
<div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="100">0</span><span className="u">+</span></div><div className="stat-lbl">Calls recovered per location monthly</div></div>
<div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="1">0</span><span className="u"></span></div><div className="stat-lbl">Dashboard for all your locations</div></div>
</div>
</div>

<div className="divhr"></div>

<section id="faq">
<div className="wrap">
<div className="sl reveal sl-c tac">Questions</div>
<h2 className="st reveal d1 tac">Quick <span className="a">Answers.</span></h2>
<div className="faq-list">
<details className="faq-item reveal"><summary>Can you roll one setup out to every location?<span className="faq-ico"></span></summary><div className="faq-body">Yes. We build one standard once, then deploy it to each location, so every site answers, books, and follows up the same way, with room for location-specific details.</div></details>
<details className="faq-item reveal"><summary>Do we get reporting per location?<span className="faq-ico"></span></summary><div className="faq-body">Yes. One dashboard rolls up across the group with drill-down into each location, so you can compare call volume, bookings, and recovered calls site by site.</div></details>
<details className="faq-item reveal"><summary>Will it work with the software each office uses?<span className="faq-ico"></span></summary><div className="faq-body">Yes. Janice works alongside the phone numbers and scheduling tools each location already has, so bookings land where each team works.</div></details>
<details className="faq-item reveal"><summary>How is access and privacy handled across sites?<span className="faq-ico"></span></summary><div className="faq-body">Each location's data stays scoped to that location, with group-level visibility for owners, and sensitive health details stay out of automated messages.</div></details>
</div>
</div>
</section>

<section className="icta">
<div className="ihero-inner" style={{ margin: "0 auto" }}>
<div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
<h2 className="icta-title reveal d1">One Standard,<br /><span className="a">Every Location.</span></h2>
<p className="icta-desc reveal d2">A free 15-minute call. We'll map where each site is leaking calls and what one standard would recover.</p>
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Call</a>
<div className="xlinks reveal d3">
<a href="/dental" className="xlink"><span>&#129463;</span>Dental overview</a>
<a href="/dental-single-location" className="xlink"><span>&#127973;</span>Single-location clinics</a>
<a href="/ai-employee" className="xlink"><span>&#129302;</span>Meet Janice</a>
</div>
</div>
</section>
    </SiteShell>
  )
}
