import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import { BarChart3, Armchair, MessageSquare, RotateCcw, PhoneCall, Star, Hourglass, X, Scissors, CheckCircle2, UtensilsCrossed, Stethoscope } from "lucide-react"

const COMPARE = [
  { Ico: Armchair, cat: "No-shows", before: "A chair sits empty for the whole slot", after: "Reminders and deposits keep it filled" },
  { Ico: MessageSquare, cat: "After-hours DMs", before: "Pile up, they book elsewhere by morning", after: "Answered in seconds, day or night" },
  { Ico: RotateCcw, cat: "Rebooking", before: "Clients love it once, then vanish", after: "Automatic nudge brings them back" },
  { Ico: Star, cat: "Reviews", before: "Five-star work, three-star presence", after: "Requested automatically, you approve" },
  { Ico: Hourglass, cat: "Cancellations", before: "A gap sits empty, income lost", after: "Offered to your waitlist, refilled in minutes" },
  { Ico: PhoneCall, cat: "Front-desk time", before: "Drowning in scheduling calls", after: "Time back with the client in the chair" },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Salons & Spas | Pacific Edge AI" },
  description: "AI automation for Vancouver salons, spas and wellness clinics. Book requests around the clock, cut no-shows, fill cancellations, and get clients rebooking. No tech team needed. Free 15-min call.",
  alternates: { canonical: "/salons" },
}

export default function Page() {
  return (
    <SiteShell>
<header className="ihero">
<div className="ihero-orb ihero-orb-1"></div>
<div className="ihero-orb ihero-orb-2"></div>
<div className="ihero-inner">
<div className="eyebrow reveal"><span className="eyebrow-dot"></span>AI for Salons &amp; Spas &middot; Vancouver, BC</div>
<h1 className="reveal d1">Keep Every Chair Full.<br /><span className="a">Lose Fewer Clients.</span></h1>
<p className="ihero-sub reveal d2">Every booking request answered, every no-show headed off, every client reminded to rebook. Custom AI built for how a busy salon, spa, or clinic actually runs, from the front desk to the treatment room.</p>
<div className="ihero-pain reveal d3">How many appointments sat empty last week because a no-show never got a reminder?</div>
<div className="ihero-actions reveal d4">
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
<a href="/salons-savings-calculator.html" className="btn-mint"><BarChart3 size={16} strokeWidth={2} /> What Empty Chairs Cost You</a>
<a href="#problems" className="btn-dark">See How It Helps</a>
</div>
<div className="ihero-stats reveal d5">
<div className="ihero-stat"><b>30s</b><span>Reply to a booking request</span></div>
<div className="ihero-stat"><b>24/7</b><span>Always booking</span></div>
<div className="ihero-stat"><b>1</b><span>Dashboard for it all</span></div>
</div>
<div className="ihero-trust reveal d5">Built for Vancouver salons, spas, barbers &amp; wellness clinics &middot; No tech team required</div>
</div>
</header>

<div className="divhr"></div>

<section id="problems">
<div className="wrap">
<div className="sl reveal">The Problem</div>
<h2 className="st reveal d1">Sound <span className="a">Familiar?</span></h2>
<p className="sd reveal d2">If your week looks anything like this, your calendar is quietly leaking revenue.</p>
<div className="prob-grid">
<div className="prob reveal d1"><div className="prob-ico"><Armchair size={22} strokeWidth={1.75} /></div><h3>No-shows leave chairs empty</h3><p>A client books for Saturday and never turns up. That prime slot sat empty while three other people would have taken it.</p><div className="prob-cost">An empty chair is revenue you can't get back</div></div>
<div className="prob reveal d2"><div className="prob-ico"><MessageSquare size={22} strokeWidth={1.75} /></div><h3>DMs and calls pile up after hours</h3><p>Requests come in on Instagram and voicemail at 9pm. By the time you reply in the morning, they have booked somewhere else.</p><div className="prob-cost">After-hours requests go to the fastest reply</div></div>
<div className="prob reveal d3"><div className="prob-ico"><RotateCcw size={22} strokeWidth={1.75} /></div><h3>Clients book once and vanish</h3><p>Someone loves their cut or facial, then you never hear from them again because no one had time to follow up and rebook them.</p><div className="prob-cost">A client who doesn't rebook is a client lost</div></div>
<div className="prob reveal d1"><div className="prob-ico"><PhoneCall size={22} strokeWidth={1.75} /></div><h3>The front desk drowns in scheduling</h3><p>Your team spends the day rescheduling, confirming, and playing phone tag instead of looking after the clients in the room.</p><div className="prob-cost">Your team is on the phone, not with clients</div></div>
<div className="prob reveal d2"><div className="prob-ico"><Star size={22} strokeWidth={1.75} /></div><h3>Reviews don't reflect the work</h3><p>You do five-star work all day, but barely any of those happy clients ever leave a review, so your online presence lags behind.</p><div className="prob-cost">Five-star service, three-star presence online</div></div>
<div className="prob reveal d3"><div className="prob-ico"><Hourglass size={22} strokeWidth={1.75} /></div><h3>Gaps and cancellations go unfilled</h3><p>A late cancellation opens a slot, but there is no fast way to offer it to your waitlist before the hour is simply gone.</p><div className="prob-cost">A last-minute opening shouldn't mean lost income</div></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="difference">
<div className="wrap">
<div className="sl reveal">The Difference</div>
<h2 className="st reveal d1">Before &amp; <span className="a">After.</span></h2>
<p className="sd reveal d2">What a week in the chair looks like before and after Janice, your AI employee, starts working in the background.</p>
<div className="cmp reveal d2">
<div className="cmp-row cmp-head">
<div className="cmp-cell cmp-corner"></div>
<div className="cmp-cell cmp-before">Without Pacific Edge AI</div>
<div className="cmp-cell cmp-after"><span className="cmp-janice"><span className="cmp-jav">J</span><span className="cmp-jname">With Janice<span className="cmp-jsub">Your AI employee</span></span></span></div>
</div>
{COMPARE.map((row) => (
<div className="cmp-row" key={row.cat}>
<div className="cmp-cell cmp-cat"><span className="cmp-ico"><row.Ico size={16} strokeWidth={2} /></span>{row.cat}</div>
<div className="cmp-cell cmp-before">
<span className="cmp-x"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
{row.before}
</div>
<div className="cmp-cell cmp-after">
<span className="cmp-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 11-13" /></svg></span>
{row.after}
</div>
</div>
))}
</div>
</div>
</section>

<div className="divhr"></div>

<section id="what">
<div className="wrap">
<div className="sl reveal">What We Automate</div>
<h2 className="st reveal d1">Built For A <span className="a">Full Book.</span></h2>
<p className="sd reveal d2">Empty chairs, no-shows, missed DMs. We turn the gaps that quietly drain your week into booked, confirmed appointments.</p>

<div className="frows">

<div className="frow">
<div className="frow-text reveal">
<div className="sl">Auto-Fill Cancellations</div>
<h3>Fill Every <span className="a">Cancelled Chair.</span></h3>
<p>A late cancellation used to mean an empty chair. Now the moment a client cancels, your AI offers the slot to your waitlist and rebooks it, while reminders and optional deposits keep no-shows away.</p>
<ul className="frow-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Cancellations offered to your waitlist instantly</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Rebooks the first client to say yes</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Reminders and optional deposits that cut no-shows</li>
</ul>
</div>
<div className="frow-visual reveal d2">
<div className="mock" data-live="">
<div className="mock-head"><span className="mock-dot"></span><span className="mock-title">Cancellation &middot; Refilled</span></div>
<div className="mock-typing" data-typing="1300">Texting your waitlist<i></i><i></i><i></i></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><X size={15} strokeWidth={2} /></div><div><div className="mock-name">2:00 PM cancelled</div><div className="mock-sub">Offered to your waitlist</div></div></div><span className="mock-pill warn">Open</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><RotateCcw size={15} strokeWidth={2} /></div><div><div className="mock-name">Rebooked in 9 min</div><div className="mock-sub">Filled from waitlist</div></div></div><span className="mock-pill ok">Refilled</span></div>
</div>
</div>
</div>

<div className="frow rev">
<div className="frow-text reveal">
<div className="sl">Booking, Day &amp; Night</div>
<h3>Book Requests <span className="a">Around The Clock.</span></h3>
<p>A call, text, or Instagram DM comes in and your AI answers in seconds, offers a real open slot, and books it straight into your calendar, even at midnight.</p>
<ul className="frow-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Answers calls, texts and DMs instantly</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Offers real openings and books them</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Drops straight into the calendar you use</li>
</ul>
</div>
<div className="frow-visual reveal d2">
<div className="mock" data-live="">
<div className="mock-head"><span className="mock-dot"></span><span className="mock-title">Booking Requests &middot; Today</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><MessageSquare size={15} strokeWidth={2} /></div><div><div className="mock-name">Balayage &middot; Sat 1:30 PM</div><div className="mock-sub">From Instagram DM</div></div></div><span className="mock-pill ok">Booked</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Scissors size={15} strokeWidth={2} /></div><div><div className="mock-name">Men's cut &middot; Thu 5:00 PM</div><div className="mock-sub">After-hours text</div></div></div><span className="mock-pill ok">Booked</span></div>
</div>
</div>
</div>

<div className="frow">
<div className="frow-text reveal">
<div className="sl">Rebooking &amp; Retention</div>
<h3>Rebookings <span className="a">On Autopilot.</span></h3>
<p>Your AI follows up after every visit and reminds clients to rebook at the right time, so the gap between appointments shrinks and your regulars actually stay regular.</p>
<ul className="frow-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Timed rebooking nudges after each visit</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Win-back texts for clients who drifted away</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Review requests sent to your happiest clients</li>
</ul>
</div>
<div className="frow-visual reveal d2">
<div className="mock" data-live="">
<div className="mock-head"><span className="mock-dot"></span><span className="mock-title">Rebooking &middot; This week</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><RotateCcw size={15} strokeWidth={2} /></div><div><div className="mock-name">Priya &middot; due for a trim</div><div className="mock-sub">Nudge sent &middot; rebooked</div></div></div><span className="mock-pill ok">Rebooked</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Star size={15} strokeWidth={2} /></div><div><div className="mock-name">Jordan &middot; loved the facial</div><div className="mock-sub">Review request sent</div></div></div><span className="mock-pill ok">5-star</span></div>
</div>
</div>
</div>

</div>
</div>
</section>

<div className="divhr"></div>

<section id="example">
<div className="wrap">
<div className="show-grid">
<div className="show-text">
<div className="sl reveal">What It Looks Like</div>
<h2 className="st reveal d1">A Cancellation,<br /><span className="a">Refilled.</span></h2>
<p className="sd reveal d2">Here is the flow that quietly saves your day. A last-minute cancel, refilled from your waitlist before the chair ever sits empty.</p>
<div className="show-steps">
<div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>A client cancels last-minute</h4><p>It is Saturday morning and a balayage cancels. That chair would normally sit empty all afternoon.</p></div></div>
<div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>Your AI texts your waitlist</h4><p>It offers the open slot to the next client in line and books the first to say yes, often within minutes.</p></div></div>
<div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>The chair stays full</h4><p>The booking lands on your calendar with reminders set. You never picked up the phone.</p></div></div>
</div>
</div>
<div className="phone-wrap reveal d2">
<div className="phone">
<div className="phone-notch"></div>
<div className="phone-screen">
<div className="phone-top">
<div className="phone-av"><Scissors size={16} strokeWidth={2} /></div>
<div><div className="phone-top-name">Luxe Hair Studio</div><div className="phone-top-sub">AI desk &middot; filling a cancellation</div></div>
</div>
<div className="chat" data-chat="">
<div className="chat-time">Sat 9:14 AM &middot; Waitlist outreach</div>
<div className="bubble me" data-delay="400">Hi Jordan! A balayage spot with Alexa just opened today at 1:30 PM. Want me to grab it for you?<small>Auto-sent &middot; 2 min after a cancellation</small></div>
<div className="typing" data-typing="1200"><i></i><i></i><i></i></div>
<div className="bubble them" data-delay="200">Omg yes please!!</div>
<div className="bubble me" data-delay="900">Done, you're booked at 1:30 with Alexa. I'll send a reminder beforehand, see you this afternoon!</div>
<div className="chat-badge" data-delay="650"><span className="chat-badge-ico"><CheckCircle2 size={13} strokeWidth={2.5} /></span><span>Cancelled chair refilled from your waitlist in 4 minutes. No empty seat.</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="divhr"></div>
<section id="live">
<div className="wrap">
<div className="sig-grid">
<div className="sig-text">
<div className="sl reveal">Live, Right Now</div>
<h2 className="st reveal d1">A Day That <span className="a">Books Itself.</span></h2>
<p className="sd reveal d2">Requests, rebookings, and waitlist fills land straight on the calendar, so the day fills from the first slot to the last without anyone touching the desk.</p>
<ul className="sig-list">
<li className="reveal d2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Every request slotted into a real opening</li>
<li className="reveal d3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Cancellations refilled from your waitlist</li>
<li className="reveal d4"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Reminders that quietly cut no-shows</li>
</ul>
</div>
<div className="sig-visual reveal d2">
<div className="sig-panel">
<div className="sig-head"><span className="sig-live"><i></i>Today &middot; Alexa's chair</span><span className="sig-num"><span className="count" data-to="92">0</span>% full</span></div>
<div className="day-list">
<div className="day-row fill"><span className="t">9:00</span>Cut &amp; finish<span className="pill">Booked</span></div>
<div className="day-row fill"><span className="t">10:30</span>Full colour<span className="pill">Booked</span></div>
<div className="day-row fill"><span className="t">12:30</span>Balayage<span className="pill">Waitlist&nbsp;&rarr;&nbsp;booked</span></div>
<div className="day-row fill"><span className="t">2:30</span>Blowout<span className="pill">Booked</span></div>
<div className="day-row fill"><span className="t">4:00</span>Cut &amp; colour<span className="pill">Booked</span></div>
</div>
<div className="day-badge" style={{ marginTop: "auto" }}>&#10003; Booked solid by 9 AM</div>
</div>
</div>
</div>
</div>
</section>

<div className="statband">
<div className="stat-row">
<div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="30">0</span><span className="u">s</span></div><div className="stat-lbl">Average reply to a booking request</div></div>
<div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="95">0</span><span className="u">%</span></div><div className="stat-lbl">Of requests answered instantly</div></div>
<div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="35">0</span><span className="u">%</span></div><div className="stat-lbl">Fewer no-shows on average</div></div>
<div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="15">0</span><span className="u">hrs</span></div><div className="stat-lbl">Front-desk hours saved weekly</div></div>
</div>
<p className="tac" style={{ margin: "30px auto 0", fontSize: "12px", color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>Outcomes we design toward for Vancouver salons and spas</p>
</div>

<section>
<div className="wrap">
<div className="sl reveal">Live Dashboard</div>
<h2 className="st reveal d1">Your Whole Front Desk, <span className="a">In One View.</span></h2>
<p className="sd reveal d2">Bookings made, no-shows prevented, rebookings tracked, revenue counted. Click any tab to explore.</p>
<div className="idash-wrap reveal d2">
<iframe src="/dashboard-mock.html?ind=salons" className="idash-frame" id="idash" loading="lazy" title="Pacific Edge AI dashboard preview" scrolling="no"></iframe>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="faq">
<div className="wrap">
<div className="sl reveal sl-c tac">Questions</div>
<h2 className="st reveal d1 tac">Salon Owners <span className="a">Ask Us.</span></h2>
<div className="faq-list">
<details className="faq-item reveal"><summary>Will the AI sound like a real person to my clients?<span className="faq-ico"></span></summary><div className="faq-body">Yes. We train it on your salon's tone and services, so messages feel warm and personal. You approve the voice before it ever speaks to a client.</div></details>
<details className="faq-item reveal"><summary>Do I need to change my booking software?<span className="faq-ico"></span></summary><div className="faq-body">No. It works alongside the booking tools and phone number you already use. There is nothing new for your front desk to learn.</div></details>
<details className="faq-item reveal"><summary>Can it take deposits or enforce a cancellation policy?<span className="faq-ico"></span></summary><div className="faq-body">Yes. We can build in deposit requests and clear cancellation reminders so late cancels and no-shows stop eating into your day.</div></details>
<details className="faq-item reveal"><summary>How long until it is live?<span className="faq-ico"></span></summary><div className="faq-body">Usually about a week from our first call. We set it up, you test it, and we fine-tune it before a single client sees it.</div></details>
<details className="faq-item reveal"><summary>How much does it cost?<span className="faq-ico"></span></summary><div className="faq-body">It depends on what you automate. The 15-minute discovery call is free, and we scope a flat-priced plan around your chairs and booking volume.</div></details>
</div>
</div>
</section>

<section className="icta">
<div className="ihero-inner" style={{ margin: "0 auto" }}>
<div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
<h2 className="icta-title reveal d1">Ready To Keep<br /><span className="a">Every Chair Full?</span></h2>
<p className="icta-desc reveal d2">Start with a free 15-minute call. We will show you exactly which automations would put the most appointments back on your calendar. No pitch, no obligation.</p>
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
<div className="reveal d2" style={{ marginTop: "18px" }}><a href="/salons-savings-calculator.html" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> See What Your Empty Chairs Are Worth <span className="arr">&rarr;</span></a></div>
<div className="icta-bullets reveal d3">
<span><i></i>Free discovery call</span>
<span><i></i>Working prototype in about a week</span>
<span><i></i>Vancouver-based</span>
</div>
<div className="xlinks reveal d3">
<a href="/restaurants" className="xlink"><span><UtensilsCrossed size={14} strokeWidth={2} /></span>Restaurants</a>
<a href="/dental" className="xlink"><span><Stethoscope size={14} strokeWidth={2} /></span>Dental</a>
</div>
</div>
</section>
    </SiteShell>
  )
}
