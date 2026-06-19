import img_collage_movie_variou_edac1d26 from "/src/assets/images/collage-movie-variou_edac1d26.jpg";
import img_Collage_KUM_f3963227 from "/src/assets/images/Collage-KUM_f3963227.jpg";
import img_collage_64a13bf7 from "/src/assets/images/collage_64a13bf7.webp";
import img_img_f46dad33 from "/src/assets/images/img_f46dad33.jpg";
import img_img_bac95c89 from "/src/assets/images/img_bac95c89.jpg";
import img_img_2bc8359e from "/src/assets/images/img_2bc8359e.jpg";
import img_img_9936dc9e from "/src/assets/images/img_9936dc9e.jpg";
import img_img_fa481680 from "/src/assets/images/img_fa481680.jpg";
import img_img_f4c3a1b6 from "/src/assets/images/img_f4c3a1b6.jpg";
import img_img_9e0d639b from "/src/assets/images/img_9e0d639b.jpg";
import img_img_c615ff8d from "/src/assets/images/img_c615ff8d.jpg";
import img_img_f6e23852 from "/src/assets/images/img_f6e23852.jpg";
import img_img_11fb8a46 from "/src/assets/images/img_11fb8a46.jpg";
import img_img_bfa184fd from "/src/assets/images/img_bfa184fd.jpg";
import img_cd028ec0_0590_4918_b_5725fb88 from "/src/assets/images/cd028ec0-0590-4918-b_5725fb88.png";
import img_img_95d9b7e0 from "/src/assets/images/img_95d9b7e0.jpg";
import img_img_e5b2d05f from "/src/assets/images/img_e5b2d05f.jpg";
import img_img_d4571e8c from "/src/assets/images/img_d4571e8c.jpg";
import img_damil_gettyimages_48_baa5df60 from "/src/assets/images/damil-gettyimages-48_baa5df60.jpg";
import img_img_4d388424 from "/src/assets/images/img_4d388424.jpg";
import img_img_20bc162b from "/src/assets/images/img_20bc162b.jpg";
import img_biggest_oil_and_gas__2674ad54 from "/src/assets/images/biggest_oil_and_gas__2674ad54.jpg";
import img_img_bdf0b7c2 from "/src/assets/images/img_bdf0b7c2.jpg";
import img_img_4eea6e87 from "/src/assets/images/img_4eea6e87.jpg";
import img_img_d4a20e9c from "/src/assets/images/img_d4a20e9c.jpg";
import img_img_5813ef3f from "/src/assets/images/img_5813ef3f.jpg";
import img_advisory_guidelines__23aba7cf from "/src/assets/images/advisory-guidelines-_23aba7cf.png";
import img_img_19011ed0 from "/src/assets/images/img_19011ed0.jpg";
import img_img_64770f73 from "/src/assets/images/img_64770f73.jpg";
import img_1768565449gfdsgsdghf_72e09e4e from "/src/assets/images/1768565449gfdsgsdghf_72e09e4e.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    img_collage_movie_variou_edac1d26,
    img_Collage_KUM_f3963227,
    img_collage_64a13bf7
];

const CATEGORIES = [
    {
        title: "Aviation",
        img: img_img_f46dad33,
        desc: "Fleet financing, safety compliance, and operational advisory for airlines and cargo operations."
    },
    {
        title: "Agriculture",
        img: img_img_bac95c89,
        desc: "Modernizing agribusiness with sustainable financing and yield-focused advisory."
    },
    {
        title: "Automotive",
        img: img_img_2bc8359e,
        desc: "Navigating the shift toward electric vehicles and autonomous driving technology."
    },
    {
        title: "Banking & Financial Services",
        img: img_img_9936dc9e,
        desc: "Structural clarity for property development, REITs, and commercial asset management."
    },
    {
        title: "Construction",
        img: img_img_fa481680,
        desc: "Project cost controls and risk mitigation for infrastructure and civil engineering."
    },
    {
        title: "Chemicals",
        img: img_img_f4c3a1b6,
        desc: "Regulatory safety standards and operational efficiency for chemical processing and distribution."
    },
    {
        title: "Education",
        img: img_img_9e0d639b,
        desc: "Institutional growth and financial planning for universities and private learning centers."
    },
    {
        title: "Food & Beverage",
        img: img_img_c615ff8d,
        desc: "Scale-up advisory for restaurants, franchises, and food production companies."
    },
    {
        title: "Healthcare",
        img: img_img_f6e23852,
        desc: "Financial strategies for hospitals and clinics to improve patient care infrastructure."
    },

    {
        title: "Hospitality",
        img: img_img_11fb8a46,
        desc: "Operational advisory for luxury hotels, resorts, and global tourism ventures."
    },
    {
        title: "Information Technology",
        img: img_img_bfa184fd
    },
    {
        title: "Jewellery",
        img: img_cd028ec0_0590_4918_b_5725fb88,
        desc: "Precision-led advisory for high-value luxury and gems, focusing on valuation and global compliance."
    },
    {
        title: "Logistics",
        img: img_img_95d9b7e0,
        desc: "Enhancing global distribution networks with smart warehousing and transportation strategy."
    },
    {
        title: "Manufacturing",
        img: img_img_e5b2d05f,
        desc: "Optimizing supply chain efficiency and cost management for large-scale industrial production."
    },

    {
        title: "Media & Entertainment",
        img: img_img_d4571e8c,
        desc: "Content distribution rights, production tax credits, and digital media expansion."
    },
    {
        title: "Mining & Metals",
        img: img_damil_gettyimages_48_baa5df60,
        desc: "Advising on natural resource extraction and global commodity market trends."
    },
    {
        title: "Non Profit Organisations",
        img: img_img_4d388424
    },
    {
        title: "Non Banking Financial Company",
        img: img_img_20bc162b,
        desc: "Assisting fintech, banking, and insurance firms with risk management and compliance."
    },

    {
        title: "Oil & Gas",
        img: img_biggest_oil_and_gas__2674ad54,
        desc: ""

    },
    {
        title: "Pharmaceutical",
        img: img_img_bdf0b7c2,
        desc: "Navigating regulatory landscapes and R&D tax credits for life sciences and biotech sectors."
    },

    {
        title: "Power",
        img: img_img_4eea6e87
    },
    {
        title: "Retail & E-commerce",
        img: img_img_d4a20e9c,
        desc: "Digital transformation and fiscal management for modern retail and direct-to-consumer brands."
    },
    {
        title: "Renewable Energy",
        img: img_img_5813ef3f,
        desc: "Sustainable investment and regulatory support for solar, wind, and green energy projects."
    },


    {
        title: "Real Estate",
        img: img_advisory_guidelines__23aba7cf
    },
    {
        title: "Technology",
        img: img_img_19011ed0,
        desc: "Future-ready guidance for SaaS, IT infrastructure, and innovative tech enterprises."
    },
    {
        title: "Textiles & Fashion",
        img: img_img_64770f73,
        desc: "Strategic sourcing and retail expansion for global apparel and designer labels."
    },

    {
        title: "Telecom",
        img: img_1768565449gfdsgsdghf_72e09e4e,
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
                        className="text-white font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold text-3xl md:text-4xl lg:text-6xl "
                    >
                        Understanding Business, <br />
                        <span className=" text-[#C2A96A] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">Beyond Numbers</span>
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
                                ? "bg-[#19603B] text-white shadow-lg"
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
                                    ? "bg-[#19603B] text-white shadow-lg"
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
                          
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] text-black font-serif leading-snug max-w-2xl mb-5">
                                Our   <span className=" text-black"> Presence</span>
                            </h2>
                            <div className="w-20 h-[3px] bg-[#C2A96A] mb-5" />
                            <div className="space-y-6">
                                <p className="text-lg text-gray-950 text-justify leading-relaxed font-light">
                                    Every industry carries its own rhythm, its own set of risks, regulations, and opportunities. Our experience across diverse sectors has taught us that effective advice is never generic; it is shaped by context, informed by nuance, and delivered with an appreciation of the realities each industry presents.
                                </p>
                            </div>
                            <div className="max-w-5xl mx-auto my-5 px-4 py-6  relative">
                                {/* Decorative corner brackets for a unique look */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-[#C2A96A]" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-[#C2A96A]" />

                                <div className="text-center px-4">
                                    <p className="text-[#1C1C1C] text-xl text-justify md:text-2xl  font-light leading-relaxed tracking-tight">
                                        Our approach is not to merely understand the industry,
                                        but to understand your position within it
                                        and to provide guidance that is both practical and forward-looking.
                                    </p>
                                </div>
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
                                <div className="w-full md:w-[220px] shadow-xl shadow-[#19603B]/20 h-[150px] shrink-0 overflow-hidden rounded-lg group-hover:shadow-[0_40px_90px_rgba(194,169,106,0.2)] transition-shadow duration-500">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full  object-cover transition-transform duration-700 grayscale-100 group-hover:grayscale-0"
                                    />
                                </div>

                                {/* CONTENT AREA */}
                                <div className=" py-10 justify-center  items-center">
                                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-[#1C1C1C] group-hover:text-[#C2A96A] transition-colors duration-300 mb-3">
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

        </div>
    );
};


export default IndustryPage;