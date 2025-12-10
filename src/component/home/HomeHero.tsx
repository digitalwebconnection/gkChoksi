import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./heroAnimations.css"; // <- external CSS with keyframes
const images = [
  "../../src/assets/3.jpeg",
  "../../src/assets/5.jpeg",
  "../../src/assets/21.jpeg",
];

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 8s per slide – matches Ken Burns length nicely
    return () => clearInterval(interval);
  }, []);

  // Track scroll for subtle parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden select-none">
      {/* Background Images (Ken Burns + fade) */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-out hero-bg
            ${index === currentSlide ? "opacity-100 hero-kenburns" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#000000cc]" />
        </div>
      ))}

      {/* Floating Glow Orbs */}
      {/* <div className="hero-orb absolute -top-20 -left-20 h-96 w-96 rounded-full bg-emerald-400/25 blur-[140px]" /> */}
      {/* <div className="hero-orb-slow absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-white/15 blur-[200px]" /> */}

      {/* Parallax Spotlight Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/40 mix-blend-overlay" />

      {/* Content Wrapper (centered) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-20 text-left sm:px-6 lg:px-8"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }} // subtle parallax
      >
        

        {/* Main Title */}

        <div className=" text-center mb-30">
          {/* <img src={logo} alt="" /> */}
          <h1 className="text-white text-5xl font-bold font-serif">G.K. Choksi & Co  </h1>
          <p className="font- text-white text-xl py-1 font-serif font-semibold text-center">Chartered Accountants</p>
          </div>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mb-6 max-w-4xl mx-auto text-center font-serif text-2xl font-bold leading-tight text-white drop-shadow-xl sm:text-3xl lg:text-4xl"
        >
          Strategic Financial Excellence
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-10 max-w-6xl mx-auto text-center text-md leading-relaxed text-white/90 drop-shadow-lg sm:text-lg"
        >
          Expert chartered accountants dedicated to optimizing your business
          finances, minimizing tax liability, and driving sustainable growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition-transform duration-300 hover:bg-emerald-400"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center rounded-full border border-white px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-transform duration-300 hover:bg-white/15"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Center Progress Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-emerald-400"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
