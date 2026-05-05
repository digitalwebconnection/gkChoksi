import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industry" },
    { label: "Core Team", to: "/core-team" },
    { label: "Insights", to: "/Insights" },
    { label: "Careers", to: "/careers" },
  ];

  const locations = ["Mumbai", "Ahmedabad", "Delhi NCR", "Petlad, Gujarat"];

  return (
    <motion.footer
      className="bg-slate-50 border-t border-gray-200 font-sans"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-8">

          {/* Brand Column - Wider (4 cols) */}
          <div className="lg:col-span-5 space-y-6 text-center md:text-left">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="G.K. Choksi & Co."
                className="h-14 sm:h-18 w-auto object-contain mx-auto md:mx-0"
              />
            </Link>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/company/g-k-choksi-&-co/" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#0077B5] hover:border-[#0077B5] transition-all shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#E1306C] hover:border-[#E1306C] transition-all shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#1877F2] hover:border-[#1877F2] transition-all shadow-sm">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* WRAPPER FOR MOBILE SIDE-BY-SIDE */}
          <div className="lg:col-span-5 flex flex-row justify-between gap-8 md:contents">
            {/* Quick Links (2 cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-gray-600 hover:text-green-800 hover:underline underline-offset-4 transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations (2 cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                Locations
              </h4>
              <ul className="space-y-4">
                {locations.map((loc) => (
                  <li key={loc} className="flex items-center justify-start gap-2 text-sm text-gray-600">
                    <MapPin size={14} className="text-gray-400" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section (4 cols) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4 flex md:flex-col gap-15">
              <div className="flex items-start justify-center md:justify-start gap-3 group">
                <div className="mt-3 md:mt-1 p-2 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:bg-green-50 transition-colors">
                  <Mail size={16} className="text-green-800" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-medium">Email Us</p>
                  <a href="mailto:hr@gkcco.com" className="text-sm text-gray-700 font-medium hover:text-green-800">hr@gkcco.com</a> <br />
                  <a href="mailto:info@gkcco.com" className="text-sm text-gray-700 font-medium hover:text-green-800">info@gkcco.com</a>
                </div>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3 group">
                <div className="mt-3 md:mt-1 p-2 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:bg-green-50 transition-colors">
                  <Phone size={16} className="text-green-800" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-medium">Call Us</p>
                  <p className="text-sm text-gray-700 font-medium">+91 79 68198900</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} G.K. Choksi & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#0F3D2E]  md:text-lg mt-2 md:mt-0">
            <Code2 className="w-5 h-5 text-[#c1972d]" />
            <span>
              Developed by{" "}
              <a
                href="https://digitalwebconnection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c1972d] font-semibold"
              >
                Digital Web Connection
              </a>
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;