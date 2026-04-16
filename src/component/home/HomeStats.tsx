import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  HiOutlineCalendarDays,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const startYear = 1972;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;

const stats = [
  {
    label: "Years of Experience",
    value: experienceYears,
    suffix: "+",
    icon: HiOutlineCalendarDays,
  },
  {
    label: "Offices",
    value: 4,
    icon: HiOutlineGlobeAlt,
  },
];
interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();

    function animate() {
      const duration = 900;
      const startTime = performance.now();

      function update(time: number) {
        const progress = Math.min((time - startTime) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }
  }, [value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-[#F7F9F8] py-14">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
       

          <h2 className="mt-2 text-3xl font-semibold text-[#1C1C1C] sm:text-4xl">
            A legacy of trust and performance
          </h2>

          <p className="mt-3 text-sm text-[#1F6F5B]">
            Decades of experience delivering Assurance and Advisory Services
            with uncompromising standards.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-[#6FAF9B]/20 bg-white px-6 py-7 text-center shadow-[0_20px_60px_rgba(15,61,46,0.15)] transition-all duration-300 hover:shadow-[0_25px_80px_rgba(15,61,46,0.25)]"
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-[#0F3D2E]" />

                {/* Icon Badge 🔥 */}
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6FAF9B]/15 text-[#0F3D2E] group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                  <Icon size={22} />
                </div>

                {/* Number */}
                <div className="mb-1 text-3xl font-bold text-[#1C1C1C]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1F6F5B]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;