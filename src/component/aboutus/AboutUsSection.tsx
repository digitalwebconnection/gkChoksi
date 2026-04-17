import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";

import heroImg1 from "/src/assets/25.jpg";
import heroImg2 from "/src/assets/8.jpeg";
import heroImg3 from "/src/assets/1.jpeg";

const SLIDES = [
  { image: heroImg1 },
  { image: heroImg2 },
  { image: heroImg3 },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-150 w-full overflow-hidden">

      {/* BACKGROUND */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-6000 ${
              i === index ? "scale-110" : "scale-100"
            }`}
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-32  flex items-center">

        <div className="max-w-3xl">

          {/* SMALL TAGLINE */}
          <p className="text-[#6FAF9B] uppercase tracking-[0.3em] text-lg font-semibold mb-2">
            Built on Clarity & Trust
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Clarity in Thinking <br />
            <span className="text-[#289572] ">
              Confidence in Execution
            </span>
          </h1>

          {/* SHORT STRONG LINE */}
          <p className="mt-6 text-white text-lg">
            Ours is a firm built on the belief that clarity creates confidence.
          </p>

          {/* DESCRIPTION (CLEAN SPLIT VERSION) */}
          <p className="mt-4 text-white/90 text-md leading-relaxed">
            With the leadership of 8 Partners and a team of 35+ Chartered Accountants 
            supported by 150+ professionals, we bring depth of knowledge and real-world 
            experience to businesses that are evolving and expanding. Our expertise spans 
            Audit, Tax, and Advisory — delivering insights that are precise, practical, 
            and future-focused.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            <Link
              to="/services"
              className="group flex items-center gap-3 px-7 py-3 text-white bg-[#164637] hover:bg-[#1f7559] transition rounded-md font-semibold"
            >
              Explore Services
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 border border-white text-white hover:bg-white/10 transition rounded-md font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* SLIDER INDICATOR */}
      {/* <div className="absolute bottom-8  left-25 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-300 ${
              i === index ? "w-10 bg-[#289572]" : "w-5 bg-white/30"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}