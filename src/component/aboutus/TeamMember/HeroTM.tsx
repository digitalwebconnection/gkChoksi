
import { useEffect, useState } from "react";
import i1 from "../../../assets/21.jpeg";
import i2 from "../../../assets/11.jpeg";
import i3 from "../../../assets/2.jpeg";

const images = [
    i1,
    i2,
    i3,
];

const AboutHero = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-150 py-10 overflow-hidden">

      {/* BACKGROUND IMAGES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            className="w-full h-full object-cover scale-105"
            alt="bg"
          />
        </div>
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#000000]/70"></div>


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center py-35 px-6 text-white">

        {/* HEADER */}
        <div className="mb-2">
          <div className="flex items-center justify-center text-center gap-3 mb-3  ">
            <span className="h-px w-6 bg-[#6FAF9B]" />
            <span className="text-[#6FAF9B] uppercase tracking-widest text-lg font-semibold">
              About Our Team
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Built on Expertise. 
            Driven <br /> by Integrity.
          </h1>
        </div>

        

      

      </div>
    </section>
  );
};

export default AboutHero;