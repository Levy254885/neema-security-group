"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[360px] sm:h-[440px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1400&auto=format&fit=crop"
                alt="Neema Security Group operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <p className="mt-3 text-[11px] tracking-[0.15em] uppercase text-gray-light font-medium">
              Security Operations
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] tracking-[0.25em] text-green uppercase font-semibold"
            >
              Who We Are
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.2] max-w-xl"
            >
              Security Built Around People, Process and Accountability
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-5 text-gray leading-relaxed max-w-lg"
            >
              Neema Security Group provides professional protection that clients
              can rely on. Good security means trained people on site, proper
              supervision and clear accountability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray leading-relaxed max-w-lg"
            >
              Our method is simple. Understand the site, put the right people in
              place, keep communication open and hold the standards that build
              lasting trust.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex text-sm font-bold tracking-[0.08em] uppercase text-green hover:underline"
              >
                Learn More About Us →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
