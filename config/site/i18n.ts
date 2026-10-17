/**
 * Site languages. Ukrainian lives at the root (existing URLs keep working);
 * the others get a path prefix with the same page slugs: /en/demo, /cs/demo…
 */

export const LOCALES = ['uk', 'en', 'cs', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'uk';

/** Locales served under a prefix — the values of the [lang] route segment. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Exclude<Locale, 'uk'>[];

/** Short label in the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = { uk: 'UA', en: 'EN', cs: 'CS', de: 'DE' };

/** Native language name, for accessible switcher labels. */
export const LOCALE_NAME: Record<Locale, string> = {
  uk: 'Українська',
  en: 'English',
  cs: 'Čeština',
  de: 'Deutsch',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** '/features/clients' → '/cs/features/clients'; '/' → '/cs'. Anchors are kept. */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === '/') return `/${locale}`;
  if (path.startsWith('#')) return path;
  return `/${locale}${path}`;
}
