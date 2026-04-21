
import { motion } from "framer-motion";

const timeline = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0n5S96TkRXdMIj9mlW_b52jl9JkIh6BnFQ&s",
    period: "2018",
    title: "The Beginning",
    desc: "Early work with closely-held businesses and emerging enterprises.",
    color: "#12632A",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSko2M7te0So4PgD3HmdqFqGo3uHPmBorSEQ&s",
    period: "2020",
    title: "Expansion",
    desc: "New partners, sector specialisation and long-term client relationships.",
    color: "#D9A20D",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEEmoaotDHa4iHKDGGUjURb9fAoZZH0C-Rg&s",
    period: "2021",
    title: "Scaling Up",
    desc: "Listed entities, regulatory assignments and complex group audits.",
    color: "#12632A",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC376xP-vqAynxnEpfjgQ6u94XQOvNQb3HZQ&s",
    period: "2022",
    title: "Innovation",
    desc: "Analytics-led audits and cross-border assignments.",
    color: "#D9A20D",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vJOPMjpulD-SEuCmpI7i1CR6jtFq-lv1Aw&s",
    period: "2024",
    title: "Global Reach",
    desc: "Core work in specific industries across multiple continents.",
    color: "#12632A",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWi9xoGGdSwY920b33n8zXWlFQXiRbQ7Oxcw&s",
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
                      <span className="text-sm font-black text-gray-900 tracking-widest uppercase">
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