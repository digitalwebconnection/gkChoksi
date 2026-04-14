import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineEye,
  HiOutlineChartBarSquare,
  HiOutlineArrowRight
} from "react-icons/hi2"

import heroImg1 from "/src/assets/25.jpg"
import heroImg2 from "/src/assets/8.jpeg"
import heroImg3 from "/src/assets/1.jpeg"

const SLIDES = [
  {
    image: heroImg1,
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Precision",
    sub: "Technical Excellence",
    desc: "Achieving accuracy through rigorous standards and engineering mastery."
  },
  {
    image: heroImg2,
    icon: HiOutlineEye,
    title: "Perspective",
    sub: "Strategic Foresight",
    desc: "Seeing beyond the immediate to identify long-term opportunities and risks."
  },
  {
    image: heroImg3,
    icon: HiOutlineChartBarSquare,
    title: "Performance",
    sub: "Measurable Results",
    desc: "Delivering data-driven outcomes that impact your bottom line directly."
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-black text-white">
      
      {/* BACKGROUND LAYER: Scaling Effect */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-2000 ease-out ${
            i === index ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.8) 70%), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* CONTENT GRID */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-0 items-center">
        
        {/* LEFT: MAIN HEADLINE */}
        <div className="lg:col-span-7 pt-20">
          <div className="overflow-hidden">
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Clarity in Thinking <br />
              <span className="text-[#289572] italic">Confidence in Execution</span>
            </h1>
          </div>
          
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            We provide the strategic framework and technical precision required for modern industrial excellence.
          </p>

          <div className="mt-10 flex flex-wrap gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Link
              to="/services"
              className="group flex items-center gap-3 px-8 py-4 bg-[#289572] hover:bg-[#1f7559] transition-all rounded-sm font-bold tracking-wide"
            >
              EXPLORE SERVICES
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 transition-all rounded-sm font-bold tracking-wide"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE SLIDE INDICATORS */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 pl-12 border-l border-white/10">
          {SLIDES.map((slide, i) => {
            const Icon = slide.icon;
            const isActive = i === index;
            
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative p-6 text-left transition-all duration-500 group ${
                  isActive ? "bg-white/10 backdrop-blur-md" : "hover:bg-white/5"
                }`}
              >
                {/* Progress Bar for Active Slide */}
                {isActive && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#289572] animate-pulse" />
                )}
                
                <div className="flex items-center gap-4">
                  <Icon className={`w-8 h-8 ${isActive ? "text-[#289572]" : "text-white/40"}`} />
                  <div>
                    <h3 className={`text-xl font-bold ${isActive ? "text-[#b98b15]" : "text-white/40"}`}>
                      {slide.title}
                    </h3>
                    <p className={`text-sm ${isActive ? "text-white/" : "text-white/20"}`}>
                      {slide.sub}
                    </p>
                  </div>
                </div>

                {/* Expanded description for active item */}
                <div className={`grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden text-sm text-white leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="absolute bottom-10 left-6 flex lg:hidden gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-300 ${
              i === index ? "w-12 bg-[#289572]" : "w-6 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  )
}