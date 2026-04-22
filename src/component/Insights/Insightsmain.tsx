import imgArticles from "/src/assets/ofcimages/8.jpeg"
import imgRegulatory from "/src/assets/ofcimages/1.jpeg"
import imgThought from "/src/assets/ofcimages/20.jpeg"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mca from "../../assets/mcalogo.png";
import { ArrowRight } from "lucide-react";

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
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://behaveglobal.com/wp-content/uploads/2023/10/insight-driven-marketing-banner.png)` }} />
                <div className="absolute inset-0 bg-[#1C1C1C]/70" />
                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <div className="max-w-3xl text-center text-white">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] md:text-5xl font-semibold text-[#C2A96A]">
                                Our Insights
                            </h1>
                            <p className=" text-2xl font-semibold mt-5">Publications & Regulatory</p>

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <div className="mx-auto max-w-7xl px-4 ">

                <motion.section
                    ref={ref}
                    className="relative py-8 md:py-10 \ max-w-7xl mx-auto overflow-hidden"
                >
                    {/* 🌈 Background */}
                    <div className="absolute inset-0 -z-20 bg-linear-to-br from-slate-50 via-white to-slate-100" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-300/20 blur-[120px] rounded-full" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* 🧠 LEFT CONTENT */}
                        <motion.div style={{ y: textY }} className="flex flex-col gap-8">

                            {/* Tag */}


                            {/* Heading */}
                            <h2 className="text-4xl md:text-6xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-semibold text-slate-900 leading-tight">
                                Articles &
                                <br />
                                <span className="text-green-900 italic font-serif">
                                    Publications
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-slate-600 text-lg text-justify leading-relaxed max-w-lg">
                                {insightCards[0].description}
                            </p>

                            {/* CTA */}
                            <motion.button
                                whileHover={{ scale: 1.10 }}
                                whileTap={{ scale: 0.90 }}
                                className="group flex items-center gap-4 bg-slate-900 text-white px-6 py-4 rounded-xl w-fit transition-all duration-300 hover:bg-green-900  shadow-lg"
                            >
                                Explore Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                        </motion.div>

                        {/* 🎯 RIGHT VISUAL (FLOATING STACK) */}
                        <motion.div
                            style={{ y: imgY }}
                            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
                        >
                            {/* Main Image */}
                            <div className="absolute w-full h-[75%] shadow-black  overflow-hidden shadow-2xl">
                                <img
                                    src="https://thewritelife.com/wp-content/uploads/2019/07/get-paid-to-write-articles.jpg"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                       


                        </motion.div>

                    </div>
                </motion.section>

                {/* 🔥 CARD 2 UPDATED */}

                <motion.article className="   rounded-xl overflow-hidden">
                    {/* LEFT */}

                    <div className="w-full  text-center  mb-8">
                        <h1 className="text-5xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold pb-5 text-center  tracking-widest text-[#C2A96A] ">
                            Key Authorities
                        </h1>
                        <p className="text-black text-xl font-semibold">
                            {insightCards[1].description}
                        </p>
                    </div>
                    {/* 🔥 RIGHT LOGO GRID */}
                    <div className="w-full bg-[#F7F9F8] pb-15 px-5 lg:px-0 relative z-10 overflow-hidden">
                        {/* Background Glows */}
                        <div className="absolute top-10 left-10 w-72 h-72 bg-[#6FAF9B]/20 blur-[120px] rounded-full" />
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C2A96A]/20 blur-[120px] rounded-full" />

                        <div className="max-w-7xl py-10 px-3  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
                                    className="relative group p-0.5 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden transition-all duration-500"
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

            </div>
        </main>

    )
}

export default InsightsMain