import { useState, useEffect } from "react";
import {
  HiOutlineDotsHorizontal,
  HiOutlineChartSquareBar,
  HiOutlineEye,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineSparkles
} from "react-icons/hi";
import { Users, Briefcase, ShieldCheck } from "lucide-react";


import { motion } from "framer-motion";

const SLIDES = [
  {
    icon: <HiOutlineDotsHorizontal className="w-8 h-8" />,
    badgeIcon: <HiOutlineShieldCheck />,
    title: "Precision",
    sub: "Technical Excellence",
    desc: "Achieving accuracy through rigorous standards and engineering mastery.",
    image: "https://www.thoughtco.com/thmb/I5cL2do487V73TIGmEAI7CLmIys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-958882058-ea61bbe62a594754b80a23a6fe150aae.jpg",
    theme: "emerald",
    gradient: "from-emerald-400 to-cyan-500",
    shadow: "shadow-emerald-200",
    bgLight: "bg-emerald-50",
    text: "text-emerald-600"
  },
  {
    icon: <HiOutlineEye className="w-8 h-8" />,
    badgeIcon: <HiOutlineSparkles />,
    title: "Perspective",
    sub: "Strategic Foresight",
    desc: "Seeing beyond the immediate to identify long-term opportunities and risks.",
    image: "https://www.commerceclasseskey2success.com/wp-content/uploads/2019/03/Accounts-featured.jpg",
    theme: "amber",
    gradient: "from-orange-400 to-rose-500",
    shadow: "shadow-orange-200",
    bgLight: "bg-orange-50",
    text: "text-orange-600"
  },
  {
    icon: <HiOutlineChartSquareBar className="w-8 h-8" />,
    badgeIcon: <HiOutlineLightningBolt />,
    title: "Performance",
    sub: "Measurable Results",
    desc: "Delivering data-driven outcomes that impact your bottom line directly.",
    image: "https://www.techfunnel.com/wp-content/uploads/2019/07/7-Types-of-Performance-Appraisal-Methods-in-HRM-1.jpg",
    theme: "indigo",
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-indigo-200",
    bgLight: "bg-indigo-50",
    text: "text-indigo-600"
  },
];
const services = [
  {
    icon: ShieldCheck,
    title: "Audit",
    desc: "Ensuring accuracy, compliance, and transparency across financials.",
  },
  {
    icon: Briefcase,
    title: "Tax",
    desc: "Strategic tax planning aligned with regulations and growth goals.",
  },
  {
    icon: Users,
    title: "Advisory",
    desc: "Practical insights to support smarter business decisions.",
  },
];

export default function FeatureSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white">
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

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-px rounded-2xl bg-linear-to-br from-amber-400/40 via-transparent to-slate-300/40"
                >
                  {/* Card */}
                  <div className="relative h-full p-7 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all duration-500 group-hover:shadow-xl overflow-hidden">

                    {/* ✨ Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-amber-100/40 to-transparent" />

                    {/* 🔥 Icon Box */}
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-amber-50 mb-5 group-hover:bg-amber-100 transition">
                      <Icon className="w-6 h-6 text-[#079264]" />
                    </div>

                    {/* 🧠 Title */}
                    <h4 className="text-2xl font-semibold text-black mb-3 group-hover:text-amber-600 transition">
                      {item.title}
                    </h4>

                    {/* 📄 Description */}
                    <p className="text-sm text-slate-900 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* ➡️ Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-500" />

                  </div>
                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* Header Text */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="px-10 py-1.5 rounded-full border-2 border-green-500 bg-gray-200 text-gray-950 text-3xl font-bold tracking-widest uppercase mb-4">
            Our Expertise
          </span>
          {/* SHORT STRONG LINE */}


        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:items-stretch">

          {/* LEFT SIDE: Interactive Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {SLIDES.map((slide, i) => {
              const isActive = i === active;

              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative overflow-hidden text-left px-8 py-9 rounded-3xl border-2 transition-all duration-500 transform ${isActive
                    ? `bg-white border-transparent shadow-2xl ${slide.shadow} -translate-y-1`
                    : "bg-gray-50 border-gray-900/20 hover:border-gray-900/60  hover:opacity-100"
                    }`}
                >
                  <div className="flex gap-6 relative z-10">
                    {/* Dynamic Icon Box */}
                    <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive
                      ? `bg-linear-to-br ${slide.gradient} text-white  shadow-lg`
                      : "bg-white text-gray-900 shadow-sm"
                      }`}>
                      {slide.icon}
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className={`text-2xl font-bold transition-colors ${isActive ? "text-gray-900" : "text-gray-900"}`}>
                        {slide.title}
                      </h3>
                      <p className={`font-semibold text-sm uppercase tracking-wider ${isActive ? slide.text : "text-gray-800"}`}>
                        {slide.sub}
                      </p>
                    </div>
                  </div>

                  {/* Progress bar line for active item */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gray-100">
                      <div className={`h-full bg-linear-to-r ${slide.gradient} animate-[progress_6s_linear]`} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Visual Showcase */}
          <div className="lg:col-span-7">
            <div className={`h-full rounded-[2.5rem] p-4 transition-colors duration-700 ${SLIDES[active].bgLight}`}>
              <div className="bg-white rounded-xl h-full overflow-hidden shadow-xl flex flex-col">

                {/* Image Section */}
                <div className="relative h-42 md:h-66 w-full overflow-hidden">
                  <img
                    key={active}
                    src={SLIDES[active].image}
                    alt={SLIDES[active].title}
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                  />
                  {/* Badge */}
                  <div className={`absolute top-6 left-6 px-4 py-2 rounded-xl backdrop-blur-md bg-white/90 shadow-lg flex items-center gap-2 font-bold ${SLIDES[active].text}`}>
                    <span className="text-xl">{SLIDES[active].badgeIcon}</span>
                    {SLIDES[active].title}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-10 grow flex flex-col justify-center">
                  <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-8">
                    "{SLIDES[active].desc}"
                  </p>

                  <div className="flex items-center justify-between mt-auto">


                    {/* Decorative Dots */}
                    <div className="flex gap-1.5">
                      {SLIDES.map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 rounded-full transition-all duration-500 ${i === active ? `w-8 bg-linear-to-r ${SLIDES[active].gradient}` : "w-2 bg-gray-200"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />
    </section>
  );
}