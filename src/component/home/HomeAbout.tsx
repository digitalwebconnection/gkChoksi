
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import img from "../../assets/1.jpeg";
import img1 from "../../assets/18.jpeg";
import img2 from "../../assets/20.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Why work with us
            </p>

            <h2 className="mb-6 text-balance font-serif text-4xl font-bold text-slate-900 sm:text-5xl">
              Why{" "}
              <span className="inline-block rounded-lg bg-lime-300 px-2 text-slate-900">
                Choose
              </span>{" "}
              Us
            </h2>

            <p className="mb-4 leading-relaxed text-slate-600">
              With over two decades of experience, our team of qualified
              chartered accountants brings expertise across diverse industries
              and business models.
            </p>
            <p className="mb-6 leading-relaxed text-slate-600">
              We combine traditional accounting excellence with modern financial
              technology to deliver results that exceed expectations.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                "Expert certified professionals",
                "Personalized service approach",
                "Latest compliance technology",
                "Transparent pricing & communication",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-slate-800">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:bg-emerald-500"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* RIGHT: IMAGE CLUSTER */}
          <motion.div
            className="relative h-[360px] sm:h-[420px] md:h-[440px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            {/* Soft background blob */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-[40px] bg-emerald-500/15 blur-3xl" />

            {/* Top image card */}
            <div className="absolute left-6 top-0 h-40 w-[60%] overflow-hidden rounded-[28px] bg-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.35)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] sm:h-44">
              <img
                src={img}
                alt="Team at work"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Main large card */}
            <div className="absolute bottom-10 right-0 h-56 w-full overflow-hidden rounded-4xl bg-slate-200 shadow-[0_26px_80px_rgba(15,23,42,0.45)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] sm:h-[290px] sm:w-[88%]">
              <img
                src={img1}
                alt="Financial advisory meeting"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-6 space-y-1 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Client-first approach
                </p>
                <p className="text-sm font-medium text-white/90">
                  Long-term partnerships built on trust and clarity.
                </p>
              </div>
            </div>

            {/* Bottom-left mini card */}
            <div className="absolute bottom-0 left-0 h-32 w-40 overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(15,23,42,0.32)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03]">
              <div className="h-[60%] w-full">
                <img
                  src={img2}
                  alt="Audit & review"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[40%] px-3 pt-2 text-[11px]">
                <span className="block text-[9px] uppercase tracking-[0.18em] text-slate-400">
                  See our
                </span>
                <span className="font-semibold text-slate-800">
                  Client case studies
                </span>
              </div>
            </div>

            {/* Stat pill (top-right) */}
            <div className="absolute -right-1.5 top-16 w-40 rounded-3xl bg-slate-900 px-4 py-4 text-white shadow-[0_20px_60px_rgba(15,23,42,0.6)] transition-transform duration-500 ease-out hover:-translate-y-2">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Trusted Since
              </p>
              <p className="mb-1 text-2xl font-bold leading-none">1999</p>
              <p className="text-[11px] text-slate-300">
                Serving businesses with reliable advisory and compliance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
