"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Consultation",
    text: "We listen and understand your environment, people and operational needs.",
  },
  {
    n: "02",
    title: "Risk Assessment",
    text: "We identify vulnerabilities and threats specific to your site and activity.",
  },
  {
    n: "03",
    title: "Security Plan",
    text: "We design a practical mix of personnel, procedures and technology.",
  },
  {
    n: "04",
    title: "Deployment",
    text: "We implement the plan and keep communication open as needs change.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.25em] text-green uppercase font-semibold text-center"
        >
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal text-center max-w-2xl mx-auto leading-[1.2]"
        >
          Security Starts With Understanding Your Risk
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-3xl font-bold text-green/20">{step.n}</span>
              <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.1em] text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
