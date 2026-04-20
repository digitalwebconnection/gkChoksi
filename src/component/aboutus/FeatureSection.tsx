import { useState, useEffect } from "react";

import { Users, Briefcase, ShieldCheck } from "lucide-react";


import { motion } from "framer-motion";
import {
  HiOutlineDotsHorizontal,
  HiOutlineChartSquareBar,
  HiOutlineEye,
} from "react-icons/hi";

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
    title: "Audit",
    desc: "Ensuring accuracy, compliance, and transparency across financials.",
    image: "https://i0.wp.com/avanopti.com/wp-content/uploads/2024/03/Enron-Financial-Audit.png?fit=2240%2C1260&ssl=1",
  },
  {
    icon: Briefcase,
    title: "Tax",
    desc: "Strategic tax planning aligned with regulations and growth goals.",
    image: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202601/6956321139809-tax-burden-013627631-16x9.jpg?size=948:533",
  },
  {
    icon: Users,
    title: "Advisory",
    desc: "Practical insights to support smarter business decisions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUVy__cHyUmW1WVXOkNiYy-GmVw5gpmHvmQ&s",
  },
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
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="my-12 max-w-7xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* 🔥 MAIN STATEMENT */}
          <h3 className="text-2xl md:text-5xl font-semibold text-slate-900 leading-snug max-w-2xl mx-auto text-center">
            Clarity creates confidence
          </h3>

          {/* ✨ DESCRIPTION */}
          <p className="mt-6 text-black text-lg leading-relaxed max-w-5xl mx-auto">
            With the leadership of 8 Partners and a team of 35+ Chartered Accountants supported by
            150+ professionals, we bring depth of knowledge and real-world experience to businesses
            that are evolving and expanding.
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



        {/* ✨ Soft Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-linear-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full blur-3xl opacity-40" />
        </div>

        {/* 🔥 Heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Our Expertise
          </h2>

        </div>

        {/* 💎 Cards */}
        <div className="flex flex-col md:flex-row gap-6 relative z-10">

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


      </div>

    </section>
  );
}