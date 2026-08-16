import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GYMRILLAZ | Parañaque's High-Intensity Community Gym",
    template: "%s | GYMRILLAZ",
  },
  description:
    "Gymrillaz is Parañaque's premier community gym for heavy lifting, bodybuilding, and functional fitness. Open 8 AM – 9 PM daily at 91 Saudi Arabia St, 1700 Metro Manila.",
  keywords: [
    "gym Paranaque",
    "bodybuilding gym Metro Manila",
    "fitness center Paranaque",
    "heavy lifting gym Philippines",
    "Gymrillaz",
    "day pass gym Manila",
    "personal trainer Paranaque",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
