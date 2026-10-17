import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('reports', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <FeaturePage route="reports" locale="uk" />;
}
