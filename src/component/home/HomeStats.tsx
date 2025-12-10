// StatsSection.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: 65, suffix: "+", prefix: "" },
  { label: "Listed Companies Served", value: 120, suffix: "+", prefix: "" },
  { label: "Global Offices", value: 10, suffix: "", prefix: "" },
  { label: "Assignments Completed", value: 2500, suffix: "+", prefix: "" },
];

// Simple animated counter
const AnimatedCounter = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 80, damping: 20 });
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) count.set(to);
  }, [inView, to, count]);

  const [value, setValue] = React.useState(0);
  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

interface CardVariants {
    [key: string]: any;
    hidden: {
        opacity: number;
        y: number;
    };
    show: (i: number) => {
        opacity: number;
        y: number;
        transition: {
            duration: number;
            delay: number;
        };
    };
}

const cardVariants: CardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.08 },
    }),
};

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      {/* soft background accents */}
      {/* <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" /> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
            By the Numbers
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A legacy of trust, scale and performance.
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Decades of experience, deep industry expertise and a pan-India
            presence allow us to deliver assurance and advisory services that
            stand up to the highest standards of governance.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              custom={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-600/30 bg-white/90 px-6 py-6 text-center shadow-xl shadow-black/30 hover:shadow-black/60  duration-300 hover:shadow-2xl"
            >
              {/* top accent line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-emerald-600 opacity-70" />

              {/* subtle badge */}
              <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                ●
              </div>

              {/* number */}
              <div className="mb-1 text-3xl font-semibold text-slate-900 sm:text-4xl">
                <AnimatedCounter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>

              {/* label */}
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
                {stat.label}
              </p>

              {/* bottom grow line */}
              {/* <div className="mx-auto mt-4 h-0.5 w-10 origin-left bg-gradient-to-r from-emerald-400 via-emerald-300 to-transparent transition-all duration-300 group-hover:w-20" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
