"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    label: "SECURITY INSIGHTS",
    year: "2026",
    title:
      "EXPLORE STRATEGIC INSIGHTS FROM GLOBAL INDUSTRY EXPERTS TO HELP YOU STRENGTHEN THE SECURITY OF YOUR PEOPLE AND ASSETS.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    href: "/contact",
  },
  {
    id: 2,
    label: "MANNED GUARDING",
    year: "",
    title:
      "DISCIPLINED OFFICERS ON SITE FOR COMMERCIAL, RESIDENTIAL AND INSTITUTIONAL PROPERTIES. VISIBLE PRESENCE, CLEAR PROCEDURES, RELIABLE REPORTING.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop",
    href: "/services/manned-guarding",
  },
  {
    id: 3,
    label: "CORPORATE SECURITY",
    year: "",
    title:
      "PROFESSIONAL COVERAGE FOR OFFICES AND BUSINESS FACILITIES THAT PROTECTS ASSETS WITHOUT DISRUPTING DAILY OPERATIONS.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1600&auto=format&fit=crop",
    href: "/services/corporate-security",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="relative w-full bg-white">
      {/* Upper visual band — compact, matching G4S report hero */}
      <div className="relative h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] w-full overflow-hidden bg-[#E8EEF2]">
        <Image
          src={slide.image}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
        <div className="hidden md:block absolute right-[8%] top-1/2 -translate-y-1/2 w-[280px] h-[160px] lg:w-[340px] lg:h-[190px]">
          <div className="absolute inset-0 bg-white shadow-lg rotate-[-4deg] border border-black/5" />
          <div className="absolute inset-0 bg-white shadow-xl rotate-[2deg] border border-black/5 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-[10px] font-bold tracking-widest text-red uppercase">
                Neema Security
              </p>
              <p className="mt-1 text-sm font-bold text-charcoal">Insights 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Black text band — exact G4S structure */}
      <div className="relative bg-black text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8 sm:py-10 lg:py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl lg:max-w-2xl"
            >
              <p className="text-[13px] sm:text-[15px] font-semibold tracking-[0.14em] text-red uppercase">
                {slide.label}
              </p>
              {slide.year && (
                <p className="mt-2 text-[28px] sm:text-[36px] font-light text-white leading-none">
                  {slide.year}
                </p>
              )}
              <h1 className="mt-3 text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-[1.25] tracking-tight uppercase">
                {slide.title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8">
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full bg-red hover:bg-red-dark text-white flex items-center justify-center shadow-md transition-colors"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-1.5 pb-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={
                "h-[3px] transition-all " +
                (i === index ? "w-8 bg-red" : "w-6 bg-white/40")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
