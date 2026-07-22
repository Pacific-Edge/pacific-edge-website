import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "AI for Independent & Single-Location Dental Clinics | Pacific Edge AI" },
  description: "For independent dental clinics: Janice answers every call and text, books the appointment, and fills cancellations 24/7, in your voice. One front desk, never overwhelmed. Free 15-min call.",
  alternates: { canonical: "/dental-single-location" },
}

export default function Page() {
  return (
    <SiteShell>
<header className="dhero">
<div className="dhero-grid">
<div className="dh-copy">
<div className="dh-eyebrow reveal">For Independent &amp; Single-Location Clinics</div>
<h1 className="reveal d1">Never Miss<br /><span className="a">Another Patient.</span></h1>
<p className="dh-sub reveal d2">Janice answers every call and text, books the appointment, and fills cancellations, 24/7, in your clinic's voice.</p>
<div className="dh-actions reveal d3">
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
<a href="#flow" className="btn-dark">See How It Works</a>
</div>
<div className="dh-stats reveal d4">
<div className="dh-stat"><b>25s</b><span>To answer a call</span></div>
<div className="dh-stat"><b>24/7</b><span>Always on</span></div>
<div className="dh-stat"><b>95%</b><span>Calls answered</span></div>
</div>
</div>
<div className="dvisual reveal d2">
<div className="dphone">
<div className="dnotch"></div>
<div className="dscreen">
<div className="dhead"><span className="ddot"></span>Janice &middot; Cedar Dental</div>
<div className="dmsg miss">&#128222; Missed call &middot; 7:42 PM</div>
<div className="dmsg them">Hi! It's Janice from Cedar Dental, want me to book you an exam?</div>
<div className="dmsg me">Yes please, tomorrow if you can &#128591;</div>
<div className="dbadge"><i>&#10003;</i>Booked &middot; Tue 10:40 AM</div>
</div>
</div>
</div>
</div>
</header>

<div className="divhr"></div>

<section id="problem">
<div className="wrap">
<div className="sl reveal sl-c tac">The Problem</div>
<h2 className="st reveal d1 tac">When It's Just <span className="a">One Phone.</span></h2>
<div className="pgrid">
<div className="pcard reveal d1"><div className="pcard-ico">&#128222;</div><h4>One busy line loses the patient</h4><p>Already on a call? The new patient hits voicemail and dials the clinic down the street.</p></div>
<div className="pcard reveal d2"><div className="pcard-ico">&#127769;</div><h4>After-hours calls vanish</h4><p>Evenings and weekends are prime booking hours your phone simply isn't open for.</p></div>
<div className="pcard reveal d3"><div className="pcard-ico">&#129485;</div><h4>No backup when it's just you</h4><p>Lunch, a sick day, a packed lobby, and your phone coverage drops to zero.</p></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="flow">
<div className="wrap">
<div className="sl reveal sl-c tac">How It Works</div>
<h2 className="st reveal d1 tac">A Missed Call, <span className="a">Turned Into A Booking.</span></h2>
<div className="flow">
<div className="fcard reveal d1"><div className="fnum">1</div><h4>The call comes in</h4><p>Busy line, lunch break, or after hours, it reaches Janice instead of voicemail.</p></div>
<div className="fcard reveal d2"><div className="fnum">2</div><h4>Janice answers &amp; books</h4><p>She replies in seconds, in your voice, and books the exam or fills an open slot.</p></div>
<div className="fcard reveal d3"><div className="fnum">3</div><h4>It hits your schedule</h4><p>The booking lands in your tools with reminders queued. You just show up.</p></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="handles">
<div className="wrap">
<div className="sl reveal sl-c tac">What You Get</div>
<h2 className="st reveal d1 tac">One Front Desk, <span className="a">Never Off Duty.</span></h2>
<div className="tiles">
<div className="tile reveal d1"><div className="tile-ico">&#9742;&#65039;</div><h4>Answers everything</h4><p>Every call &amp; text caught in seconds, day or night.</p></div>
<div className="tile reveal d2"><div className="tile-ico">&#128257;</div><h4>Fills cancellations</h4><p>Open chairs offered to your waitlist and rebooked.</p></div>
<div className="tile reveal d3"><div className="tile-ico">&#9989;</div><h4>Cuts no-shows</h4><p>Confirmations and recall nudges, fully automatic.</p></div>
<div className="tile reveal d4"><div className="tile-ico">&#11088;</div><h4>Grows reviews</h4><p>Happy patients asked, treatment plans followed up.</p></div>
</div>
</div>
</section>

<div className="divhr"></div>

<div className="statband">
<div className="stat-row">
<div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="25">0</span><span className="u">s</span></div><div className="stat-lbl">Average answer to a new-patient call</div></div>
<div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="95">0</span><span className="u">%</span></div><div className="stat-lbl">Of calls answered or texted back</div></div>
<div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="30">0</span><span className="u">%</span></div><div className="stat-lbl">Fewer no-shows on average</div></div>
<div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="20">0</span><span className="u">hrs</span></div><div className="stat-lbl">Front-desk hours saved weekly</div></div>
</div>
</div>

<div className="divhr"></div>

<section id="faq">
<div className="wrap">
<div className="sl reveal sl-c tac">Questions</div>
<h2 className="st reveal d1 tac">Quick <span className="a">Answers.</span></h2>
<div className="faq-list">
<details className="faq-item reveal"><summary>Do I have to change my phone system?<span className="faq-ico"></span></summary><div className="faq-body">No. Janice works alongside the phone number and scheduling tools your office already uses.</div></details>
<details className="faq-item reveal"><summary>Will it sound like my office?<span className="faq-ico"></span></summary><div className="faq-body">Yes. We train it on your clinic's tone, and you approve the voice before it ever speaks to a patient.</div></details>
<details className="faq-item reveal"><summary>Is this hard to set up for a small office?<span className="faq-ico"></span></summary><div className="faq-body">No. We do the setup for you in about a week, then fine-tune it before it goes live. No tech team required.</div></details>
<details className="faq-item reveal"><summary>What does it cost?<span className="faq-ico"></span></summary><div className="faq-body">The 15-minute discovery call is free, and we scope a simple flat-priced plan around your call volume and chair count.</div></details>
</div>
</div>
</section>

<section className="icta">
<div className="ihero-inner" style={{ margin: "0 auto" }}>
<div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
<h2 className="icta-title reveal d1">Stop Missing<br /><span className="a">Patients.</span></h2>
<p className="icta-desc reveal d2">A free 15-minute call. We'll show you exactly which calls you're missing and how Janice catches them.</p>
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
<div className="xlinks reveal d3">
<a href="/dental" className="xlink"><span>&#129463;</span>Dental overview</a>
<a href="/dental-multi-location" className="xlink"><span>&#127970;</span>Multi-location &amp; DSOs</a>
<a href="/ai-employee" className="xlink"><span>&#129302;</span>Meet Janice</a>
</div>
</div>
</section>
    </SiteShell>
  )
}
