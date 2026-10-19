import { HomePage, homeMetadata } from '@/components/site/pages/HomePage';

export const metadata = homeMetadata('uk');
export const dynamic = 'force-static';

export default function Page() {
  return <HomePage locale="uk" />;
}
