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


import { HiOutlineLightBulb, HiOutlineTicket } from "react-icons/hi2";

const foundationItems = [
  {
    title: "Our Vision",
    content: "To be a trusted, forward-looking professional services firm delivering value through insight, integrity and innovation.",
    image: "https://shahkar.org.af/wp-content/uploads/2024/09/Our-Vision.jpg",
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
  {
    title: "Leadership",
    text: "Taking ownership and driving outcomes with accountability.",
    icon: FaUserTie,
    image: "https://media.licdn.com/dms/image/v2/C4E12AQEFYVINMz89CA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1625057746510?e=2147483647&v=beta&t=b4-ofp_obfwrjjLGXHuLncsrZNeREaHzbrk6Jda6IWk", // team leader / boardroom leadership
    color: "#c5a059"
  },
  {
    title: "Integrity",
    text: "Upholding the highest ethical and professional standards.",
    icon: FaShieldHalved,
    image: "https://www.oecd.org/adobe/dynamicmedia/deliver/dm-aid--a992d87d-9d9a-4f98-a759-5f45049fe7fc/business-integrity-1494287358.jpg?quality=80&preferwebp=true", // handshake / trust / contract signing
    color: "#c5a059"
  },
  {
    title: "Empathy",
    text: "Understanding client needs with a solution-oriented mindset.",
    icon: FaHeart,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1gdVRTubyONuHjczEpjTMMn18MtBiJUGaLw&s", // conversation / listening / support
    color: "#c5a059"
  },
  {
    title: "Innovation",
    text: "Leveraging technology and new thinking to deliver value.",
    icon: FaLightbulb,
    image: "https://www.qodequay.com/wp-content/uploads/2025/09/Innovation-Accounting-Measuring-the-ROI-of-RD-Investments.png", // tech / brainstorming / modern workspace
    color: "#c5a059"
  },
  {
    title: "Collaboration",
    text: "Working seamlessly across teams and clients.",
    icon: FaUsers,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtasI0ZWIXzxa3yb8HNc7YZ-XpO9-g9Iw-A&s", // teamwork / group discussion
    color: "#c5a059"
  },
  {
    title: "Client Centricity",
    text: "Prioritising long-term relationships over short-term gains.",
    icon: FaHandshake,
    image: "https://think360.ai/wp-content/uploads/2023/01/Aug-11_Customer-centricity.jpg", // client meeting / trust / partnership
    color: "#c5a059"
  },
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

        <div className="max-w-6xl mx-auto px-6">

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
          <div className="grid md:grid-cols-2 gap-15 perspective-distant">

            {foundationItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group w-full h-80"
              >

                {/* 🔥 FLIP CONTAINER */}
                <div className="relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">

                  {/* ================= FRONT (IMAGE) ================= */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Icon */}
                    <div className={`absolute top-6 left-6 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg bg-linear-to-br ${item.color}`}>
                      {item.icon}
                    </div>

                    {/* Title on image */}
                    <h3 className="absolute bottom-6 left-6 text-white text-3xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  {/* ================= BACK (CONTENT) ================= */}
                  <div className="absolute inset-0 rounded-[2.5rem] p-8 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
                        transform-[rotateY(180deg)] backface-hidden flex flex-col justify-between">

                    <div>
                      <h3 className="text-4xl font-semibold text-[#C2A96A] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-black text-lg text-justify leading-relaxed">
                        {item.content}
                      </p>
                    </div>

                 
                  </div>

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