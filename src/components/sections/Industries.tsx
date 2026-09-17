"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    title: "Corporate",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Industrial",
    image:
      "https://images.unsplash.com/photo-1581094794329-cdc75aba1f8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Institutions",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.25em] text-green uppercase font-semibold text-center"
        >
          Who We Protect
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal text-center"
        >
          Security for Every Environment
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative h-48 sm:h-56 overflow-hidden"
            >
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors" />
              <div className="absolute inset-0 flex items-end p-5">
                <h3 className="text-white text-sm font-bold uppercase tracking-[0.12em] group-hover:translate-y-[-2px] transition-transform">
                  {ind.title} →
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
