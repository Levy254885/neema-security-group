"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative h-[42vh] min-h-[280px] max-h-[380px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Protect your home with Neema Security Group"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-[1.5rem] sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-[0.04em] leading-[1.2] max-w-md"
          >
            Protect Your Home,
            <br />
            Secure Your Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-3 text-[10px] sm:text-xs text-white/95 max-w-sm leading-relaxed uppercase tracking-[0.06em] font-medium px-2"
          >
            Protect what matters most with professional security solutions for
            you, your family and your property.
          </motion.p>
        </div>
      </div>
      <div className="relative z-10 -mt-6 px-4 max-w-md mx-auto">
        <Link
          href="/contact"
          className="flex items-center justify-center w-full bg-green hover:bg-green-dark transition-colors py-3.5 px-4 shadow-md"
        >
          <span className="text-white text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase">
            Learn More and Sign Up
          </span>
        </Link>
      </div>
    </section>
  );
}
