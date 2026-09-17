"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[56px] lg:pt-[72px]">
        <section className="relative py-16 sm:py-20 bg-navy text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
          <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-red uppercase">
              Our Services
            </p>
            <h1 className="mt-3 text-[28px] sm:text-[36px] font-bold max-w-2xl leading-tight">
              Security solutions built for real environments
            </h1>
            <p className="mt-4 text-[15px] text-white/80 max-w-xl leading-relaxed">
              From manned guarding to consulting, every service is delivered with
              clear procedures and personnel who take the work seriously.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-cream">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block bg-white overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow"
                >
                  <div className="relative h-[200px] sm:h-[220px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-red py-2.5 px-4">
                      <span className="text-[13px] font-bold text-white uppercase tracking-wide">
                        {service.title}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[14px] text-gray leading-relaxed">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-block text-[13px] font-semibold text-red group-hover:underline">
                      Read more
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-red py-10 sm:py-12">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-white">
              Need a security plan for your site?
            </h2>
            <p className="mt-2 text-[14px] text-white/90">
              Tell us about your location and we will help you assess the right approach.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center px-7 py-3 bg-white text-red text-[13px] font-bold uppercase tracking-wide hover:bg-off-white transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
