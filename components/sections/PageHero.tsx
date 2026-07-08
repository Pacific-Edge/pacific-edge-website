type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  variant?: "cream" | "navy"
}

export default function PageHero({
  eyebrow,
  title,
  description,
  variant = "cream",
}: PageHeroProps) {
  const isNavy = variant === "navy"

  return (
    <header
      className={`pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 ${
        isNavy ? "bg-navy-900" : "bg-cream-50"
      }`}
    >
      <div className="container-x">
        <div className="max-w-3xl">
          <p className={`eyebrow mb-4 ${isNavy ? "text-ash-400" : "text-ash-500"}`}>
            {eyebrow}
          </p>
          <h1
            className={`text-display-lg mb-4 ${isNavy ? "text-cream-50" : "text-navy-900"}`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`font-ui text-base leading-relaxed max-w-xl ${
                isNavy ? "text-cream-50/70" : "text-navy-900/55"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  )
}
