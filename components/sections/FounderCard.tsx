import Image from "next/image"
import type { Founder } from "@/lib/content/founders"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function FounderCard({ founder }: { founder: Founder }) {
  const initials = getInitials(founder.name)

  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-navy-900/5 mb-6">
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900">
            <span
              className="font-display font-bold text-cream-50"
              style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)" }}
              aria-hidden="true"
            >
              {initials}
            </span>
            <span className="sr-only">{founder.name}</span>
          </div>
        )}
      </div>

      <div>
        <p className="eyebrow text-ash-500 mb-2">{founder.role}</p>
        <h2 className="font-display text-display-sm text-navy-900 mb-3">{founder.name}</h2>
        <p className="font-ui text-sm text-navy-900/60 leading-relaxed">{founder.bio}</p>
      </div>
    </article>
  )
}
