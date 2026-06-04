import { useEffect, useState } from "react";
import i1 from "../../../assets/patner/patner.jpeg";



const images = [
    i1,

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
        <section className="relative h-150 overflow-hidden">

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
                        className="w-full h-full object-fill md:object-cover"
                    />
                </div>
            ))}

            {/* COLOR OVERLAY */}
            <div className="absolute inset-0 bg-[#000000]/40"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex  items-end text-center ">
                <div className="max-w-6xl mx-auto pb-15   text-white">

                    {/* LABEL */}
                    <p className=" font-bold font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)]  text-white text-6xl  mb-4">
                        Leadership That <span className="text-[#C2A96A] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"> Delivers</span>
                    </p>


                </div>
            </div>

            {/* OPTIONAL GRADIENT BOTTOM FADE */}
            {/* <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#19603B] to-transparent"></div> */}
        </section>
    );
};

export default HeroSection;