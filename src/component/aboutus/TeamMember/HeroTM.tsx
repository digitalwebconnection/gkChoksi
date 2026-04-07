
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
    <section className="relative py-10 overflow-hidden">

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        {/* HEADER */}
        <div className="mb-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[#6FAF9B]" />
            <span className="text-[#6FAF9B] uppercase tracking-widest text-sm font-semibold">
              About Our Team
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Built on Expertise. 
            Driven <br /> by Integrity.
          </h1>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-12 gap-10 items-start">

          {/* LEFT */}
          <div className="md:col-span-8 space-y-2 text-lg leading-relaxed text-gray-200">
            <p>
              At the heart of the firm is a strong core team of Chartered Accountants,
              supported by dedicated professional support staffs.
            </p>

            <p>
              They are meticulous in execution, thoughtful in analysis, and consistent in delivery.
              Each member of the team is encouraged to think independently, act responsibly,
              and contribute meaningfully to the outcome.
            </p>

            <p>
              The culture we foster is one of learning and ownership where questions are welcomed,
              ideas are valued, and excellence is pursued quietly, without compromise.
            </p>

            <p className="font-medium text-white">
              Together, they form a team that is not only capable, but dependable.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="md:col-span-4">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border-l-4 border-[#C2A96A]">

              <h3 className="text-xl font-semibold text-white mb-4">
                What Defines Us
              </h3>

              <ul className="space-y-3 text-sm text-gray-200">
                {[
                  "Precision in execution",
                  "Independent thinking",
                  "Ownership-driven culture",
                  "Consistent delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6FAF9B] rounded-full mt-2" />
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-5 border-t border-white/20 pt-8 flex flex-wrap gap-6 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#6FAF9B] rounded-full" />
            Chartered Expertise
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1F6F5B] rounded-full" />
            Structured Thinking
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C2A96A] rounded-full" />
            Value-driven Culture
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;