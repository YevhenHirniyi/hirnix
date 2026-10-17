import type { Metadata } from 'next';
import { ConditionsPage, conditionsMetadata } from '@/components/site/pages/ConditionsPage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return conditionsMetadata(toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <ConditionsPage locale={toLocale((await params).lang)} />;
}
