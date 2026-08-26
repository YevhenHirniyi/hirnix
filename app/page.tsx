import type { Metadata } from 'next';
import { PhoneCall, NotebookPen, CalendarClock, UserX } from 'lucide-react';
import { pageMetadata } from '@/config/seo';
import saasUk from '@/config/i18n/saas-uk';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SaasHero } from '@/components/SaasHero';
import { Pain } from '@/components/Pain';
import { Solution } from '@/components/Solution';
import { Process } from '@/components/Process';
import { Demo } from '@/components/Demo';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { BeforeAfter } from '@/components/BeforeAfter';
import { DemoLeadForm } from '@/components/DemoLeadForm';
import { FinalCTA } from '@/components/FinalCTA';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  path: '',
  locale: 'uk',
  title: 'hirnix — програма для запису клієнтів салону краси',
  description:
    'hirnix — CRM для салону краси: онлайн-запис для клієнтів 24/7, електронний журнал запису, картки клієнтів і виручка в одному місці.',
  variants: [{ locale: 'en', path: '/en' }],
});

export const dynamic = 'force-static';

const painIcons = [PhoneCall, NotebookPen, CalendarClock, UserX];

export default function Home() {
  const t = saasUk;
  return (
    <>
      <JsonLd lang="uk" faqItems={[]} variant="saas" />
      <Header t={t.header} langs={['uk', 'en']} />

      <SaasHero t={t.hero} />

      <Pain t={t.pain} icons={painIcons} />
      <Solution t={t.solution} />
      <Process t={t.process} />
      <Demo t={t.demo} />
      <Services t={t.services} />
      <Stats t={t.stats} />
      <BeforeAfter t={t.beforeAfter} />
      <Process t={t.startProcess} id="start" />
      <FinalCTA t={t.finalCta} rightSlot={<DemoLeadForm t={t.demoForm} source="saas-uk" />} />

      <Footer t={t.footer} waHref="https://wa.me/380995542545" />
    </>
  );
}
