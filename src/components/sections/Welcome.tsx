"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="bg-green text-white">
      <div className="max-w-md mx-auto px-6 py-14 sm:py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.1em] leading-snug"
        >
          Welcome to Neema
          <br />
          Security Group
        </motion.h2>
        <div className="flex items-center justify-center gap-2 mt-4 mb-5">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-sm text-white/95 leading-relaxed"
        >
          Welcome to Neema Security Group. We provide professional security
          solutions built on vigilance, integrity and disciplined service for
          homes, businesses and institutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-7"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-9 py-2.5 border border-white text-white text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-green transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
