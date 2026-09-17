"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/manned-guarding", label: "Manned Guarding" },
  { href: "/services/corporate-security", label: "Corporate Security" },
  { href: "/services/residential-security", label: "Residential Security" },
  { href: "/services/event-security", label: "Event Security" },
  { href: "/services/access-control", label: "Access Control" },
  { href: "/services/security-consulting", label: "Security Consulting" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center shrink-0" aria-label="Neema Security Group Home">
            <Image
              src={LOGO}
              alt="Neema Security Group"
              width={140}
              height={44}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "text-[13px] font-semibold tracking-wide uppercase transition-colors " +
                  (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "text-green"
                    : "text-charcoal hover:text-green")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-5 py-2.5 bg-green text-white text-[12px] font-bold tracking-[0.08em] uppercase hover:bg-green-dark transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 text-charcoal hover:text-green transition-colors"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.75} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 text-charcoal"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-border overflow-hidden"
            >
              <div className="px-4 py-3">
                <input
                  type="search"
                  placeholder="Search services..."
                  className="w-full px-4 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-green"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-14 overflow-y-auto"
          >
            <nav className="flex flex-col px-5 pb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      "block py-4 text-[15px] font-bold uppercase tracking-[0.06em] border-b border-gray-border " +
                      (pathname === link.href ? "text-green" : "text-charcoal")
                    }
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-6 mb-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-light mb-3">
                  Our Services
                </p>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-charcoal hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 flex items-center justify-center py-3.5 bg-green text-white text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-green-dark transition-colors"
              >
                Request a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
