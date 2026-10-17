import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('scheduling', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <FeaturePage route="scheduling" locale="uk" />;
}
