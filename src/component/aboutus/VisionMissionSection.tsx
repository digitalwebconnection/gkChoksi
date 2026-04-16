import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  FaUserTie,
  FaShieldHalved,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaHandshake,
} from "react-icons/fa6"

import "../home/heroAnimations.css"

import bgLeadership from "../../assets/10.jpeg"
import bgIntegrity from "../../assets/11.jpeg"
import bgEmpathy from "../../assets/12.jpeg"
import bgInnovation from "../../assets/13.jpeg"
import bgCollaboration from "../../assets/14.jpeg"
import bgClient from "../../assets/15.jpeg"
import FeatureSection from "./FeatureSection"

const IVORY = "#F7F9F8"
const CHARCOAL = "#1C1C1C"
const ACCENT = "#6FAF9B"
const GOLD = "#79590a"


// Assuming variables: GOLD, ACCENT, CHARCOAL, IVORY are defined
// Assuming visionImage and missionImage are your imported assets

const foundationItems = [
  {
    title: "Vision",
    content: "To be a trusted, forward-looking professional services firm delivering value through insight, integrity and innovation.",
    image: "https://www.kei-ind.com/wp-content/uploads/2025/02/vision-con01.jpg",
    color: GOLD,
    icon: "vision",
    index: 0
  },
  {
    title: "Mission",
    content: "To provide high-quality audit, tax and advisory services through a partner-driven approach, combining technical excellence with commercial understanding.",
    image: "https://www.shutterstock.com/image-photo/business-clear-vision-strategy-company-260nw-2661667953.jpg",
    color: ACCENT,
    icon: "mission",
    index: 1
  }
];

const coreValues = [
  {
    title: "Leadership",
    text: "Taking ownership and driving outcomes with accountability while ensuring commitment to quality and continuous improvement",
    Icon: FaUserTie,
    image: bgLeadership,
  },
  {
    title: "Integrity",
    text: "Upholding the highest ethical and professional standards",
    Icon: FaShieldHalved,
    image: bgIntegrity,
  },
  {
    title: "Empathy",
    text: "Understanding client needs with a solution-oriented mindset",
    Icon: FaHeart,
    image: bgEmpathy,
  },
  {
    title: "Innovation",
    text: "Leveraging technology and new thinking to deliver value",
    Icon: FaLightbulb,
    image: bgInnovation,
  },
  {
    title: "Collaboration",
    text: "Working seamlessly across teams and clients",
    Icon: FaUsers,
    image: bgCollaboration,
  },
  {
    title: "Client Centricity",
    text: "Prioritising long-term relationships over short-term gains",
    Icon: FaHandshake,
    image: bgClient,
  },
] as const

const VisionMissionSection = () => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = window.setInterval(() => {
      setSlide((p) => (p + 1) % coreValues.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const next = () => setSlide((p) => (p + 1) % coreValues.length)
  const prev = () =>
    setSlide((p) => (p - 1 + coreValues.length) % coreValues.length)


  return (
    <div className="bg-[#FBFCFB]  ">
      <FeatureSection/>
      {/* Vision & Mission */}
      <section className="py-14" style={{ backgroundColor: "#F7F9F8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header Block */}
          <div className="mb-5 text-center">
            <span className="text-3xl font-bold mb-5 uppercase tracking-widest text-[#1F6F5B]">Our Foundation</span>
           
          </div>

          {/* Two Cards in One Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {foundationItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[420px] shadow-xl shadow-black/30 overflow-hidden rounded-xl"
              >

                {/* 🔥 Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />

                {/* 🔥 Dark Overlay */}
                {/* <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-500" /> */}

                {/* 🔥 Gradient Overlay (Bottom Focus) */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />

                {/* 🔥 Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-3">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="text-sm md:text-base leading-relaxed text-white/80">
                    {item.content}
                  </p>


                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative overflow-hidden py-24 md:pb-12" >
        {/* Decorative Background Element */}
        <div
          className="absolute top-0 right-0 h-full w-1/3 opacity-[0.03] pointer-events-none"
          style={{ borderLeft: `1px solid ${CHARCOAL}` }}
        />

        <div className="mx-auto  max-w-7xl px-6 py-10 lg:px-8">
          {/* Header Section */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <p className="text-lg font-bold uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                How we work
              </p>
              <h2 className="mt-4 text-3xl font-bold  tracking-tight md:text-5xl" style={{ color: CHARCOAL }}>
                Our <span className="font-serif " style={{ color: GOLD }}>Core</span> Values
              </h2>
            </motion.div>

            {/* Progress Indicators / Navigation */}
            {/* <div className="flex items-center gap-4">
              {coreValues.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="group relative h-12 w-1 transition-all"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className="absolute inset-0 w-full transition-all duration-500"
                    style={{
                      backgroundColor: i === slide ? GOLD : `${CHARCOAL}20`,
                      height: i === slide ? "100%" : "60%",
                      marginTop: i === slide ? "0" : "20%"
                    }}
                  />
                </button>
              ))}
            </div> */}
          </div>

          {/* Content Container */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

            {/* Left: Interactive Image Canvas (Occupies 7/12 cols) */}
            <div className="relative lg:col-span-7 h-80 lg:h-140 overflow-hidden rounded-sm shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={coreValues[slide].image}
                  alt={coreValues[slide].title}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Overlay for Mobile/Touch */}
              <div className="absolute inset-0 z-10 flex">
                <div className="w-1/2 h-full cursor-w-resize" onClick={prev} />
                <div className="w-1/2 h-full cursor-e-resize" onClick={next} />
              </div>
            </div>

            {/* Right: Floating Content Card (Occupies 5/12 cols) */}
            <div className="lg:col-span-5 lg:-ml-34 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 md:px-8 py-12 shadow-xl backdrop-blur-sm"
                  style={{ backgroundColor: `${IVORY}F0`, border: `1px solid ${GOLD}30` }}
                >


                  <h3 className="text-4xl font-medium tracking-tight" style={{ color: CHARCOAL }}>
                    {coreValues[slide].title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed" style={{ color: CHARCOAL, opacity: 0.8 }}>
                    {coreValues[slide].text}
                  </p>

                  {/* <motion.button
                    whileHover={{ x: 10 }}
                    className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
                    style={{ color: GOLD }}
                  >
                    Explore Excellence
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button> */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}

export default VisionMissionSection
