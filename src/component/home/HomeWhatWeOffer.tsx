import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  Briefcase,
  SearchCheck,
  GitMerge,
  Calculator,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Audit & Assurance",
    icon: SearchCheck,
    color: "#10B981", // green
    bg: "#D1FAE5",
  },
  {
    title: "Business Advisory",
    icon: Briefcase,
    color: "#3B82F6", // blue
    bg: "#DBEAFE",
  },
  
  {
    title: "Mergers & Acquisition",
    icon: GitMerge,
    color: "#F59E0B", // orange
    bg: "#FEF3C7",
  },

  {
    title: "Regulatory",
    icon: ShieldCheck,
    color: "#EF4444", // red
    bg: "#FEE2E2",
  },
  {
    title: "Taxation",
    icon: Calculator,
    color: "#14B8A6", // teal
    bg: "#CCFBF1",
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
          <p className="text-lg font-semibold  uppercase tracking-[0.25em] text-[#6FAF9B]">
            Our Core Expertise
          </p>

          <h2 className="mt-3 font-serif text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] max-w-3xl mx-auto font-bold text-[#C2A96A] sm:text-5xl">
            Integrated Professional Solutions
          </h2>

          <p className="mx-auto mt-4 text-lg text-[#1F6F5B]">
            We deliver comprehensive, specialized services as follows....
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5"
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
                hover:shadow-[0_20px_60px_rgba(15,61,46,0.2)] F
                transition-all duration-300 rounded-xl"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#0F3D2E]/70" />

                {/* Icon */}
                <div
                  className="mb-4 flex h-14 w-14 mx-auto items-center justify-center rounded-xl transition"
                  style={{ backgroundColor: service.bg }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: service.color }}
                    strokeWidth={2}
                  />
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