import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE, ogImagePath } from "@/config/seo";
import "./globals.css";
import "react-phone-number-input/style.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "hirnix — CRM для сфери послуг",
    template: "%s | hirnix",
  },
  description:
    "hirnix — онлайн-запис 24/7 і панель адміністрування для сфери послуг.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: ogImagePath(),
        width: 1200,
        height: 630,
        alt: "hirnix — CRM для сфери послуг",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17694C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={manrope.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
