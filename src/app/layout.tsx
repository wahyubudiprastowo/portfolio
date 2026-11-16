import type { Metadata } from "next";
import { Anton, Caveat, Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Wahyu Budi Prastowo — IT Infrastructure · Cloud Security · Azure",
  description:
    "Portfolio Wahyu Budi Prastowo: projek open source di bidang cloud security, DevSecOps, infrastruktur Azure, dan aplikasi edukasi. Semua konten bisa diedit lewat Mode Edit.",
  keywords: ["Wahyu Budi Prastowo", "Azure", "Cloud Security", "DevSecOps", "portfolio", "open source"],
  authors: [{ name: "Wahyu Budi Prastowo", url: "https://github.com/wahyubudiprastowo" }],
  openGraph: {
    title: "Wahyu Budi Prastowo — IT Infrastructure · Cloud Security · Azure",
    description:
      "Projek open source di bidang cloud security, DevSecOps, dan aplikasi edukasi.",
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
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${anton.variable} ${inter.variable} ${caveat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
