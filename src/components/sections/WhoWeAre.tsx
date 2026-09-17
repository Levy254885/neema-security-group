"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-[#F5F5F5] py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-[24px] sm:text-[28px] font-bold text-black mb-6">
          Who We Are
        </h2>

        <div className="relative h-[220px] sm:h-[300px] lg:h-[360px] overflow-hidden mb-6">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
            alt="Neema Security Group team"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <h3 className="text-[17px] font-bold text-black">Our Journey</h3>
        <p className="mt-2 text-[14px] sm:text-[15px] text-gray leading-relaxed max-w-2xl">
          Neema Security Group is a professional security provider focused on
          vigilance, integrity and protection. We deliver disciplined personnel,
          clear procedures and reliable coverage for homes, businesses and
          institutions.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-red"
        >
          Read more
          <ChevronRight size={16} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
