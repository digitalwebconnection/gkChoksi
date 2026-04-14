import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); // ✅ FIXED (inside component)

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
          className={`absolute inset-0 transition-opacity duration-1000 ease-out
            ${index === currentSlide ? "opacity-100 hero-kenburns" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-20 text-center"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >

        {/* Title */}
        <h1 className="text-[#F7F9F8] text-5xl font-bold font-serif">
          G.K. Choksi & Co
        </h1>
        <p className="text-[#f5cd55] text-2xl font-semibold mt-2">
          Chartered Accountants
        </p>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-3xl lg:text-5xl font-bold text-white"
        >
          Strategic Financial Excellence
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >

          {/* ✅ FIXED BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0); // ✅ smooth top
            }}
            className="flex items-center justify-center rounded-full bg-[#0F3D2E] px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1F6F5B]"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>

    

        </motion.div>
      </motion.div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "w-10 bg-[#6FAF9B]"
                : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;