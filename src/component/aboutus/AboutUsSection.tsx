import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";


const SLIDES = [
  { image: "https://cdn-ilagggb.nitrocdn.com/bcPPdcwkJPtwVRoplnSFoMYDXtQrxOyR/assets/images/optimized/rev-cdd09d9/vidya.ac.in/wp-content/uploads/2023/03/Accounts-Banking-and-Finance-Course-750x458-1.jpg" },
  { image: "https://akaunting.com/blog/wp-content/uploads/2021/03/The-Difference-Between-Bookkeeping-and-Accounting.jpg" },
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
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`w-full h-full object-cover transition-transform duration-6000 ${
              i === index ? "scale-110" : "scale-100"
            }`}
          />

          {/* GRADIENT */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/30" />
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-32 text-center justify-center  flex items-center">

        <div className="max-w-3xl mx-auto text-center">


          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Clarity in Thinking <br />
            <span className="text-[#079264] ">
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

      {/* SLIDER INDICATOR */}
      {/* <div className="absolute bottom-8  left-25 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-300 ${
              i === index ? "w-10 bg-[#289572]" : "w-5 bg-white/30"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}