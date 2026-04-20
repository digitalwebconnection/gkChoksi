import { easeOut, motion } from "framer-motion";

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
      "Through Valuation, Strategic Advisory, ESG, Governance Risk & Compliance, and Succession Planning."
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
  // {
  //   slug: "management-consultancy",
  //   title: "Management Consultancy",
  //   subtitle: "Strategy, made executable.",
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSHZSfGDClJDJYFy-tqiGQQk72CqKGh05NQ&s",
  //   paragraphs: [
  //     "Every organisation reaches moments that call for reflection, recalibration, and renewal. Our management consultancy services are designed to support such transitions with clarity and foresight.",
  //     "Through Valuation, Strategic Advisory, ESG, Governance Risk & Compliance, and Succession Planning, we help organisations strengthen foundations, manage uncertainties, and prepare thoughtfully for the future.",
  //   ],
  // },
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

export const BOTTOM_POINTS = [
  {
    text: "Integrated approach",
    icon: HiOutlinePuzzlePiece,
    gradient: "from-[#6FAF9B] to-[#289572]",
    image: "https://i.ytimg.com/vi/ELmI0cXPcWg/maxresdefault.jpg",
  },
  {
    text: "Industry-focused delivery",
    icon: HiOutlineBuildingOffice2,
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    image: "https://www.shutterstock.com/image-photo/expert-woman-asian-people-discuss-600nw-2644672529.jpg",
  },
  {
    text: "Insight-driven decisions",
    icon: HiOutlineChartBar,
    gradient: "from-[#F59E0B] to-[#C2A96A]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaldbIDJVN_ZK2zICQtQG3PfbSmfr-2BerWg&s",
  },
  {
    text: "Partner-led execution",
    icon: HiOutlineUserGroup,
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfJ-QmDcnFNaIYvKq6jNrkW0WSIu0_5fGMw&s",
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
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5a6f6bfbd55b4125e5d8169b/1532366196509-7ROUHLAKCU2YOYGQAOZI/1200x800-placeholder.jpg)`,
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

          <p className="mt-6 text-white text-xl">
            Delivering clarity, precision, and strategic insight across every engagement.
          </p>
        </motion.div>
      </section>

      <div className="relative   py-10 px-6 bg-transparent overflow-hidden ">

        {/* ================= FLOATING BG GLOW ================= */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-[#6FAF9B]/20 blur-[120px] rounded-full" /> */}
        {/* <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C2A96A]/20 blur-[120px] rounded-full" /> */}

        {/* ================= BOTTOM POINTS ================= */}
  <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">

  {BOTTOM_POINTS.map((point, i) => {
    const Icon = point.icon;

    return (
      <div
        key={i}
        className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md"
      >
        {/* 🖼️ IMAGE */}
        <img
          src={point.image}
          className="w-full h-[260px] object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* 🌑 DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

        {/* 📝 DEFAULT TEXT */}
        <div className="absolute bottom-4 left-4 z-10 transition-all duration-500 group-hover:opacity-0">
          <p className="text-white text-xl font-bold">
            {point.text}
          </p>
        </div>

        {/* 💎 HOVER PANEL (FROM RIGHT + BOTTOM) */}
        <div
          className="
            absolute bottom-0 right-0 w-[85%] 
            translate-x-full translate-y-full 
            group-hover:translate-x-0 group-hover:translate-y-0
            transition-all duration-500 ease-out z-20
          "
        >
          <div className="bg-white px-5  rounded-tl-md   py-10 shadow-2xl relative">

            {/* GOLD BORDER TOP */}
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 rounded-tl-2xl" />

            {/* ICON + TITLE */}
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <span className="p-2 rounded-lg bg-gray-100">
                <Icon className="w-5 h-5 text-gray-700" />
              </span>
              {point.text}
            </h3>



          </div>
        </div>

      </div>
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
            <p className="text-2xl uppercase font-bold tracking-[0.2em] text-[#6FAF9B]">
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
                className="group relative rounded-lg overflow-hidden border border-black/20 shadow-gray-500 bg-white shadow-lg hover:shadow-xl transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-[#289572] transition">
                    {service.subtitle}
                  </h4>

                  <p className="mt-4 text-md text-gray-900">
                    {service.paragraphs[0]}
                  </p>

                  <p className="mt-2 text-md text-gray-900">
                    {service.paragraphs[1]}
                  </p>
                  <p className="mt-2 text-md text-gray-900">
                    {service.paragraphs[2]}
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