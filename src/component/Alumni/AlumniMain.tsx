import { useEffect, useState } from "react";
import alumni from "../../assets/Alumni.png"

import i1 from "../../assets/1.jpeg";
import i2 from "../../assets/2.jpeg";
import i3 from "../../assets/5.jpeg";
import i4 from "../../assets/11.jpeg";



export default function AlumniPage() {

    const images = [i1, i2, i3, i4];
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Connections That Endure
                    </h1>
                    <p className="text-lg md:text-xl text-[#47f0ba] max-w-4xl mx-auto">
                        A lifelong bond that continues beyond time, built on shared journeys and lasting impact.
                    </p>
                </div>
            </section>
            {/* INTRO SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-10 text-center">
                <h2 className="text-4xl font-semibold text-[#0F3D2E] mb-6">
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

                <div  className=" pt-20">
                    <h3 className="text-4xl font-semibold text-[#1F6F5B] mb-4">
                        Shared Experiences, Strong Bonds
                    </h3>
                    <p className="mb-4 text-justify ">
                        The aim of our alumni network is to keep you in touch with your former colleagues and friends as well as G. K. Choksi & Co.
                    </p>
                    <p className="mb-4 text-justify ">
                  So, if you are an alumnus, why not get in touch with us now. And keep visiting this section to find out about upcoming Alumni Meetings and Events.  </p>
                </div>
            </section>

      

            {/* GALLERY SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <h3 className="text-5xl font-semibold pb-5 text-center text-[#0F3D2E] mb-10">
                    Alumni Moments
                </h3>

                <div className="grid md:grid-cols-4  gap-4">
                    <img
                        src="https://www.gkcco.com/wp-content/uploads/2022/12/5.jpg"
                        className=" shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                    <img
                        src="https://www.gkcco.com/wp-content/uploads/2022/12/1.jpg"
                        className="shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                    <img
                        src="https://www.gkcco.com/wp-content/uploads/2022/12/2.jpg"
                        className="shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                    <img
                        src="https://www.gkcco.com/wp-content/uploads/cache/2022/12/3/2097701300.jpg"
                        className="shadow-lg shadow-black/80 w-80 h-50 object-cover"
                        alt=""
                    />
                </div>
            </section>

            {/* CTA SECTION */}
            {/* <section className="bg-[#0F3D2E] text-white text-center py-16 px-6">
                <h3 className="text-3xl font-semibold mb-4">
                    Stay Connected With Us
                </h3>
                <p className="mb-6 text-[#6FAF9B]">
                    Be part of a network that grows stronger with time.
                </p>
                <button className="bg-[#6FAF9B] text-[#1C1C1C] px-6 py-3 rounded-lg font-semibold hover:bg-[#C8A96A] transition">
                    Join Alumni Network
                </button>
            </section> */}

        </div>
    );
}