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
  alt: string;
}

export const SITE_ASSETS = {
  dashboard: {
    src: '/product/site/dashboard.webp', width: 1600, height: 1000,
    alt: 'Дашборд Hirnix: записи на сьогодні, останні клієнти, популярні послуги',
  },
  calendarDay: {
    src: '/product/site/calendar-day.webp', width: 1600, height: 1000,
    alt: 'Денний календар Hirnix: записи по колонках трьох майстрів',
  },
  calendarWeek: {
    src: '/product/site/calendar-week.webp', width: 1600, height: 1000,
    alt: 'Тижневий календар майстра з вихідними, перервою та записами',
  },
  visit: {
    src: '/product/site/visit.webp', width: 1536, height: 1530,
    alt: 'Відкритий запис: майстер, послуги з цінами й тривалістю, дата, час, статус і коментарі',
  },
  clients: {
    src: '/product/site/clients-search.webp', width: 1600, height: 1000,
    alt: 'Список клієнтів із пошуком, кількістю візитів і датою останнього візиту',
  },
  clientCard: {
    src: '/product/site/client-card.webp', width: 1600, height: 1000,
    alt: 'Картка клієнта: кількість візитів, коментарі та історія записів зі статусами',
  },
  services: {
    src: '/product/site/services.webp', width: 1600, height: 1000,
    alt: 'Каталог послуг із категоріями, цінами й тривалістю',
  },
  serviceEdit: {
    src: '/product/site/service-edit.webp', width: 896, height: 1530,
    alt: 'Редагування послуги: фото, назва, опис і переклади для сторінки бронювання',
  },
  employees: {
    src: '/product/site/employees.webp', width: 1600, height: 756,
    alt: 'Майстри студії з призначеними послугами та тижневим графіком роботи',
  },
  reports: {
    src: '/product/site/reports-overview.webp', width: 1600, height: 1000,
    alt: 'Звіт Hirnix: підсумки за період і графік по місяцях',
  },
  reportsDetail: {
    src: '/product/site/reports-breakdown.webp', width: 1600, height: 1000,
    alt: 'Звіт по послугах і майстрах та завантаженість по днях тижня',
  },
  bookingSettings: {
    src: '/product/site/booking-settings.webp', width: 1600, height: 1000,
    alt: 'Налаштування сторінки бронювання: посилання, QR-код, оформлення та мови',
  },
  bookingStart: {
    src: '/product/site/booking-start.webp', width: 780, height: 1060, device: 'phone',
    alt: 'Сторінка онлайн-запису студії на телефоні',
  },
  bookingMasters: {
    src: '/product/site/booking-masters.webp', width: 780, height: 1400, device: 'phone',
    alt: 'Онлайн-запис: вибір майстра зі спеціалізацією та описом',
  },
  bookingServices: {
    src: '/product/site/booking-services.webp', width: 780, height: 1520, device: 'phone',
    alt: 'Онлайн-запис: вибір послуги з фото, описом, тривалістю й ціною',
  },
  bookingSummary: {
    src: '/product/site/booking-summary.webp', width: 780, height: 1060, device: 'phone',
    alt: 'Онлайн-запис: обрані майстер і послуга перед вибором часу',
  },
  bookingTime: {
    src: '/product/site/booking-datetime.webp', width: 780, height: 820, device: 'phone',
    alt: 'Онлайн-запис: вибір дати та вільного часу',
  },
} satisfies Record<string, SiteAsset>;

export type AssetId = keyof typeof SITE_ASSETS;
