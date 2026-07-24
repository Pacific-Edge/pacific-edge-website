import type { Metadata } from "next"
import { Phone, MessageCircle, Calendar, Play, RotateCcw, CheckCircle2, Star, X, PenLine, MessageSquare, Camera, Mail, Bell, Folder, Settings, MapPin, Plug } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import JaniceDemo from "@/components/site/JaniceDemo"
import JaniceInsights from "@/components/site/JaniceInsights"
import { AlternatingTextSection, ChipsSection, MetricsBandSection, FaqSection, GetStartedSection } from "@/components/subpage-sections"
import { Card, CardGrid, Divider, Hero, Section, SectionHeader } from "@/components/ui/sections"
import { MockFeedCard } from "@/components/ui/graphics/MockFeedCard"
import {
  BUBBLE_RECEIVED_CLASS,
  PHONE_CHAT_CLASS,
  PHONE_FRAME_CLASS,
  PHONE_NOTCH_CLASS,
  PHONE_SCREEN_CLASS,
  PHONE_SHELL_CLASS,
} from "@/components/demo/phone-chat-styles"

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
<div className="pe-sub">
<Hero
  pre={<div className="je-hero-av">J</div>}
  eyebrow={<>Your AI Employee &middot; Pacific Edge AI</>}
  title={<>Meet Janice.<br /><span className="a">Your AI Employee.</span></>}
  sub="Janice is the AI employee behind Pacific Edge AI. She answers your calls and messages, books the work, fills cancelled spots from your waitlist, sends reminders, and replies to reviews. She works around the clock, in your business's voice."
  actions={
    <>
      <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
      <a href="#try-it-live" className="btn-dark"><Play size={13} fill="currentColor" strokeWidth={0} />Try Janice Live</a>
    </>
  }
  stats={[
    { value: "24/7", label: "Always on" },
    { value: "<30s", label: "To reply" },
    { value: "5", label: "Channels covered" },
  ]}
  trust={<>Works with your existing phone number and tools &middot; No tech team required</>}
/>

<Divider />

<Section id="overview">
  <SectionHeader
    center
    eyebrow="Overview"
    title={<>Catches What Used<br /><span className="a">To Slip Through.</span></>}
    lead="While you run your business, Janice handles the calls, bookings, and reviews that would otherwise wait until morning, including nights and weekends."
  />
</Section>

<Divider />

<Section id="capabilities">
  <SectionHeader
    eyebrow="What Janice Does"
    title={<>The Work Janice <span className="a">Handles Every Day.</span></>}
    lead="Janice covers calls, messages, bookings, and follow-up around the clock, including nights, weekends, and holidays."
  />
  <CardGrid cols={3}>
    <Card reveal={1} icon={<Phone size={20} strokeWidth={1.75} />} title="Answers calls" note="Calls">
      Picks up, or texts back a missed call within seconds, so the inquiry doesn&apos;t sit in voicemail.
    </Card>
    <Card reveal={2} icon={<MessageCircle size={20} strokeWidth={1.75} />} title="Replies across channels" note="Messaging">
      Phone, SMS, Instagram, web chat, and email, answered from one system, in your tone of voice.
    </Card>
    <Card reveal={3} icon={<Calendar size={20} strokeWidth={1.75} />} title={<>Books &amp; reschedules</>} note="Booking">
      Offers open times and adds the booking directly to the calendar and tools you already use.
    </Card>
    <Card reveal={1} icon={<RotateCcw size={20} strokeWidth={1.75} />} title="Fills cancellations" note="Recovery">
      As soon as a spot opens, Janice offers it to your waitlist and books the first person who accepts.
    </Card>
    <Card reveal={2} icon={<CheckCircle2 size={20} strokeWidth={1.75} />} title={<>Confirms &amp; reminds</>} note="Reminders">
      Automatic confirmations, reminders, and recalls that cut no-shows and bring customers back on schedule.
    </Card>
    <Card reveal={3} icon={<Star size={20} strokeWidth={1.75} />} title={<>Follows up &amp; requests reviews</>} note="Follow-up">
      Follows up on quotes and treatment plans, then asks satisfied customers for a review after their visit.
    </Card>
  </CardGrid>
</Section>

<Divider />

<AlternatingTextSection
  id="moments"
  eyebrow="How It Works"
  title={<>A Closer Look At <span className="a">Three Moments.</span></>}
  lead="Three examples of what Janice handles day to day."
  rows={[
    {
      eyebrow: "Always Answering",
      title: <>Missed Calls, <span className="a">Answered Anyway.</span></>,
      body: "Whether you're slammed, closed, or mid-job, Janice answers or texts back within seconds, captures what the customer needs, and books it before they move on.",
      points: [
        "Texts back missed calls in under 30 seconds",
        "Answers the routine questions on her own",
        "Hands anything tricky straight to your team",
      ],
      visual: (
        <MockFeedCard
          headTitle={<>Missed Call &middot; Recovered</>}
          rows={[
            { avatar: <Phone size={15} strokeWidth={2} />, name: "+1 (604) 555-0148", sub: "Missed at 7:14 PM", pill: { label: <>Texted &middot; 19s</>, tone: "ok" } },
            { avatar: <CheckCircle2 size={15} strokeWidth={2} />, name: "Booked by Janice", sub: <>Captured &amp; confirmed</>, pill: { label: "Done", tone: "ok" } },
          ]}
        />
      ),
    },
    {
      eyebrow: "Cancellation Recovery",
      title: <>Fills The Gap <span className="a">Before It Costs You.</span></>,
      body: "When a cancellation happens, Janice offers the opening to your waitlist and rebooks it, often within minutes.",
      points: [
        "Detects a cancellation the instant it lands",
        "Offers the slot to your waitlist automatically",
        "Rebooks the first yes, so the time is never wasted",
      ],
      visual: (
        <MockFeedCard
          headTitle={<>Cancellation &middot; Refilled</>}
          rows={[
            { avatar: <X size={15} strokeWidth={2} />, name: "2:00 PM cancelled", sub: "Offered to 4 on waitlist", pill: { label: "Open", tone: "warn" } },
            { avatar: <RotateCcw size={15} strokeWidth={2} />, name: "Rebooked in 6 min", sub: "From the waitlist", pill: { label: <>Refilled &middot; +$180</>, tone: "ok" } },
          ]}
        />
      ),
    },
    {
      eyebrow: "Your Voice, Your Rules",
      title: <>Sounds Like You. <span className="a">You Stay In Control.</span></>,
      body: "Janice is trained on your business, your services, and your tone, so every reply feels like your team wrote it. You set the rules, approve the voice, and step in whenever you like.",
      points: [
        "Trained on your business and tone of voice",
        "Flags anything sensitive for a human",
        "Jump into any conversation at any time",
      ],
      visual: (
        <MockFeedCard
          headTitle={<>Review &middot; Drafted For You</>}
          rows={[
            { avatar: <Star size={15} strokeWidth={2} />, name: "5-star from Sarah K.", sub: <><Star size={11} fill="currentColor" strokeWidth={0} /><Star size={11} fill="currentColor" strokeWidth={0} /><Star size={11} fill="currentColor" strokeWidth={0} /><Star size={11} fill="currentColor" strokeWidth={0} /><Star size={11} fill="currentColor" strokeWidth={0} /></>, stars: true, pill: { label: "Reply drafted", tone: "ok" } },
            { avatar: <PenLine size={15} strokeWidth={2} />, name: "In your voice", sub: "One tap to approve", pill: { label: "Ready", tone: "ok" } },
          ]}
        />
      ),
    },
  ]}
/>

<Divider />

<Section id="try-it-live">
<div className="pe-show">
<div className="pe-show-text">
<div className="pe-eyebrow reveal">Try It Live</div>
<h2 className="pe-sechead-title reveal d1">Text <span className="a">Janice Yourself.</span></h2>
<p className="pe-sechead-lead reveal d2">This is the real thing, not a video. Type a message and Janice answers, just like she would for your customers. Ask about hours or prices, or try booking a time.</p>
<div className="pe-show-steps">
<div className="pe-show-step reveal d2"><div className="pe-show-step-n">1</div><div><h4>A call or message comes in</h4><p>Even after hours, when the phone would normally ring out or sit in an inbox.</p></div></div>
<div className="pe-show-step reveal d3"><div className="pe-show-step-n">2</div><div><h4>Janice replies and books it</h4><p>She answers the question, offers an available time, and confirms the booking.</p></div></div>
<div className="pe-show-step reveal d4"><div className="pe-show-step-n">3</div><div><h4>It lands on your dashboard</h4><p>The booking shows up in your tools and your live dashboard, with reminders queued.</p></div></div>
</div>
</div>
<div className="pe-show-phone reveal d2">
<div className={PHONE_SHELL_CLASS}>
<div className={PHONE_FRAME_CLASS}>
<div className={PHONE_NOTCH_CLASS} aria-hidden />
<div className={PHONE_SCREEN_CLASS}>
<div className="flex shrink-0 items-center gap-2.5 border-b border-neutral-300/30 px-3 py-2.5 pt-6">
<div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-system text-xs font-bold text-white">J</div>
<div className="min-w-0">
<p className="truncate font-system text-xs font-medium text-neutral-900">Janice &middot; Pacific Edge AI</p>
<p className="truncate font-system text-[10px] text-neutral-900/45">online now</p>
</div>
</div>
<div className={PHONE_CHAT_CLASS} id="jeChat">
<p className="text-center font-system text-[10px] uppercase tracking-wide text-neutral-900/35">Now &middot; A live demo &middot; text Janice anything</p>
<noscript><div className={BUBBLE_RECEIVED_CLASS}>Hi! I&apos;m Janice, answering calls and texts for local businesses 24/7. Turn on JavaScript to chat with me right here, or tap &ldquo;Book a Free 15-Min Demo&rdquo; to see me live.</div></noscript>
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
</Section>

<MetricsBandSection
  stats={[
    { to: 20, unit: "s", label: "Average time to reply" },
    { to: 95, unit: "%", label: "Of calls answered or texted back" },
    { to: 30, unit: "%", label: "Fewer no-shows on average" },
    { to: 18, unit: "hrs", label: "Handed back to you weekly" },
  ]}
  note="Outcomes we design toward with Janice"
/>

<Section id="integrations">
<SectionHeader
  eyebrow="Why Janice"
  title={<>Built Around <span className="a">Your Business.</span></>}
  lead="Janice is built around your business and connects to the software you already run, so your calls, bookings, and reviews stay in sync."
/>

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
</Section>

<Divider />

<ChipsSection
  id="channels"
  eyebrow="Channels"
  title={<>One System, <span className="a">Five Channels.</span></>}
  lead="Phone, SMS, Instagram, web chat, and email, answered from one system."
  chips={[
    { icon: <Phone size={16} strokeWidth={2} />, label: "Phone calls" },
    { icon: <MessageSquare size={16} strokeWidth={2} />, label: "SMS" },
    { icon: <Camera size={16} strokeWidth={2} />, label: "Instagram" },
    { icon: <MessageCircle size={16} strokeWidth={2} />, label: "Web chat" },
    { icon: <Mail size={16} strokeWidth={2} />, label: "Email" },
  ]}
/>

<Divider />

<FaqSection
  title={<>About <span className="a">Janice.</span></>}
  items={[
    { q: "Is Janice a real person?", a: "No. Janice is the name for the AI employee from Pacific Edge AI. She handles calls and messages automatically, and hands anything sensitive to your team." },
    { q: "Will Janice sound like a robot?", a: "No. We train her on your business and your tone, so replies sound like they came from your team. You approve the voice before she goes live." },
    { q: "What channels does Janice work across?", a: "Phone calls, SMS, Instagram and Facebook messages, web chat, and email, all from one place, using the number and tools you already have." },
    { q: "How does Janice fill a cancelled spot?", a: "The moment an appointment or reservation is cancelled, Janice offers the open slot to people on your waitlist and books the first to say yes, so the time does not go to waste." },
    { q: "Do I stay in control?", a: "Always. You set the rules, approve the tone, and Janice flags anything unusual for a human. You can jump into any conversation at any time." },
    { q: "How long until Janice is live?", a: "Usually about a week from our first call. We set her up, you test her, and we fine-tune before she ever speaks to a real customer." },
  ]}
/>

<GetStartedSection
  title={<>Ready To <br /><span className="a">Hire Janice?</span></>}
  desc="Start with a free 15-minute call. We'll show you what Janice would handle for your business, and what it would put back on your books. No pitch, no obligation."
  action={<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
  bullets={["Free discovery call", "Live in about a week", "Vancouver-based"]}
/>
</div>
    </SiteShell>
  )
}
