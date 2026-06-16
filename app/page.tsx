import type { Metadata } from 'next';
import { getSiteContent } from '@/lib/content'
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

export const metadata: Metadata = {
  title: 'hirnix — Сайти та Google Business для українців у Чехії',
  description: 'hirnix допомагає українським підприємцям у Чехії виглядати професійно онлайн. Сайти, Google Business Profile, локальне SEO. Перша консультація безкоштовна.',
  alternates: {
    canonical: 'https://hirnix.studio',
    languages: {
      'uk': 'https://hirnix.studio',
      'cs': 'https://hirnix.studio/cz',
      'x-default': 'https://hirnix.studio',
    },
  },
  openGraph: {
    title: 'hirnix — Сайти та Google Business для українців у Чехії',
    description: 'Допомагаємо українським підприємцям у Чехії бути видимими онлайн: сайти, Google Business Profile, локальне SEO.',
    url: 'https://hirnix.studio',
    locale: 'uk_UA',
    alternateLocale: ['cs_CZ'],
  },
  twitter: {
    title: 'hirnix — Сайти та Google Business для українців у Чехії',
    description: 'Допомагаємо українським підприємцям у Чехії бути видимими онлайн.',
  },
};

export const dynamic = 'force-dynamic'

export default async function Home() {
  const t = await getSiteContent('uk')
  return (
    <>
      <JsonLd lang="uk" faqItems={t.faq.items} />
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
