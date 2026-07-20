import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Trades & Home Services | Pacific Edge AI" },
  description:
    "AI automation for Vancouver trades and home services. Answer every call hands-free, follow up on every quote, book jobs, and capture more leads. Built for plumbers, electricians, HVAC and contractors. Free 15-min call.",
  alternates: { canonical: "/trades" },
}

export default function TradesPage() {
  return (
    <SiteShell variant="minimal">
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" />
        <div className="ihero-orb ihero-orb-2" />
        <div className="ihero-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" />AI for Trades &amp; Home Services · Vancouver, BC
          </div>
          <h1 className="reveal d1">
            Win The Job.<br />
            <span className="a">Even On A Ladder.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            Every call answered while your hands are full, every quote followed up, every job booked.
            Custom AI built for plumbers, electricians, HVAC, roofers, and contractors across the Lower
            Mainland.
          </p>
          <div className="ihero-pain reveal d3">
            How many jobs went to the next guy last week because you couldn&apos;t pick up from the jobsite?
          </div>
          <div className="ihero-actions reveal d4">
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <a href="/trades-savings-calculator.html" className="btn-mint">📊 What Missed Calls Cost You</a>
            <a href="#problems" className="btn-light">See How It Helps</a>
          </div>
          <div className="ihero-stats reveal d5">
            <div className="ihero-stat"><b>20s</b><span>Text back a missed call</span></div>
            <div className="ihero-stat"><b>24/7</b><span>Never miss a lead</span></div>
            <div className="ihero-stat"><b>1</b><span>Dashboard for it all</span></div>
          </div>
          <div className="ihero-trust reveal d5">
            Built for Vancouver plumbers, electricians, HVAC &amp; contractors · No tech team required
          </div>
        </div>
      </header>

      <div className="divhr" />

      <section id="problems">
        <div className="wrap">
          <div className="sl reveal">The Problem</div>
          <h2 className="st reveal d1">Sound <span className="a">Familiar?</span></h2>
          <p className="sd reveal d2">If this is your week, you are handing paid work to the competitor who simply answered first.</p>
          <div className="prob-grid">
            <div className="prob reveal d1"><div className="prob-ico">📞</div><h3>Calls missed on the job</h3><p>Your hands are full and the phone rings out. The homeowner does not leave a message, they just dial the next number on the list.</p><div className="prob-cost">A missed call is a job you never quoted</div></div>
            <div className="prob reveal d2"><div className="prob-ico">❄️</div><h3>Quotes go cold</h3><p>You send an estimate and never hear back. There was no follow-up, so a job you already priced quietly went to someone else.</p><div className="prob-cost">An un-followed quote is a job given away</div></div>
            <div className="prob reveal d3"><div className="prob-ico">🌙</div><h3>After-hours emergencies unanswered</h3><p>A burst pipe at 9pm is your best-margin call of the week, and it goes straight to a voicemail box no one checks until morning.</p><div className="prob-cost">Emergency calls are your best margin</div></div>
            <div className="prob reveal d1"><div className="prob-ico">🗓️</div><h3>Scheduling chaos and double-books</h3><p>Jobs get penciled in three different places. A missed slot or a double-booking means a wasted truck roll across the city.</p><div className="prob-cost">A blown slot is a wasted truck roll</div></div>
            <div className="prob reveal d2"><div className="prob-ico">⭐</div><h3>No reviews to prove the work</h3><p>You do solid work all week, but the reviews never get asked for, so online you look quieter than the guy who does half the job.</p><div className="prob-cost">Homeowners hire the trade with reviews</div></div>
            <div className="prob reveal d3"><div className="prob-ico">🔁</div><h3>Repeat and seasonal work forgotten</h3><p>Last year&apos;s furnace customer would happily book a tune-up, but with no follow-up they have already forgotten your company name.</p><div className="prob-cost">Last year&apos;s customer forgot you exist</div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="what">
        <div className="wrap">
          <div className="sl reveal">What We Automate</div>
          <h2 className="st reveal d1">Built For The <span className="a">Jobsite.</span></h2>
          <p className="sd reveal d2">You should be doing the work, not chasing the phone. Your AI captures the lead, follows up, and books it for you.</p>
          <div className="frows">
            <div className="frow">
              <div className="frow-text reveal">
                <div className="sl">Missed-Call Text-Back</div>
                <h3>Answer Every Call, <span className="a">Hands-Free.</span></h3>
                <p>The second a call goes unanswered, your AI texts the customer back, finds out what they need, and qualifies the job, all while you stay on the tools.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Texts back missed calls in seconds</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Captures the job type, address and urgency</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Books it or hands you a hot lead</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Missed Call · Recovered</span></div>
                  <div className="mock-typing" data-typing="1300">Texting the caller back<i /><i /><i /></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">📞</div><div><div className="mock-name">+1 (604) 555-0192</div><div className="mock-sub">Missed at 2:38 PM</div></div></div><span className="mock-pill ok">Texted · 16s</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">💧</div><div><div className="mock-name">Water heater leak</div><div className="mock-sub">Booked for today 4 PM</div></div></div><span className="mock-pill ok">Booked</span></div>
                </div>
              </div>
            </div>
            <div className="frow rev">
              <div className="frow-text reveal">
                <div className="sl">Quote Follow-Up</div>
                <h3>Follow Up On <span className="a">Every Quote.</span></h3>
                <p>Your AI checks in after a quote goes out, answers questions, and nudges the customer to say yes, so estimates stop disappearing into silence.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Automatic follow-up the day after a quote</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Answers the common pricing questions</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Books the job the moment they approve</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Quotes · This week</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">🧾</div><div><div className="mock-name">Panel upgrade · $2,400</div><div className="mock-sub">Follow-up sent · day 1</div></div></div><span className="mock-pill ok">Accepted</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">🧾</div><div><div className="mock-name">Furnace install · $5,800</div><div className="mock-sub">Reminder sent · awaiting</div></div></div><span className="mock-pill warn">Following up</span></div>
                </div>
              </div>
            </div>
            <div className="frow">
              <div className="frow-text reveal">
                <div className="sl">Confirmed, Then Booked</div>
                <h3>Never Promise A Slot <span className="a">You Can&apos;t Keep.</span></h3>
                <p>When a job runs long, the last thing you need is a customer expecting a tech who can&apos;t make it. So on time-sensitive work, your AI <strong>holds</strong> the slot and confirms with your team before it&apos;s locked in, then sends the customer the real time. If the day slips, it reschedules them before anyone&apos;s left waiting.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Slots held for your team&apos;s one-tap confirmation</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>On-my-way and arrival-window texts on autopilot</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Running behind? It reschedules before they wait</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Dispatch · Confirm first</span></div>
                  <div className="mock-typing" data-typing="1300">Checking the day&apos;s schedule<i /><i /><i /></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">🕐</div><div><div className="mock-name">Water heater · 4–6 PM</div><div className="mock-sub">Held · awaiting your OK</div></div></div><span className="mock-pill warn">Pending</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar">✅</div><div><div className="mock-name">Confirmed by your team</div><div className="mock-sub">Customer sent the locked-in time</div></div></div><span className="mock-pill ok">Booked</span></div>
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
              <h2 className="st reveal d1">A Missed Call,<br /><span className="a">Won.</span></h2>
              <p className="sd reveal d2">Here is a flow your customers would see. You stay on the job while the lead gets captured, confirmed with your team, and booked, no slot promised that you can&apos;t keep.</p>
              <div className="show-steps">
                <div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>The call comes in mid-job</h4><p>You are under a sink with both hands full. The phone rings out, like it does most afternoons.</p></div></div>
                <div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>It holds a slot and checks with your team</h4><p>It finds out the problem and how urgent it is, holds the first real window, and confirms with your team before promising the customer a time.</p></div></div>
                <div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>The confirmed job lands on your dashboard</h4><p>You finish what you are doing and the locked-in job is already there, with the address and details.</p></div></div>
              </div>
            </div>
            <div className="phone-wrap reveal d2">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <div className="phone-av">🔧</div>
                    <div><div className="phone-top-name">Coastal Plumbing &amp; Heating</div><div className="phone-top-sub">AI line · confirms before booking</div></div>
                  </div>
                  <div className="chat" data-chat>
                    <div className="chat-time">Wed 2:38 PM · Missed call</div>
                    <div className="bubble them" data-delay="350">Hi, my water heater is leaking, can someone come out today?</div>
                    <div className="typing" data-typing="1200"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Sorry to hear that! I can hold a 4–6 PM window today and confirm with the team before locking it in. Want me to?<small>Auto-reply · 16s after the missed call</small></div>
                    <div className="bubble them" data-delay="850">Yes please, that would be great</div>
                    <div className="typing" data-typing="1300"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Holding 4–6 PM and checking with the team now, one sec…</div>
                    <div className="typing" data-typing="1200"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Confirmed! Mike&apos;s locked in for 4–6 PM and will text when he&apos;s on the way. If anything changes, I&apos;ll reach out right away.</div>
                    <div className="chat-badge" data-delay="650"><span className="chat-badge-ico">✅</span><span>Held, confirmed with your team, then booked, so a tech is never promised when they can&apos;t make it.</span></div>
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
              <h2 className="st reveal d1">Dispatched <span className="a">Before You Hang Up.</span></h2>
              <p className="sd reveal d2">Every call captured, qualified, and slotted into the day, so the next job is booked and your tech is on the way while you are still under the sink.</p>
              <ul className="sig-list">
                <li className="reveal d2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Emergencies triaged and booked in seconds</li>
                <li className="reveal d3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Name, address, and job captured for you</li>
                <li className="reveal d4"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Your day routed so nobody waits on hold</li>
              </ul>
            </div>
            <div className="sig-visual reveal d2">
              <div className="sig-panel">
                <div className="sig-head"><span className="sig-live"><i />Dispatch · Live</span><span className="sig-num"><span className="count" data-to="6">0</span> jobs today</span></div>
                <div className="disp-radar"><span className="ring" /><span className="ring" /><span className="ring" /><span className="disp-pin">🔧</span><span className="disp-eta">Tech en route · ETA 4–6 PM</span></div>
                <div className="disp-jobs">
                  <div className="disp-job"><span>🚰</span>Water heater · Kitsilano<span className="pill new">Confirm</span></div>
                  <div className="disp-job"><span>🔥</span>Furnace tune-up · Burnaby<span className="pill">Booked</span></div>
                  <div className="disp-job"><span>💧</span>Drain clear · Richmond<span className="pill">Booked</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="statband">
        <div className="stat-row">
          <div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="16">0</span><span className="u">s</span></div><div className="stat-lbl">Average text-back to a missed call</div></div>
          <div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="100">0</span><span className="u">%</span></div><div className="stat-lbl">Of calls answered, even off the tools</div></div>
          <div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="40">0</span><span className="u">%</span></div><div className="stat-lbl">More quotes won with follow-up</div></div>
          <div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="16">0</span><span className="u">hrs</span></div><div className="stat-lbl">Office hours saved every week</div></div>
        </div>
        <p className="tac" style={{ margin: "30px auto 0", fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>Outcomes we design toward for Vancouver trades and contractors</p>
      </div>

      <section>
        <div className="wrap">
          <div className="sl reveal">Live Dashboard</div>
          <h2 className="st reveal d1">Every Lead And Job, <span className="a">In One View.</span></h2>
          <p className="sd reveal d2">Calls recovered, quotes followed up, jobs booked, revenue counted. Click any tab to explore.</p>
          <div className="idash-wrap reveal d2">
            <iframe src="/dashboard-mock.html?ind=trades" className="idash-frame" id="idash" loading="lazy" title="Pacific Edge AI dashboard preview" scrolling="no" />
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="testimonial">
        <div className="wrap">
          <div className="sl reveal">In Their Words</div>
          <h2 className="st reveal d1">Trusted On The <span className="a">Jobsite.</span></h2>
          <div className="tcard reveal d2">
            <div className="tquote-mark">“</div>
            <div className="tstars">★★★★★</div>
            <p className="tquote">Every missed call gets texted back in seconds, and Janice <b>holds the slot until my crew confirms it</b>. We booked three extra jobs our first week.</p>
            <div className="tby"><div className="tav">CM</div><div><div className="tname">Carter Macintosh</div><div className="trole">Owner, Pinnacle Ridge Contracting</div></div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Contractors <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Can it answer when I am on a job and cannot pick up?<span className="faq-ico" /></summary><div className="faq-body">Yes. The moment a call goes unanswered, your AI texts the customer back, finds out what they need, and books or qualifies the job while you keep working.</div></details>
            <details className="faq-item reveal"><summary>Will it work with my phone number and CRM?<span className="faq-ico" /></summary><div className="faq-body">Yes. It works with your existing business number and the tools you already use, so leads land where you already track them.</div></details>
            <details className="faq-item reveal"><summary>Can it handle after-hours and emergency calls?<span className="faq-ico" /></summary><div className="faq-body">Yes. After hours it can answer, triage urgency, and book the first available slot, so your best-margin emergency calls stop going to voicemail.</div></details>
            <details className="faq-item reveal"><summary>How long until it is live?<span className="faq-ico" /></summary><div className="faq-body">Usually about a week from our first call. We build it, you test it on a few calls, and we adjust it before it handles real customers.</div></details>
            <details className="faq-item reveal"><summary>How much does it cost?<span className="faq-ico" /></summary><div className="faq-body">It depends on what you automate. The 15-minute discovery call is free, and we scope a flat-priced plan around your call and quote volume.</div></details>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Ready To Win<br /><span className="a">Every Lead?</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute call. We will show you exactly which automations would capture the most jobs you are missing right now. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
          <div className="reveal d2" style={{ marginTop: 18 }}><a href="/trades-savings-calculator.html" className="btn-light">📊 See What Your Missed Calls Are Worth →</a></div>
          <div className="icta-bullets reveal d3">
            <span><i />Free discovery call</span>
            <span><i />Working prototype in about a week</span>
            <span><i />Vancouver-based</span>
          </div>
          <div className="xlinks reveal d3">
            <Link href="/restaurants" className="xlink"><span>🍽️</span>Restaurants</Link>
            <Link href="/salons" className="xlink"><span>💆</span>Salons &amp; Spas</Link>
            <Link href="/retail" className="xlink"><span>🛍️</span>Retail</Link>
            <Link href="/dental" className="xlink"><span>🦷</span>Dental</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
