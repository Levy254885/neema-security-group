"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const slides = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Neema Security Group",
    headline: ["Vigilance.", "Integrity.", "Protection."],
    sub: "Professional security solutions built around people, property and business.",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Corporate and Commercial",
    headline: ["Security You", "Can Rely On."],
    sub: "Disciplined officers and clear procedures for offices, businesses and institutions.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Residential Protection",
    headline: ["Protect What", "Matters Most."],
    sub: "Quiet, professional coverage for homes, estates and gated communities.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2400&auto=format&fit=crop",
    eyebrow: "Events and Access",
    headline: ["Controlled.", "Calm.", "Prepared."],
    sub: "Event coverage and access control handled with care and clear coordination.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[index];

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-dark-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={slide.id === 0}
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/75 via-dark-navy/35 to-dark-navy/90" />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-8 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-5 sm:mb-6"
            >
              <Image
                src={LOGO}
                alt="Neema Security Group"
                width={280}
                height={90}
                className="h-12 sm:h-14 w-auto mx-auto brightness-0 invert"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[11px] sm:text-xs tracking-[0.35em] text-gold uppercase font-medium mb-4"
            >
              {slide.eyebrow}
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white tracking-tight leading-[1.08]">
              {slide.headline.map((line, i) => (
                <motion.span
                  key={`${slide.id}-${i}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
                  className="block"
                >
                  {i === slide.headline.length - 1 ? (
                    <span className="text-gold">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              {slide.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 min-w-[180px] px-7 py-3.5 bg-gold text-dark-navy text-sm font-semibold tracking-wide uppercase hover:bg-light-gold hover:-translate-y-0.5 transition-all duration-300"
              >
                Request Protection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-w-[160px] px-7 py-3.5 border border-white/45 text-white text-sm font-semibold tracking-wide uppercase hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-[0.25em] text-white/35 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-gold/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
