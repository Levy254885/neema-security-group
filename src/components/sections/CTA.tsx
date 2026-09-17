"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-green text-white">
      <div className="max-w-md mx-auto px-6 py-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl font-bold uppercase tracking-[0.1em]"
        >
          Need Protection?
        </motion.h2>
        <div className="flex items-center justify-center gap-2 mt-4 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-sm text-white/95 leading-relaxed"
        >
          Tell us about your site and we will put together a security plan that
          fits your people, property and operations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-7"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-2.5 border border-white text-white text-[11px] font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-green transition-colors"
          >
            Request Protection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
