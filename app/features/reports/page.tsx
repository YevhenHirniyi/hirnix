import { reports } from '@/config/site/uk/reports';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('reports', reports);
export const dynamic = 'force-static';

export default function ReportsPage() {
  return <FeaturePage route="reports" t={reports} />;
}
