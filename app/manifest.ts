import type { MetadataRoute } from 'next';
import { BRAND } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND} — CRM для сфери послуг`,
    short_name: BRAND,
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
