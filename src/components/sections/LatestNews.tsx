"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const news = [
  {
    category: "Company",
    title: "Expanding Our Residential Security Coverage",
    description:
      "We continue to strengthen residential services with trained officers and clearer resident liaison procedures.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    href: "/about",
  },
  {
    category: "Insight",
    title: "Practical Steps for Better Access Control",
    description:
      "Simple improvements at the gate and reception can significantly reduce unauthorised entry and improve accountability.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop",
    href: "/services/access-control",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green mb-2">
              Updates
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
              Latest News & Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link href={item.href} className="group block">
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-charcoal leading-snug group-hover:text-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {item.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-green">
                    Read More
                    <ChevronRight size={15} strokeWidth={2.5} />
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
