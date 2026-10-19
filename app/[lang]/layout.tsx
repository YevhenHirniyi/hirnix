import { RootDocument, rootMetadata, rootViewport } from '@/components/site/RootDocument';
import { langStaticParams, toLocale, type LangParams } from './params';

// Root layout of the prefixed languages: only /en and /cs exist; anything
// else under [lang] is a 404.
export const dynamicParams = false;
export const generateStaticParams = langStaticParams;
export const metadata = rootMetadata;
export const viewport = rootViewport;

export default async function LangLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const locale = toLocale((await params).lang);
  return <RootDocument lang={locale}>{children}</RootDocument>;
}
