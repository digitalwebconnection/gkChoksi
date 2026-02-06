import heroBg from "../../assets/12.jpeg";
import { motion } from "framer-motion"; // Import Framer Motion

const AboutPage = () => {
  // Animation variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3, // Stagger child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below and invisible
    visible: {
      opacity: 1,
      y: 0, // Slide up to position
           transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div className="bg-white text-slate-900">
      {/* ===== ANIMATED ABOUT HERO ===== */}
      <motion.section
        className="relative flex items-center min-h-[70vh] border-b border-slate-200 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated Background Zoom */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}           
          transition={{ duration: 10, ease: "linear" }}
        />

        {/* Animated Dark Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Animated Content Container */}
        <motion.div
          className="relative mx-auto max-w-5xl px-6 text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Trust Line */}
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200"
            variants={itemVariants}
          >
            Chartered Accountants • Since 1970
          </motion.p>

          {/* Animated Main Heading */}
          <motion.h1      
            className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
            variants={itemVariants}
          >
            About G. K. Choksi &amp; Co.
          </motion.h1>

          {/* Animated Short Description */}
          <motion.p
            className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg"
            variants={itemVariants}
          >
            G. K. Choksi &amp; Co. is a trusted Chartered Accountancy firm with a
            legacy of integrity, professionalism, and client-focused advisory
            services, helping businesses make sound financial decisions for
            over five decades.
          </motion.p>

          {/* Animated CTA Button */}
          <motion.div className="pt-2" variants={itemVariants}>
            <motion.button
              className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }} // Scale and color change on hover
              transition={{ duration: 0.2 }}
            >
              View Our Services
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;