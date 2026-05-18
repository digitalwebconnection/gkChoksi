import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   Branch Data
========================= */
const branches = [
    {
        city: "New Delhi",
        address: `514...515 / FIFTH FLOOR TOLSTOY HOUSE, TOLSTOY MARG, JANPATH, 
NEW DELHI, DELHI, INDIA,
 110001`,
        phone: "+91 11 43717773",
        email: "delhi@gkcco.com",
        mapQuery: "Tolstoy House Janpath New Delhi",
    },
    {
        city: "Mumbai",
        address: `708, RAHEJA CHAMBERS, FREE PRESS JOURNAL ROAD, NARIMAN POINT,
MUMBAI,MAHARASHTRA, INDIA,
 400021`,
        phone: `+91 22 6632444
+91 22 22826087`,
        email: "gkcmumbai@gmail.com",
        mapQuery: "Raheja Chambers Nariman Point Mumbai",
    },
    {
        city: "Petlad, Gujarat",
        address: `SURYA BHAWAN,STATION ROAD,
 PETLAD,GUJARAT, 
 INDIA,
388450`,
        phone: `+91 2697 224383
+91 2697 224108`,
        email: "petlad@gkcco.com",
        mapQuery: "Surya Bhavan Petlad Gujarat",
    },
];

/* =========================
   Animations
========================= */
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

/* =========================
   Map Helper
========================= */
const openMap = (address: string) => {
    const encodedAddress = encodeURIComponent(address.replace(/\n/g, " "));
    window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
        "_blank"
    );
};




const ContactSection: React.FC = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        // Use .set to avoid duplicates if fields exist in JSX
        formData.set("access_key", "147bc68b-90f2-46b1-8ff7-2b83e5845e33");
        formData.set("subject", `New Inquiry from ${formData.get("name") || "GK Choksi Website"}`);
        formData.set("from_name", "GK Choksi Website");
        formData.set("replyto", formData.get("email") as string);

        // Ensure botcheck is handled
        if (!formData.has("botcheck")) {
            formData.append("botcheck", "");
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                (event.target as HTMLFormElement).reset();
                setShowPopup(true);
            } else {
                console.error("Web3Forms Error:", data);
                setResult(data.message || "Error submitting form. Please try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setResult("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#F7F9F8] py-24 relative">
            {/* Thank You Popup */}
            <AnimatePresence>
                {showPopup && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowPopup(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Popup Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl overflow-hidden text-center"
                        >
                            {/* Decorative Background Blob */}
                            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-green-50 opacity-50 blur-3xl" />

                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <CheckCircle2 size={40} />
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Message Sent!
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Thank you for reaching out. Your inquiry has been received, and one of our senior advisors will contact you shortly.
                                </p>

                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="w-full py-4 bg-[#0F3D2E] hover:bg-[#1F6F5B] text-white rounded-2xl font-bold tracking-wide transition shadow-lg hover:shadow-xl"
                                >
                                    Done
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <section className="bg-slate-50 pb-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}


                    <p className="mt-4 text-center  text-xl font-semibold text-[#0F3D2E] max-w-3xl mx-auto animate-slideUp delay-100">
                        Have a question about accounting, taxation, audit or compliance?
                        Our team will guide you with clarity and professional expertise.
                    </p>

                    {/* Main Grid */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                        {/* RIGHT – Contact Form */}
                        <div className="lg:col-span-2 relative bg-linear-to-br from-gray-50 to-white  shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-5 md:p-8 overflow-hidden">

                            {/* Decorative Accent */}
                            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-green-100 opacity-40 blur-3xl" />

                            {/* Header */}
                            <div className="relative mb-12">
                                <span className="inline-block text-lg font-semibold uppercase  text-[#0F3D2E] mb-3">
                                    Confidential Advisory
                                </span>

                                <h3 className="text-3xl md:text-5xl font-bold drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] text-[#C2A96A] leading-tight">
                                    Speak With Our Experts
                                </h3>


                            </div>

                            {/* Form */}
                            <form onSubmit={onSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Web3Forms hidden required fields */}
                                <input type="hidden" name="access_key" value="147bc68b-90f2-46b1-8ff7-2b83e5845e33" />
                                <input type="hidden" name="subject" value="New Inquiry from GK Choksi & Co. Website" />
                                <input type="hidden" name="from_name" value="GK Choksi Website" />
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your full name"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Business Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="name@company.com"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Registered entity name"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Designation */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Designation / Role
                                    </label>
                                    <input
                                        type="text"
                                        name="designation"
                                        placeholder="e.g. Director, CFO, Founder"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Required Service
                                    </label>
                                    <select
                                        name="service"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Taxation & Compliance">Taxation & Compliance</option>
                                        <option value="Audit & Assurance">Audit & Assurance</option>
                                        <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                                        <option value="Corporate Advisory">Corporate Advisory</option>
                                    </select>
                                </div>

                                {/* Branch Selection */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Preferred Branch
                                    </label>
                                    <select
                                        name="preferred_branch"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100"
                                    >
                                        <option value="Ahmedabad (Head Office)">Ahmedabad (Head Office)</option>
                                        {branches.map((b) => (
                                            <option key={b.city} value={b.city}>{b.city}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold uppercase  text-gray-500 mb-2">
                                        Message / Inquiry Details
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={2}
                                        placeholder="How can we assist you today?"
                                        className="w-full rounded-xl border border-gray-200 px-5 py-4 text-gray-900 outline-none transition focus:border-green-800 focus:ring-2 focus:ring-green-100 resize-none"
                                    ></textarea>
                                </div>

                                {/* CTA */}
                                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2 border-t border-gray-100">

                                    <p className="text-md text-gray-900 max-w-md">
                                        Your information is kept strictly confidential <br />
                                        and reviewed only by senior advisors.
                                    </p>

                                    <div className="flex flex-col items-end gap-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`inline-flex items-center gap-3 rounded-2xl bg-[#0F3D2E] 
                                  
                                                text-white px-4 md:px-14 py-4 font-semibold tracking-wide transition hover:shadow-2xl
                                                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? "Sending..." : "Request Consultation"}
                                            {!isSubmitting && <span className="text-lg">→</span>}
                                        </button>
                                        {result && (
                                            <p className={`text-sm font-medium ${result.includes("Successfully") ? "text-green-600" : "text-red-600"}`}>
                                                {result}
                                            </p>
                                        )}
                                    </div>

                                </div>

                            </form>
                        </div>

                        {/* LEFT – Contact Cards */}
                        <div className="lg:col-span-1 space-y-10 animate-slideUp">

                            {/* Call Card */}
                            <div className="group bg-white  shadow-xl border border-gray-800/10 p-6 transition-all
          hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white">

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-[#1F6F5B] group-hover:text-[#1c1c1c] mb-4">
                                    <Phone size={22} />
                                </div>

                                <p className="text-xs font-semibold text-[#1F6F5B] uppercase mb-2">Call</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Talk to our team</h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    For quick queries and consultation scheduling.
                                </p>

                                <a href="tel:+917968198900" className="font-medium text-gray-900 hover:text-[#1F6F5B]">
                                    +91 79 681 98900
                                </a>
                            </div>

                            {/* Email Card */}
                            <div className="group bg-white  shadow-xl border border-gray-800/10 p-6 transition-all
          hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white">

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-[#1F6F5B] mb-4 group-hover:text-[#1c1c1c]">
                                    <Mail size={22} />
                                </div>

                                <p className="text-xs font-semibold text-[#1F6F5B] uppercase mb-2">Email</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Write to us</h3>

                                <a href="mailto:hr@gkcco.com" className="block font-medium text-gray-900 hover:underline">
                                    hr@gkcco.com
                                </a>
                                <a href="mailto:info@gkcco.com" className="block font-medium text-gray-900 hover:underline">
                                    info@gkcco.com
                                </a>

                            </div>

                            {/* Office Card */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=G.K.+Choksi+%26+Co.+Ahmedabad+Gujarat+380058"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white block shadow-xl border border-gray-800/10 p-6 transition-all
          hover:-translate-y-2 hover:shadow-2xl hover:bg-linear-to-br hover:from-green-100 hover:to-white"
                            >

                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-[#1F6F5B] mb-4 group-hover:text-[#1c1c1c]">
                                    <MapPin size={22} />
                                </div>

                                <p className="text-xs font-semibold text-[#1F6F5B] uppercase mb-2">Head Office</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit our office</h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    12th Floor, North Tower, ONE42,<br />
                                    Billionaires Street, off Ambli Road,<br />
                                    Ahmedabad, Gujarat – 380058
                                </p>
                            </a>

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
                    <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-black/80" />

                    {/* Content Grid */}
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 p-12 lg:p-16 h-full items-center">

                        {/* Left – Brand Presence */}
                        <div>
                            <span className="inline-block text-lg  drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] uppercase text-white font-semibold">
                                Office Headquarters
                            </span>

                            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] text-[#C2A96A] font-serif leading-snug ">
                                G.K. Choksi & Co.
                                <span className="block text-gray-300 text-xl md:text-2xl mt-2">
                                    Ahmedabad
                                </span>
                            </h2>




                        </div>

                        {/* Right – Glass Location Card */}
                        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-8 lg:p-10 max-w-md ml-auto">
                            <p className="text-lg  uppercase text-white font-semibold">
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

                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // ❗ important
                                    openMap("12th Floor, North Tower, ONE42, Billionaires Street, off Ambli Road, Ahmedabad, Gujarat – 380058");
                                }}
                                className="inline-flex items-center gap-2 text-sm font-semibold
          text-white bg-[#0F3D2E] px-4 py-2 rounded-full
          hover:rounded-tr-3xl hover:rounded-bl-3xl
          transition-all duration-300"
                            >
                                <MapPin size={18} />
                                View on Map
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branches Section */}
            <section className="relative pt-12  overflow-hidden">

                {/* Decorative blobs */}

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] text-[#C2A96A] font-serif leading-snug max-w-2xl mx-auto text-center">
                            Our Branches
                        </h2>

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
                                border border-white/60 hover:shadow-2xl
                                transition-all duration-500"
                            >
                                {/* Top Accent */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute top-0 left-0 h-1 rounded-t-3xl
                             bg-[#1F6F5B]"
                                />

                                {/* Icon */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="w-12 h-12 flex items-center justify-center
                             rounded-full bg-green-100 text-[#1F6F5B] mb-6"
                                >
                                    <MapPin />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    {branch.city}
                                </h3>
                                <div className="space-y-5 text-gray-700">
                                    {/* Address */}
                                    <div className="flex gap-3">
                                        <MapPin size={18} className="text-green-700 mt-1" />
                                        <p className="whitespace-pre-line ">{branch.address}</p>
                                    </div>
                                    {/* Phone */}
                                    <div className="flex gap-3">
                                        <Phone size={18} className="text-green-700 mt-1" />
                                        <p className="whitespace-pre-line">{branch.phone}</p>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-3">
                                        <Mail size={18} className="text-green-700 mt-1" />
                                        <p>{branch.email}</p>
                                    </div>
                                    {/* View on Map */}
                                    <button
                                        onClick={() => openMap(branch.address)}
                                        className="inline-flex items-center gap-2 text-md font-semibold
                               text-white bg-[#0F3D2E] px-4 py-1 rounded-full   hover:rounded-tr-3xl hover:rounded-bl-3xl   hover:text-white transition-colors"
                                    >
                                        <MapPin size={20} />
                                        View on Map
                                    </button>
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
