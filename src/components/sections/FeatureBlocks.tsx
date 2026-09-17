"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const blocks = [
  {
    title: "About Neema Security",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
    text: "Neema Security Group is dedicated to understanding and meeting our clients precise requirements with disciplined personnel and reliable operations.",
  },
  {
    title: "Our Services",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    text: "From manned guarding to access control and event security, we assess each site and deliver protection that fits how you operate.",
  },
];

export default function FeatureBlocks() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="max-w-md mx-auto px-4 space-y-10">
        {blocks.map((block, i) => (
          <motion.article
            key={block.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={block.href} className="block group">
              <div className="relative">
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 448px"
                  />
                </div>
                <div className="absolute bottom-0 left-0">
                  <span className="inline-block bg-green text-white text-[11px] sm:text-xs font-bold tracking-[0.12em] uppercase px-4 py-2.5">
                    {block.title}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray leading-relaxed">{block.text}</p>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
