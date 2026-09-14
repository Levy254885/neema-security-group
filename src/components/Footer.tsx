import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  "Manned Guarding",
  "Corporate Security",
  "Residential Security",
  "Event Security",
  "Access Control",
  "Security Consulting",
];

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-gold font-bold text-sm">NS</span>
              </div>
              <div>
                <div className="font-semibold tracking-wide text-sm">NEEMA</div>
                <div className="text-[10px] tracking-[0.2em] text-gold uppercase">
                  Security Group
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Vigilance. Integrity. Protection.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact note */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gold uppercase font-medium mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              For enquiries and security assessments, please use the contact
              form or request protection above.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 Neema Security Group. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Professional Security Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
