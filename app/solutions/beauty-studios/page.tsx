import { SegmentPage, segmentMetadata } from '@/components/site/SegmentPage';

export const metadata = segmentMetadata('studios', 'uk');
export const dynamic = 'force-static';

export default function Page() {
  return <SegmentPage route="studios" locale="uk" />;
}
