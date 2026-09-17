"use client";

import Link from "next/link";

export default function Commitment() {
  return (
    <section className="bg-red text-white py-12 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[22px] sm:text-[26px] font-bold">
          Our Commitment
        </h2>
        <p className="mt-4 text-[14px] text-white/95 leading-relaxed max-w-xl">
          As a professional security provider, our values form a key part of how
          we work. Vigilance, integrity and protection guide how we recruit,
          train and deploy every officer.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-red text-[13px] font-semibold hover:bg-off-white transition-colors"
          >
            Our Values
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-5 py-2.5 border border-white text-white text-[13px] font-semibold hover:bg-white/10 transition-colors"
          >
            How We Work
          </Link>
        </div>
      </div>
    </section>
  );
}
