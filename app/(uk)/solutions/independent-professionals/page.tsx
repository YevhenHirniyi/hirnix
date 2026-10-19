import { SegmentPage, segmentMetadata } from '@/components/site/SegmentPage';

export const metadata = segmentMetadata('independent', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <SegmentPage route="independent" locale="uk" />;
}
