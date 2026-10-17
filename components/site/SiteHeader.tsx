'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BarChart3, CalendarDays, ChevronDown, Globe, Menu, Scissors, User, Users, X, type LucideIcon } from 'lucide-react';
import { Logo } from '@/components/Header';
import { common } from '@/config/site/uk/common';
import { FEATURE_KEYS, LOGIN_URL, ROUTES, SEGMENT_KEYS } from '@/config/site/routes';

const t = common.header;

const GROUPS = [
  { id: 'features', label: t.featuresLabel, keys: FEATURE_KEYS },
  { id: 'segments', label: t.segmentsLabel, keys: SEGMENT_KEYS },
] as const;

const PLAIN = [ROUTES.demo, ROUTES.conditions];

const ICONS: Record<string, LucideIcon> = {
  scheduling: CalendarDays,
  clients: Users,
  team: Scissors,
  reports: BarChart3,
  booking: Globe,
  independent: User,
  studios: Users,
};

interface Props {
  /** Equivalent page in English, when one exists; the language switch is shown only then. */
  enHref?: string;
  /** Pages without their own contact form send the CTA to the contacts page. */
  ctaHref?: string;
}

export function SiteHeader({ enHref, ctaHref = '#contact' }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
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
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
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
      <a href="#main" className="sh-skip">Перейти до змісту</a>
      <div className="container sh-inner">
        <Logo href={ROUTES.home.path} />

        <nav className="sh-nav" ref={navRef} aria-label="Основне меню">
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
                    const r = ROUTES[k];
                    const Icon = ICONS[k];
                    return (
                      <a key={k} href={r.path} className="sh-panel-link" onClick={closeAll}>
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
          {PLAIN.map((r) => (
            <a key={r.path} href={r.path} className="sh-link">{r.label}</a>
          ))}
        </nav>

        <div className="sh-actions">
          {enHref && (
            <div className="sh-lang" aria-label="Мова сайту">
              <span aria-current="true">UA</span>
              <a href={enHref} hrefLang="en" lang="en">EN</a>
            </div>
          )}
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
                <a key={k} href={ROUTES[k].path} className="sh-mob-link" onClick={closeAll}>
                  {ROUTES[k].label}
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              ))}
            </div>
          ))}
          <div className="sh-mob-group">
            {PLAIN.map((r) => (
              <a key={r.path} href={r.path} className="sh-mob-link" onClick={closeAll}>
                {r.label}
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
          {enHref && (
            <p className="sh-mob-lang">
              <a href={enHref} hrefLang="en" lang="en">English version</a>
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
