"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/services";

type Props = {
  service: Service;
  otherServices: Service[];
};

export default function ServiceDetailClient({
  service,
  otherServices,
}: Props) {
  return (
    <>
      <section className="relative pt-28 pb-0 overflow-hidden">
        <div className="relative h-[50vh] min-h-[360px] max-h-[520px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/50 to-dark-navy/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
            <div className="max-w-7xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs tracking-[0.3em] text-gold uppercase font-medium"
              >
                Service {service.number}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-3xl"
              >
                {service.title}
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-charcoal/80 leading-relaxed"
              >
                {service.longDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-12"
              >
                <h2 className="text-sm tracking-[0.2em] text-gold uppercase font-semibold mb-6">
                  What You Can Expect
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                        <Check className="w-3 h-3 text-gold" strokeWidth={2.5} />
                      </span>
                      <span className="text-charcoal/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-off-white p-8 border border-charcoal/5"
              >
                <h3 className="text-sm tracking-[0.2em] text-gold uppercase font-semibold">
                  Ideal For
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.idealFor.map((item) => (
                    <li
                      key={item}
                      className="text-dark-navy font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-charcoal/10">
                  <p className="text-sm text-charcoal/70 mb-5">
                    Ready to discuss this service for your site?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-gold text-dark-navy text-sm font-semibold tracking-wide uppercase hover:bg-light-gold transition-colors"
                  >
                    Request Protection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-dark-navy mb-8">
            Other Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block bg-white overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-dark-navy group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-charcoal/60 line-clamp-2">
                    {s.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-navy hover:text-gold transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
