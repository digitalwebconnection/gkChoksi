// src/components/PartnerCard.tsx

import { Link } from "react-router-dom";
import type { Partner } from "../data/partners";

interface Props {
  partner: Partner;
}

export default function PartnerCard({ partner }: Props) {
  return (
    <Link to={`/about/partners/${partner.id}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        
        {/* Image */}
        <img
          src={partner.image}
          alt={partner.name}
          className="h-[280px] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-90" />

        {/* Glass Info Card */}
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4 transition-all duration-500 group-hover:bg-white/15">
          <h3 className="text-lg font-semibold text-white leading-tight">
            {partner.name}
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            {partner.role}
          </p>

          {/* CTA */}
          <span className="mt-3 inline-block text-xs font-medium tracking-wide text-white/80 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            View Profile →
          </span>
        </div>

        {/* Glow Effect */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
      </div>
    </Link>
  );
}
