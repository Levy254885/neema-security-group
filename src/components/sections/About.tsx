"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  { title: "Vigilance", description: "Staying alert on every shift." },
  { title: "Integrity", description: "Honest work, no shortcuts." },
  { title: "Professionalism", description: "Standards we hold every day." },
  { title: "Accountability", description: "We own the outcome of our work." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[480px] lg:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop"
                alt="Neema Security Group professional security operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-navy hidden lg:block" />
            <div className="absolute -bottom-2 -right-2 w-40 h-40 border-2 border-gold hidden lg:block" />
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
            >
              Welcome to Neema
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-dark-navy leading-[1.15]"
            >
              Security Is More Than a Uniform.
              <br />
              It Is Confidence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-charcoal/70 leading-relaxed text-base sm:text-lg max-w-lg"
            >
              Neema Security Group provides professional protection that clients
              can rely on. Good security means trained people on site, proper
              supervision and clear accountability.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="mt-4 text-charcoal/70 leading-relaxed max-w-lg"
            >
              Our method is simple. Understand the site, put the right people
              in place, keep communication open and hold the standards that
              build lasting trust.
            </motion.p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.06 }}
                >
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="inline-flex text-sm font-semibold tracking-wide uppercase text-navy hover:text-gold transition-colors"
              >
                Learn more about us →
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
