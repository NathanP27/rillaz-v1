import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteConfig.url,
    title: "GYMRILLAZ | Unleash Your Inner Beast",
    description:
      "Parañaque's premier community gym built for heavy lifting, athletic conditioning, bodybuilding, and functional fitness.",
    siteName: "GYMRILLAZ",
    images: [
      {
        url: "/images/gallery/565123458_1240238891457994_3695900658646377638_n.jpg",
        width: 1200,
        height: 630,
        alt: "Gymrillaz Parañaque Gym Floor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GYMRILLAZ | Parañaque's High-Intensity Community Gym",
    description:
      "Parañaque's premier community gym built for heavy lifting, athletic conditioning, bodybuilding, and functional fitness.",
    images: ["/images/gallery/565123458_1240238891457994_3695900658646377638_n.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "PH-00",
    "geo.placename": "Parañaque, Metro Manila, Philippines",
    "geo.position": "14.475853;121.015215",
    "ICBM": "14.475853, 121.015215",
    "robots": "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
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
