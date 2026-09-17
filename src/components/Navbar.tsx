"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
        <div className="max-w-md mx-auto lg:max-w-7xl px-4 flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={LOGO}
              alt="Neema Security Group"
              width={160}
              height={50}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "text-xs font-bold tracking-[0.1em] uppercase transition-colors " +
                  (pathname === link.href
                    ? "text-green"
                    : "text-charcoal hover:text-green")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 bg-green text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-green-dark transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-charcoal"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-14"
          >
            <nav className="flex flex-col px-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      "block py-4 text-base font-bold uppercase tracking-wide border-b border-black/8 " +
                      (pathname === link.href ? "text-green" : "text-charcoal")
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 flex items-center justify-center py-3.5 bg-green text-white text-xs font-bold tracking-[0.12em] uppercase"
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
