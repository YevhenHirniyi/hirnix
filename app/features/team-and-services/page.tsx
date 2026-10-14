import { team } from '@/config/site/uk/team';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('team', team);
export const dynamic = 'force-static';

export default function TeamPage() {
  return <FeaturePage route="team" t={team} />;
}
