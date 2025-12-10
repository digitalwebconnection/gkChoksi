
import { motion } from "framer-motion";
import "./heroAnimations.css"; // <- external CSS with keyframes

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};


const HomeTestimonials = () => {
 
  

  return (
    <>
          <motion.section
        className="timeline-section max-w-7xl mx-auto py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65 }}
      >
        <motion.h1
          className="text-5xl font-semibold text-center "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h1>
        <div className="timeline-steps">
          {/* 1. Initial Consultation */}
          <motion.div
            className="step step-top mb-15"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="icon-outer">
              <div className="icon-inner ">
                <img
                  src="https://immigracia.ca/wp-content/uploads/2023/07/consultation-1.jpeg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="step-title">Initial Consultation:</div>
            <p className="step-desc">
              We understand your <b>business, goals,</b> and current{' '}
              <b>financial challenges</b> through a discovery meeting.
            </p>
          </motion.div>

          <div className="line" />

          {/* 2. Data & Document Review */}
          <motion.div
            className="step step-bottom mt-30"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="icon-outer">
              <div className="icon-inner ">
                <img
                  src="https://www.shutterstock.com/image-photo/businessman-document-management-system-dms-600nw-2162094655.jpg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="step-title blue">Data & Document Review:</div>
            <p className="step-desc">
              We analyse your <b>financial statements, tax returns,</b> and records to
              identify <b>gaps, risks,</b> and opportunities.
            </p>
          </motion.div>

          <div className="line1" />

          {/* 3. Strategy & Planning */}
          <motion.div
            className="step step-top mb-15"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.11 }}
          >
            <div className="icon-outer">
              <div className="icon-inner ">
                <img
                  src="https://static.wixstatic.com/media/f5a7ea_eb1644b0d8364633832498a0e55a1a3b~mv2.jpg/v1/fill/w_640,h_450,al_t,q_80,usm_4.00_1.00_0.00,enc_avif,quality_auto/f5a7ea_eb1644b0d8364633832498a0e55a1a3b~mv2.jpg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="step-title">Strategy & Planning:</div>
            <p className="step-desc">
              We design a personalised <b>tax, compliance,</b> and <b>cash-flow strategy</b>{' '}
              aligned with your business goals.
            </p>
          </motion.div>

          <div className="line" />

          {/* 4. Implementation & Filing */}
          <motion.div
            className="step step-bottom mt-30"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <div className="icon-outer">
              <div className="icon-inner ">
                <img
                  src="https://rayhannoman.com/storage/posts/Sv7t0WMngC2nOXAo8ENbUhPDfSC7mAFTnrjf7WZW.jpg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="step-title blue">Implementation & Filing:</div>
            <p className="step-desc">
              We ensure <b>accurate bookkeeping, timely filings,</b> and complete{' '}
              <b>statutory compliance</b> with precision.
            </p>
          </motion.div>

          <div className="line1" />

          {/* 5. Ongoing Advisory */}
          <motion.div
            className="step step-top mb-15"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.17 }}
          >
            <div className="icon-outer">
              <div className="icon-inner ">
                <img
                  src="https://www.investopedia.com/thmb/vfl0lrU4M1P3Zsnbyf5jDL4W0-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1803777103-03b3b05e0ff542f6bcf7e4070fb37b09.jpg"
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="step-title">Ongoing Review & Advisory:</div>
            <p className="step-desc">
              We provide <b>MIS reports, financial insights,</b> and proactive{' '}
              <b>advisory</b> for continuous business growth.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeTestimonials;
