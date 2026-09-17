"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-off-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-charcoal uppercase tracking-[0.1em]">
            What We Offer
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
          </div>
        </motion.div>

        <div className="space-y-0 border-t border-black/10">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="flex items-start gap-4 py-5 border-b border-black/10 group"
              >
                <span className="text-green text-xs font-bold tracking-wider pt-0.5 shrink-0">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide group-hover:text-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <span className="text-green text-lg shrink-0 group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 border border-green text-green text-xs font-bold tracking-[0.12em] uppercase hover:bg-green hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
