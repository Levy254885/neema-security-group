"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Protect Your Home, Secure Your Future",
    description:
      "Protect what matters most with professional security solutions that give you, your family and your property the assurance of safety.",
    cta: "Learn More and Sign Up",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "World Class Security Guards",
    description:
      "Our guarding services are built around the specific needs of each site and budget, with disciplined officers you can rely on.",
    cta: "View Guarding Services",
    href: "/services/manned-guarding",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Corporate and Facility Security",
    description:
      "Professional coverage for offices and business facilities that protects people and assets without disrupting daily operations.",
    cta: "Explore Services",
    href: "/services/corporate-security",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
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
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="relative w-full bg-black">
      <div className="relative hidden lg:block h-[520px] xl:h-[580px] w-full overflow-hidden">
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
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-t"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl"
            >
              <h1 className="text-[36px] xl:text-[44px] font-bold text-white uppercase tracking-wide leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-[14px] xl:text-[15px] text-white/90 leading-relaxed max-w-xl mx-auto uppercase tracking-wide">
                {slide.description}
              </p>
              <Link
                href={slide.href}
                className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-red hover:bg-red-dark text-white text-[13px] font-bold uppercase tracking-wider transition-colors"
              >
                {slide.cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-black/20 hover:bg-black/40 transition-colors"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white bg-black/20 hover:bg-black/40 transition-colors"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      <div className="lg:hidden">
        <div className="relative h-[160px] sm:h-[200px] w-full overflow-hidden bg-[#E8EEF2]">
          <Image
            src={slide.image}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-50"
            sizes="100vw"
          />
        </div>
        <div className="relative bg-black text-white">
          <div className="px-5 py-8 max-w-xl">
            <p className="text-[13px] font-semibold tracking-[0.12em] text-red uppercase">
              Security Insights
            </p>
            <h1 className="mt-2 text-[20px] sm:text-[24px] font-bold leading-snug uppercase">
              {slide.title}
            </h1>
            <p className="mt-3 text-[13px] text-white/85 leading-relaxed">
              {slide.description}
            </p>
            <Link
              href={slide.href}
              className="mt-5 inline-flex text-[12px] font-bold uppercase tracking-wide text-white"
            >
              {slide.cta}
            </Link>
          </div>
          <div className="absolute bottom-5 right-4">
            <button
              onClick={next}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex justify-center gap-1.5 pb-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={"h-[3px] " + (i === index ? "w-7 bg-red" : "w-5 bg-white/40")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
