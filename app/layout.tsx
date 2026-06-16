import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "react-phone-number-input/style.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hirnix.studio"),
  title: {
    default: "hirnix — Сайти та Google Business для українців у Чехії",
    template: "%s | hirnix",
  },
  description:
    "hirnix допомагає українським підприємцям у Чехії виглядати професійно онлайн. Сайти, Google Business Profile, локальне SEO. Перша консультація безкоштовна.",
  openGraph: {
    siteName: "hirnix",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "hirnix studio — сайти та Google Business для українців у Чехії",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
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
