import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(current < 10 || current < lastScrollY);
      setIsScrolled(current > 50);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------------- LINK STYLE ---------------- */
  const baseLink =
    "text-lg text-[#0F3D2E] hover:text-black transition-colors";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${baseLink} border-b border-black`
      : baseLink;

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 z-50 w-full ${
          isScrolled ? "bg-white/95 shadow-lg backdrop-blur" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">

          {/* LOGO */}
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
            <NavLink to="/core-team" className={getLinkClass}>Core Team</NavLink>
            <NavLink to="/services" className={getLinkClass}>Services</NavLink>
            <NavLink to="/insights" className={getLinkClass}>Insights</NavLink>
            <NavLink to="/industry" className={getLinkClass}>Industry</NavLink>
            <NavLink to="/Alumni" className={getLinkClass}>Alumni</NavLink>
            <NavLink to="/careers" className={getLinkClass}>Careers</NavLink>
            <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-2xl p-6"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setMobileOpen(false)}
                className="text-2xl mb-6"
              >
                ✕
              </button>

              {/* MENU ITEMS */}
              <nav className="flex flex-col space-y-4 text-lg">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className="border-b pb-2">Home</NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)} className="border-b pb-2">About Us</NavLink>
                <NavLink to="/core-team" onClick={() => setMobileOpen(false)} className="border-b pb-2">Core Team</NavLink>
                <NavLink to="/services" onClick={() => setMobileOpen(false)} className="border-b pb-2">Services</NavLink>
                <NavLink to="/insights" onClick={() => setMobileOpen(false)} className="border-b pb-2">Insights</NavLink>
                <NavLink to="/industry" onClick={() => setMobileOpen(false)} className="border-b pb-2">Industry</NavLink>
                <NavLink to="/Alumni" onClick={() => setMobileOpen(false)} className="border-b pb-2">Alumni</NavLink>
                <NavLink to="/careers" onClick={() => setMobileOpen(false)} className="border-b pb-2">Careers</NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;