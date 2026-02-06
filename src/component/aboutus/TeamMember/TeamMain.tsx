"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TeamMember {
    id: number
    name: string
    role: string
    image: string
    description: string
    experience: string
}

const TEAM: TeamMember[] = [
    {
        id: 1,
        name: "ULLAS G. SHAH",
        role: "B.Com, FCA, CPA",
        image: "https://www.gkcco.com/wp-content/uploads/2019/12/Ullas-G-Shah.jpg",
        description:
            "A visionary leader whose guidance laid the foundation of our firm. His principles continue to shape our culture and ethics.",
        experience: "28+ years of leadership & academic excellence",
    },
    {
        id: 2,
        name: "NARENDRA D. PATEL",
        role: "B.Com, L.L.B.",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/Adv.-N-D-Patel-150x150.jpg",
        description:
            "A seasoned professional providing strategic mentorship and long-term direction to the leadership team.",
        experience: "44+ years in corporate advisory",
    },
    {
        id: 3,
        name: "SHAMBHU J. BHIKHADIA",
        role: "B.Com, L.L.B., C.S",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CS-Shambhu-Bhikhadia-150x150.jpg",
        description:
            "Known for his deep financial insight and ability to guide organizations through complex transitions.",
        experience: "48+ years in finance & governance",
    },
    {
        id: 4,
        name: "KAMLESH H. SHAH",
        role: "B.Com, CA, DISA",
        image: "https://www.gkcco.com/wp-content/uploads/2025/12/CA-Kamlesh-Shah-150x150.jpg",
        description:
            "Driving the firm forward with strategic vision, operational excellence, and people-first leadership.",
        experience: "42+ years of professional leadership",
    },
    {
        id: 5,
        name: "ANILKUMAR SETH",
        role: "B.Com, FCA",
        image: "https://www.gkcco.com/wp-content/uploads/2019/12/Anil-Seth.jpg",
        description:
            "Oversees audit excellence and operational performance across the organization.",
        experience: "46+ years in audit & assurance",
    },
]

const extractYears = (text: string) =>
    parseInt(text.replace(/\D/g, ""), 10)

export default function TeamSection() {
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null)

    // ESC key close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setActiveMember(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    return (
        <section className="bg-white py-24 relative overflow-hidden">

            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20 border-b border-slate-100 pb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="h-px w-12 bg-green-600"></span>
                            <span className="text-green-600 font-bold tracking-[0.2em] text-xs uppercase">
                                Our Leadership
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
                        >
                            The Minds Behind <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-blue-600">
                                Our Excellence.
                            </span>
                        </motion.h2>

                        {/* Impact Strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-600"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-600 rounded-full" />
                                200+ Years Combined Experience
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-700 rounded-full" />
                                Multi-disciplinary Expertise
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                Governance-first Leadership
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:max-w-sm"
                    >
                        <div className="p-6 bg-slate-50 border-l-4 border-orange-500 rounded-r-2xl">
                            <p className="text-slate-600 text-lg font-medium">
                                A rare blend of legacy wisdom and future-ready leadership —
                                guiding institutions with clarity, integrity, and purpose.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {TEAM.map((member) => (
                        <div
                            key={member.id}
                            onClick={() => setActiveMember(member)}
                            className="cursor-pointer text-center group"
                        >
                            <div className="overflow-hidden rounded-2xl shadow-sm group-hover:shadow-xl transition">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition"
                                />
                            </div>
                            <h3 className="mt-5 text-lg font-bold text-slate-900">
                                {member.name}
                            </h3>
                            <p className="text-orange-600 text-xs uppercase tracking-widest">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {activeMember && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveMember(null)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.92, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl relative"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setActiveMember(null)}
                                className="absolute top-5 right-5 bg-slate-100 hover:bg-red-50 p-2 rounded-full z-10"
                            >
                                ✕
                            </button>

                            <div className="grid md:grid-cols-2">
                                {/* 🔥 FIXED IMAGE SECTION */}
                                <div className="relative w-full h-[420px] md:h-full bg-slate-100 overflow-hidden">
                                    <img
                                        src={activeMember.image}
                                        alt={activeMember.name}
                                        className="
                      absolute inset-0
                      w-full h-full
                      object-contain
                      object-center
                      p-6
                      
                    "
                                    />
                                    <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent pointer-events-none" />
                                </div>

                                {/* CONTENT */}
                                <div className="p-10 md:p-14">
                                    <p className="text-orange-600 text-xs font-black uppercase tracking-widest">
                                        {activeMember.role}
                                    </p>

                                    <h3 className="text-4xl font-black mt-2 mb-6 text-slate-900">
                                        {activeMember.name}
                                    </h3>

                                    {/* Experience */}
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className="text-6xl font-black text-blue-950">
                                            {extractYears(activeMember.experience)}+
                                        </div>
                                        <span className="text-xs uppercase tracking-widest text-slate-500">
                                            Years of Excellence
                                        </span>
                                    </div>

                                    <p className="text-slate-600 text-lg mb-6">
                                        {activeMember.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-3 mb-8">
                                        {[
                                            "Strategic Advisory",
                                            "Governance",
                                            "Mentorship",
                                            "Risk Oversight",
                                        ].map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-4 py-1.5 text-xs font-bold uppercase rounded-full bg-slate-100 text-slate-700"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Experience Box */}
                                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
                                        <strong className="block text-blue-950 mb-1">
                                            Professional Experience
                                        </strong>
                                        <p className="text-slate-600">
                                            {activeMember.experience}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
