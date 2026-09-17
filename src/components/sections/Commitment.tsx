"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Commitment() {
  return (
    <section className="bg-green text-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 mb-3">
            Our Values
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Vigilance. Integrity. Protection.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
            These principles guide how we recruit, train and deploy every officer.
            We hold ourselves accountable to clear standards so clients can trust
            the people protecting their sites.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-green transition-colors"
          >
            Our Approach
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
