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

            <div className="max-w-7xl mx-auto px-6 py-12">

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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-15">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            onClick={() => setSelectedPartner(partner)}
                            className="cursor-pointer group"
                        >
                            <div className="relative group-hover:scale-105 overflow-hidden group hover:shadow-2xl transition duration-300">

                                {/* IMAGE */}
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="w-full h-60 object-fill 
                  grayscale scale-100
                  group-hover:grayscale-0 
                  transition duration-500"
                                />

                                {/* OVERLAY */}
                                <div className="absolute bottom-0 w-full p-4 text-white 
                  bg-linear-to-t from-[#0F3D2E] via-[#0F3D2E]/80 to-transparent
                  transition-all duration-300"
                                >
                                    <h3 className="font-semibold  hidden group-hover:block text-lg group-hover:text-[#C2A96A]">
                                        {partner.name}
                                    </h3>
                                    <p className="text-sm hidden group-hover:block text-gray-200">
                                        {partner.designation}
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