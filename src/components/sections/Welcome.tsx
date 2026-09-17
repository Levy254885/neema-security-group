"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="bg-green text-white mt-0">
      <div className="max-w-lg mx-auto px-6 py-16 sm:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[0.08em] leading-snug"
        >
          Welcome to Neema
          <br />
          Security Group
        </motion.h2>

        <div className="flex items-center justify-center gap-2 mt-5 mb-6">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base text-white/95 leading-relaxed"
        >
          Welcome to Neema Security Group. We provide professional security
          solutions built on vigilance, integrity and disciplined service for
          homes, businesses and institutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-10 py-3 border border-white text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-green transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
