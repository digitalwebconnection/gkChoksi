import img_img_121d69f0 from "/src/assets/images/img_121d69f0.jpg";
import img_img_25ba1ca3 from "/src/assets/images/img_25ba1ca3.jpg";
import img_img_d8940eaa from "/src/assets/images/img_d8940eaa.jpg";
import img_img_7a0b22ad from "/src/assets/images/img_7a0b22ad.jpg";
import img_img_c8c57b32 from "/src/assets/images/img_c8c57b32.jpg";
import img_img_c69df18b from "/src/assets/images/img_c69df18b.jpg";

import { motion } from "framer-motion";

const timeline = [
  {
    image: img_img_121d69f0,
    period: "2018",
    title: "The Beginning",
    desc: "Early work with closely-held businesses and emerging enterprises.",
    color: "#12632A",
  },
  {
    image: img_img_25ba1ca3,
    period: "2020",
    title: "Expansion",
    desc: "New partners, sector specialisation and long-term client relationships.",
    color: "#D9A20D",
  },
  {
    image: img_img_d8940eaa,
    period: "2021",
    title: "Scaling Up",
    desc: "Listed entities, regulatory assignments and complex group audits.",
    color: "#12632A",
  },
  {
    image: img_img_7a0b22ad,
    period: "2022",
    title: "Innovation",
    desc: "Analytics-led audits and cross-border assignments.",
    color: "#D9A20D",
  },
  {
    image: img_img_c8c57b32,
    period: "2024",
    title: "Global Reach",
    desc: "Core work in specific industries across multiple continents.",
    color: "#12632A",
  },
  {
    image: img_img_c69df18b,
    period: "2026",
    title: "Future Ready",
    desc: "Ongoing innovation and client success in a digital world.",
    color: "#D9A20D",
  },
];

const TimelineSection = () => {
  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="relative">

          {/* Central Horizontal Axis (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-500 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-0 relative">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col items-center">

                  {/* --- TOP CONTENT (Desktop: Even | Mobile: All) --- */}
                  <motion.div
                    initial={{ opacity: 0, y: isEven ? -70 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col items-center text-center z-10 
                      ${isEven ? "lg:mb-1" : "lg:mt-90 lg:order-last"} 
                      mb-8 lg:mb-0`}
                  >
                    <div
                      className="w-32 h-32 rounded-full overflow-hidden border-4 bg-white shadow-xl mb-4"
                      style={{ borderColor: item.color }}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: item.color }}>{item.title}</h3>
                    <p className="text-gray-900 text-sm mt-2 max-w-[180px] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>

                  {/* --- CENTER DOT & YEAR --- */}
                  <div className="relative flex flex-col items-center justify-center h-12 w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2">
                    {/* Vertical line for mobile */}
                    <div className="absolute h-full w-0.5 bg-gray-200 lg:hidden top-0" />

                    {/* The Connecting Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-6 h-6 rounded-full border-4 bg-white z-20"
                      style={{ borderColor: item.color }}
                    />

                    {/* Year Label */}
                    <div className="absolute mt-16 lg:mt-20">
                      <span className="text-sm font-black text-gray-900  uppercase">
                        {item.period}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;