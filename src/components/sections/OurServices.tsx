"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const serviceCards = [
  {
    title: "Manned Guarding",
    description:
      "Trained officers providing visible presence, access control and incident response for commercial, residential and institutional sites.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
    href: "/services/manned-guarding",
  },
  {
    title: "Corporate Security",
    description:
      "Professional security for offices and business facilities that protects people and assets while supporting day-to-day operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    href: "/services/corporate-security",
  },
  {
    title: "Residential Security",
    description:
      "Discreet, reliable protection for homes, estates and residential communities with clear procedures and resident-focused service.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    href: "/services/residential-security",
  },
  {
    title: "Access Control",
    description:
      "Controlled entry systems and procedures so you know who enters your property, when they enter, and under what conditions.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop",
    href: "/services/access-control",
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green mb-2">
              What We Deliver
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-green hover:text-green-dark transition-colors"
          >
            View All
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {serviceCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <Link href={card.href} className="group block">
                <div className="relative h-52 sm:h-56 lg:h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="pt-4 pb-1 flex items-start justify-between gap-3">
                  <p className="text-sm text-gray leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-green text-green flex items-center justify-center group-hover:bg-green group-hover:text-white transition-colors mt-0.5">
                    <ChevronRight size={18} strokeWidth={2.25} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-green"
          >
            View All Services
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
