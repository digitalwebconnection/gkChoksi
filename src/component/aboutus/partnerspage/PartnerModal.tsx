import { motion, AnimatePresence } from "framer-motion";

interface PartnerModalProps {
  partner: any;
  onClose: () => void;
}

const PartnerModal = ({ partner, onClose }: PartnerModalProps) => {
  return (
    <AnimatePresence>
      {partner && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"

          // BACKDROP ANIMATION
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          onClick={onClose}
        >
          {/* MODAL BOX */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[95%] md:w-full max-w-5xl rounded-xl overflow-hidden relative shadow-2xl max-h-[90vh] overflow-y-auto md:overflow-hidden"

            // POPUP ANIMATION
            initial={{ scale: 0.85, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 60 }}

            transition={{ duration: 0.4, ease: "easeOut" }}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-800 md:text-white text-3xl z-30 hover:scale-110 transition bg-white/20 md:bg-transparent rounded-full p-1"
            >
              ✕
            </button>

            <div className="grid grid-cols-12 h-auto md:h-130">

              {/* LEFT SIDE */}
              <div className="bg-gray-50 col-span-12 md:col-span-4 p-8 md:p-6 text-center flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-200">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-48 h-48 md:w-72 md:h-72 shadow-2xl rounded-lg object-fill mb-2"
                />

                <h2 className="text-xl font-bold mt-4 text-[#0F3D2E]">
                  {partner.name}
                </h2>

                <p className="text-gray-600  font-bold">{partner.designation}</p>

                <p className="text-[#1F6F5B] font-bold mt-2 text-lg">
                  {partner.email}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-[#0F3D2E] text-justify col-span-12 md:col-span-8 text-white px-8 md:px-12 py-10 md:py-12 overflow-y-auto">

                {[partner.description1, partner.description2, partner.description3, partner.description4]
                  .filter(Boolean)
                  .map((text, i) => (
                    <motion.p
                      key={i}
                      className="leading-relaxed text-md mt-4 first:mt-0"

                      // TEXT ANIMATION
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {text}
                    </motion.p>
                  ))}

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PartnerModal;