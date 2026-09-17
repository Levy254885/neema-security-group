"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-wide">
            Our Services
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 mb-5">
            <span className="w-2 h-2 rounded-full bg-green" />
            <span className="w-2 h-2 rounded-full bg-green" />
            <span className="w-2 h-2 rounded-full bg-green" />
          </div>
          <p className="text-gray text-base sm:text-lg leading-relaxed">
            From everyday guarding to specialised protection, Neema delivers
            professional security built around each client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-off-white overflow-hidden"
            >
              <Link href={`/services/${service.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-charcoal uppercase tracking-wide group-hover:text-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green uppercase tracking-wide">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-green text-green text-sm font-bold tracking-wide uppercase hover:bg-green hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
