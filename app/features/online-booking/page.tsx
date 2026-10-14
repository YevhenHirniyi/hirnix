import { booking } from '@/config/site/uk/booking';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('booking', booking);
export const dynamic = 'force-static';

export default function BookingPage() {
  return <FeaturePage route="booking" t={booking} />;
}
