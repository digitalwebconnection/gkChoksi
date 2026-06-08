import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, Code2 } from "lucide-react";
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

  const locations = [
    {
      city: "Ahmedabad",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=G.K.+Choksi+%26+Co.+ONE42+North+Tower+Ambli+Road+Ahmedabad+Gujarat+380058",
      directUrl: "https://www.google.com/maps/search/?api=1&query=G.K.+Choksi+%26+Co.+ONE42+North+Tower+Ambli+Road+Ahmedabad+Gujarat+380058",
    },
    {
      city: "New Delhi",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=514+515+Fifth+Floor+Tolstoy+House+Tolstoy+Marg+Janpath+New+Delhi+110001",
      directUrl: "https://www.google.com/maps/search/?api=1&query=514+515+Fifth+Floor+Tolstoy+House+Tolstoy+Marg+Janpath+New+Delhi+110001",
    },
    {
      city: "Mumbai",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=708+Raheja+Chambers+Free+Press+Journal+Road+Nariman+Point+Mumbai+400021",
      directUrl: "https://www.google.com/maps/search/?api=1&query=708+Raheja+Chambers+Free+Press+Journal+Road+Nariman+Point+Mumbai+400021",
    },
    {
      city: "Petlad, Gujarat",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Surya+Bhawan+Station+Road+Petlad+Gujarat+388450",
      directUrl: "https://www.google.com/maps/search/?api=1&query=Surya+Bhawan+Station+Road+Petlad+Gujarat+388450",
    },
  ];

  return (
    <motion.footer
      className="bg-slate-50 border-t border-[#19603B] font-sans"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 lg:pt-14">
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


            </div>
          </div>

          {/* WRAPPER FOR MOBILE SIDE-BY-SIDE */}
          <div className="lg:col-span-5 font-serif flex flex-row justify-between gap-8 md:contents">
            {/* Quick Links (2 cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="text-sm font-bold text-gray-900 uppercase  mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-gray-900 hover:text-green-800 hover:underline underline-offset-4 transition-all"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations (2 cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className="text-sm font-bold text-gray-900 uppercase  mb-6">
                Locations
              </h4>
              <ul className="space-y-4">
                {locations.map((loc) => (
                  <li key={loc.city}>
                    <a
                      href={loc.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-start gap-2 text-sm text-gray-600 hover:text-green-800 transition-colors group"
                    >
                      <MapPin size={14} className="text-gray-900 group-hover:text-green-800 transition-colors shrink-0" />
                      {loc.city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section (4 cols) */}
          <div className="lg:col-span-3 font-serif text-center md:text-left">
            <h4 className="text-sm font-bold text-gray-900 uppercase  mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4 flex flex-col md:gap-3">
              <div className="flex items-start justify-center md:justify-start gap-3 group">
                <div className="mt-3 md:mt-1 p-2 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:bg-green-50 transition-colors">
                  <Mail size={16} className="text-green-800" />
                </div>
                <div>
                  <p className="text-xs text-gray-900 uppercase font-medium">Email Us</p>
                  <a href="mailto:hr@gkcco.com" className="text-sm text-gray-700 font-medium hover:text-green-800">hr@gkcco.com</a> <br />
                  <a href="mailto:info@gkcco.com" className="text-sm text-gray-700 font-medium hover:text-green-800">info@gkcco.com</a>
                </div>
              </div>

              <a href="tel:+917968198900" className="flex items-start justify-center md:justify-start gap-3 group transition-colors">
                <div className="mt-3 md:mt-1 p-2 bg-white rounded-lg shadow-sm border border-gray-100 group-hover:bg-green-50 transition-colors">
                  <Phone size={16} className="text-green-800" />
                </div>
                <div>
                  <p className="text-xs text-gray-900 uppercase font-medium">Call Us</p>
                  <p className="text-sm text-gray-700 font-medium group-hover:text-green-800 transition-colors">+91 79 681 98900</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-400 font-serif flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-900">
            © {new Date().getFullYear()} G.K. Choksi & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-black  md:text-sm mt-2 md:mt-0">
            <Code2 className="w-5 h-5 text-black" />
            <span>
              Developed by{" "}
              <a
                href="https://digitalwebconnection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-serif  "
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