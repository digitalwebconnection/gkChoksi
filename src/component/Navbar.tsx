// Navbar.tsx
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../../src/assets/logo.png"

interface ServiceItem {
  label: string
  slug: string
}

const SERVICES: ServiceItem[] = [
  { label: "Management Consulting", slug: "management-consulting" },
  { label: "Business Advisory", slug: "business-advisory" },
  { label: "Audit & Assurance", slug: "audit-assurance" },
  { label: "Taxation", slug: "taxation" },
  { label: "Regulatory", slug: "regulatory" },
  { label: "M&A", slug: "m-and-a" },
]

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const [servicesOpen, setServicesOpen] = useState<boolean>(false)
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const servicesRef = useRef<HTMLDivElement | null>(null)

  const location = useLocation()

  // Show nav on scroll-up, hide on scroll-down + detect scroll for bg
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      // show/hide navbar
      if (current < 10 || current < lastScrollY) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // navbar background change
      setIsScrolled(current > 50)

      setLastScrollY(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // close menus on Esc
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  // Close menus when route changes
  useEffect(() => {
    setServicesOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  const linkBaseClasses = "text-lg text-black/90 hover:text-black  transition"
  const getLinkClass = ({
    isActive,
  }: {
    isActive: boolean
    isPending: boolean
    isTransitioning: boolean
  }): string =>
    isActive ? `${linkBaseClasses} border-b border-white` : linkBaseClasses

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`
        fixed top-0 left-0 z-50 w-full
        text-black transition-all duration-300
        ${isScrolled ? "bg-white/95 shadow-lg" : "bg-white"}
      `}
      aria-label="Main navigation"
    >


      {/* ===== MAIN NAVBAR ROW ===== */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo – link to Home */}
        <motion.div
          className="text-2xl font-bold text-black"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 220, damping: 16 }}
        >
          <NavLink to="/" aria-label="Home">
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

          {/* Services Dropdown (click only) */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              className="flex items-center gap-2 text-lg text-black/90 hover:text-black transition focus:outline-none"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-3 w-64 rounded-lg bg-white text-slate-900 shadow-2xl ring-1 ring-black/8 backdrop-blur-sm z-50"
                  role="menu"
                  aria-label="Services menu"
                >
                  <ul className="py-2">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <NavLink
                          to={`/services/${s.slug}`}
                          className={({
                            isActive,
                          }: {
                            isActive: boolean
                            isPending: boolean
                            isTransitioning: boolean
                          }) =>
                            `block px-4 py-3 text-sm hover:bg-slate-100 ${
                              isActive
                                ? "font-semibold bg-slate-100"
                                : "font-normal"
                            }`
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
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/blog" className={getLinkClass}>
            Blog
          </NavLink>
          <NavLink to="/careers" className={getLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/alumni" className={getLinkClass}>
            Alumni
          </NavLink>
        </div>

        {/* Mobile: hamburger / quick Services link */}
        <div className="md:hidden flex items-center gap-3">
          <NavLink
            to="/services"
            className="text-lg text-white/90 hover:text-white transition hidden sm:block"
          >
            Services
          </NavLink>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-lg p-2 bg-white/10 hover:bg-white/20"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-black/95 border-t border-white/5"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-3">
                <NavLink
                  to="/about"
                  className={({
                    isActive,
                  }: {
                    isActive: boolean
                    isPending: boolean
                    isTransitioning: boolean
                  }) => `py-2 ${isActive ? "font-semibold" : ""}`}
                >
                  About Us
                </NavLink>

                <MobileServicesSection
                  onNavigate={() => setMobileOpen(false)}
                />

                <NavLink
                  to="/news"
                  className={({
                    isActive,
                  }: {
                    isActive: boolean
                    isPending: boolean
                    isTransitioning: boolean
                  }) => `py-2 ${isActive ? "font-semibold" : ""}`}
                >
                  News
                </NavLink>
                <NavLink
                  to="/careers"
                  className={({
                    isActive,
                  }: {
                    isActive: boolean
                    isPending: boolean
                    isTransitioning: boolean
                  }) => `py-2 ${isActive ? "font-semibold" : ""}`}
                >
                  Careers
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({
                    isActive,
                  }: {
                    isActive: boolean
                    isPending: boolean
                    isTransitioning: boolean
                  }) => `py-2 ${isActive ? "font-semibold" : ""}`}
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/csr"
                  className={({
                    isActive,
                  }: {
                    isActive: boolean
                    isPending: boolean
                    isTransitioning: boolean
                  }) => `py-2 ${isActive ? "font-semibold" : ""}`}
                >
                  CSR
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

interface MobileServicesSectionProps {
  onNavigate: () => void
}

const MobileServicesSection: React.FC<MobileServicesSectionProps> = ({
  onNavigate,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="border-t border-white/5 pt-3">
      <button
        className="w-full flex items-center justify-between py-2"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-medium">Services</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="mt-2 ml-2 flex flex-col">
          {SERVICES.map((s) => (
            <NavLink
              key={s.slug}
              to={`/services/${s.slug}`}
              className={({
                isActive,
              }: {
                isActive: boolean
                isPending: boolean
                isTransitioning: boolean
              }) => `py-2 pl-3 ${isActive ? "font-semibold" : "font-normal"}`}
              onClick={onNavigate}
            >
              {s.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
