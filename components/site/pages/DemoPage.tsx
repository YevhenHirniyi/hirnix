import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { localizedMetadata } from '@/config/seo';
import { getCopy } from '@/config/site/copy';
import { localePath, type Locale } from '@/config/site/i18n';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ContactSection } from '@/components/site/ContactSection';
import { PageJsonLd } from '@/components/site/PageJsonLd';
import { Breadcrumbs, ScreenFrame, createAssetPicker, href } from '@/components/site/blocks';

export function demoMetadata(locale: Locale): Metadata {
  const t = getCopy(locale).demo;
  return localizedMetadata({
    locale,
    path: ROUTES.demo.path,
    title: t.meta.title,
    description: t.meta.description,
    ogImageTagline: t.hero.h1,
  });
}

export function DemoPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.demo;
  const route = ROUTES.demo;
  const home = { label: copy.common.routes.home.label, path: localePath(locale, '/') };
  const link = (path: string) => localePath(locale, path);
  // Each screenshot at most once per page.
  const pick = createAssetPicker();
  const chapterAssets = t.chapters.map((c) => c.assets.map((a) => pick(a)).filter((a) => a !== undefined));

  return (
    <>
      <PageJsonLd locale={locale} breadcrumbs={[
        home,
        { label: t.hero.breadcrumb, path: link(route.path) },
      ]} />
      <SiteHeader locale={locale} path={route.path} />

      <main id="main">
        <section className="sx-hero sx-hero--inner" aria-labelledby="hero-title">
          <div className="container">
            <Breadcrumbs label={copy.common.ui.breadcrumbs} items={[{ label: home.label, href: home.path }, { label: t.hero.breadcrumb }]} />
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
                  <a href={href(c.route, locale)} className="sx-textlink">
                    {c.link}<ArrowRight size={14} aria-hidden />
                  </a>
                </div>
                <div className={`dm-shots${chapterAssets[i].length > 1 ? ' is-pair' : ''}`}>
                  {chapterAssets[i].map((a) => <ScreenFrame locale={locale} key={a} asset={a} />)}
                </div>
              </div>
            </div>
          </section>
        ))}

        <ContactSection
          locale={locale}
          page={route.id}
          intent="connect"
          eyebrow={t.cta.eyebrow}
          title={t.cta.h2}
          lead={t.cta.lead}
          submitLabel={t.cta.submit}
        />
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
