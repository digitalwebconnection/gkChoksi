

import serviceHero from "/src/assets/25.jpg"

export type Service = {
  slug: string
  title: string
  subtitle: string
  image: string // ✅ add this
  paragraphs: string[]
}

export const SERVICES: Service[] = [
  {
    slug: "management-consultancy",
    title: "Management Consultancy",
    subtitle: "Strategy, made executable.",
    image: "https://cdn.nishtyainfotech.com/content/learnings/data/blog/banner/648c8257d3bfa.jpeg",
    paragraphs: [
      "Every organisation reaches moments that call for reflection, recalibration, and renewal. Our management consultancy services are designed to support such transitions with clarity and foresight.",
      "Through Valuation, Strategic Advisory, ESG, Governance Risk & Compliance, and Succession Planning, we help organisations strengthen foundations, manage uncertainties, and prepare thoughtfully for the future.",
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    subtitle: "Clarity that moves business forward",
    image: "https://blog.udemy.com/wp-content/uploads/2014/04/bigstock-Image-of-business-partners-dis-41296537.jpg",
    paragraphs: [
      "In a dynamic business environment, decisions demand both clarity and conviction. Our advisory practice is designed to provide exactly that with measured guidance backed by technical depth and commercial insight.",
      "From Accounting Advisory and Start-up structuring to Government Incentives, Inbound and Outbound Investment Strategies, and Incubation, we work closely with businesses to shape scalable structures, unlock opportunities, and support growth with foresight and discipline.",
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    subtitle: "Confidence & Reliability for Stakeholders",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtMsBEYg-DMkuJXnipJpaF390zexNZr2QmQ&s",
    paragraphs: [
      "Assurance, in its truest sense, goes beyond verification - it builds trust where it matters most. Our audit approach is defined by independence of thought, depth of analysis, and an uncompromising commitment to quality.",
      "Across External and Internal Audits, Forensic Reviews, Due Diligence, Tax and Stock Audits, Departmental and Special Audits, we bring precision and perspective together.",
      "Our work is designed to strengthen governance, identifying critical risks and enabling stakeholders to rely on financial and operational integrity with confidence.",
    ],
  },
  {
    slug: "taxation",
    title: "Taxation",
    subtitle: "Structured for precisional advantage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6oanAeanBjs1rk7gvz5XMXlHdZgqH_J_ww&s",
    paragraphs: [
      "Taxation, when approached thoughtfully, becomes a tool of efficiency rather than a burden of compliance. Our tax practice is built on this understanding.",
      "With expertise in Corporate Tax, International Tax, Indirect Tax, and Transfer Pricing, we provide solutions that are technically sound, commercially viable, and aligned with long-term objectives.",
    ],
  },
  {
    slug: "regulatory",
    title: "Regulatory",
    subtitle: "Complexity, made navigable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3Q73LSrZdtjzrUlNWWYnywOnhUs_MHI2HA&s",
    paragraphs: [
      "In an environment shaped by evolving laws and expectations, clarity in compliance becomes essential. Our regulatory services are designed to guide clients by simplifying complexity and ensuring absolute compliance.",
      "We advise across Corporate Law, Securities Regulations, and Insolvency & Turnaround, ensuring that obligations are met while business continuity remains uninterrupted.",
    ],
  },
  {
    slug: "mergers-acquisition",
    title: "Mergers & Acquisition",
    subtitle: "Every deal, thoughtfully shaped",
    image: "https://d502jbuhuh9wk.cloudfront.net/articles/658fb202e4b0ce5ca4b26943/Di7Zqmergersandacquisitions01.png",
    paragraphs: [
      "Merger & Amalgamation are not merely financial events, they are defining milestones. Our M&A services combine analytical rigour with strategic perspective to support clients across the entire deal lifecycle.",
      "Our services include Transaction Advisory, Deal Evaluation, Analytics and Closure Support and Due Diligence ensuring that decisions are informed, risks are understood, and outcomes are executed with precision.",
    ],
  },
]



const BOTTOM_POINTS = [
  "Integrated approach",
  "Industry-focused delivery",
  "Partner-led execution",
  "Insight-driven decision support",
]



const ServicePage = () => {
  return (
    <>
      {/* Full-bleed hero (match About page sizing/feel) */}
      <section
        className="relative h-150 flex items-center justify-center overflow-hidden py-16 md:py-20"
        style={{ backgroundColor: "#F7F9F8" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${serviceHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1C1C1C]/80 via-[#1C1C1C]/70 to-[#1C1C1C]/85" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Glass Container */}
          <div className="">

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-semibold text-[#C2A96A] leading-tight">
              Precision-led Professional Services
            </h1>

            {/* Description */}
            <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-6xl mx-auto">
              Our services are organised around the moments that matter most — from
              strategic inflection points and complex transactions to regulatory change
              and ongoing assurance.
            </p>

            {/* Divider */}
            <div className="mt-8 w-16 h-0.5 bg-[#6FAF9B] mx-auto" />

            {/* Focus Section */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C2A96A] mb-5">
                Areas of Focus
              </p>

              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {SERVICES.map((service) => (
                  <span
                    key={service.slug}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#F7F9F8",
                    }}
                  >
                    {service.title}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6FAF9B]">
              Services
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
              Expertise That Moves Business Forward
            </h2>

            <div className="w-20 h-0.5 bg-[#C2A96A] mx-auto mt-6" />
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs tracking-widest text-[#C2A96A] uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold mt-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h4 className="text-xl font-semibold text-[#1C1C1C]">
                    {service.subtitle}
                  </h4>

                  <p className="mt-4 text-sm text-[#1C1C1C]/70 leading-relaxed">
                    {service.paragraphs[0]}
                  </p>
                  <p className="mt-4 text-sm text-[#1C1C1C]/70 leading-relaxed">
                    {service.paragraphs[1]}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#6FAF9B]">
                      Learn More
                    </span>

                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#6FAF9B] group-hover:bg-[#6FAF9B] group-hover:text-white transition">
                      →
                    </div>
                  </div>

                  {/* Accent */}
                  <div className="mt-6 h-0.5 w-10 bg-[#C2A96A]" />
                </div>

              </div>
            ))}

          </div>

          {/* BOTTOM STRIP (CLEAN VERSION) */}
          <div className="mt-20 border-t pt-8 flex flex-wrap justify-center gap-6 text-sm text-[#1C1C1C]/70">
            {BOTTOM_POINTS.map((point, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2A96A]" />
                {point}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default ServicePage
