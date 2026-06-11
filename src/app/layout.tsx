import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navigation } from "@/components/Navigation";
import { Logo } from "@/components/Logo";
import { SiteTagline } from "@/components/SiteTagline";
import { PageTransition } from "@/components/PageTransition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const rmNeue = localFont({
  src: [
    { path: "../../public/fonts/RMNeue-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/RMNeue-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../../public/fonts/RMNeue-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/RMNeue-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/RMNeue-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/RMNeue-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../../public/fonts/RMNeue-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/RMNeue-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../../public/fonts/RMNeue-Black.woff2", weight: "900", style: "normal" },
    { path: "../../public/fonts/RMNeue-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-rm-neue",
  display: "swap",
});

const rmNeueVF = localFont({
  src: "../../public/fonts/RMNeue-VF.woff2",
  variable: "--font-rm-neue-vf",
  weight: "400 700",
  display: "swap",
});

const generalSans = localFont({
  src: [
    { path: "../../public/fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/GeneralSans-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/GeneralSans-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-general-sans",
  display: "swap",
});

const otJubilee = localFont({
  src: [
    { path: "../../public/fonts/OTJubilee-DiamondExtralight.otf", weight: "200", style: "normal" },
    { path: "../../public/fonts/OTJubilee-DiamondExtralightItalic.otf", weight: "200", style: "italic" },
    { path: "../../public/fonts/OTJubilee-DiamondMedium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/OTJubilee-DiamondMediumItalic.otf", weight: "500", style: "italic" },
    { path: "../../public/fonts/OTJubilee-DiamondExtrabold.otf", weight: "800", style: "normal" },
    { path: "../../public/fonts/OTJubilee-DiamondExtraboldItalic.otf", weight: "800", style: "italic" },
  ],
  variable: "--font-ot-jubilee",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kshitij Gotiwale",
  description: "Independent art director, brand designer, and illustrator based in London, United Kingdom and Mumbai, India.",
  openGraph: {
    siteName: "Kshitij Gotiwale Portfolio",
    title: "Kshitij Gotiwale",
    description: "Independent art director, brand designer, and illustrator based in London, United Kingdom and Mumbai, India.",
    images: ["/seo/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kshitij Gotiwale",
    description: "Independent art director, brand designer, and illustrator based in London, United Kingdom and Mumbai, India.",
    images: ["/seo/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/seo/favicon.ico", sizes: "any" },
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/seo/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rmNeue.variable} ${rmNeueVF.variable} ${otJubilee.variable} ${generalSans.variable} h-full`}>
      <body className="min-h-full" style={{ scrollbarGutter: 'stable' }}>
        <Logo />
        <SiteTagline />
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
