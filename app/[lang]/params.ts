import { notFound } from 'next/navigation';
import { PREFIXED_LOCALES, isLocale, type Locale } from '@/config/site/i18n';

export interface LangParams {
  params: Promise<{ lang: string }>;
}

/** Validates the [lang] segment; unknown values are a real 404. */
export function toLocale(lang: string): Locale {
  if (!isLocale(lang) || lang === 'uk') notFound();
  return lang;
}

export function langStaticParams() {
  return PREFIXED_LOCALES.map((lang) => ({ lang }));
}
