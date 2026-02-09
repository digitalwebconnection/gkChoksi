// src/pages/Partners.tsx

import { partners } from "../data/partners";
import PartnerCard from "../components/PartnerCard";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-white via-neutral-50 to-white px-6 py-24">
      
      {/* Background Accent */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c1972d]/10 blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900">
          Meet Our <span className="text-[#c1972d]">Partners</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
          Leaders who shape our vision, strengthen our values,  
          and help us build long-term impact.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid max-w-7xl mx-auto grid-cols-2 md:grid-cols-4 gap-8"
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <PartnerCard partner={partner} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
