import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Scale, FileText, Shuffle, ShieldCheck, Zap, Handshake } from "lucide-react";

const services = [
  {
    title: "Corporate and Allied Laws",
    icon: Scale,
    description:
      "Independent advice to public, private, and not-for-profit organizations on complex regulatory and corporate governance frameworks.",
    note: "Board support • Opinions • Secretarial compliance",
  },
  {
    title: "Tax and Litigation Support",
    icon: FileText,
    description:
      "Proactive tax strategy planning and focused representation to manage exposures in the wake of labyrinthine tax laws and regulations.",
    note: "Direct & indirect tax • Assessments • Appeals",
  },
  {
    title: "Transaction Advisory (M&A)",
    icon: Shuffle,
    description:
      "Support across the entire deal lifecycle, including valuation, due diligence, structuring, and complex transaction execution.",
    note: "M&A support • Due diligence • Deal execution",
  },
  {
    title: "Audit and Assurance",
    icon: ShieldCheck,
    description:
      "Ensuring robust financial reporting and compliance through statutory, internal, and special audits aligned with global standards.",
    note: "Statutory, internal & special audits",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
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
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const WhatWeOffer = () => {
  return (
    <section className="relative overflow-hidden  py-12">

      {/* Background Glow */}
      {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6FAF9B]/20 via-transparent to-[#0F3D2E]/10" /> */}

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6FAF9B]">
            Our Core Expertise
          </p>

          <h2 className="mt-3 font-serif text-3xl max-w-3xl mx-auto font-bold text-[#1C1C1C] sm:text-5xl">
            Integrated Professional Solutions
          </h2>

          <p className="mx-auto mt-4 text-lg text-[#1F6F5B]">
            We deliver comprehensive, specialized services spanning governance,
            tax, transactions, and assurance.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative  border border-[#6FAF9B]/30 bg-white p-6 shadow-black transition-all duration-300 hover:shadow-black "
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#0F3D2E]/70" />

                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#6FAF9B]/15 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-white transition">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-[#1C1C1C]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#1F6F5B] leading-relaxed">
                  {service.description}
                </p>

                {/* Note */}
                <div className="mt-4 pt-4 border-t border-[#6FAF9B]/20">
                  <p className="text-[11px] uppercase tracking-widest text-[#000000]">
                    Focus Areas
                  </p>
                  <p className="mt-1 text-xs text-[#1F6F5B] font-medium">
                    {service.note}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center  bg-[#0F3D2E]/80 opacity-0 transition group-hover:opacity-100">
                  <span className="flex items-center text-white font-semibold">
                    Explore Service <Zap className="ml-2 h-5 w-5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#0F3D2E] px-8 py-3 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(15,61,46,0.5)] transition hover:bg-[#1F6F5B]"
          >
            Discuss Your Requirements
            <Handshake className="ml-3 h-5 w-5" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;