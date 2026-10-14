import { scheduling } from '@/config/site/uk/scheduling';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('scheduling', scheduling);
export const dynamic = 'force-static';

export default function SchedulingPage() {
  return <FeaturePage route="scheduling" t={scheduling} />;
}
