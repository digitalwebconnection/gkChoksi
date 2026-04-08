import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services/management-consulting" },
    { label: "Industries", to: "/about" },
    { label: "Team", to: "/about/team" },
    { label: "Insights", to: "/blog" },
    { label: "Careers", to: "/careers" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <motion.footer
      id="contact"
      className="bg-[#0F3D2E] text-slate-100"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-x-20">
          {/* Left separate div */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="G.K. Choksi & Co."
              className="mx-auto h-11 w-auto md:mx-0 sm:h-12"
            />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 md:mt-5">
              Strategic financial clarity and confidence for businesses across India
              - with a partner-led, relationship-driven approach.
            </p>
          </div>

          {/* Right separate div */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Quick links */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
                Quick Links
              </h4>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-1">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
                Locations
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>Mumbai</li>
                <li>Ahmedabad</li>
                <li>Delhi NCR</li>
                <li>Petlad, Gujarat</li>
              </ul>
            </div>

            {/* Social media */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
                Social Media
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-400 hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-400 hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-slate-400 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-400 sm:text-sm">
            © 2026 G.K. Choksi &amp; Co. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
