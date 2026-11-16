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
  title: "Wahyu Budi Prastowo — IT Infrastructure · Cloud Security · Azure",
  description:
    "Portfolio of Wahyu Budi Prastowo — open-source projects in cloud security, DevSecOps, Azure infrastructure and educational apps. Every text is editable via Edit Mode.",
  keywords: ["Wahyu Budi Prastowo", "Azure", "Cloud Security", "DevSecOps", "portfolio", "open source"],
  authors: [{ name: "Wahyu Budi Prastowo", url: "https://github.com/wahyubudiprastowo" }],
  openGraph: {
    title: "Wahyu Budi Prastowo — IT Infrastructure · Cloud Security · Azure",
    description:
      "Open-source projects in cloud security, DevSecOps, Azure infrastructure and educational apps.",
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
