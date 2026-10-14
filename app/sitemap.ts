import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/seo';
import { ROUTES, type SiteRoute } from '@/config/site/routes';

/** Only built, canonical, indexable pages are listed (strategy T06). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (r: SiteRoute) => absoluteUrl(r.path === '/' ? '' : r.path);

  const homeAlternates = {
    languages: {
      uk: absoluteUrl(''),
      en: absoluteUrl('/en'),
      'x-default': absoluteUrl(''),
    },
  };

  const legal = new Set<SiteRoute>([ROUTES.privacy, ROUTES.cookies]);
  const pages = Object.values(ROUTES).filter((r: SiteRoute) => r.live && r !== ROUTES.home && !legal.has(r));

  return [
    { url: url(ROUTES.home), lastModified: now, changeFrequency: 'weekly', priority: 1, alternates: homeAlternates },
    { url: absoluteUrl('/en'), lastModified: now, changeFrequency: 'weekly', priority: 0.6, alternates: homeAlternates },
    ...pages.map((r) => ({ url: url(r), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    { url: url(ROUTES.privacy), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url(ROUTES.cookies), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
