import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
  const linkBase =
    "text-lg text-[#0F3D2E] hover:text-black transition-all duration-300";

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${linkBase} font-semibold border-b border-black pb-1`
      : linkBase;

  /* ---------------- ANIMATION VARIANTS ---------------- */

  const drawerVariants: Variants = {
    hidden: { x: "100%", scale: 0.98 },
    visible: {
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 18,
      },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.3 },
    },
  };

  const menuContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 z-50 w-full ${
          isScrolled ? "bg-white/90 backdrop-blur shadow-lg" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
          
          {/* LOGO */}
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* HAMBURGER */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ rotate: 90 }}
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.nav>

      {/* DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-80 max-w-full h-full bg-white z-50 shadow-2xl p-6 flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-8">
                <img src={logo} alt="Logo" className="h-8" />
                <motion.button
                  whileHover={{ rotate: 180 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={26} />
                </motion.button>
              </div>

              {/* MENU ITEMS */}
              <motion.nav
                variants={menuContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col space-y-6 text-lg"
              >
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/core-team", label: "Core Team" },
                  { to: "/services", label: "Services" },
                  { to: "/insights", label: "Insights" },
                  { to: "/industry", label: "Industry" },
                  { to: "/alumni", label: "Alumni" },
                  { to: "/careers", label: "Careers" },
                  { to: "/contact", label: "Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={menuItem}
                    whileHover={{ x: 8 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={getLinkClass}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>

            
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;