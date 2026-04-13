import { motion } from "framer-motion";
import "./heroAnimations.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const HomeTestimonials = () => {
  return (
    <>
      <motion.section
        className="timeline-section max-w-7xl mx-auto py-10 bg-[#F7F9F8]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65 }}
      >
        <motion.h1
          className="text-5xl font-semibold text-center text-[#1C1C1C]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Process
        </motion.h1>

        <div className="timeline-steps">

          {/* 1 */}
          <motion.div className="step step-top mb-15">
            <div className="icon-outer">
              <div className="icon-inner">
                <img src="https://immigracia.ca/wp-content/uploads/2023/07/consultation-1.jpeg" className="h-full w-full" />
              </div>
            </div>

            <div className="step-title text-[#0F3D2E]">Initial Consultation:</div>

            <p className="step-desc text-[#1F6F5B]">
              We understand your <b>business, goals,</b> and current{" "}
              <b>financial challenges</b>.
            </p>
          </motion.div>

          <div className="line bg-[#6FAF9B]" />

          {/* 2 */}
          <motion.div className="step step-bottom mt-30">
            <div className="icon-outer">
              <div className="icon-inner">
                <img src="https://www.shutterstock.com/image-photo/businessman-document-management-system-dms-600nw-2162094655.jpg" className="h-full w-full" />
              </div>
            </div>

            <div className="step-title text-[#0F3D2E]">Data & Document Review:</div>

            <p className="step-desc text-[#1F6F5B]">
              Analyse <b>financial statements, tax returns,</b> and identify{" "}
              <b>gaps, risks,</b> and opportunities.
            </p>
          </motion.div>

          <div className="line1 bg-[#6FAF9B]" />

          {/* 3 */}
          <motion.div className="step step-top mb-15">
            <div className="icon-outer">
              <div className="icon-inner">
                <img src="https://static.wixstatic.com/media/f5a7ea_eb1644b0d8364633832498a0e55a1a3b~mv2.jpg" className="h-full w-full" />
              </div>
            </div>

            <div className="step-title text-[#0F3D2E]">Strategy & Planning:</div>

            <p className="step-desc text-[#1F6F5B]">
              We design a personalised <b>tax, compliance,</b> and{" "}
              <b>cash-flow strategy</b>.
            </p>
          </motion.div>

          <div className="line bg-[#6FAF9B]" />

          {/* 4 */}
          <motion.div className="step step-bottom mt-30">
            <div className="icon-outer">
              <div className="icon-inner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwI_0jN25jaejTOy-yfIdQ2DNttxXEnElQng&s" className="h-full w-full" />
              </div>
            </div>

            <div className="step-title text-[#0F3D2E]">Implementation & Filing:</div>

            <p className="step-desc text-[#1F6F5B]">
              We ensure <b>accurate bookkeeping, timely filings,</b> and{" "}
              <b>statutory compliance</b>.
            </p>
          </motion.div>

          <div className="line1 bg-[#6FAF9B]" />

          {/* 5 */}
          <motion.div className="step step-top mb-15">
            <div className="icon-outer">
              <div className="icon-inner">
                <img src="https://www.investopedia.com/thmb/vfl0lrU4M1P3Zsnbyf5jDL4W0-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1803777103-03b3b05e0ff542f6bcf7e4070fb37b09.jpg" className="h-full w-full" />
              </div>
            </div>

            <div className="step-title text-[#0F3D2E]">Ongoing Review & Advisory:</div>

            <p className="step-desc text-[#1F6F5B]">
              We provide <b>MIS reports, financial insights,</b> and proactive{" "}
              <b>advisory</b>.
            </p>
          </motion.div>

        </div>

        
      </motion.section>
    </>
  );
};

export default HomeTestimonials;