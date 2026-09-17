"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const serviceLinks = [
  { href: "/services/manned-guarding", label: "Manned Guarding" },
  { href: "/services/corporate-security", label: "Corporate Security" },
  { href: "/services/residential-security", label: "Residential Security" },
  { href: "/services/event-security", label: "Event Security" },
  { href: "/services/access-control", label: "Access Control" },
  { href: "/services/security-consulting", label: "Security Consulting" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Request a Quote" },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="bg-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-white shrink-0 stroke-[1.5]" />
            <p className="text-sm font-bold uppercase tracking-wide">
              Interested in our services? Get a quote today.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-green text-[12px] font-bold uppercase tracking-[0.08em] hover:bg-off-white transition-colors self-start sm:self-auto"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={LOGO}
                alt="Neema Security Group"
                width={140}
                height={44}
                className="h-9 w-auto brightness-0 invert opacity-95"
              />
            </Link>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">
              Professional security solutions focused on vigilance, integrity and
              protection for homes, businesses and institutions.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-green" strokeWidth={1.75} />
                <span>Available for enquiries</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-green" strokeWidth={1.75} />
                <a href="mailto:info@neemasecurity.co.ke" className="hover:text-white transition-colors">
                  info@neemasecurity.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-green" strokeWidth={1.75} />
                <span>Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Neema Security Group. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors self-start sm:self-auto"
            aria-label="Back to top"
          >
            Back to top
            <ChevronUp size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
