import type { MetadataRoute } from 'next';
import { SITE } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — CRM для сфери послуг`,
    short_name: SITE.name,
    description: 'Онлайн-запис 24/7 і панель адміністрування для сфери послуг.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF7',
    theme_color: '#17694C',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
