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
  live: boolean;
  /**
   * Date the page's visible content last changed (any language) — the
   * sitemap's <lastmod>. Bump it with every content edit; search engines stop
   * trusting lastmod that changes on every deploy.
   */
  updated: string;
}

/** Labels and menu hints live in each locale's copy (common.routes). */
export const ROUTES = {
  home: { id: 'P01', path: '/', live: true, updated: '2026-10-22' },
  scheduling: { id: 'P02', path: '/features/scheduling', live: true, updated: '2026-10-22' },
  clients: { id: 'P03', path: '/features/clients', live: true, updated: '2026-10-22' },
  team: { id: 'P04', path: '/features/team-and-services', live: true, updated: '2026-10-22' },
  reports: { id: 'P05', path: '/features/reports', live: true, updated: '2026-10-22' },
  booking: { id: 'P06', path: '/features/online-booking', live: true, updated: '2026-10-22' },
  independent: { id: 'P07', path: '/solutions/independent-professionals', live: true, updated: '2026-10-22' },
  studios: { id: 'P08', path: '/solutions/beauty-studios', live: true, updated: '2026-10-22' },
  demo: { id: 'P09', path: '/demo', live: true, updated: '2026-10-18' },
  conditions: { id: 'P10', path: '/conditions', live: true, updated: '2026-10-22' },
  contact: { id: 'P11', path: '/contact', live: true, updated: '2026-10-18' },
  privacy: { id: 'L01', path: '/privacy', live: true, updated: '2026-10-18' },
  cookies: { id: 'L02', path: '/cookies', live: true, updated: '2026-10-18' },
} satisfies Record<string, SiteRoute>;

/** Pages that exist in every locale (legal pages are Ukrainian only for now). */
export const LOCALIZED_KEYS = [
  'home', 'scheduling', 'clients', 'team', 'reports', 'booking',
  'independent', 'studios', 'demo', 'conditions', 'contact',
] as const;

export type RouteKey = keyof typeof ROUTES;

export const FEATURE_KEYS = ['scheduling', 'clients', 'team', 'reports', 'booking'] as const;
export const SEGMENT_KEYS = ['independent', 'studios'] as const;
