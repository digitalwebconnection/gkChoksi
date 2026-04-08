import { motion } from "framer-motion"

const IVORY = "#F7F9F8"
const CHARCOAL = "#1C1C1C"
const ACCENT = "#6FAF9B"
const GOLD = "#C2A96A"

type Service = {
  title: string
  subtitle: string
  paragraphs: string[]
}

const SERVICES: Service[] = [
  {
    title: "Management Consultancy",
    subtitle: "Strategy, made executable.",
    paragraphs: [
      "Every organisation reaches moments that call for reflection, recalibration, and renewal. Our management consultancy services are designed to support such transitions with clarity and foresight.",
      "Through Valuation, Strategic Advisory, ESG, Governance Risk & Compliance, and Succession Planning, we help organisations strengthen foundations, manage uncertainties, and prepare thoughtfully for the future.",
    ],
  },
  {
    title: "Business Advisory",
    subtitle: "Clarity that moves business forward",
    paragraphs: [
      "In a dynamic business environment, decisions demand both clarity and conviction. Our advisory practice is designed to provide exactly that with measured guidance backed by technical depth and commercial insight.",
      "From Accounting Advisory and Start-up structuring to Government Incentives, Inbound and Outbound Investment Strategies, and Incubation, we work closely with businesses to shape scalable structures, unlock opportunities, and support growth with foresight and discipline.",
    ],
  },
  {
    title: "Audit & Assurance",
    subtitle: "Confidence & Reliability for Stakeholders",
    paragraphs: [
      "Assurance, in its truest sense, goes beyond verification - it builds trust where it matters most. Our audit approach is defined by independence of thought, depth of analysis, and an uncompromising commitment to quality.",
      "Across External and Internal Audits, Forensic Reviews, Due Diligence, Tax and Stock Audits, Departmental and Special Audits, we bring precision and perspective together.",
      "Our work is designed to strengthen governance, identifying critical risks and enabling stakeholders to rely on financial and operational integrity with confidence.",
    ],
  },
  {
    title: "Taxation",
    subtitle: "Structured for precisional advantage",
    paragraphs: [
      "Taxation, when approached thoughtfully, becomes a tool of efficiency rather than a burden of compliance. Our tax practice is built on this understanding.",
      "With expertise in Corporate Tax, International Tax, Indirect Tax, and Transfer Pricing, we provide solutions that are technically sound, commercially viable, and aligned with long-term objectives.",
    ],
  },
  {
    title: "Regulatory",
    subtitle: "Complexity, made navigable",
    paragraphs: [
      "In an environment shaped by evolving laws and expectations, clarity in compliance becomes essential. Our regulatory services are designed to guide clients by simplifying complexity and ensuring absolute compliance.",
      "We advise across Corporate Law, Securities Regulations, and Insolvency & Turnaround, ensuring that obligations are met while business continuity remains uninterrupted.",
    ],
  },
  {
    title: "Mergers & Acquisition",
    subtitle: "Every deal, thoughtfully shaped",
    paragraphs: [
      "Merger & Amalgamation are not merely financial events, they are defining milestones. Our M&A services combine analytical rigour with strategic perspective to support clients across the entire deal lifecycle.",
      "Our services include Transaction Advisory, Deal Evaluation, Analytics and Closure Support and Due Diligence ensuring that decisions are informed, risks are understood, and outcomes are executed with precision.",
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const BOTTOM_POINTS = [
  "Integrated approach",
  "Industry-focused delivery",
  "Partner-led execution",
  "Insight-driven decision support",
]

const ServicePage = () => {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: IVORY }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.28em]"
            style={{ color: ACCENT }}
          >
            Services
          </p>
          <h1
            className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ color: CHARCOAL }}
          >
            Precision-led Professional Services
          </h1>
          <div className="mx-auto mt-6 h-px w-24" style={{ backgroundColor: GOLD }} />
        </div>

        {/* Grid of all 6 main head services */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <div
              key={`${service.title}-chip`}
              className="flex items-center gap-3 rounded-xl border px-4 py-3"
              style={{ borderColor: `${GOLD}66`, backgroundColor: "white" }}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
                style={{ backgroundColor: `${ACCENT}25`, color: CHARCOAL }}
              >
                {idx + 1}
              </span>
              <p className="text-sm font-medium" style={{ color: CHARCOAL }}>
                {service.title}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group h-full rounded-2xl border bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: `${GOLD}55` }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.24em]"
                style={{ color: GOLD }}
              >
                {service.title}
              </p>
              <h3
                className="mt-3 text-lg font-semibold leading-snug"
                style={{ color: CHARCOAL }}
              >
                {service.subtitle}
              </h3>

              <div className="mt-4 space-y-4 text-sm leading-relaxed" style={{ color: `${CHARCOAL}E0` }}>
                {service.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom visual + slicer animation strip */}
        <div className="mt-14 overflow-hidden rounded-2xl border" style={{ borderColor: `${GOLD}66` }}>
          <div
            className="grid gap-4 px-4 py-5 sm:grid-cols-2 lg:grid-cols-6"
            style={{ backgroundColor: "white" }}
          >
            {SERVICES.map((service, idx) => (
              <div key={`${service.title}-symbol`} className="flex items-center gap-2">
                <span style={{ color: ACCENT }}>◆</span>
                <span className="text-sm font-medium" style={{ color: CHARCOAL }}>
                  {service.title}
                </span>
                {idx < SERVICES.length - 1 && (
                  <span className="ml-auto hidden lg:inline" style={{ color: GOLD }}>
                    |
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="border-t py-3" style={{ borderColor: `${GOLD}55`, backgroundColor: `${IVORY}` }}>
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 16, ease: "linear", repeat: Infinity }}
            >
              {[...BOTTOM_POINTS, ...BOTTOM_POINTS].map((point, idx) => (
                <span
                  key={`${point}-${idx}`}
                  className="mx-6 inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: CHARCOAL }}
                >
                  <span style={{ color: GOLD }}>•</span>
                  {point}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicePage
