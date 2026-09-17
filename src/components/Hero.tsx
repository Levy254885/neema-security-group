"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative h-[70vh] min-h-[420px] max-h-[640px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
          alt="Protect your home and property with Neema Security Group"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white uppercase tracking-wide leading-[1.15] max-w-4xl"
          >
            Protect Your Home,
            <br />
            Secure Your Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/95 max-w-2xl leading-relaxed font-medium uppercase tracking-wide"
          >
            Protect what matters most with professional security solutions for
            you, your family and your property.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center w-full bg-green hover:bg-green-dark transition-colors py-5 sm:py-6 px-4"
        >
          <span className="text-white text-sm sm:text-base font-bold tracking-[0.15em] uppercase">
            Learn More and Sign Up
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
