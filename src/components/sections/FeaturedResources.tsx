"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const resources = [
  {
    category: "Security Guide",
    title: "Understanding Site Risk Assessments",
    description:
      "A practical overview of how we evaluate threats, vulnerabilities and operational needs before designing a security plan.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    href: "/contact",
  },
  {
    category: "Insight",
    title: "Why Visible Presence Still Matters",
    description:
      "How trained on-site officers deter incidents and support rapid response in commercial and residential environments.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
    href: "/services/manned-guarding",
  },
];

export default function FeaturedResources() {
  return (
    <section className="bg-off-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-green mb-2">
            Insights
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
            Featured Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white"
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
                <div className="p-5 sm:p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-charcoal leading-snug group-hover:text-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-green">
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
