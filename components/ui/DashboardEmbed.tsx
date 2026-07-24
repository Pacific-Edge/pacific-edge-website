import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * DashboardEmbed: the dashboard-mock.html iframe preview (replaces the inline
 * `.idash-wrap` block that was copy-pasted per industry page). At most one per
 * page: LegacyBehaviors autosizes the frame by the `idash` id.
 */
export function DashboardEmbed({ industry }: { industry: string }) {
  return (
    <div className={cn("idash-wrap", revealCls(2))}>
      <iframe
        src={`/dashboard-mock.html?ind=${industry}`}
        className="idash-frame"
        id="idash"
        loading="lazy"
        title="Pacific Edge AI dashboard preview"
        scrolling="no"
      />
    </div>
  )
}
