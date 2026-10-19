import { RootDocument, rootMetadata, rootViewport } from "@/components/site/RootDocument";

// Root layout of the Ukrainian site (served without a locale prefix) and /admin.
export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function UkRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="uk">{children}</RootDocument>;
}
