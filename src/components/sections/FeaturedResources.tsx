"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FeaturedResources() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-[24px] sm:text-[28px] font-bold text-black mb-6 sm:mb-8">
          Featured Resources
        </h2>

        <Link
          href="/contact"
          className="group block bg-white border border-gray-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow overflow-hidden"
        >
          <div className="relative h-[180px] sm:h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              alt="Security resources"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <div className="p-5 sm:p-6">
            <h3 className="text-[17px] sm:text-[19px] font-bold text-black leading-snug group-hover:text-red transition-colors">
              Practical Guidance on Site Risk Assessments
            </h3>
            <p className="mt-2 text-[14px] text-gray leading-relaxed">
              How we evaluate threats, vulnerabilities and operational needs
              before designing a security plan that fits your site.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-red">
              Read more
              <ChevronRight size={16} strokeWidth={2.5} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
