"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 lg:py-40 bg-off-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy clip-diagonal opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-navy leading-tight">
            Security Solutions
            <br />
            <span className="text-navy">Tailored to Your Needs</span>
          </h2>
          <p className="mt-6 text-charcoal/70 text-lg max-w-xl leading-relaxed">
            From everyday guarding to specialised protection, Neema delivers
            professional security built around each client.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.slug}
              variants={item}
              className="group relative bg-white overflow-hidden"
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/70 to-transparent" />
                  <span className="absolute top-4 left-4 text-gold text-sm font-semibold tracking-wider">
                    {service.number}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-navy group-hover:text-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-2.5 transition-all">
                    Explore Service
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-500" />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-navy hover:text-gold transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
