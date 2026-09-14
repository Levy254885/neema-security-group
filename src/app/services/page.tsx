"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 bg-dark-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/80 to-dark-navy" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight"
            >
              Security Solutions Built for Real Environments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-white/70 max-w-2xl"
            >
              From manned guarding to consulting, every service is delivered with
              discipline, clarity and a focus on the people and property you
              need protected.
            </motion.p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {services.map((service, i) => (
                <motion.article
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white overflow-hidden flex flex-col sm:flex-row"
                >
                  <div className="relative w-full sm:w-48 md:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <span className="text-xs tracking-widest text-gold font-semibold">
                      {service.number}
                    </span>
                    <h2 className="mt-2 text-2xl font-semibold text-dark-navy">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Need a tailored security plan?
            </h2>
            <p className="mt-3 text-white/70">
              Tell us about your site and requirements. We will respond with a
              clear conversation.
            </p>
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
