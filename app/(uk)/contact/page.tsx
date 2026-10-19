import { ContactPage, contactMetadata } from '@/components/site/pages/ContactPage';

export const metadata = contactMetadata('uk');
export const dynamic = 'force-static';

export default function Page() {
  return <ContactPage locale="uk" />;
}
