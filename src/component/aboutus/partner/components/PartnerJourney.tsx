// src/components/PartnerJourney.tsx

import { motion } from "framer-motion";

interface Props {
  journey: string[];
}

export default function PartnerJourney({ journey }: Props) {
  return (
    <section className="mt-24 relative">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl md:text-4xl font-bold mb-14"
      >
        Journey & Milestones
      </motion.h2>

      {/* Timeline */}
      <div className="relative pl-14 space-y-14">
        {/* Animated vertical line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-6 top-0 w-0.5 bg-linear-to-b from-[#c1972d] via-[#f5d98a] to-transparent"
        />

        {journey.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Timeline dot */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="absolute left-3 top-6 w-6 h-6 rounded-full 
                         bg-[#0f0f0f] border-2 border-[#c1972d]
                         shadow-[0_0_0_0_rgba(193,151,45,0.6)]
                         group-hover:shadow-[0_0_20px_4px_rgba(193,151,45,0.6)]
                         flex items-center justify-center text-xs font-bold text-[#c1972d]"
            >
              {index + 1}
            </motion.span>

            {/* Card */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                backdrop-blur-xl 
                bg-white/5 
                border border-black/50 
                rounded-2xl 
                p-6 md:p-7
                relative overflow-hidden
              "
            >
              {/* Glow overlay */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 
                transition duration-500
                bg-linear-to-r from-[#c1972d]/10 via-transparent to-transparent
              " />

              <p className="relative mx-10 text-slate-900 text-lg leading-relaxed">
                {step}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
