import { motion } from "framer-motion";
import { Landmark, Users, ShieldCheck, Globe2 } from "lucide-react";
import { easeOut } from "framer-motion";

const timeline = [
  {
    icon: Landmark,
    chapter: "Chapter 01",
    period: "1972",
    title: "“Foundations and Fam",
    desc:
      "G.K. Choksi & Co. was established with a clear focus on audit, taxation and assurance, building a reputation for integrity and independence.",
    meta: "Early work with closely-held businesses and emerging enterprises.",
    side: "right",
    image: "https://media.licdn.com/dms/image/v2/C4E1BAQFKv8qctnQ2wA/company-background_10000/company-background_10000/0/1584511413839/the_foundation_trust_cover?e=2147483647&v=beta&t=SZftto9KtLSG85xgsdQlk85gJ44D_mUNlhzmJUjmkEI",
  },
  {
    icon: Users,
    chapter: "Chapter 02",
    period: "1990–2000",
    title: "Expanding Our Reach",
    desc:
      "The firm grew its presence across major Indian cities, serving larger corporates, banks and institutions with multi-location audit and advisory services.",
    meta: "New partners, sector specialisation and long-term client relationships.",
    side: "left",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_hjR0SrpuQ-iN-zF_iY2VsxylGdAdbbm4w&s",
  },
  {
    icon: ShieldCheck,
    chapter: "Chapter 03",
    period: "2000–2015",
    title: "Strengthening Governance & Compliance",
    desc:
      "With evolving regulations and global standards, we strengthened our focus on risk, governance, compliance and internal control frameworks.",
    meta: "Listed entities, regulatory assignments and complex group audits.",
    side: "right",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSko2M7te0So4PgD3HmdqFqGo3uHPmBorSEQ&s",
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
    image: "https://www.webintravel.com/wp-content/uploads/2012/11/chart_growth.png",
  },
]; 

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
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
    <section className="relative bg-[#F7F9F8] py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute left-4 top-0 h-full w-px origin-top bg-[#6FAF9B] lg:left-1/2 lg:-translate-x-1/2"
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

                {/* CENTER ICON (REPLACED DOT 🔥) */}
                <div className="absolute left-4 top-8 -translate-x-1/2 lg:left-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F3D2E] text-white shadow-[0_10px_30px_rgba(15,61,46,0.5)]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={isLeft ? "lg:order-1" : "lg:order-2"}
                >
                  <div className="overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(15,61,46,0.25)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[230px] w-full object-fill"
                    />
                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 30px 60px -15px rgba(15,61,46,0.3)",
                  }}
                  className={isLeft ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="rounded-2xl border border-[#6FAF9B]/30 bg-white p-6 shadow-[0_20px_50px_rgba(15,61,46,0.15)]">

                    <span className="mb-3 inline-block rounded-full bg-[#6FAF9B]/10 px-3 py-1 text-[13px] font-semibold uppercase tracking-widest text-[#0a2e25]">
                      {item.chapter} • {item.period}
                    </span>

                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6FAF9B]/20 text-[#0F3D2E]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#1C1C1C]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-justify text-md text-black">
                          {item.desc}
                        </p>

                        {/* <p className="mt-3 text-[11px] font-medium uppercase tracking-widest text-[#6FAF9B]">
                          {item.meta}
                        </p> */}

                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-widest text-[#0F3D2E]">
                            Core Focus
                          </span>
                          <span className="h-px flex-1 bg-linear-to-r from-[#6FAF9B] to-transparent" />
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