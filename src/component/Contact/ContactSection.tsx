import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";




const ContactSection: React.FC = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Badge */}
                <div className="flex justify-center mb-4">
                    <span className="md:px-4 px-0 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full animate-fadeIn">
                        We respond within 24 hours
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-5xl font-bold text-center text-gray-900 animate-slideUp">
                    Contact GKC & CO
                </h2>

                <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto animate-slideUp delay-100">
                    Have a question about accounting, taxation, audit or compliance?
                    Our team will guide you with clarity and professional expertise.
                </p>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Call Card */}
                    <div className="group bg-white rounded-2xl shadow-xl border border-gray-800/30 p-6 transition-all duration-300 
            hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white">

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-4 group-hover:scale-110 transition">
                            <Phone size={22} />
                        </div>

                        <p className="text-xs font-semibold text-green-800 uppercase mb-2">
                            Call
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Talk to our team
                        </h3>

                        <p className="text-gray-600 text-sm mb-4">
                            For quick queries and consultation scheduling.
                        </p>

                        <a
                            href="tel:+917968198900"
                            className="block text-gray-900 font-medium hover:text-green-700"
                        >
                            +91 79 68198900
                        </a>
                    </div>

                    {/* Email Card */}
                    <div className="group bg-white rounded-2xl shadow-xl border border-gray-800/30 p-6 transition-all duration-300 
            hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-blue-100 hover:to-white">

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-4 group-hover:scale-110 transition">
                            <Mail size={22} />
                        </div>

                        <p className="text-xs font-semibold text-blue-700 uppercase mb-2">
                            Email
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Write to us
                        </h3>

                        <p className="text-gray-600 text-sm mb-4">
                            Send your queries, documents or partnership requests.
                        </p>

                        <a
                            href="mailto:info@gkcco.com"
                            className="block text-black font-medium hover:underline"
                        >
                            info@gkcco.com
                        </a>
                        <a
                            href="mailto:ahmedabad@gkcco.com"
                            className="block text-black font-medium hover:underline"
                        >
                            ahmedabad@gkcco.com
                        </a>
                    </div>

                    {/* Office Card */}
                    <div className="group bg-white rounded-2xl shadow-xl border border-gray-800/30 p-6 transition-all duration-300 
            hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white">

                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-4 group-hover:scale-110 transition">
                            <MapPin size={22} />
                        </div>

                        <p className="text-xs font-semibold text-green-800 uppercase mb-2">
                            Head Office
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Visit our office
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            12th Floor, North Tower, ONE42, <br />
                            Billionaires Street, off Ambli Road, <br />
                            Ashok Vatika, Ahmedabad, <br />
                            Gujarat – 380058
                        </p>
                    </div>

                </div>
            </div>



            {/* Animations */}
            <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            <section className="bg-white ">
                {/* Contact Form Section */}
                <div className="max-w-7xl mx-auto px-6 py-14">
                    <div className="flex justify-center">
                        <div className="w-full max-w-5xl p-8 md:p-10 animate-slideUp">

                            {/* Heading */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                                Contact Us
                            </h1>
                            <p className="mt-3 text-center text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, ipsa!
                            </p>

                            {/* Form */}
                            <form className="max-w-6xl mx-auto py-6 px-4">
                                <div className="flex flex-col md:flex-row gap-16">

                                    {/* Left Column: Context & Title */}
                                    <div className="md:w-1/3 space-y-4">
                                        <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase">
                                            Step 1 of 1
                                        </div>
                                        <h2 className="text-4xl font-light text-gray-900 leading-tight">
                                            Tell us about <br />
                                            <span className="font-serif italic font-semibold text-green-600">your business.</span>
                                        </h2>
                                        <p className="text-gray-800 text-sm">
                                            Fill out the details and our advisory team will reach out to schedule a discovery call.
                                        </p>
                                    </div>

                                    {/* Right Column: The Form */}
                                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

                                        {/* Name Field */}
                                        <div className="relative group border-b border-gray-300 focus-within:border-green-600 transition-colors duration-300">
                                            <label className="text-[12px] uppercase tracking-[0.2em] text-gray-800 group-focus-within:text-green-600 font-bold transition-colors">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Type here..."
                                                className="w-full py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-600"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div className="relative group border-b border-gray-300 focus-within:border-green-600 transition-colors duration-300">
                                            <label className="text-[12px] uppercase tracking-[0.2em] text-gray-800 group-focus-within:text-green-600 font-bold transition-colors">
                                                Business Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="email@company.com"
                                                className="w-full py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-600"
                                            />
                                        </div>

                                        {/* Company Field */}
                                        <div className="relative group border-b border-gray-300 focus-within:border-green-600 transition-colors duration-300">
                                            <label className="text-[12px] uppercase tracking-[0.2em] text-gray-800 group-focus-within:text-green-600 font-bold transition-colors">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Registered Name"
                                                className="w-full py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-600"
                                            />
                                        </div>

                                        {/* Service Select */}
                                        <div className="relative group border-b border-gray-300 focus-within:border-green-600 transition-colors duration-300">
                                            <label className="text-[12px] uppercase tracking-[0.2em] text-gray-800 group-focus-within:text-green-600 font-bold transition-colors">
                                                Required Service
                                            </label>
                                            <select className="w-full py-2 bg-transparent outline-none text-gray-800 appearance-none cursor-pointer">
                                                <option>Taxation & Compliance</option>
                                                <option>Audit & Assurance</option>
                                                <option>Accounting & Bookkeeping</option>
                                                <option>Corporate Advisory</option>
                                            </select>
                                        </div>

                                        {/* Designation Field (Full Width) */}
                                        <div className="md:col-span-2 relative group border-b border-gray-300 focus-within:border-green-600 transition-colors duration-300">
                                            <label className="text-[12px] uppercase tracking-[0.2em] text-gray-800 group-focus-within:text-green-600 font-bold transition-colors">
                                                Designation / Role
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Managing Director"
                                                className="w-full py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-600"
                                            />
                                        </div>

                                        {/* Button Wrapper */}
                                        <div className="md:col-span-2 pt-0">
                                            <button
                                                type="submit"
                                                className="flex items-center gap-6 group bg-green-800 px-10 py-2 rounded-2xl"
                                            >
                                                <span className="text-xl font-serif italic tracking-tight text-white">
                                                    Submit Inquiry
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[350px]">
                    <iframe
                        title="Company Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8024685583355!2d72.4921301!3d23.031023899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b88ab1457bb%3A0x83f1972df6fde861!2sG.K.%20Choksi%20%26%20Co.!5e0!3m2!1sen!2sin!4v1769496544365!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>

                {/* Animations */}
                <style>{`
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            </section>

            <section className="bg-white pt-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-gray-900 text-center">
                        Our Branches
                    </h2>

                    <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
                        Connect with our offices across India for professional accounting
                        and advisory services.
                    </p>

                    {/* Branches */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Delhi */}
                        <div className="space-y-6 border-l-4 border-green-600 pl-6">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                New Delhi
                            </h3>

                            <div className="flex gap-3 text-gray-700">
                                <MapPin size={18} className="mt-1 text-green-600" />
                                <p>
                                    207, Tolstoy House,<br />
                                    Tolstoy Marg, Janpath,<br />
                                    New Delhi – 110001
                                </p>
                            </div>

                            <div className="flex gap-3 text-gray-700">
                                <Phone size={18} className="mt-1 text-green-600" />
                                <p>+91 11 43717773</p>
                            </div>

                            <div className="flex gap-3 text-gray-700">
                                <Mail size={18} className="mt-1 text-green-600" />
                                <p>delhi@gkcco.com</p>
                            </div>
                        </div>

                        {/* Mumbai */}
                        <div className="space-y-6 border-l-4 border-green-600 pl-6">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Mumbai
                            </h3>

                            <div className="flex gap-3 text-gray-700">
                                <MapPin size={18} className="mt-1 text-green-600" />
                                <p>
                                    708, Raheja Chambers,<br />
                                    Free Press Journal Road,<br />
                                    Nariman Point, Mumbai,<br />
                                    Maharashtra – 400021
                                </p>
                            </div>

                            <div className="flex gap-3 text-gray-700">
                                <Phone size={18} className="mt-1 text-green-600" />
                                <p>
                                    +91 22 66324446 / +91 22 66324447<br />
                                    +91 22 22826087 / +91 22 22845316
                                </p>
                            </div>

                            <div className="flex gap-3 text-gray-700">
                                <Mail size={18} className="mt-1 text-green-600" />
                                <p>gkcmumbai@gmail.com</p>
                            </div>
                        </div>

                        {/* Petlad */}
                        <div className="space-y-6 border-l-4 border-green-600 pl-6">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Petlad, Gujarat
                            </h3>

                            <div className="flex gap-3 text-gray-700">
                                <MapPin size={18} className="mt-1 text-green-600" />
                                <p>
                                    “Surya Bhavan”,
                                    Station Road,<br />
                                    Petlad – 388450
                                </p>
                            </div>

                            <div className="flex gap-3 text-gray-700">
                                <Phone size={18} className="mt-1 text-green-600" />
                                <p>
                                    +91 2697 309214<br />
                                    +91 2697 224108
                                </p>
                            </div>

                            <div className="flex gap-3 text-gray-700">
                                <Mail size={18} className="mt-1 text-green-600" />
                                <p>petlad@gkcco.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ContactSection;
