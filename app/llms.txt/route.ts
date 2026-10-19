import { SITE, absoluteUrl } from '@/config/seo';
import contacts from '@/config/contacts';
import { getCopy } from '@/config/site/copy';
import { LOCALES, LOCALE_NAME, localePath } from '@/config/site/i18n';
import { LOCALIZED_KEYS, ROUTES } from '@/config/site/routes';

/**
 * /llms.txt (llmstxt.org): a plain-markdown map of the site for AI assistants
 * and answer engines. Built from the same copy as the pages, so it never says
 * more than the site does — the facts come from the English home page.
 */
export const dynamic = 'force-static';

export function GET() {
  const en = getCopy('en');
  const url = (path: string) => absoluteUrl(path === '/' ? '' : path);

  const lines: string[] = [
    '# Hirnix',
    '',
    `> ${en.home.meta.description}`,
    '',
    en.home.hero.lead,
    '',
    `${en.home.terms.body} Pricing is not public: each business gets an individual offer.`,
    '',
    '## Key facts',
    '',
    `- Product: web-based CRM for beauty professionals and studios (${SITE.url}).`,
    `- Modules: ${en.home.features.items.map((f) => f.title).join(', ')}.`,
    `- Audience: ${en.home.segments.items.map((s) => s.tag.toLowerCase()).join(', ')}.`,
    `- Website languages: ${LOCALES.map((l) => LOCALE_NAME[l]).join(', ')}.`,
    `- Contact: ${contacts.emailDisplay}, ${contacts.phoneDisplay} (Telegram, WhatsApp, Viber).`,
    '',
    '## FAQ',
    '',
    ...en.home.faq.items.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
  ];

  for (const locale of LOCALES) {
    const copy = getCopy(locale);
    lines.push(`## Pages — ${LOCALE_NAME[locale]}`, '');
    for (const key of LOCALIZED_KEYS) {
      if (!ROUTES[key].live) continue;
      const { title, description } = copy[key].meta;
      lines.push(`- [${title}](${url(localePath(locale, ROUTES[key].path))}): ${description}`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
