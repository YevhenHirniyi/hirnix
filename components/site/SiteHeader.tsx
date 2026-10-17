import { getCopy } from '@/config/site/copy';
import { LOCALES, LOCALE_LABEL, LOCALE_NAME, localePath, type Locale } from '@/config/site/i18n';
import { ROUTES } from '@/config/site/routes';
import { HeaderBar } from './HeaderBar';

interface Props {
  locale: Locale;
  /** Route path of the current page; when given, the language switcher links to it in every language. */
  path?: string;
  /** Pages without their own contact form send the CTA to the contacts page. */
  ctaHref?: string;
}

/** Resolves copy and links on the server, so the client header ships one locale only. */
export function SiteHeader({ locale, path, ctaHref = '#contact' }: Props) {
  const c = getCopy(locale).common;
  const hrefs = Object.fromEntries(Object.entries(ROUTES).map(([k, r]) => [k, localePath(locale, r.path)]));
  const langs = path === undefined ? undefined : LOCALES.map((l) => ({
    code: l,
    label: LOCALE_LABEL[l],
    name: LOCALE_NAME[l],
    href: localePath(l, path),
    current: l === locale,
  }));

  return (
    <HeaderBar
      t={c.header}
      ui={c.ui}
      routes={c.routes}
      hrefs={hrefs}
      homeHref={hrefs.home}
      langs={langs}
      ctaHref={ctaHref}
    />
  );
}
