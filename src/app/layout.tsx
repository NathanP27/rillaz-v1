import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { siteConfig } from "@/config/site";
import { PageTransition } from "@/components/ui/page-transition";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    default: "Gymrillaz | Home",
    template: "Gymrillaz | %s",
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
    title: "Gymrillaz | Home",
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
    title: "Gymrillaz | Home",
    description:
      "Parañaque's premier community gym built for heavy lifting, athletic conditioning, bodybuilding, and functional fitness.",
    images: ["/images/gallery/565123458_1240238891457994_3695900658646377638_n.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#09090b] text-white min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-yellow-400 focus:text-black focus:font-bold focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
