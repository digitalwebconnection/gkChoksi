import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { partners } from "./Data";
import HeroSection from "./HeroSection";

const PartnerDetail = () => {
  const { id } = useParams<{ id: string }>();

  const partner = useMemo(() => {
    const numId = id != null ? Number(id) : NaN;
    return partners.find((p) => p.id === numId) ?? null;
  }, [id]);

  if (!partner) {
    return (
      <>
        <HeroSection />
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-lg text-[#1C1C1C] mb-6">Partner not found.</p>
          <Link
            to="/about/partners"
            className="text-[#0F3D2E] font-medium underline underline-offset-4 hover:text-[#C2A96A]"
          >
            Back to partners
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          to="/about/partners"
          className="inline-block text-sm text-[#0F3D2E] font-medium mb-8 hover:text-[#C2A96A]"
        >
          ← All partners
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 rounded-sm overflow-hidden shadow-xl bg-white">
          <div className="bg-gray-100 md:col-span-4 p-8 text-center flex flex-col justify-center">
            <img
              src={partner.image}
              alt={partner.name}
              className="w-64 h-64 shadow-xl object-cover mx-auto"
            />
            <h1 className="text-xl font-bold mt-6 text-[#0F3D2E]">{partner.name}</h1>
            <p className="text-gray-600 mt-1">{partner.designation}</p>
            <p className="text-[#1F6F5B] mt-3 text-sm">{partner.email}</p>
          </div>
          <div className="bg-[#0F3D2E] md:col-span-8 text-white p-8">
            {[partner.description1, partner.description2, partner.description3]
              .filter(Boolean)
              .map((text, i) => (
                <p key={i} className="leading-relaxed mt-4 first:mt-0">
                  {text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDetail;
