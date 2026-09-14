"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Manned Guarding",
    description:
      "Professional security personnel for commercial, residential and institutional environments.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Corporate Security",
    description:
      "Security solutions designed for offices, businesses and corporate facilities.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Residential Security",
    description:
      "Protection solutions for homes, estates and residential communities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Event Security",
    description:
      "Controlled, professional security coverage for events and gatherings.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Access Control",
    description:
      "Structured monitoring and controlled access for properties and facilities.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Security Consulting",
    description:
      "Risk-aware security planning tailored to individual client requirements.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
];

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
    <section id="services" className="relative py-24 lg:py-32 bg-off-white overflow-hidden">
      {/* Angular accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy clip-diagonal opacity-5 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark-navy leading-tight">
            Security Solutions
            <br />
            <span className="text-navy">Tailored to Your Needs</span>
          </h2>
          <p className="mt-5 text-charcoal/70 text-lg max-w-xl">
            Professional protection designed around the people, properties and
            operations that matter most.
          </p>
        </motion.div>

        {/* Service grid - asymmetrical feel */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              variants={item}
              className={`group relative bg-white overflow-hidden ${
                index === 0 || index === 3 ? "md:row-span-1" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent" />
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
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all"
                >
                  Explore Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              {/* Gold accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
