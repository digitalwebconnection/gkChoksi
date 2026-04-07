import { useEffect, useState } from "react";
import i1 from "../../../assets/14.jpeg";
import i2 from "../../../assets/15.jpeg";
import i3 from "../../../assets/4.jpeg";

const images = [
    i1,
    i2,
    i3,
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    // Auto change background
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 sec

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-120 overflow-hidden">

            {/* BACKGROUND IMAGES */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={img}
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* COLOR OVERLAY */}
            <div className="absolute inset-0 bg-[#000000]/80"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
                <div className="max-w-3xl text-white">

                    {/* LABEL */}
                    <p className="uppercase tracking-widest text-[#6FAF9B] text-sm mb-4">
                        Leadership That Delivers
                    </p>

                    {/* HEADING */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Experience That Leads. <br />
                        Insight That Drives Results.
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-lg text-gray-200 leading-relaxed mb-8">
                        Our partners combine deep technical expertise with seasoned judgment,
                        ensuring every engagement is led with personal involvement. With diverse
                        industry experience, we bring clarity to complexity and guide decisions
                        with integrity, intent, and responsibility.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 flex-wrap">

                        <button className="bg-[#6FAF9B] text-[#1C1C1C] px-6 py-3 rounded-full font-semibold hover:bg-[#C2A96A] transition">
                            Meet Our Team
                        </button>

                        <button className="border border-[#C2A96A] px-6 py-3 rounded-full font-semibold hover:bg-[#6FAF9B] hover:text-[#1C1C1C] transition">
                            Get Consultation
                        </button>

                    </div>
                </div>
            </div>

            {/* OPTIONAL GRADIENT BOTTOM FADE */}
            {/* <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#0F3D2E] to-transparent"></div> */}
        </section>
    );
};

export default HeroSection;