import React, { useState } from "react"
import { motion } from "framer-motion"
import heroImg from "/src/assets/25.jpg"
import imgArticles from "/src/assets/8.jpeg"
import imgRegulatory from "/src/assets/1.jpeg"
import imgThought from "/src/assets/20.jpeg"

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
        subtitle: "Links to MCA website, CBIC website, ICAI website, CBDT website, SEBI website",
        description:
            "We provide curated access to key government and regulatory platforms, bringing together reliable sources in one place, so that information remains clear, current, and accessible with ease.",
        links: [
            { label: "MCA website", href: "https://www.mca.gov.in" },
            { label: "CBIC website", href: "https://www.cbic.gov.in" },
            { label: "ICAI website", href: "https://www.icai.org" },
            { label: "CBDT website", href: "https://www.incometaxindia.gov.in" },
            { label: "SEBI website", href: "https://www.sebi.gov.in" },
        ],
    },
    {
        image: imgThought,
        title: "Thought Leadership",
        subtitle: "Photos of Activities & Achievements & Milestones given here",
        description:
            "Alongside our professional work, we share moments of reflection and celebration marking milestones, achievements, and occasions that shape our journey. Here are the glimpses into the people, values, and connections that define who we are.",
    },
]

const InsightsMain: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({})

    const handleImageLoad = (title: string) => {
        setImageLoaded((prev) => ({ ...prev, [title]: true }))
    }

    return (
        <main className="relative overflow-hidden bg-[#F7F9F8] text-[#1C1C1C]">
            {/* --- HERO SECTION (UNCHANGED) --- */}
            <section className="relative h-150 w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImg})` }}
                />
                <div className="absolute inset-0 bg-[#1C1C1C]/60" />
                <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-16">
                    <div className="max-w-3xl text-center text-white">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <h1 className="text-3xl md:text-5xl font-semibold text-[#C2A96A] leading-tight">
                                Expert insight, thoughtful guidance, and regulatory clarity.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-white/80">
                                Discover the latest articles, curated regulatory links, and leadership stories that help businesses stay informed, confident, and ready for what lies ahead.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Decorative Blobs */}
            <div className="pointer-events-none absolute -right-24 top-96 h-64 w-64 rounded-full bg-[#6FAF9B]/15 blur-3xl" />

            {/* --- CARDS SECTION --- */}
            <div className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8 pt-20">
                <section className="space-y-24">

                    {/* CARD 1: ARTICLES - Editorial Overlapping Layout */}
                    <motion.article
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="group relative flex flex-col lg:flex-row items-center w-full"
                    >
                        {/* Image Box */}
                        <div className="w-full lg:w-7/12 relative h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-2xl z-10">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src={insightCards[0].image}
                                alt={insightCards[0].title}
                                loading="lazy"
                                onLoad={() => handleImageLoad(insightCards[0].title)}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Content Box (Overlapping) */}
                        <div className="w-[90%] lg:w-6/12 bg-white p-6 lg:p-8 shadow-xl border border-gray-100 relative -mt-16 lg:mt-0 lg:-ml-24 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="mb-4 inline-block rounded-full bg-[#1F6F5B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1F6F5B]">
                                {insightCards[0].title}
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold leading-snug text-[#1C1C1C] mb-4">
                                {insightCards[0].subtitle}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-600">
                                {insightCards[0].description}
                            </p>
                        </div>
                    </motion.article>

                    {/* CARD 2: REGULATORY - Dark "Command Center" Layout */}
                    <motion.article
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="group relative w-full overflow-hidden bg-[#1F6F5B] text-white   flex flex-col lg:flex-row"
                    >
                        {/* Background pattern/glow */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6FAF9B] rounded-full blur-[120px] opacity-20 pointer-events-none" />

                        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                            <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                                {insightCards[1].title}
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-6">
                                {insightCards[1].subtitle}
                            </h2>
                            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10">
                                {insightCards[1].description}
                            </p>
                        </div>

                        {/* Links Grid Panel */}
                        <div className="w-full lg:w-1/2 bg-[#F7F9F8] p-10 lg:p-16 shadow-xl relative z-10 flex flex-col justify-center">
                            <p className="text-md font-semibold uppercase tracking-widest text-[#C2A96A] mb-6">Important Portals</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {insightCards[1].links?.map((link, idx) => (
                                    <motion.a
                                        key={link.label}
                                        whileHover={{ scale: 1.03, backgroundColor: "rgb(223, 216, 216)", color: "#1F6F5B" }}
                                        whileTap={{ scale: 0.98 }}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between rounded-xl bg-white/10 border border-white/10 p-4 text-sm font-medium text-[#1F6F5B] transition-all duration-300"
                                    >
                                        {link.label}
                                        <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.article>

                    {/* CARD 3: THOUGHT LEADERSHIP - Compact Executive Design */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative w-full h-[380px] flex flex-col md:flex-row bg-white rounded-[1rem] border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500"
                    >
                        {/* Left Side: Content Area (65% for better text flow in shorter height) */}
                        <div className="w-full md:w-[65%] p-8 lg:p-12 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-6 h-[1.5px] bg-[#C2A96A]"></span>
                                    <span className="text-[#C2A96A] font-bold uppercase tracking-[0.2em] text-[10px]">
                                        {insightCards[2].title}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-semibold text-[#1C1C1C] leading-tight mb-4">
                                    {insightCards[2].subtitle}
                                </h2>

                                <p className="text-[#555555] text-sm md:text-base leading-relaxed mb-6 max-w-2xl line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                    {insightCards[2].description}
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Side: Image Area (35%) */}
                        <div className="w-full md:w-[35%] relative overflow-hidden bg-[#F7F9F8] min-h-[250px] md:min-h-full">
                            <motion.div
                                initial={{ scale: 1.1 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="h-full w-full"
                            >
                                <img
                                    src={insightCards[2].image}
                                    alt={insightCards[2].title}
                                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                                    onLoad={() => handleImageLoad(insightCards[2].title)}
                                />
                            </motion.div>

                            {/* Elegant Overlay */}
                            <div className="absolute inset-0 bg-[#1F6F5B]/5 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Accent Line - Bottom Reveal */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="absolute bottom-0 left-0 h-[3px] bg-[#C2A96A]"
                        />
                    </motion.article>

                </section>
            </div>
        </main>
    )
}

export default InsightsMain