"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-gold text-dark-navy hover:bg-light-gold hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-gold",
    secondary:
      "bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white focus-visible:outline-white",
    outline:
      "bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark-navy focus-visible:outline-gold",
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={cn(baseStyles, variants[variant], "group", className)}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], "group", className)}
    >
      {content}
    </motion.button>
  );
}
