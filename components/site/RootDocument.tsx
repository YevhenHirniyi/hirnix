import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BRAND, SITE, ogImagePath } from "@/config/seo";
import "@/app/globals.css";
import "@/app/site.css";
import "react-phone-number-input/style.css";

/**
 * The <html> shell shared by both root layouts — app/(uk)/layout.tsx and
 * app/[lang]/layout.tsx — and the global 404. Two root layouts exist so the
 * server-rendered <html lang> matches the page language: crawlers (Bing, and
 * the AI search built on it) read the attribute without running JS.
 */

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Hirnix — CRM для майстрів і б’юті-студій",
    template: "%s — Hirnix",
  },
  description:
    "Hirnix — CRM для майстрів і б’юті-студій: клієнти, записи, послуги, команда та звіти в одній системі.",
  openGraph: {
    siteName: BRAND,
    type: "website",
    images: [
      {
        url: ogImagePath(),
        width: 1200,
        height: 630,
        alt: "Hirnix — CRM для майстрів і б’юті-студій",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17694C",
};

export function RootDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={manrope.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <Script id="plerdy" strategy="afterInteractive">
          {`(function(w,d){
  if(w.__plerdyCode)return;
  w.__plerdyCode=1;
  w._protocol=w.location.protocol=="https:"?"https://":"http://";
  w._site_hash_code="88bde5cc61a4360ca02023839010e6a8";
  w._suid=80669;
  var s=d.createElement("script");
  s.async=true;
  s.referrerPolicy="strict-origin-when-cross-origin";
  s.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
  d.head.appendChild(s);
})(window,document);`}
        </Script>
      </body>
    </html>
  );
}
