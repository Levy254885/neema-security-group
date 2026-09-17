"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "SECURITY INSIGHTS 2026",
    badgeSub:
      "EXPLORE STRATEGIC GUIDANCE TO HELP YOU STRENGTHEN THE SECURITY OF YOUR PEOPLE AND ASSETS",
    title: "Tailored Security Services and Enterprise Solutions",
    description:
      "Integrated security solutions tailored to your organisation's needs, whether a single site or multiple locations.",
    highlight: "STRENGTHEN THE SECURITY OF YOUR PEOPLE AND ASSETS",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop",
    href: "/services",
  },
  {
    id: 2,
    badge: "MANNED GUARDING",
    badgeSub: "DISCIPLINED OFFICERS. CLEAR PROCEDURES. RELIABLE COVERAGE.",
    title: "Professional On-Site Security You Can Trust",
    description:
      "Trained officers providing visible presence, access control and incident response for commercial, residential and institutional sites.",
    highlight: "PROTECT YOUR PEOPLE, PROPERTY AND OPERATIONS",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000&auto=format&fit=crop",
    href: "/services/manned-guarding",
  },
  {
    id: 3,
    badge: "CORPORATE SECURITY",
    badgeSub: "PROTECTION THAT WORKS WITH YOUR BUSINESS, NOT AGAINST IT.",
    title: "Security for Offices and Business Facilities",
    description:
      "Professional coverage that protects assets and people while supporting day-to-day operations.",
    highlight: "BUILT FOR REAL WORK ENVIRONMENTS",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    href: "/services/corporate-security",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="relative w-full bg-black">
      <div className="relative h-[420px] sm:h-[480px] md:h-[520px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-c"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-[340px] sm:max-w-md"
            >
              <div className="mb-3">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] text-white uppercase leading-tight">
                  {slide.badge}
                </p>
                <p className="mt-1 text-[9px] sm:text-[10px] font-medium tracking-[0.06em] text-white/85 uppercase leading-snug max-w-[280px]">
                  {slide.badgeSub}
                </p>
              </div>

              <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-white leading-[1.2] tracking-tight">
                {slide.title}
              </h1>

              <p className="mt-2.5 text-[12px] sm:text-[13px] text-white/90 leading-relaxed max-w-[300px]">
                {slide.description}
              </p>

              <p className="mt-3 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] text-white uppercase">
                {slide.highlight}
              </p>

              <Link
                href={slide.href}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white hover:text-white/80"
              >
                Learn more
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-5 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 z-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full bg-red hover:bg-red-dark text-white flex items-center justify-center shadow-md transition-colors"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Play"
            className="w-10 h-10 rounded-full bg-red hover:bg-red-dark text-white flex items-center justify-center shadow-md transition-colors"
          >
            <Play size={16} strokeWidth={2.5} className="ml-0.5" fill="currentColor" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-red hover:bg-red-dark text-white flex items-center justify-center shadow-md transition-colors"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
