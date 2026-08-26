import type { Metadata } from 'next';

/**
 * Single source of truth for SEO: site-level defaults plus a helper that
 * builds per-page Metadata (title, description, canonical, hreflang,
 * Open Graph, Twitter) from one small config object. Page files should
 * never repeat title/description strings across metadata/openGraph/twitter
 * — call `pageMetadata()` instead.
 */

export const SITE = {
  name: 'hirnix',
  url: 'https://hirnix.studio',
  defaultLocale: 'uk' as const,
  locales: ['uk', 'en'] as const,
};

export type Locale = (typeof SITE.locales)[number];

const OG_LOCALE: Record<Locale, string> = {
  uk: 'uk_UA',
  en: 'en_US',
};

export function absoluteUrl(path = ''): string {
  return `${SITE.url}${path}`;
}

/** Default OG image tagline per locale — shown under the logo on the branded share image. */
const OG_TAGLINE: Record<Locale, string> = {
  uk: '24/7 запис і адміністрування вашого салону',
  en: '24/7 booking and management for your salon',
};

interface OgImageParams {
  tagline?: string;
  locale?: Locale;
}

export function ogImagePath({ tagline, locale = SITE.defaultLocale }: OgImageParams = {}): string {
  const search = new URLSearchParams({ tagline: tagline ?? OG_TAGLINE[locale], locale });
  return `/og?${search.toString()}`;
}

interface LocaleVariant {
  locale: Locale;
  /** Path for this locale's version of the page, e.g. '' or '/en'. */
  path: string;
}

export interface PageSeoConfig {
  /** This page's own path, e.g. '' | '/en' | '/privacy'. */
  path: string;
  locale: Locale;
  /** Page title, ideally <= 60 characters. */
  title: string;
  /** Meta description, ideally <= 155 characters. */
  description: string;
  /** Other-locale versions of this same page, for hreflang alternates. Omit for single-locale pages. */
  variants?: LocaleVariant[];
  /** Overrides the default per-locale OG image tagline. */
  ogImageTagline?: string;
  noIndex?: boolean;
}

export function pageMetadata(cfg: PageSeoConfig): Metadata {
  const canonical = absoluteUrl(cfg.path);
  const allVariants: LocaleVariant[] = [{ locale: cfg.locale, path: cfg.path }, ...(cfg.variants ?? [])];

  const languages: Record<string, string> = {};
  for (const variant of allVariants) {
    languages[variant.locale] = absoluteUrl(variant.path);
  }
  if (cfg.variants && cfg.variants.length > 0) {
    const defaultVariant = allVariants.find((v) => v.locale === SITE.defaultLocale) ?? allVariants[0];
    languages['x-default'] = absoluteUrl(defaultVariant.path);
  }

  const alternateLocales = allVariants
    .filter((v) => v.locale !== cfg.locale)
    .map((v) => OG_LOCALE[v.locale]);

  // <title> is rendered through the root layout's "%s | hirnix" template, but
  // openGraph/twitter titles are not templated, so apply the same suffix here
  // (skipped when the title already carries the site name, e.g. the home page).
  const socialTitle = cfg.title.includes(SITE.name) ? cfg.title : `${cfg.title} | ${SITE.name}`;

  const ogImage = ogImagePath({ tagline: cfg.ogImageTagline, locale: cfg.locale });

  return {
    title: cfg.title,
    description: cfg.description,
    alternates: {
      canonical,
      ...(cfg.variants ? { languages } : {}),
    },
    ...(cfg.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: socialTitle,
      description: cfg.description,
      url: canonical,
      siteName: SITE.name,
      type: 'website',
      locale: OG_LOCALE[cfg.locale],
      ...(alternateLocales.length ? { alternateLocale: alternateLocales } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: cfg.description,
      images: [ogImage],
    },
  };
}
