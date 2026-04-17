import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaUserTie,
  FaShieldHalved,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaHandshake,
} from "react-icons/fa6";

// Assets (Keep your existing imports)
import bgLeadership from "../../assets/10.jpeg";
import bgIntegrity from "../../assets/11.jpeg";
import bgEmpathy from "../../assets/12.jpeg";
import bgInnovation from "../../assets/13.jpeg";
import bgCollaboration from "../../assets/14.jpeg";
import bgClient from "../../assets/15.jpeg";
import { HiOutlineLightBulb, HiOutlineTicket, HiOutlineArrowUpRight } from "react-icons/hi2";

const foundationItems = [
  {
    title: "Our Vision",
    content: "To be a trusted, forward-looking professional services firm delivering value through insight, integrity and innovation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIcL5VaDWKqAElmIXID5K92R4ErYzZq4Ibw&s",
    icon: <HiOutlineLightBulb />,
    color: "from-amber-400 to-orange-600",
    accent: "#e2b43e",
    lightBg: "bg-amber-50"
  },
  {
    title: "Our Mission",
    content: "To provide high-quality audit, tax and advisory services through a partner-driven approach, combining technical excellence with commercial understanding to support clients in achieving sustainable growth.",
    image: "https://www.quantumconsumernig.com/assets/imgs/our-mission.jpg",
    icon: <HiOutlineTicket />,
    color: "from-emerald-400 to-teal-600",
    accent: "#10b981",
    lightBg: "bg-emerald-50"
  }
];
const coreValues = [
  { title: "Leadership", text: "Taking ownership and driving outcomes with accountability.", icon: FaUserTie, image: bgLeadership, color: "#c5a059" },
  { title: "Integrity", text: "Upholding the highest ethical and professional standards.", icon: FaShieldHalved, image: bgIntegrity, color: "#c5a059" },
  { title: "Empathy", text: "Understanding client needs with a solution-oriented mindset.", icon: FaHeart, image: bgEmpathy, color: "#c5a059" },
  { title: "Innovation", text: "Leveraging technology and new thinking to deliver value.", icon: FaLightbulb, image: bgInnovation, color: "#c5a059" },
  { title: "Collaboration", text: "Working seamlessly across teams and clients.", icon: FaUsers, image: bgCollaboration, color: "#c5a059" },
  { title: "Client Centricity", text: "Prioritising long-term relationships over short-term gains.", icon: FaHandshake, image: bgClient, color: "#c5a059" },
];

const VisionMissionSection = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveValue((current) => (current + 1) % coreValues.length);
          return 0;
        }
        return prev + 0.5; // Controls speed of auto-switch
      });
    }, 20);
    return () => clearInterval(timer);
  }, [activeValue]);

  return (
    <div className="bg-[#fcfcfc] font-sans text-slate-900">

      {/* SECTION 1: FOUNDATION (Vision/Mission) */}
      <section className="relative py-14 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER AREA */}
          <div className="relative mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center  mb-4"
            >

              <span className="text-3xl text-center font-black tracking-[0.3em] text-[#3d2d04] uppercase">
                The Foundation
              </span>
            </motion.div>


          </div>

          {/* GRID ITEMS */}
          <div className="grid md:grid-cols-2 gap-10">
            {foundationItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative"
              >
                {/* MAIN CONTAINER */}
                <div className="relative bg-white rounded-[2.5rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-900/20 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 h-full">

                  {/* IMAGE WRAPPER */}
                  <div className="relative h-80 w-full overflow-hidden rounded-4xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />

                    {/* Floating Icon Box */}
                    <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-xl bg-linear-to-br ${item.color} transition-transform duration-500 group-hover:rotate-360`}>
                      {item.icon}
                    </div>

                   
                  </div>

                  {/* CONTENT AREA */}
                  <div className="p-8 pb-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-3xl font-serif text-slate-900 `}>{item.title}</h3>
                      <div className={`p-2 rounded-full ${item.lightBg} group-hover:scale-110 transition-transform`}>
                        <HiOutlineArrowUpRight className={`text-xl font-bold`} style={{ color: item.accent }} />
                      </div>
                    </div>

                    <p className="text-lg text-slate-500 leading-relaxed mb-8">
                      {item.content}
                    </p>


                  </div>

                  {/* Decorative Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full bg-linear-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE VALUES (Interactive Showcase) */}
      <section className="py-24 bg-white  relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#79590a]/5 skew-x-12 translate-x-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl text-center font-serif mb-10 font-bold leading-tight">
            Our <span className="text-[#c5a059]">Excellence</span> <br />is Driven by Values
          </h2>
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Column: Visual Content */}
            <div className="lg:col-span-7 ">
              <div className="relative aspect-video h-full  rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeValue}
                    src={coreValues[activeValue].image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />

              </div>
            </div>

            {/* Right Column: Interaction */}
            <div className="lg:col-span-5">


              <div className="space-y-4">
                {coreValues.map((val, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveValue(i); setProgress(0); }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group flex items-center gap-4 ${activeValue === i ? "bg-[#032509] translate-x-4" : "hover:bg-[#c5a059]"
                      }`}
                  >
                    <div className="relative">
                      {/* Mini Progress Circle */}
                      <svg className="w-10 h-10 transform -rotate-90">
                        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/10" />
                        {activeValue === i && (
                          <motion.circle
                            cx="20" cy="20" r="18"
                            stroke="#c5a059" strokeWidth="2"
                            fill="transparent"
                            strokeDasharray="113.1"
                            animate={{ strokeDashoffset: 113.1 - (113.1 * progress) / 100 }}
                          />
                        )}
                      </svg>
                      <val.icon className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 ${activeValue === i ? "text-[#c5a059]" : "text-black"}`} />
                    </div>

                    <div>
                      <h4 className={`font-bold tracking-wide ${activeValue === i ? "text-white" : "text-slate-700"}`}>
                        {val.title}
                      </h4>
                      {activeValue === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="text-sm text-slate-300 mt-1 pr-4 leading-snug"
                        >
                          {val.text}
                        </motion.p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionMissionSection;