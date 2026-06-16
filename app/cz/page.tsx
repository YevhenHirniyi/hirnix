import type { Metadata } from 'next';
import { getSiteContent } from '@/lib/content';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero, Marquee } from '@/components/Hero';
import { ForWhom } from '@/components/ForWhom';
import { Pain } from '@/components/Pain';
import { Manifesto } from '@/components/Manifesto';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Process } from '@/components/Process';
import { Examples } from '@/components/Examples';
import { Calc } from '@/components/Calc';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { JsonLd } from '@/components/JsonLd';
import { LangSetter } from '@/components/LangSetter';

export const metadata: Metadata = {
  title: 'hirnix — Weby a Google Business pro Ukrajince v Česku',
  description: 'hirnix pomáhá ukrajinským podnikatelům v Česku vypadat profesionálně online. Weby, Google Business Profile, lokální SEO. První konzultace zdarma.',
  alternates: {
    canonical: 'https://hirnix.studio/cz',
    languages: {
      'cs': 'https://hirnix.studio/cz',
      'uk': 'https://hirnix.studio',
      'x-default': 'https://hirnix.studio',
    },
  },
  openGraph: {
    title: 'hirnix — Weby a Google Business pro Ukrajince v Česku',
    description: 'Pomáháme ukrajinským podnikatelům v Česku být viditelní online: weby, Google Business Profile, lokální SEO.',
    url: 'https://hirnix.studio/cz',
    locale: 'cs_CZ',
    alternateLocale: ['uk_UA'],
  },
  twitter: {
    title: 'hirnix — Weby a Google Business pro Ukrajince v Česku',
    description: 'Pomáháme ukrajinským podnikatelům v Česku být viditelní online.',
  },
};

export const dynamic = 'force-dynamic'

export default async function CZHome() {
  const t = await getSiteContent('cz');
  return (
    <>
      <LangSetter lang="cs" />
      <JsonLd lang="cz" faqItems={t.faq.items} />
      <Header t={t.header} />

      <Marquee items={t.marqueeTop} />

      <Hero t={t.hero} />

      <Marquee dark separator="plus" items={t.marqueeDark} />

      <ForWhom t={t.forWhom} />
      <Pain t={t.pain} />
      <Manifesto t={t.manifesto} />
      <Services t={t.services} />
      <Stats t={t.stats} />
      <Process t={t.process} />
      <Examples t={t.examples} />
      <Calc t={t.calc} />
      <FAQ t={t.faq} />
      <FinalCTA t={t.finalCta} />

      <Footer t={t.footer} />
    </>
  );
}
