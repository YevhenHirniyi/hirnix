import type { Metadata } from 'next';
import { PhoneCall, NotebookPen, CalendarClock, UserX } from 'lucide-react';
import saasEn from '@/config/i18n/saas-en';
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
import { LangSetter } from '@/components/LangSetter';

export const metadata: Metadata = {
  title: 'hirnix — Booking CRM for Service Businesses',
  description: '24/7 online booking and an admin dashboard for service businesses. Fast booking for clients. Simple management for the business.',
  alternates: {
    canonical: 'https://hirnix.studio/en',
    languages: {
      'en': 'https://hirnix.studio/en',
      'uk': 'https://hirnix.studio',
      'x-default': 'https://hirnix.studio',
    },
  },
  openGraph: {
    title: 'hirnix — Booking CRM for Service Businesses',
    description: '24/7 online booking and an admin dashboard for service businesses.',
    url: 'https://hirnix.studio/en',
    locale: 'en_US',
    alternateLocale: ['uk_UA'],
  },
  twitter: {
    title: 'hirnix — Booking CRM for Service Businesses',
    description: '24/7 online booking and an admin dashboard for service businesses.',
  },
};

export const dynamic = 'force-static';

const painIcons = [PhoneCall, NotebookPen, CalendarClock, UserX];

export default function ENHome() {
  const t = saasEn;
  return (
    <>
      <LangSetter lang="en" />
      <JsonLd lang="en" faqItems={[]} variant="saas" />
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
      <FinalCTA t={t.finalCta} rightSlot={<DemoLeadForm t={t.demoForm} source="saas-en" />} />

      <Footer t={t.footer} waHref="https://wa.me/380995542545" />
    </>
  );
}
