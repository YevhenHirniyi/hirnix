import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { localizedMetadata } from '@/config/seo';
import { getCopy } from '@/config/site/copy';
import { localePath, type Locale } from '@/config/site/i18n';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ContactSection } from './ContactSection';
import { PageJsonLd } from './PageJsonLd';
import type { AssetId } from '@/config/site/assets';
import { Breadcrumbs, FaqList, ScreenFrame, SectionHead, createAssetPicker, href } from './blocks';

/**
 * Copy for a segment page (P07–P08): one way of working told as a story,
 * each step linking to the feature page that covers it.
 */
export interface SegmentCopy {
  meta: { title: string; description: string };
  hero: { breadcrumb: string; h1: string; lead: string; primary: string; secondary: string; asset: AssetId };
  story: { eyebrow: string; h2: string; body: string };
  blocks: {
    eyebrow: string;
    h2: string;
    items: { title: string; body: string; asset?: AssetId; route: string; link: string }[];
  };
  launch: { eyebrow: string; h2: string; steps: { title: string; body: string }[] };
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[] };
  cta: { h2: string; lead: string; submit: string };
}

export type SegmentKey = 'independent' | 'studios';

export function segmentMetadata(route: SegmentKey, locale: Locale): Metadata {
  const t: SegmentCopy = getCopy(locale)[route];
  return localizedMetadata({
    path: ROUTES[route].path,
    locale,
    title: t.meta.title,
    description: t.meta.description,
    ogImageTagline: t.hero.h1,
  });
}

export function SegmentPage({ route: key, locale }: { route: SegmentKey; locale: Locale }) {
  const route = ROUTES[key];
  const copy = getCopy(locale);
  const t: SegmentCopy = copy[key];
  const ui = copy.common.ui;
  const home = { label: copy.common.routes.home.label, path: localePath(locale, '/') };
  const pagePath = localePath(locale, route.path);
  const total = String(t.blocks.items.length).padStart(2, '0');
  // Each screenshot at most once per page, in reading order.
  const pick = createAssetPicker();
  const heroAsset = pick(t.hero.asset);
  const blockAssets = t.blocks.items.map((b) => pick(b.asset));

  return (
    <>
      <PageJsonLd
        locale={locale}
        breadcrumbs={[
          home,
          { label: t.hero.breadcrumb, path: pagePath },
        ]}
        faq={t.faq.items}
      />
      <SiteHeader locale={locale} path={route.path} />

      <main id="main">
        <section className="sx-hero sx-hero--inner" aria-labelledby="hero-title">
          <div className="container">
            <Breadcrumbs label={ui.breadcrumbs} items={[{ label: home.label, href: home.path }, { label: copy.common.header.segmentsLabel }, { label: t.hero.breadcrumb }]} />
            <div className="sx-inner-head">
              <h1 id="hero-title" className="sx-h1">{t.hero.h1}</h1>
              <div>
                <p className="sx-hero-lead">{t.hero.lead}</p>
                <div className="sx-actions">
                  <a href="#contact" className="btn btn-primary btn-lg" data-cta={`${key}-hero`}>
                    {t.hero.primary}<ArrowUpRight size={18} strokeWidth={2.2} aria-hidden />
                  </a>
                  <a href={localePath(locale, ROUTES.demo.path)} className="btn btn-secondary btn-lg" data-cta={`${key}-demo`}>
                    {t.hero.secondary}
                  </a>
                </div>
              </div>
            </div>
            <div className="sx-inner-visual">
              <ScreenFrame locale={locale} asset={heroAsset} priority sizes="(min-width: 1320px) 1200px, 100vw" />
            </div>
          </div>
        </section>

        <section className="sx" aria-labelledby="story-title">
          <div className="container sx-split sx-split--text">
            <SectionHead id="story-title" eyebrow={t.story.eyebrow} title={t.story.h2} />
            <p className="sx-body-lg">{t.story.body}</p>
          </div>
        </section>

        <section className="sx sx-soft" aria-labelledby="blocks-title">
          <div className="container">
            <SectionHead id="blocks-title" eyebrow={t.blocks.eyebrow} title={t.blocks.h2} />
            <div className="sx-features">
              {t.blocks.items.map((b, i) => (
                <article key={b.title} className={`sx-feature${i % 2 ? ' is-flipped' : ''}${blockAssets[i] ? '' : ' is-textonly'}`}>
                  <div className="sx-feature-copy">
                    <span className="sx-feature-num">{String(i + 1).padStart(2, '0')} / {total}</span>
                    <h3>{b.title}</h3>
                    <p>{b.body}</p>
                    <a href={href(b.route, locale)} className="sx-textlink">
                      {b.link}<ArrowRight size={14} aria-hidden />
                    </a>
                  </div>
                  <ScreenFrame locale={locale} asset={blockAssets[i]} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sx" aria-labelledby="launch-title">
          <div className="container">
            <SectionHead id="launch-title" eyebrow={t.launch.eyebrow} title={t.launch.h2} />
            <ol className="sx-steps">
              {t.launch.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="sx-steps-num" aria-hidden>{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sx sx-soft" id="faq" aria-labelledby="faq-title">
          <div className="container sx-narrow">
            <SectionHead id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.h2} />
            <FaqList items={t.faq.items} />
          </div>
        </section>

        <ContactSection
          locale={locale}
          page={route.id}
          intent="connect"
          eyebrow={ui.contactEyebrow}
          title={t.cta.h2}
          lead={t.cta.lead}
          submitLabel={t.cta.submit}
        />
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
