import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { pageMetadata } from '@/config/seo';
import contacts, { MESSENGERS } from '@/config/contacts';
import { contact as t } from '@/config/site/uk/contact';
import { LOGIN_URL, ROUTES } from '@/config/site/routes';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { ContactSection } from '@/components/site/ContactSection';
import { PageJsonLd } from '@/components/site/PageJsonLd';
import { Breadcrumbs, SectionHead } from '@/components/site/blocks';

const route = ROUTES.contact;

export const metadata: Metadata = pageMetadata({
  path: route.path,
  locale: 'uk',
  title: t.meta.title,
  description: t.meta.description,
  ogImageTagline: t.hero.h1,
});

export const dynamic = 'force-static';

export default function ContactPage() {
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
              <p className="sx-hero-lead">{t.hero.lead}</p>
            </div>

            <div className="ct-channels" aria-label={t.channels.h2}>
              <div className="ct-card">
                <span className="ct-icon"><Phone size={18} aria-hidden /></span>
                <p className="ct-label">{t.channels.phoneLabel}</p>
                <a className="ct-value" href={`tel:${contacts.phoneDisplay.replace(/\s/g, '')}`}>{contacts.phoneDisplay}</a>
              </div>
              <div className="ct-card">
                <span className="ct-icon"><MessageCircle size={18} aria-hidden /></span>
                <p className="ct-label">{t.channels.messengersLabel}</p>
                <div className="ct-links">
                  {MESSENGERS.map((m) => (
                    <a key={m.id} href={m.href} target="_blank" rel="noopener noreferrer" data-channel={m.id}>{m.label}</a>
                  ))}
                </div>
                <p className="ct-note">{t.channels.messengersNote}</p>
              </div>
              <div className="ct-card">
                <span className="ct-icon"><Mail size={18} aria-hidden /></span>
                <p className="ct-label">{t.channels.emailLabel}</p>
                <a className="ct-value" href={contacts.email} data-channel="email">{contacts.emailDisplay}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="sx sx-soft" aria-labelledby="next-title">
          <div className="container">
            <SectionHead id="next-title" eyebrow={t.next.eyebrow} title={t.next.h2} />
            <ol className="sx-steps">
              {t.next.steps.map((s, i) => (
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
          page={route.id}
          intent="connect"
          eyebrow={t.form.eyebrow}
          title={t.form.h2}
          lead={t.form.lead}
          submitLabel={t.form.submit}
        />

        <section className="sx sx--login" aria-labelledby="login-title">
          <div className="container">
            <div className="ct-login">
              <div>
                <h2 id="login-title" className="sx-title sx-title--sm">{t.login.h2}</h2>
                <p>{t.login.body}</p>
              </div>
              <a href={LOGIN_URL} className="btn btn-secondary btn-md">
                {t.login.cta}<ArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
