import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { pageMetadata } from '@/config/seo';
import { clients as t } from '@/config/site/uk/clients';
import { common } from '@/config/site/uk/common';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ContactSection } from '@/components/site/ContactSection';
import { PageJsonLd } from '@/components/site/PageJsonLd';
import { Breadcrumbs, FaqList, ScreenFrame, SectionHead, href } from '@/components/site/blocks';

const route = ROUTES.clients;

export const metadata: Metadata = pageMetadata({
  path: route.path,
  locale: 'uk',
  title: t.meta.title,
  description: t.meta.description,
  ogImageTagline: t.hero.h1,
});

export const dynamic = 'force-static';

// "Можливості" has no page of its own, so it is shown as plain text and left
// out of the structured breadcrumb trail.
const crumbs = [
  { label: ROUTES.home.label, path: ROUTES.home.path },
  { label: t.hero.breadcrumb, path: route.path },
];

export default function ClientsPage() {
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
                  <a href="#contact" className="btn btn-primary btn-lg" data-cta="clients-hero">
                    {t.hero.primary}<ArrowUpRight size={18} strokeWidth={2.2} aria-hidden />
                  </a>
                  <a href={`${ROUTES.demo.path}#client`} className="btn btn-secondary btn-lg" data-cta="clients-demo">
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
                <article key={s.num} className={`sx-feature${i % 2 ? ' is-flipped' : ''}`}>
                  <div className="sx-feature-copy">
                    <span className="sx-feature-num">{s.num} / 03</span>
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
              <a href={`${ROUTES.demo.path}#client`} className="btn btn-secondary btn-md" data-cta="clients-proof-demo">
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
