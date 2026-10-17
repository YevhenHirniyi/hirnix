import { SITE, absoluteUrl } from '@/config/seo';
import contacts from '@/config/contacts';
import { getCopy } from '@/config/site/copy';
import { LOCALES, type Locale } from '@/config/site/i18n';

interface Props {
  locale: Locale;
  /** Visible breadcrumb trail (omit on the home page). */
  breadcrumbs?: { label: string; path: string }[];
  /** Visible FAQ on the page — schema must mirror what the visitor sees. */
  faq?: { q: string; a: string }[];
  /** Adds Organization + WebSite + SoftwareApplication (home page only). */
  site?: boolean;
}

/**
 * Structured data that describes only what is visible on the page — no
 * prices, ratings or reviews (strategy T12).
 */
export function PageJsonLd({ locale, breadcrumbs, faq, site }: Props) {
  const seo = getCopy(locale).common.seo;
  const graph: Record<string, unknown>[] = [];

  if (site) {
    graph.push(
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: 'Hirnix',
        url: SITE.url,
        logo: absoluteUrl('/icon-512.png'),
        email: contacts.emailDisplay,
        telephone: contacts.phoneDisplay.replace(/\s/g, ''),
        sameAs: [contacts.instagram],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: 'Hirnix',
        inLanguage: [...LOCALES],
        publisher: { '@id': `${SITE.url}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Hirnix',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: seo.appDescription,
        publisher: { '@id': `${SITE.url}/#organization` },
      },
    );
  }

  if (breadcrumbs?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.label,
        item: absoluteUrl(b.path === '/' ? '' : b.path),
      })),
    });
  }

  if (faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  if (!graph.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
}
