import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/seo';
import { LOCALES, localePath } from '@/config/site/i18n';
import { LOCALIZED_KEYS, ROUTES } from '@/config/site/routes';

/**
 * Only built, canonical, indexable pages (strategy T06). Every localized page
 * is listed once per language with hreflang alternates for the others.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => absoluteUrl(path === '/' ? '' : path);

  const localized = LOCALIZED_KEYS.filter((k) => ROUTES[k].live).flatMap((k) => {
    const path = ROUTES[k].path;
    const languages: Record<string, string> = Object.fromEntries(LOCALES.map((l) => [l, url(localePath(l, path))]));
    languages['x-default'] = url(path);
    return LOCALES.map((l) => ({
      url: url(localePath(l, path)),
      lastModified: now,
      changeFrequency: (k === 'home' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: k === 'home' ? (l === 'uk' ? 1 : 0.9) : 0.8,
      alternates: { languages },
    }));
  });

  return [
    ...localized,
    { url: url(ROUTES.privacy.path), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url(ROUTES.cookies.path), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
