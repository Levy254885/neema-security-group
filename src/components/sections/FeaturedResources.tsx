"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FeaturedResources() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-charcoal mb-6">
          Featured Resources
        </h2>

        <Link
          href="/contact"
          className="group block bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden"
        >
          <div className="relative h-[180px] sm:h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              alt="Security risk assessment resource"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="p-5">
            <h3 className="text-[16px] sm:text-[18px] font-bold text-charcoal leading-snug group-hover:text-red transition-colors">
              The Security Risks of Mobile Access and Implementation
            </h3>
            <p className="mt-2 text-[13px] text-gray leading-relaxed">
              Practical guidance on assessing risks at the gate, reception and across your sites before designing a workable security plan.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-red">
              Read more
              <ChevronRight size={16} strokeWidth={2.5} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
