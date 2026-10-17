import type { Metadata } from 'next';
import { SegmentPage, segmentMetadata } from '@/components/site/SegmentPage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return segmentMetadata('studios', toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <SegmentPage route="studios" locale={toLocale((await params).lang)} />;
}
