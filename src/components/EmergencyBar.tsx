"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function EmergencyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 w-full bg-green text-white py-3.5 text-xs font-bold tracking-[0.15em] uppercase shadow-lg"
      >
        <Phone className="w-4 h-4" />
        24/7 Emergency Assistance
      </Link>
    </div>
  );
}
