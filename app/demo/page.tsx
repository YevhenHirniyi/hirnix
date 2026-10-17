import { DemoPage, demoMetadata } from '@/components/site/pages/DemoPage';

export const metadata = demoMetadata('uk');
export const dynamic = 'force-static';

export default function Page() {
  return <DemoPage locale="uk" />;
}
