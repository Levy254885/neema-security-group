"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Home,
  Users,
  Settings,
  Briefcase,
  Phone,
  User,
  FileText,
  Globe,
} from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const desktopNav = [
  { href: "/", label: "HOME", icon: Home },
  { href: "/about", label: "ABOUT US", icon: Users },
  { href: "/services", label: "SERVICES", icon: Settings },
  { href: "/services", label: "OUR CLIENTS", icon: Briefcase },
  { href: "/about", label: "CSR", icon: Globe },
  { href: "/contact", label: "CONTACTS", icon: Phone },
  { href: "/contact", label: "CAREERS", icon: User },
  { href: "/about", label: "NEWS", icon: FileText },
];

const mobileMenu = [
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
  { label: "Careers", href: "/contact" },
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-black/5">
        <div className="hidden lg:block">
          <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src={LOGO}
                alt="Neema Security Group"
                width={140}
                height={44}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <nav className="flex items-center gap-1 xl:gap-2">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={
                      "flex flex-col items-center gap-1 px-2.5 py-1.5 min-w-[64px] transition-colors " +
                      (active ? "text-red" : "text-charcoal hover:text-red")
                    }
                  >
                    <Icon size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-semibold tracking-wide uppercase whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 text-[11px] font-semibold text-red tracking-wide">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="hover:opacity-70 transition-opacity"
                aria-label="Search"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden max-w-[1200px] mx-auto px-4 flex items-center justify-between h-[56px]">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={LOGO}
              alt="Neema Security Group"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-0.5">
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
                "p-2.5 " + (mobileOpen ? "bg-red text-white" : "text-charcoal")
              }
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-border overflow-hidden bg-white"
            >
              <div className="px-4 py-3 max-w-[1280px] mx-auto">
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
            className="fixed inset-0 z-40 bg-white lg:hidden pt-[56px] overflow-y-auto"
          >
            <nav className="flex flex-col">
              {mobileMenu.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openAccordion === item.label;
                return (
                  <div key={item.label} className="border-b border-gray-border">
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => setOpenAccordion(isOpen ? null : item.label)}
                          className="w-full flex items-center justify-between px-5 py-4 text-[16px] text-charcoal"
                        >
                          {item.label}
                          <ChevronDown
                            size={18}
                            className={"text-gray-light transition-transform " + (isOpen ? "rotate-180" : "")}
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
