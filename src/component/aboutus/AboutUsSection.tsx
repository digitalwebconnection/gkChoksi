import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";


const SLIDES = [
  { image: "https://zxaccotax.com/wp-content/uploads/2024/05/accounting-outsourcing.jpg" },
  { image: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2020/08/About-Us-Page.jpg?w=861" },
  { image: "https://www.bangor.ac.uk/sites/default/files/styles/16x9_1100w/public/2020-05/shutterstock_264409757_0.jpg?h=265e640d&itok=qRj3l4JW" },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-150 w-full overflow-hidden">

      {/* BACKGROUND */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-6000 ${i === index ? "scale-110" : "scale-100"
              }`}
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/60 to-black/30" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-32 text-center justify-center  flex items-center">

        <div className="max-w-3xl mx-auto text-center">


          {/* MAIN HEADING */}
          <h1 className="text-3xl font-serif md:text-5xl font-bold text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
            Clarity in Thinking <br />
            <span className="text-[#079264] drop-shadow-[0_2px_5px_rgba(0,0,0,20.8)]">
              Confidence in Execution
            </span>
          </h1>



          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/services"
              className="group flex items-center gap-3 px-7 py-3 text-white bg-[#1d8665] hover:bg-[#1f7559] transition rounded-md font-semibold"
            >
              Explore Services
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 border border-white text-white hover:bg-white/10 transition rounded-md font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}