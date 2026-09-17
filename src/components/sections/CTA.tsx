"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-green-deep text-white">
      <div className="max-w-3xl mx-auto px-6 py-20 sm:py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wide"
        >
          Does Your Business Need Protection?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
        >
          Tell us about your site and we will put together a security plan that
          fits your people, property and day to day operations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-w-[200px] px-8 py-3.5 bg-white text-green-deep text-sm font-bold tracking-wide uppercase hover:bg-green-muted transition-colors"
          >
            Request Protection
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-w-[160px] px-8 py-3.5 border-2 border-white text-white text-sm font-bold tracking-wide uppercase hover:bg-white hover:text-green-deep transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
