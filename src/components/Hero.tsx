"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Tailored Security Services for Your Organisation",
    description:
      "Integrated security solutions designed around your people, property and operations — whether a single site or multiple locations.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop",
    cta: "Explore Our Services",
    href: "/services",
  },
  {
    id: 2,
    title: "Manned Guarding You Can Rely On",
    description:
      "Disciplined officers on site for commercial, residential and institutional properties. Visible presence, clear procedures, reliable reporting.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2000&auto=format&fit=crop",
    cta: "Manned Guarding",
    href: "/services/manned-guarding",
  },
  {
    id: 3,
    title: "Corporate & Facility Security",
    description:
      "Professional coverage for offices, business parks and corporate facilities that protects assets without disrupting daily operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    cta: "Corporate Security",
    href: "/services/corporate-security",
  },
  {
    id: 4,
    title: "Protect What Matters Most",
    description:
      "Residential security, event coverage, access control and practical consulting — built on vigilance, integrity and disciplined service.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    cta: "Request a Quote",
    href: "/contact",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex((next + slides.length) % slides.length);
    },
    [index]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative w-full bg-charcoal">
      <div className="relative h-[52vh] min-h-[320px] max-h-[480px] sm:h-[56vh] sm:max-h-[560px] w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20 px-5 sm:px-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-text"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl"
            >
              <h1 className="text-[1.35rem] sm:text-2xl md:text-3xl lg:text-[2.1rem] font-bold text-white leading-[1.25] tracking-tight uppercase">
                {slide.title}
              </h1>
              <p className="mt-3 text-[13px] sm:text-sm text-white/90 leading-relaxed max-w-md">
                {slide.description}
              </p>
              <Link
                href={slide.href}
                className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-white hover:text-green-muted transition-colors"
              >
                {slide.cta}
                <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow controls — functional */}
        <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 flex items-center gap-2 z-10">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green hover:bg-green-dark text-white flex items-center justify-center transition-colors shadow-md"
          >
            <ChevronLeft size={20} strokeWidth={2.25} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-green hover:bg-green-dark text-white flex items-center justify-center transition-colors shadow-md"
          >
            <ChevronRight size={20} strokeWidth={2.25} />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-5 sm:left-8 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={
                "h-1 transition-all duration-300 " +
                (i === index ? "w-6 bg-green" : "w-3 bg-white/50 hover:bg-white/80")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
