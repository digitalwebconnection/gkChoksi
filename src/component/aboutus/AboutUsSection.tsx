import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineEye,
  HiOutlineChartBarSquare,
} from "react-icons/hi2"

import heroImg1 from "/src/assets/25.jpg"
import heroImg2 from "/src/assets/8.jpeg"
import heroImg3 from "/src/assets/1.jpeg"

const SLIDES = [
  {
    image: heroImg1,
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Precision",
    sub: "Built on technical excellence",
  },
  {
    image: heroImg2,
    icon: HiOutlineEye,
    title: "Perspective",
    sub: "Guided by strategic foresight",
  },
  {
    image: heroImg3,
    icon: HiOutlineChartBarSquare,
    title: "Performance",
    sub: "Driven by measurable results",
  },
]

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const CurrentIcon = SLIDES[index].icon

  return (
    <section className="relative h-150 flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${SLIDES[index].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-30 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Clarity in Thinking <br />
            <span className="text-[#6FAF9B]">Confidence in Execution</span>
          </h1>

          <p className="mt-5 text-white">
            We deliver insight, integrity, and performance that businesses trust.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to="/services"
              className="px-6 py-2 bg-[#6FAF9B] text-white rounded-full"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="px-6 py-2 border border-white text-white rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT CARD (3P) */}
        <div className="flex justify-center lg:justify-end">
          <div className=" p-8 text-center w-[280px] ">

            <CurrentIcon className="w-25 h-25 mx-auto text-[#6FAF9B]" />

            <h3 className="text-3xl font-bold text-white mt-4">
              {SLIDES[index].title}
            </h3>

            <p className="text-white/70 mt-2">
              {SLIDES[index].sub}
            </p>

          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#6FAF9B]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}