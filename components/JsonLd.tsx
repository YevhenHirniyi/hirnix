interface FAQItem { q: string; a: string }

interface JsonLdProps {
  lang: 'uk' | 'cz';
  faqItems: FAQItem[];
}

const SITE_URL = 'https://hirnix.studio';

// TODO: замінити на реальні дані після реєстрації бізнесу
const BUSINESS = {
  name: 'hirnix studio',
  email: 'info@hirnix.studio',
  telephone: '+420607477611',
  url: SITE_URL,
  // TODO: додати точну адресу (вулиця, номер будинку) після реєстрації
  addressLocality: 'Praha',
  addressCountry: 'CZ',
  // TODO: координати — отримати з Google Maps після додавання у GBP
  latitude: null as number | null,
  longitude: null as number | null,
  // TODO: вставити реальний URL профілю Google Business після публікації
  googleBusinessUrl: null as string | null,
};

export function JsonLd({ lang, faqItems }: JsonLdProps) {
  const pageUrl = lang === 'cz' ? `${SITE_URL}/cz` : SITE_URL;

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    description:
      lang === 'cz'
        ? 'Weby, Google Business Profile a lokální SEO pro ukrajinské podnikatele v Česku.'
        : 'Сайти, Google Business Profile та локальне SEO для українських підприємців у Чехії.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: [
      { '@type': 'City', name: 'Praha' },
      { '@type': 'Country', name: 'Česká republika' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://t.me/hirnix_studio',
      'https://www.instagram.com/hirnix_studio',
      'https://www.facebook.com/hirnix',
    ],
  };

  const faqSchema = faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name:
      lang === 'cz'
        ? 'hirnix — Weby a Google Business pro Ukrajince v Česku'
        : 'hirnix — Сайти та Google Business для українців у Чехії',
    isPartOf: { '@id': `${SITE_URL}/#organization` },
    inLanguage: lang === 'cz' ? 'cs' : 'uk',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
