export type Founder = {
  name: string
  role: string
  bio: string
  photo?: string
}

export const FOUNDERS: Founder[] = [
  {
    name: "Leone Jiwani",
    role: "Co-Founder",
    photo: "/founders/leone.png",
    bio: "BBA, BCIT. Built ventures across finance and brand — BCIT REA, Concord Pacific, Glarehawks. Founded Pacific Edge to hand admin time back without enterprise pricing.",
  },
  {
    name: "Sam Rezaei",
    role: "Co-Founder",
    photo: "/founders/sam.jpg",
    bio: "Finance, UBC Sauder Dean's List. QuadReal, Wesgroup, rebar plant coordination. Co-founded Pacific Edge for local businesses — less manual work, clearer data.",
  },
  {
    name: "Thomas Llamzon",
    role: "Co-Founder",
    bio: "Placeholder — bio coming soon.",
  },
]
