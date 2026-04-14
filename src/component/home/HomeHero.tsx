// HeroSection.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./heroAnimations.css";

import img3 from "/src/assets/25.jpg";
import img5 from "/src/assets/8.jpeg";
import img21 from "/src/assets/3.jpeg";

const images = [img3, img5, img21];

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden select-none">
      
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-out hero-bg
            ${index === currentSlide ? "opacity-100 hero-kenburns" : "opacity-0 pointer-events-none"}
          `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Brand Overlay (important 🔥) */}
          <div className="absolute inset-0 bg-[#000000]/50" />
        </div>
      ))}

      {/* Gradient Overlay */}
      {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F3D2E]/40 via-transparent to-[#0F3D2E]/80" /> */}

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-20 text-center sm:px-6 lg:px-8"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-[#F7F9F8] text-5xl font-bold font-serif tracking-wide">
            G.K. Choksi & Co
          </h1>
          <p className="text-[#f5cd55] text-2xl font-semibold font-serif mt-2">
            Chartered Accountants
          </p>
        </div>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-6 max-w-4xl mx-auto font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl"
        >
          Strategic Financial Excellence
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center rounded-full bg-[#0F3D2E] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(15,61,46,0.5)] transition duration-300 hover:bg-[#1F6F5B]"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center rounded-full border border-[#6FAF9B] px-8 py-3 text-sm font-semibold text-[#F7F9F8] backdrop-blur-sm transition duration-300 hover:bg-[#6FAF9B]/20"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-[#6FAF9B]"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;