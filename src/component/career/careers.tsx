import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users
} from "lucide-react";
import careerHero from "../../assets/Career/1.jpeg";



const JOBS = [
 {
  title: "Article Assistant - Audit",
  type: "Full-Time",
  location: "Ahmedabad",
  exp: "Only fresher",
  icon: <Briefcase className="w-5 h-5" />,

  description:
    "Kickstart your professional journey with hands-on exposure to real-world audit, taxation, and advisory engagements. Work closely with experienced professionals and build strong technical and analytical skills.",

  responsibilities: [
    "Assist in Statutory Audits of Indian GAAP (AS & IND AS) clients",
    "Support in preparation and review of financial statements",
    "Work on audit documentation, compliance, and reporting",
    "Assist in handling client queries and coordination",
    "Identify discrepancies and support senior team members with solutions",
    "Maintain working papers and ensure timely completion of assignments"
  ],

  requirements: [
    "CA Intermediate (Both Groups cleared)",
    "Strong interest in Audit, Accounting, and Financial Reporting",
    "Basic knowledge of Ind AS and Standards on Auditing",
    "Good understanding of MS Excel and MS Office tools",
    "Strong analytical and problem-solving skills",
    "Willingness to learn and adapt in a professional environment",
    "Good communication and teamwork abilities"
  ],

},
{
  title: "Article Assistant - Tax",
  type: "Full-Time",
  location: "Ahmedabad",
  exp: "Only fresher", 
  icon: <Briefcase className="w-5 h-5" />,

  description:
    "Gain real-time exposure to income tax litigation, advisory, and compliance. Work on high-impact tax matters and develop strong legal, analytical, and drafting skills in a professional environment.",

  responsibilities: [
    "Assist in handling income tax proceedings including assessment, reassessment, and appeals",
    "Support in tax litigation matters and advisory assignments",
    "Prepare submissions, replies, and legal documents",
    "Conduct research on tax laws, case laws, and interpretations",
    "Assist in transfer pricing, search & survey related matters",
    "Work closely with seniors on complex tax cases"
  ],

  requirements: [
    "CA Intermediate (Both Groups cleared in recent attempts)",
    "Strong interest in Direct Tax Litigation & Advisory",
    "Passion for legal drafting and tax interpretation",
    "Good research and analytical skills",
    "Proficiency in MS Word & Excel (data analysis, reconciliations)",
    "Logical thinking and problem-solving mindset",
    "Willingness to learn and grow in taxation domain"
  ],


}
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const CareersPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#FDFDFD] min-h-screen text-[#1A1A1A] overflow-x-hidden">

      {/* 1. HERO SECTION WITH IMAGE REVEAL */}
      <section className="relative h-150 flex items-center justify-center bg-[#1A1A1A]">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${careerHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1A1A1A]/30 to-[#1A1A1A]/70" />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className=" text-[#0bd390] drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)]  py-1 rounded-full text-lg font-bold tracking-[0.3em] uppercase mb-2 inline-block">
              Work With Us
            </span>
            <h1 className="text-5xl font-serif md:text-7xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold text-white tracking-tighter leading-none mb-6">
              A Place to Grow, <br />
              <span className="text-[#079264]">Thoughtfully.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. CULTURE & LISTING SECTION */}
      <section className="py-24 px-6 lg:px-5 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">

          {/* Left: Why Us */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <h2 className="text-4xl  drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] font-bold mb-8 leading-tight">
              Why Our Firm Is The <span className="text-[#C2A96A]">Right Fit</span> For You.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#064631]/10 flex items-center justify-center shrink-0 text-[#064631]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold  text-xl">Growth First</h4>
                  <p className="text-black/90 text-justify text-md">At our firm, individuals are encouraged to think independently, take ownership, and contribute meaningfully from the outset.</p> <br />

                  <p className="text-black/90 text-justify text-md">We foster an environment that values curiosity, discipline, and integrity where questions are welcomed, ideas are respected, and excellence is quietly pursued.</p>

             
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C2A96A]/10 flex items-center justify-center shrink-0 text-[#C2A96A]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Collaborative Culture</h4>
                  <p className="text-black/60 text-sm">Join us, and build a career defined by substance, not just scale.</p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-3 text-[#064631] text-lg font-bold group"
            >
              Learn more about our values
              <ArrowRight className="w-5 h-5 group-hover:text-[#C2A96A] transition-colors" />
            </motion.button>
          </div>

          {/* Right: Modern Jobs Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="uppercase tracking-widest text-lg font-bold text-black">Open Roles</h3>
              <div className="h-px flex-1 mx-6 bg-black/5" />
            </div>

            {JOBS.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${openIndex === idx
                  ? "border-[#815f09] bg-white shadow-2xl shadow-[#C2A96A]/10"
                  : "border-black/50 bg-[#F8F9FA] hover:border-[#C2A96A]/40"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${openIndex === idx ? "bg-[#C2A96A] text-white" : "bg-white text-black/20"}`}>
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-xs font-medium text-black/40">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {job.exp}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`mt-2 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-[#C2A96A]" : "text-black/20"}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="px-8 pb-10 pt-2 ml-20">
                        <div className="h-px bg-black/5 mb-8" />

                        {job.description && (
                          <p className="text-[#1A1A1A]/70 leading-relaxed mb-8 text-lg">{job.description}</p>
                        )}

                        <div className="grid md:grid-cols-2 mb-10 gap-10">
                          {/* Section: Responsibilities */}
                          {job.responsibilities && (
                            <div>
                              <h4 className="text-[#C2A96A] text-xs font-bold uppercase tracking-widest mb-6">Key Focus Areas</h4>
                              <ul className="space-y-4">
                                {job.responsibilities.map((item, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-black/80">
                                    <CheckCircle2 className="w-5 h-5 text-[#064631] shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Section: Requirements */}
                          {job.requirements && (
                            <div>
                              <h4 className="text-[#C2A96A] text-xs font-bold uppercase tracking-widest mb-6">Requirement</h4>
                              <ul className="space-y-4">
                                {job.requirements.map((item, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-black/80">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C2A96A] mt-2 shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <a
                        href="mailto:hr@gkcco.com"
                        className="mt-12 bg-[#1A1A1A] text-white  px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#C2A96A] transition-colors shadow-lg">
                          Apply for this position
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-8 px-6 bg-white overflow-hidden text-center">

        {/* 🌟 Soft Background Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#6FAF9B]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C2A96A]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto">


          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1C1C1C]"
          >
            Ready to <span className="text-[#C2A96A] ">make your mark?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg mb-12 leading-relaxed"
          >
            We are always looking for exceptional talent. If you don't see a role that fits,
            send us your resume anyway.
          </motion.p>


        </div>
      </section>
    </div>
  );
};

export default CareersPage;