'use client';

import { useState, useSyncExternalStore } from 'react';
import { ArrowRight, X } from 'lucide-react';
import type { Locale } from '@/config/site/i18n';
import type { LangLink } from './HeaderBar';

/**
 * A dismissible hint shown when the visitor's browser language has its own
 * version of the site. It never redirects: the visitor decides. Written in
 * the suggested language, since that is the one the visitor reads best.
 */
const HINT: Record<Locale, { text: string; cta: string; close: string }> = {
  uk: { text: 'Цей сайт є українською мовою.', cta: 'Перейти', close: 'Закрити' },
  en: { text: 'This site is available in English.', cta: 'Switch to English', close: 'Close' },
  cs: { text: 'Tento web je k dispozici v češtině.', cta: 'Přepnout do češtiny', close: 'Zavřít' },
  pl: { text: 'Ta strona jest dostępna po polsku.', cta: 'Przejdź na polski', close: 'Zamknij' },
  de: { text: 'Diese Website gibt es auch auf Deutsch.', cta: 'Auf Deutsch wechseln', close: 'Schließen' },
};

/** Browser language subtags that map onto a site language. */
const ALIAS: Record<string, string> = { ru: 'uk', cz: 'cs' };

const STORAGE_KEY = 'hx-lang-hint';

/** Call when the visitor picks a language themselves — the hint stays hidden from then on. */
export function rememberLangChoice() {
  try { localStorage.setItem(STORAGE_KEY, 'off'); } catch { /* storage blocked: hint may show again */ }
}

function isDismissed() {
  try { return localStorage.getItem(STORAGE_KEY) === 'off'; } catch { return false; }
}

/** First browser language the site has, or undefined. */
function preferredLang(langs: LangLink[]): LangLink | undefined {
  if (typeof navigator === 'undefined') return undefined;
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of tags) {
    if (!tag) continue;
    const base = tag.split('-')[0].toLowerCase();
    const code = ALIAS[base] ?? base;
    const match = langs.find((l) => l.code === code);
    if (match) return match;
  }
  return undefined;
}

const subscribeNever = () => () => {};

export function LangSuggest({ langs }: { langs: LangLink[] }) {
  // Browser-only value: empty on the server and during hydration, then the
  // suggested language code (or empty when there is nothing to suggest).
  const code = useSyncExternalStore(
    subscribeNever,
    () => {
      if (isDismissed()) return '';
      const pick = preferredLang(langs);
      return pick && !pick.current ? pick.code : '';
    },
    () => '',
  );
  const [closed, setClosed] = useState(false);

  const target = langs.find((l) => l.code === code);
  const hint = target && HINT[target.code as Locale];
  if (closed || !target || !hint) return null;

  const dismiss = () => { rememberLangChoice(); setClosed(true); };

  return (
    <div className="sh-hint" lang={target.code} role="region" aria-label={hint.text}>
      <div className="container sh-hint-inner">
        <p className="sh-hint-text">{hint.text}</p>
        <a className="sh-hint-cta" href={target.href} hrefLang={target.code} onClick={rememberLangChoice}>
          {hint.cta}
          <ArrowRight size={15} strokeWidth={2.2} aria-hidden />
        </a>
        <button type="button" className="sh-hint-close" aria-label={hint.close} onClick={dismiss}>
          <X size={16} strokeWidth={2.2} aria-hidden />
        </button>
      </div>
    </div>
  );
}
