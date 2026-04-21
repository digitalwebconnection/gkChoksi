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

   

      {/* SECTION 2: CORE VALUES (Interactive Showcase) */}
      <section className="py-24 bg-white  relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#79590a]/5 skew-x-12 translate-x-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl text-center drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-serif mb-10 font-bold leading-tight">
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