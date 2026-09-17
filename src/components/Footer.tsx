import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const LOGO = "/BackgroundEraser_20260915_110802894.png";

const usefulLinks = [
  { href: "/contact", label: "Emergency Contacts" },
  { href: "/contact", label: "Request a Quote" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="bg-green">
        <div className="max-w-lg mx-auto px-5 py-5 flex items-center gap-4">
          <Mail className="w-8 h-8 text-white shrink-0 stroke-[1.5]" />
          <p className="text-sm font-bold uppercase tracking-wide leading-snug">
            Interested in our services? Get a quote today!
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-5 py-12">
        <h3 className="text-base font-bold uppercase tracking-[0.12em] mb-4">
          About Neema Security
        </h3>
        <p className="text-sm text-white/70 leading-relaxed mb-10">
          Neema Security Group is dedicated to understanding and meeting our
          clients requirements with cost effective service, efficiency and
          reliability, supported by disciplined personnel and clear procedures.
        </p>

        <h3 className="text-base font-bold uppercase tracking-[0.12em] mb-4">
          Useful Links
        </h3>
        <ul className="space-y-3 mb-12">
          {usefulLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
              >
                <span className="text-green font-bold">›</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="inline-block mb-6">
          <Image
            src={LOGO}
            alt="Neema Security Group"
            width={140}
            height={44}
            className="h-9 w-auto brightness-0 invert opacity-90"
          />
        </Link>
        <p className="text-xs text-white/40">
          © 2026 Neema Security Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
