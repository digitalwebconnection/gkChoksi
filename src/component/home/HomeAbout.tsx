import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";



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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

            <h2 className="mb-6 font-serif drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#C2A96A]">
              Welcome to{" "}
              <span className="inline-block rounded-lg bg-[#0F3D2E] px-2 text-white">
                G. K. Choksi & Co
              </span>
            </h2>

            <p className="mb-4 leading-relaxed text-justify text-black">
              Established in 1972 by CA Gautam K. Choksi, our Firm is built upon
              a distinguished legacy of professional integrity, independent
              judgment, and unwavering client trust. Conceived by a visionary
              founder, it has matured into a prominent audit, accountancy & advisory practice.
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
                  <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-xl border border-gray-900/60">

                    {/* Icon */}
                    <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-[#03251b] text-[#C2A96A]">
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
          <div className="relative h-[520px] w-full">

            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-full w-full rounded-4xl overflow-hidden shadow-[0_30px_80px_rgba(15,61,46,0.35)]"
            >
              <img
                src="https://www.investopedia.com/thmb/Rebcc164zCkwcI8H9H8Q22w1VlI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/WhatIsTurnoverinBusiness-b83f04d7d27a456abe8625fa1916df93.jpg"
                className="h-full w-full object-cover"
              />

              {/* PREMIUM OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xl uppercase tracking-[0.2em] text-[#0effb3]">
                  Client-first approach
                </p>

                <p className="mt-2 text-lg font-medium leading-snug max-w-sm">
                  Long-term partnerships built on trust, transparency, and clarity.
                </p>
              </div>
            </motion.div>

            {/* GLASS STAT CARD (INTEGRATED) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              className="absolute bottom-30 md:bottom-6 right-1 md:right-6 w-48 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-5 text-white shadow-xl"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-200">
                Trusted Since
              </p>

              <p className="text-2xl font-bold mt-1">1972</p>


            </motion.div>

            {/* SOFT GLOW (DEPTH EFFECT) */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6FAF9B]/20 blur-3xl rounded-full" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;