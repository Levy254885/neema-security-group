"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative h-[58vh] min-h-[380px] max-h-[520px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Protect your home with Neema Security Group"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[1.65rem] sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.04em] leading-[1.2] max-w-lg"
          >
            Protect Your Home,
            <br />
            Secure Your Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-4 text-[11px] sm:text-sm text-white/95 max-w-md leading-relaxed uppercase tracking-[0.06em] font-medium"
          >
            Protect what matters most with professional security solutions for
            you, your family and your property.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10 -mt-7 px-4 sm:px-6 max-w-lg mx-auto">
        <Link
          href="/contact"
          className="flex items-center justify-center w-full bg-green hover:bg-green-dark transition-colors py-4 px-4 shadow-md"
        >
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase">
            Learn More and Sign Up
          </span>
        </Link>
      </div>
    </section>
  );
}
