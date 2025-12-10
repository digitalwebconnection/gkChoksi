import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="relative mt-10 text-slate-100"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top gradient line */}
      <div className="h-[3px] w-full bg-linear-to-r from-emerald-800  to-emerald-600" />

      {/* Background image + dark overlay */}
      <div
        className="relative"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/ceo-office-interior-design-brown-color-with-bookshelves-modern-style-3d-rendering_761385-634.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/85" />

        {/* Subtle radial glow behind card */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-emerald-500/20 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Content card */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 py-5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 rounded-3xl border border-white/30 bg-black/40 px-6 py-5 text-center backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.7)] sm:px-0 sm:py-10">
            {/* Small label */}
            <span className="inline-flex items-center rounded-full border border-emerald-300/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-emerald-200">
              Chartered Accountants
            </span>

            {/* Company Name */}
            <h3 className="text-2xl sm:text-3xl font-semibold font-serif tracking-wide">
              G.K. Choksi &amp; Co.
            </h3>

            {/* Tagline */}
            <p className="max-w-xl text-sm sm:text-base text-slate-200/85 leading-relaxed">
              Strategic financial clarity and confidence for businesses across India – 
              with a partner–led, relationship–driven approach.
            </p>

            {/* Locations strip (optional, but looks premium) */}
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-slate-400">
              Mumbai &nbsp;·&nbsp; Ahmedabad &nbsp;·&nbsp; Delhi NCR &nbsp;·&nbsp; Pan-India
            </p>

            {/* Social icons */}
            <div className="mt-0 flex gap-10">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/70 bg-black/40 text-slate-200 transition transform hover:-translate-y-0.5 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 hover:bg-black/70"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/70 bg-black/40 text-slate-200 transition transform hover:-translate-y-0.5 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 hover:bg-black/70"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500/70 bg-black/40 text-slate-200 transition transform hover:-translate-y-0.5 hover:scale-105 hover:border-emerald-400 hover:text-emerald-300 hover:bg-black/70"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            {/* Bottom line */}
            <div className="mt-0 w-full border-t border-white/20 pt-4">
              <p className="text-xs sm:text-sm text-slate-400">
                &copy; {new Date().getFullYear()} G.K. Choksi &amp; Co. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
