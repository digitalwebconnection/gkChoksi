
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Scale, FileText, Shuffle, ShieldCheck, Zap, Handshake } from "lucide-react";

const services = [
  {
    title: "Corporate and Allied Laws", // Slightly refined title
    icon: Scale,
    description:
      "Independent advice to public, private, and not-for-profit organizations on complex regulatory and corporate governance frameworks.",
    note: "Board support • Opinions • Secretarial compliance",
    color: "emerald",
  },
  {
    title: "Tax and Litigation Support",
    icon: FileText,
    description:
      "Proactive tax strategy planning and focused representation to manage exposures in the wake of labyrinthine tax laws and regulations.",
    note: "Direct & indirect tax • Assessments • Appeals",
    color: "cyan",
  },
  {
    title: "Transaction Advisory (M&A)", // More specific title
    icon: Shuffle,
    description:
      "Support across the entire deal lifecycle, including valuation, due diligence, structuring, and complex transaction execution.",
    note: "M&A support • Due diligence • Deal execution",
    color: "amber",
  },
  {
    title: "Audit and Assurance",
    icon: ShieldCheck,
    description:
      "Ensuring robust financial reporting and compliance through statutory, internal, and special audits aligned with global standards.",
    note: "Statutory, internal & special audits",
    color: "violet",
  },
];

// --- Framer Motion Variants for the new design ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.6 },
  },
};

// Map color strings to Tailwind classes
const colorMap: { [key: string]: { border: string; bg: string; text: string; shadow: string } } = {
  emerald: {
    border: "border-emerald-500/80",
    bg: "bg-emerald-50/70",
    text: "text-emerald-700",
    shadow: "shadow-emerald-300/40",
  },
  cyan: {
    border: "border-cyan-500/80",
    bg: "bg-cyan-50/70",
    text: "text-cyan-700",
    shadow: "shadow-cyan-300/40",
  },
  amber: {
    border: "border-amber-500/80",
    bg: "bg-amber-50/70",
    text: "text-amber-700",
    shadow: "shadow-amber-300/40",
  },
  violet: {
    border: "border-violet-500/80",
    bg: "bg-violet-50/70",
    text: "text-violet-700",
    shadow: "shadow-violet-300/40",
  },
};

const WhatWeOffer = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-10 sm:py-14" // Changed base color to white
    >
      {/* Background radial gradient spotlight */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_top_right,var(--tw-color-emerald-50)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--tw-color-cyan-50)_0%,transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- CENTERED INTRO --- */}
        <div className="mx-auto mb-12 max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-900">
            Our Core Expertise
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-5xl">
            Integrated Professional Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-6xl text-lg text-slate-600">
            We deliver comprehensive, specialized services spanning governance,
            tax, transactions, and assurance, supporting your organization at every stage.
          </p>  
        </div>

        {/* --- SERVICE GRID - NEW STRUCTURE --- */}
        <motion.div
          className="relative mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" // Simple 4-column grid for clarity
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Central Connecting Element (Visible on Desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* Draw a subtle cross shape connecting the center of all 4 cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-0.5 w-full bg-slate-400/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-slate-200/50" />
            </div>
            {/* Central hub dot */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="h-4 w-4 rounded-full bg-emerald-400/80 shadow-lg shadow-emerald-400/50" />
            </div>
          </div>

          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            
            return (
              <motion.div
                key={service.title}
                className={`group relative flex h-full flex-col justify-start rounded-xl border-2 ${colors.border} ${colors.bg} p-6 shadow-xl transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-slate-300/60`}
                variants={cardVariants}
              >
                {/* Accent line on hover */}
                <span className={`absolute inset-x-0 bottom-0 h-1 rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-linear-to-r from-${service.color}-400 to-${service.color}-600`} />

                {/* Icon Container */}
                <div className
                  ={`relative mb-4 flex h-14 w-14 items-center justify-center rounded-full ${colors.bg} ${colors.text} border-2 ${colors.border} shadow-lg ${colors.shadow}`}
                >
                  <span className={`absolute h-8 w-8 rounded-full blur-md ${colors.bg}`} />
                  <Icon className="relative h-6 w-6" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-700">
                  {service.description}
                </p>

                {/* Focus Note at the bottom */}
                <div className="mt-4 pt-4 border-t border-slate-200/70">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                        Focus Areas:
                    </p>
                    <p className="mt-1 text-xs text-slate-600 font-medium">
                        {service.note}
                    </p>
                </div>
                
                {/* Hidden Button on Hover (optional, but good for UX) */}
                <button 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center 
                                rounded-xl bg-white/50 backdrop-blur-sm text-lg font-bold ${colors.text}`}
                    aria-label={`Learn more about ${service.title}`}
                >
                    Explore Service
                    <Zap className="ml-2 h-5 w-5" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Call to Action Bar */}
        <div className="mt-16 text-center">
            <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center rounded-full bg-slate-800 px-8 py-3 text-lg font-semibold text-white shadow-xl transition-all hover:bg-emerald-600 hover:shadow-emerald-400/50"
            >
                Discuss Your Requirements <Handshake className="ml-3 h-5 w-5" />
            </motion.a>
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;