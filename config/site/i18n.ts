/**
 * Site languages. Ukrainian lives at the root (existing URLs keep working);
 * the others get a path prefix with the same page slugs: /en/demo, /cs/demo…
 */

/** Every language the site has copy for. */
export const ALL_LOCALES = ['uk', 'en', 'cs', 'de'] as const;
export type Locale = (typeof ALL_LOCALES)[number];

/**
 * Languages actually published: routes, switcher, hreflang and sitemap use
 * only these. German is on hold (owner decision 2026-10-18) — the copy stays
 * in config/site/de; add 'de' back here to publish it.
 */
export const LOCALES: readonly Locale[] = ['uk', 'en', 'cs'];

export const DEFAULT_LOCALE: Locale = 'uk';

/** Locales served under a prefix — the values of the [lang] route segment. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Short label in the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = { uk: 'UA', en: 'EN', cs: 'CS', de: 'DE' };

/** Native language name, for accessible switcher labels. */
export const LOCALE_NAME: Record<Locale, string> = {
  uk: 'Українська',
  en: 'English',
  cs: 'Čeština',
  de: 'Deutsch',
};

/** True only for published languages. */
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
