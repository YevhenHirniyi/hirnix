import type { Metadata } from 'next';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

export const metadata: Metadata = {
  title: 'Сторінку не знайдено',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader locale="uk" ctaHref={ROUTES.contact.path} />
      <main id="main" className="sx">
        <div className="container sx-narrow">
          <p className="eyebrow"><span className="dot" />404</p>
          <h1 className="sx-h1" style={{ margin: '16px 0' }}>Такої сторінки немає</h1>
          <p className="sx-hero-lead">Можливо, адреса змінилася. Почніть із головної або перегляньте умови підключення.</p>
          <div className="sx-actions" style={{ marginTop: 28 }}>
            <a href={ROUTES.home.path} className="btn btn-primary btn-md">На головну</a>
            <a href={ROUTES.conditions.path} className="btn btn-secondary btn-md">Умови</a>
          </div>
        </div>
      </main>
      <SiteFooter locale="uk" />
    </>
  );
}
