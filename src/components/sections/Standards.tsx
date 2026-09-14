"use client";

import { motion } from "framer-motion";

export default function Standards() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs tracking-[0.3em] text-gold uppercase font-medium">
            Professional Standards
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-dark-navy">
            Our Commitment to Professional Standards
          </h2>
          <p className="mt-5 text-charcoal/70 leading-relaxed">
            Every Neema assignment is guided by clear principles: personnel
            discipline, operational consistency, professionalism, client
            accountability and structured security procedures. We maintain high
            standards so our clients can focus on what matters most to them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: "Personnel Discipline", value: "Core" },
            { label: "Operational Consistency", value: "Daily" },
            { label: "Client Accountability", value: "Always" },
            { label: "Structured Procedures", value: "Standard" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-6 border border-charcoal/10 hover:border-gold/30 transition-colors"
            >
              <div className="text-gold text-sm font-semibold tracking-wider mb-2">
                {item.value}
              </div>
              <div className="text-sm text-charcoal/80">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Placeholder for future certifications */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal/40 tracking-wide">
            Certification and accreditation details available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
