"use client";

import Link from "next/link";
import Image from "next/image";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide mb-4">
              Downloads
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Service Overview
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide mb-4">
              Contacts
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@neemasecurity.co.ke"
                  className="hover:text-white transition-colors"
                >
                  info@neemasecurity.co.ke
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wide mb-4">
              Popular Pages
            </h3>
            <ul className="space-y-2.5 text-[13px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/manned-guarding"
                  className="hover:text-white transition-colors"
                >
                  Manned Guarding
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link href="/" className="inline-block">
            <Image
              src={LOGO}
              alt="Neema Security Group"
              width={110}
              height={36}
              className="h-8 w-auto brightness-0 invert opacity-90"
            />
          </Link>
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Neema Security Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
