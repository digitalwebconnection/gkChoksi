import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
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

const IVORY = "#F7F9F8"
const CHARCOAL = "#1C1C1C"
const ACCENT = "#6FAF9B"
const GOLD = "#C2A96A"

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
    <div className="bg-[#FBFCFB]">
      {/* Vision & Mission */}
      <section className="relative overflow-hidden py-24 md:py-32 ">
        {/* Subtle Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(${GOLD} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">

            {/* Left Column: Typography Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-[0.4em] mb-4"
                style={{ color: ACCENT }}
              >
                Our Foundation
              </span>
              <h2
                className="text-4xl font-light leading-[1.1] text-balance md:text-5xl"
                style={{ color: CHARCOAL }}
              >
                Driving <span className="font-serif italic text-stone-500">Value</span> through <br />
                <span className="font-semibold">Purpose & Strategy.</span>
              </h2>
              <div className="mt-8 h-px w-24" style={{ backgroundColor: GOLD }} />
              <p className="mt-8 text-lg text-stone-600 max-w-md leading-relaxed">
                We align our core philosophy with your long-term success, ensuring every
                decision is rooted in technical excellence and foresight.
              </p>
            </motion.div>

            {/* Right Column: Interactive Cards */}
            <div className="grid gap-6 lg:col-span-7">
              {[
                {
                  title: "Vision",
                  content: "To be a trusted, forward-looking professional services firm delivering value through insight, integrity and innovation.",
                  index: 1
                },
                {
                  title: "Mission",
                  content: "To provide high-quality audit, tax and advisory services through a partner-driven approach, combining technical excellence with commercial understanding to support clients in achieving sustainable growth.",
                  index: 2
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.index * 0.1 }}
                  className="group relative bg-white border border-stone-200 p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/50"
                >
                  {/* Accent Border on Hover */}
                  <div
                    className="absolute inset-0 border-2 border-transparent transition-colors duration-500 group-hover:border-stone-800/5"
                    style={{ borderLeftColor: item.index === 1 ? GOLD : ACCENT }}
                  />

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <span
                      className="text-5xl font-light opacity-10 font-serif italic"
                      style={{ color: CHARCOAL }}
                    >
                      0{item.index}
                    </span>
                    <div>
                      <h3
                        className="text-xs font-bold uppercase tracking-widest mb-4"
                        style={{ color: item.index === 1 ? GOLD : ACCENT }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xl text-stone-700 leading-relaxed font-medium">
                        {item.content}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Geometric Detail */}
                  <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <p className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: ACCENT }}>
                How we work
              </p>
              <h2 className="mt-4 text-4xl font-light tracking-tight md:text-6xl" style={{ color: CHARCOAL }}>
                Our <span className="font-serif italic" style={{ color: GOLD }}>Core</span> Values
              </h2>
            </motion.div>

            {/* Progress Indicators / Navigation */}
            <div className="flex items-center gap-4">
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
            </div>
          </div>

          {/* Content Container */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-12">

            {/* Left: Interactive Image Canvas (Occupies 7/12 cols) */}
            <div className="relative lg:col-span-7 aspect-4/4 md:aspect-video lg:aspect-4/4 overflow-hidden rounded-sm shadow-2xl">
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
                  className="p-8 md:p-12 shadow-xl backdrop-blur-sm"
                  style={{ backgroundColor: `${IVORY}F0`, border: `1px solid ${GOLD}30` }}
                >
                  <div className="mb-8 flex items-baseline gap-4">
                    <span className="text-4xl font-serif italic" style={{ color: GOLD }}>
                      0{slide + 1}
                    </span>
                    <div className="h-px flex-1" style={{ backgroundColor: `${GOLD}40` }} />
                  </div>

                  <h3 className="text-3xl font-medium tracking-tight" style={{ color: CHARCOAL }}>
                    {coreValues[slide].title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed" style={{ color: CHARCOAL, opacity: 0.8 }}>
                    {coreValues[slide].text}
                  </p>

                  <motion.button
                    whileHover={{ x: 10 }}
                    className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
                    style={{ color: GOLD }}
                  >
                    Explore Excellence
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Core values bottom CTA */}
   <section className="relative overflow-hidden py-24 md:py-36" >
  {/* Large Decorative Background Text (Modern Outline) */}
  <div 
    className="absolute -right-12 top-0 select-none opacity-[0.09] pointer-events-none"
    style={{ 
      fontSize: 'clamp(12rem, 20vw, 20rem)', 
      fontWeight: 900,
      lineHeight: 1,
      WebkitTextStroke: `2px ${CHARCOAL}`,
      color: 'transparent'
    }}
  >
    GK C & CO
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
      
      {/* Left side: Heading & Promise */}
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 
            className="text-5xl font-light tracking-tighter md:text-7xl lg:text-8xl"
            style={{ color: CHARCOAL }}
          >
            Go there <br /> 
            <span className="font-serif italic" style={{ color: ACCENT }}>with us.</span>
          </h2>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-12" style={{ backgroundColor: GOLD }} />
            <p className="text-xl font-medium tracking-wide uppercase md:text-base" style={{ color: GOLD }}>
              Now, for tomorrow is our promise.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right side: Description & CTA (Floating Card style) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative lg:max-w-md"
      >
        <div 
          className="relative z-10 p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm"
          style={{ backgroundColor: IVORY, borderLeft: `4px solid ${GOLD}` }}
        >
          <p className="text-lg leading-relaxed md:text-xl" style={{ color: CHARCOAL, opacity: 0.9 }}>
            The business world is changing at lightning speed. To succeed, you
            need an <span className="font-bold">agile partner</span> to help lead you forward—exploring every opportunity to prepare you for tomorrow.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 transition-all"
              style={{ backgroundColor: CHARCOAL, color: IVORY }}
            >
              <span className="relative z-10 font-bold uppercase tracking-widest text-xs">
                Partner with us
              </span>
              <div 
                className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                style={{ backgroundColor: ACCENT }}
              />
              <svg 
                className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
              >
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Abstract Geometry behind the card */}
        <div 
          className="absolute -bottom-4 -right-4 h-full w-full opacity-10"
          style={{ border: `1px solid ${CHARCOAL}` }}
        />
      </motion.div>
    </div>
  </div>
</section>
    </div>
  )
}

export default VisionMissionSection
