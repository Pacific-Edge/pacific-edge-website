"use client"

import { useState } from "react"
import Link from "next/link"
import DashboardMock from "@/components/dashboard/DashboardMock"
import type { DashboardIndustry } from "@/lib/dashboard"

export default function DashboardPage() {
  const [industry, setIndustry] = useState<DashboardIndustry>("all")

  return (
    <div className="section-py pt-28 sm:pt-32">
      <div className="container-x">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="eyebrow text-ash-500 mb-4">Product</p>
          <h1 className="text-display-lg text-navy-900 mb-4">Your business, at a glance</h1>
          <p className="font-ui text-sm text-navy-900/55 mb-6">
            One dashboard for calls answered, slots filled, and reviews managed, tailored to how you work.
          </p>
          <Link href="/login" className="btn-secondary text-sm">
            Client login
          </Link>
        </div>

        <DashboardMock
          industry={industry}
          showIndustryPicker
          onIndustryChange={setIndustry}
        />
      </div>
    </div>
  )
}
