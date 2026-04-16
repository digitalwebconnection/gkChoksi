import { useState, useEffect } from "react";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineChartBarSquare,
  HiOutlineEye,
} from "react-icons/hi2";

const SLIDES = [
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Precision",
    sub: "Technical Excellence",
    desc: "Achieving accuracy through rigorous standards and engineering mastery.",
  },
  {
    icon: HiOutlineEye,
    title: "Perspective",
    sub: "Strategic Foresight",
    desc: "Seeing beyond the immediate to identify long-term opportunities and risks.",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Performance",
    sub: "Measurable Results",
    desc: "Delivering data-driven outcomes that impact your bottom line directly.",
  },
];

export default function FeatureSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto change
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-3 gap-6">
          {SLIDES.map((slide, i) => {
            const Icon = slide.icon;
            const isActive = i === active;

            return (
              <div
                key={i}
                onMouseEnter={() => {
                  setActive(i);
                  setPaused(true);
                }}
                onMouseLeave={() => setPaused(false)}
                className={`cursor-pointer rounded-xl p-6 border transform transition-all duration-300
                ${
                  isActive
                    ? "border-[#289572] shadow-xl scale-105"
                    : "border-gray-800/40 hover:shadow-md hover:scale-[1.02]"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 transition-all
                  ${
                    isActive
                      ? "bg-[#289572]/10"
                      : "bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isActive ? "text-[#289572]" : "text-gray-500"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {slide.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-gray-500 mb-3">
                  {slide.sub}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-3" />

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {slide.desc}
                </p>

                {/* Active Indicator */}
                <div
                  className={`mt-4 h-0.5 transition-all duration-300 ${
                    isActive ? "w-10 bg-[#289572]" : "w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}