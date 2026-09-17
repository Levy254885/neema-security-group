"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-400" />
                  <span className="absolute top-4 left-4 text-white/90 text-xs font-bold tracking-[0.15em]">
                    {service.number}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-charcoal uppercase tracking-wide group-hover:text-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex text-xs font-bold tracking-[0.1em] uppercase text-green group-hover:translate-x-0.5 transition-transform">
                    Explore Service →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
