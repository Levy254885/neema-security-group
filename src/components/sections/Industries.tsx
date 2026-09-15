"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    number: "01",
    title: "Corporate Offices",
    description: "Safe workplaces for staff and daily operations.",
  },
  {
    number: "02",
    title: "Residential Estates",
    description: "Quiet protection for homes and gated communities.",
  },
  {
    number: "03",
    title: "Retail and Commercial",
    description: "Presence and access control for commercial spaces.",
  },
  {
    number: "04",
    title: "Construction Sites",
    description: "Perimeter and asset security on active project sites.",
  },
  {
    number: "05",
    title: "Institutions",
    description: "Steady coverage for schools, clinics and public facilities.",
  },
  {
    number: "06",
    title: "Events and Functions",
    description: "Event coverage with controlled access.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative py-24 lg:py-32 bg-off-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
              Sectors We Protect
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-dark-navy leading-tight">
              We work across
              <br />
              sites that need
              <br />
              real discipline.
            </h2>
            <p className="mt-5 text-charcoal/70 leading-relaxed">
              From office buildings to residential gates, we provide steady
              professional presence shaped around each site.
            </p>

            <div className="mt-8 relative h-64 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                alt="Corporate environment protected by Neema"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-navy/30" />
            </div>
          </motion.div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {industries.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 border border-charcoal/10 hover:border-gold/40 transition-colors ${
                  index % 3 === 0 ? "bg-navy text-white" : "bg-white"
                }`}
              >
                <span className="text-xs font-semibold tracking-widest text-gold">
                  {item.number}
                </span>
                <h3
                  className={`mt-3 text-lg font-semibold ${
                    index % 3 === 0 ? "text-white" : "text-dark-navy"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    index % 3 === 0 ? "text-white/70" : "text-charcoal/60"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
