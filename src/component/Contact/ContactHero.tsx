import { motion, AnimatePresence} from "framer-motion";
import { useEffect, useState } from "react";


const images = ["https://reflectiveit.com/wp-content/uploads/2025/12/contact-us-scaled-1.jpg"];
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


  return (
    <section
      
      className="relative h-150 flex items-center justify-center overflow-hidden "
    >

      {/* ================= BACKGROUND SLIDER ================= */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover  bg-center"
          style={{
            backgroundImage: `url(${images[current]})`,
      
          }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </AnimatePresence>



      {/* EXTRA DARK LAYER */}
      <div className="absolute inset-0 bg-black/60" />


      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 text-center text-white">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-serif md:text-7xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold tracking-tight"
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block ml-1 text-[#C2A96A]"
          >
            .
          </motion.span>
        </motion.h1>

        {/* SUBTEXT */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
    
          <span className="text-[#C2A96A] font-medium">
            Let’s connect and shape your next move with confidence.
          </span>
        </motion.p> */}

        {/* ================= SLIDER DOTS ================= */}
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
    </section>
  );
};

export default ContactHeroSection;