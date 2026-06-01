import type { Metadata } from 'next';
import cz from '@/config/i18n/cz';
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

export const metadata: Metadata = {
  title: 'hirnix — Weby a Google Business pro Ukrajince v Česku',
  description: 'hirnix pomáhá ukrajinským podnikatelům v Česku vypadat profesionálně online. Weby, Google Business Profile, lokální SEO. První konzultace zdarma.',
};

export default function CZHome() {
  const t = cz;
  return (
    <>
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
