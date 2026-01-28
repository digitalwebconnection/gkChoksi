import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";


const branches = [
    {
        city: "New Delhi",
        address: `207, Tolstoy House,
Tolstoy Marg, Janpath,
New Delhi – 110001`,
        phone: "+91 11 43717773",
        email: "delhi@gkcco.com",
    },
    {
        city: "Mumbai",
        address: `708, Raheja Chambers,
Nariman Point,
Mumbai – 400021`,
        phone: `+91 22 6632444
+91 22 22826087`,
        email: "gkcmumbai@gmail.com",
    },
    {
        city: "Petlad, Gujarat",
        address: `“Surya Bhavan”,
Station Road,
Petlad – 388450`,
        phone: `+91 2697 309214
+91 2697 224108`,
        email: "petlad@gkcco.com",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25 },
    },
};

const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7 },
    },
};



const ContactSection: React.FC = () => {
    return (
        <section className="bg-slate-50 py-24">
            <section className="bg-slate-50 pb-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-5xl font-bold text-center text-gray-900 animate-slideUp">
                        Contact GKC & CO
                    </h2>

                    <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto animate-slideUp delay-100">
                        Have a question about accounting, taxation, audit or compliance?
                        Our team will guide you with clarity and professional expertise.
                    </p>

                    {/* Main Grid */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                        {/* RIGHT – Contact Form */}
                        <div className="lg:col-span-2 relative bg-linear-to-br from-gray-50 to-white rounded-4xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-14 overflow-hidden">

                            {/* Decorative Accent */}
                            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-green-100 opacity-40 blur-3xl" />

                            {/* Header */}
                            <div className="relative mb-12">
                                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-800 mb-3">
                                    Confidential Advisory
                                </span>

                                <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                                    Speak With Our Experts
                                </h3>

                                <p className="mt-4 text-gray-600 max-w-md">
                                    Structured advice. Strategic clarity. Long-term compliance.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="relative grid grid-cols-1 md:grid-cols-2 gap-10">

                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                                        Business Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Registered entity name"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                                        Required Service
                                    </label>
                                    <select className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100">
                                        <option>Select a service</option>
                                        <option>Taxation & Compliance</option>
                                        <option>Audit & Assurance</option>
                                        <option>Accounting & Bookkeeping</option>
                                        <option>Corporate Advisory</option>
                                    </select>
                                </div>

                                {/* Designation */}
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                                        Designation / Role
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Director, CFO, Founder"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* CTA */}
                                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-gray-100">

                                    <p className="text-sm text-gray-500 max-w-md">
                                        Your information is kept strictly confidential <br />
                                        and reviewed only by senior advisors.
                                    </p>

                                    <button
                                        type="submit"
                                        className="inline-flex items-center gap-3 rounded-2xl bg-green-800 px-14 py-4 text-white font-semibold tracking-wide transition hover:bg-green-900 hover:shadow-2xl"
                                    >
                                        Request Consultation
                                        <span className="text-lg">→</span>
                                    </button>

                                </div>

                            </form>
                        </div>

                        {/* LEFT – Contact Cards */}
                        <div className="lg:col-span-1 space-y-4 animate-slideUp">

                            {/* Call Card */}
                            <div className="group bg-white rounded-2xl shadow-xl border border-gray-800/30 p-6 transition-all
          hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white">

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-4">
                                    <Phone size={22} />
                                </div>

                                <p className="text-xs font-semibold text-green-800 uppercase mb-2">Call</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Talk to our team</h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    For quick queries and consultation scheduling.
                                </p>

                                <a href="tel:+917968198900" className="font-medium text-gray-900 hover:text-green-700">
                                    +91 79 68198900
                                </a>
                            </div>

                            {/* Email Card */}
                            <div className="group bg-white rounded-2xl shadow-xl border border-gray-800/30 p-6 transition-all
          hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-blue-100 hover:to-white">

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-4">
                                    <Mail size={22} />
                                </div>

                                <p className="text-xs font-semibold text-blue-700 uppercase mb-2">Email</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Write to us</h3>

                                <a href="mailto:info@gkcco.com" className="block font-medium text-gray-900 hover:underline">
                                    info@gkcco.com
                                </a>
                                <a href="mailto:ahmedabad@gkcco.com" className="block font-medium text-gray-900 hover:underline">
                                    ahmedabad@gkcco.com
                                </a>
                            </div>

                            {/* Office Card */}
                            <div className="group bg-white rounded-2xl shadow-xl border border-gray-800/30 p-6 transition-all
          hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white">

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-700 mb-4">
                                    <MapPin size={22} />
                                </div>

                                <p className="text-xs font-semibold text-green-800 uppercase mb-2">Head Office</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit our office</h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    12th Floor, North Tower, ONE42,<br />
                                    Billionaires Street, off Ambli Road,<br />
                                    Ahmedabad, Gujarat – 380058
                                </p>
                            </div>

                        </div>


                    </div>
                </div>



            </section>
            {/* MAP – Full Width Bottom */}
            <div className="max-w-full mx-auto ">
                <div className="relative  overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.35)] bg-black">

                    {/* Map */}
                    <iframe
                        title="GKC Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8024685583355!2d72.4921301!3d23.031023899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b88ab1457bb%3A0x83f1972df6fde861!2sG.K.%20Choksi%20%26%20Co.!5e0!3m2!1sen!2sin!4v1769512788095!5m2!1sen!2sin"
                        className="absolute inset-0 w-full h-full opacity-90"
                        loading="lazy"
                    />

                    {/* Luxury Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-black/80" />

                    {/* Content Grid */}
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 p-12 lg:p-16 h-full items-center">

                        {/* Left – Brand Presence */}
                        <div>
                            <span className="inline-block text-xs tracking-[0.3em] uppercase text-emerald-400 font-semibold">
                                Corporate Headquarters
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white leading-tight">
                                GKC & CO
                                <span className="block text-gray-300 text-2xl mt-2">
                                    Ahmedabad
                                </span>
                            </h2>

                            <p className="mt-6 text-gray-300 max-w-md leading-relaxed">
                                Strategically located at ONE42, North Tower —
                                a landmark corporate destination designed for leadership,
                                governance, and global advisory excellence.
                            </p>

                            {/* Trust Indicators */}
                            <div className="mt-10 flex gap-10">
                                <div>
                                    <p className="text-2xl font-bold text-white">50+</p>
                                    <p className="text-xs uppercase tracking-wider text-gray-200">
                                        Years of Trust
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">India</p>
                                    <p className="text-xs uppercase tracking-wider text-gray-200">
                                        Pan Presence
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">Global</p>
                                    <p className="text-xs uppercase tracking-wider text-gray-200">
                                        Clientele
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right – Glass Location Card */}
                        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 lg:p-10 max-w-md ml-auto">
                            <p className="text-xs tracking-widest uppercase text-emerald-300 font-semibold">
                                Visit Our Office
                            </p>

                            <h4 className="text-xl font-bold text-white mt-2">
                                ONE42, North Tower
                            </h4>

                            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                                Off Ambli Road,
                                Ahmedabad – 380058
                                Gujarat, India
                            </p>

                            <div className="mt-8 flex gap-4">
                                <a
                                    href="https://maps.app.goo.gl/tS8Msd3B9h5kYXup8"
                                    className="flex-1 text-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition font-semibold text-white"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branches Section */}
            <section className="relative pt-12 bg-linear-to-b from-slate-50 via-white to-slate-100 overflow-hidden">

                {/* Decorative background blobs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -right-24 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-4xl mx-auto"
                    >

                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            Our Branches Across India
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                            Strategically positioned offices delivering trusted accounting,
                            audit, taxation, and advisory solutions.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {branches.map((branch, index) => (
                            <motion.div
                                key={index}
                                variants={card}
                                whileHover={{ y: -12 }}
                                className="relative rounded-3xl p-8 bg-white/70 backdrop-blur-xl
                         border border-white/60  hover:shadow-2xl
                         transition-all duration-500"
                            >
                                {/* Top animated accent */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute top-0 left-0 h-1 rounded-t-3xl bg-linear-to-r from-green-600 to-emerald-500"
                                />

                                {/* Floating Icon */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 mb-6"
                                >
                                    <MapPin />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    {branch.city}
                                </h3>

                                <div className="space-y-5 text-gray-700">
                                    <div className="flex gap-3">
                                        <MapPin size={18} className="text-green-700 mt-1" />
                                        <p className="whitespace-pre-line">{branch.address}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone size={18} className="text-green-700 mt-1" />
                                        <p className="whitespace-pre-line">{branch.phone}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <Mail size={18} className="text-green-700 mt-1" />
                                        <p>{branch.email}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </section>
    );
};

export default ContactSection;
