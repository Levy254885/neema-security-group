"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-charcoal mb-6">
          Who We Are
        </h2>

        <div className="relative h-[220px] sm:h-[280px] overflow-hidden mb-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
            alt="Neema Security Group team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <h3 className="text-[16px] font-bold text-charcoal">Our Journey</h3>
        <p className="mt-2 text-[14px] text-gray leading-relaxed">
          Neema Security Group is a professional security provider focused on
          vigilance, integrity and protection. We deliver disciplined personnel,
          clear procedures and reliable coverage for homes, businesses and
          institutions.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-red"
        >
          Read more
          <ChevronRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
