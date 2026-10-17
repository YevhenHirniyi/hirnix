import { ConditionsPage, conditionsMetadata } from '@/components/site/pages/ConditionsPage';

export const metadata = conditionsMetadata('uk');
export const dynamic = 'force-static';

export default function Page() {
  return <ConditionsPage locale="uk" />;
}
