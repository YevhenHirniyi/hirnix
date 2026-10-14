import { clients } from '@/config/site/uk/clients';
import { FeaturePage, featureMetadata } from '@/components/site/FeaturePage';

export const metadata = featureMetadata('clients', clients);
export const dynamic = 'force-static';

export default function ClientsPage() {
  return <FeaturePage route="clients" t={clients} />;
}
