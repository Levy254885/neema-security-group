import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={LOGO}
                alt="Neema Security Group"
                width={150}
                height={48}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed">
              Vigilance. Integrity. Protection.
            </p>
            <p className="mt-4 text-xs text-white/40 uppercase tracking-wider">
              Professional security solutions
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.15em] uppercase font-bold text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/#industries", label: "Industries" },
                { href: "/contact", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.15em] uppercase font-bold text-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.15em] uppercase font-bold text-white/50 mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Emergency Assistance
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10">
              <p className="text-[10px] tracking-[0.15em] uppercase text-green-light font-bold mb-1">
                24/7 Emergency
              </p>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white hover:underline"
              >
                Contact for assistance →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/35">
            © 2026 Neema Security Group. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white/35">
            <Link href="/contact" className="hover:text-white/60">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white/60">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
