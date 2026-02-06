// Navbar.tsx
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const servicesRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)

  const location = useLocation()

  /* Scroll hide / show */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setIsVisible(current < 10 || current < lastScrollY)
      setIsScrolled(current > 50)
      setLastScrollY(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  /* Outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  /* ESC close */
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setAboutOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  /* Route change close */
  useEffect(() => {
    setServicesOpen(false)
    setAboutOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  const linkBaseClasses =
    "text-lg text-black/90 hover:text-black transition"

  const getLinkClass = ({
    isActive,
  }: {
    isActive: boolean
    isPending: boolean
    isTransitioning: boolean
  }) =>
    isActive
      ? `${linkBaseClasses} border-b border-black`
      : linkBaseClasses

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all ${
        isScrolled ? "bg-white/95 shadow-lg" : "bg-white"
      }`}
    >
      {/* Main Bar */}
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-12 w-60 object-contain" />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {/* About Dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen((p) => !p)}
              className="flex items-center gap-2 text-lg"
            >
              About Us
              <Chevron open={aboutOpen} />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <Dropdown>
                  <NavItem to="/about">Company Overview</NavItem>
                  <NavItem to="/about/team">Team Members</NavItem>
                  <NavItem to="/about/partners">Partners</NavItem>
                </Dropdown>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen((p) => !p)}
              className="flex items-center gap-2 text-lg"
            >
              Services
              <Chevron open={servicesOpen} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <Dropdown>
                  {SERVICES.map((s) => (
                    <NavItem
                      key={s.slug}
                      to={`/services/${s.slug}`}
                    >
                      {s.label}
                    </NavItem>
                  ))}
                </Dropdown>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/blog" className={getLinkClass}>Blog</NavLink>
          <NavLink to="/careers" className={getLinkClass}>Careers</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen((p) => !p)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black text-white px-4 py-4"
          >
            <MobileAbout onNavigate={() => setMobileOpen(false)} />
            <MobileServices onNavigate={() => setMobileOpen(false)} />

            <NavLink to="/blog" className="block py-2">Blog</NavLink>
            <NavLink to="/careers" className="block py-2">Careers</NavLink>
            <NavLink to="/contact" className="block py-2">Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* ---------- Reusable UI ---------- */

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M5 8l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Dropdown = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    className="absolute mt-3 w-60 bg-white rounded-lg shadow-2xl z-50"
  >
    <ul className="py-2">{children}</ul>
  </motion.div>
)

const NavItem = ({ to, children }: any) => (
  <li>
    <NavLink
      to={to}
      className="block px-4 py-3 text-sm hover:bg-slate-100"
    >
      {children}
    </NavLink>
  </li>
)

/* ---------- Mobile Sections ---------- */

const MobileAbout = ({ onNavigate }: { onNavigate: () => void }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(!open)} className="py-2 w-full text-left">
        About Us
      </button>
      {open && (
        <div className="ml-4">
          <NavLink to="/about" onClick={onNavigate} className="block py-2">
            Company Overview
          </NavLink>
          <NavLink to="/about/team" onClick={onNavigate} className="block py-2">
            Team Members
          </NavLink>
          <NavLink to="/about/partners" onClick={onNavigate} className="block py-2">
            Partners
          </NavLink>
        </div>
      )}
    </>
  )
}

const MobileServices = ({ onNavigate }: { onNavigate: () => void }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(!open)} className="py-2 w-full text-left">
        Services
      </button>
      {open && (
        <div className="ml-4">
          {SERVICES.map((s) => (
            <NavLink
              key={s.slug}
              to={`/services/${s.slug}`}
              onClick={onNavigate}
              className="block py-2"
            >
              {s.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar
