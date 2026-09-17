"use client";

import { motion } from "framer-motion";

export default function ServicesIntro() {
  return (
    <section className="bg-charcoal text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.25em] text-green-light uppercase font-semibold"
        >
          Our Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.2] max-w-2xl"
        >
          One Security Partner.
          <br />
          Multiple Layers of Protection.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-5 text-white/70 leading-relaxed max-w-xl"
        >
          Security starts with understanding your risk. We combine people,
          procedures and practical technology to deliver protection that fits
          how you operate.
        </motion.p>
      </div>
    </section>
  );
}
