"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Professional", sub: "Personnel" },
  { label: "Disciplined", sub: "Operations" },
  { label: "Client", sub: "Focused" },
  { label: "24/7", sub: "Ready Response" },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-b border-black/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center lg:text-left lg:pl-6 lg:border-l lg:border-black/8 first:lg:border-0 first:lg:pl-0"
            >
              <p className="text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                {item.label}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray uppercase tracking-[0.1em]">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
