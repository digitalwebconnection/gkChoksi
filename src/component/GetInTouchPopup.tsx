import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone } from "lucide-react";

const GetInTouchModal = ({ open, setOpen }: any) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 z-10"
          >

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              ✕
            </button>

            {/* HEADER */}
            <h2 className="text-2xl font-semibold text-center text-gray-900">
              Get In Touch
            </h2>

            <p className="text-center text-sm text-gray-500 mt-1">
              Our team will connect with you shortly
            </p>

            {/* FORM */}
            <form className="mt-6 space-y-5">

              {/* NAME */}
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#0F3D2E] outline-none"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#0F3D2E] outline-none"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-[#0F3D2E] outline-none"
                />
              </div>

              {/* POSITION */}
             <div className="space-y-1">
  <label className="text-sm text-gray-600">
    Department Worked In
  </label>

  <div className="relative">
    <select
      defaultValue=""
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0F3D2E] outline-none text-gray-700 bg-white appearance-none"
    >
      <option value="" disabled>
        Select Department
      </option>
      <option value="audit">Audit</option>
      <option value="legal">Legal</option>
      <option value="tax">Tax</option>
    </select>

    {/* Custom arrow */}
    <div className="absolute right-3 top-3 text-gray-400 pointer-events-none">
      ▼
    </div>
  </div>
</div>

              {/* MESSAGE */}
              <textarea
                rows={3}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#0F3D2E] outline-none"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-[#0F3D2E] to-[#C2A96A] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
              >
                Submit Inquiry
              </button>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GetInTouchModal;