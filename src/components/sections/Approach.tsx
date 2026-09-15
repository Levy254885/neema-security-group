"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Approach() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] lg:h-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop"
            alt="Professional security monitoring and control"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-dark-navy/20" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
        </motion.div>

        <div className="relative bg-navy text-white flex items-center">
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-gold/20 rotate-45 pointer-events-none" />

          <div className="px-8 sm:px-12 lg:px-16 py-16 lg:py-24 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
            >
              Our Approach
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight"
            >
              Protection Built Around Your Reality.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-white/70 leading-relaxed"
            >
              Neema takes a disciplined and client-focused approach. We listen
              first, understand the unique risks of your environment, and design
              protection that fits your operations—not the other way around.
            </motion.p>

            <div className="mt-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-5"
              >
                <span className="text-gold text-sm font-semibold tracking-wider shrink-0">
                  01
                </span>
                <div>
                  <h3 className="font-semibold text-lg">Disciplined Personnel</h3>
                  <p className="mt-1 text-sm text-white/60">
                    Carefully selected and continuously trained professionals
                    who embody vigilance and integrity in every shift.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-5"
              >
                <span className="text-gold text-sm font-semibold tracking-wider shrink-0">
                  02
                </span>
                <div>
                  <h3 className="font-semibold text-lg">
                    Client-Focused Operations
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    Clear communication, reliable reporting and security plans
                    that adapt to the realities of your business or property.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
