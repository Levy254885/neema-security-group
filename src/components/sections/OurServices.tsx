"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Enhanced Protective Services",
    description:
      "End-to-end security solutions that help organisations of all sizes build robust programmes and stay ahead of evolving risks.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
    href: "/services/manned-guarding",
  },
  {
    title: "Facilities Management",
    description:
      "Hard and soft facilities services that support compliance, operational efficiency and a secure workplace environment.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    href: "/services/corporate-security",
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[22px] sm:text-[26px] font-bold text-charcoal mb-6 sm:mb-8">
          Our Services
        </h2>

        <div className="space-y-5">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block relative overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
            >
              <div className="relative h-[220px] sm:h-[260px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-white leading-snug">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] sm:text-[13px] text-white/90 leading-relaxed max-w-[260px] line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                  <span className="shrink-0 w-10 h-10 rounded-full bg-red flex items-center justify-center text-white shadow-md">
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
