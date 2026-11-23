import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jefwah & Associates Advocates | Legal Counsel in Kenya",
    template: "%s | Jefwah & Associates Advocates",
  },
  description:
    "Jefwah & Associates Advocates provides legal services in litigation, conveyancing, corporate and commercial law, family law and other practice areas in Kenya.",
  keywords: [
    "Jefwah and Associates Advocates",
    "Law firm in Diani",
    "Advocates in Kenya",
    "Legal services",
    "Conveyancing",
    "Civil litigation",
    "Corporate law",
  ],
  applicationName: "Jefwah & Associates Advocates",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
