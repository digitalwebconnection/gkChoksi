// AboutUsSection.tsx or AboutUsSection.jsx
import { motion, type Variants, cubicBezier } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 0.61, 0.36, 1), // ✅ valid EasingFunction
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-20 -bottom-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== HERO / INTRO ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            About Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            G. K. Choksi &amp; Co. (GKC)
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Formed in 1970, GKC has been built on core values such as competency,
            professionalism, responsibility and accountability, honesty, integrity
            and dedication.
          </p>

          {/* Small mission badge */}
          <div className="mt-6 inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50/90 px-4 py-2 text-xs font-medium text-emerald-900 shadow-sm backdrop-blur-sm sm:text-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
            Mission:&nbsp;
            <span className="font-semibold">
              Anticipating and creating opportunities
            </span>
          </div>
          </motion.div>

        {/* ===== VISION & MISSION BLOCK ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Vision
            </p>
            <h3 className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">
              Designing pathways that transform vision into reality.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Our vision is to be a trusted advisor of choice for businesses and
              institutions, enabling them to make sound financial decisions through
              insight, integrity and professional excellence, while upholding our
              responsibilities to all stakeholders.
            </p>
          </motion.div>

          {/* Mission – detailed */}
          <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Mission
            </p>
            <h3 className="mt-3 text-base font-semibold text-emerald-900 sm:text-lg">
              Anticipating and creating opportunities.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-emerald-900/90 sm:text-base">
              We aim to anticipate emerging needs and create opportunities for our
              clients by combining deep technical knowledge with practical insight.
              As trusted professionals, we strive to attract and develop the best
              talent to deliver value added services across audit, tax, accounting
              consultancy, litigation support and startup services.
            </p>
          </motion.div>
        </motion.div>

        {/* ===== MAIN GRID: STATS + WHAT WE DO / VALUES ===== */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr,1fr]">
          {/* Left side: Stats + Dedicated services card */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="grid gap-6 rounded-2xl border border-slate-200 bg-white/90 p-6 text-center shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:p-8"
            >
              <div className="transition hover:scale-[1.02]">
                <p className="text-2xl font-bold text-slate-900">50+ Years</p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Legacy of practice
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 transition hover:scale-[1.02] sm:border-l sm:border-t-0 sm:pt-0 sm:pl-6">
                <p className="text-2xl font-bold text-slate-900">200+</p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Professionals &amp; staff
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4 transition hover:scale-[1.02] sm:border-l sm:border-t-0 sm:pt-0 sm:pl-6">
                <p className="text-2xl font-bold text-slate-900">Multi-city</p>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                  Ahmedabad, commercial &amp; political capitals of India
                </p>
              </div>
            </motion.div>

            {/* Dedicated to value-added services */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                Dedicated to Value-Added Services
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Team GKC comprises professionals who work dedicatedly to provide our
                clients with value added services in the areas of audit, tax,
                accounting consultancy, litigation support and startup services.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                In its endeavor to service existing clients effectively and
                efficiently and to increase its presence in the country’s capital,
                GKC established a branch in New Delhi.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side: 3 stacked cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-5"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <h4 className="text-sm font-semibold text-emerald-900">
                Designing Pathways from Vision to Reality
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-emerald-900/90 sm:text-sm">
                As trusted advisors, we strive to attract and develop the best
                professionals to provide value added services to our clients in
                making the best financial decisions possible.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <h4 className="text-sm font-semibold text-slate-900">
                Commitment to Continuous Learning
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                We have maintained high standards for Continued Professional
                Education and awards from the ICAI are testimony to that fact.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <h4 className="text-sm font-semibold text-slate-900">
                Our Philosophy
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-slate-700 sm:text-sm">
                While we have experienced many changes, our philosophy and goal
                remain the same: to serve our clients earnestly, with concern for
                their best interests, consistent with our responsibilities to all
                the stakeholders.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
