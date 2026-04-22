import { useState } from "react";
import { partners } from "./Data";
import PartnerModal from "./PartnerModal";
import HeroSection from "./HeroSection";
import {
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const blocks = [
  {
    icon: HiOutlineUserGroup,
    color: "#289572",
    bg: "bg-[#289572]/10",
    title: "Technical Excellence",
    text: "Our Partners bring with them a blend of technical excellence and seasoned judgement. Each engagement is led with personal involvement, ensuring experience is delivered, not delegated.",
  },
  {
    icon: HiOutlineLightBulb,
    color: "#3B82F6",
    bg: "bg-[#3B82F6]/10",
    title: "Strategic Direction",
    text: "With diverse backgrounds across industries, the leadership team provides direction that is both strategic and grounded, offering clarity in complexity.",
  },
  {
    icon: HiOutlineScale,
    color: "#C2A96A",
    bg: "bg-[#C2A96A]/10",
    highlight: true,
    title: "Integrity & Responsibility",
    text: "Beyond capability, the Partners share a common philosophy — to lead with integrity, to listen with intent, and to advise with responsibility.",
  },
];

// Interactive 3D Card Component for the Top Blocks
interface FeatureCardProps {
  block: typeof blocks[0];
  i: number;
}

const FeatureCard = ({ block, i }: FeatureCardProps) => {
  const Icon = block.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group h-full"
    >
      <div className={`relative h-full p-6 rounded-xl bg-white border border-gray-900/20 transition-all duration-500 
        ${block.highlight ? "shadow-[0_20px_50px_rgba(194,169,106,0.15)] border-[#C2A96A]/20" : "shadow-xl shadow-gray-200/40"}`}>

        {/* Hover Gradient Blob */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{ backgroundColor: block.color }}
        />

        <div style={{ transform: "translateZ(40px)" }} className={`w-14 h-14 ${block.bg} rounded-2xl flex items-center justify-center mb-6`}>
          <Icon className="w-7 h-7" style={{ color: block.color }} />
        </div>

        <h3 style={{ transform: "translateZ(30px)" }} className="text-2xl font-bold text-gray-900 mb-3">
          {block.title}
        </h3>

        <p style={{ transform: "translateZ(20px)" }} className="text-gray-900 text-justify leading-relaxed text-md md:text-xl">
          {block.text}
        </p>

        <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: block.color }} />
      </div>
    </motion.div>
  );
};

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />

      {/* SECTION 1: TOP FEATURE BLOCKS */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold text-gray-900"
            >
              Our <span className="text-[#C2A96A]  ">Partners</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              className="h-1 bg-linear-to-r from-[#289572] to-[#C2A96A] mx-auto mt-6"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 perspective-[1000px]">
            {blocks.map((block, i) => (
              <FeatureCard key={i} block={block} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PARTNERS GRID */}
      <section className="py-10 px-6 bg-[#FBFBFB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl font-bold drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] text-gray-900">Leadership Team</h3>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedPartner(partner)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl overflow-hidden border border-gray-500/20 shadow-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

                  {/* IMAGE with Color Overlay */}
                  <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-white text-sm  font-bold flex items-center gap-2">
                        View Profile <HiOutlineArrowRight />
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#289572] transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">
                      {partner.designation}
                    </p>

                    <div className="flex justify-center mt-4">
                      <div className="w-8 h-1 bg-gray-100 rounded-full group-hover:w-16 group-hover:bg-[#C2A96A] transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <PartnerModal
        partner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
    </div>
  );
};

export default Partners;