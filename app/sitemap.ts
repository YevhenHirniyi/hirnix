import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeAlternates = {
    languages: {
      uk: absoluteUrl(''),
      en: absoluteUrl('/en'),
      'x-default': absoluteUrl(''),
    },
  };

  return [
    {
      url: absoluteUrl(''),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: homeAlternates,
    },
    {
      url: absoluteUrl('/en'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: homeAlternates,
    },
    {
      url: absoluteUrl('/privacy'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: absoluteUrl('/cookies'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
