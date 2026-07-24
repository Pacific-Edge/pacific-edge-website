import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "About Pacific Edge AI | Built By Operators, For Local Business" },
  description:
    "Pacific Edge AI was founded by Leone Jiwani and Sam Rezaei, Vancouver operators who build the AI software that handles the admin work they used to do by hand.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <SiteShell>
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1"></div>
        <div className="ihero-orb ihero-orb-2"></div>
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot"></span>About Us</div>
          <h1 className="reveal d1">Built By Operators,<br /><span className="a">For Local Business.</span></h1>
          <p className="ihero-sub reveal d2">We&apos;re business owners who spent years doing the admin work ourselves before we started building the software to handle it.</p>
        </div>
      </header>

      <div className="divhr" />

      <section id="story">
        <div className="wrap">
          <div className="r" style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2 className="st reveal d1">We Start With<br /><span className="a">The Cost.</span></h2>
            <p className="sd reveal d2">
              Every automation we build starts with one question: what&apos;s costing you the most hours and
              dollars right now? We fix that first.
            </p>
            <p className="sd reveal d3">
              We&apos;re based in Vancouver, we meet in person when you want to, and we stay on the account
              after launch instead of handing you off to a support queue.
            </p>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="founders">
        <div className="wrap">
          <div className="sl reveal sl-c tac">The Founders</div>
          <h2 className="st reveal d1 tac">Who&apos;s Behind<br /><span className="a">The Build.</span></h2>
          <div className="founders">
            <div className="founder-card r rd1">
              <div className="founder-photo">
                <img src="/leone.png" alt="Leone Jiwani, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} />
              </div>
              <div className="founder-info">
                <div className="founder-name">Leone Jiwani <span className="founder-role">Co-Founder</span></div>
                <p className="founder-bio">A BBA graduate of BCIT, Leone has spent years building and scaling real ventures, leading finance for the BCIT Real Estate Association, running special projects at Concord Pacific, and growing his own brand, Glarehawks, past 23,500 followers. Across all of it, one pattern kept repeating: capable owners losing their nights to admin that good software could finish in minutes. He started Pacific Edge to hand that time back, without the enterprise price tag.</p>
              </div>
            </div>
            <div className="founder-card r rd2">
              <div className="founder-photo">
                <img src="/sam.jpg" alt="Sam Rezaei, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} />
              </div>
              <div className="founder-info">
                <div className="founder-name">Sam Rezaei <span className="founder-role">Co-Founder</span></div>
                <p className="founder-bio">A finance student at UBC Sauder and Dean&rsquo;s List honoree, Sam has worked on institutional real estate and finance at QuadReal and Wesgroup, and spent three years coordinating projects at a rebar fabrication plant, where he watched capable teams buried under busywork the right tools could have erased. He co-founded Pacific Edge AI to give local businesses that leverage: less manual work, and clear answers from the data they already have.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>No-Risk Start</div>
          <h2 className="icta-title reveal d1">One Month<br /><span className="a">On Us.</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute call. If Janice isn&apos;t the right fit after the first month, cancel at no cost.</p>
          <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
        </div>
      </section>
    </SiteShell>
  )
}
