import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
      className="border-t border-gray-200 bg-white"
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
              className="mx-auto h-15 w-auto md:mx-0 sm:h-12"
            />
       
          </div>

          {/* Right separate div */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Quick links */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-black sm:text-sm">
                Quick Links
              </h4>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-1">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-black transition hover:text-[#0F3D2E]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-black sm:text-sm">
                Locations
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-black">
                <li>Mumbai</li>
                <li>Ahmedabad</li>
                <li>Delhi NCR</li>
                <li>Petlad, Gujarat</li>
              </ul>
            </div>

            {/* Social media */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-black sm:text-sm">
                Social Media
              </h4>
              <div className="mt-4 flex flex-row md:flex-col gap-3 justify-center md:justify-start">
                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white transition transform hover:scale-110 shadow-md"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition transform hover:scale-110 shadow-md"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0077B5] text-white transition transform hover:scale-110 shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-300 pt-6">
          <p className="text-xs text-black sm:text-sm">
            © 2026 G.K. Choksi &amp; Co. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
