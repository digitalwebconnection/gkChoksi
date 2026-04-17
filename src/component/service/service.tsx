import { easeOut, motion } from "framer-motion";
import serviceHero from "/src/assets/25.jpg";
import {
  HiOutlinePuzzlePiece,
  HiOutlineBuildingOffice2,
  HiOutlineChartBar,
  HiOutlineUserGroup,
} from "react-icons/hi2";
interface Service {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
}



export const SERVICES: Service[] = [
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    subtitle: "Confidence & Reliability for Stakeholders",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjlTmp6LCd3DllEDENq3qA95DGlkc58DMwA&s",
    paragraphs: [
      "Assurance, in its truest sense, goes beyond verification - it builds trust where it matters most. Our audit approach is defined by independence of thought, depth of analysis, and an uncompromising commitment to quality.",
      "Across External and Internal Audits, Forensic Reviews, Due Diligence, Tax and Stock Audits, Departmental and Special Audits, we bring precision and perspective together.",
      "Our work is designed to strengthen governance, identifying critical risks and enabling stakeholders to rely on financial and operational integrity with confidence.",
    ],
  },


  {
    slug: "business-advisory",
    title: "Business Advisory",
    subtitle: "Strategy, made executable",
    image: "https://blog.udemy.com/wp-content/uploads/2014/04/bigstock-Image-of-business-partners-dis-41296537.jpg",
    paragraphs: [
      "In a dynamic business environment, decisions demand both clarity and conviction. Our advisory practice is designed to provide exactly that with measured guidance backed by technical depth and commercial insight.",
      "From Accounting Advisory and Start-up structuring to Government Incentives, Inbound and Outbound Investment Strategies, and Incubation, we work closely with businesses to shape scalable structures, unlock opportunities, and support growth with foresight and discipline.",
    ],
  },

  {
    slug: "mergers-acquisition",
    title: "Mergers & Acquisition",
    subtitle: "Every deal, thoughtfully shaped",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXczdgrzieBQpVMkTzrvVtoWm08eodYnAgYQ&s",
    paragraphs: [
      "Merger & Amalgamation are not merely financial events, they are defining milestones. Our M&A services combine analytical rigour with strategic perspective to support clients across the entire deal lifecycle.",
      "Our services include Transaction Advisory, Deal Evaluation, Analytics and Closure Support and Due Diligence ensuring that decisions are informed, risks are understood, and outcomes are executed with precision.",
    ],
  },
  {
    slug: "management-consultancy",
    title: "Management Consultancy",
    subtitle: "Strategy, made executable.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSHZSfGDClJDJYFy-tqiGQQk72CqKGh05NQ&s",
    paragraphs: [
      "Every organisation reaches moments that call for reflection, recalibration, and renewal. Our management consultancy services are designed to support such transitions with clarity and foresight.",
      "Through Valuation, Strategic Advisory, ESG, Governance Risk & Compliance, and Succession Planning, we help organisations strengthen foundations, manage uncertainties, and prepare thoughtfully for the future.",
    ],
  },
  {
    slug: "regulatory",
    title: "Regulatory",
    subtitle: "Complexity, made navigable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiW2XWKLtsd4W4knHKpZsw7YPtPqa35NJIw&s",
    paragraphs: [
      "In an environment shaped by evolving laws and expectations, clarity in compliance becomes essential. Our regulatory services are designed to guide clients by simplifying complexity and ensuring absolute compliance.",
      "We advise across Corporate Law, Securities Regulations, and Insolvency & Turnaround, ensuring that obligations are met while business continuity remains uninterrupted.",
    ],
  },
  {
    slug: "taxation",
    title: "Taxation",
    subtitle: "Structured for precisional advantage",
    image: "https://www.shutterstock.com/image-photo/person-interacts-digital-interface-displaying-600nw-2710079451.jpg",
    paragraphs: [
      "Taxation, when approached thoughtfully, becomes a tool of efficiency rather than a burden of compliance. Our tax practice is built on this understanding.",
      "With expertise in Corporate Tax, International Tax, Indirect Tax, and Transfer Pricing, we provide solutions that are technically sound, commercially viable, and aligned with long-term objectives.",
    ],
  },


]

const BOTTOM_POINTS = [
  {
    text: "Integrated approach",
    icon: HiOutlinePuzzlePiece,
    gradient: "from-[#6FAF9B] to-[#289572]",
  },
  {
    text: "Industry-focused delivery",
    icon: HiOutlineBuildingOffice2,
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
  },
  {
    text: "Insight-driven decision support",
    icon: HiOutlineChartBar,
    gradient: "from-[#F59E0B] to-[#C2A96A]",
  },
  {
    text: "Partner-led execution",
    icon: HiOutlineUserGroup,
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
  },
];

/* ------------------ ANIMATION ------------------ */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// ================= COMPONENT =================
const ServicePage = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-150 z-10 flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${serviceHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/70" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#C2A96A]">
            Our Professional Services
          </h1>

          <p className="mt-6 text-white text-lg">
            Delivering clarity, precision, and strategic insight across every engagement.
          </p>
        </motion.div>
      </section>

      <div className="relative  -mt-27 z-99  py-10 px-6 bg-transparent overflow-hidden ">

        {/* ================= FLOATING BG GLOW ================= */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-[#6FAF9B]/20 blur-[120px] rounded-full" /> */}
        {/* <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C2A96A]/20 blur-[120px] rounded-full" /> */}

        {/* ================= BOTTOM POINTS ================= */}
        <div className="grid max-w-7xl mx-auto sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {BOTTOM_POINTS.map((point, i) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group rounded-xl  p-px bg-linear-to-r from-[#6FAF9B]/20 to-[#C2A96A]/20"
              >
                {/* Glow Background */}
                <div className={`absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500 bg-linear-to-r ${point.gradient}`} />

                {/* Card */}
                <div className="relative z-10 rounded-xl bg-white px-5 py-6 text-center shadow-md transition-all duration-300 group-hover:shadow-2xl">

                  {/* 🔥 COLORFUL ICON */}
                  <motion.div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r ${point.gradient} text-white shadow-lg`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.15,
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Text */}
                  <p className="text-sm font-semibold text-[#1C1C1C] leading-snug">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* ================= AREAS OF FOCUS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl uppercase tracking-[0.5em] text-[#1C1C1C] mb-6 font-semibold">
            Areas of Focus
          </p>

          <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
            {SERVICES.map((service: any) => (
              <motion.div
                key={service.slug}
                variants={item}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Glow Layer */}
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#6FAF9B] to-[#C2A96A] blur-md opacity-0 group-hover:opacity-60 transition duration-500" />

                {/* Chip */}
                <div className="relative z-10 px-10 py-3 rounded-full text-sm font-semibold bg-white border border-[#6FAF9B]/50 shadow-md transition-all duration-300 group-hover:bg-[#1C1C1C] group-hover:text-white group-hover:border-transparent">

                  {/* Animated underline */}
                  <span className="relative">
                    {service.title}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#6FAF9B] to-[#C2A96A] transition-all duration-300 group-hover:w-full" />
                  </span>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>



      {/* SERVICES GRID */}
      <section className="py-14 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-xl uppercase font-bold tracking-[0.2em] text-[#6FAF9B]">
              Services
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-[#1C1C1C]">
              Expertise That Moves Business Forward
            </h2>

            <div className="w-20 h-0.5 bg-[#C2A96A] mx-auto mt-6" />
          </motion.div>

          {/* GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.slug}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#1C1C1C] group-hover:text-[#289572] transition">
                    {service.subtitle}
                  </h4>

                  <p className="mt-4 text-sm text-gray-600">
                    {service.paragraphs[0]}
                  </p>

                  <p className="mt-2 text-sm text-gray-600">
                    {service.paragraphs[1]}
                  </p>
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 bg-linear-to-r from-[#6FAF9B]/0 via-[#6FAF9B]/10 to-[#C2A96A]/0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ServicePage;