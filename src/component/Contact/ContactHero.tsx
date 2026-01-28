import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import Heroimg1 from "../../assets/6.jpeg";
import Heroimg2 from "../../assets/21.jpeg";
import Heroimg3 from "../../assets/2.jpeg";

const images = [Heroimg1, Heroimg2, Heroimg3];
const fullText = "Contact Us";

const ContactHeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  /* ================= TYPEWRITER ================= */
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  /* ================= SLIDER ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ================= PARALLAX ================= */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [0, 1], ["-2%", "2%"]);
  const bgY = useTransform(mouseY, [0, 1], ["-2%", "2%"]);

  /* ================= MAGNETIC BUTTON ================= */
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);

  const btnTransformX = useTransform(btnX, [-50, 50], [-12, 12]);
  const btnTransformY = useTransform(btnY, [-50, 50], [-12, 12]);

  return (
    <section
      onMouseMove={(e) => {
        mouseX.set(e.clientX / window.innerWidth);
        mouseY.set(e.clientY / window.innerHeight);
      }}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ================= BACKGROUND SLIDER ================= */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[current]})`,
            x: bgX,
            y: bgY,
          }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </AnimatePresence>

      {/* ================= OVERLAYS ================= */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-sky-900/40 to-slate-950/90" />
      <div className="absolute inset-0 bg-black/40" />

      {/* ================= GLOW ORBS ================= */}
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block ml-1 text-sky-400"
          >
            .
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Chartered Accountants delivering{" "}
          <span className="text-sky-400 font-medium">clarity and trust</span> in
          every financial move.
        </motion.p>

        {/* ================= MAGNETIC CTA ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              btnX.set(e.clientX - rect.left - rect.width / 2);
              btnY.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              btnX.set(0);
              btnY.set(0);
            }}
            style={{
              x: btnTransformX,
              y: btnTransformY,
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-sky-600 hover:bg-sky-500 text-white px-12 py-4 rounded-full font-semibold shadow-xl shadow-sky-900/30 overflow-hidden"
          >
            <span className="relative z-10">Schedule a Consultation</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>

        {/* ================= SLIDE INDICATOR ================= */}
        <div className="mt-12 flex justify-center gap-3">
          {images.map((_, i) => (
            <motion.span
              key={i}
              className="h-1 rounded-full bg-white/40"
              animate={{
                width: current === i ? 32 : 12,
                opacity: current === i ? 1 : 0.4,
              }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
      </div>

      {/* ================= SCROLL HINT ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-2 w-0.5 h-10 bg-white/50 rounded-full"
        />
      </motion.div>

      {/* ================= GRAIN OVERLAY ================= */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.04] pointer-events-none" />

      
    </section>
  );
};

export default ContactHeroSection;
