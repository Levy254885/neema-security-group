"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Careers() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop"
          alt="Join the Neema Security team"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green-muted mb-3">
            Careers
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight max-w-xl mx-auto">
            Join Our Security Team
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/85 max-w-md mx-auto leading-relaxed">
            We look for disciplined, reliable people who take pride in protecting
            others. If that describes you, we would like to hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 bg-green text-white text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-green-dark transition-colors"
          >
            View Opportunities
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
