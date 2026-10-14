import { studios } from '@/config/site/uk/studios';
import { SegmentPage, segmentMetadata } from '@/components/site/SegmentPage';

export const metadata = segmentMetadata('studios', studios);
export const dynamic = 'force-static';

export default function StudiosPage() {
  return <SegmentPage route="studios" t={studios} />;
}
