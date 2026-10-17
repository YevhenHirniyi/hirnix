import type { Metadata } from 'next';
import { ContactPage, contactMetadata } from '@/components/site/pages/ContactPage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return contactMetadata(toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <ContactPage locale={toLocale((await params).lang)} />;
}
