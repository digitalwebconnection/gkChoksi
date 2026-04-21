import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const images = [
    "https://www.shutterstock.com/image-photo/collage-movie-various-field-technology-600nw-2491000037.jpg",
    "https://print-packagingblog.com/wp-content/uploads/2014/11/Collage-KUM.jpg",
    "https://astromachineworks.com/wp-content/uploads/collage.webp"
];


const CATEGORIES = [
    {
        title: "Aviation",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=800",
        desc: "Fleet financing, safety compliance, and operational advisory for airlines and cargo operations."
    },
    {
        title: "Agriculture",
        img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800",
        desc: "Modernizing agribusiness with sustainable financing and yield-focused advisory."
    },
    {
        title: "Automotive",
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800",
        desc: "Navigating the shift toward electric vehicles and autonomous driving technology."
    },
    {
        title: "Banking and Financial Services",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        desc: "Structural clarity for property development, REITs, and commercial asset management."
    },
    {
        title: "Construction",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
        desc: "Project cost controls and risk mitigation for infrastructure and civil engineering."
    },
    {
        title: "Chemicals",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGHA0xxdgMeIWGtLcbVc_uJC6neGaPPwYiQ&s",
        desc: "Regulatory safety standards and operational efficiency for chemical processing and distribution."
    },
    {
        title: "Education",
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800",
        desc: "Institutional growth and financial planning for universities and private learning centers."
    },
    {
        title: "Food & Beverage",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
        desc: "Scale-up advisory for restaurants, franchises, and food production companies."
    },
    {
        title: "Healthcare",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
        desc: "Financial strategies for hospitals and clinics to improve patient care infrastructure."
    },

    {
        title: "Hospitality",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
        desc: "Operational advisory for luxury hotels, resorts, and global tourism ventures."
    },
    {
        title: "Information Technology",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6dZPg4YEdyqoY84XgTp6Nqe2dHrHTOfYrw&s"
    },
    {
        title: "Jewellery",
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800",
        desc: "Precision-led advisory for high-value luxury and gems, focusing on valuation and global compliance."
    },
    {
        title: "Logistics",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
        desc: "Enhancing global distribution networks with smart warehousing and transportation strategy."
    },
    {
        title: "Manufacturing",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
        desc: "Optimizing supply chain efficiency and cost management for large-scale industrial production."
    },

    {
        title: "Media & Entertainment",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
        desc: "Content distribution rights, production tax credits, and digital media expansion."
    },
    {
        title: "Mining & Metals",
        img: "https://www.pwc.com/gx/en/brand-simplified/teaser-images-670/industry-engineering/damil-gettyimages-482172505-670.jpg",
        desc: "Advising on natural resource extraction and global commodity market trends."
    },
    {
        title: "Non Profit Organisations",
        img: "https://media.licdn.com/dms/image/v2/C4E1BAQHBGhQrGXZHWQ/company-background_10000/company-background_10000/0/1585351065817/non_profit_organization_cover?e=2147483647&v=beta&t=a39S6iuYXM1_q8fPu-q15WPw-5X-xThdGhW44dG-DIQ"
    },
    {
        title: "Non Banking Financial Company",
        img: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=800",
        desc: "Assisting fintech, banking, and insurance firms with risk management and compliance."
    },
    {
        title: "Non-Profit",
        img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800",
        desc: "Governance and audit services for social impact and charitable organizations."
    },
    {
        title: "Oil & Gas",
        img: "https://eco-cdn.iqpc.com/eco/images/channel_content/images/biggest_oil_and_gas_companies.jpg",
        desc: ""

    },
    {
        title: "Pharmaceutical",
        img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800",
        desc: "Navigating regulatory landscapes and R&D tax credits for life sciences and biotech sectors."
    },

    {
        title: "Power",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCr4TIw5arojkhkB73UR1YRQLf5XUWM9-TA&s"
    },
    {
        title: "Retail & E-commerce",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
        desc: "Digital transformation and fiscal management for modern retail and direct-to-consumer brands."
    },
    {
        title: "Renewable Energy",
        img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800",
        desc: "Sustainable investment and regulatory support for solar, wind, and green energy projects."
    },


    {
        title: "Real Estate",
        img: "https://www.adanirealty.com/-/media/project/realty/blogs/blog-images-30-july/advisory-guidelines-for-real-estate-sector-by-government.ashx"
    },
    {
        title: "Technology",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
        desc: "Future-ready guidance for SaaS, IT infrastructure, and innovative tech enterprises."
    },
    {
        title: "Textiles & Fashion",
        img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800",
        desc: "Strategic sourcing and retail expansion for global apparel and designer labels."
    },

    {
        title: "Telecom",
        img: "https://bureaucrat.news/assets/news/1768565449gfdsgsdghfgh.jpg",
        desc: "Connectivity infrastructure and strategic market positioning for regional and global carriers."
    },

];

const INDUSTRY_MODULES = [
    {
        module: "Finance",
        industries: [
            "Banking and Financial Services",
            "Non Banking Financial Company",
        ],
    },
    {
        module: "Industrial",
        industries: [
            "Automotive",
            
            "Chemicals",
            "Construction",
            "Mining & Metals",
            "Oil & Gas",
            "Pharmaceutical",
            "Power",
            "Renewable Energy",
            "Textile & Fashion",
        ],
    },

    {
        module: "Technology",
        industries: [
            "Information Technology",
            "Telecom",
        ],
    },

    {
        module: "Retail",
        industries: [
            "Jewellery",
            "Retail & E-commerce",
        ],
    },


    {
        module: "Services",
        industries: [
            "Agriculture",
            "Aviation",
            "Education",
            "Food & Beverages",
            "Healthcare",
            "Hospitality",
            "Logistics",
            "Media & Entertainment",
            "Non Profit Organisations",
            "Real Estate",
        ],
    },
];

const IndustryPage = () => {

    const [index, setIndex] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("All");

    // Auto change background every 4 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-[#FBFBFB] font-sans selection:bg-[#C2A96A] selection:text-white">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">

                {/* Background Animation */}
                <AnimatePresence>
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.5, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[index]})` }}
                    />
                </AnimatePresence>
                {/* ✅ Dark Overlay (FIXED POSITION) */}
                <div className="absolute inset-0 bg-black/50 z-1" />

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#C2A96A] drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold text-3xl md:text-5xl  tracking-wide"
                    >
                        Understanding Business, <br />
                        <span className=" text-white">Beyond Numbers</span>
                    </motion.h1>

                </div>
            </section>

            {/* --- FILTER BUTTONS SECTION --- */}
            <section className="bg-white py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setSelectedFilter("All")}
                            className={`px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${selectedFilter === "All"
                                ? "bg-[#9e7201] text-white shadow-lg"
                                : "bg-gray-100 text-[#1C1C1C] hover:bg-gray-900"
                                }`}
                        >
                            All
                        </button>
                        {INDUSTRY_MODULES.map((module) => (
                            <button
                                key={module.module}
                                onClick={() => setSelectedFilter(module.module)}
                                className={`px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${selectedFilter === module.module
                                    ? "bg-[#C2A96A] text-white shadow-lg"
                                    : "bg-gray-100 text-[#1C1C1C] hover:bg-gray-200"
                                    }`}
                            >
                                {module.module}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <section className="max-w-[1440px] mx-auto px-6 py-10 lg:py-22">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* LEFT: STATIC CONTENT */}
                    <aside className="w-full lg:w-[40%]">
                        <div className="lg:sticky lg:top-32 pr-4 lg:pr-12">
                            <span className="text-[#583f05] font-bold tracking-[0.2em] text-xl uppercase block mb-6">
                                Specialized Advisory
                            </span>
                            <h2 className="text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] lg:text-5xl font-bold text-[#1C1C1C] leading-[0.9] mb-10">
                                Our   <span className="text-green-900">Presence</span>
                            </h2>
                            <div className="w-20 h-[3px] bg-[#C2A96A] mb-10" />
                            <div className="space-y-6">
                                <p className="text-lg text-gray-900 text-justify leading-relaxed font-light">
                                    Every industry carries its own rhythm, its own set of risks, regulations, and opportunities. Our experience across diverse sectors has taught us that effective advice is never generic; it is shaped by context, informed by nuance, and delivered with an appreciation of the realities each industry presents.
                                </p>
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT: SCROLLING ITEMS (No Numbers) */}
                    <main className="w-full lg:w-[60%] space-y-16">
                        {CATEGORIES.filter((item) => {
                            if (selectedFilter === "All") return true;
                            const module = INDUSTRY_MODULES.find(m => m.module === selectedFilter);
                            return module?.industries.includes(item.title);
                        }).map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="group flex flex-col md:flex-row gap-8 items-start border-b border-gray-800/40 pb-12"
                            >
                                {/* IMAGE WITH SHADOW */}
                                <div className="w-full md:w-[220px] h-[150px] shrink-0 overflow-hidden rounded-lg shadow-[0_20px_50px_rgba(10,19,106,0.2)] group-hover:shadow-[0_40px_90px_rgba(194,169,106,0.2)] transition-shadow duration-500">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 grayscale-100 group-hover:grayscale-0"
                                    />
                                </div>

                                {/* CONTENT AREA */}
                                <div className=" py-10 justify-center  items-center">
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#1C1C1C] group-hover:text-[#C2A96A] transition-colors duration-300 mb-3">
                                        {item.title}
                                    </h3>

                                    {/* <p className="text-gray-500 text-justify text-sm md:text-base leading-relaxed font-light">
                                        {item.desc}
                                    </p> */}

                                    <motion.div
                                        className="h-px bg-[#C2A96A] mt-6 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ delay: 0.2, duration: 0.8 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </main>
                </div>
            </section>
            <div className="max-w-5xl mx-auto my-5 px-8 py-10 border-t border-b border-gray-200 relative">
                {/* Decorative corner brackets for a unique look */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C2A96A]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C2A96A]" />

                <div className="text-center px-4">
                    <p className="text-[#1C1C1C] text-xl md:text-2xl text-center font-light leading-relaxed tracking-tight">
                        Our approach is not to merely understand the industry,
                        but to understand your position within it
                        and to provide guidance that is both practical and forward-looking.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default IndustryPage;