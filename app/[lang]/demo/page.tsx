import type { Metadata } from 'next';
import { DemoPage, demoMetadata } from '@/components/site/pages/DemoPage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return demoMetadata(toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <DemoPage locale={toLocale((await params).lang)} />;
}
