import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('clients', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <FeaturePage route="clients" locale="uk" />;
}
