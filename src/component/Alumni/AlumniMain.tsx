import { useEffect, useState } from "react";
import alumni from "../../assets//alumini/5.jpeg"



import g1 from "../../assets/alumini/1.jpeg"
import g2 from "../../assets/alumini/2.jpeg"
// import g3 from "../../assets/alumini/3.jpeg"
import g4 from "../../assets/alumini/4.jpeg"
import GetInTouchModal from "../GetInTouchPopup";

export default function AlumniPage() {
    const [open, setOpen] = useState(false);

    const images = [g1, g2, g4];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000); // change every 4 sec

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="bg-[#F7F9F8] text-[#1C1C1C]">

            {/* HERO SECTION */}
            <section className="relative h-150 bg-[#000000]/70 py-15 text-white overflow-hidden">

                {/* Background Images */}
                <div className="absolute inset-0">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt="Alumni"
                            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}
                </div>

                {/* Overlay (for better readability) */}
                <div className="absolute inset-0 bg-[#000000]/60"></div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-6 pt-52 text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold mb-6">
                        Connections That Endure
                    </h1>
                    <p className="text-lg md:text-xl text-[#47f0ba] max-w-4xl mx-auto">
                        A lifelong bond that continues beyond time, built on shared journeys and lasting impact.
                    </p>
                </div>
            </section>
            {/* INTRO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-10 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] text-[#0F3D2E] mb-6">
                    Our Alumni Community
                </h2>
                <p className="text-lg leading-relaxed">
                    Our alumni remain an integral part of our extended community. Individuals who have contributed to our journey and continue to carry our values into diverse paths and industries.
                </p>

            </section>

            {/* IMAGE + CONTENT SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-5 ">
                <div>
                    <img
                        src={alumni}
                        alt="Alumni Meet"
                        className=" w-130 h-110"
                    />
                </div>

                <div className=" pt-20">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold text-[#0F3D2E] mb-4">
                        Shared Experiences, Strong Bonds
                    </h3>
                    <p className="mb-4 text-justify ">
                        We take pride in these relationships, built on shared experiences and mutual respect.   </p>
                    <p className="mb-4 text-justify ">
                        For us, alumni are not a chapter concluded, but a relationship that continues with appreciation, and with pride.
                    </p>
                    <button
                        onClick={() => setOpen(true)}
                        className="border px-8 py-2 rounded-lg bg-[#0F3D2E] text-white"
                    >
                        Get In Touch
                    </button>
                </div>
            </section>

            {/* CALL MODAL */}
            <GetInTouchModal open={open} setOpen={setOpen} />

            {/* GALLERY SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold pb-5 text-center text-[#0F3D2E] mb-10">
                    Alumni Moments
                </h3>

                <div className="flex  max-w-7xl mx-auto text-center justify-center   gap-10">
                    <img
                        src={g1}
                        className=" shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                    {/* <img
                        src=""
                        className="shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                    <img
                        src=""
                        className="shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                    <img
                        src=""
                        className="shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    /> */}
                </div>
            </section>



        </div>
    );
}