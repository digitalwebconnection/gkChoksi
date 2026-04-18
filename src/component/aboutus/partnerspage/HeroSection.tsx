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
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}

            {/* COLOR OVERLAY */}
            <div className="absolute inset-0 bg-[#000000]/40"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex  items-end text-center ">
                <div className="max-w-3xl mx-auto pb-15   text-white">

                    {/* LABEL */}
                    <p className="uppercase font-bold tracking-widest text-white text-3xl  mb-4">
                        Leadership That Delivers
                    </p>

                    {/* HEADING */}
                    {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Experience That Leads. <br />
                        Insight That Drives Results.
                    </h1> */}



                    
                </div>
            </div>

            {/* OPTIONAL GRADIENT BOTTOM FADE */}
            {/* <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-[#0F3D2E] to-transparent"></div> */}
        </section>
    );
};

export default HeroSection;