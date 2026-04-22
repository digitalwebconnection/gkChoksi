import { useState, useEffect } from "react";

import { Users, Briefcase, ShieldCheck } from "lucide-react";

import { HiOutlineLightBulb, HiOutlineTicket } from "react-icons/hi2";

import { motion } from "framer-motion";
import {
  HiOutlineDotsHorizontal,
  HiOutlineChartSquareBar,
  HiOutlineEye,
} from "react-icons/hi";
import VisionMissionSection from "./VisionMissionSection";

export const EXPERTISE = [
  {
    title: "Precision",
    subtitle: "Technical Excellence",
    desc: "Achieving accuracy through rigorous standards and engineering mastery that ensures zero compromise.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflY5SWwQakiHYIDqdbbUpt3daAf0-gYF35A&s",
    gradient: "from-emerald-400 to-cyan-500",
    icon: HiOutlineDotsHorizontal,
  },
  {
    title: "Perspective",
    subtitle: "Strategic Foresight",
    desc: "Seeing beyond the present to unlock hidden opportunities and minimize future risks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgW0s05K23B7L0_3VCpmqar5eEY3dZEzf7mQ&s",
    gradient: "from-orange-400 to-rose-500",
    icon: HiOutlineEye,
  },
  {
    title: "Performance",
    subtitle: "Proven Results",
    desc: "Driving measurable growth through data-backed decisions and high-impact execution.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SSMRvMgHTdIPwFHP8HYU1A4uvS5f9EPIwQ&s",
    gradient: "from-blue-500 to-indigo-600",
    icon: HiOutlineChartSquareBar,
  },
];
const services = [
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    desc: "Ensuring accuracy, compliance, and transparency across financials.",
    image: "https://i0.wp.com/avanopti.com/wp-content/uploads/2024/03/Enron-Financial-Audit.png?fit=2240%2C1260&ssl=1",
  },
  {
    icon: Briefcase,
    title: "Taxation - Direct & Indirect",
    desc: "Strategic tax planning aligned with regulations and growth goals.",
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202601/6956321139809-tax-burden-013627631-16x9.jpg?size=948:533",
  },
  {
    icon: Users,
    title: "Risk Advisory & Consulting",
    desc: "Practical insights to support smarter business decisions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUVy__cHyUmW1WVXOkNiYy-GmVw5gpmHvmQ&s",
  },
];

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
    content: "To provide high-quality Audit & Assurance, Taxation & Risk Advisory Consulting Services through a partner-driven approach, combining technical excellence with commercial understanding to support clients in achieving sustainable growth.",
    image: "https://www.quantumconsumernig.com/assets/imgs/our-mission.jpg",
    icon: <HiOutlineTicket />,
    color: "from-emerald-400 to-teal-600",
    accent: "#10b981",
    lightBg: "bg-emerald-50"
  }
];

export default function FeatureSection() {
  const [active, setActive] = useState(1);

  // 🔁 Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % EXPERTISE.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);


  const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="py-4 bg-white">
   {/* SECTION 1: FOUNDATION (Vision/Mission) */}
      <section className="relative py-14 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER AREA */}
          <div className="relative mb-10">
            <motion.div
      
              className="flex items-center justify-center  mb-4"
            >

              <h1 className="text-2xl md:text-5xl font-bold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] text-[#C2A96A] leading-snug max-w-2xl mx-auto text-center">
                The Foundation
              </h1>
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

      
        {/* ✨ Soft Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-40" />
        </div>

        {/* 🔥 Heading */}
        <div className="text-center mb-16 relative z-10">
         
<h3 className="text-2xl md:text-5xl font-bold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] text-[#C2A96A] leading-snug max-w-2xl mx-auto text-center">
            Clarity Creates Confidence
          </h3>
        </div>

        {/* 💎 Cards */}
        <div className="flex flex-col max-w-7xl mx-auto md:flex-row gap-6 relative z-10">

          {EXPERTISE.map((item, i) => {
            const isActive = i === active;
            const Icon = item.icon;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`relative flex-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-700
        ${isActive ? "flex-3" : "flex-1"}`}
              >

                {/* Image */}
                <img
                  src={item.image}
                  className={`w-full h-[420px] object-cover transition-all duration-700
          ${isActive ? "scale-105" : ""}`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 transition-all duration-500
          ${isActive ? "bg-black/70" : "bg-black/50"}`} />

                {/* 🔥 ICON BADGE */}
                <div className="absolute top-6 left-6 z-20">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl backdrop-blur-md border transition-all duration-500
            ${isActive
                        ? `bg-linear-to-br ${item.gradient} text-white border-white/30 shadow-lg scale-110`
                        : "bg-white/80 text-gray-700 border-gray-200"
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 p-8 w-full z-10">

                  <h3 className={`text-4xl font-bold transition-all duration-300
            ${isActive ? "text-white" : "text-green-500"}`}>
                    {item.title}
                  </h3>

                  <p className={`text-lg font-medium mt-1
            ${isActive ? "text-white" : "text-amber-400"}`}>
                    {item.subtitle}
                  </p>

                  {/* Expand Content */}
                  <div className={`overflow-hidden transition-all duration-500
            ${isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>

                    <p className="text-white text-lg leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Gradient Line */}
                    <div className={`mt-4 h-1 w-12 bg-linear-to-r ${item.gradient} rounded-full`} />
                  </div>

                </div>
              </div>
            );
          })}

        </div>
  <VisionMissionSection />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="my-12 max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* 🔥 MAIN STATEMENT */}
          
           <h2 className="text-5xl font-extrabold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] tracking-tight text-[#C2A96A]">
            Our Expertise
          </h2>

          {/* ✨ DESCRIPTION */}
          <p className="mt-6 text-black text-lg leading-relaxed max-w-7xl text-center mx-auto">
            With the leadership of 8 Partners supported by a strong talent base of 185+ professionals comprising of 40+ Chartered Accountants, 5+ Company Secretaries, 4+ Advocates, 100+ Articles, and 40+ Expert Chartered Accountants engaged on an assignment basis, the firm brings together deep domain expertise and practical insights to support clientele navigating growth and transformation.
          </p>


          {/* 🧠 EXPERTISE BLOCKS */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {services.map((item, i) => {
              const Icon = item.icon;
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-px rounded-2xl bg-linear-to-br from-amber-400/40 via-transparent to-slate-300/40"
                >
                  {/* Card Container */}
                  <div
                    className={`relative h-full p-7 rounded-2xl bg-white border shadow-gray-500 border-slate-500/60 shadow-lg transition-all duration-500 overflow-hidden
              ${isActive ? "shadow-2xl" : ""}`}
                  >
                    {/* 🖼️ Background Image */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-cover transition-all duration-700 ease-out
                  ${isActive
                            ? "opacity-100 scale-110"
                            : "opacity-0 scale-100"
                          }`}
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 transition-colors duration-500
                  ${isActive
                            ? "bg-black/60"
                            : "bg-white/90"
                          }`}
                      />
                    </div>

                    {/* ✨ Glow */}
                    <div
                      className={`absolute inset-0 transition duration-500 bg-linear-to-br from-amber-500/20 to-transparent z-10
                ${isActive ? "opacity-100" : "opacity-0"}`}
                    />

                    {/* Content */}
                    <div className="relative z-20">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 transition-all duration-300
                  ${isActive
                            ? "bg-amber-500 text-white"
                            : "bg-amber-50"
                          }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors
                    ${isActive
                              ? "text-white"
                              : "text-[#079264]"
                            }`}
                        />
                      </div>

                      {/* Title */}
                      <h4
                        className={`text-2xl font-semibold mb-3 transition-colors duration-300
                  ${isActive
                            ? "text-white"
                            : "text-black"
                          }`}
                      >
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300
                  ${isActive
                            ? "text-slate-100"
                            : "text-slate-600"
                          }`}
                      >
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 bg-amber-500 transition-all duration-700 z-30
                ${isActive ? "w-full" : "w-0"}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>





      </div>

    </section>
  );
}