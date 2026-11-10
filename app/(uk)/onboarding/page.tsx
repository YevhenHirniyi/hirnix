import type { Metadata } from 'next';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { pageMetadata } from '@/config/seo';

// Unlisted page: shared by direct link with new clients only. Not linked from
// the site, not in the sitemap, noindex (meta + X-Robots-Tag in next.config).
export const metadata: Metadata = pageMetadata({
  path: '/onboarding',
  locale: 'uk',
  title: 'Онбординг',
  description: 'Відео-інструкція для клієнтів hirnix.',
  noIndex: true,
});

export default function OnboardingPage() {
  return (
    <>
      <SiteHeader locale="uk" ctaHref={ROUTES.contact.path} />
      <main id="main" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1040 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Онбординг
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>
            Коротке відео про те, як усе працює. Якщо залишаться питання — напишіть нам.
          </p>
          <video
            src="/video/onboarding.mp4"
            controls
            playsInline
            preload="metadata"
            style={{ width: '100%', height: 'auto', borderRadius: 16, background: '#000', display: 'block' }}
          />
        </div>
      </main>
      <SiteFooter locale="uk" />
    </>
  );
}
