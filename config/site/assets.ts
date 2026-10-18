/**
 * Product screenshots used on the site. Captured from the training business
 * "NOIR Beauty Studio" in the current CRM (2026-10-17, after the platform
 * update); client phones and emails are blurred at capture time.
 *
 * Rule: a screenshot appears at most once per page. Page templates enforce it
 * (see usePicker in components/site/blocks.tsx); a block without its own
 * screenshot is shown as text only. Retake affected shots when the CRM changes.
 */

export interface SiteAsset {
  src: string;
  width: number;
  height: number;
  /** 'phone' renders in a phone frame instead of a browser window. */
  device?: 'desktop' | 'phone';
}

// Alt texts are per locale: common.assets.alt in config/site/<locale>/common.ts.

export const SITE_ASSETS = {
  dashboard: {
    src: '/product/site/dashboard.webp', width: 1600, height: 1000,
  },
  calendarDay: {
    src: '/product/site/calendar-day.webp', width: 1600, height: 1000,
  },
  calendarWeek: {
    src: '/product/site/calendar-week.webp', width: 1600, height: 1000,
  },
  visit: {
    src: '/product/site/visit.webp', width: 1536, height: 1530,
  },
  clients: {
    src: '/product/site/clients-search.webp', width: 1600, height: 1000,
  },
  clientCard: {
    src: '/product/site/client-card.webp', width: 1600, height: 1000,
  },
  services: {
    src: '/product/site/services.webp', width: 1600, height: 1000,
  },
  serviceEdit: {
    src: '/product/site/service-edit.webp', width: 896, height: 1530,
  },
  employees: {
    src: '/product/site/employees.webp', width: 1600, height: 756,
  },
  reports: {
    src: '/product/site/reports-overview.webp', width: 1600, height: 1000,
  },
  reportsDetail: {
    src: '/product/site/reports-breakdown.webp', width: 1600, height: 1000,
  },
  bookingSettings: {
    src: '/product/site/booking-settings.webp', width: 1600, height: 1000,
  },
  bookingStart: {
    src: '/product/site/booking-start-m.webp', width: 780, height: 1594, device: 'phone',
  },
  bookingMasters: {
    src: '/product/site/booking-masters-m.webp', width: 780, height: 1594, device: 'phone',
  },
  bookingServices: {
    src: '/product/site/booking-services-m.webp', width: 780, height: 1594, device: 'phone',
  },
  bookingSummary: {
    src: '/product/site/booking-summary-m.webp', width: 780, height: 1594, device: 'phone',
  },
  bookingTime: {
    src: '/product/site/booking-datetime-m.webp', width: 780, height: 1594, device: 'phone',
  },
} satisfies Record<string, SiteAsset>;

export type AssetId = keyof typeof SITE_ASSETS;

/**
 * Ukrainian pages show the Ukrainian CRM interface; every other language shows
 * the same screens captured with the English interface (public/product/site/en/,
 * identical file names and sizes).
 */
export function assetSrc(asset: AssetId, locale: string): string {
  const { src } = SITE_ASSETS[asset];
  return locale === 'uk' ? src : src.replace('/product/site/', '/product/site/en/');
}
