import { uk } from './uk';
import { en } from './en';
import { cs } from './cs';
import { de } from './de';
import type { Locale } from './i18n';

/** Shape every locale's copy must have — taken from the Ukrainian source. */
export type SiteCopy = typeof uk;

const COPY: Record<Locale, SiteCopy> = { uk, en, cs, de };

export function getCopy(locale: Locale): SiteCopy {
  return COPY[locale];
}
