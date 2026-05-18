import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";

import h1 from "../../assets/aboutuspage/h1.webp"
import h2 from "../../assets/aboutuspage/h2.jpg"
import h3 from "../../assets/aboutuspage/h3.jpg"

const SLIDES = [
  { image: h1 },
  { image: h2 },
  { image: h3 },
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
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-6000 ${i === index ? "scale-110" : "scale-100"
              }`}
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/60 to-black/30" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-32 text-center justify-center  flex items-center">

        <div className="max-w-3xl mx-auto text-center">

          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
            Clarity in Thinking <br />
            <span className="text-[#C2A96A] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
              Confidence in Execution
            </span>
          </h1>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/services"
              className="group flex items-center gap-3 px-10 py-2 text-md text-white bg-[#0F3D2E] hover:bg-[#1F6F5B] transition rounded-lg font-semibold"
            >
              Explore Services
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}