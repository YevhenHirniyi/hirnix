import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('booking', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <FeaturePage route="booking" locale="uk" />;
}
