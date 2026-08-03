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
  title: 'hirnix studio — Websites & Google Business for Local Service Businesses',
  description: 'hirnix helps local service businesses look professional online, get found on Google, and generate more inquiries. Website, Google Business Profile, local SEO. First consultation is free.',
  alternates: {
    canonical: 'https://hirnix.studio/websites/en',
    languages: {
      'en': 'https://hirnix.studio/websites/en',
      'uk': 'https://hirnix.studio/websites',
      'cs': 'https://hirnix.studio/websites/cz',
      'x-default': 'https://hirnix.studio/websites',
    },
  },
  openGraph: {
    title: 'hirnix studio — Websites & Google Business for Local Service Businesses',
    description: 'We help local service businesses get found online: website, Google Business Profile, and local SEO. Remote-friendly, worldwide.',
    url: 'https://hirnix.studio/websites/en',
    locale: 'en_US',
    alternateLocale: ['uk_UA', 'cs_CZ'],
  },
  twitter: {
    title: 'hirnix studio — Websites & Google Business for Local Service Businesses',
    description: 'We help local service businesses get found online: website, Google Business Profile, and local SEO.',
  },
};

export const dynamic = 'force-dynamic';

export default async function WebsitesENHome() {
  const t = await getSiteContent('en');
  return (
    <>
      <LangSetter lang="en" />
      <JsonLd lang="en" faqItems={t.faq.items} variant="studio" basePath="/websites" />
      <Header t={t.header} basePath="/websites" />

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

      <Footer t={t.footer} basePath="/websites" />
    </>
  );
}
