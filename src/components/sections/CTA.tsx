"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-charcoal text-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2]"
        >
          Let&apos;s Build a Security Solution for You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-white/70 leading-relaxed max-w-lg mx-auto"
        >
          Tell us about your organisation, location and security requirements.
          We will put together a practical plan around your needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 min-w-[200px] px-7 py-3.5 bg-green text-white text-xs font-bold tracking-[0.12em] uppercase hover:bg-green-light transition-colors"
          >
            Request a Free Quote
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-w-[140px] px-7 py-3.5 border border-white/40 text-white text-xs font-bold tracking-[0.12em] uppercase hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
