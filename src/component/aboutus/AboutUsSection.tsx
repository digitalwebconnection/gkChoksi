import { useEffect, useRef, useState } from "react"
import { motion, type Variants, cubicBezier } from "framer-motion"
import { Link } from "react-router-dom"
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineEye,
  HiOutlineChartBarSquare,
} from "react-icons/hi2"

import "../home/heroAnimations.css"

import heroImg1 from "/src/assets/25.jpg"
import heroImg2 from "/src/assets/8.jpeg"
import heroImg3 from "/src/assets/3.jpeg"
import aboutImgMain from "/src/assets/25.jpg"
import aboutImgSecondary from "/src/assets/7.jpeg"

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3]

const IVORY = "#F7F9F8"
const CHARCOAL = "#1C1C1C"
const ACCENT = "#6FAF9B"
const GOLD = "#C2A96A"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: cubicBezier(0.22, 0.61, 0.36, 1),
    },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const AboutUsSection = () => {
  const [slide, setSlide] = useState(0)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((p) => (p + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const goNext = () =>
    setSlide((p) => (p + 1) % HERO_IMAGES.length)
  const goPrev = () =>
    setSlide((p) => (p - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)

  return (
    <>
      {/* —— Tag line / 3Ps hero (carousel like home: fade + Ken Burns + swipe) —— */}
      <section
        className="relative flex flex-col justify-center overflow-hidden py-8 md:py-11 lg:py-12 select-none touch-pan-y"
        style={{ backgroundColor: IVORY }}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          if (dx > 50) goPrev()
          else if (dx < -50) goNext()
          touchStartX.current = null
        }}
      >
        {HERO_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1500 ease-out hero-bg ${i === slide
                ? "z-0 opacity-100 hero-kenburns"
                : "pointer-events-none z-0 opacity-0"
              }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden
          />
        ))}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: `${CHARCOAL}`, opacity: 0.72 }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {[
              {
                Icon: HiOutlineAdjustmentsHorizontal,
                line: "Precision",
                sub: "Built on precision",
              },
              {
                Icon: HiOutlineEye,
                line: "Perspective",
                sub: "Guided by Perspective",
              },
              {
                Icon: HiOutlineChartBarSquare,
                line: "Performance",
                sub: "Driven by Performance",
              },
            ].map(({ Icon, line, sub }) => (
              <motion.div
                key={line}
                variants={fadeUp}
                className="group rounded-2xl border px-4 py-5 backdrop-blur-md transition-colors duration-300 sm:px-5 sm:py-6"
                style={{
                  borderColor: `${GOLD}55`,
                  backgroundColor: `${CHARCOAL}33`,
                }}
              >
                <Icon
                  className="mx-auto h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: GOLD }}
                  aria-hidden
                />
                <p
                  className="mt-5 text-lg font-semibold text-center"
                  style={{ color: IVORY }}
                >
                  {line}
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed text-center"
                  style={{ color: `${IVORY}`, opacity: 0.88 }}
                >
                  {sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="mx-auto mt-7 max-w-3xl text-center sm:mt-9"
          >
            <p
              className="text-lg font-medium leading-snug sm:text-xl md:text-2xl"
              style={{ color: GOLD }}
            >
              Clarity in thinking. Confidence in execution.
            </p>
            <p
              className="mt-4 text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg"
              style={{ color: IVORY, opacity: 0.92 }}
            >
              We are the firm that is relied upon for its judgement, its integrity,
              and its ability to see clearly when it matters the most.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.55 }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <Link
              to="/services/management-consulting"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition hover:opacity-90"
              style={{ backgroundColor: ACCENT, color: IVORY }}
            >
              Explore our Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-w-[200px] items-center justify-center rounded-full border-2 px-8 py-3 text-sm font-semibold transition hover:bg-white/10"
              style={{ borderColor: GOLD, color: IVORY }}
            >
              Connect with Us
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:bottom-6">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSlide(i)}
              aria-label={`Hero image ${i + 1}`}
              className="h-2.5 rounded-full transition-all duration-300 sm:h-3"
              style={{
                width: i === slide ? 36 : 10,
                backgroundColor:
                  i === slide ? ACCENT : "rgba(247, 249, 248, 0.35)",
              }}
            />
          ))}
        </div>
      </section>

      {/* —— Detailed narrative —— */}
      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: IVORY }}
      >
        <motion.p
          variants={fadeUp}
          className="text-5xl font-semibold leading-tight text-center"
          style={{ color: CHARCOAL }}
        >
          Ours is a firm built on the belief that
          <br />
          <span style={{ color: GOLD }} className="leading-none">
            clarity creates confidence
          </span>
        </motion.p>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)] md:items-start">
            {/* Text column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="space-y-6 md:space-y-7"
            >

              <motion.p
                variants={fadeUp}
                className="text-base leading-[1.75] md:text-[1.0625rem]"
                style={{ color: CHARCOAL, opacity: 0.92 }}
              >
                With the Leadership of 8 Partners and a team comprising of 35+
                Chartered Accountants including 150 professional staffs, we bring
                together depth of knowledge and breadth of experience to serve
                businesses that are evolving, expanding, and aspiring for more.
                Over the years, we have grown not merely in size, but in perspective
                shaped by the industries we serve and the responsibilities we
                undertake.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-base leading-[1.75] md:text-[1.0625rem]"
                style={{ color: CHARCOAL, opacity: 0.92 }}
              >
                Our work spans Audit, Tax, and Advisory, yet at its core lies a
                singular objective: to offer insight that is both precise and
                practical. We approach each engagement with discipline, independence,
                and an understanding that every number tells a story and every
                decision is future oriented.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-base leading-[1.75] md:text-[1.0625rem]"
                style={{ color: CHARCOAL, opacity: 0.92 }}
              >
                We are guided by enduring values, strengthened by collaborative
                thinking, and committed to delivering outcomes that stand the test
                of time.
              </motion.p>
            </motion.div>

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mt-6 md:mt-0"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="relative overflow-hidden rounded-2xl shadow-xl"
                style={{ boxShadow: "0 18px 45px rgba(28, 28, 28, 0.22)" }}
              >
                <img
                  src={aboutImgMain}
                  alt="GKC team collaborating"
                  className="h-full w-full h-[380px] md:h-[460px] object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="absolute -bottom-15 -right-18 w-88 max-w-[78%] h-64 overflow-hidden rounded-2xl border-4 bg-white shadow-lg sm:w-64 sm:h-48 md:w-72 md:h-62"
                style={{
                  borderColor: IVORY,
                  boxShadow: "0 14px 30px rgba(28, 28, 28, 0.28)",
                }}
              >
                <img
                  src={aboutImgSecondary}
                  alt="Close-up of advisory discussion"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUsSection
