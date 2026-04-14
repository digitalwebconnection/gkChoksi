import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Scale, FileText, Shuffle, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Corporate and Allied Laws",
    icon: Scale,
  },
  {
    title: "Tax and Litigation Support",
    icon: FileText,
  },
  {
    title: "Transaction Advisory (M&A)",
    icon: Shuffle,
  },
  {
    title: "Audit and Assurance",
    icon: ShieldCheck,
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
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-12 bg-[#F7F9F8]">
      <div className="relative mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-lg font-semibold uppercase tracking-[0.25em] text-[#6FAF9B]">
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
                whileHover={{ y: -8, scale: 1.05 }}
                onClick={() => navigate("/services")}
                className="cursor-pointer group relative border border-[#6FAF9B]/30 bg-white p-6 text-center
                shadow-[0_10px_30px_rgba(15,61,46,0.1)] 
                hover:shadow-[0_20px_60px_rgba(15,61,46,0.2)] 
                transition-all duration-300 rounded-xl"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#0F3D2E]/70" />

                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 mx-auto items-center justify-center rounded-xl bg-[#6FAF9B]/15 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-white transition">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1C1C1C] group-hover:text-[#0F3D2E] transition">
                  {service.title}
                </h3>

                {/* Optional subtle hover text */}
                <span className="block mt-2 text-xs text-[#6FAF9B] opacity-0 group-hover:opacity-100 transition">
                  View →
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeOffer;