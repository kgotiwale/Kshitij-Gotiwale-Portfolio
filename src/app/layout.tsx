import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Ankita D'Souza",
  description: "Welcome to my Creative Kitchen",
  openGraph: {
    title: "Ankita D'Souza",
    description: "Welcome to my Creative Kitchen",
    images: ["/seo/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankita D'Souza",
    description: "Welcome to my Creative Kitchen",
    images: ["/seo/og-image.png"],
  },
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
