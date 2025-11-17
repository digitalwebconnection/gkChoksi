'use client';

import React from 'react';
import { ArrowRight, ArrowLeft, BarChart3, Shield, Zap, Users, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BriefcaseBusiness,Star, Quote, ChevronLeft, ChevronRight,ChevronDown  } from "lucide-react";
import "../app/process-timeline.css";
/* ✨ Simple variants for reuse */
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/* Small helper counter component */
function AnimatedCounter({
  to,
  duration = 1800,
  prefix = "",
  suffix = "",
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * to);

      setValue(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [to, duration]);

  return (
    <span>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

type Highlight = {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  tag: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Empaneled as Category I Auditors by C&AG",
    description: "Trusted for large-scale public sector audits and review assignments.",
    image:
      "https://quartierinterior.com/wp-content/uploads/2025/05/DSC8620.jpg", // replace with your own
    icon: ShieldCheck,
    tag: "Regulatory Recognition",
  },
  {
    title: "Statutory Auditors for Listed & Large Corporates",
    description: "End-to-end audit support across sectors with robust quality controls.",
    image:
      "https://media.istockphoto.com/id/1042650228/photo/young-businesswoman-calculating-bill-in-office.jpg?s=612x612&w=0&k=20&c=zsHhExzJ_j9c9rObifhOVf84cE_Uf3Kt_xgEVuI8EwY=",
    icon: Award,
    tag: "Corporate Assurance",
  },
  {
    title: "Trusted Advisors to Prominent Family Businesses",
    description: "Long-term relationships built on integrity, insight and execution.",
    image:
      "https://www.erpca.com/wp-content/uploads/2024/11/office-space-design-office-3d-rendering-scaled.jpg",
    icon: BriefcaseBusiness,
    tag: "Advisory Excellence",
  },
];

const reviews = [
  {
    name: "Amit Shah",
    role: "Founder, FinEdge Consulting",
    rating: 5,
    text: "They don’t just share reports – they simplify the numbers and tell you exactly what to fix. Our monthly review calls are now the best 45 minutes of my month.",
  },
  {
    name: "Neha Verma",
    role: "Director, Nova Retail",
    rating: 5,
    text: "Super professional, super reliable. They set up our systems, trained our team, and now everything from invoicing to MIS runs like clockwork.",
  },
  {
    name: "Rahul Mehta",
    role: "CEO, BrightTech Solutions",
    rating: 4.5,
    text: "Clear communication, realistic timelines, and practical advice. I finally feel like I have a finance partner, not just a vendor.",
  },
];

const faqs = [
  {
    question: "What services do you provide as Chartered Accountants?",
    answer:
      "We handle end-to-end finance for businesses — bookkeeping, GST & tax compliance, ROC filings, payroll, MIS reports, and strategic advisory for growth, profitability, and cash-flow management.",
  },
  {
    question: "Can you work with startups and growing businesses?",
    answer:
      "Yes. A large part of our work is with early-stage and growth-stage businesses. We help you set up clean systems from day one, manage your compliances, and prepare investor-ready financials and projections.",
  },
  {
    question: "How do you charge — monthly retainer or per assignment?",
    answer:
      "Both options are available. Most clients choose a fixed monthly retainer that covers bookkeeping, compliances, and periodic reviews. Larger projects like valuations, due diligence, or system overhauls are billed as separate assignments.",
  },
  {
    question: "Can everything be managed remotely?",
    answer:
      "Yes. We work seamlessly through secure cloud accounting tools, shared drives, and scheduled review calls. Physical documents are only required in a few cases — for most engagements, onboarding and execution are 100% remote.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  // navbar visibility state
  const [isVisible, setIsVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling DOWN → hide navbar
        setIsVisible(false);
      } else {
        // scrolling UP → show navbar
        setIsVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const images = [
    'https://blogs.airbrickinfra.com/wp-content/uploads/2024/12/CA-Office-interior-design-ideas.jpg',
    'https://static.wixstatic.com/media/69594e_5a8af9a433454f7e9f6e18919537e700~mv2.jpg/v1/fit/w_2500,h_1330,al_c/69594e_5a8af9a433454f7e9f6e18919537e700~mv2.jpg',
    '/financial-analysis-and-data-visualization.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: 500, prefix: "", suffix: "+", label: "Active Clients" },
    { value: 25, prefix: "", suffix: "+", label: "Years Experience" },
    { value: 250, prefix: "₹", suffix: " Cr+", label: "Assets Managed" },
    { value: 98, prefix: "", suffix: "%", label: "Client Satisfaction" },
  ];

  const backgroundImage = "https://5.imimg.com/data5/SELLER/Default/2025/8/541064117/IN/EO/WL/2188906/office-interior-designing-service.jpg";

  const [activeIndex, setActiveIndex] = useState(0);

  // ⏳ Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === HIGHLIGHTS.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? HIGHLIGHTS.length - 1 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev === HIGHLIGHTS.length - 1 ? 0 : prev + 1));

  const active = HIGHLIGHTS[activeIndex];
  const Icon = active.icon;



 const [reviewIndex, setReviewIndex] = useState(0);

  const activeReview = reviews[reviewIndex];

  const handlePrev = () => {
    setReviewIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setReviewIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;




    
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`sticky top-0 z-50 bg-background border-b border-border backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            <img
              src="https://www.gkcco.com/wp-content/uploads/2019/11/logo.jpg"
              alt=""
              className="h-12 w-60"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </Link>

            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition">
              Services
            </Link>

            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition">
              Portfolio
            </Link>

            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Background Image & Carousel */}
      <section className="relative min-h-[500px] flex items-center overflow-hidden select-none">

        {/* Background Images (Carousel + Ken Burns + Opacity fade) */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`
        absolute inset-0 transition-opacity duration-1500 ease-out
        ${index === currentSlide ? "opacity-100" : "opacity-0"}
      `}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: index === currentSlide ? "kenburns 12s ease-out forwards" : "none"
            }}
          >
            <div className="absolute inset-0 bg-black/60 " />
          </div>
        ))}

        {/* Floating Glow Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-white/10 rounded-full blur-[200px] animate-pulse"></div>

        {/* Parallax Spotlight */}
        <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-black/40 pointer-events-none mix-blend-overlay" />

        {/* Content Wrapper */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }} // subtle parallax
        >

          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-white tracking-wide">
              Your Financial Partner for Growth
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-xl"
          >
            Strategic Financial Excellence
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed drop-shadow-lg"
          >
            Expert chartered accountants dedicated to optimizing your business finances, minimizing tax liability, and driving sustainable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 hover:scale-105 shadow-xl shadow-accent/20"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white  hover:bg-white/20 transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom Center Progress Dots (Animated) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
          h-3 rounded-full transition-all duration-300 
          ${index === currentSlide ? "bg-accent w-10" : "bg-white/40 w-3 hover:bg-white/60"}
        `}
            />
          ))}
        </div>
      </section>

      {/* Ken Burns + float + growline Animation */}
      <style jsx global>{`
  @keyframes kenburns {
    0% { transform: scale(1.05) translateY(0); }
    100% { transform: scale(1.15) translateY(-3%); }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes floatSlow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0px); }
  }

  @keyframes growline {
    0% {
      transform: scaleX(0);
      transform-origin: left;
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      transform-origin: left;
      opacity: 1;
    }
  }
`}</style>

      {/* Services Section */}
      <section id="services" className="relative py-14 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in-up">
              Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
              We provide end-to-end financial solutions tailored to your business needs
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* CARD 1 */}
            <motion.div
              className="group relative rounded-2xl border border-border/70 bg-card/70 backdrop-blur-lg p-8 shadow-md transition-all duration-300 hover:-translate-y-3 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >

              {/* Hidden image that appears on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg"
                  alt="Service Showcase"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Foreground content */}
              <div className="relative z-10 hover:text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/50 transition-colors">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold e mb-3">
                  Financial Planning
                </h3>
                <p className=" mb-5">
                  Strategic budgeting, forecasting, and financial analysis for smarter growth.
                </p>

                <Link href="#" className="inline-flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="group relative rounded-2xl border border-border/70 bg-card/70 backdrop-blur-lg p-8 shadow-md transition-all duration-300 hover:-translate-y-3 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >

              {/* Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Showcase"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative z-10 hover:text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/50 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold  mb-3">
                  Tax Compliance
                </h3>
                <p className=" mb-5">
                  Professional tax planning & regulatory compliance management.
                </p>

                <Link href="#" className="inline-flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="group relative rounded-2xl border border-border/70 bg-card/70 backdrop-blur-lg p-8 shadow-md transition-all duration-300 hover:-translate-y-3 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >

              {/* Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                  alt="Showcase"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative z-10 hover:text-white">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/50 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold  mb-3">
                  Business Advisory
                </h3>
                <p className=" mb-5">
                  Growth planning, mergers, restructuring & business strategy.
                </p>

                <Link href="#" className="inline-flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Benefits Section – pill bar style */}
      <section className="py-14 bg-secondary/30 relative overflow-hidden">
        {/* Floating blobs */}
        <div
          className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          style={{ animation: "float 6s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ animation: "floatSlow 8s ease-in-out infinite 1s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance animate-fade-in-up">
              Why Partner With Us
            </h2>
            <p className="max-w-5xl mx-auto text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              A complete service stack — from strategy to execution — so you work with one dependable partner for your financial journey.
            </p>
          </motion.div>

          {/* Pill rows – similar to screenshot */}
          <div className="space-y-6">
            {[
              { icon: "💼", title: "Expertise You Trust", desc: "Decades of experience across diverse industries." },
              { icon: "⚡", title: "Quick Turnaround", desc: "Efficient processes delivering fast, accurate results." },
              { icon: "🛡️", title: "Complete Security", desc: "Your data protected with enterprise-grade standards." },
              { icon: "📈", title: "Growth Focus", desc: "We optimize every engagement for long-term value." },
              { icon: "🤝", title: "Partner Mindset", desc: "We work alongside your team, not just as vendors." },
              { icon: "📊", title: "Insight-Led Decisions", desc: "Clear reporting, dashboards, and scenario planning." },
            ].map((item, idx) => {
              const reversed = idx % 2 === 1; // alternate left / right like screenshot
              return (
                <motion.div
                  key={idx}
                  className={`animate-fade-in-up flex flex-col  gap-2 md:gap-6 md:items-center ${reversed ? "md:flex-row-reverse text-right" : "md:flex-row "
                    }`}
                  style={{ animationDelay: `${idx * 0.08}s` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.05 }}
                >
                  {/* Icon circle */}
                  <div className="shrink-0 mb-8">
                    <div className="h-14 w-14 rounded-full border-4 border-primary/60 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.15)] flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Gradient pill + description */}
                  <div className="w-full md:max-w-2xl ">
                    <div className="inline-flex w-full  items-center rounded-full bg-linear-to-r from-green-700  to-green-600 px-6 py-3 shadow-md">
                      <span className="text-sm sm:text-base  font-semibold text-white whitespace-normal">
                        {item.title}
                      </span>
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-6 items-stretch">
            {/* LEFT: IMAGE */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden h-90 rounded-xl shadow-[0_24px_60px_rgba(15,23,42,0.35)] bg-slate-200"
            >
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full max-h-90 object-cover"
              />
              {/* subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-slate-900/40 via-transparent to-transparent" />

              {/* small floating badge */}
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-800 shadow-md">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Audit & Assurance Highlight</span>
              </div>
            </motion.div>

            {/* RIGHT: CONTENT CARD */}
            <motion.div
              key={`card-${activeIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-170 h-50 top-18 right-40 rounded-xl bg-[#0b3158] text-white p-8 sm:p-5 flex flex-col justify-between shadow-[0_24px_60px_rgba(15,23,42,0.55)]"
            >
              {/* icon + tag */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-6 w-6 text-emerald-300" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100/80">
                  {active.tag}
                </div>
              </div>

              {/* main text */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold leading-snug">
                  {active.title}
                </h3>
                <p className="text-sm sm:text-base text-sky-100/90">
                  {active.description}
                </p>
              </div>

              {/* controls + dots */}
              <div className="mt-8 flex items-center justify-between">
                {/* slider dots */}
                <div className="flex items-center gap-2">
                  {HIGHLIGHTS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${idx === activeIndex
                        ? "w-6 bg-emerald-300"
                        : "w-3 bg-white/40 hover:bg-white/70"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* prev / next buttons */}
                <div className="flex gap-1 bottom-0 ">
                  <button
                    onClick={goPrev}
                    className="flex h-9 w-9 bg-white items-center justify-center rounded-full border border-black/40 hover:bg-white/50 transition-colors"
                    aria-label="Previous highlight"
                  >
                    <ArrowLeft className="h-4 w-4 text-black" />
                  </button>
                  <button
                    onClick={goNext}
                    className="flex h-9 w-9 bg-white items-center justify-center rounded-full border border-black/40 hover:bg-white/50 transition-colors"
                    aria-label="Next highlight"
                  >
                    <ArrowRight className="h-4 w-4 text-black" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio / Timeline Section */}
      <section id="portfolio" className="py-14 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance animate-fade-in-up">
              Success Stories
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              See how we&apos;ve transformed businesses through strategic financial planning
            </p>
          </motion.div>

          {/* Timeline wrapper */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/90  pointer-events-none" />

            <div className="space-y-10 md:space-y-16">
              {[
                {
                  icon: TrendingUp,
                  label: "Revenue Growth",
                  stat: "+150%",
                  detail: "in 18 months after restructuring and forecasting",
                  period: "Phase 01",
                  side: "left",
                  color: "text-green-800",
                },
                {
                  icon: Award,
                  label: "Compliance Excellence",
                  stat: "8 Years",
                  detail: "zero major audit findings across all entities",
                  period: "Phase 02",
                  side: "right",
                  color: "text-green-800",
                },
                {
                  icon: Users,
                  label: "Business Expansion",
                  stat: "3 Deals",
                  detail: "closed in 2024 with full transaction support",
                  period: "Phase 03",
                  side: "left",
                  color: "text-green-800",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                const isLeft = item.side === "left";

                return (
                  <motion.div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 animate-fade-in-up ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    style={{ animationDelay: `${0.1 + idx * 0.12}s` }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`
                  relative z-10 flex items-center justify-center
                  h-10 w-10 rounded-full bg-background
                  md:absolute
                  ${isLeft ? "md:left-[calc(50%-1.25rem)]" : "md:left-[calc(50%-1.25rem)]"}
                `}
                    >
                      <span className="absolute inset-0 rounded-full bg-primary/15 blur-sm" />
                      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/40 bg-card shadow-md">
                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      </span>
                    </div>

                    {/* Empty spacer on one side for alignment on desktop */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Card */}
                    <div
                      className={`
                  md:w-1/2
                  relative rounded-2xl border border-green-800/50 bg-card/90 backdrop-blur
                  p-6 sm:p-7 shadow-sm transition-all duration-300
                  hover:-translate-y-2 hover:shadow-[0_18px_60px_rgba(15,23,42,0.25)]
                `}
                    >
                      {/* Accent pill */}
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80 mb-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item.period}
                      </div>

                      <div className="flex items-start gap-4 ">
                        {/* Icon bubble */}
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-400/60">
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
                            {item.label}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {item.detail}
                          </p>

                          <div className="flex items-baseline gap-2">
                            <span className={`text-2xl sm:text-3xl font-bold ${item.color}`}>
                              {item.stat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section with Counter Animation */}
      <section className="relative  overflow-hidden py-10 text-primary-foreground" style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* soft glows */}
        <div className="absolute inset-0 bg-black/80 " />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-2xl px-6 py-2 text-center shadow-[0_14px_45px_rgba(0,0,0,0.25)] animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                {/* top glow bar */}
                <div className="pointer-events-none absolute inset-x-0 -top-px h-0.5 bg-linear-to-r from-white/10 via-white/70 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* pulse dot */}
                <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold mb-2 leading-none transform transition-transform duration-300 group-hover:scale-110">
                  <AnimatedCounter
                    to={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                <p className="text-sm sm:text-base text-primary-foreground/80 mt-1">
                  {stat.label}
                </p>

                {/* bottom gradient line */}
                <div className="mt-4 h-0.5 w-16 mx-auto bg-linear-to-r from-emerald-200 via-white to-transparent opacity-60 group-hover:w-24 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}


      <section className="py-16 bg-linear-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        {/* soft background glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-400/14 blur-3xl" />
          <div className="absolute -bottom-16 -right-10 h-80 w-80 rounded-full bg-sky-400/16 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sector Coverage
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground mb-3 text-balance">
              Industry Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep, hands-on experience across sectors where regulation, risk and
              growth intersect.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr,1.4fr] items-start">
            {/* left highlight card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-black/40 bg-card/90 px-6 py-7 sm:px-8 sm:py-9 shadow-2xl shadow-black/50"
            >
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-10 right-[-5%] h-40 w-40 rounded-full bg-emerald-400/18 blur-3xl" />
                <div className="absolute bottom-[-15%] left-[-10%] h-52 w-52 rounded-full bg-sky-400/18 blur-3xl" />
              </div>

              <div className="relative ">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 mb-2">
                  Why it matters
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-4">
                  Specialists, not generalists.
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed">
                  Each sector comes with its own mix of regulations, reporting
                  standards, funding patterns, and risk triggers. Our team brings
                  sector-specific playbooks plus the ability to connect numbers with
                  real-world operations.
                </p>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Built for fast-moving founders and CFOs who need clarity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>
                      Playbooks for VC-backed, family-owned, and professionally
                      managed businesses.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>
                      From bookkeeping to board decks, tailored to your industry’s
                      language.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* right – vertical sector list */}
            <div className="relative">
              {/* vertical line */}
              <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden sm:block">
                <div className="mx-auto h-full w-px bg-linear-to-b from-emerald-500/90 via-border to-transparent" />
              </div>

              <div className="space-y-4 sm:space-y-5">
                {[
                  "Technology",
                  "Manufacturing",
                  "Healthcare",
                  "Real Estate",
                  "Retail",
                  "Finance",
                  "Education",
                  "Hospitality",
                ].map((industry, idx) => (
                  <motion.div
                    key={industry}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                    className="relative flex gap-4 rounded-2xl border border-black/40 bg-card/80 px-4 py-4 sm:px-5 sm:py-5 shadow-sm hover:shadow-[0_16px_45px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {/* timeline node */}
                    <div className="relative flex flex-col items-center">
                      <div className="hidden sm:block h-full w-px bg-border/70 absolute top-0 left-1/2 -translate-x-1/2" />
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500/80 to-sky-500/80 text-background text-xs font-semibold shadow-lg">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-sm sm:text-base font-semibold text-foreground">
                          {industry}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          Core Sector
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Advisory, compliance, and reporting designed for{" "}
                        {industry.toLowerCase()} businesses, aligning numbers with
                        on-ground realities.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-14 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT: TEXT CONTENT */}
            <motion.div
              className="animate-fade-in-up"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3">
                Why work with us
              </p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Why{" "}
                <span className="inline-block rounded-lg bg-lime-300 px-2 text-slate-900">
                  Choose
                </span>{" "}
                Us
              </h2>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over two decades of experience, our team of qualified chartered accountants brings
                expertise across diverse industries and business models.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We combine traditional accounting excellence with modern financial technology to deliver
                results that exceed expectations.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Expert certified professionals",
                  "Personalized service approach",
                  "Latest compliance technology",
                  "Transparent pricing & communication",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* RIGHT: IMAGE CLUSTER LIKE REFERENCE DESIGN */}
            <motion.div
              className="relative h-[360px] sm:h-[420px] md:h-[440px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7 }}
            >
              {/* Soft background blob */}
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-[40px] bg-primary/15 blur-3xl" />

              {/* Top image card */}
              <div className="absolute left-6 top-0 w-[60%] h-40 sm:h-44 rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.35)] bg-slate-200 transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]">
                <img
                  src="https://thearchitectsdiary.com/wp-content/uploads/2021/10/dhwa-Architecture-Interiors-1.jpeg"
                  alt="Team at work"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Main large card */}
              <div className="absolute right-0 bottom-10 w-full sm:w-[88%] h-56 sm:h-74 rounded-4xl overflow-hidden shadow-[0_26px_80px_rgba(15,23,42,0.45)] bg-slate-200 transition-transform duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02]">
                <img
                  src="https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg"
                  alt="Financial advisory meeting"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-6 bottom-5 text-white space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                    Client-first approach
                  </p>
                  <p className="text-sm font-medium text-white/90">
                    Long-term partnerships built on trust and clarity.
                  </p>
                </div>
              </div>

              {/* Bottom-left mini card */}
              <div className="absolute left-0 bottom-0 w-40 h-32 rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(15,23,42,0.32)] transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03]">
                <div className="h-[60%] w-full">
                  <img
                    src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg"
                    alt="Audit & review"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-[40%] px-3 pt-2 text-[11px]">
                  <span className="block text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    See our
                  </span>
                  <span className="font-semibold text-slate-800">Client case studies</span>
                </div>
              </div>

              {/* Stat pill (top-right) */}
              <div className="absolute -right-1.5 top-16 w-40 rounded-3xl bg-slate-900 text-white px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.6)] transition-transform duration-500 ease-out hover:-translate-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Trusted Since
                </p>
                <p className="text-2xl font-bold leading-none mb-1">1999</p>
                <p className="text-[11px] text-slate-300">
                  Serving businesses with reliable advisory and compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="timeline-section max-w-7xl mx-auto py-10">
        <h1 className='text-5xl font-semibold text-center mb-10'>Our Process</h1>
        <div className="timeline-steps">

          {/* 1. Initial Consultation */}
          <div className="step step-top">
            <div className="icon-outer">
              <div
                className="icon-inner "
              >
                <img src="https://www.erpca.com/wp-content/uploads/2024/11/office-space-design-office-3d-rendering-scaled.jpg" alt="" className='h-full w-full' />
              </div>
            </div>
            <div className="step-title">Initial Consultation:</div>
            <p className="step-desc">
              We understand your <b>business, goals,</b> and current <b>financial challenges</b> through a discovery meeting.
            </p>
          </div>

          <div className="line" />

          {/* 2. Data & Document Review */}
          <div className="step step-bottom">
            <div className="icon-outer">
              <div
                className="icon-inner "
              >
                <img src="https://media.istockphoto.com/id/1042650228/photo/young-businesswoman-calculating-bill-in-office.jpg?s=612x612&w=0&k=20&c=zsHhExzJ_j9c9rObifhOVf84cE_Uf3Kt_xgEVuI8EwY=" alt="" className='h-full w-full' />
              </div>
            </div>
            <div className="step-title blue">Data & Document Review:</div>
            <p className="step-desc">
              We analyse your <b>financial statements, tax returns,</b> and records to identify <b>gaps, risks,</b> and opportunities.
            </p>
          </div>

          <div className="line1" />

          {/* 3. Strategy & Planning */}
          <div className="step step-top">
            <div className="icon-outer">
              <div
                className="icon-inner "
              >
                <img src="https://volzero.com/img/article/56917c42-173d-416a-acaa-1e28b1fdcd46_559944.jpg" alt="" className='h-full w-full' />
              </div>
            </div>
            <div className="step-title">Strategy & Planning:</div>
            <p className="step-desc">
              We design a personalised <b>tax, compliance,</b> and <b>cash-flow strategy</b> aligned with your business goals.
            </p>
          </div>

          <div className="line" />

          {/* 4. Implementation & Filing */}
          <div className="step step-bottom">
            <div className="icon-outer">
              <div
                className="icon-inner "
              >
                <img src="https://www.architectandinteriorsindia.com/cloud/2021/11/15/DSC_1717.jpg" alt="" className='h-full w-full' />
              </div>
            </div>
            <div className="step-title blue">Implementation & Filing:</div>
            <p className="step-desc">
              We ensure <b>accurate bookkeeping, timely filings,</b> and complete <b>statutory compliance</b> with precision.
            </p>
          </div>

          <div className="line1" />

          {/* 5. Ongoing Advisory */}
          <div className="step step-top">
            <div className="icon-outer">
              <div
                className="icon-inner "
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBL1d-sH55dXjTcMuYcyLW7ZU-9UJO1T6Mvw&s" alt="" className='h-full w-full' />
              </div>
            </div>
            <div className="step-title">Ongoing Review & Advisory:</div>
            <p className="step-desc">
              We provide <b>MIS reports, financial insights,</b> and proactive <b>advisory</b> for continuous business growth.
            </p>
          </div>

        </div>
      </section>
{/* rivew */}
   <section className="py-16 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Customer Voices
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground">
              What our clients say
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              Real feedback from founders and teams who use our services to
              bring clarity, control, and confidence to their numbers.
            </p>
          </div>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-4 rounded-2xl bg-card border border-black/50 px-4 py-3">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(averageRating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-amber-200"
                  }`}
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm">
              <div className="font-semibold text-foreground">
                {averageRating.toFixed(1)} / 5.0
              </div>
              <div className="text-muted-foreground text-[11px] uppercase tracking-[0.16em]">
                Based on {reviews.length} reviews
              </div>
            </div>
          </div>
        </div>

        {/* Main card */}
        <div className="relative">
          <div className="rounded-3xl border border-black/40 bg-card/90 backdrop-blur-sm px-6 py-8 h-60 sm:px-10 sm:py-10 shadow-[0_18px_55px_rgba(15,23,42,0.15)]">
            {/* quote icon */}
            <div className="mb-4 flex items-center justify-between  gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Quote className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {activeReview.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {activeReview.role}
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(activeReview.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-amber-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
              “{activeReview.text}”
            </p>

            {/* dots */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setReviewIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === reviewIndex
                          ? "w-6 bg-emerald-500"
                          : "w-2 bg-emerald-200/70"
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>

              {/* controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground hover:text-foreground hover:bg-emerald-50 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground hover:text-foreground hover:bg-emerald-50 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
{/* faq */}
 <section className="py-16 bg-secondary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Have Questions?
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground">
            CA Services – FAQs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Quick answers to the most common questions founders and finance
            teams ask us before getting started.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-black/50 bg-card/90 px-4 py-3 sm:px-5 sm:py-4"
              >
                <button
                  className="flex w-full items-center justify-between gap-3 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-sm sm:text-base font-semibold text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-foreground">
                <img
                  src="https://www.gkcco.com/wp-content/uploads/2019/11/logo.jpg"
                  alt=""
                  className="h-12 w-60"
                />
              </div>
              <p className="text-background/70 text-sm leading-relaxed">
                Strategic financial solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><Link href="#" className="hover:text-background transition">Tax Planning</Link></li>
                <li><Link href="#" className="hover:text-background transition">Audit</Link></li>
                <li><Link href="#" className="hover:text-background transition">Compliance</Link></li>
                <li><Link href="#" className="hover:text-background transition">Advisory</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><Link href="#" className="hover:text-background transition">About</Link></li>
                <li><Link href="#" className="hover:text-background transition">Team</Link></li>
                <li><Link href="#" className="hover:text-background transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-background transition">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><Link href="#" className="hover:text-background transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-background transition">Terms</Link></li>
                <li><Link href="#" className="hover:text-background transition">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-sm text-background/70">
            <p>&copy; 2025 G.K. Choksi & Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
