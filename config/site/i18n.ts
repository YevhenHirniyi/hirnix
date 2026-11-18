/**
 * Site languages. Ukrainian lives at the root (existing URLs keep working);
 * the others get a path prefix with the same page slugs: /en/demo, /cs/demo…
 */

/** Every language the site has copy for. */
export const ALL_LOCALES = ['uk', 'en', 'cs', 'pl', 'de'] as const;
export type Locale = (typeof ALL_LOCALES)[number];

/**
 * Languages actually published: routes, switcher, hreflang and sitemap use
 * only these. Polish added and German published 2026-11-18 (German was on
 * hold since 2026-10-18); remove a locale here to take it off the site.
 */
export const LOCALES: readonly Locale[] = ['uk', 'en', 'cs', 'pl', 'de'];

export const DEFAULT_LOCALE: Locale = 'uk';

/** Locales served under a prefix — the values of the [lang] route segment. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

/** Short label in the language switcher. */
export const LOCALE_LABEL: Record<Locale, string> = { uk: 'UA', en: 'EN', cs: 'CS', pl: 'PL', de: 'DE' };

/** Native language name, for accessible switcher labels. */
export const LOCALE_NAME: Record<Locale, string> = {
  uk: 'Українська',
  en: 'English',
  cs: 'Čeština',
  pl: 'Polski',
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
