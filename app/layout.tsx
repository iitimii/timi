import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile, siteMetadata } from "@/data/profile";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-loaded-display",
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
  weight: "variable"
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-loaded-body"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-loaded-mono"
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.language} className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <SiteHeader />
        <main id={siteMetadata.mainId} className="page-shell">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
