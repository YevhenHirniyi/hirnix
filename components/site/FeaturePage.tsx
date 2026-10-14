import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { pageMetadata } from '@/config/seo';
import { common } from '@/config/site/uk/common';
import { ROUTES, type RouteKey } from '@/config/site/routes';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ContactSection } from './ContactSection';
import { PageJsonLd } from './PageJsonLd';
import { Breadcrumbs, FaqList, ScreenFrame, SectionHead, href } from './blocks';

/**
 * Copy for one feature page (P02–P06). Every feature page shares this
 * template — H1 → benefit → large screen → working scenarios → links to other
 * modules → proof → FAQ → demo & contact — so pages differ only in content.
 */
export interface FeatureCopy {
  meta: { title: string; description: string };
  /** Section of the demo page this feature links to, e.g. 'client'. */
  demoAnchor: string;
  hero: { breadcrumb: string; h1: string; lead: string; primary: string; secondary: string; asset: string };
  why: { eyebrow: string; h2: string; body: string };
  scenarios: {
    eyebrow: string;
    h2: string;
    items: { title: string; body: string; points: string[]; asset: string }[];
  };
  connections: { eyebrow: string; h2: string; items: { route: string; title: string; body: string; link: string }[] };
  proof: { eyebrow: string; h2: string; body: string; asset: string; demoLink: string };
  faq: { eyebrow: string; h2: string; items: { q: string; a: string }[] };
  cta: { h2: string; lead: string; submit: string };
}

export function featureMetadata(route: RouteKey, t: FeatureCopy): Metadata {
  return pageMetadata({
    path: ROUTES[route].path,
    locale: 'uk',
    title: t.meta.title,
    description: t.meta.description,
    ogImageTagline: t.hero.h1,
  });
}

export function FeaturePage({ route: key, t }: { route: RouteKey; t: FeatureCopy }) {
  const route = ROUTES[key];
  const demoHref = `${ROUTES.demo.path}#${t.demoAnchor}`;
  const total = String(t.scenarios.items.length).padStart(2, '0');
  // "Можливості" has no page of its own, so it is shown as plain text and left
  // out of the structured breadcrumb trail.
  const crumbs = [
    { label: ROUTES.home.label, path: ROUTES.home.path },
    { label: t.hero.breadcrumb, path: route.path },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faq={t.faq.items} />
      <SiteHeader />

      <main id="main">
        <section className="sx-hero sx-hero--inner" aria-labelledby="hero-title">
          <div className="container">
            <Breadcrumbs items={[{ label: ROUTES.home.label, href: ROUTES.home.path }, { label: common.header.featuresLabel }, { label: t.hero.breadcrumb }]} />
            <div className="sx-inner-head">
              <h1 id="hero-title" className="sx-h1">{t.hero.h1}</h1>
              <div>
                <p className="sx-hero-lead">{t.hero.lead}</p>
                <div className="sx-actions">
                  <a href="#contact" className="btn btn-primary btn-lg" data-cta={`${key}-hero`}>
                    {t.hero.primary}<ArrowUpRight size={18} strokeWidth={2.2} aria-hidden />
                  </a>
                  <a href={demoHref} className="btn btn-secondary btn-lg" data-cta={`${key}-demo`}>
                    {t.hero.secondary}
                  </a>
                </div>
              </div>
            </div>
            <div className="sx-inner-visual">
              <ScreenFrame asset={t.hero.asset} ratio="16 / 8" />
            </div>
          </div>
        </section>

        <section className="sx" aria-labelledby="why-title">
          <div className="container sx-split sx-split--text">
            <SectionHead id="why-title" eyebrow={t.why.eyebrow} title={t.why.h2} />
            <p className="sx-body-lg">{t.why.body}</p>
          </div>
        </section>

        <section className="sx sx-soft" aria-labelledby="scenarios-title">
          <div className="container">
            <SectionHead id="scenarios-title" eyebrow={t.scenarios.eyebrow} title={t.scenarios.h2} />
            <div className="sx-features">
              {t.scenarios.items.map((s, i) => (
                <article key={s.title} className={`sx-feature${i % 2 ? ' is-flipped' : ''}`}>
                  <div className="sx-feature-copy">
                    <span className="sx-feature-num">{String(i + 1).padStart(2, '0')} / {total}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                    <ul className="sx-checks">
                      {s.points.map((p) => <li key={p}><Check size={15} strokeWidth={2.6} aria-hidden />{p}</li>)}
                    </ul>
                  </div>
                  <ScreenFrame asset={s.asset} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sx" aria-labelledby="links-title">
          <div className="container">
            <SectionHead id="links-title" eyebrow={t.connections.eyebrow} title={t.connections.h2} />
            <div className="sx-links">
              {t.connections.items.map((c) => (
                <a key={c.route} href={href(c.route)} className="sx-linkcard">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <span className="sx-textlink">{c.link}<ArrowRight size={14} aria-hidden /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sx sx-soft" aria-labelledby="proof-title">
          <div className="container sx-split">
            <div>
              <SectionHead id="proof-title" eyebrow={t.proof.eyebrow} title={t.proof.h2} lead={t.proof.body} />
              <a href={demoHref} className="btn btn-secondary btn-md" data-cta={`${key}-proof-demo`}>
                {t.proof.demoLink}<ArrowRight size={16} aria-hidden />
              </a>
            </div>
            <ScreenFrame asset={t.proof.asset} ratio="4 / 3" />
          </div>
        </section>

        <section className="sx" id="faq" aria-labelledby="faq-title">
          <div className="container sx-narrow">
            <SectionHead id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.h2} />
            <FaqList items={t.faq.items} />
          </div>
        </section>

        <ContactSection
          page={route.id}
          intent="connect"
          eyebrow="Звернення"
          title={t.cta.h2}
          lead={t.cta.lead}
          submitLabel={t.cta.submit}
        />
      </main>

      <SiteFooter />
    </>
  );
}
