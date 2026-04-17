import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import img from "../../assets/1.jpeg";
import img1 from "../../assets/18.jpeg";
import img2 from "../../assets/20.jpeg";
import {
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiOutlineBadgeCheck } from "react-icons/hi";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {

  const navigate = useNavigate(); // ✅ ADD THIS
  return (
    <section id="about" className="py-16 bg-[#F7F9F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT: TEXT CONTENT */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-lg font-semibold uppercase tracking-[0.25em] text-[#6FAF9B]">
              About Us
            </p>

            <h2 className="mb-6 font-serif text-4xl font-bold text-[#1C1C1C] sm:text-5xl">
              Welcome to{" "}
              <span className="inline-block rounded-lg bg-[#0F3D2E] px-2 text-white">
                G. K. Choksi & Co
              </span>
            </h2>

            <p className="mb-4 leading-relaxed text-justify text-black">
              Established in 1972 by CA Gautam K. Choksi, our Firm is built upon
              a distinguished legacy of professional integrity, independent
              judgment, and unwavering client trust. Conceived by a visionary
              founder, it has matured into a prominent Chartered Accountancy
              practice.
            </p>

            <p className="mb-6 leading-relaxed text-justify text-black">
              Headquartered in Ahmedabad, with presence in New Delhi, Mumbai, and
              Petlad, the Firm delivers high-impact services nationwide with deep
              contextual insight.
            </p>

            <ul className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  text: "Certified Professionals",
                  icon: HiOutlineBadgeCheck, // changed icon
                },
                {
                  text: "Personalized Service Approach",
                  icon: HiOutlineUserGroup, // better icon
                },
                
              ].map((item, idx) => {
                const Icon = item.icon;

                return (
                  <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                    {/* Icon */}
                    <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-[#6FAF9B]/20 text-[#0F3D2E]">
                      <Icon className="h-10 w-10" />
                    </div>

                    {/* Text */}
                    <span className="text-black font-medium">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0); // ✅ scroll top
              }}
              className="inline-flex items-center rounded-full bg-[#0F3D2E] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:bg-[#1F6F5B]"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* RIGHT: IMAGE CLUSTER */}
          <motion.div
            className="relative h-[360px] sm:h-[420px] md:h-[540px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            {/* Background Blob */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-[40px] bg-[#6FAF9B]/20 blur-3xl" />

            {/* Top Image */}
            <div className="absolute left-6 top-0 h-40 w-[60%] overflow-hidden rounded-[28px] bg-gray-200 shadow-[0_24px_60px_rgba(15,61,46,0.35)] transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] sm:h-56">
              <img src={img} alt="Team at work" className="h-full w-full object-cover" />
            </div>

            {/* Main Image */}
            <div className="absolute bottom-10 right-0 h-56 w-full overflow-hidden rounded-4xl bg-gray-200 shadow-[0_26px_80px_rgba(15,61,46,0.45)] transition-transform duration-500 hover:-translate-y-3 hover:scale-[1.02] sm:h-[350px] sm:w-[88%]">
              <img src={img1} alt="Financial advisory meeting" className="h-full w-full object-cover" />

              <div className="absolute inset-0 bg-linear-to-t from-[#0F3D2E]/80 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-28 space-y-1 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[#6FAF9B]">
                  Client-first approach
                </p>
                <p className="text-sm   font-medium text-white">
                  Long-term partnerships built on trust and clarity.
                </p>
              </div>
            </div>

            {/* Mini Card */}
            <Link to="/industry">
  <div className="absolute bottom-0 left-0 h-32 w-40 overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_rgba(15,61,46,0.32)] transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03] cursor-pointer">

    <div className="h-[60%] w-full">
      <img
        src={img2}
        alt="Audit & review"
        className="h-full w-full object-cover"
      />
    </div>

    <div className="h-[40%] px-3 pt-2 text-[11px]">
      <span className="block text-[12px] uppercase tracking-[0.18em] text-black">
        See our
      </span>
      <span className="font-semibold text-[#1C1C1C]">
        Clients
      </span>
    </div>
  </div>
</Link>

            {/* Stat Card */}
            <div className="absolute -right-14 top-20 w-50 rounded-3xl bg-[#0F3D2E] p-6 text-white shadow-[0_20px_60px_rgba(15,61,46,0.6)] hover:-translate-y-2 transition duration-500">
              <p className="mb-2 text-[14px] uppercase tracking-[0.2em] text-white">
                Trusted Since
              </p>
              <p className="mb-1 text-2xl font-bold">1972</p>
              <p className="text-[11px] text-gray-300">
                Serving businesses with reliable advisory and compliance.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;