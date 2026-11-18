'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BarChart3, CalendarDays, Check, ChevronDown, Globe, Menu, Scissors, User, Users, X, type LucideIcon } from 'lucide-react';
import { Logo } from '@/components/Header';
import type { SiteCopy } from '@/config/site/copy';
import { FEATURE_KEYS, LOGIN_URL, SEGMENT_KEYS } from '@/config/site/routes';
import { LangSuggest, rememberLangChoice } from './LangSuggest';

const PLAIN = ['demo', 'conditions'] as const;

const ICONS: Record<string, LucideIcon> = {
  scheduling: CalendarDays,
  clients: Users,
  team: Scissors,
  reports: BarChart3,
  booking: Globe,
  independent: User,
  studios: Users,
};

export interface LangLink { code: string; label: string; name: string; href: string; current: boolean }

interface Props {
  t: SiteCopy['common']['header'];
  ui: SiteCopy['common']['ui'];
  routes: SiteCopy['common']['routes'];
  /** Locale-resolved hrefs for every route key. */
  hrefs: Record<string, string>;
  homeHref: string;
  /** Same page in every language; the switcher is shown only when given. */
  langs?: LangLink[];
  ctaHref: string;
}

export function HeaderBar({ t, ui, routes, hrefs, homeHref, langs, ctaHref }: Props) {
  const GROUPS = [
    { id: 'features', label: t.featuresLabel, keys: FEATURE_KEYS },
    { id: 'segments', label: t.segmentsLabel, keys: SEGMENT_KEYS },
  ] as const;

  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (menuOpen) { setMenuOpen(false); burgerRef.current?.focus(); }
      setOpenGroup(null);
      setLangOpen((open) => {
        if (open) langBtnRef.current?.focus();
        return false;
      });
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeAll = () => { setMenuOpen(false); setOpenGroup(null); };

  return (
    <header className={`sh${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#main" className="sh-skip">{ui.skipLink}</a>
      {langs && <LangSuggest langs={langs} />}
      <div className="container sh-inner">
        <Logo href={homeHref} />

        <nav className="sh-nav" ref={navRef} aria-label={ui.mainNav}>
          {GROUPS.map((g) => {
            const open = openGroup === g.id;
            return (
              <div key={g.id} className={`sh-group${open ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="sh-link"
                  aria-expanded={open}
                  aria-controls={`sh-panel-${g.id}`}
                  onClick={() => setOpenGroup(open ? null : g.id)}
                >
                  {g.label}
                  <ChevronDown size={14} strokeWidth={2.2} aria-hidden className="sh-chevron" />
                </button>
                <div className="sh-panel" id={`sh-panel-${g.id}`} hidden={!open}>
                  {g.keys.map((k) => {
                    const r = routes[k];
                    const Icon = ICONS[k];
                    return (
                      <a key={k} href={hrefs[k]} className="sh-panel-link" onClick={closeAll}>
                        <span className="sh-panel-icon" aria-hidden><Icon size={18} strokeWidth={1.9} /></span>
                        <span className="sh-panel-text">
                          <span className="sh-panel-title">{r.label}</span>
                          <span className="sh-panel-hint">{r.hint}</span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {PLAIN.map((k) => (
            <a key={k} href={hrefs[k]} className="sh-link">{routes[k].label}</a>
          ))}
        </nav>

        <div className="sh-actions">
          {langs && (() => {
            const current = langs.find((l) => l.current);
            return (
              <div className={`sh-lang${langOpen ? ' is-open' : ''}`} ref={langRef}>
                <button
                  ref={langBtnRef}
                  type="button"
                  className="sh-lang-btn"
                  aria-expanded={langOpen}
                  aria-controls="sh-lang-panel"
                  aria-label={`${ui.languageNav}: ${current?.name ?? ''}`}
                  onClick={() => { setLangOpen((v) => !v); setOpenGroup(null); }}
                >
                  <Globe size={15} strokeWidth={2} aria-hidden />
                  {current?.label}
                  <ChevronDown size={14} strokeWidth={2.2} aria-hidden className="sh-chevron" />
                </button>
                <ul className="sh-lang-panel" id="sh-lang-panel" hidden={!langOpen} aria-label={ui.languageNav}>
                  {langs.map((l) => (
                    <li key={l.code}>
                      {l.current ? (
                        <span className="sh-lang-item is-current" aria-current="true">
                          <span className="sh-lang-name">{l.name}</span>
                          <Check size={16} strokeWidth={2.4} aria-hidden />
                        </span>
                      ) : (
                        <a className="sh-lang-item" href={l.href} hrefLang={l.code} lang={l.code} onClick={rememberLangChoice}>
                          <span className="sh-lang-name">{l.name}</span>
                          <span className="sh-lang-code" aria-hidden>{l.label}</span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
          <a href={LOGIN_URL} className="sh-login">{t.login}</a>
          <a href={ctaHref} className="btn btn-primary btn-sm sh-cta" data-cta="header">
            {t.cta}
          </a>
          <button
            ref={burgerRef}
            type="button"
            className="sh-burger"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            aria-controls="sh-mobile"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      <div className="sh-mobile" id="sh-mobile" hidden={!menuOpen}>
        <div className="container">
          {GROUPS.map((g) => (
            <div key={g.id} className="sh-mob-group">
              <p className="sh-mob-label">{g.label}</p>
              {g.keys.map((k) => (
                <a key={k} href={hrefs[k]} className="sh-mob-link" onClick={closeAll}>
                  {routes[k].label}
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              ))}
            </div>
          ))}
          <div className="sh-mob-group">
            {PLAIN.map((k) => (
              <a key={k} href={hrefs[k]} className="sh-mob-link" onClick={closeAll}>
                {routes[k].label}
                <ArrowUpRight size={16} aria-hidden />
              </a>
            ))}
            <a href={LOGIN_URL} className="sh-mob-link" onClick={closeAll}>
              {t.login}
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
          <a href={ctaHref} className="btn btn-primary btn-md sh-mob-cta" data-cta="header-mobile" onClick={closeAll}>
            {t.cta}
          </a>
          {langs && (
            <p className="sh-mob-lang" role="group" aria-label={ui.languageNav}>
              {langs.map((l) => l.current
                ? <span key={l.code} aria-current="true">{l.name}</span>
                : <a key={l.code} href={l.href} hrefLang={l.code} lang={l.code} onClick={rememberLangChoice}>{l.name}</a>)}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
