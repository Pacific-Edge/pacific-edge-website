"use client"

import type { ClientDashboardData } from "@/lib/dashboard"

export default function ReviewsPanel({ data }: { data: ClientDashboardData }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          ["Drafts ready", String(data.reviews.length)],
          ["Avg rating", "4.9"],
          ["This week", "12"],
          ["Auto-replied", "8"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-ash-300/40 bg-cream-50 p-4">
            <p className="eyebrow text-ash-500 mb-2">{label}</p>
            <p className="font-display text-2xl text-navy-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-ui text-sm font-medium text-navy-900">Reviews to approve</p>
          <p className="font-ui text-[10px] uppercase tracking-wide text-navy-900/40">Platform drafts, you approve</p>
        </div>
        <div className="space-y-4">
          {data.reviews.map((review) => (
            <div
              key={`${review.name}-${review.when}`}
              className="rounded-xl border border-ash-300/35 bg-cream-100/50 p-5"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-900/10 flex items-center justify-center font-ui text-sm font-semibold text-navy-700">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-ui text-sm font-medium text-navy-900">{review.name}</p>
                    <p className="font-ui text-[10px] uppercase tracking-wide text-navy-900/40">
                      {review.channel} · {review.when}
                    </p>
                  </div>
                </div>
                <span className="text-ash-400 text-sm tracking-tight" aria-label={`${review.stars} stars`}>
                  {"★".repeat(review.stars)}
                </span>
              </div>
              <p className="font-ui text-sm text-navy-900/65 italic mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="rounded-lg border border-ash-300/40 bg-cream-50 p-4">
                <p className="eyebrow text-ash-500 mb-1">Suggested reply</p>
                <p className="font-ui text-sm text-navy-900/70">{review.draft}</p>
                <button
                  type="button"
                  className="btn-primary text-xs px-4 py-2 mt-4"
                  onClick={() => {}}
                >
                  Approve & send
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
