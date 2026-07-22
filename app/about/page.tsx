import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "About Pacific Edge AI | Built By Operators, Not Agencies" },
  description:
    "Pacific Edge AI is a Vancouver team of operators and builders who sell time back to local businesses. Meet the founders, Leone Jiwani and Sam Rezaei.",
  alternates: { canonical: "/about" },
}

export default function Page() {
  return (
    <SiteShell variant="minimal">
      <div className="pe-about">
        {/* HERO */}
        <header className="ihero">
          <div className="ihero-orb ihero-orb-1"></div>
          <div className="ihero-orb ihero-orb-2"></div>
          <div className="ihero-inner">
            <div className="eyebrow reveal"><span className="eyebrow-dot"></span>About Pacific Edge &middot; Vancouver, BC</div>
            <h1 className="reveal d1">We Sell Time Back<br /><span className="a">To Local Business.</span></h1>
            <p className="ihero-sub reveal d2">Pacific Edge AI is a small Vancouver team of operators and builders. We got tired of watching capable owners lose their nights to admin that good software could finish in minutes, so we started handing that time back, without the enterprise price tag.</p>
            <div className="ihero-actions reveal d4">
              <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Call</a>
              <a href="#founders" className="btn-ghost">Meet the Founders</a>
            </div>
            <div className="cr-chips reveal d5">
              <div className="cr-chip"><span>📍</span>Vancouver, BC</div>
              <div className="cr-chip"><span>⚡</span>Prototype in week one</div>
              <div className="cr-chip"><span>🧩</span>Custom, not off-the-shelf</div>
              <div className="cr-chip"><span>🤝</span>Founder-led</div>
              <div className="cr-chip"><span>💬</span>Plain English, always</div>
            </div>
          </div>
        </header>

        <div className="divhr"></div>

        {/* WHY US + VALUES + HIGHLIGHT */}
        <section className="about" id="about">
          <div className="wrap">
            <div className="reveal">
              <div className="sl">Why Us</div>
              <h2 className="st">Built By Operators,<br /><span className="a">Not Agencies</span></h2>
              <p className="sd">We&apos;re not a faceless dev shop. We&apos;re business owners who got tired of watching local companies drown in admin work that machines should be handling.</p>
            </div>
            <div className="about-grid">
              <div className="about-content reveal d1">
                <h3>We speak business, not just code.</h3>
                <p>Most AI companies sell technology. We sell time back. Every automation we build starts with one question: what&apos;s costing you the most hours and dollars right now? Then we fix that first.</p>
                <p>We&apos;re based in Vancouver, we work face-to-face when you want it, and we don&apos;t disappear after launch. Your success is our case study.</p>
                <div className="about-values">
                  <div className="about-val"><div className="about-val-num">01</div><div className="about-val-ico">💬</div><h4>No jargon</h4><p>We explain everything in plain English. If you don&apos;t understand it, we haven&apos;t done our job.</p></div>
                  <div className="about-val"><div className="about-val-num">02</div><div className="about-val-ico">⚡</div><h4>Speed to value</h4><p>Working prototype in week one. Not month three. Not after a &ldquo;strategy phase.&rdquo;</p></div>
                  <div className="about-val"><div className="about-val-num">03</div><div className="about-val-ico">🎯</div><h4>Built to deliver</h4><p>6-month engagements with transparent pricing upfront. Long enough to deliver real ROI, never longer than the value justifies.</p></div>
                  <div className="about-val"><div className="about-val-num">04</div><div className="about-val-ico">📍</div><h4>Local &amp; hands-on</h4><p>Vancouver-based. We&apos;ll meet you at your shop, learn your workflow, and build around it.</p></div>
                </div>
              </div>
              <div className="about-highlight reveal d2">
                <div className="about-founder">
                  <div className="about-founder-av">PE</div>
                  <div><div className="about-founder-name">The Pacific Edge team</div><div className="about-founder-role">Operators &amp; builders · Vancouver, BC</div></div>
                </div>
                <div className="about-highlight-quote">We Don&apos;t Just<br />Build Tools.<br /><span className="a">We Build Time.</span></div>
                <p>Every hour your staff spends chasing missed calls, copy-pasting review replies, or manually following up with customers is an hour they&apos;re not spending on the work that actually grows your business.</p>
                <p>We automated these exact workflows for our own businesses first. That is how Janice, your AI employee, was born. Now we bring what works to the businesses that need it most.</p>
                <div className="about-proof">
                  {["Vancouver-based, face-to-face when you want it", "Working prototype in week one", "Transparent, flat pricing upfront", "We run it in our own businesses"].map((t) => (
                    <span className="about-proof-item" key={t}><span className="about-proof-ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0a9d76" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 11-13" /></svg></span>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STAT BAND */}
        <div className="statband">
          <div className="stat-row">
            <div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="1">0</span><span className="u">wk</span></div><div className="stat-lbl">To your first working prototype</div></div>
            <div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="6">0</span><span className="u">mo</span></div><div className="stat-lbl">Focused engagement, real ROI</div></div>
            <div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="100">0</span><span className="u">%</span></div><div className="stat-lbl">Custom-built, never slideware</div></div>
            <div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="2">0</span></div><div className="stat-lbl">Founders who answer the phone</div></div>
          </div>
          <p className="tac" style={{ margin: "30px auto 0", fontSize: "12px", color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>How we like to work</p>
        </div>

        {/* FOUNDERS */}
        <section id="founders">
          <div className="wrap">
            <div className="sl reveal sl-c tac">The Team</div>
            <h2 className="st reveal d1 tac">Meet The <span className="a">Founders.</span></h2>
            <p className="sd reveal d2 tac" style={{ margin: "0 auto" }}>Two operators who watched capable owners lose their nights to busywork, and decided to build the software that hands those hours back.</p>
            <div className="founders" style={{ marginTop: "48px" }}>
              <div className="founder-card reveal d1">
                <div className="founder-photo"><img src="/leone.png" alt="Leone Jiwani, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} /></div>
                <div className="founder-info">
                  <div className="founder-name">Leone Jiwani <span className="founder-role">Co-Founder</span></div>
                  <p className="founder-bio">A BBA graduate of BCIT, Leone has spent years building and scaling real ventures, leading finance for the BCIT Real Estate Association, running special projects at Concord Pacific, and growing his own brand, Glarehawks, past 23,500 followers. Across all of it, one pattern kept repeating: capable owners losing their nights to admin that good software could finish in minutes. He started Pacific Edge to hand that time back, without the enterprise price tag.</p>
                </div>
              </div>
              <div className="founder-card reveal d2">
                <div className="founder-photo"><img src="/sam.jpg" alt="Sam Rezaei, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} /></div>
                <div className="founder-info">
                  <div className="founder-name">Sam Rezaei <span className="founder-role">Co-Founder</span></div>
                  <p className="founder-bio">A finance student at UBC Sauder and Dean&rsquo;s List honoree, Sam has worked on institutional real estate and finance at QuadReal and Wesgroup, and spent three years coordinating projects at a rebar fabrication plant, where he watched capable teams buried under busywork the right tools could have erased. He co-founded Pacific Edge AI to give local businesses that leverage: less manual work, and clear answers from the data they already have.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="icta">
          <div className="ihero-inner" style={{ margin: "0 auto" }}>
            <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
            <h2 className="icta-title reveal d1">Ready To Get<br /><span className="a">Your Time Back?</span></h2>
            <p className="icta-desc reveal d2">Book a free 15-minute call. We&apos;ll find the workflow that&apos;s costing you the most hours, and show you exactly how we&apos;d hand it back.</p>
            <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Call</a>
            <div className="icta-bullets reveal d3">
              <span><i></i>Vancouver-based</span>
              <span><i></i>Prototype in week one</span>
              <span><i></i>Transparent, flat pricing</span>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  )
}
