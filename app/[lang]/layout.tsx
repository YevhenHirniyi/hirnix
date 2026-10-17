import { LangSetter } from '@/components/LangSetter';
import { langStaticParams, toLocale, type LangParams } from './params';

// Only /en, /cs and /de exist; anything else under [lang] is a 404.
export const dynamicParams = false;
export const generateStaticParams = langStaticParams;

export default async function LangLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const locale = toLocale((await params).lang);
  return (
    <>
      {/* The root layout renders <html lang="uk">; correct it for this locale. */}
      <LangSetter lang={locale} />
      {children}
    </>
  );
}
