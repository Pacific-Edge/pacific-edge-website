type Area = { n: string; main?: boolean }

// Names carried over from the old CoverageMap AREAS list.
const AREAS: Area[] = [
  { n: "Vancouver", main: true },
  { n: "North Vancouver" },
  { n: "West Vancouver" },
  { n: "Burnaby" },
  { n: "New Westminster" },
  { n: "Coquitlam" },
  { n: "Port Moody" },
  { n: "Richmond" },
  { n: "Delta" },
  { n: "Surrey" },
  { n: "Langley" },
  { n: "White Rock" },
]

const REGIONS = [
  { name: "Vancouver & Downtown", desc: "Restaurants, retail, professional services" },
  { name: "Burnaby & New Westminster", desc: "Trades, wellness clinics, food service" },
  { name: "Surrey & Langley", desc: "Growing businesses ready to scale" },
  { name: "North Shore & Tri-Cities", desc: "Local operators, service-based businesses" },
  { name: "Richmond & Delta", desc: "Retail, hospitality, e-commerce" },
]

export default function CoverageBadges() {
  return (
    <section className="map-section" id="coverage">
      <span className="sn">03</span>
      <div className="r">
        <div className="sl">Coverage</div>
        <h2 className="st">
          Proudly Serving
          <br />
          <span className="a">Greater Vancouver</span>
        </h2>
      </div>
      <div className="map-grid">
        <div className="coverage-badges r rd1">
          {AREAS.map((a) => (
            <span key={a.n} className={`coverage-badge${a.main ? " coverage-badge-main" : ""}`}>
              {a.n}
            </span>
          ))}
        </div>
        <div className="map-info r rd2">
          <h3>
            Your Neighborhood.
            <br />
            <span className="a">Our Priority.</span>
          </h3>
          <p>
            We work with businesses across the Lower Mainland. Whether you&apos;re in downtown
            Vancouver or out in the Fraser Valley, we&apos;re close enough to meet face-to-face and
            understand the local market your business operates in.
          </p>
          <div className="map-areas">
            {REGIONS.map((r) => (
              <div key={r.name} className="map-area">
                <div className="map-area-dot" />
                <div>
                  <div className="map-area-name">{r.name}</div>
                  <div className="map-area-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="map-badge">
            <span className="map-badge-pulse" />
            Accepting new clients across BC
          </div>
        </div>
      </div>
    </section>
  )
}
