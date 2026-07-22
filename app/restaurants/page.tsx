import type { Metadata } from "next"
import Link from "next/link"
import {
  BarChart3,
  Phone,
  Star,
  Calendar,
  PhoneCall,
  Mail,
  RotateCcw,
  X,
  UtensilsCrossed,
  CheckCircle2,
  Sparkles,
  Stethoscope,
  Moon,
} from "lucide-react"
import SiteShell from "@/components/site/SiteShell"

const CAL = "https://cal.com/pacificedge"

const COMPARE = [
  { Ico: Moon, cat: "After-hours calls", before: "Ring out, guest calls elsewhere", after: "Answered 24/7, table booked" },
  { Ico: Phone, cat: "Rush-hour calls", before: "Ring out while you're plating tables", after: "Text-back in 19 seconds" },
  { Ico: Calendar, cat: "No-shows", before: "An empty table, no chance to refill it", after: "Reminders and waitlist refill the gap" },
  { Ico: Star, cat: "Reviews", before: "Pile up unanswered for days", after: "Replied to in seconds, you approve" },
  { Ico: Mail, cat: "Catering & large parties", before: "Inquiries go cold overnight", after: "Answered immediately, booked by morning" },
  { Ico: RotateCcw, cat: "Repeat guests", before: "One great night, then silence", after: "Automatic follow-up brings them back" },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Restaurants | Pacific Edge AI" },
  description:
    "AI automation for Vancouver restaurants. Recover missed reservation calls, auto-reply to Google reviews, cut no-shows, and fill more tables. No tech team needed. Free 15-min call.",
  alternates: { canonical: "/restaurants" },
}

export default function RestaurantsPage() {
  return (
    <SiteShell>
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" />
        <div className="ihero-orb ihero-orb-2" />
        <div className="ihero-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" />AI for Restaurants · Vancouver, BC
          </div>
          <h1 className="reveal d1">
            Fill More Tables.<br />
            <span className="a">Lose Fewer Guests.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            Every missed reservation call answered. Every review replied to. Every no-show headed off
            before it happens. Custom AI built for how a Vancouver restaurant actually runs, from the
            host stand to the back office.
          </p>
          <div className="ihero-pain reveal d3">
            How many bookings walked out the door last week because nobody could get to the phone?
          </div>
          <div className="ihero-actions reveal d4">
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <a href="/restaurants-savings-calculator.html" className="btn-mint"><BarChart3 size={16} strokeWidth={2} /> What Empty Tables Cost You</a>
            <a href="#problems" className="btn-dark">See How It Helps</a>
          </div>
          <div className="ihero-stats reveal d5">
            <div className="ihero-stat"><b>19s</b><span>Text back a missed call</span></div>
            <div className="ihero-stat"><b>24/7</b><span>Always answering</span></div>
            <div className="ihero-stat"><b>1</b><span>Dashboard for it all</span></div>
          </div>
          <div className="ihero-trust reveal d5">
            Built for Vancouver restaurants, cafes &amp; bars · No tech team required
          </div>
        </div>
      </header>

      <div className="divhr" />

      <section id="problems">
        <div className="wrap">
          <div className="sl reveal">The Problem</div>
          <h2 className="st reveal d1">Sound <span className="a">Familiar?</span></h2>
          <p className="sd reveal d2">If your evenings look anything like this, you are leaving money on the table. Literally.</p>
          <div className="prob-grid">
            <div className="prob reveal d1"><div className="prob-ico"><Phone size={22} strokeWidth={1.75} /></div><h3>Calls ring out during the rush</h3><p>The phone goes while you are plating six tables. By the time anyone gets to it, the guest has already called the place down the street.</p><div className="prob-cost">A missed call is a table you never seat</div></div>
            <div className="prob reveal d2"><div className="prob-ico"><Star size={22} strokeWidth={1.75} /></div><h3>Reviews pile up unanswered</h3><p>Replying to every Google and Yelp review takes hours you do not have, so most just sit there while your rating drifts.</p><div className="prob-cost">Diners read reviews before they pick you</div></div>
            <div className="prob reveal d3"><div className="prob-ico"><Calendar size={22} strokeWidth={1.75} /></div><h3>No-shows leave empty tables</h3><p>A party of six books for Friday and never turns up. That prime-time table sat empty all night with no chance to refill it.</p><div className="prob-cost">An empty Friday 6-top is gone for good</div></div>
            <div className="prob reveal d1"><div className="prob-ico"><PhoneCall size={22} strokeWidth={1.75} /></div><h3>The same questions, all day</h3><p>Hours, parking, do you take walk-ins, are you dog friendly. Your host answers the phone more than they greet guests.</p><div className="prob-cost">Your host is a receptionist, not a closer</div></div>
            <div className="prob reveal d2"><div className="prob-ico"><Mail size={22} strokeWidth={1.75} /></div><h3>Big inquiries go cold</h3><p>Catering and large-party emails come in after close. By morning the customer has booked with whoever replied first.</p><div className="prob-cost">High-value bookings go to the fastest reply</div></div>
            <div className="prob reveal d3"><div className="prob-ico"><RotateCcw size={22} strokeWidth={1.75} /></div><h3>One-time diners never return</h3><p>Someone has a great night, then you never hear from them again because there is no time to follow up and bring them back.</p><div className="prob-cost">Regulars are built on follow-up you skip</div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="difference">
        <div className="wrap">
          <div className="sl reveal">The Difference</div>
          <h2 className="st reveal d1">Before &amp; <span className="a">After.</span></h2>
          <p className="sd reveal d2">What a week at the host stand looks like before and after Janice, your AI employee, starts working in the background.</p>
          <div className="cmp reveal d2">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell cmp-corner" />
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

      <div className="divhr" />

      <section id="what">
        <div className="wrap">
          <div className="sl reveal">What We Automate</div>
          <h2 className="st reveal d1">Built For The <span className="a">Dinner Rush.</span></h2>
          <p className="sd reveal d2">Empty tables, missed calls, no-shows. We turn the moments that quietly cost you the most into booked, confirmed covers.</p>
          <div className="frows">
            <div className="frow">
              <div className="frow-text reveal">
                <div className="sl">Auto-Fill Cancellations</div>
                <h3>Fill Every <span className="a">Cancelled Table.</span></h3>
                <p>The moment a table cancels or a no-show frees up, your AI offers the spot to your waitlist and rebooks it, often within minutes, so prime-time covers never sit empty.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Freed tables offered to your waitlist instantly</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Rebooks the first guest to say yes</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Confirmations and reminders that cut no-shows</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Cancellation · Refilled</span></div>
                  <div className="mock-typing" data-typing="1300">Refilling the table<i /><i /><i /></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><X size={15} strokeWidth={2} /></div><div><div className="mock-name">8:00 PM table freed</div><div className="mock-sub">Offered to 5 on waitlist</div></div></div><span className="mock-pill warn">Open</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><RotateCcw size={15} strokeWidth={2} /></div><div><div className="mock-name">Rebooked in 7 min</div><div className="mock-sub">Party of 4 from waitlist</div></div></div><span className="mock-pill ok">Refilled · +$220</span></div>
                </div>
              </div>
            </div>
            <div className="frow rev">
              <div className="frow-text reveal">
                <div className="sl">Missed-Call Text-Back</div>
                <h3>Never Miss A <span className="a">Reservation.</span></h3>
                <p>When the line is slammed and a call goes unanswered, your AI texts the guest back in seconds, answers their question, and books the table straight into your system.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Texts back in under 30 seconds, day or night</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Captures party size, time and name</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Books it into the tools you already use</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Missed Call · Recovered</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Phone size={15} strokeWidth={2} /></div><div><div className="mock-name">+1 (604) 555-0148</div><div className="mock-sub">Missed at 7:14 PM</div></div></div><span className="mock-pill ok">Texted · 19s</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><UtensilsCrossed size={15} strokeWidth={2} /></div><div><div className="mock-name">Table for 4 · 7:45 PM</div><div className="mock-sub">Booked by AI</div></div></div><span className="mock-pill ok">Confirmed</span></div>
                </div>
              </div>
            </div>
            <div className="frow">
              <div className="frow-text reveal">
                <div className="sl">Review Management</div>
                <h3>Own Your <span className="a">Google Reviews.</span></h3>
                <p>Your AI drafts a warm, on-brand reply to every review in seconds. You approve with one tap. Anything negative gets flagged for you instead of going out on its own.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>On-brand drafts for Google and Yelp</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Angry reviews flagged, never auto-posted</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>A steady reply rate that lifts your ranking</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Reviews · Auto-drafted</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">G</div><div><div className="mock-name">Sarah M.</div><div className="mock-stars">★★★★★</div></div></div><span className="mock-pill ok">Reply sent</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">★</div><div><div className="mock-name">Dishan P.</div><div className="mock-stars">★★★☆☆</div></div></div><span className="mock-pill warn">Flagged for you</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="example">
        <div className="wrap">
          <div className="show-grid">
            <div className="show-text">
              <div className="sl reveal">What It Looks Like</div>
              <h2 className="st reveal d1">A Missed Call,<br /><span className="a">Recovered.</span></h2>
              <p className="sd reveal d2">Here is a real flow your guests would see. No app to download, just a normal text thread that ends in a booking.</p>
              <div className="show-steps">
                <div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>The call goes unanswered</h4><p>It is Friday at 7 and every hand is full. The phone rings out, like it does most busy nights.</p></div></div>
                <div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>Your AI texts back in seconds</h4><p>It answers the question, offers a real table time, and confirms the booking in a friendly back-and-forth.</p></div></div>
                <div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>The booking lands on your dashboard</h4><p>The table shows up in your system and on your live dashboard. You just seat them when they arrive.</p></div></div>
              </div>
            </div>
            <div className="phone-wrap reveal d2">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <div className="phone-av"><UtensilsCrossed size={16} strokeWidth={2} /></div>
                    <div><div className="phone-top-name">Wildfire Kitchen</div><div className="phone-top-sub">AI host · replies instantly</div></div>
                  </div>
                  <div className="chat" data-chat>
                    <div className="chat-time">Fri 7:14 PM · Missed call</div>
                    <div className="bubble them" data-delay="350">Hi! Any chance you could fit 4 of us in tonight around 7:30?</div>
                    <div className="typing" data-typing="1200"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Hi, this is Wildfire Kitchen! We have a 7:45 table for 4, want me to lock it in?<small>Auto-reply · 19s after the missed call</small></div>
                    <div className="bubble them" data-delay="900">Perfect, yes please</div>
                    <div className="typing" data-typing="1100"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Booked for 7:45, party of 4 under your name. Reply C to change anytime. See you tonight!</div>
                    <div className="chat-badge" data-delay="650"><span className="chat-badge-ico"><CheckCircle2 size={13} strokeWidth={2.5} /></span><span>Table booked and added to tonight&apos;s covers. Zero host time spent.</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="live">
        <div className="wrap">
          <div className="sig-grid">
            <div className="sig-text">
              <div className="sl reveal">Live, Right Now</div>
              <h2 className="st reveal d1">Watch Tonight <span className="a">Fill Itself.</span></h2>
              <p className="sd reveal d2">Every recovered call and refilled cancellation drops straight onto tonight&apos;s board, so your covers climb while you run the floor, not the phone.</p>
              <ul className="sig-list">
                <li className="reveal d2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Reservations booked straight into your service</li>
                <li className="reveal d3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Cancellations refilled before the table cools</li>
                <li className="reveal d4"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>A running count of covers, all night long</li>
              </ul>
            </div>
            <div className="sig-visual reveal d2">
              <div className="sig-panel">
                <div className="sig-head"><span className="sig-live"><i />Tonight · Live</span><span className="sig-num"><span className="count" data-to="58">0</span> covers</span></div>
                <div className="cov-bar"><i /></div>
                <div className="cov-tiles"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <div className="cov-toast" style={{ marginTop: "auto" }}><UtensilsCrossed size={16} strokeWidth={2} style={{ color: "var(--accent-ink)" }} /><div><b style={{ display: "block", fontSize: 13 }}>Table for 4 · 7:45 PM</b><span style={{ fontSize: 11, color: "var(--text3)" }}>Just booked by Janice</span></div><span className="mock-pill ok" style={{ marginLeft: "auto", alignSelf: "center" }}>+$220</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="statband">
        <div className="stat-row">
          <div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="19">0</span><span className="u">s</span></div><div className="stat-lbl">Average text-back to a missed call</div></div>
          <div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="95">0</span><span className="u">%</span></div><div className="stat-lbl">Of reviews getting a reply</div></div>
          <div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="30">0</span><span className="u">%</span></div><div className="stat-lbl">Fewer no-shows on average</div></div>
          <div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="18">0</span><span className="u">hrs</span></div><div className="stat-lbl">Saved every single week</div></div>
        </div>
        <p className="tac" style={{ margin: "30px auto 0", fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>Outcomes we design toward for Vancouver restaurants</p>
      </div>

      <section>
        <div className="wrap">
          <div className="sl reveal">Live Dashboard</div>
          <h2 className="st reveal d1">Your Whole Front Of House, <span className="a">In One View.</span></h2>
          <p className="sd reveal d2">Calls recovered, reviews handled, bookings tracked, revenue counted. Click any tab to explore.</p>
          <div className="idash-wrap reveal d2">
            <iframe src="/dashboard-mock.html?ind=restaurants" className="idash-frame" id="idash" loading="lazy" title="Pacific Edge AI dashboard preview" scrolling="no" />
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Restaurant Owners <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Will the AI sound like a robot to my guests?<span className="faq-ico" /></summary><div className="faq-body">No. We train it on your restaurant&apos;s own voice and menu, so replies read like a friendly host wrote them. You approve the tone before anything ever goes live.</div></details>
            <details className="faq-item reveal"><summary>Do I need new software or a tech person?<span className="faq-ico" /></summary><div className="faq-body">No. It works with your existing phone number and booking tools. There is nothing for your staff to learn and no new hardware to buy.</div></details>
            <details className="faq-item reveal"><summary>What happens with a bad review?<span className="faq-ico" /></summary><div className="faq-body">Negative reviews are flagged for you and never posted automatically. You stay in full control of how you respond to anything sensitive.</div></details>
            <details className="faq-item reveal"><summary>How long until it is live?<span className="faq-ico" /></summary><div className="faq-body">Usually about a week from our first call. We build a working setup, you test it, and we adjust it before it ever touches a real guest.</div></details>
            <details className="faq-item reveal"><summary>How much does it cost?<span className="faq-ico" /></summary><div className="faq-body">It depends on what you automate. The 15-minute discovery call is free, and we scope a plan around your covers and call volume with clear, flat pricing.</div></details>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Ready To Fill<br /><span className="a">Every Table?</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute call. We will show you exactly which automations would put the most covers back on your books. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
          <div className="reveal d2" style={{ marginTop: 18 }}><a href="/restaurants-savings-calculator.html" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> See What Your Empty Tables Are Worth <span className="arr">→</span></a></div>
          <div className="icta-bullets reveal d3">
            <span><i />Free discovery call</span>
            <span><i />Working prototype in about a week</span>
            <span><i />Vancouver-based</span>
          </div>
          <div className="xlinks reveal d3">
            <Link href="/salons" className="xlink"><span><Sparkles size={14} strokeWidth={2} /></span>Salons &amp; Spas</Link>
            <Link href="/dental" className="xlink"><span><Stethoscope size={14} strokeWidth={2} /></span>Dental</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
