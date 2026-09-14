"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop",
    label: "Neema Security Group",
    headline: "Vigilance. Integrity. Protection.",
    sub: "Professional security solutions built to protect people, property and business with discipline and constant vigilance.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    label: "Corporate Protection",
    headline: "Security That Supports Your Business.",
    sub: "Discreet, professional presence for offices, facilities and corporate environments that demand reliability.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    label: "Residential & Estates",
    headline: "Protection for the Places You Call Home.",
    sub: "Disciplined residential security that respects privacy while delivering consistent, trustworthy coverage.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    label: "Events & Access",
    headline: "Controlled. Professional. Ready.",
    sub: "From events to access points, we bring structure, presence and calm execution when it matters most.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-dark-navy"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={current === 0}
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/75 via-dark-navy/55 to-dark-navy/85" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-content"}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center max-w-4xl"
          >
            <span className="text-xs tracking-[0.35em] text-gold uppercase font-medium mb-5">
              {slide.label}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
              {slide.headline}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              {slide.sub}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-dark-navy text-sm font-semibold tracking-wide uppercase hover:bg-light-gold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                Request Protection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 text-white text-sm font-semibold tracking-wide uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-gold"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
