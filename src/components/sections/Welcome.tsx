"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="bg-green text-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide"
        >
          Welcome to Neema
          <br />
          Security Group
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-2.5 mt-6 mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/90" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mx-auto"
        >
          Welcome to Neema Security Group. We provide professional security
          solutions built on vigilance, integrity and disciplined service for
          homes, businesses and institutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-10 py-3.5 border-2 border-white text-white text-sm font-bold tracking-[0.12em] uppercase hover:bg-white hover:text-green transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
