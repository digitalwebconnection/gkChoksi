
import { motion } from "framer-motion";
import {
  Landmark,
  Users,
  Globe2,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react"; // Added ArrowRight for the CTA

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Journey steps – adjust years / details as per exact GKCCO history
const journeySteps = [
  {
    icon: Landmark,
    phase: "Chapter 01",
    year: "1970s",
    title: "Foundations of Trust",
    detail:
      "G.K. Choksi & Co. was established with a clear focus on audit, taxation and assurance, building a reputation for integrity and independence.",
    meta: "Early work with closely-held businesses and emerging enterprises.",
    side: "left",
  },
  {
    icon: Users,
    phase: "Chapter 02",
    year: "1990s–2000s",
    title: "Expanding Our Reach",
    detail:
      "The firm grew its presence across major Indian cities, serving larger corporates, banks and institutions with multi-location audit and advisory services.",
    meta: "New partners, sector specialisation and long-term client relationships.",
    side: "right",
  },
  {
    icon: ShieldCheck,
    phase: "Chapter 03",
    year: "2000s–2015",
    title: "Strengthening Governance & Compliance",
    detail:
      "With evolving regulations and global standards, we strengthened our focus on risk, governance, compliance and internal control frameworks.",
    meta: "Listed entities, regulatory assignments and complex group audits.",
    side: "left",
  },
  {
    icon: Globe2,
    phase: "Chapter 04",
    year: "2015–Present",
    title: "Digital, Analytical & Global Outlook",
    detail:
      "Today, we combine technology, data-driven insights and decades of domain expertise to support clients in an increasingly global and digital environment.",
    meta: "Analytics-led audits, technology-enabled reporting and cross-border assignments.",
    side: "right",
  },
];

const JourneySection = () => {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-gray-50 py-16" // Changed bg-white to bg-gray-50 for a subtle lift
    >
      {/* soft background accents - **ENHANCED with more contrast and position** */}
      <div className="pointer-events-none absolute -top-40 left-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl opacity-70" />
      {/* subtle diagonal pattern overlay for texture */}
      <div className="absolute inset-0 z-0 opacity-10 [background:repeating-linear-gradient(-45deg,#f0fdf4_0,#f0fdf4_2px,#ffffff_2px,#ffffff_4px)]" />
      {/* End background enhancements */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Our Legacy
          </p>
          <h2 className="mt-3 text-balance font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
            Decades of Professional Excellence
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
            From a focused audit and tax practice to a multi-disciplinary firm,
            our journey reflects continuous learning, growth and commitment to
            clients.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative mx-auto max-w-7xl">
          {/* Center vertical line - **ENHANCED with a subtle gradient** */}
          <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-emerald-500/50 via-emerald-500/70 to-emerald-500/50 md:left-1/2" />
          
          <div className="space-y-12 md:space-y-16">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <motion.div
                  key={idx}
                  className={`relative flex flex-col items-start gap-4 md:gap-10 md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }} // Staggered x animation
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                >
                  {/* Timeline dot - **ENHANCED with clearer shadow** */}
                  <div
                    className="
                      relative z-10 flex h-10 w-10 items-center justify-center
                      rounded-full bg-white
                      md:absolute md:left-[calc(50%-1.25rem)]
                    "
                  >
                    <span className="absolute inset-0 rounded-full bg-emerald-300/50 blur-sm" />
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-400/80 bg-white shadow-xl shadow-emerald-200/50">
                      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-600" /> {/* Larger dot */}
                    </span>
                  </div>

                  {/* spacer for alignment on desktop */}
                  <div className="hidden w-1/2 md:block" />

                  {/* Card - **ENHANCED hover effect** */}
                  <motion.div
                    whileHover={{
                      y: -8, // Move up slightly more
                      scale: 1.03, // Scale up slightly more
                      boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25), 0 8px 15px -3px rgba(16, 185, 129, 0.15)", // Brighter emerald shadow
                      borderColor: "rgb(5 150 105 / 0.8)", // Darker border on hover
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="
                      relative w-full rounded-2xl border border-emerald-600/30
                      bg-white p-6 shadow-xl shadow-gray-200/50 transition-all duration-300 ease-in-out
                      md:w-1/2
                    "
                  >
                    {/* Phase pill */}
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {step.phase} • {step.year}
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Icon bubble - **ENHANCED with shadow** */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 shadow-lg shadow-emerald-200/50">
                        <Icon className="h-6 w-6 text-emerald-700" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-slate-900 sm:text-xl"> {/* Bold title */}
                          {step.title}
                        </h3>
                        <p className="mb-2 text-sm text-slate-600">
                          {step.detail}
                        </p>
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                          {step.meta}
                        </p>

                        <div className="flex items-center gap-2 pt-2">
                          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                            Core Focus
                          </span>
                          <span className="h-px flex-1 bg-linear-to-r from-emerald-400 via-emerald-200 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* **NEW: Final Conclusion / CTA Element** */}
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block"
            >
              {/* Animated Element at the End of the Line */}
              <div className="absolute left-4 top-1/2 -mt-5 -translate-y-1/2 md:left-1/2 md:-ml-5">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-emerald-400 bg-white p-1 shadow-lg">
                  <ChevronDown className="h-6 w-6 text-emerald-600 animate-bounce" />
                </span>
              </div>
              
              {/* CTA Card */}
              <a
                href="#contact" // Link to a contact/next steps section
                className="
                  group relative z-20 flex items-center gap-3 mt-15 rounded-full bg-emerald-600 px-6 py-3
                  text-lg font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all
                  duration-300 hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-500/50
                "
              >
                <span>The Future is Now: Connect with Us</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;