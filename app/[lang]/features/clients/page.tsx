import type { Metadata } from 'next';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return featureMetadata('clients', toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <FeaturePage route="clients" locale={toLocale((await params).lang)} />;
}
