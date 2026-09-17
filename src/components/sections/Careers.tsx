"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Careers() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
          alt="Careers at Neema Security"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-[22px] sm:text-[28px] font-bold text-white">
          Careers at Neema
        </h2>
        <p className="mt-3 text-[14px] text-white/90 max-w-md mx-auto leading-relaxed">
          Join a team that values discipline, reliability and service. Browse
          openings and find where you belong.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 px-6 py-3 bg-red text-white text-[13px] font-semibold hover:bg-red-dark transition-colors"
        >
          Find Your Future
          <ChevronRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
