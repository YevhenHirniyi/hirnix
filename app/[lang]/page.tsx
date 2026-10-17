import type { Metadata } from 'next';
import { HomePage, homeMetadata } from '@/components/site/pages/HomePage';
import { toLocale, type LangParams } from '@/app/[lang]/params';

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  return homeMetadata(toLocale((await params).lang));
}

export default async function Page({ params }: LangParams) {
  return <HomePage locale={toLocale((await params).lang)} />;
}
