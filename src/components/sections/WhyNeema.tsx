"use client";

import { motion } from "framer-motion";
import { Shield, Users, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Professional Personnel",
    description:
      "We pick our teams for discipline, presence and reliability. Every officer is expected to meet the Neema standard.",
    icon: Users,
  },
  {
    number: "02",
    title: "Disciplined Operations",
    description:
      "Clear procedures, proper reporting and consistent work on every assignment.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Responsive Security",
    description:
      "When something happens, our teams respond with calm and professionalism.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Client Trust",
    description:
      "We earn trust through honesty, accountability and results you can see.",
    icon: HeartHandshake,
  },
];

export default function WhyNeema() {
  return (
    <section
      id="why-neema"
      className="relative py-24 lg:py-32 bg-dark-navy text-white overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-64 h-64 border border-gold/10 rotate-12 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold/5 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            Why Neema
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Professional standards.
            <br />
            Human vigilance.
            <br />
            Reliable protection.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold text-xs font-semibold tracking-widest">
                  {feature.number}
                </span>
                <div className="h-px flex-1 bg-white/10 group-hover:bg-gold/40 transition-colors" />
              </div>
              <feature.icon
                className="w-6 h-6 text-gold mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
