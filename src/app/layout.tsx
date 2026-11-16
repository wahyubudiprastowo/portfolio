import type { Metadata } from "next";
import { Anton, Caveat, Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  weight: ["600"],
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wahyu Budi Prastowo — Cloud Infrastructure Architect",
  description:
    "14+ years designing, migrating and securing enterprise infrastructure across Azure, AWS, GCP and hybrid clouds — now putting AI to work on security, games, social media tooling and automation.",
  keywords: ["Wahyu Budi Prastowo", "Cloud Infrastructure Architect", "Azure", "Cloud Security", "DevSecOps", "Agentic AI", "portfolio"],
  authors: [{ name: "Wahyu Budi Prastowo", url: "https://github.com/wahyubudiprastowo" }],
  openGraph: {
    title: "Wahyu Budi Prastowo — Cloud Infrastructure Architect",
    description:
      "Cloud, security and automation — 14+ years in enterprise infrastructure, now having fun with everything AI.",
    siteName: "Wahyu Budi Prastowo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} ${caveat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
