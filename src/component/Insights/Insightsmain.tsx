
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
                name: "MCA",
                logo: "https://play-lh.googleusercontent.com/wEO3g36yMueBOHrnWhypJFTzwaC2-85oMuacSkW0PvlIIrS0YfAiCqivVvWsmkAeTQ",
                href: "https://www.mca.gov.in"
            },
            {
                name: "CBIC",
                logo: "https://www.cbic.gov.in/content/images/CBIC_logo.png",
                href: "https://www.cbic.gov.in"
            },
            {
                name: "CBDT",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_of_Income_Tax_Department_India.png",
                href: "https://www.incometax.gov.in"
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



    return (
        <main className="relative overflow-hidden bg-[#F7F9F8] text-[#1C1C1C]">

            {/* HERO */}
            <section className="relative h-150 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
                <div className="absolute inset-0 bg-[#1C1C1C]/60" />
                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <div className="max-w-3xl text-center text-white">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <h1 className="text-3xl md:text-5xl font-semibold text-[#C2A96A]">
                                Expert insight, thoughtful guidance, and regulatory clarity.
                            </h1>
                            <p className="mt-6 text-lg text-white/80">
                                Discover the latest articles and regulatory platforms.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <div className="mx-auto max-w-7xl px-4 pb-32 pt-20">
                <section className="space-y-24">

                    {/* CARD 1 */}
                    <motion.article className="group flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-7/12 h-[400px] overflow-hidden rounded-xl">
                            <img src={insightCards[0].image} className="h-full w-full object-cover" />
                        </div>

                        <div className="w-[90%] lg:w-6/12 bg-white p-8 text-justify shadow-xl -mt-16 lg:-ml-24">
                            <h2 className="text-3xl font-bold">{insightCards[0].subtitle}</h2>
                            <p className="mt-4 text-gray-600">{insightCards[0].description}</p>
                        </div>
                    </motion.article>

                    {/* 🔥 CARD 2 UPDATED */}
                    
                    <motion.article className="   rounded-xl overflow-hidden">
                        {/* LEFT */}
                    <div className="w-full  text-center ">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            {insightCards[1].subtitle}
                        </h2>
                        <p className="text-black text-lg">
                            {insightCards[1].description}
                        </p>
                    </div>
                        {/* 🔥 RIGHT LOGO GRID */}
                        <div className="w-full  bg-[#F7F9F8] p-5 lg:p-0 shadow-xl relative z-10 flex flex-col justify-center">

                            <p className="text-lg font-semibold text-center uppercase tracking-widest text-[#C2A96A] mb-8">
                                Key Authorities
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">

                                {insightCards[1].portals?.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex items-center gap-4 bg-white/10 border border-black/20 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                                    >

                                        {/* Logo */}
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <img
                                                src={item.logo}
                                                alt={item.name}
                                                className="h-10 object-contain grayscale group-hover:grayscale-0 transition duration-300"
                                            />
                                        </div>

                                        {/* Name */}
                                        <span className="text-sm font-semibold text-[#1C1C1C] group-hover:text-[#1F6F5B] transition">
                                            {item.name}
                                        </span>

                                    </motion.a>
                                ))}

                            </div>

                        </div>

                    </motion.article>

                </section>
            </div>
        </main>
    )
}

export default InsightsMain