import { independent } from '@/config/site/uk/independent';
import { SegmentPage, segmentMetadata } from '@/components/site/SegmentPage';

export const metadata = segmentMetadata('independent', independent);
export const dynamic = 'force-static';

export default function IndependentPage() {
  return <SegmentPage route="independent" t={independent} />;
}
