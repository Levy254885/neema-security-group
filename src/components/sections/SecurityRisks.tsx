"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SecurityRisks() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-black leading-[1.15] tracking-tight">
            Understanding Your
            <br />
            Organisation&apos;s Security
            <br />
            Risks
          </h2>
          <p className="mt-5 text-[15px] sm:text-[16px] text-gray leading-relaxed">
            We understand that each customer has a unique risk profile and risk
            tolerance. Leading with a practical approach to security programme
            design, we help clients recognise their vulnerabilities and identify
            the best people, process and technology solutions to address them.
          </p>
          <p className="mt-4 text-[15px] sm:text-[16px] text-gray leading-relaxed">
            Take the first step in understanding your unique risk profile with a
            complimentary security assessment discussion.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-red hover:bg-red-dark text-white text-[16px] font-semibold transition-colors"
          >
            Start Review
            <ChevronRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="mt-12 relative h-[200px] sm:h-[240px] max-w-lg">
          <div className="absolute left-0 top-4 w-[70%] h-[90%] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-black/5 rotate-[-3deg] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="absolute left-[18%] top-0 w-[70%] h-[90%] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.14)] border border-black/5 rotate-[2deg] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red/10 to-transparent" />
            <div className="relative p-5 h-full flex flex-col justify-end">
              <p className="text-[11px] font-bold tracking-widest text-red uppercase">
                Risk Review
              </p>
              <p className="mt-1 text-sm font-bold text-charcoal">
                Neema Security Assessment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
