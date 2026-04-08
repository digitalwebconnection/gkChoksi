import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  FaUserTie,
  FaShieldHalved,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaHandshake,
} from "react-icons/fa6"

import "../home/heroAnimations.css"

import bgLeadership from "../../assets/10.jpeg"
import bgIntegrity from "../../assets/11.jpeg"
import bgEmpathy from "../../assets/12.jpeg"
import bgInnovation from "../../assets/13.jpeg"
import bgCollaboration from "../../assets/14.jpeg"
import bgClient from "../../assets/15.jpeg"

const IVORY = "#F7F9F8"
const CHARCOAL = "#1C1C1C"
const ACCENT = "#6FAF9B"
const GOLD = "#C2A96A"

const coreValues = [
  {
    title: "Leadership",
    text: "Taking ownership and driving outcomes with accountability while ensuring commitment to quality and continuous improvement",
    Icon: FaUserTie,
    image: bgLeadership,
  },
  {
    title: "Integrity",
    text: "Upholding the highest ethical and professional standards",
    Icon: FaShieldHalved,
    image: bgIntegrity,
  },
  {
    title: "Empathy",
    text: "Understanding client needs with a solution-oriented mindset",
    Icon: FaHeart,
    image: bgEmpathy,
  },
  {
    title: "Innovation",
    text: "Leveraging technology and new thinking to deliver value",
    Icon: FaLightbulb,
    image: bgInnovation,
  },
  {
    title: "Collaboration",
    text: "Working seamlessly across teams and clients",
    Icon: FaUsers,
    image: bgCollaboration,
  },
  {
    title: "Client Centricity",
    text: "Prioritising long-term relationships over short-term gains",
    Icon: FaHandshake,
    image: bgClient,
  },
] as const

const VisionMissionSection = () => {
  const [slide, setSlide] = useState(0)
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    const t = window.setInterval(() => {
      setSlide((p) => (p + 1) % coreValues.length)
    }, 3000)
    return () => clearInterval(t)
  }, [])

  const next = () => setSlide((p) => (p + 1) % coreValues.length)
  const prev = () =>
    setSlide((p) => (p - 1 + coreValues.length) % coreValues.length)

  const active = coreValues[slide]
  const ActiveIcon = active.Icon

  return (
    <div style={{ backgroundColor: IVORY }}>
      {/* Vision & Mission */}
      <section className="py-10 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: ACCENT }}
            >
              Direction
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
              style={{ color: CHARCOAL }}
            >
              Vision &amp; Mission
            </h2>
            <div
              className="mx-auto mt-6 h-px max-w-xs"
              style={{ backgroundColor: GOLD }}
            />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <motion.article
              className="group relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white/95 to-[#F7F9F8] p-8 shadow-sm transition-colors duration-300 md:p-10"
              style={{ borderColor: `${GOLD}55` }}
            >
              {/* Expanding circle hover effect */}
              <div
                aria-hidden
                className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-[linear-gradient(135deg,#1C1C1C_0%,#6FAF9B_50%,#C2A96A_100%)] opacity-90 transition-transform duration-300 ease-out group-hover:scale-[37]"
              />

              {/* Optional corner arrow */}
              <div className="absolute top-0 right-0 flex items-center justify-center h-8 w-8 overflow-hidden rounded-tr-xl rounded-bl-lg bg-[linear-gradient(135deg,#6FAF9B,#1C1C1C)]">
                <div className="text-white translate-x-[0.5px] translate-y-[-1px] text-sm font-medium">
                  →
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C2A96A] transition-colors duration-500 group-hover:text-[#F7F9F8]">
                  Vision
                </p>
                <p className="mt-5 text-lg font-medium leading-snug text-[#1C1C1C] transition-colors duration-500 group-hover:text-white/80">
                  To be a trusted, forward-looking professional services firm
                  delivering value through insight, integrity and innovation.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="group relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white/95 to-[#F7F9F8] p-8 shadow-sm transition-colors duration-300 md:p-10"
              style={{ borderColor: `${GOLD}55` }}
            >
              <div
                aria-hidden
                className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-[linear-gradient(135deg,#1C1C1C_0%,#6FAF9B_50%,#C2A96A_100%)] opacity-90 transition-transform duration-300 ease-out group-hover:scale-[37]"
              />

              <div className="absolute top-0 right-0 flex items-center justify-center h-8 w-8 overflow-hidden rounded-tr-xl rounded-bl-lg bg-[linear-gradient(135deg,#6FAF9B,#1C1C1C)]">
                <div className="text-white translate-x-[0.5px] translate-y-[-1px] text-sm font-medium">
                  →
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C2A96A] transition-colors duration-500 group-hover:text-[#F7F9F8]">
                  Mission
                </p>
                <p className="mt-5 text-lg font-medium leading-snug text-[#1C1C1C] transition-colors duration-500 group-hover:text-white/80">
                  To provide high-quality audit, tax and advisory services through a
                  partner-driven approach, combining technical excellence with
                  commercial understanding to support clients in achieving
                  sustainable growth.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Core values carousel */}
      <section
        className="pb-24 md:pb-32 py-12"
        style={{ backgroundColor: IVORY }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center md:mb-14"
          >
            <p
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: ACCENT }}
            >
              How we work
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
              style={{ color: CHARCOAL }}
            >
              Core Values
            </h2>
          </motion.div>

          <div
            className="relative select-none touch-pan-y"
            style={{
              minHeight: "min(520px, 82vh)",
            }}
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX
            }}
            onTouchEnd={(e) => {
              if (touchX.current == null) return
              const dx = e.changedTouches[0].clientX - touchX.current
              if (dx > 50) prev()
              else if (dx < -50) next()
              touchX.current = null
            }}
          >
            <div className="relative z-10 grid min-h-[420px] grid-cols-1 md:min-h-[480px] md:grid-cols-2">
              {/* Left: image (hero-like smooth crossfade) */}
              <div className="relative min-h-[250px] md:min-h-[480px] overflow-hidden">
                {coreValues.map((item, i) => (
                  <div
                    key={item.title}
                    className={`absolute inset-0 transition-opacity duration-1500 ease-out ${
                      i === slide ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    aria-hidden={i !== slide}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Right: content */}
              <div
                className="flex items-center px-6 py-10 sm:px-8 md:px-10 lg:px-12"
                style={{ backgroundColor: IVORY }}
              >
                <motion.div
                  key={`content-${slide}`}
                  role="tabpanel"
                  aria-live="polite"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="max-w-xl"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: GOLD,
                      backgroundColor: `${CHARCOAL}08`,
                      color: GOLD,
                    }}
                  >
                    <ActiveIcon className="h-7 w-7" aria-hidden />
                  </div>
                  <h3
                    className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl"
                    style={{ color: CHARCOAL }}
                  >
                    {active.title}
                  </h3>
                  <p
                    className="mt-4 text-base leading-relaxed md:text-lg"
                    style={{ color: CHARCOAL, opacity: 0.88 }}
                  >
                    {active.text}
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core values bottom CTA */}
      <section className="pb-20 md:pb-24" style={{ backgroundColor: IVORY }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="px-0 py-2 text-left"
          >
            <p
              className="text-2xl font-semibold tracking-tight md:text-3xl"
              style={{ color: CHARCOAL }}
            >
              Go there with us
            </p>
            <p
              className="mt-2 text-lg font-medium md:text-xl"
              style={{ color: GOLD }}
            >
              Now, for tomorrow is our promise.
            </p>
            <p
              className="mt-6 max-w-7xl text-base leading-relaxed md:text-lg"
              style={{ color: CHARCOAL, opacity: 0.9 }}
            >
              The business world is changing at lightning speed. To succeed, you
              need an agile partner to help lead you forward - not by taking the
              well-worn path, but by exploring every opportunity to prepare you
              for tomorrow.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: ACCENT, color: IVORY }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VisionMissionSection
