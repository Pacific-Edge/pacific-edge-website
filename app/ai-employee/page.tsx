import type { Metadata } from "next"
import { Phone, MessageCircle, Calendar, RotateCcw, CheckCircle2, Star, X, PenLine, MessageSquare, Camera, Mail, UtensilsCrossed, Sparkles, Stethoscope, Bell, Folder, Settings, MapPin, Plug } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import JaniceDemo from "@/components/site/JaniceDemo"
import JaniceInsights from "@/components/site/JaniceInsights"

export const metadata: Metadata = {
  title: { absolute: "Meet Janice, Your AI Employee | Pacific Edge AI" },
  description: "Janice is the AI employee from Pacific Edge AI. She answers calls and messages, books the work, fills cancelled spots from your waitlist, sends reminders, and replies to reviews, 24/7 and in your voice. See everything she can do.",
  alternates: { canonical: "/ai-employee" },
}

export default function Page() {
  return (
    <SiteShell>
<JaniceDemo />
<JaniceInsights />
<header className="ihero">
<div className="ihero-orb ihero-orb-1"></div>
<div className="ihero-orb ihero-orb-2"></div>
<div className="ihero-inner">
<div className="je-hero-av reveal">J</div>
<div className="eyebrow reveal d1"><span className="eyebrow-dot"></span>Your AI Employee &middot; Pacific Edge AI</div>
<h1 className="reveal d2">Meet Janice.<br /><span className="a">Your AI Employee.</span></h1>
<p className="ihero-sub reveal d3">Janice is the AI employee behind Pacific Edge AI. She answers your calls and messages, books the work, fills cancelled spots from your waitlist, sends reminders, and replies to reviews. She works around the clock, in your business's voice.</p>
<div className="ihero-actions reveal d4">
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
<a href="#example" className="btn-dark"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Try Janice Live</a>
</div>
<div className="ihero-stats reveal d5">
<div className="ihero-stat"><b>24/7</b><span>Always on</span></div>
<div className="ihero-stat"><b>&lt;30s</b><span>To reply</span></div>
<div className="ihero-stat"><b>5</b><span>Channels covered</span></div>
</div>
<div className="ihero-trust reveal d5">Works with your existing phone number and tools &middot; No tech team required</div>
</div>
</header>

<div className="divhr"></div>

<section id="vision">
<div className="aurora reveal">
<div className="aurora-inner">
<div className="sl sl-c">Overview</div>
<h2>Catches What Used<br /><span className="a">To Slip Through.</span></h2>
<p>While you run your business, Janice handles the calls, bookings, and reviews that would otherwise wait until morning, including nights and weekends.</p>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="capabilities">
<div className="wrap">
<div className="sl reveal">What Janice Does</div>
<h2 className="st reveal d1">The Work Janice <span className="a">Handles Every Day.</span></h2>
<p className="sd reveal d2">Janice covers calls, messages, bookings, and follow-up around the clock, including nights, weekends, and holidays.</p>
<div className="icards">
<div className="icard feat reveal d1"><div className="icard-ico"><Phone size={20} strokeWidth={1.75} /></div><h3>Answers calls</h3><p>Picks up, or texts back a missed call within seconds, so the inquiry doesn't sit in voicemail.</p><span className="tag">Calls</span></div>
<div className="icard feat reveal d2"><div className="icard-ico"><MessageCircle size={20} strokeWidth={1.75} /></div><h3>Replies across channels</h3><p>Phone, SMS, Instagram, web chat, and email, answered from one system, in your tone of voice.</p><span className="tag">Messaging</span></div>
<div className="icard feat reveal d3"><div className="icard-ico"><Calendar size={20} strokeWidth={1.75} /></div><h3>Books &amp; reschedules</h3><p>Offers open times and adds the booking directly to the calendar and tools you already use.</p><span className="tag">Booking</span></div>
<div className="icard feat reveal d1"><div className="icard-ico"><RotateCcw size={20} strokeWidth={1.75} /></div><h3>Fills cancellations</h3><p>As soon as a spot opens, Janice offers it to your waitlist and books the first person who accepts.</p><span className="tag">Recovery</span></div>
<div className="icard feat reveal d2"><div className="icard-ico"><CheckCircle2 size={20} strokeWidth={1.75} /></div><h3>Confirms &amp; reminds</h3><p>Automatic confirmations, reminders, and recalls that cut no-shows and bring customers back on schedule.</p><span className="tag">Reminders</span></div>
<div className="icard feat reveal d3"><div className="icard-ico"><Star size={20} strokeWidth={1.75} /></div><h3>Follows up &amp; requests reviews</h3><p>Follows up on quotes and treatment plans, then asks satisfied customers for a review after their visit.</p><span className="tag">Follow-up</span></div>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="how">
<div className="wrap">
<div className="sl reveal">How It Works</div>
<h2 className="st reveal d1">A Closer Look At <span className="a">Three Moments.</span></h2>
<p className="sd reveal d2">Three examples of what Janice handles day to day.</p>

<div className="frows">

<div className="frow">
<div className="frow-text reveal">
<div className="sl">Always Answering</div>
<h3>Missed Calls, <span className="a">Answered Anyway.</span></h3>
<p>Whether you're slammed, closed, or mid-job, Janice answers or texts back within seconds, captures what the customer needs, and books it before they move on.</p>
<ul className="frow-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Texts back missed calls in under 30 seconds</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Answers the routine questions on her own</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Hands anything tricky straight to your team</li>
</ul>
</div>
<div className="frow-visual reveal d2">
<div className="mock">
<div className="mock-head"><span className="mock-dot"></span><span className="mock-title">Missed Call &middot; Recovered</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Phone size={15} strokeWidth={2} /></div><div><div className="mock-name">+1 (604) 555-0148</div><div className="mock-sub">Missed at 7:14 PM</div></div></div><span className="mock-pill ok">Texted &middot; 19s</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><CheckCircle2 size={15} strokeWidth={2} /></div><div><div className="mock-name">Booked by Janice</div><div className="mock-sub">Captured &amp; confirmed</div></div></div><span className="mock-pill ok">Done</span></div>
</div>
</div>
</div>

<div className="frow rev">
<div className="frow-text reveal">
<div className="sl">Cancellation Recovery</div>
<h3>Fills The Gap <span className="a">Before It Costs You.</span></h3>
<p>When a cancellation happens, Janice offers the opening to your waitlist and rebooks it, often within minutes.</p>
<ul className="frow-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Detects a cancellation the instant it lands</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Offers the slot to your waitlist automatically</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Rebooks the first yes, so the time is never wasted</li>
</ul>
</div>
<div className="frow-visual reveal d2">
<div className="mock">
<div className="mock-head"><span className="mock-dot"></span><span className="mock-title">Cancellation &middot; Refilled</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><X size={15} strokeWidth={2} /></div><div><div className="mock-name">2:00 PM cancelled</div><div className="mock-sub">Offered to 4 on waitlist</div></div></div><span className="mock-pill warn">Open</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><RotateCcw size={15} strokeWidth={2} /></div><div><div className="mock-name">Rebooked in 6 min</div><div className="mock-sub">From the waitlist</div></div></div><span className="mock-pill ok">Refilled &middot; +$180</span></div>
</div>
</div>
</div>

<div className="frow">
<div className="frow-text reveal">
<div className="sl">Your Voice, Your Rules</div>
<h3>Sounds Like You. <span className="a">You Stay In Control.</span></h3>
<p>Janice is trained on your business, your services, and your tone, so every reply feels like your team wrote it. You set the rules, approve the voice, and step in whenever you like.</p>
<ul className="frow-list">
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Trained on your business and tone of voice</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Flags anything sensitive for a human</li>
<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>Jump into any conversation at any time</li>
</ul>
</div>
<div className="frow-visual reveal d2">
<div className="mock">
<div className="mock-head"><span className="mock-dot"></span><span className="mock-title">Review &middot; Drafted For You</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Star size={15} strokeWidth={2} /></div><div><div className="mock-name">5-star from Sarah K.</div><div className="mock-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div></div><span className="mock-pill ok">Reply drafted</span></div>
<div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><PenLine size={15} strokeWidth={2} /></div><div><div className="mock-name">In your voice</div><div className="mock-sub">One tap to approve</div></div></div><span className="mock-pill ok">Ready</span></div>
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
<div className="sl reveal">Try It Live</div>
<h2 className="st reveal d1">Text <span className="a">Janice Yourself.</span></h2>
<p className="sd reveal d2">This is the real thing, not a video. Type a message and Janice answers, just like she would for your customers. Ask about hours or prices, or try booking a time.</p>
<div className="show-steps">
<div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>A call or message comes in</h4><p>Even after hours, when the phone would normally ring out or sit in an inbox.</p></div></div>
<div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>Janice replies and books it</h4><p>She answers the question, offers an available time, and confirms the booking.</p></div></div>
<div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>It lands on your dashboard</h4><p>The booking shows up in your tools and your live dashboard, with reminders queued.</p></div></div>
</div>
</div>
<div className="phone-wrap reveal d2">
<div className="phone">
<div className="phone-notch"></div>
<div className="phone-screen">
<div className="phone-top">
<div className="phone-av">J</div>
<div><div className="phone-top-name">Janice &middot; Pacific Edge AI</div><div className="phone-top-sub">online now</div></div>
</div>
<div className="chat je-live" id="jeChat" data-live="">
<div className="chat-time">Now &middot; A live demo &middot; text Janice anything</div>
<noscript><div className="bubble them in">Hi! I'm Janice, answering calls and texts for local businesses 24/7. Turn on JavaScript to chat with me right here, or tap &ldquo;Book a Free 15-Min Demo&rdquo; to see me live.</div></noscript>
</div>
<div className="je-chips" id="jeChips">
<button type="button" className="je-chip" data-msg="What are your hours?">What are your hours?</button>
<button type="button" className="je-chip" data-msg="Can I book for Saturday?">Book a time</button>
<button type="button" className="je-chip" data-msg="How much does it cost?">How much?</button>
<button type="button" className="je-chip" data-msg="Are you a real person?">Are you real?</button>
</div>
<form className="je-compose" id="jeForm" autoComplete="off">
<input className="je-input" id="jeInput" type="text" placeholder="Type a message&hellip;" aria-label="Type a message to Janice" maxLength={160} />
<button className="je-send" id="jeSend" type="submit" aria-label="Send message">&rarr;</button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="statband">
<div className="stat-row">
<div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="20">0</span><span className="u">s</span></div><div className="stat-lbl">Average time to reply</div></div>
<div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="95">0</span><span className="u">%</span></div><div className="stat-lbl">Of calls answered or texted back</div></div>
<div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="30">0</span><span className="u">%</span></div><div className="stat-lbl">Fewer no-shows on average</div></div>
<div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="18">0</span><span className="u">hrs</span></div><div className="stat-lbl">Handed back to you weekly</div></div>
</div>
<p className="tac" style={{ margin: "30px auto 0", fontSize: "12px", color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>Outcomes we design toward with Janice</p>
</div>

<section id="why">
<div className="wrap">
<div className="sl reveal">Why Janice</div>
<h2 className="st reveal d1">Built Around <span className="a">Your Business.</span></h2>
<p className="sd reveal d2">Janice is built around your business and connects to the software you already run, so your calls, bookings, and reviews stay in sync.</p>

<div className="jhub reveal d2" role="img" aria-label="Janice connects your calls, bookings, reviews, cancellations, reminders and tools in real time">
<svg className="jhub-svg" viewBox="0 0 900 470" preserveAspectRatio="xMidYMid meet">
<path className="jhub-wire" d="M135,75 Q310,150 450,235"></path>
<path className="jhub-wire" style={{ animationDelay: "-.3s" }} d="M81,235 Q250,235 450,235"></path>
<path className="jhub-wire" style={{ animationDelay: "-.6s" }} d="M135,395 Q310,320 450,235"></path>
<path className="jhub-wire" style={{ animationDelay: "-.9s" }} d="M765,75 Q590,150 450,235"></path>
<path className="jhub-wire" style={{ animationDelay: "-.45s" }} d="M819,235 Q650,235 450,235"></path>
<path className="jhub-wire" style={{ animationDelay: "-.75s" }} d="M765,395 Q590,320 450,235"></path>
</svg>
<div className="jhub-core"><b>Janice</b><em>Your AI Employee</em></div>
<div className="jhub-node jn1"><span className="jic"><Phone size={16} strokeWidth={2} /></span><div><b>Missed calls</b><i>texted back in seconds</i><span className="jsw"><span>OpenPhone</span><span>RingCentral</span></span></div></div>
<div className="jhub-node jn2"><span className="jic"><Calendar size={16} strokeWidth={2} /></span><div><b>Bookings</b><i>into your calendar</i><span className="jsw"><span>Google Cal</span><span>Calendly</span></span></div></div>
<div className="jhub-node jn3"><span className="jic"><Star size={16} strokeWidth={2} /></span><div><b>Reviews</b><i>replied on-brand</i><span className="jsw"><span>Google</span><span>Yelp</span></span></div></div>
<div className="jhub-node jn4"><span className="jic"><MessageCircle size={16} strokeWidth={2} /></span><div><b>Cancellations</b><i>filled from the waitlist</i><span className="jsw"><span>Square</span><span>Vagaro</span></span></div></div>
<div className="jhub-node jn5"><span className="jic"><Bell size={16} strokeWidth={2} /></span><div><b>Reminders</b><i>so people show up</i><span className="jsw"><span>Twilio</span><span>Mailchimp</span></span></div></div>
<div className="jhub-node jn6"><span className="jic"><Folder size={16} strokeWidth={2} /></span><div><b>Your tools</b><i>synced in real time</i><span className="jsw"><span>HubSpot</span><span>QuickBooks</span><span className="more">+ more</span></span></div></div>
</div>
<div className="jhub-foot reveal d3">
<span><b><Settings size={13} strokeWidth={2.5} /> Configured</b>, for your business</span>
<span><b><MapPin size={13} strokeWidth={2.5} /> Vancouver team</b>, that builds and supports it</span>
<span><b><Plug size={13} strokeWidth={2.5} /> Connected</b>, to your phone, calendar &amp; tools</span>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="channels">
<div className="wrap tac">
<div className="sl reveal sl-c">Channels</div>
<h2 className="st reveal d1">One System, <span className="a">Five Channels.</span></h2>
<p className="sd reveal d2 sd-c">Phone, SMS, Instagram, web chat, and email, answered from one system.</p>
<div className="channels reveal d2">
<span className="channel"><span><Phone size={16} strokeWidth={2} /></span>Phone calls</span>
<span className="channel"><span><MessageSquare size={16} strokeWidth={2} /></span>SMS</span>
<span className="channel"><span><Camera size={16} strokeWidth={2} /></span>Instagram</span>
<span className="channel"><span><MessageCircle size={16} strokeWidth={2} /></span>Web chat</span>
<span className="channel"><span><Mail size={16} strokeWidth={2} /></span>Email</span>
</div>
</div>
</section>

<div className="divhr"></div>

<section id="faq">
<div className="wrap">
<div className="sl reveal sl-c tac">Questions</div>
<h2 className="st reveal d1 tac">About <span className="a">Janice.</span></h2>
<div className="faq-list">
<details className="faq-item reveal"><summary>Is Janice a real person?<span className="faq-ico"></span></summary><div className="faq-body">No. Janice is the name for the AI employee from Pacific Edge AI. She handles calls and messages automatically, and hands anything sensitive to your team.</div></details>
<details className="faq-item reveal"><summary>Will Janice sound like a robot?<span className="faq-ico"></span></summary><div className="faq-body">No. We train her on your business and your tone, so replies sound like they came from your team. You approve the voice before she goes live.</div></details>
<details className="faq-item reveal"><summary>What channels does Janice work across?<span className="faq-ico"></span></summary><div className="faq-body">Phone calls, SMS, Instagram and Facebook messages, web chat, and email, all from one place, using the number and tools you already have.</div></details>
<details className="faq-item reveal"><summary>How does Janice fill a cancelled spot?<span className="faq-ico"></span></summary><div className="faq-body">The moment an appointment or reservation is cancelled, Janice offers the open slot to people on your waitlist and books the first to say yes, so the time does not go to waste.</div></details>
<details className="faq-item reveal"><summary>Do I stay in control?<span className="faq-ico"></span></summary><div className="faq-body">Always. You set the rules, approve the tone, and Janice flags anything unusual for a human. You can jump into any conversation at any time.</div></details>
<details className="faq-item reveal"><summary>How long until Janice is live?<span className="faq-ico"></span></summary><div className="faq-body">Usually about a week from our first call. We set her up, you test her, and we fine-tune before she ever speaks to a real customer.</div></details>
</div>
</div>
</section>

<section className="icta">
<div className="ihero-inner" style={{ margin: "0 auto" }}>
<div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
<h2 className="icta-title reveal d1">Ready To <br /><span className="a">Hire Janice?</span></h2>
<p className="icta-desc reveal d2">Start with a free 15-minute call. We'll show you what Janice would handle for your business, and what it would put back on your books. No pitch, no obligation.</p>
<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
<div className="icta-bullets reveal d3">
<span><i></i>Free discovery call</span>
<span><i></i>Live in about a week</span>
<span><i></i>Vancouver-based</span>
</div>
<div className="xlinks reveal d3">
<a href="/restaurants" className="xlink"><span><UtensilsCrossed size={14} strokeWidth={2} /></span>Restaurants</a>
<a href="/salons" className="xlink"><span><Sparkles size={14} strokeWidth={2} /></span>Salons &amp; Spas</a>
<a href="/dental" className="xlink"><span><Stethoscope size={14} strokeWidth={2} /></span>Dental</a>
</div>
</div>
</section>
    </SiteShell>
  )
}
