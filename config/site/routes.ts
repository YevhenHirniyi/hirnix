/**
 * Route map of the multi-page marketing site (pages P01–P11 from the site
 * strategy). Every internal link, the header menu, the footer and the
 * sitemap read paths from here, so a page is renamed in exactly one place.
 *
 * `live` marks pages that are already built. Links to pages that are not
 * live yet still point at their final path (they 404 until built) — this is
 * deliberate for the phase-1 prototypes, so the navigation logic can be
 * reviewed as it will ship.
 */

export const LOGIN_URL = 'https://www.hirnix.biz/login';

export interface SiteRoute {
  id: string;
  path: string;
  /** Short label for menus and footer. */
  label: string;
  /** One-line explanation shown in the "Можливості" / "Для кого" dropdowns. */
  hint?: string;
  live: boolean;
}

export const ROUTES = {
  home: { id: 'P01', path: '/', label: 'Головна', live: true },
  scheduling: {
    id: 'P02', path: '/features/scheduling', label: 'Записи та розклад',
    hint: 'Робочий день, візити й майстри в календарі', live: false,
  },
  clients: {
    id: 'P03', path: '/features/clients', label: 'Клієнтська база',
    hint: 'Контакти й історія візитів кожного клієнта', live: true,
  },
  team: {
    id: 'P04', path: '/features/team-and-services', label: 'Послуги та команда',
    hint: 'Каталог послуг, виконавці й графіки', live: false,
  },
  reports: {
    id: 'P05', path: '/features/reports', label: 'Звіти та результати',
    hint: 'Показники записів, послуг і майстрів за період', live: false,
  },
  booking: {
    id: 'P06', path: '/features/online-booking', label: 'Онлайн-запис',
    hint: 'Сторінка, де клієнт сам обирає послугу й час', live: false,
  },
  independent: {
    id: 'P07', path: '/solutions/independent-professionals', label: 'Для приватних майстрів',
    hint: 'Працюєте самостійно, без адміністратора', live: false,
  },
  studios: {
    id: 'P08', path: '/solutions/beauty-studios', label: 'Для б’юті-студій',
    hint: 'Організація роботи кількох майстрів', live: false,
  },
  demo: { id: 'P09', path: '/demo', label: 'Демо', live: false },
  conditions: { id: 'P10', path: '/conditions', label: 'Умови', live: true },
  contact: { id: 'P11', path: '/contact', label: 'Контакти', live: false },
  privacy: { id: 'L01', path: '/privacy', label: 'Політика конфіденційності', live: true },
  cookies: { id: 'L02', path: '/cookies', label: 'Cookies', live: true },
} satisfies Record<string, SiteRoute>;

export type RouteKey = keyof typeof ROUTES;

export const FEATURE_KEYS = ['scheduling', 'clients', 'team', 'reports', 'booking'] as const;
export const SEGMENT_KEYS = ['independent', 'studios'] as const;
