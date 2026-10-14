import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { pageMetadata } from '@/config/seo';
import { demo as t } from '@/config/site/uk/demo';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ContactSection } from '@/components/site/ContactSection';
import { PageJsonLd } from '@/components/site/PageJsonLd';
import { Breadcrumbs, ScreenFrame, href } from '@/components/site/blocks';

const route = ROUTES.demo;

export const metadata: Metadata = pageMetadata({
  path: route.path,
  locale: 'uk',
  title: t.meta.title,
  description: t.meta.description,
  ogImageTagline: t.hero.h1,
});

export const dynamic = 'force-static';

export default function DemoPage() {
  return (
    <>
      <PageJsonLd breadcrumbs={[
        { label: ROUTES.home.label, path: ROUTES.home.path },
        { label: t.hero.breadcrumb, path: route.path },
      ]} />
      <SiteHeader />

      <main id="main">
        <section className="sx-hero sx-hero--inner" aria-labelledby="hero-title">
          <div className="container">
            <Breadcrumbs items={[{ label: ROUTES.home.label, href: ROUTES.home.path }, { label: t.hero.breadcrumb }]} />
            <div className="sx-inner-head">
              <h1 id="hero-title" className="sx-h1">{t.hero.h1}</h1>
              <div>
                <p className="sx-hero-lead">{t.hero.lead}</p>
                <p className="sx-note">{t.hero.note}</p>
              </div>
            </div>

            <nav className="dm-toc" aria-label={t.hero.tocLabel}>
              <ol>
                {t.chapters.map((c, i) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`}>
                      <span className="dm-toc-num">{String(i + 1).padStart(2, '0')}</span>
                      {c.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {t.chapters.map((c, i) => (
          <section key={c.id} id={c.id} className={`sx dm-chapter${i % 2 === 0 ? ' sx-soft' : ''}`} aria-labelledby={`${c.id}-title`}>
            <div className="container">
              <div className="dm-chapter-head">
                <span className="sx-feature-num">{String(i + 1).padStart(2, '0')} / {String(t.chapters.length).padStart(2, '0')}</span>
                <h2 id={`${c.id}-title`} className="sx-title">{c.title}</h2>
                <p className="sx-lead">{c.lead}</p>
              </div>
              <div className="dm-chapter-body">
                <div className="dm-steps">
                  <p className="dm-steps-label">{t.stepLabel}</p>
                  <ol>
                    {c.steps.map((s) => <li key={s}>{s}</li>)}
                  </ol>
                  <a href={href(c.route)} className="sx-textlink">
                    {c.link}<ArrowRight size={14} aria-hidden />
                  </a>
                </div>
                <div className={`dm-shots${c.assets.length > 1 ? ' is-pair' : ''}`}>
                  {c.assets.map((a) => <ScreenFrame key={a} asset={a} ratio={c.assets.length > 1 ? '4 / 3' : '16 / 10'} />)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <ContactSection
          page={route.id}
          intent="connect"
          eyebrow={t.cta.eyebrow}
          title={t.cta.h2}
          lead={t.cta.lead}
          submitLabel={t.cta.submit}
        />
      </main>

      <SiteFooter />
    </>
  );
}
