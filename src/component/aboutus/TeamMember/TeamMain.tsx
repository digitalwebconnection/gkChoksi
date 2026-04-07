import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TEAM, type TeamMember } from "./team";
import AboutHero from "./HeroTM";

export default function TeamSection() {
    const [activeMember, setActiveMember] = useState<TeamMember | null>(null);
    const [filter, setFilter] = useState("All");

    const filteredTeam =
        filter === "All"
            ? TEAM
            : TEAM.filter((m) => m.department === filter);

    // ESC + Arrow Navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!activeMember) return;

            if (e.key === "Escape") setActiveMember(null);

            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [activeMember, filteredTeam]);

    // FIND CURRENT INDEX
    const currentIndex = filteredTeam.findIndex(
        (m) => m.id === activeMember?.id
    );

    // NEXT
    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % filteredTeam.length;
        setActiveMember(filteredTeam[nextIndex]);
    };

    // PREV
    const handlePrev = () => {
        const prevIndex =
            (currentIndex - 1 + filteredTeam.length) % filteredTeam.length;
        setActiveMember(filteredTeam[prevIndex]);
    };

    return (
        <>
            <AboutHero />

            <section className="bg-[#F7F9F8] pb-16 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TITLE */}
                    <h1 className="text-4xl font-semibold py-10 text-[#1C1C1C]">
                        Members of the Team
                    </h1>

                    {/* FILTER */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        {["All", "Tax", "Audit", "Legal"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setFilter(item)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${filter === item
                                        ? "bg-[#0F3D2E] text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-[#1F6F5B] hover:text-white"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredTeam.map((member) => (
                            <div
                                key={member.id}
                                onClick={() => setActiveMember(member)}
                                className="cursor-pointer group text-center"
                            >
                                <div className="relative overflow-hidden shadow-lg group-hover:shadow-2xl shadow-black transition">

                                    <img
                                        src={member.image}
                                        className="w-full h-80 object-cover 
                    grayscale brightness-75 
                    group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110
                    transition duration-500"
                                    />

                                    {/* STATUS */}
                                    <div className={`absolute top-0 right-0 text-xs px-4 py-1  rounded-bl-lg 
                    ${member.status === "Open" ? "bg-green-600" : "bg-gray-400"} text-white`}>
                                        {member.status}
                                    </div>

                                    {/* OVERLAY */}
                                    <div className="absolute bottom-0 w-full p-4 
                    bg-linear-to-t from-[#0F3D2E]/90 to-transparent text-white">

                                        {/* <p className="text-xs uppercase tracking-widest">
                      {member.department}
                    </p> */}

                                        <h3 className="font-semibold text-sm">
                                            {member.name}
                                        </h3>

                                        <p className="text-[#C2A96A] text-xs mt-1">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MODAL */}
                <AnimatePresence>
                    {activeMember && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveMember(null)}
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="bg-white max-w-5xl w-full overflow-hidden shadow-2xl relative"
                            >

                                {/* ✅ LEFT ARROW */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 py-3 px-2  shadow z-20"
                                >
                                    ←
                                </button>

                                {/* ✅ RIGHT ARROW */}
                                <button
                                    onClick={handleNext}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 py-3 px-2  shadow z-20"
                                >
                                    →
                                </button>

                                {/* CLOSE */}
                                <button
                                    onClick={() => setActiveMember(null)}
                                    className="absolute top-4 right-4 bg-gray-100 hover:bg-red-50 py-2 px-3 rounded-full z-20"
                                >
                                    ✕
                                </button>

                                <div className="grid grid-cols-12">

                                    {/* IMAGE */}
                                    <div className="bg-[#F7F9F8] flex items-center col-span-12 md:col-span-4 justify-center p-6">
                                        <img
                                            src={activeMember.image}
                                            className="w-70 h-80 object-cover shadow-xl shadow-black/50"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-8 col-span-12 md:col-span-8 bg-[#0F3D2E] text-white">
                                        <p className="text-xs uppercase tracking-widest">
                                            {activeMember.department}
                                        </p>

                                        <h3 className="text-2xl font-bold mt-2">
                                            {activeMember.name}
                                        </h3>

                                        <p className="text-sm mt-2">
                                            {activeMember.role}
                                        </p>

                                        <div className="mt-6">
                                            <span className="text-sm font-semibold">
                                                Status:
                                            </span>
                                            <span
                                                className={`ml-2 px-2 py-1 text-xs rounded ${activeMember.status === "Open"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-200 text-gray-600"
                                                    }`}
                                            >
                                                {activeMember.status}
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
}