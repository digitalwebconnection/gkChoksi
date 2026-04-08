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
            className="bg-white max-w-5xl w-full rounded-sm overflow-hidden relative shadow-2xl"
            
            // POPUP ANIMATION
            initial={{ scale: 0.85, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 60 }}

            transition={{ duration: 0.4, ease: "easeOut" }}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-white text-2xl z-10 hover:scale-110 transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-12 h-130">

              {/* LEFT SIDE */}
              <div className="bg-gray-100 col-span-12 md:col-span-4 p-6 text-center flex flex-col justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-80 h-80 shadow-xl object-fill mx-auto   "
                />

                <h2 className="text-xl font-bold mt-4 text-[#0F3D2E]">
                  {partner.name}
                </h2>

                <p className="text-gray-600">{partner.designation}</p>

                <p className="text-[#1F6F5B] mt-2 text-sm">
                  {partner.email}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="bg-[#0F3D2E] col-span-12 md:col-span-8 text-white p-6 overflow-y-auto">

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