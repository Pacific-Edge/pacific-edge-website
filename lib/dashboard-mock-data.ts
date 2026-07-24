/**
 * Per-industry mock dataset for the client dashboard (/app), transcribed from
 * the old app.html inline `DATA` object. Front-end demo content only — no
 * backend. The `all` view's biz/mail are placeholder defaults; the dashboard
 * overrides them from the signed-in mock session.
 */

export type DashIndustry = "all" | "restaurants" | "salons" | "dental"
export type PillCls = "ok" | "warn" | "new"

export interface LiveCall {
  n: string
  s: string
  line: string
}

export interface CallItem {
  i: string
  w: string
  s: string
  p: string
  c: PillCls
  /** May contain inline <b> markup (rendered as HTML, as in the original). */
  d: string
}

/** [from, text, meta?] — from 1 = Janice/you ("me"), 0 = the other party ("them"). */
export type ThreadMsg = [number, string, string?]

export interface Convo {
  id: string
  n: string
  ch: string
  av: string
  last: string
  time: string
  st: string
  c: PillCls
  msgs: ThreadMsg[]
}

/** [time, who, detail, status, cls] */
export type SchedRow = [string, string, string, string, PillCls]

/** [icon, title, sub, pillLabel, cls] */
export type ExtraRow = [string, string, string, string, PillCls]

export interface Review {
  av: string
  n: string
  stars: number
  ch: string
  when: string
  text: string
  draft: string
}

export interface IndustryData {
  biz: string
  mail: string
  sub: string
  chips: [string, string][]
  live: LiveCall
  calls: CallItem[]
  convos: Convo[]
  schedLabel: string
  schedTitle: string
  /** 7 arrays (index 0 = today). */
  sched: SchedRow[][]
  extraLabel: string
  extraTitle: string
  extra: ExtraRow[]
  reviews: Review[]
}

export const DASHBOARD_DATA: Record<DashIndustry, IndustryData> = {
  all: {
    biz: "Your Business",
    mail: "you@yourbusiness.com",
    sub: "Here is everything happening across your business right now.",
    chips: [
      ["Calls today", "47"],
      ["Recovered by AI", "12"],
      ["Avg response", "0:23"],
      ["Live now", "1"],
    ],
    live: { n: "(604) 555-0148", s: "New caller · Yaletown · inbound", line: '"...looking to book in sometime this week."' },
    calls: [
      { i: "📞", w: "(604) 555-0148", s: "New caller · 2:14 PM", p: "Booked · +$340", c: "ok", d: "Janice offered two times and <b>booked the first</b>, then sent a confirmation." },
      { i: "💬", w: "(778) 555-0192", s: "Missed · texted back · 1:02 PM", p: "Booked", c: "ok", d: "Missed call texted back in <b>16s</b> and booked." },
      { i: "📞", w: "Daniela R.", s: "Inbound · 11:48 AM", p: "Info given", c: "ok", d: "Asked about hours and offered to book." },
      { i: "💬", w: "(236) 555-0177", s: "Missed · texted back · 10:30 AM", p: "Following up", c: "warn", d: "Quote sent, Janice follows up tomorrow." },
    ],
    convos: [
      { id: "a1", n: "Sarah M.", ch: "SMS", av: "S", last: "Perfect, see you then!", time: "2m", st: "Booked", c: "ok", msgs: [[0, "Hi! Can I book in this week?"], [1, "We have Thursday 2 PM, want me to book it?", "Janice · 19s"], [0, "Yes please"], [1, "Booked for Thursday 2 PM!"], [0, "Perfect, see you then!"]] },
      { id: "a2", n: "Mike D.", ch: "Instagram", av: "M", last: "Any openings Saturday?", time: "18m", st: "AI replied", c: "ok", msgs: [[0, "Any openings Saturday?"], [1, "Saturday 1:30 PM is open. Hold it?", "Janice · 24s"]] },
      { id: "a3", n: "Jordan T.", ch: "SMS", av: "J", last: "Thanks!", time: "3h", st: "Confirmed", c: "ok", msgs: [[1, "Reminder: tomorrow at 2 PM. Reply C to confirm."], [0, "C"], [1, "Confirmed!"], [0, "Thanks!"]] },
    ],
    schedLabel: "Bookings",
    schedTitle: "Upcoming bookings",
    sched: [
      [["10:00 AM", "M. Reyes", "Consultation", "Confirmed", "ok"], ["2:00 PM", "Patel", "Booking · 2", "Confirmed", "ok"], ["4:30 PM", "Devon R.", "Booking", "Confirmed", "ok"]],
      [["11:00 AM", "Alexa G.", "Booking · 90 min", "Confirmed", "ok"], ["3:00 PM", "Mike D.", "Consultation", "Pending", "warn"]],
      [["9:30 AM", "Okafor", "Booking", "Confirmed", "ok"]],
      [],
      [["1:00 PM", "T. Nguyen", "Booking · 3", "Confirmed", "ok"], ["6:00 PM", "Lopez", "Booking · 8", "Confirmed", "ok"]],
      [],
      [["12:00 PM", "Walk-in block", "Held by Janice", "Held", "ok"]],
    ],
    extraLabel: "Follow-ups",
    extraTitle: "Pending follow-ups",
    extra: [
      ["📨", "(236) 555-0177", "Quote sent · awaiting reply", "Day 1", "warn"],
      ["🔁", "Lapsed customer", "No visit in 45 days", "Win-back sent", "ok"],
      ["⭐", "Happy customer", "Review request queued", "Scheduled", "ok"],
      ["📞", "Voicemail", "Transcribed · needs callback", "New", "new"],
    ],
    reviews: [
      { av: "S", n: "Sarah K.", stars: 5, ch: "Google", when: "2h ago", text: "Fantastic experience start to finish. Will be back!", draft: "Thank you so much, Sarah! We can not wait to welcome you back soon." },
      { av: "D", n: "Dishan P.", stars: 4, ch: "Google", when: "1d ago", text: "Great service, short wait. Recommend.", draft: "Thanks, Dishan! We are always working on wait times and hope to see you again." },
      { av: "M", n: "Marcus T.", stars: 5, ch: "Yelp", when: "2d ago", text: "Booking was so easy and the team was lovely.", draft: "Thank you, Marcus! Easy booking is exactly what we are going for." },
    ],
  },

  restaurants: {
    biz: "Wildfire Kitchen",
    mail: "demo@wildfirekitchen.ca",
    sub: "Here is everything happening across the restaurant right now.",
    chips: [
      ["Covers tonight", "86"],
      ["Recovered by AI", "14"],
      ["Avg response", "0:21"],
      ["Live now", "1"],
    ],
    live: { n: "(604) 555-0148", s: "New caller · Yaletown · table request", line: '"...a table for 4 tonight around 7:30?"' },
    calls: [
      { i: "📞", w: "(604) 555-0148", s: "Table request · 2:14 PM", p: "Booked · +$220", c: "ok", d: "Wanted a table for 4 tonight. Janice offered 7:45 and <b>booked it</b>." },
      { i: "🔁", w: "8:00 PM cancellation", s: "Refilled from waitlist · 1:30 PM", p: "Refilled", c: "ok", d: "A party cancelled. Janice offered the slot to the waitlist and <b>rebooked in 7 min</b>." },
      { i: "💬", w: "(778) 555-0192", s: "Missed · texted back · 1:02 PM", p: "Booked", c: "ok", d: "Booked a table for 2 on Friday." },
      { i: "📨", w: "Catering inquiry", s: "Large party · 11:10 AM", p: "Quote sent", c: "warn", d: "30-person event. Janice captured details and sent a quote." },
    ],
    convos: [
      { id: "r1", n: "Sarah M.", ch: "SMS", av: "S", last: "Perfect, see you at 7:15!", time: "2m", st: "Booked", c: "ok", msgs: [[0, "Table for 4 tonight around 7?"], [1, "We have 7:15 for 4, book it?", "Janice · 19s"], [0, "Yes please"], [1, "Booked for 7:15, party of 4!"], [0, "Perfect, see you at 7:15!"]] },
      { id: "r2", n: "(604) 555-0192", ch: "SMS", av: "#", last: "Yes please, book it", time: "1h", st: "Booked", c: "ok", msgs: [[1, "Sorry we missed your call. How can we help?"], [0, "Table for 2 Friday"], [1, "Friday 6:30 for 2, book it?"], [0, "Yes please, book it"], [1, "Done! Friday 6:30, party of 2."]] },
      { id: "r3", n: "Mike D.", ch: "Instagram", av: "M", last: "Do you do private events?", time: "4h", st: "Needs you", c: "warn", msgs: [[0, "Do you do private events?"], [1, "We do! For 20+ our manager tailors a menu. I have flagged this for the team.", "Janice · 22s"]] },
    ],
    schedLabel: "Reservations",
    schedTitle: "Reservations this week",
    sched: [
      [["5:00 PM", "Patel", "Party of 2", "Confirmed", "ok"], ["7:15 PM", "Sarah M.", "Party of 4", "Confirmed", "ok"], ["8:00 PM", "From waitlist", "Party of 4 · refilled", "Refilled", "ok"], ["8:30 PM", "Chen", "Party of 6", "Pending", "warn"]],
      [["6:00 PM", "Okafor", "Party of 5", "Confirmed", "ok"], ["7:30 PM", "Lopez", "Party of 8", "Confirmed", "ok"]],
      [["6:30 PM", "Tran", "Party of 2", "Confirmed", "ok"]],
      [],
      [["5:30 PM", "Singh", "Party of 6", "Confirmed", "ok"], ["7:00 PM", "Beaumont", "Party of 4", "Confirmed", "ok"], ["9:00 PM", "Diaz", "Party of 2", "Confirmed", "ok"]],
      [["6:00 PM", "Private event", "30 guests · deposit paid", "Confirmed", "ok"]],
      [],
    ],
    extraLabel: "Waitlist",
    extraTitle: "Tonight’s waitlist",
    extra: [
      ["👥", "Reyes · party of 2", "Waiting since 6:40 PM", "Next up", "ok"],
      ["👥", "Kim · party of 4", "Offered the 8 PM cancellation", "Offered", "warn"],
      ["👥", "Patterson · party of 3", "Texted when a table frees", "Waiting", "ok"],
      ["✅", "Nguyen · party of 2", "Seated from waitlist", "Seated", "ok"],
    ],
    reviews: [
      { av: "S", n: "Sarah K.", stars: 5, ch: "Google", when: "2h ago", text: "Best dinner we have had in Vancouver. The tasting menu was incredible.", draft: "Thank you, Sarah! Our chef will be thrilled. We can not wait to cook for you again." },
      { av: "D", n: "Dishan P.", stars: 4, ch: "Google", when: "1d ago", text: "Lovely food, table a few minutes late but worth it.", draft: "Thanks Dishan! We are tightening our timing and hope to seat you right on time next visit." },
      { av: "A", n: "Amara O.", stars: 5, ch: "Yelp", when: "3d ago", text: "Booked last minute by text and they fit us in. Amazing.", draft: "Thank you, Amara! Fitting you in was our pleasure. See you next time!" },
    ],
  },

  salons: {
    biz: "Luxe Hair Studio",
    mail: "demo@luxehair.ca",
    sub: "Here is everything happening across the salon right now.",
    chips: [
      ["Booked today", "24"],
      ["Rebooking rate", "68%"],
      ["Avg response", "0:28"],
      ["Live now", "1"],
    ],
    live: { n: "@luxe_client", s: "Instagram DM · balayage", line: '"...any openings for balayage this weekend?"' },
    calls: [
      { i: "💬", w: "Balayage · Instagram", s: "DM booked · 2:14 PM", p: "Booked", c: "ok", d: "Asked about balayage. Janice offered Saturday 1:30 and <b>booked it</b>." },
      { i: "🔁", w: "2:00 PM cancellation", s: "Refilled · 1:30 PM", p: "Refilled", c: "ok", d: "A client cancelled. Janice offered the chair to the waitlist and <b>rebooked in 9 min</b>." },
      { i: "📞", w: "(604) 555-0080", s: "Inbound · 11:15 AM", p: "Booked", c: "ok", d: "Booked a men's cut for Thursday." },
      { i: "🔁", w: "Priya · rebooking", s: "6-week reminder · 9:40 AM", p: "Rebooked", c: "ok", d: "Reminded Priya she was due. <b>She rebooked</b> on the spot." },
    ],
    convos: [
      { id: "s1", n: "Priya K.", ch: "Instagram", av: "P", last: "Yes book me in!", time: "5m", st: "Booked", c: "ok", msgs: [[0, "Any openings for balayage this weekend?"], [1, "Saturday 1:30 with Alexa, ~2.5 hrs. Book it?", "Janice · 22s"], [0, "Yes book me in!"], [1, "Booked! Saturday 1:30 with Alexa."]] },
      { id: "s2", n: "Mara L.", ch: "SMS", av: "M", last: "C", time: "1h", st: "Confirmed", c: "ok", msgs: [[1, "Reminder: colour & cut tomorrow 11 AM. Reply C."], [0, "C"], [1, "Confirmed! See you at 11."]] },
      { id: "s3", n: "(604) 555-0231", ch: "SMS", av: "#", last: "How much for highlights?", time: "3h", st: "AI replied", c: "ok", msgs: [[0, "How much for partial highlights?"], [1, "Partial highlights start at $160. Want me to find a time?", "Janice · 18s"]] },
    ],
    schedLabel: "Appointments",
    schedTitle: "Appointments this week",
    sched: [
      [["11:00 AM", "Mara L.", "Colour & cut · 90 min", "Confirmed", "ok"], ["2:00 PM", "From waitlist", "Cut & style · refilled", "Refilled", "ok"], ["4:30 PM", "Devon R.", "Men's cut · 30 min", "Confirmed", "ok"]],
      [["1:30 PM", "Priya K.", "Balayage · 2.5 hr", "Confirmed", "ok"], ["5:00 PM", "Sam W.", "Consultation", "Pending", "warn"]],
      [["10:00 AM", "Bianca", "Cut · 45 min", "Confirmed", "ok"], ["1:00 PM", "Theo", "Beard trim", "Confirmed", "ok"]],
      [],
      [["11:30 AM", "Hannah", "Colour · 2 hr", "Confirmed", "ok"], ["3:30 PM", "Aisha", "Balayage · 2.5 hr", "Confirmed", "ok"]],
      [["12:00 PM", "Rae", "Updo · bridal trial", "Confirmed", "ok"]],
      [],
    ],
    extraLabel: "Rebookings",
    extraTitle: "Clients due to rebook",
    extra: [
      ["🔁", "Priya K.", "Due for a 6-week trim", "Reminder sent", "ok"],
      ["🔁", "Jordan F.", "8 weeks since last colour", "Nudge queued", "warn"],
      ["🔁", "Nadia S.", "Lapsed 90 days", "Win-back sent", "ok"],
      ["⭐", "Mara L.", "Loved her cut", "Review request sent", "ok"],
    ],
    reviews: [
      { av: "P", n: "Priya K.", stars: 5, ch: "Google", when: "3h ago", text: "Alexa did the most beautiful balayage. Obsessed!", draft: "Thank you, Priya! Alexa will be so happy. See you at your next appointment!" },
      { av: "J", n: "Jordan F.", stars: 5, ch: "Google", when: "2d ago", text: "Booking over Instagram was instant. Loved my cut.", draft: "Thanks, Jordan! Easy booking is what we love to hear." },
      { av: "N", n: "Nadia S.", stars: 4, ch: "Yelp", when: "4d ago", text: "Great colour, ran a little behind but happy.", draft: "Thank you, Nadia! We are working on our timing and appreciate your patience." },
    ],
  },

  dental: {
    biz: "Cedar Dental",
    mail: "demo@cedardental.ca",
    sub: "Here is everything happening across the clinic right now.",
    chips: [
      ["New patients", "7"],
      ["Recalls due", "41"],
      ["Avg response", "0:25"],
      ["Live now", "1"],
    ],
    live: { n: "(604) 555-0173", s: "New patient · chipped tooth", line: '"...do you take new patients? I chipped a tooth."' },
    calls: [
      { i: "📞", w: "(604) 555-0173", s: "New patient · 2:14 PM", p: "Exam booked", c: "ok", d: "New patient with a chipped tooth. Janice <b>booked a 10:40 exam</b> and queued intake." },
      { i: "🔁", w: "2:00 PM cancellation", s: "Refilled · 1:30 PM", p: "Refilled", c: "ok", d: "A patient cancelled. Janice offered the chair to the waitlist and <b>rebooked in 12 min</b>." },
      { i: "🦷", w: "Recall · 6 months", s: "Reminder sent · 10:30 AM", p: "Rebooked", c: "ok", d: "Patient overdue for a cleaning. Janice sent a recall and <b>they rebooked</b>." },
      { i: "📋", w: "Crown follow-up", s: "Treatment nudge · 9:15 AM", p: "Booked", c: "ok", d: "Recommended treatment unbooked. A gentle nudge got it <b>scheduled</b>." },
    ],
    convos: [
      { id: "d1", n: "(604) 555-0173", ch: "SMS", av: "#", last: "Yes please, thank you", time: "4m", st: "Booked", c: "ok", msgs: [[0, "Do you take new patients? I chipped a tooth."], [1, "So sorry! Yes, we have an exam tomorrow 10:40 AM, book it?", "Janice · 21s"], [0, "Yes please, thank you"], [1, "Booked! Tomorrow 10:40 with Dr. Lee. Sending your form."]] },
      { id: "d2", n: "Jordan T.", ch: "SMS", av: "J", last: "C", time: "1h", st: "Confirmed", c: "ok", msgs: [[1, "Reminder: hygiene tomorrow 11 AM. Reply C."], [0, "C"], [1, "Confirmed, see you then!"]] },
      { id: "d3", n: "Priya K.", ch: "SMS", av: "P", last: "Let me check my calendar", time: "5h", st: "Needs you", c: "warn", msgs: [[1, "Hi Priya, you are due for your 6-month cleaning. Openings next week, book one?"], [0, "Let me check my calendar"]] },
    ],
    schedLabel: "Appointments",
    schedTitle: "Schedule this week",
    sched: [
      [["11:00 AM", "Hygiene · Vu", "Cleaning · 45 min", "Confirmed", "ok"], ["2:00 PM", "From waitlist", "Exam · refilled", "Refilled", "ok"], ["3:30 PM", "Recall · Lee", "Cleaning · rebooked", "Confirmed", "ok"]],
      [["10:40 AM", "New patient", "Exam · chipped tooth", "New", "new"], ["1:00 PM", "Crown · Okafor", "Treatment", "Confirmed", "ok"]],
      [["9:00 AM", "Hygiene · Tran", "Cleaning", "Confirmed", "ok"], ["11:30 AM", "Ortho consult", "New", "New", "new"]],
      [],
      [["8:30 AM", "Hygiene · Singh", "Cleaning", "Confirmed", "ok"], ["2:00 PM", "Filling · Diaz", "Treatment", "Confirmed", "ok"]],
      [],
      [],
    ],
    extraLabel: "Recalls",
    extraTitle: "Patients due for recall",
    extra: [
      ["🦷", "41 patients", "Overdue for 6-month cleaning", "28 reminded", "warn"],
      ["🦷", "Priya K.", "Reminder sent · deciding", "Following up", "warn"],
      ["📋", "Crown · recommended", "Treatment not yet booked", "Nudge sent", "warn"],
      ["✅", "Recall · rebooked", "Hygiene visit confirmed", "Booked", "ok"],
    ],
    reviews: [
      { av: "J", n: "Jordan T.", stars: 5, ch: "Google", when: "2h ago", text: "Got in same day for a chipped tooth as a new patient. Painless and friendly.", draft: "Thank you, Jordan! So glad we could see you quickly. Welcome to the practice!" },
      { av: "M", n: "Maya R.", stars: 5, ch: "Google", when: "2d ago", text: "The reminders are great, I never miss my cleanings now.", draft: "Thanks, Maya! Keeping you on track is exactly what we hoped for." },
      { av: "S", n: "Sam D.", stars: 4, ch: "Google", when: "6d ago", text: "Good care, parking can be tricky but the team is wonderful.", draft: "Thank you, Sam! We will share parking tips ahead of your next visit." },
    ],
  },
}

export const REVIEW_CHIPS = (reviewCount: number): [string, string][] => [
  ["New reviews", String(reviewCount)],
  ["Avg rating", "4.8"],
  ["Replied", "96%"],
  ["This week", "19"],
]
