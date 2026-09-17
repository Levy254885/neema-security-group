"use client";

import Link from "next/link";

export default function Welcome() {
  return (
    <section className="bg-red text-white">
      <div className="max-w-[900px] mx-auto px-6 py-14 sm:py-16 lg:py-20 text-center">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold uppercase tracking-[0.08em]">
          Welcome to Neema Security
        </h2>
        <div className="flex items-center justify-center gap-1.5 mt-4 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <p className="text-[14px] sm:text-[15px] text-white/95 leading-relaxed max-w-xl mx-auto">
          Welcome to Neema Security Group. We are a professional security solutions
          provider focused on vigilance, integrity and protection for homes, businesses
          and institutions across the region.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center justify-center px-8 py-2.5 border-2 border-white text-white text-[12px] font-bold uppercase tracking-wider hover:bg-white hover:text-red transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
