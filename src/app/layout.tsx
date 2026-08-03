import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Jiangxi Xuanpin New Materials - Global Masterbatch Solutions Provider",
    template: "%s | Xuanpin New Materials",
  },
  description:
    "Leading manufacturer and exporter of masterbatch products. Factory direct supply of PBAT, PLA, PPA, Barium Sulfate, Talc, Defoamer, and Calcium Carbonate masterbatch.",
  keywords: [
    "masterbatch",
    "PBAT",
    "PLA",
    "biodegradable",
    "calcium carbonate",
    "talc masterbatch",
    "PPA masterbatch",
    "barium sulfate",
    "plastic additives",
    "Jiangxi Xuanpin",
  ],
  openGraph: {
    title: "Jiangxi Xuanpin New Materials - Global Masterbatch Solutions",
    description:
      "Factory direct masterbatch manufacturer. R&D customization, global export, quality assurance.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
