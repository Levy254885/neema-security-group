"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  { title: "Vigilance", description: "Constant awareness and readiness." },
  { title: "Integrity", description: "Honest conduct in every interaction." },
  {
    title: "Professionalism",
    description: "Standards that never slip.",
  },
  {
    title: "Accountability",
    description: "Clear ownership of outcomes.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[420px] lg:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                alt="Neema Security Group professional"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Overlapping accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy hidden lg:block" />
            <div className="absolute -bottom-3 -right-3 w-48 h-48 border-2 border-gold hidden lg:block" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
            >
              About Neema
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl sm:text-4xl font-semibold text-dark-navy leading-tight"
            >
              Security Is More Than Presence.
              <br />
              It Is Confidence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-charcoal/70 leading-relaxed"
            >
              Neema Security Group exists to deliver professional protection
              that clients can rely on. We believe effective security combines
              visible presence with quiet discipline—people who are trained,
              supervised and accountable.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-charcoal/70 leading-relaxed"
            >
              Our approach is straightforward: understand the environment, place
              the right personnel, maintain clear communication, and uphold the
              standards that earn long-term trust.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <h3 className="text-sm font-semibold tracking-wide text-gold uppercase">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
