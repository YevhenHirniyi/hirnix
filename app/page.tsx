import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { pageMetadata } from '@/config/seo';
import { home as t } from '@/config/site/uk/home';
import { common } from '@/config/site/uk/common';
import { ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ContactSection } from '@/components/site/ContactSection';
import { PageJsonLd } from '@/components/site/PageJsonLd';
import type { AssetId } from '@/config/site/assets';
import { FaqList, ScreenFrame, SectionHead, createAssetPicker, href } from '@/components/site/blocks';

export const metadata: Metadata = pageMetadata({
  path: '',
  locale: 'uk',
  title: t.meta.title,
  description: t.meta.description,
  variants: [{ locale: 'en', path: '/en' }],
  ogImageTagline: 'CRM для майстрів і б’юті-студій',
});

export const dynamic = 'force-static';

export default function Home() {
  // Each screenshot at most once per page, in reading order.
  const pick = createAssetPicker();
  const hero = { main: pick('calendarDay'), card: pick('clientCard'), booking: pick('bookingSummary') };
  const featureAssets = t.features.items.map((f) => pick(f.asset as AssetId));
  const exampleAsset = pick('dashboard');

  return (
    <>
      <PageJsonLd site faq={t.faq.items} />
      <SiteHeader enHref="/en" />

      <main id="main">
        {/* Hero */}
        <section className="sx-hero" aria-labelledby="hero-title">
          <div className="container sx-hero-grid">
            <div className="sx-hero-copy">
              <span className="eyebrow"><span className="dot" />{t.hero.eyebrow}</span>
              <h1 id="hero-title" className="sx-h1">{t.hero.h1}</h1>
              <p className="sx-hero-lead">{t.hero.lead}</p>
              <div className="sx-actions">
                <a href="#contact" className="btn btn-primary btn-lg" data-cta="hero-primary">
                  {t.hero.primary}
                  <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden />
                </a>
                <a href={ROUTES.demo.path} className="btn btn-secondary btn-lg" data-cta="hero-demo">
                  {t.hero.secondary}
                </a>
              </div>
              <ul className="sx-trust">
                {t.hero.trust.map((x) => <li key={x}><Check size={14} strokeWidth={2.6} aria-hidden />{x}</li>)}
              </ul>
            </div>
            <div className="sx-hero-visual">
              <ScreenFrame asset={hero.main} priority sizes="(min-width: 1080px) 640px, 100vw" />
              <div className="sx-hero-float sx-hero-float--card"><ScreenFrame asset={hero.card} size="sm" sizes="280px" /></div>
              <div className="sx-hero-float sx-hero-float--booking"><ScreenFrame asset={hero.booking} size="sm" /></div>
              <p className="sx-hero-note">{common.assets.demoNote}</p>
            </div>
          </div>
        </section>

        {/* One working day */}
        <section className="sx sx-soft" aria-labelledby="workday-title">
          <div className="container">
            <SectionHead id="workday-title" eyebrow={t.workday.eyebrow} title={t.workday.h2} lead={t.workday.lead} />
            <ol className="sx-day">
              {t.workday.steps.map((s, i) => (
                <li key={s.title} className="sx-day-step">
                  <span className="sx-day-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                  <span className="sx-day-time">{s.time}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <a href={href(s.link.route)} className="sx-textlink">
                    {s.link.label}<ArrowRight size={14} aria-hidden />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Three tasks */}
        <section className="sx" aria-labelledby="tasks-title">
          <div className="container">
            <SectionHead id="tasks-title" eyebrow={t.tasks.eyebrow} title={t.tasks.h2} />
            <div className="sx-tasks">
              {t.tasks.items.map((it, i) => (
                <div key={it.title} className="sx-task">
                  <span className="sx-task-num" aria-hidden>{i + 1}</span>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Five capabilities — #services / #demo keep old single-page anchors working */}
        <section className="sx sx-soft" id="services" aria-labelledby="features-title">
          <span id="demo" className="sx-anchor" aria-hidden />
          <div className="container">
            <SectionHead id="features-title" eyebrow={t.features.eyebrow} title={t.features.h2} lead={t.features.lead} />
            <div className="sx-features">
              {t.features.items.map((f, i) => (
                <article key={f.route} className={`sx-feature${i % 2 ? ' is-flipped' : ''}${featureAssets[i] ? '' : ' is-textonly'}`}>
                  <div className="sx-feature-copy">
                    <span className="sx-feature-num">{String(i + 1).padStart(2, '0')} / 05</span>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                    <a href={href(f.route)} className="sx-textlink">
                      {f.link}<ArrowRight size={14} aria-hidden />
                    </a>
                  </div>
                  <ScreenFrame asset={featureAssets[i]} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Solo or team */}
        <section className="sx" aria-labelledby="segments-title">
          <div className="container">
            <SectionHead id="segments-title" eyebrow={t.segments.eyebrow} title={t.segments.h2} />
            <div className="sx-segments">
              {t.segments.items.map((s) => (
                <article key={s.route} className="sx-segment">
                  <span className="sx-tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul className="sx-checks">
                    {s.points.map((p) => <li key={p}><Check size={15} strokeWidth={2.6} aria-hidden />{p}</li>)}
                  </ul>
                  <a href={href(s.route)} className="sx-textlink">
                    {s.link}<ArrowRight size={14} aria-hidden />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Training example (no fake testimonials) */}
        <section className="sx sx-soft" aria-labelledby="example-title">
          <div className="container sx-split">
            <div>
              <SectionHead id="example-title" eyebrow={t.example.eyebrow} title={t.example.h2} lead={t.example.lead} />
              <dl className="sx-facts">
                {t.example.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <a href={ROUTES.demo.path} className="btn btn-secondary btn-md" data-cta="example-demo">
                {t.example.link}<ArrowRight size={16} aria-hidden />
              </a>
            </div>
            <ScreenFrame asset={exampleAsset} />
          </div>
        </section>

        {/* Onboarding + terms */}
        <section className="sx" aria-labelledby="onboarding-title">
          <div className="container">
            <SectionHead id="onboarding-title" eyebrow={t.onboarding.eyebrow} title={t.onboarding.h2} />
            <ol className="sx-steps">
              {t.onboarding.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="sx-steps-num" aria-hidden>{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="sx-terms">
              <div>
                <span className="eyebrow"><span className="dot" />{t.terms.eyebrow}</span>
                <h2 className="sx-title sx-title--sm">{t.terms.h2}</h2>
                <p>{t.terms.body}</p>
              </div>
              <div>
                <p className="sx-terms-label">{t.terms.needLabel}</p>
                <ul className="sx-checks">
                  {t.terms.needs.map((n) => <li key={n}><Check size={15} strokeWidth={2.6} aria-hidden />{n}</li>)}
                </ul>
                <a href={ROUTES.conditions.path} className="btn btn-dark btn-md" data-cta="home-conditions">
                  {t.terms.cta}<ArrowRight size={16} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sx sx-soft" id="faq" aria-labelledby="faq-title">
          <div className="container sx-narrow">
            <SectionHead id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.h2} />
            <FaqList items={t.faq.items} />
          </div>
        </section>

        <ContactSection
          page={ROUTES.home.id}
          intent="connect"
          eyebrow={t.contact.eyebrow}
          title={t.contact.h2}
          lead={t.contact.lead}
          submitLabel={t.contact.submit}
        />
      </main>

      <SiteFooter />
    </>
  );
}
