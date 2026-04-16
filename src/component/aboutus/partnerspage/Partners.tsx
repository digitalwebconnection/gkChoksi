import { useState } from "react";
import { partners } from "./Data";
import PartnerModal from "./PartnerModal";
import HeroSection from "./HeroSection";

const Partners = () => {
    const [selectedPartner, setSelectedPartner] = useState<any>(null);

    return (
        <>
            <HeroSection />
            {/* DESCRIPTION */}

            <div className="max-w-6xl mx-auto px-6 py-12">

                <h1 className="text-5xl text-[#1C1C1C] font-semibold text-center pb-2 ">
                    Our Partners
                </h1>
                <p className="text-lg pb-20 text-center  leading-relaxed mb-8">
                    Our partners combine deep technical expertise with seasoned judgment,
                    ensuring every engagement is led with personal involvement. With diverse
                    industry experience, we bring clarity to complexity and guide decisions
                    with integrity, intent, and responsibility.
                </p>
                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            onClick={() => setSelectedPartner(partner)}
                            className="cursor-pointer group"
                        >
                            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                                {/* IMAGE */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-4 text-center">

                                    {/* NAME */}
                                    <h3 className="font-semibold text-gray-900 text-md">
                                        {partner.name}
                                    </h3>

                                    {/* DESIGNATION */}
                                    <p className="text-sm text-gray-500 mt-1">
                                        {partner.designation}
                                    </p>

                                    {/* DIVIDER */}
                                    <div className="w-6 h-0.5 bg-[#6FAF9B] mx-auto mt-3 group-hover:w-10 transition-all duration-300" />
                                    <p className="text-sm text-[#6FAF9B] font-medium mt-2 group-hover:text-[#0F3D2E]">
                                        Read More
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL */}
                <PartnerModal
                    partner={selectedPartner}
                    onClose={() => setSelectedPartner(null)}
                />
            </div>
        </>
    );
};

export default Partners;