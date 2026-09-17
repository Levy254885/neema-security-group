"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Security Guarding Services",
    description:
      "Tailored solutions built for long-term partnerships, mitigating risk, optimising operational efficiency, and ensuring seamless service delivery.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1400&auto=format&fit=crop",
    href: "/services/manned-guarding",
  },
  {
    title: "Corporate Security",
    description:
      "Professional coverage for offices and business facilities that protects people and assets while supporting day-to-day operations.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    href: "/services/corporate-security",
  },
  {
    title: "Residential Security",
    description:
      "Discreet, reliable protection for homes, estates and residential communities with clear procedures and resident-focused service.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    href: "/services/residential-security",
  },
  {
    title: "Access Control",
    description:
      "Controlled entry systems and procedures so you know who enters your property, when they enter, and under what conditions.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1400&auto=format&fit=crop",
    href: "/services/access-control",
  },
  {
    title: "Event Security",
    description:
      "Professional teams for access control, crowd management and site security so organisers can focus on the event itself.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
    href: "/services/event-security",
  },
  {
    title: "Security Consulting",
    description:
      "Practical security planning based on your real risks — site assessment, plan design and measures that fit your operations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    href: "/services/security-consulting",
  },
];

export default function OurServices() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + services.length) % services.length);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % services.length);
  }, []);

  const service = services[index];

  return (
    <section className="bg-[#F5F5F5] py-10 sm:py-14 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-black tracking-tight">
            Our Services
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous service"
              className="p-1 text-gray-light hover:text-black transition-colors"
            >
              <ChevronLeft size={22} strokeWidth={1.75} />
            </button>
            <button
              onClick={next}
              aria-label="Next service"
              className="p-1 text-gray-light hover:text-black transition-colors"
            >
              <ChevronRight size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="bg-white">
          <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] overflow-hidden">
            <Image
              key={service.image}
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold text-black leading-snug">
              {service.title}
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] text-gray leading-relaxed max-w-2xl">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="mt-5 inline-block text-[15px] font-semibold text-red hover:text-red-dark transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-8">
          {services.slice(0, 3).map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group block bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                  sizes="33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[16px] font-bold text-black group-hover:text-red transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] text-gray leading-relaxed line-clamp-2">
                  {s.description}
                </p>
                <span className="mt-3 inline-block text-[13px] font-semibold text-red">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
