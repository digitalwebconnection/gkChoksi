// Navbar.tsx
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

/* ---------------- TYPES ---------------- */

interface ServiceItem {
  label: string
  slug: string
}

interface NavItemProps {
  to: string
  children: React.ReactNode
}

/* ---------------- DATA ---------------- */

const SERVICES: ServiceItem[] = [
  { label: "Management Consulting", slug: "management-consulting" },
  { label: "Business Advisory", slug: "business-advisory" },
  { label: "Audit & Assurance", slug: "audit-assurance" },
  { label: "Taxation", slug: "taxation" },
  { label: "Regulatory", slug: "regulatory" },
  { label: "M&A", slug: "m-and-a" },
]

/* ---------------- COMPONENT ---------------- */

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const servicesRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const location = useLocation()

  /* ---------------- SCROLL HIDE / SHOW ---------------- */

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

  /* ---------------- OUTSIDE CLICK ---------------- */

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
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

  /* ---------------- ESC KEY ---------------- */

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setAboutOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [])

  /* ---------------- ROUTE CHANGE CLOSE ---------------- */

  useEffect(() => {
    setServicesOpen(false)
    setAboutOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  /* ---------------- HELPERS ---------------- */

  const baseLink =
    "text-lg text-[#0F3D2E] hover:text-black transition-colors"

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `${baseLink} border-b border-black text-[#0F3D2E]`
      : baseLink

  /* ---------------- JSX ---------------- */

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 text-[#0F3D2E] z-50 w-full ${
        isScrolled ? "bg-white/95 shadow-lg  backdrop-blur" : "bg-white "
      }`}
    >
      {/* MAIN BAR */}
      <div className="mx-auto max-w-7xl flex items-center text-[#0F3D2E] justify-between px-4 py-4">

        {/* LOGO */}
        <NavLink to="/" className="shrink-0">
          <img src={logo} alt="Logo" className="h-12 w-60 object-contain" />
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">

          {/* ABOUT */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => {
                setAboutOpen((p) => !p)
                setServicesOpen(false)
              }}
              className="flex items-center gap-2 text-lg focus:outline-none"
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

          {/* SERVICES */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setServicesOpen((p) => !p)
                setAboutOpen(false)
              }}
              className="flex items-center gap-2 text-lg focus:outline-none"
            >
              Services
              <Chevron open={servicesOpen} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <Dropdown>
                  {SERVICES.map((s) => (
                    <NavItem key={s.slug} to={`/services/${s.slug}`}>
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

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black text-[#0F3D2E] px-4 py-4 space-y-2"
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

/* ---------------- REUSABLE UI ---------------- */

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
    transition={{ duration: 0.2 }}
    className="absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl z-50"
  >
    <ul className="py-2">{children}</ul>
  </motion.div>
)

const NavItem = ({ to, children }: NavItemProps) => (
  <li>
    <NavLink
      to={to}
      className="block px-4 py-3 text-sm text-black hover:bg-slate-100 transition"
    >
      {children}
    </NavLink>
  </li>
)

/* ---------------- MOBILE SECTIONS ---------------- */

const MobileAbout = ({ onNavigate }: { onNavigate: () => void }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="py-2 w-full text-left font-medium"
      >
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
      <button
        onClick={() => setOpen(!open)}
        className="py-2 w-full text-left font-medium"
      >
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
