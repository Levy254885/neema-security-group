import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neema Security Group | Professional Security Solutions",
  description:
    "Neema Security Group provides professional security solutions focused on vigilance, integrity and protection.",
  keywords: [
    "security company",
    "manned guarding",
    "corporate security",
    "residential security",
    "event security",
    "Kenya security",
    "professional security services",
  ],
  authors: [{ name: "Neema Security Group" }],
  openGraph: {
    title: "Neema Security Group | Professional Security Solutions",
    description:
      "Neema Security Group provides professional security solutions focused on vigilance, integrity and protection.",
    type: "website",
    locale: "en_US",
    siteName: "Neema Security Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neema Security Group | Professional Security Solutions",
    description:
      "Neema Security Group provides professional security solutions focused on vigilance, integrity and protection.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
