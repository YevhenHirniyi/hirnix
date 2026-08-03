'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { HeaderT } from '@/config/i18n/types';

interface Props { t: HeaderT; basePath?: string; langs?: Array<'uk' | 'cz' | 'en'>; anchorHome?: string }

export function Header({ t, basePath = '', langs = ['uk', 'cz', 'en'], anchorHome }: Props) {
  const resolveHref = (href: string) => (anchorHome && href.startsWith('#') ? `${anchorHome}${href}` : href);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isCZ = pathname === `${basePath}/cz` || pathname.startsWith(`${basePath}/cz/`);
  const isEN = pathname === `${basePath}/en` || pathname.startsWith(`${basePath}/en/`);
  const currentLang = isEN ? 'en' : isCZ ? 'cz' : 'uk';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY > 60) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const switchLang = (lang: 'uk' | 'cz' | 'en') => {
    setMenuOpen(false);
    router.push(lang === 'uk' ? (basePath || '/') : `${basePath}/${lang}`);
  };

  const close = () => setMenuOpen(false);

  const isMainPage = pathname === (basePath || '/') || pathname === `${basePath}/cz` || pathname === `${basePath}/en`;
  const logoHref = isEN ? `${basePath}/en` : isCZ ? `${basePath}/cz` : (basePath || '/');

  return (
    <header className={`hx-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container hx-header-inner">
        <Logo href={logoHref} />
        <nav className="hx-nav">
          {t.nav.map((item) => (
            <a key={item.href} href={resolveHref(item.href)}>{item.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="lang-pill">
            {langs.map((lang) => (
              <button
                key={lang}
                onClick={() => switchLang(lang)}
                className={currentLang === lang ? 'lang-current' : ''}
                title={lang.toUpperCase()}
              >
                {lang === 'uk' ? 'UA' : lang.toUpperCase()}
              </button>
            ))}
          </div>
          <a href={resolveHref('#cta')} className="btn btn-dark btn-sm hx-cta-btn">
            {t.cta}
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </a>
          <button
            className="hx-burger"
            aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="hx-mobile-menu">
          <div className="container">
            <nav className="hx-mob-nav">
              {t.nav.map((item) => (
                <a key={item.href} href={resolveHref(item.href)} className="hx-mob-link" onClick={close}>
                  {item.label}
                  <ArrowUpRight size={16} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
                </a>
              ))}
            </nav>
            <a href={resolveHref('#cta')} className="btn btn-dark btn-md" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} onClick={close}>
              {t.cta}
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo({ size = 22, href = '/' }: { size?: number; href?: string }) {
  return (
    <a href={href} className="hx-logo" style={{ fontSize: size }}>
      hirnix
      <span
        className="hx-logo-dot"
        style={{ width: Math.round(size / 4), height: Math.round(size / 4) }}
      />
    </a>
  );
}
