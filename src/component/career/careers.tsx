import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import careerHero from "../../assets/25.jpg";
import { Link } from "lucide-react";

// Constants defined outside component to prevent re-allocation
const COLORS = {
  IVORY: "#F7F9F8",
  CHARCOAL: "#1C1C1C",
  GOLD: "#C2A96A",
  ACCENT: "#6FAF9B",
};

const JOBS = [
  {
    title: "Manager ( Audit & Assurance)",
    description: "Lead and execute statutory audit engagements of various clients in line with auditing and accounting standards.",
    responsibilities: [
      "Work with Audit team to execute Statutory Audits of Indian GAAP ( AS and IND AS clients)",
      "Auditing and reviewing the clients financial statements, maintaining and preparing its financial reports, managing relationships.",
      "Identify issues, offer suggestions and discuss with seniors to resolve them.",
      "Be able to prioritize assignments deadlines and respond to clients and firm's needs.",
      "To work under stringent deadlines and demanding client conditions"
    ],
    requirements: [
      "CA Having 4 to 5 years of post qualification experience in Statutory Audit in a similar environment (Audit and Accounting firms)",
      "Strong technical knowledge of Indian Accounting Standard (Ind AS) and Standards on Auditing (SAs).",
      "Practical exposure in handling statutory audit. Experience of handing IND AS clients will be added advantage."
    ]
  },
  {
    title: "Senior Manager",
    description: "Lead and execute statutory audit engagements of various clients in line with auditing and accounting standards.",
    details: {
      "Post / Designation": "Senior Manager",
      "Qualification": "CA, FCA",
      "Experience": "10 to 15 years in Statutory Audit in a similar environment",
      "Employment": "Full-time",
      "Salary": "Negotiable",
      "Location": "Ahmedabad"
    },
    skillRequirement: [
      "Strongly sound with technical knowledge of Indian Accounting Standard (IND AS) and Standards on Auditing (SAs).",
      "Team player and smooth work coordination with clients while conducting assigned official duties.",
      "Exposure with Internal Audits with be added advantage.",
      "Drafting skills to prepare various audit working papers.",
      "Identify issues, offer suggestions and resolve.",
      "Prioritize assignments deadlines and respond to clients and firm's needs.",
      "To work under stringent deadlines and demanding client conditions."
    ]
  },
  {
    title: "Fresher CA the Field of Auditing and Assurance (Preferable Male)",
    points: [
      "Working knowledge of all latest updates including Ind AS, IGAAP, GST, Income Tax Act and other relates acts used in the field of auditing and assurance.",
      "Proficient knowledge of Word, Excel, SAP ERP and other accounting software's including tally.",
      "Skills of administrating a team of articles and planning work to meet strict deadlines of assignment."
    ]
  },
  {
    title: "CS: Job Description Fresher 0-2 years / Male",
    points: [
      "Incorporation of Public/ Private Co. & LLPs",
      "MOA & AOA – Drafting & Alterations etc.",
      "ROC Annual fillings of the Public/Private Co. & LLPs.",
      "DIN & DSC Applications",
      "XBRL – Conversion of a financial statements in a XBRL form.",
      "Capital Structuring, Name Change, Change of a Registered Office, Conversion from public to private limited & vice versa, Appointment, Re-appointment & Resignation of a Directors, KMPs, Statutory Auditors etc. of a company",
      "Charge Creation/ Modification/ Satisfaction.",
      "Proceedings of Allotment, Transfer, Split, Consolidation of shares.",
      "Filing application, affidavits and resolutions to the Regional Director for the grant of approval under the said section.",
      "Handling & Conducting the Board Meetings.",
      "Drafting of scheme of arrangement in the nature of merger/Amalgamation/de Merger under section 230 to 233 and filed respective forms."
    ]
  },
  {
    title: "Recruitment of CA (Fresher)",
    points: [
      "Working knowledge of all latest updates including Ind AS, IGAAP, GST, Income Tax Act.",
      "Proficient knowledge of financial systems and audit methodologies.",
      "Strong analytical and documentation skills."
    ]
  }
]

interface JobAccordionProps {
  job: Job;
  isOpen: boolean;
  onClick: () => void;
}

interface Job {
  title: string;
  description?: string;
  details?: Record<string, string>;
  responsibilities?: string[];
  requirements?: string[];
  skillRequirement?: string[];
  points?: string[];
}

const JobAccordion = ({ job, isOpen, onClick }: JobAccordionProps) => {
  return (
    <div className="border border-[#1C1C1C]/10 rounded-xl overflow-hidden mb-4 transition-all duration-300 shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left transition-all"
        style={{
          backgroundColor: isOpen ? COLORS.IVORY : 'white',
          color: COLORS.CHARCOAL
        }}
      >
        <span className="font-bold text-lg md:text-xl tracking-tight leading-tight">{job.title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="shrink-0 ml-4"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-8 space-y-6 text-[#1C1C1C]/80 border-t border-[#1C1C1C]/5">
              {job.description && (
                <div>
                  <p className="font-bold text-[#1C1C1C] mb-2 uppercase text-xs tracking-widest">Description</p>
                  <p className="leading-relaxed">{job.description}</p>
                </div>
              )}

              {job.details && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-lg border border-[#C2A96A]/20" style={{ backgroundColor: COLORS.IVORY }}>
                  {Object.entries(job.details).map(([key, value]) => (
                    <p key={key} className="text-sm">
                      <span className="font-bold text-[#1C1C1C]">{key}: </span> {String(value)}
                    </p>
                  ))}
                </div>
              )}

              {/* Dynamic rendering for List items */}
              {[
                { label: "Major Responsibilities", data: job.responsibilities },
                { label: "Experience & Background", data: job.requirements },
                { label: "Skill Requirements", data: job.skillRequirement },
                { label: "Key Points", data: job.points }
              ].map((section, idx) => section.data && (
                <div key={idx} className="space-y-3">
                  <p className="font-bold text-[#1C1C1C] text-sm uppercase tracking-wider">{section.label}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.data.map((item: string, i: number) => <li key={i} className="leading-relaxed">{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CareersPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen selection:bg-[#6FAF9B]/30" style={{ color: COLORS.CHARCOAL }}>

      {/* Optimized Hero Section */}
      <section className="relative h-150 flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
        <div
          className="absolute inset-0 z-0 opacity-60 scale-105"
          style={{
            backgroundImage: `url(${careerHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Removed bg-fixed to improve scroll performance
          }}
        />
        <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent to-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold uppercase tracking-[0.4em] mb-4 text-lg" style={{ color: COLORS.GOLD }}>
              Work With Us
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-md">
              A Place to Grow, <br />
              <span style={{ color: COLORS.ACCENT }}>Thoughtfully</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left side remains light on DOM weight */}
            <div className="lg:w-1/3 space-y-8">
              <div className="inline-block h-1 w-12" style={{ backgroundColor: COLORS.GOLD }} />
              <h2 className="text-4xl font-bold tracking-tight">Our Philosophy</h2>
              <div className="space-y-6 text-[#1C1C1C]/90">
                <p className="text-xl leading-relaxed font-light text-justify">
                  At our firm, individuals are encouraged to think independently, take ownership, and contribute meaningfully from the outset.
                </p>
                <p className="text-lg leading-relaxed border-l-4 pl-6 italic" style={{ borderColor: COLORS.GOLD }}>
                  We foster an environment that values curiosity, discipline, and integrity.
                </p>
                <p className="text-xl leading-relaxed font-light text-justify">
                  Contact with HR :
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center rounded-full border border-[#6FAF9B] px-8 py-3 text-sm font-semibold text-[#6FAF9B] backdrop-blur-sm transition duration-300 hover:bg-[#6FAF9B]/20"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>

            {/* Right Side: Accordion with lighter interaction */}
            <div className="lg:w-2/3">
              <div className="mb-6 p-4 rounded-lg bg-[#F7F9F8] border border-[#1C1C1C]/5">
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#1C1C1C]/60">Available Positions</h3>
              </div>
              <div>
                {JOBS.map((job, index) => (
                  <JobAccordion
                    key={index}
                    job={job}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 rounded-3xl text-center border border-[#C2A96A]/10" style={{ backgroundColor: COLORS.IVORY }}>
            <p className="text-2xl md:text-3xl font-light italic text-[#1C1C1C]/80">
              "We believe that a career is more than just a sequence of roles. It’s an opportunity to cultivate your craft and leave a lasting impact."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;