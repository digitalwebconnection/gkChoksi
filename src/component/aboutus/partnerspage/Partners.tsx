import { useState } from "react";
import { partners } from "./Data";
import PartnerModal from "./PartnerModal";
import HeroSection from "./HeroSection";

const Partners = () => {
    const [selectedPartner, setSelectedPartner] = useState<any>(null);

    return (
        <>
            <HeroSection />

            <div className="max-w-7xl mx-auto px-6 py-12">

                <h1 className="text-5xl text-[#1C1C1C] font-semibold text-center pb-20">
                    Our Partners
                </h1>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
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
                                    className="w-full h-80 object-cover 
                  grayscale scale-100
                  group-hover:grayscale-0 
                  transition duration-500"
                                />

                                {/* OVERLAY */}
                                <div className="absolute bottom-0 w-full p-4 text-white 
                  bg-linear-to-t from-[#0F3D2E] via-[#0F3D2E]/80 to-transparent
                  transition-all duration-300"
                                >
                                    <h3 className="font-semibold text-lg group-hover:text-[#C2A96A]">
                                        {partner.name}
                                    </h3>
                                    <p className="text-sm text-gray-200">
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