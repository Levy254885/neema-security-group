"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

export default function Footer() {
  return (
    <footer>
      <div className="bg-red">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3 text-white">
            <Mail className="w-6 h-6 shrink-0 stroke-[1.5]" />
            <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wide">
              Interested in our services? Get a quote today!
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-red text-[12px] font-bold uppercase tracking-wide hover:bg-off-white transition-colors self-start sm:self-auto"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="bg-navy text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wide mb-4 text-white">
                About Neema Security
              </h3>
              <p className="text-[13px] text-white/70 leading-relaxed">
                Neema Security Group is dedicated to understanding and meeting our
                clients requirements with disciplined personnel, clear procedures
                and reliable protection for homes, businesses and institutions.
              </p>
            </div>
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wide mb-4 text-white">
                Useful Links
              </h3>
              <ul className="space-y-2.5 text-[13px] text-white/70">
                {[
                  { href: "/contact", label: "Request a Quote" },
                  { href: "/services", label: "Our Services" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="flex items-center gap-2 hover:text-white transition-colors">
                      <span className="text-red font-bold">›</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wide mb-4 text-white">
                Find Us
              </h3>
              <p className="text-[13px] text-white/70 leading-relaxed mb-3">Kenya</p>
              <a
                href="mailto:info@neemasecurity.co.ke"
                className="text-[13px] text-white/70 hover:text-white transition-colors"
              >
                info@neemasecurity.co.ke
              </a>
              <div className="mt-5">
                <Image
                  src={LOGO}
                  alt="Neema Security Group"
                  width={120}
                  height={36}
                  className="h-8 w-auto brightness-0 invert opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red py-3">
          <p className="text-center text-[11px] text-white/90">
            Neema Security Group | © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
