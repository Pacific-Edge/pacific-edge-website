/*
 * Data for the dental pricing page, transcribed verbatim from the old static
 * public/dental-pricing.html (the INFO glossary, the 3 pricing cards, and the
 * full comparison table). Content is preserved exactly; only the shape is
 * TypeScript.
 */

export type Term = "6" | "12"
export type TierMark = "ok" | "no" | "add"

export interface InfoEntry {
  title: string
  body: string
}

/** Glossary shown in the "what this means" modal, keyed by the row's info key. */
export const INFO: Record<string, InfoEntry> = {
  sync: {
    title: "Read-only schedule sync",
    body: "A small connector reads your practice software's schedule every couple of minutes, read-only. Janice always works from your real book, and nothing in your software is ever changed on this tier; your team enters bookings from the one-tap approval screen. Your practice software stays the source of truth.",
  },
  txt: {
    title: "24/7 text replies",
    body: "Patients text your existing practice number and Janice answers within seconds, day or night, weekends and holidays included. She books, reschedules, and answers questions from your approved clinic facts. If she is unsure or the question is clinical, she hands the conversation to your team and never guesses.",
  },
  cxl: {
    title: "Unlimited cancellation recovery",
    body: "A cancellation appears in your practice software and Janice picks it up within a couple of minutes. She ranks your patients by fit for that exact opening: preferred day, morning or afternoon habit, usual provider, and how due they are. Your front desk approves the shortlist in one tap and the first yes gets the chair. Anyone who says yes after it is taken is offered the next best opening instead of just an apology. No monthly cap.",
  },
  advpull: {
    title: "Advance-pull",
    body: "When a sooner slot opens, Janice offers a move-up to well-matched patients already booked weeks out. They get seen earlier, and their old appointment goes back into the pool for someone else. One cancellation can set off a chain of fills instead of just one.",
  },
  onetap: {
    title: "One-tap approvals",
    body: "Janice finds the patients and writes the messages; your team reviews the shortlist and sends with a single tap, so nothing reaches a patient your front desk has not seen. As trust builds, you choose which sends Janice handles on her own. Every threshold, template, and frequency cap is yours to set.",
  },
  remA: {
    title: "Appointment reminders",
    body: "Automatic text reminders before every booked appointment, at timing you choose, for example 48 hours and 2 hours before, with one-tap confirm or reschedule replies. Covers upcoming booked appointments only; hygiene recalls and unpaid balances have their own features, so nothing double-texts a patient.",
  },
  multi: {
    title: "Automatic provider & location routing",
    body: "Runs on the same weighted fit-scoring engine as cancellation recovery: Janice automatically weighs each patient's usual provider and location, so hygiene openings go to hygiene patients and each doctor's patients are matched back to them, across every location, with no manual sorting.",
  },
  faq: {
    title: "Practice questions, answered instantly",
    body: "During setup you approve a clinic-facts knowledge base once: plans you bill, fees, directions, parking, hours, policies. Janice answers only from those approved facts, instantly and consistently. If a question is not covered or is clinical, she says so and hands it to your team instead of guessing.",
  },
  urg: {
    title: "Urgent patient flags",
    body: "Messages that mention signs of a dental emergency, severe pain, swelling, bleeding, a broken tooth, are flagged and land in your team's follow-ups inbox immediately, with a reply already drafted by Janice for your staff to approve. Real emergencies never sit unread.",
  },
  adj: {
    title: "Unlimited adjustments",
    body: "Want Janice to phrase something differently, stop offering Fridays, or handle a new policy? Tell us and we tune her at no extra charge, within reason. Every setting is per-clinic: thresholds, scoring, templates, frequency caps. Net-new custom builds are scoped separately.",
  },
  roiA: {
    title: "Monthly ROI report",
    body: "Every month, on every plan, and written into your agreement rather than offered as a courtesy: chairs refilled, with attended visits separated from no-shows and patient cancellations and reconciled against your practice software's records, plus advance-pulls completed, reminder confirmations, average reply speed, estimated production recovered, and opt-outs.",
  },
  wb: {
    title: "Booking write-back",
    body: "Full-Time adds write access: Janice books, confirms, and reschedules directly in your practice software with no retyping, and it remains the source of truth. On Part-Time the connection is read-only and your team enters bookings from the one-tap screen.",
  },
  recall: {
    title: "Hygiene recall with smart time suggestions",
    body: "At the six-month mark Janice texts that the patient is due, and instead of a bare reminder she proposes a real open slot matched to their pattern, so someone who always comes after 6 pm is offered an evening opening. One tap books it, and a polite follow-up goes out if the first message is not answered.",
  },
  post: {
    title: "Post-visit check-ins",
    body: "After an appointment, Janice sends your aftercare instructions and asks how the patient is doing. Replies that mention problems are flagged to your team right away. Every message is written in your practice's tone and approved by you before launch.",
  },
  tx: {
    title: "Unscheduled treatment follow-up",
    body: "Patients who were diagnosed or quoted for treatment but never booked get a respectful follow-up sequence: a reminder of what the doctor recommended and an easy way to book it. For most practices this is the single largest pile of unclaimed revenue on the books.",
  },
  port: {
    title: "Patient portal",
    body: "A simple page patients open from a text link, no app, no password. They see upcoming appointments, request a change, ask to be moved up if something earlier opens, and manage the whole household from one link, so one parent handles the family. Your team approves changes from the dashboard.",
  },
  forms: {
    title: "Digital intake & consent forms",
    body: "Intake and consent forms live inside the patient portal: patients tap their text link, fill and sign on their phone before the visit, and the signed PDF lands with your team automatically. One link for the patient, no clipboards in the waiting room.",
  },
  welcome: {
    title: "New patient welcome series",
    body: "New patients get a short welcome sequence by text: what to expect, directions and parking, and their portal link with forms ready to sign, so first impressions are handled before they sit down.",
  },
  paylink: {
    title: "Automatic payment links",
    body: "After a visit, Janice calculates what the patient owes after insurance, or the full amount if there is no coverage, and texts a secure Stripe payment link, to the patient or to a family member who handles the bills. If your practice software does not track invoices, your front desk enters the invoice in Janice's dashboard, picks the patient, and Janice does the math and sends the link. Unpaid links hand off to Payment reminders.",
  },
  payrem: {
    title: "Payment reminders",
    body: "When a payment link or balance sits unpaid past your chosen window, about five days by default, Janice sends a friendly nudge with the link again. Timing and tone are yours to set. Works hand in hand with Automatic payment links and never overlaps appointment or recall reminders.",
  },
  roiB: {
    title: "Upgraded monthly ROI report",
    body: "Everything in the regular report, plus the numbers dentists actually manage by: no-show and confirmation rate trends, hygiene recall booking rate and reappointment percentage, unscheduled treatment conversion with the dollar pipeline behind it, production recovered by provider and by location, payment collection speed, and month-over-month trend lines so you see direction, not just totals.",
  },
  react: {
    title: "Reactivation campaigns",
    body: "We pull your list of patients who have not visited in a year or more and Janice runs a respectful win-back campaign in waves: a warm message, an easy booking path, and a follow-up. Responders get rebooked; dead numbers get cleaned from your list.",
  },
  referral: {
    title: "Referral request campaigns",
    body: "Happy, established patients get a simple text with a personal referral link to share with friends and family. Every referral is tracked to the patient who sent it, so you know who to thank.",
  },
  benefits: {
    title: "Benefits-expiry campaigns",
    body: "Each fall Janice finds active patients with unused insurance coverage and invites them to book before benefits reset on December 31, sent only to patients who have consented to these messages. A different job than reactivation, which wins back patients gone a year or more.",
  },
  social: {
    title: "Monthly social content pack",
    body: "A monthly pack of ready-to-post content for your Instagram and Facebook, written in your clinic's voice around your services and offers. You approve it, we schedule it or you post it. Brand awareness without hiring a marketer.",
  },
  bport: {
    title: "Clinic-branded portal",
    body: "The patient portal carries your clinic's name, colours, and logo, adds a refer-a-friend hub, and supports multiple locations under one brand.",
  },
  cust: {
    title: "Custom automations & integrations",
    body: "We build the specific workflows your practice needs and connect them to the software you already run. Every build is scoped and quoted with you before work starts.",
  },
  qsr: {
    title: "Quarterly strategy sessions",
    body: "Every quarter, the founders sit down with you, review your numbers, and plan the next 90 days of campaigns and improvements. You get a roadmap, not a support ticket.",
  },
  first: {
    title: "First access",
    body: "When we launch a new Janice capability, Partner practices get it first, included in their plan.",
  },
  mctb: {
    title: "Missed-call text-back",
    body: "Connects to your phone line. Any call your team cannot pick up triggers an instant text from Janice to that caller: sorry we missed you, how can we help? She then answers and books by text. Most callers who hit voicemail never leave a message; this catches them before they call the next practice.",
  },
  voice: {
    title: "Live voice answering",
    body: "Janice will pick up your phone with a natural, live voice around the clock, answer common questions, book appointments, and transfer to your team the moment a caller asks for a person. In development now; add-on pricing announced at launch.",
  },
  dm: {
    title: "Social DM coverage",
    body: "Janice answers your Instagram and Facebook direct messages the same way she answers texts, in your voice, and books appointments straight from the conversation.",
  },
  rev: {
    title: "Review engine",
    body: "After good visits, Janice texts patients a direct link to your Google review page. Signals of an unhappy visit are routed privately to your team first. A steady flow of fresh reviews is the strongest lever for showing up when locals search for a dentist.",
  },
  dep: {
    title: "Deposits at booking",
    body: "For long or high-value appointments, Janice texts a secure card link to take a deposit at booking, so booked means committed. Distinct from Automatic payment links, which collect the balance after the visit. Processed by Stripe; funds settle to your account.",
  },
  selfbook: {
    title: "Online self-booking",
    body: "The patient portal gains real-time self-booking into open slots you control. Patients pick from availability you approve; everything still lands in your schedule under your rules.",
  },
  adash: {
    title: "Advanced analytics dashboard",
    body: "The upgraded ROI report as a live screen instead of a monthly document: trends, drill-downs by provider and location, and exports, updated continuously from the data Janice already tracks. The operational dashboard for approvals and conversations is included with every plan; this is the analytics layer on top.",
  },
}

export interface PriceCard {
  name: string
  tag: string
  was: string
  from?: boolean
  badge?: string
  ctaMint?: boolean
  num: Record<Term, number>
  save: Record<Term, string>
  termnote: Record<Term, string>
  extraSave?: string
}

export const CARDS: PriceCard[] = [
  {
    name: "PART-TIME",
    tag: "Janice covers what you miss.",
    was: "$899/MO",
    num: { "6": 749, "12": 699 },
    save: { "6": "SAVE $150/MO", "12": "SAVE $200/MO" },
    termnote: {
      "6": "6-MONTH TERM · MONTH-TO-MONTH AFTER",
      "12": "12-MONTH COMMITMENT · 30 DAYS' NOTICE AFTER",
    },
  },
  {
    name: "FULL-TIME",
    tag: "Janice covers every channel and works ahead.",
    was: "$1,349/MO",
    badge: "MOST HIRED",
    ctaMint: true,
    num: { "6": 1149, "12": 1049 },
    save: { "6": "SAVE $200/MO", "12": "SAVE $300/MO" },
    termnote: {
      "6": "6-MONTH TERM · MONTH-TO-MONTH AFTER",
      "12": "12-MONTH COMMITMENT · 30 DAYS' NOTICE AFTER",
    },
  },
  {
    name: "PARTNER",
    tag: "Janice fills the chairs and grows the book.",
    was: "$2,399/MO",
    from: true,
    num: { "6": 1999, "12": 1799 },
    save: { "6": "SAVE $400/MO", "12": "SAVE $600/MO" },
    termnote: {
      "6": "6-MONTH TERM · MONTH-TO-MONTH AFTER",
      "12": "12-MONTH COMMITMENT · 30 DAYS' NOTICE AFTER",
    },
    extraSave: "EVERY ADD-ON INCLUDED",
  },
]

/** Per-tier price shown in the comparison table header (the `.tp` spans). */
export interface ColumnPrice {
  prefix: string
  num: Record<Term, number>
  suffix: string
}

export const COLUMN_PRICES: ColumnPrice[] = [
  { prefix: "$", num: { "6": 749, "12": 699 }, suffix: "/MO" },
  { prefix: "$", num: { "6": 1149, "12": 1049 }, suffix: "/MO" },
  { prefix: "FROM $", num: { "6": 1999, "12": 1799 }, suffix: "/MO" },
]

export interface TableRow {
  label: string
  comingSoon?: boolean
  infoKey: string
  tiers: [TierMark, TierMark, TierMark]
}

export interface TableSection {
  title: string
  /** Group description; may contain a bolded fragment (see `descBold`). */
  desc: string
  descBold?: string
  addons?: boolean
  rows: TableRow[]
}

export const TABLE: TableSection[] = [
  {
    title: "WHAT JANICE HANDLES",
    desc: "Included in every tier.",
    rows: [
      { label: "Reads your schedule in real time (read-only sync)", infoKey: "sync", tiers: ["ok", "ok", "ok"] },
      { label: "Answers every patient text message in seconds, 24/7", comingSoon: true, infoKey: "txt", tiers: ["ok", "ok", "ok"] },
      { label: "Fills cancelled chairs with best-fit patients, unlimited", infoKey: "cxl", tiers: ["ok", "ok", "ok"] },
      { label: "Advance-pull: moves booked patients into earlier openings", infoKey: "advpull", tiers: ["ok", "ok", "ok"] },
      { label: "One-tap approvals: your front desk controls what goes out", infoKey: "onetap", tiers: ["ok", "ok", "ok"] },
      { label: "Appointment reminders with one-tap confirm or reschedule", infoKey: "remA", tiers: ["ok", "ok", "ok"] },
      { label: "Multi-provider & multi-location routing, automatic", infoKey: "multi", tiers: ["ok", "ok", "ok"] },
      { label: "Answers insurance, pricing & parking questions by text", comingSoon: true, infoKey: "faq", tiers: ["ok", "ok", "ok"] },
      { label: "Flags urgent patients to your front desk instantly", comingSoon: true, infoKey: "urg", tiers: ["ok", "ok", "ok"] },
      { label: "Unlimited adjustments within reason: we retune Janice when you ask", infoKey: "adj", tiers: ["ok", "ok", "ok"] },
      { label: "Monthly ROI report", infoKey: "roiA", tiers: ["ok", "ok", "ok"] },
    ],
  },
  {
    title: "KEEPING THE BOOK FULL",
    desc: "Full-Time and up. Janice works ahead so chairs stay filled.",
    rows: [
      { label: "Write-back: books, confirms & reschedules straight into your schedule", comingSoon: true, infoKey: "wb", tiers: ["no", "ok", "ok"] },
      { label: "6-month hygiene recall with a suggested time that fits their routine", infoKey: "recall", tiers: ["no", "ok", "ok"] },
      { label: "Post-visit check-ins: aftercare and a how-did-it-go text", infoKey: "post", tiers: ["no", "ok", "ok"] },
      { label: "Unscheduled treatment follow-up: rebooks diagnosed but unbooked work", infoKey: "tx", tiers: ["no", "ok", "ok"] },
      { label: "Patient portal with household view: see appointments, request changes", comingSoon: true, infoKey: "port", tiers: ["no", "ok", "ok"] },
      { label: "Digital intake & consent forms, built into the patient portal", comingSoon: true, infoKey: "forms", tiers: ["no", "ok", "ok"] },
      { label: "New patient welcome series", infoKey: "welcome", tiers: ["no", "ok", "ok"] },
      { label: "Automatic payment links: texts the insurance difference after the visit", comingSoon: true, infoKey: "paylink", tiers: ["no", "ok", "ok"] },
      { label: "Payment reminders for unpaid balances", comingSoon: true, infoKey: "payrem", tiers: ["no", "ok", "ok"] },
      { label: "Upgraded monthly ROI report", infoKey: "roiB", tiers: ["no", "ok", "ok"] },
    ],
  },
  {
    title: "GROWTH & SCALE",
    desc: "Partner only. Marketing muscle for practices going on offence.",
    rows: [
      { label: "Reactivation campaigns for patients gone 12+ months", infoKey: "react", tiers: ["no", "no", "ok"] },
      { label: "Referral request campaigns", infoKey: "referral", tiers: ["no", "no", "ok"] },
      { label: "Benefits-expiry campaigns: books unused insurance before year-end", infoKey: "benefits", tiers: ["no", "no", "ok"] },
      { label: "Monthly social content pack in your brand voice", infoKey: "social", tiers: ["no", "no", "ok"] },
      { label: "Clinic-branded portal with a refer-a-friend hub", comingSoon: true, infoKey: "bport", tiers: ["no", "no", "ok"] },
      { label: "Custom automations & integrations", infoKey: "cust", tiers: ["no", "no", "ok"] },
      { label: "Quarterly strategy sessions with the founders", infoKey: "qsr", tiers: ["no", "no", "ok"] },
      { label: "First access to every new Janice skill", infoKey: "first", tiers: ["no", "no", "ok"] },
    ],
  },
  {
    title: "ADD-ONS",
    desc: "Custom priced. Add to any tier. ",
    descBold: "Partner includes every add-on.",
    addons: true,
    rows: [
      { label: "Missed-call text-back: unanswered calls get an instant text", infoKey: "mctb", tiers: ["add", "add", "ok"] },
      { label: "Live voice answering, 24/7", comingSoon: true, infoKey: "voice", tiers: ["add", "add", "ok"] },
      { label: "Social DM coverage: Instagram & Facebook", infoKey: "dm", tiers: ["add", "add", "ok"] },
      { label: "Review engine: turns happy visits into Google reviews", infoKey: "rev", tiers: ["add", "add", "ok"] },
      { label: "Deposits for big appointments", infoKey: "dep", tiers: ["add", "add", "ok"] },
      { label: "Portal upgrade: online self-booking", comingSoon: true, infoKey: "selfbook", tiers: ["add", "add", "ok"] },
      { label: "Advanced analytics dashboard", infoKey: "adash", tiers: ["add", "add", "ok"] },
    ],
  },
]

/** The strip line's term-dependent clause. */
export const TERMLINE: Record<Term, string> = {
  "6": "6-MONTH TERM · MONTH-TO-MONTH AFTER · 30 DAYS' NOTICE",
  "12": "12-MONTH COMMITMENT · 30 DAYS' NOTICE AFTER TERM",
}
