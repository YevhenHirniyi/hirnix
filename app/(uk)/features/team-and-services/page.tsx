import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('team', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <FeaturePage route="team" locale="uk" />;
}
