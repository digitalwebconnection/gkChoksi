import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  HiOutlineArrowRight
} from "react-icons/hi2"

import heroImg1 from "/src/assets/25.jpg"
import heroImg2 from "/src/assets/8.jpeg"
import heroImg3 from "/src/assets/1.jpeg"

const SLIDES = [
  {
    image: heroImg1,

  },
  {
    image: heroImg2,
    
  },
  {
    image: heroImg3,

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
    <>
      <section className="relative h-[600px] w-full overflow-hidden bg-black text-white">

        {/* BACKGROUND LAYER: Scaling Effect */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-2000 ease-out ${i === index ? "opacity-100 scale-110" : "opacity-0 scale-100"
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

            <p className="mt-8 text-lg md:text-xl text-white max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
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


        </div>

        {/* MOBILE BOTTOM NAV */}
        <div className="absolute bottom-10 left-6 flex lg:hidden gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-300 ${i === index ? "w-12 bg-[#289572]" : "w-6 bg-white/20"
                }`}
            />
          ))}
        </div>
      </section>

    </>
  )
}