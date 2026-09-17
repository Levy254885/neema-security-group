"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SecurityRisks() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green mb-3">
              Security Assessment
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-charcoal leading-tight tracking-tight">
              Understanding Your Organisation&apos;s Security Risks
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray leading-relaxed max-w-lg">
              Every site has different risks. We help you identify vulnerabilities,
              prioritise what matters and put practical measures in place — so
              protection fits how you actually operate.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 bg-green text-white text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-green-dark transition-colors"
            >
              Request a Security Assessment
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative h-64 sm:h-80 lg:h-[380px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop"
              alt="Security risk assessment and planning"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
