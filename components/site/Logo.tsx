import Link from "next/link"

/** pacific·edge.ai wordmark + three angled "slash" bars. Used in nav + footer. */
export default function Logo({
  href = "/",
  className = "",
}: {
  href?: string
  className?: string
}) {
  return (
    <Link href={href} className={`nav-logo ${className}`.trim()} aria-label="Pacific Edge AI — home">
      <span className="nav-slash" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="nav-text">
        pacific<span className="ai">edge.ai</span>
      </span>
    </Link>
  )
}
