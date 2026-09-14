"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Vigilance",
    description:
      "Constant awareness and readiness. We stay present so you can focus on what matters.",
  },
  {
    title: "Integrity",
    description:
      "Honest conduct in every interaction. Trust is the foundation of every assignment.",
  },
  {
    title: "Professionalism",
    description:
      "Standards that never slip. From appearance to reporting, we hold ourselves accountable.",
  },
  {
    title: "Accountability",
    description:
      "Clear ownership of outcomes. We deliver what we commit to and communicate clearly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 bg-dark-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/70 to-dark-navy" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
            >
              About Neema
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight"
            >
              Security Is More Than Presence.
              <br />
              It Is Confidence.
            </motion.h1>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] lg:h-[520px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                  alt="Neema Security professional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg text-charcoal/80 leading-relaxed"
                >
                  Neema Security Group exists to deliver professional protection
                  that clients can rely on. We believe effective security
                  combines visible presence with quiet discipline — people who
                  are trained, supervised and accountable.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="mt-5 text-charcoal/70 leading-relaxed"
                >
                  Our approach is straightforward: understand the environment,
                  place the right personnel, maintain clear communication, and
                  uphold the standards that earn long-term trust.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-dark-navy text-center mb-14"
            >
              Our Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center sm:text-left"
                >
                  <h3 className="text-sm tracking-[0.2em] text-gold uppercase font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Ready to work with Neema?
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-dark-navy text-sm font-semibold tracking-wide uppercase hover:bg-light-gold transition-colors"
            >
              Request Protection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
