"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Vigilance",
    description:
      "Constant awareness and readiness. We stay present so you can focus on what matters.",
  },
  {
    title: "Integrity",
    description:
      "Honest conduct in every interaction. Trust is the foundation of every assignment.",
  },
  {
    title: "Professionalism",
    description:
      "Standards that never slip. From appearance to reporting, we hold ourselves accountable.",
  },
  {
    title: "Accountability",
    description:
      "Clear ownership of outcomes. We deliver what we commit to and communicate clearly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[56px] lg:pt-[72px]">
        <section className="relative py-16 sm:py-20 lg:py-24 bg-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
          <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-red uppercase">
              About Neema
            </p>
            <h1 className="mt-3 text-[28px] sm:text-[36px] lg:text-[42px] font-bold max-w-2xl leading-tight">
              Security is more than presence. It is confidence.
            </h1>
          </div>
        </section>

        <section className="py-14 sm:py-18 lg:py-20 bg-cream">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                  alt="Neema Security team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-[22px] sm:text-[26px] font-bold text-black">
                  Who we are
                </h2>
                <p className="mt-4 text-[15px] text-gray leading-relaxed">
                  Neema Security Group is a professional security provider focused on
                  vigilance, integrity and protection. We deliver disciplined personnel,
                  clear procedures and reliable coverage for homes, businesses and
                  institutions.
                </p>
                <p className="mt-3 text-[15px] text-gray leading-relaxed">
                  Our approach is practical. We assess each site, understand how you
                  operate, and put measures in place that work in real conditions, not
                  just on paper.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-red text-white text-[13px] font-bold uppercase tracking-wide hover:bg-red-dark transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18 lg:py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <h2 className="text-center text-[22px] sm:text-[26px] font-bold text-black mb-10">
              Our values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="border border-gray-border p-6 text-center hover:border-red/40 transition-colors"
                >
                  <h3 className="text-[15px] font-bold text-red uppercase tracking-wide">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-gray leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
