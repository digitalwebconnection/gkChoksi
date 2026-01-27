import { motion } from "framer-motion";
import { Landmark, Users, ShieldCheck, Globe2 } from "lucide-react";
import { easeOut } from "framer-motion";

const timeline = [
  {
    icon: Landmark,
    chapter: "Chapter 01",
    period: "1970s",
    title: "Foundations of Trust",
    desc:
      "G.K. Choksi & Co. was established with a clear focus on audit, taxation and assurance, building a reputation for integrity and independence.",
    meta: "Early work with closely-held businesses and emerging enterprises.",
    side: "right",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStO16NrYuJ9RB8WbRJpfelBcZYSMsBWPGNug&s",
  },
  {
    icon: Users,
    chapter: "Chapter 02",
    period: "1990s–2000s",
    title: "Expanding Our Reach",
    desc:
      "The firm grew its presence across major Indian cities, serving larger corporates, banks and institutions with multi-location audit and advisory services.",
    meta: "New partners, sector specialisation and long-term client relationships.",
    side: "left",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZttRXBZySZTm-d2BWn91w0vzrHJvwTo7fQ&s",
  },
  {
    icon: ShieldCheck,
    chapter: "Chapter 03",
    period: "2000s–2015",
    title: "Strengthening Governance & Compliance",
    desc:
      "With evolving regulations and global standards, we strengthened our focus on risk, governance, compliance and internal control frameworks.",
    meta: "Listed entities, regulatory assignments and complex group audits.",
    side: "right",
    image: "https://lh4.googleusercontent.com/proxy/OIAncajJoHyFHQ1ClRFcJRtrB_jmQj7hlUzPoSKW2MvuPhDbmAOg3bSylxiEBlFujkDWaeMvXijcq9mANyeV7J2DLp6yuBuF7_Vrdz2b3xOyXPkiwLn75Z8",
  },
  {
    icon: Globe2,
    chapter: "Chapter 04",
    period: "2015–Present",
    title: "Digital, Analytical & Global Outlook",
    desc:
      "Today, we combine technology, data-driven insights and decades of domain expertise to support clients in a global and digital environment.",
    meta: "Analytics-led audits and cross-border assignments.",
    side: "left",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9stkjpWqPzOi56-EI2zkU8KbSEudJL_9ew&s",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemAnim = (direction: string) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : 60,
    y: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
});

const TimelineSection = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Animated timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-emerald-300 lg:left-1/2 lg:-translate-x-1/2"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-28"
        >
          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isLeft = item.side === "left";

            return (
              <motion.div
                key={i}
                variants={itemAnim(item.side)}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >

                {/* DOT */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="absolute left-4 top-8 -translate-x-1/2 lg:left-1/2"
                >
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-4 border-emerald-400 bg-white shadow-lg">
                    <motion.span
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-3 w-3 rounded-full bg-emerald-600"
                    />
                  </span>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className={isLeft ? "lg:order-1" : "lg:order-2"}
                >
                  <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden rounded-3xl shadow-black shadow-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[230px] w-full object-cover"
                    />
                  </motion.div>
                </motion.div>

                {/* CONTENT CARD */}
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 30px 60px -15px rgba(16,185,129,0.3)" }}
                  transition={{ duration: 0.3 }}
                  className={isLeft ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="rounded-2xl border border-emerald-300 bg-white p-6 shadow-xl">

                    <span className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
                      {item.chapter} • {item.period}
                    </span>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                        <Icon className="h-5 w-5 text-emerald-600" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          {item.desc}
                        </p>

                        <p className="mt-3 text-[11px] font-medium uppercase tracking-widest text-slate-400">
                          {item.meta}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                            Core Focus
                          </span>
                          <span className="h-px flex-1 bg-linear-to-r from-emerald-400 to-transparent" />
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default TimelineSection;
