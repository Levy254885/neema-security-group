import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src={LOGO}
                alt="Neema Security Group"
                width={160}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Vigilance. Integrity. Protection.
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-white/50 uppercase font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-white/50 uppercase font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] text-white/50 uppercase font-semibold mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              For enquiries or a security assessment, get in touch through the
              contact form.
            </p>
            <Link
              href="/contact"
              className="inline-flex text-sm font-semibold text-white hover:underline"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © 2026 Neema Security Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
