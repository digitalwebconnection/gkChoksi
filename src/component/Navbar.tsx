// Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png";

const SERVICES = [
  { label: "Management Consulting", slug: "management-consulting" },
  { label: "Business Advisory", slug: "business-advisory" },
  { label: "Audit & Assurance", slug: "audit-assurance" },
  { label: "Taxation", slug: "taxation" },
  { label: "Regulatory", slug: "regulatory" },
  { label: "M&A", slug: "m-and-a" },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // dropdown state
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Show nav on scroll-up, hide on scroll-down + detect scroll for bg
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // show/hide navbar
      if (current < 10 || current < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // navbar background change
      if (current > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // close dropdown on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard handling for accessibility
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const linkBaseClasses = "text-lg text-white/90 hover:text-white transition";
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${linkBaseClasses} border-b border-white` : linkBaseClasses;

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`
        fixed top-0 left-0 z-50 w-full
         text-white transition-all duration-300
        ${isScrolled ? "bg-black/95 shadow-lg" : "bg-black/20"}
      `}
    >
      {/* ===== TOP CONTACT BAR ===== */}
      <div className="hidden border-b border-white/10 bg-black/30 text-[11px] text-white/80 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8">
          {/* Left side */}
          <div className="flex flex-wrap text-lg items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/50 text-[9px]">
                ☎
              </span>
              <span>+91 79 2644 8877</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs">✉</span>
              <span>info@GkChoksi.com</span>
            </div>
          </div>

          {/* Right side: social icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white text-xl" aria-label="facebook">
              f
            </a>
            <a href="#" className="hover:text-white text-xl" aria-label="linkedin">
              in
            </a>
            <a href="#" className="hover:text-white text-xl" aria-label="twitter">
              t
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ROW ===== */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo – link to Home */}
        <motion.div
          className="text-2xl font-bold text-white"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
        >
          <NavLink to="/">
            <img
              src={logo}
              alt="GKCCO Logo"
              className="h-12 w-60 object-contain brightness-110"
            />
          </NavLink>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          <NavLink to="/about" className={getLinkClass}>
            About Us
          </NavLink>

          {/* Services dropdown wrapper */}
          <div
            className="relative"
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {/* Services toggle (acts as both a link and toggle) */}
            <button
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((s) => !s)}
              className="flex items-center gap-2 text-lg text-white/90 hover:text-white transition focus:outline-none"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown menu */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={servicesOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className={`absolute right-0 mt-3 w-64 rounded-lg bg-white/95 text-slate-900 shadow-2xl ring-1 ring-black/8 backdrop-blur-sm z-50`}
              role="menu"
              aria-label="Services menu"
              style={{ display: servicesOpen ? "block" : "none" }}
            >
              <ul className="py-2">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <NavLink
                      to={`/services/${s.slug}`}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-sm hover:bg-slate-100 ${isActive ? "font-semibold bg-slate-100" : "font-normal"}`
                      }
                      onClick={() => setServicesOpen(false)}
                      role="menuitem"
                    >
                      {s.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <NavLink to="/news" className={getLinkClass}>
            News
          </NavLink>
          <NavLink to="/careers" className={getLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/csr" className={getLinkClass}>
            CSR
          </NavLink>
        </div>

        {/* Mobile hint: keep Services accessible via main nav link on mobile; you can add a mobile menu for full UX */}
        <div className="md:hidden">
          <NavLink to="/services" className="text-lg text-white/90 hover:text-white transition">
            Services
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
