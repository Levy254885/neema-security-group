"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, Globe } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const menuItems = [
  {
    label: "Who We Are",
    href: "/about",
    children: [
      { label: "About Neema", href: "/about" },
      { label: "Our Values", href: "/about" },
    ],
  },
  {
    label: "What We Do",
    href: "/services",
    children: [
      { label: "Manned Guarding", href: "/services/manned-guarding" },
      { label: "Corporate Security", href: "/services/corporate-security" },
      { label: "Residential Security", href: "/services/residential-security" },
      { label: "Event Security", href: "/services/event-security" },
      { label: "Access Control", href: "/services/access-control" },
      { label: "Security Consulting", href: "/services/security-consulting" },
    ],
  },
  {
    label: "News and Insights",
    href: "/about",
    children: [
      { label: "Latest Updates", href: "/about" },
      { label: "Security Insights", href: "/services" },
    ],
  },
  { label: "Careers", href: "/contact" },
  {
    label: "Our Commitment",
    href: "/about",
    children: [
      { label: "Vigilance", href: "/about" },
      { label: "Integrity", href: "/about" },
      { label: "Protection", href: "/about" },
    ],
  },
  { label: "Contacts", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
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
    setOpenAccordion(null);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[56px]">
          <Link href="/" className="flex items-center shrink-0" aria-label="Neema Security Group">
            <Image
              src={LOGO}
              alt="Neema Security Group"
              width={120}
              height={40}
              className="h-[32px] w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-charcoal hover:text-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-4 py-2 bg-red text-white text-[12px] font-semibold uppercase tracking-wide hover:bg-red-dark transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-0.5 lg:hidden">
            <button className="p-2.5 text-charcoal" aria-label="Language">
              <Globe size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMobileOpen(false);
              }}
              className="p-2.5 text-charcoal"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setSearchOpen(false);
              }}
              className={
                "p-2.5 ml-0.5 " +
                (mobileOpen ? "bg-red text-white" : "text-charcoal")
              }
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={2} />
              ) : (
                <Menu size={22} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-border overflow-hidden bg-white"
            >
              <div className="px-4 py-3">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-3 py-2.5 border border-gray-border text-sm focus:outline-none focus:border-red"
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
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-[56px] overflow-y-auto"
          >
            <nav className="flex flex-col">
              {menuItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openAccordion === item.label;

                return (
                  <div key={item.label} className="border-b border-gray-border">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenAccordion(isOpen ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-5 py-4 text-[16px] text-charcoal font-normal"
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            strokeWidth={1.5}
                            className={
                              "text-gray-light transition-transform " +
                              (isOpen ? "rotate-180" : "")
                            }
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-bg"
                            >
                              {item.children!.map((child) => (
                                <Link
                                  key={child.href + child.label}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-8 py-3 text-[14px] text-gray hover:text-red"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-5 py-4 text-[16px] text-charcoal"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
