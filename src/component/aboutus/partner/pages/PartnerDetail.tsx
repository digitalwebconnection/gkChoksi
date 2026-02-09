// src/pages/PartnerDetail.tsx
import { useParams, Link } from "react-router-dom";
import { partners } from "../data/partners";
import PartnerJourney from "../components/PartnerJourney";
import { ArrowLeft, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnerDetail() {
  const { id } = useParams<{ id: string }>();
  const partner = partners.find((p) => p.id === id);

  if (!partner) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Partner not found</h1>
        <Link to="/about/partners" className="text-[#c1972d] underline">
          Return to directory
        </Link>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-linear-to-b from-[#fafafa] to-white selection:bg-[#c1972d]/30"
    >
      {/* Top Nav */}
      <div className="sticky top-0 z-10 bg-white/70 backdrop-blur-lg border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/about/partners"
            className="group flex items-center gap-2 text-slate-500 hover:text-[#c1972d] transition-all text-sm font-medium"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Partners
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24">

          {/* LEFT: Image + Identity */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="sticky top-32">
              <motion.div
                whileHover={{ y: -6, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-[#c1972d]/10 rounded-[2.5rem] blur-2xl" />
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="relative w-full aspect-3/4 object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                className="mt-10 space-y-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.12 },
                  },
                }}
              >
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                >
                  {partner.name}
                </motion.h1>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="h-px w-10 bg-[#c1972d]" />
                  <p className="text-[#c1972d] text-lg font-semibold uppercase tracking-[0.3em]">
                    {partner.role}
                  </p>
                 
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="h-px w-10 bg-[#c1972d]" />
                  <p className="text-[#c1972d] text-lg font-semibold uppercase tracking-[0.3em]">
                    {partner.experience} years of experience
                  </p>
                 
                </motion.div>
                
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Story */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-16">
                {partner.intro}
              </p>

              <div className="mb-20">
                <h3 className="text-xs uppercase tracking-[0.35em] text-slate-400 font-bold mb-10">
                  Professional Journey
                </h3>
                <PartnerJourney journey={partner.journey} />
              </div>

              {partner.quote && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="relative mt-20 p-10 md:p-14 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-slate-100 shadow-xl"
                >
                  <Quote className="absolute -top-6 -left-6 text-[#c1972d]/20 w-16 h-16" />
                  <blockquote>
                    <p className="text-2xl md:text-3xl italic text-slate-800 leading-snug font-serif">
                      {partner.quote}
                    </p>
                  </blockquote>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
