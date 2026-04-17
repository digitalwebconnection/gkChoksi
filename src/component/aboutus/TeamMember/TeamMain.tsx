import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TEAM, type TeamMember } from "./team";
import AboutHero from "./HeroTM";

import {
    HiOutlineSparkles,
    HiOutlineLightBulb,
    HiOutlineUserGroup,
    HiOutlineCheckCircle,
} from "react-icons/hi2";

import teamImg from "../../../assets/Career/2.jpeg"; // add your image

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
                <div className="max-w-7xl mx-auto px-6 py-20">

                    {/* HEADER */}
                    <div className="text-center max-w-3xl mx-auto mb-14">


                        <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mt-4">
                            Our Team
                        </h1>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

                        {/* LEFT IMAGE */}
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={teamImg}
                                className="w-full h-[300px] object-cover"
                            />
                            {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" /> */}
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-6 text-gray-700 leading-relaxed">

                            <p>
                                At the heart of the firm is a strong core team of Chartered Accountants,
                                supported by dedicated professionals.
                            </p>

                            <p>
                                They are meticulous in execution, thoughtful in analysis, and consistent in delivery.
                            </p>

                            <p>
                                Each member is encouraged to think independently, act responsibly,
                                and contribute meaningfully.
                            </p>

                            <p className="font-semibold text-[#1C1C1C] border-l-4 border-[#289572] pl-4">
                                Together, they form a team that is capable and dependable.
                            </p>

                        </div>
                    </div>

                    {/* VALUE CARDS WITH ICONS */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            {
                                text: "Precision in execution",
                                icon: HiOutlineCheckCircle,
                                color: "#16A34A",
                                bg: "#EAF7EF",
                            },
                            {
                                text: "Independent thinking",
                                icon: HiOutlineLightBulb,
                                color: "#F59E0B",
                                bg: "#FFF7E6",
                            },
                            {
                                text: "Ownership-driven culture",
                                icon: HiOutlineUserGroup,
                                color: "#3B82F6",
                                bg: "#EAF2FF",
                            },
                            {
                                text: "Consistent delivery",
                                icon: HiOutlineSparkles,
                                color: "#8B5CF6",
                                bg: "#F3EDFF",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.text}
                                    className="group rounded-xl p-6 text-center transition-all duration-300 border border-gray-200
        hover:shadow-xl hover:-translate-y-1"
                                    style={{ backgroundColor: item.bg }}
                                >
                                    {/* ICON BOX */}
                                    <div
                                        className="w-14 h-14 shadow mx-auto flex items-center justify-center border border-gray-300 rounded-lg mb-4 transition"
                                        style={{ backgroundColor: "#ffffff" }}
                                    >
                                        <Icon
                                            className="w-10 h-10"
                                            style={{ color: item.color }}
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <p className="text-gray-800 font-semibold text-sm leading-snug">
                                        {item.text}
                                    </p>

                                    {/* ACCENT LINE */}
                                    <div
                                        className="mt-4 h-0.5 w-6 mx-auto transition-all group-hover:w-10"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {/* FILTER */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {["All", "Tax", "Audit", "Legal"].map((item) => (
                            <button
                                key={item}
                                onClick={() => setFilter(item)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition
        ${filter === item
                                        ? "bg-[#289572] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-[#289572] hover:text-white"
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* TEAM GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {filteredTeam.map((member) => (
                            <div
                                key={member.id}
                                onClick={() => setActiveMember(member)}
                                className="cursor-pointer group"
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition">

                                    {/* IMAGE */}
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={member.image}
                                            className="w-full h-full  grayscale-100 group-hover:grayscale-0  object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-4 text-center">
                                        <h3 className="font-semibold text-gray-900 text-sm">
                                            {member.name}
                                        </h3>

                                        <p className="text-xs text-[#289572] mt-1">
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
                                            className="w-70 h-80 object-fill shadow-xl shadow-black/50"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-8 col-span-12 md:col-span-8  bg-[#0F3D2E] text-white">
                                        <p className="text-xs uppercase tracking-widest">
                                            {activeMember.department}
                                        </p>

                                        <h3 className="text-2xl font-bold mt-2">
                                            {activeMember.name}
                                        </h3>

                                        <p className="text-sm mt-2">
                                            {activeMember.role}
                                        </p>


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