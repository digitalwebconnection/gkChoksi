
import heroImg from "/src/assets/25.jpg"
import imgArticles from "/src/assets/8.jpeg"
import imgRegulatory from "/src/assets/1.jpeg"
import imgThought from "/src/assets/20.jpeg"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mca from "../../assets/mcalogo.png";


const insightCards = [
    {
        image: imgArticles,
        title: "Articles / Publications",
        subtitle: "Write Up of CAs & Articles to be Published here",
        description:
            "Our publications reflect the collective experience and thoughts of our team, where complex matters are distilled into clear write ups, shared to offer guidance that resonates with the challenges and aspirations of those who read them.",
    },
    {
        image: imgRegulatory,
        title: "Regulatory Updates",
        subtitle: "Stay aligned with key governing authorities",
        description:
            "Access essential regulatory platforms that shape compliance, reporting, and financial governance in India.",

        // ✅ NEW LOGO DATA (ICAI FIRST)
        portals: [
            {
                name: "ICAI",
                logo: "https://cdnicai.s3.ap-south-1.amazonaws.com/images/New%20folder/logo-icai1.png",
                href: "https://www.icai.org"
            },
            {
                name: "CBDT",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_of_Income_Tax_Department_India.png",
                href: "https://www.incometax.gov.in"
            },
            {
                name: "CBIC",
                logo: "https://www.cbic.gov.in/content/images/CBIC_logo.png",
                href: "https://www.cbic.gov.in"
            },

            {
                name: "MCA",
                logo: mca,
                href: "https://www.mca.gov.in"
            },
            {
                name: "SEBI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Securities_Exchange_Board_of_India.jpg",
                href: "https://www.sebi.gov.in"
            }
        ]
    },
    {
        image: imgThought,
        title: "Thought Leadership",
        subtitle: "Photos of Activities & Achievements & Milestones given here",
        description:
            "Alongside our professional work, we share moments of reflection and celebration marking milestones, achievements, and occasions that shape our journey.",
    },
]

const InsightsMain: React.FC = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effects: Image moves down, Text moves up
    const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <main className="relative overflow-hidden bg-[#F7F9F8] text-[#1C1C1C]">

            {/* HERO */}
            <section className="relative h-150 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
                <div className="absolute inset-0 bg-[#1C1C1C]/70" />
                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <div className="max-w-3xl text-center text-white">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="text-3xl md:text-5xl font-semibold text-[#f5b20b]">
                                Our Insights
                            </h1>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <div className="mx-auto max-w-7xl px-4 pb-32 pt-20">
                <h2 className=" text-5xl text-center pb-15 font-bold">Articles & Publications</h2>
                <section className="space-y-24">

                    <motion.article
                        ref={ref}
                        className="relative flex flex-col lg:flex-row items-center justify-center py-20"
                    >
                        {/* 1. LARGE IMAGE CONTAINER */}
                        <div className="relative w-full lg:w-9/12 h-[500px] md:h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl">
                            <motion.img
                                style={{ scale: 1.1, y: imgY }}
                                src={insightCards[0].image}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Dark subtle overlay for depth */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
                        </div>

                        {/* 2. FLOATING TEXT CARD */}
                        <motion.div
                            style={{ y: textY }}
                            className="relative z-10 w-[82%] lg:w-5/12 bg-white p-6 md:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.12)] rounded-xl -mt-20 lg:mt-0 lg:-ml-40 border border-slate-50"
                        >
                            <p className="text-gray-900 text-lg leading-relaxed mb-10 font-light">
                                {insightCards[0].description}
                            </p>


                        </motion.div>


                    </motion.article>

                    {/* 🔥 CARD 2 UPDATED */}

                    <motion.article className="   rounded-xl overflow-hidden">
                        {/* LEFT */}

                        <div className="w-full  text-center mb-8">
                            <p className="text-lg font-semibold text-center uppercase tracking-widest text-[#533f0c] ">
                                Key Authorities
                            </p>
                            <p className="text-black text-xl font-semibold">
                                {insightCards[1].description}
                            </p>
                        </div>
                        {/* 🔥 RIGHT LOGO GRID */}
                        <div className="w-full bg-[#F7F9F8] py-12 px-5 lg:px-0 relative z-10 overflow-hidden">
                            {/* Background Glows */}
                            <div className="absolute top-10 left-10 w-72 h-72 bg-[#6FAF9B]/20 blur-[120px] rounded-full" />
                            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C2A96A]/20 blur-[120px] rounded-full" />

                            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                                {insightCards[1].portals?.map((item, i) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover="hovered" // Trigger child animations
                                        className="relative group p-0.5 rounded-2xl overflow-hidden transition-all duration-500"
                                    >
                                        {/* THE GRADIENT BORDER EFFECT */}
                                        {/* This div acts as the moving gradient border */}
                                        <div className="absolute inset-0 bg-gray-200 transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-[#6FAF9B] group-hover:to-[#C2A96A]" />

                                        {/* Animated Inner Border "Rounding" effect */}
                                        <motion.div
                                            variants={{
                                                hovered: { scale: 1.02, rotate: 2 }
                                            }}
                                            className="absolute inset-0 bg-linear-to-tr from-[#6FAF9B] to-[#C2A96A] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                                        />

                                        {/* Card Content */}
                                        <div className="relative z-10 bg-white rounded-[calc(1rem-1px)] h-full p-8 flex flex-col items-center justify-center transition-all duration-500 group-hover:rounded-xl">

                                            {/* Logo Container */}
                                            <motion.div
                                                className="h-44 flex items-center justify-center mb-6"
                                                variants={{
                                                    hovered: { y: -10 }
                                                }}
                                            >
                                                <img
                                                    src={item.logo}
                                                    alt={item.name}
                                                    className="h-45 object-contain filter  transition-all duration-500"
                                                />
                                            </motion.div>

                                            {/* Name */}
                                            <span className="block text-xl font-bold text-[#1C1C1C] group-hover:text-[#1F6F5B] transition-colors duration-300">
                                                {item.name}
                                            </span>

                                            {/* Decorative Gradient Line */}
                                            <div className="mt-4 h-1 w-0 bg-linear-to-r from-[#6FAF9B] to-[#C2A96A] group-hover:w-16 transition-all duration-500 rounded-full" />

                                            {/* Subtle Shine Effect on Hover */}
                                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Add this to your Global CSS or Tailwind Config for the Shine effect */}



                    </motion.article>

                </section>
            </div>
        </main>

    )
}

export default InsightsMain