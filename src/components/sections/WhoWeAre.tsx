"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="bg-off-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-64 sm:h-80 lg:h-[400px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
              alt="Neema Security Group team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green mb-3">
              About Neema
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
              Who We Are
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray leading-relaxed">
              Neema Security Group is a professional security provider focused on
              vigilance, integrity and protection. We deliver disciplined personnel,
              clear procedures and reliable coverage for homes, businesses and
              institutions.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray leading-relaxed">
              Our approach is practical. We assess each site, understand how you
              operate, and put measures in place that work in real conditions —
              not just on paper.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-green hover:text-green-dark transition-colors"
            >
              Learn More About Us
              <ChevronRight size={16} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
