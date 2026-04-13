import { motion } from "framer-motion"
import industryHero from "../../assets/24.jpeg"
import {
    HiOutlineBeaker,
    HiOutlineAcademicCap,
    HiOutlineFire,
    HiOutlineTruck,
    HiOutlineHeart,
    HiOutlineUserGroup,
    HiOutlineHomeModern,
    HiOutlineBolt,
    HiOutlineChartBar,
    HiOutlineSignal,
    HiOutlineCube,
    HiOutlineFilm,
    HiOutlineCpuChip,
    HiOutlineWrenchScrewdriver,
    HiOutlineBanknotes,
    HiOutlineScale,
    HiOutlineSquares2X2,
    HiOutlineBuildingOffice2,
} from "react-icons/hi2"
import { HiOutlineTrendingUp } from "react-icons/hi"
import { GiDiamondRing, GiMining } from "react-icons/gi"
import { FaIndustry } from "react-icons/fa6"
const IVORY = "#F7F9F8"
const CHARCOAL = "#1C1C1C"
const ACCENT = "#6FAF9B"
const GOLD = "#C2A96A"
const CATEGORIES = [
  { title: "Jewellery", icon: GiDiamondRing, desc: "Providing precision-led advisory for the high-value luxury and gems sector." },

  { title: "Pharmaceutical", icon: HiOutlineBeaker, desc: "Navigating complex regulatory landscapes for the life sciences industry." },

  { title: "Education", icon: HiOutlineAcademicCap, desc: "Supporting institutional growth and compliance in the academic sector." },

  { title: "Petroleum", icon: HiOutlineFire, desc: "Strategic depth for energy and natural resource management." },

  // 🔄 CHANGED (Better industrial feel)
  { title: "Industrial & Construction", icon: FaIndustry, desc: "Building strong financial foundations for infrastructure and heavy industry." },

  { title: "Auto Ancillary", icon: HiOutlineTruck, desc: "Driving efficiency in the automotive supply chain and manufacturing." },

  { title: "Healthcare", icon: HiOutlineHeart, desc: "Reliable guidance for healthcare providers and medical institutions." },

  { title: "Recruitment", icon: HiOutlineUserGroup, desc: "Professional services for the human capital and staffing industry." },

  // 🔄 OPTIONAL IMPROVEMENT
  { title: "Hospitality", icon: HiOutlineHomeModern, desc: "Optimizing operations and growth for the travel and leisure sector." },
  // (If you want better: FaHotel)

  { title: "Power", icon: HiOutlineBolt, desc: "Insight-driven decision support for the utility and energy grid." },

  // 🔄 CHANGED (Much more relevant)
  { title: "Textiles", icon: HiOutlineSquares2X2, desc: "Traditional values meeting modern commerce in the textile industry." },

  // ⚠️ DUPLICATE FIX (avoid same icon as Industrial)
  { title: "Real Estate", icon: HiOutlineHomeModern, desc: "Structural clarity for property development and management." },

  { title: "Stock", icon: HiOutlineChartBar, desc: "Expert advisory for equity markets and financial instruments." },

  { title: "Growth", icon: HiOutlineTrendingUp, desc: "Scaling strategies for emerging businesses and startups." },

  { title: "Telecom", icon: HiOutlineSignal, desc: "Connecting digital foresight with regulatory compliance." },

  { title: "Logistics", icon: HiOutlineCube, desc: "Streamlining complex supply chains and global distribution." },

  { title: "Media", icon: HiOutlineFilm, desc: "Strategic advisory for the evolving broadcasting and digital media world." },

  { title: "Technology", icon: HiOutlineCpuChip, desc: "Future-ready guidance for IT and innovative tech enterprises." },

  { title: "Engineering", icon: HiOutlineWrenchScrewdriver, desc: "Precision advisory for complex engineering and R&D operations." },

  // ✅ GOOD (keep this)
  { title: "Mining", icon: GiMining, desc: "Resource management and compliance for the extractive industries." },

  { title: "Banks & Financial Services", icon: HiOutlineBanknotes, desc: "Institutional-grade assurance for the financial heart of the economy." },

  { title: "Legal", icon: HiOutlineScale, desc: "Supporting legal practices with specialized financial and tax advisory." },

  { title: "Infrastructure", icon: HiOutlineBuildingOffice2, desc: "Long-term strategic support for nation-building projects." },
];

const IndustryPage = () => {
    return (
        <div className="bg-white" style={{ color: CHARCOAL }}>
            {/* Hero Section */}
            <section className="relative h-150 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-fixed"
                    style={{
                        backgroundImage: `url(${industryHero})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gold font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: GOLD }}>
                            Expertise by sector
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Industry Experience
                        </h1>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                                Every industry carries its own rhythm, its own set of risks, regulations, and opportunities.
                                Our experience across diverse sectors has taught us that effective advice is never generic;
                                it is shaped by context, informed by nuance, and delivered with an appreciation of the realities each industry presents.
                            </p>
                            <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
                                Our approach is not to merely understand the industry, but to understand your position within it
                                and to provide guidance that is both practical and forward-looking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Industry Sections - 23 Compact Boxes */}
            <section className="py-16 md:py-24" style={{ backgroundColor: IVORY }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold mb-3 tracking-tight">Industries We Serve</h2>
                        <div className="h-1 w-16 bg-accent mx-auto" style={{ backgroundColor: ACCENT }} />
                    </div>

                    <div className="space-y-6">
                        {CATEGORIES.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10px" }}
                                    transition={{ duration: 0.4 }}
                                    className="group bg-white rounded-xl overflow-hidden shadow-sm border border-charcoal/5 hover:border-gold/30 hover:shadow-md transition-all duration-300 max-w-7xl mx-auto"
                                >
                                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} min-h-60`}>
                                        {/* Image - 30% width */}
                                        <div className="w-[30%] flex items-center justify-center h-60">
                                            <div className=" flex items-center justify-center rounded-2xl  transition">
                                                <IconComponent className="w-28 h-28 text-[#6FAF9B]" />
                                            </div>
                                        </div>

                                        {/* Content - 70% */}
                                        <div className="w-[70%] px-8 md:px-16 flex items-center justify-between gap-8">
                                            <div className="flex items-center gap-6">
                                                <p className="text-gold font-bold text-[18px]" style={{ color: GOLD }}>
                                                    {String(index + 1).padStart(2, '0')}
                                                </p>
                                                <h3 className="text-[16px] md:text-[24px] font-bold tracking-tight text-[#1C1C1C] group-hover:text-gold transition-colors">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="hidden md:block text-charcoal/50 text-[20px] font-light italic truncate max-w-[50%]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer Quote */}
            <section className="py-20 bg-white border-t border-gold/10" style={{ borderColor: `${GOLD}1a` }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-lg text-charcoal/60 font-light italic leading-relaxed">
                        "Effective advice is never generic; it is shaped by context, informed by nuance, and delivered with appreciation."
                    </p>
                </div>
            </section>
        </div>
    )
}

export default IndustryPage
