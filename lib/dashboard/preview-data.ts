import type { DashboardIndustry, DashboardPreviewSkin } from "./types"

const PREVIEW_SKINS: Record<Exclude<DashboardIndustry, "all">, DashboardPreviewSkin> = {
  restaurants: {
    stats: [
      { label: "Covers Tonight", value: "86", sub: "14 vs avg night" },
      { label: "Reservations", value: "32", sub: "+8 walk-ins expected" },
      { label: "No-Show Rate", value: "4%", sub: "6pp down this month" },
      { label: "Recovered Revenue", value: "$3,120", sub: "9 tables saved" },
    ],
    cards: [
      {
        id: "Reservation #2104",
        status: "CONFIRMED",
        channel: "PHONE",
        grid: [
          { label: "Party", value: "4 guests" },
          { label: "Slot", value: "Tonight 7:15", valueClass: "mint" },
        ],
      },
      {
        id: "Cancellation refilled",
        status: "REFILLED",
        channel: "SMS",
        grid: [
          { label: "Freed", value: "8:00 PM" },
          { label: "Outcome", value: "+$220 rebooked", valueClass: "mint" },
        ],
      },
      {
        id: "New 5-star review",
        status: "DRAFT READY",
        statusClass: "warn",
        channel: "GOOGLE",
        grid: [
          { label: "From", value: "Sarah K." },
          { label: "AI Draft", value: "1-tap approve", valueClass: "warn" },
        ],
      },
    ],
    alerts: [
      "3 reservation calls auto-recovered",
      "Waitlist filled the 8 PM table",
      "Friday is now fully booked",
    ],
  },
  salons: {
    stats: [
      { label: "Booked Today", value: "24", sub: "5 vs avg" },
      { label: "Rebooking Rate", value: "68%", sub: "9pp up this month" },
      { label: "No-Show Rate", value: "6%", sub: "4pp down" },
      { label: "Chair Utilization", value: "91%", sub: "7pp up" },
    ],
    cards: [
      {
        id: "Appointment #2104",
        status: "CONFIRMED",
        channel: "INSTAGRAM",
        grid: [
          { label: "Service", value: "Balayage 2.5h" },
          { label: "When", value: "Sat 1:30 PM", valueClass: "mint" },
        ],
      },
      {
        id: "Cancellation refilled",
        status: "REFILLED",
        channel: "SMS",
        grid: [
          { label: "Freed", value: "2:00 PM" },
          { label: "Outcome", value: "Rebooked in 9m", valueClass: "mint" },
        ],
      },
      {
        id: "Rebooking",
        status: "BOOKED",
        channel: "SMS",
        grid: [
          { label: "Client", value: "Priya K." },
          { label: "Due", value: "6-week trim", valueClass: "mint" },
        ],
      },
    ],
    alerts: [
      "Chair refilled from the waitlist",
      "Priya rebooked via reminder",
      "5-star review drafted to approve",
    ],
  },
  trades: {
    stats: [
      { label: "Jobs Booked", value: "11", sub: "3 today" },
      { label: "Quotes Out", value: "6", sub: "$14k in pipeline" },
      { label: "Avg Response", value: "0:18", sub: "22s faster than last wk" },
      { label: "Revenue Booked", value: "$8,420", sub: "4 jobs" },
    ],
    cards: [
      {
        id: "Job #2104",
        status: "BOOKED",
        channel: "PHONE",
        grid: [
          { label: "Type", value: "Water heater" },
          { label: "When", value: "Today 4 PM", valueClass: "mint" },
        ],
      },
      {
        id: "Quote #881",
        status: "ACCEPTED",
        channel: "SMS",
        grid: [
          { label: "Value", value: "$2,400 panel", valueClass: "mint" },
          { label: "Follow-up", value: "Day 1" },
        ],
      },
      {
        id: "After-hours call",
        status: "RECOVERED",
        channel: "SMS",
        grid: [
          { label: "Type", value: "Emergency", valueClass: "warn" },
          { label: "Outcome", value: "Booked AM", valueClass: "mint" },
        ],
      },
    ],
    alerts: [
      "Emergency call booked after hours",
      "$2,400 quote accepted",
      "Mike en route to Burnaby",
    ],
  },
  retail: {
    stats: [
      { label: "Orders Today", value: "27", sub: "6 vs avg" },
      { label: "Items Held", value: "9", sub: "ready for pickup" },
      { label: "Repeat Customers", value: "38%", sub: "5pp up" },
      { label: "Questions Answered", value: "64", sub: "18 instant" },
    ],
    cards: [
      {
        id: "Hold #2104",
        status: "HELD",
        channel: "SMS",
        grid: [
          { label: "Item", value: "Olive linen (M)" },
          { label: "Until", value: "6 PM tmrw", valueClass: "mint" },
        ],
      },
      {
        id: "Win-back",
        status: "RETURNED",
        channel: "SMS",
        grid: [
          { label: "Customer", value: "Lapsed 60d" },
          { label: "Outcome", value: "Came in", valueClass: "mint" },
        ],
      },
      {
        id: "Fall drop campaign",
        status: "SENT",
        channel: "EMAIL",
        grid: [
          { label: "Reach", value: "240 sent" },
          { label: "Redeemed", value: "38", valueClass: "mint" },
        ],
      },
    ],
    alerts: [
      "38 redemptions from the fall drop",
      "Olive jacket held for a customer",
      "Quiet-day promo sent",
    ],
  },
  dental: {
    stats: [
      { label: "New Patients", value: "7", sub: "3 this week" },
      { label: "Recalls Due", value: "41", sub: "28 reminders sent" },
      { label: "No-Show Rate", value: "5%", sub: "7pp down" },
      { label: "Production Booked", value: "$6,800", sub: "6 treatments" },
    ],
    cards: [
      {
        id: "New patient",
        status: "BOOKED",
        channel: "PHONE",
        grid: [
          { label: "Reason", value: "Chipped tooth" },
          { label: "Exam", value: "Tmrw 10:40", valueClass: "mint" },
        ],
      },
      {
        id: "Recall · 6mo",
        status: "REBOOKED",
        channel: "SMS",
        grid: [
          { label: "Patient", value: "Overdue" },
          { label: "Outcome", value: "Hygiene booked", valueClass: "mint" },
        ],
      },
      {
        id: "Treatment plan",
        status: "BOOKED",
        channel: "SMS",
        grid: [
          { label: "Item", value: "Crown" },
          { label: "Via", value: "Gentle nudge", valueClass: "mint" },
        ],
      },
    ],
    alerts: [
      "Cancelled chair refilled from waitlist",
      "12 recalls rebooked this week",
      "Treatment follow-up booked",
    ],
  },
}

const GENERIC_PREVIEW: DashboardPreviewSkin = {
  stats: [
    { label: "Calls Answered", value: "48", sub: "12 recovered today" },
    { label: "Jobs Booked", value: "31", sub: "9 from waitlist" },
    { label: "Avg Response", value: "0:23", sub: "under 30 seconds" },
    { label: "Slots Saved", value: "14", sub: "this week" },
  ],
  cards: [
    {
      id: "Missed call recovered",
      status: "BOOKED",
      channel: "SMS",
      grid: [
        { label: "Lead", value: "New caller" },
        { label: "Outcome", value: "Booked", valueClass: "mint" },
      ],
    },
    {
      id: "Cancellation refilled",
      status: "REFILLED",
      channel: "SMS",
      grid: [
        { label: "Opened", value: "2:00 PM" },
        { label: "Outcome", value: "Waitlist", valueClass: "mint" },
      ],
    },
    {
      id: "Review reply",
      status: "DRAFT READY",
      statusClass: "warn",
      channel: "GOOGLE",
      grid: [
        { label: "Rating", value: "5 stars" },
        { label: "Draft", value: "Ready", valueClass: "warn" },
      ],
    },
  ],
  alerts: [
    "Missed call texted back in 19s",
    "Cancellation offered to waitlist",
    "Review reply drafted for approval",
  ],
}

export function getDashboardPreviewSkin(
  industry?: DashboardIndustry | null,
): DashboardPreviewSkin {
  if (!industry || industry === "all") return GENERIC_PREVIEW
  return PREVIEW_SKINS[industry]
}

export function isPreviewIndustry(
  value: string,
): value is Exclude<DashboardIndustry, "all"> {
  return value in PREVIEW_SKINS
}
