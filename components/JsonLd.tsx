interface FAQItem { q: string; a: string }

interface JsonLdProps {
  lang: 'uk' | 'cz' | 'en';
  faqItems: FAQItem[];
  variant?: 'saas' | 'studio';
  basePath?: string;
}

const SITE_URL = 'https://hirnix.studio';

// TODO: замінити на реальні дані після реєстрації бізнесу
const BUSINESS = {
  name: 'hirnix',
  email: 'info@hirnix.studio',
  telephoneSaas: '+380995542545',
  telephoneStudio: '+420607477611',
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

const COPY = {
  saas: {
    name: {
      uk: 'hirnix — CRM для сфери послуг',
      en: 'hirnix — Booking CRM for Service Businesses',
      cz: 'hirnix — CRM pro sféru služeb',
    },
    description: {
      uk: 'Онлайн-запис 24/7 і панель адміністрування для перукарень і салонів краси.',
      en: '24/7 online booking and an admin dashboard for hair salons and beauty studios.',
      cz: 'Online rezervace 24/7 a administrační panel pro kadeřnictví a salony krásy.',
    },
  },
  studio: {
    name: {
      uk: 'hirnix studio — Сайти та Google Business для українців у Чехії',
      en: 'hirnix studio — Websites & Google Business for Local Service Businesses',
      cz: 'hirnix studio — Weby a Google Business pro Ukrajince v Česku',
    },
    description: {
      uk: 'Сайти, Google Business Profile та локальне SEO для українських підприємців у Чехії.',
      en: 'Websites, Google Business Profile, and local SEO for service businesses worldwide.',
      cz: 'Weby, Google Business Profile a lokální SEO pro ukrajinské podnikatele v Česku.',
    },
  },
};

export function JsonLd({ lang, faqItems, variant = 'studio', basePath = '' }: JsonLdProps) {
  const langPath = lang === 'cz' ? '/cz' : lang === 'en' ? '/en' : '';
  const pageUrl = `${SITE_URL}${basePath}${langPath}`;
  const inLanguage = lang === 'cz' ? 'cs' : lang === 'en' ? 'en' : 'uk';
  const name = COPY[variant].name[lang];
  const description = COPY[variant].description[lang];

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': variant === 'saas' ? ['Organization', 'SoftwareApplication'] : ['Organization', 'LocalBusiness'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    email: BUSINESS.email,
    telephone: variant === 'saas' ? BUSINESS.telephoneSaas : BUSINESS.telephoneStudio,
    description,
    ...(variant === 'studio'
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: BUSINESS.addressLocality,
            addressCountry: BUSINESS.addressCountry,
          },
          areaServed: lang === 'en'
            ? [{ '@type': 'Place', name: 'Worldwide' }]
            : [
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
        }
      : {
          applicationCategory: 'BusinessApplication',
        }),
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
    name,
    isPartOf: { '@id': `${SITE_URL}/#organization` },
    inLanguage,
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
