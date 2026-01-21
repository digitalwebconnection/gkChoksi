// StatsSection.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: 65, suffix: "+" },
  { label: "Listed Companies Served", value: 120, suffix: "+" },
  { label: "Global Offices", value: 10 },
  { label: "Assignments Completed", value: 2500, suffix: "+" },
];
interface CounterProps {
  value: number;
  suffix?: string;
}
// Lightweight counter (no spring, no motion values)
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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            By the Numbers
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            A legacy of trust and performance
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Decades of experience delivering assurance and advisory services
            with uncompromising standards.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              custom={idx} whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-600/30 bg-white/90 px-6 py-6 text-center shadow-xl shadow-black/30 hover:shadow-black/60 duration-300 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-emerald-600 opacity-70" /> {/* subtle badge */} <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors"> ● </div>
              <div className="mb-1 text-3xl font-semibold text-slate-900">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
