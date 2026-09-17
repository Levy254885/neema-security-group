"use client";

import Image from "next/image";
import Link from "next/link";

const blocks = [
  {
    title: "About Neema Security",
    text: "Neema Security Group is dedicated to understanding and meeting our clients precise requirements with disciplined personnel, clear procedures and reliable protection.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1000&auto=format&fit=crop",
    href: "/about",
  },
  {
    title: "Our Services",
    text: "Our approach starts with a full assessment of the risks at each location. We then design a practical plan that fits how you operate and the protection you need.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
    href: "/services",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {blocks.map((block) => (
            <Link key={block.title} href={block.href} className="group block">
              <div className="relative">
                <div className="relative h-[240px] sm:h-[280px] overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-red py-3 px-4 text-center">
                  <span className="text-[13px] sm:text-[14px] font-bold text-white uppercase tracking-wide">
                    {block.title}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-[13px] sm:text-[14px] text-gray leading-relaxed text-center max-w-sm mx-auto">
                {block.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
