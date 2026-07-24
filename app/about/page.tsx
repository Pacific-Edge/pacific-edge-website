import type { Metadata } from "next"
import Image from "next/image"
import SiteShell from "@/components/site/SiteShell"
import { Divider, Hero, Section, SectionHeader } from "@/components/ui/sections"

export const metadata: Metadata = {
  title: { absolute: "About Pacific Edge AI | Built By Operators, For Local Business" },
  description:
    "Pacific Edge AI was founded by Leone Jiwani and Sam Rezaei, Vancouver operators who build the AI software that handles the admin work they used to do by hand.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow="About Us"
          title={<>Built By Operators,<br /><span className="a">For Local Business.</span></>}
          sub="We're business owners who spent years doing the admin work ourselves before we started building the software to handle it."
        />

        <Divider />

        <Section id="approach">
          <SectionHeader
            center
            title={<>We Start With<br /><span className="a">The Cost.</span></>}
            lead={
              <>
                Every automation we build starts with one question: what&apos;s costing you the most hours and
                dollars right now? We fix that first.
                <br />
                <br />
                We&apos;re based in Vancouver, we meet in person when you want to, and we stay on the account
                after launch instead of handing you off to a support queue.
              </>
            }
          />
        </Section>

        <Divider />

        <Section id="founders">
          <SectionHeader
            center
            eyebrow="The Founders"
            title={<>Who&apos;s Behind<br /><span className="a">The Build.</span></>}
          />
          <div className="founders">
            <div className="founder-card r rd1">
              <div className="founder-photo">
                <Image src="/leone.png" alt="Leone Jiwani, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} />
              </div>
              <div className="founder-info">
                <div className="founder-name">Leone Jiwani <span className="founder-role">Co-Founder</span></div>
                <p className="founder-bio">A BBA graduate of BCIT, Leone has spent years building and scaling real ventures, leading finance for the BCIT Real Estate Association, running special projects at Concord Pacific, and growing his own brand, Glarehawks, past 23,500 followers. Across all of it, one pattern kept repeating: capable owners losing their nights to admin that good software could finish in minutes. He started Pacific Edge to hand that time back, without the enterprise price tag.</p>
              </div>
            </div>
            <div className="founder-card r rd2">
              <div className="founder-photo">
                <Image src="/sam.jpg" alt="Sam Rezaei, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} />
              </div>
              <div className="founder-info">
                <div className="founder-name">Sam Rezaei <span className="founder-role">Co-Founder</span></div>
                <p className="founder-bio">A finance student at UBC Sauder and Dean&rsquo;s List honoree, Sam has worked on institutional real estate and finance at QuadReal and Wesgroup, and spent three years coordinating projects at a rebar fabrication plant, where he watched capable teams buried under busywork the right tools could have erased. He co-founded Pacific Edge AI to give local businesses that leverage: less manual work, and clear answers from the data they already have.</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </SiteShell>
  )
}
