import type { Metadata } from 'next';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return featureMetadata('team', toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <FeaturePage route="team" locale={toLocale((await params).lang)} />;
}
