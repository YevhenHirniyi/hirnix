import type { Metadata } from 'next';
import { LOCALES, localePath } from './site/i18n';

/**
 * Single source of truth for SEO: site-level defaults plus a helper that
 * builds per-page Metadata (title, description, canonical, hreflang,
 * Open Graph, Twitter) from one small config object. Page files should
 * never repeat title/description strings across metadata/openGraph/twitter
 * — call `pageMetadata()` instead.
 */

export const SITE = {
  name: 'hirnix',
  // Must match the host Vercel serves (apex 308-redirects to www), or every
  // canonical/hreflang/sitemap URL points at a redirect.
  url: 'https://www.hirnix.studio',
  defaultLocale: 'uk' as const,
  locales: LOCALES,
};

/** Display form of the brand in titles. */
export const BRAND = 'Hirnix';

export type Locale = (typeof SITE.locales)[number];

const OG_LOCALE: Record<Locale, string> = {
  uk: 'uk_UA',
  en: 'en_US',
  cs: 'cs_CZ',
  de: 'de_DE',
};

export function absoluteUrl(path = ''): string {
  return `${SITE.url}${path}`;
}

/** Default OG image tagline per locale — shown under the logo on the branded share image. */
const OG_TAGLINE: Record<Locale, string> = {
  uk: 'CRM для майстрів і б’юті-студій',
  en: 'CRM for beauty professionals and studios',
  cs: 'CRM pro beauty mistry a studia',
  de: 'CRM für Beauty-Profis und Studios',
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

  // <title> is rendered through the root layout's "%s — Hirnix" template, but
  // openGraph/twitter titles are not templated, so apply the same suffix here.
  // A title that already carries the brand (e.g. the home page) is used as-is.
  const hasBrand = cfg.title.toLowerCase().includes(SITE.name);
  const socialTitle = hasBrand ? cfg.title : `${cfg.title} — ${BRAND}`;

  const ogImage = ogImagePath({ tagline: cfg.ogImageTagline, locale: cfg.locale });

  return {
    title: hasBrand ? { absolute: cfg.title } : cfg.title,
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
      siteName: BRAND,
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

/**
 * Metadata for a page that exists in every site language: canonical for this
 * locale plus hreflang alternates (and x-default → Ukrainian) for the others.
 */
export function localizedMetadata(cfg: {
  locale: Locale;
  /** Route path without locale prefix, e.g. '/' or '/features/clients'. */
  path: string;
  title: string;
  description: string;
  ogImageTagline?: string;
}): Metadata {
  const toUrlPath = (p: string) => (p === '/' ? '' : p);
  return pageMetadata({
    path: toUrlPath(localePath(cfg.locale, cfg.path)),
    locale: cfg.locale,
    title: cfg.title,
    description: cfg.description,
    ogImageTagline: cfg.ogImageTagline,
    variants: LOCALES.filter((l) => l !== cfg.locale).map((l) => ({ locale: l, path: toUrlPath(localePath(l, cfg.path)) })),
  });
}
