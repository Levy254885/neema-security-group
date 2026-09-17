"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const serviceGroups = [
  {
    title: "Physical Security",
    items: [
      { label: "Manned Guarding", href: "/services/manned-guarding" },
      { label: "Corporate Security", href: "/services/corporate-security" },
      { label: "Residential Security", href: "/services/residential-security" },
      { label: "Event Security", href: "/services/event-security" },
    ],
  },
  {
    title: "Electronic & Access",
    items: [
      { label: "Access Control", href: "/services/access-control" },
      { label: "Security Consulting", href: "/services/security-consulting" },
    ],
  },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", mega: true },
  { href: "/#industries", label: "Industries" },
  { href: "/#process", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="hidden lg:block bg-charcoal text-white/80">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-[11px] tracking-[0.08em] uppercase font-medium">
          <div className="flex items-center gap-6">
            <span>24/7 Emergency Response</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Customer Support
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white">Kenya</span>
            <span className="text-white/40">|</span>
            <span>East Africa</span>
          </div>
        </div>
      </div>

      <header
        className={
          "sticky top-0 z-50 bg-white transition-shadow duration-300" +
          (scrolled ? " shadow-sm" : "")
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={LOGO}
              alt="Neema Security Group"
              width={200}
              height={64}
              className="h-9 lg:h-11 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.mega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={
                      "flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors " +
                      (pathname.startsWith("/services")
                        ? "text-green"
                        : "text-charcoal hover:text-green")
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={
                        "w-3.5 h-3.5 transition-transform" +
                        (servicesOpen ? " rotate-180" : "")
                      }
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white border border-black/8 shadow-xl p-6 min-w-[420px] grid grid-cols-2 gap-8">
                          {serviceGroups.map((group) => (
                            <div key={group.title}>
                              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-light mb-3">
                                {group.title}
                              </p>
                              <ul className="space-y-2">
                                {group.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-charcoal hover:text-green transition-colors"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="col-span-2 pt-3 border-t border-black/8">
                            <Link
                              href="/services"
                              className="text-sm font-semibold text-green hover:underline"
                            >
                              View all services →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "px-3 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors " +
                    (pathname === link.href
                      ? "text-green"
                      : "text-charcoal hover:text-green")
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-green text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-green-dark transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-1 text-charcoal"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X size={24} strokeWidth={1.75} />
            ) : (
              <Menu size={24} strokeWidth={1.75} />
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
            className="fixed inset-0 z-40 bg-white lg:hidden pt-16 overflow-y-auto"
          >
            <nav className="px-5 py-6 flex flex-col min-h-full">
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="py-4 text-base font-bold uppercase tracking-wide border-b border-black/8 text-charcoal"
              >
                About
              </Link>
              <button
                type="button"
                onClick={() => setMobileServices(!mobileServices)}
                className="flex items-center justify-between py-4 text-base font-bold uppercase tracking-wide border-b border-black/8 text-charcoal w-full text-left"
              >
                Services
                <ChevronDown
                  className={
                    "w-4 h-4 transition-transform" +
                    (mobileServices ? " rotate-180" : "")
                  }
                />
              </button>
              <AnimatePresence>
                {mobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-off-white"
                  >
                    {serviceGroups.flatMap((g) =>
                      g.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-3 px-4 text-sm text-gray border-b border-black/5"
                        >
                          {item.label}
                        </Link>
                      ))
                    )}
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 text-sm font-semibold text-green"
                    >
                      View all services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                href="/#industries"
                onClick={() => setMobileOpen(false)}
                className="py-4 text-base font-bold uppercase tracking-wide border-b border-black/8 text-charcoal"
              >
                Industries
              </Link>
              <Link
                href="/#process"
                onClick={() => setMobileOpen(false)}
                className="py-4 text-base font-bold uppercase tracking-wide border-b border-black/8 text-charcoal"
              >
                How We Work
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-4 text-base font-bold uppercase tracking-wide border-b border-black/8 text-charcoal"
              >
                Contact
              </Link>

              <div className="mt-auto pt-10 space-y-3 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-green text-white text-xs font-bold tracking-[0.12em] uppercase"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-charcoal text-charcoal text-xs font-bold tracking-[0.12em] uppercase"
                >
                  <Phone className="w-4 h-4" />
                  Emergency Assistance
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
