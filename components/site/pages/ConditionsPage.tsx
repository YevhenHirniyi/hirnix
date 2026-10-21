import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { localizedMetadata } from '@/config/seo';
import { getCopy } from '@/config/site/copy';
import { localePath, type Locale } from '@/config/site/i18n';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ContactSection } from '@/components/site/ContactSection';
import { PageJsonLd } from '@/components/site/PageJsonLd';
import { Breadcrumbs, FaqList, SectionHead, href } from '@/components/site/blocks';

export function conditionsMetadata(locale: Locale): Metadata {
  const t = getCopy(locale).conditions;
  return localizedMetadata({
    locale,
    path: ROUTES.conditions.path,
    title: t.meta.title,
    description: t.meta.description,
    ogImageTagline: t.hero.h1,
  });
}

export function ConditionsPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.conditions;
  const route = ROUTES.conditions;
  const home = { label: copy.common.routes.home.label, path: localePath(locale, '/') };
  const link = (path: string) => localePath(locale, path);
  return (
    <>
      <PageJsonLd
        locale={locale}
        breadcrumbs={[
          home,
          { label: t.hero.breadcrumb, path: link(route.path) },
        ]}
        faq={t.faq.items}
      />
      <SiteHeader locale={locale} path={route.path} />

      <main id="main">
        <section className="sx-hero sx-hero--inner" aria-labelledby="hero-title">
          <div className="container">
            <Breadcrumbs label={copy.common.ui.breadcrumbs} items={[{ label: home.label, href: home.path }, { label: t.hero.breadcrumb }]} />
            <div className="sx-inner-head">
              <h1 id="hero-title" className="sx-h1">{t.hero.h1}</h1>
              <div>
                <p className="sx-hero-lead">{t.hero.lead}</p>
                <div className="sx-actions">
                  <a href="#contact" className="btn btn-primary btn-lg" data-cta="conditions-hero">
                    {t.hero.primary}<ArrowUpRight size={18} strokeWidth={2.2} aria-hidden />
                  </a>
                </div>
                <p className="sx-note">{t.hero.note}</p>
                <div className="sx-trial">
                  <span className="sx-trial-value">{t.trial.value}</span>
                  <span>
                    <strong>{t.trial.label}</strong>
                    {t.trial.body}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sx sx-soft" aria-labelledby="product-title">
          <div className="container">
            <SectionHead id="product-title" eyebrow={t.product.eyebrow} title={t.product.h2} lead={t.product.lead} />
            <div className="sx-modules">
              {t.product.items.map((m, i) => (
                <a key={m.route} href={href(m.route, locale)} className="sx-module">
                  <span className="sx-feature-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                  <ArrowRight size={16} aria-hidden className="sx-module-arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sx" aria-labelledby="launch-title">
          <div className="container sx-two">
            <div>
              <SectionHead id="launch-title" eyebrow={t.launch.eyebrow} title={t.launch.h2} />
              <ul className="sx-list">
                {t.launch.items.map((it) => (
                  <li key={it.title}><h3>{it.title}</h3><p>{it.body}</p></li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHead id="offer-title" eyebrow={t.offer.eyebrow} title={t.offer.h2} lead={t.offer.lead} />
              <ul className="sx-list">
                {t.offer.items.map((it) => (
                  <li key={it.title}><h3>{it.title}</h3><p>{it.body}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="sx sx-soft" aria-labelledby="process-title">
          <div className="container">
            <SectionHead id="process-title" eyebrow={t.process.eyebrow} title={t.process.h2} />
            <ol className="sx-steps">
              {t.process.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="sx-steps-num" aria-hidden>{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactSection
          locale={locale}
          page={route.id}
          intent="quote"
          eyebrow={t.form.eyebrow}
          title={t.form.h2}
          lead={t.form.lead}
          submitLabel={t.form.submit}
        />

        <section className="sx" id="faq" aria-labelledby="faq-title">
          <div className="container sx-narrow">
            <SectionHead id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.h2} />
            <FaqList items={t.faq.items} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
