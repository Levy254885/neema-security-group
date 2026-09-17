"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SecurityRisks() {
  return (
    <section className="bg-red text-white py-12 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-lg">
          <h2 className="text-[22px] sm:text-[26px] font-bold leading-tight">
            Understanding Your Organisation&apos;s Security Risks
          </h2>
          <p className="mt-4 text-[14px] text-white/95 leading-relaxed">
            Every site has different risks. We help you identify vulnerabilities,
            prioritise what matters and put practical measures in place so
            protection fits how you actually operate.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors"
          >
            Find out more
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
