import ElectricMotif from "@/components/ui/ElectricMotif"

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  variant?: "light" | "dark"
}

export default function PageHero({
  eyebrow,
  title,
  description,
  variant = "light",
}: PageHeroProps) {
  const isDark = variant === "dark"

  return (
    <header
      className={`relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 ${
        isDark ? "bg-midnight-900" : "bg-white-50"
      }`}
    >
      <ElectricMotif
        variant={isDark ? "arc" : "beam"}
        className={isDark ? "-right-24 top-14" : "right-[-16rem] top-10"}
      />
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <p className={`eyebrow mb-4 ${isDark ? "text-ash-400" : "text-ash-500"}`}>
            {eyebrow}
          </p>
          <h1
            className={`text-display-lg mb-4 ${isDark ? "text-white-50" : "text-midnight-900"}`}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={`font-ui text-base leading-relaxed max-w-xl ${
                isDark ? "text-white-50/70" : "text-midnight-900/55"
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
