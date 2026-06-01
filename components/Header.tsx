'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { HeaderT } from '@/config/i18n/types';

interface Props { t: HeaderT }

export function Header({ t }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isCZ = pathname.startsWith('/cz');

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

  const toggleLang = () => {
    setMenuOpen(false);
    router.push(isCZ ? '/' : '/cz');
  };

  const close = () => setMenuOpen(false);

  return (
    <header className={`hx-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container hx-header-inner">
        <Logo />
        <nav className="hx-nav">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={toggleLang} className="lang-pill" title="Switch language">
            <span style={{ fontSize: 11, opacity: 0.6 }}>{isCZ ? 'UA' : 'CZ'}</span>
            <span className="lang-current">{isCZ ? 'CZ' : 'UA'}</span>
          </button>
          <a href="#cta" className="btn btn-dark btn-sm hx-cta-btn">
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
                <a key={item.href} href={item.href} className="hx-mob-link" onClick={close}>
                  {item.label}
                  <ArrowUpRight size={16} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
                </a>
              ))}
            </nav>
            <a href="#cta" className="btn btn-dark btn-md" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }} onClick={close}>
              {t.cta}
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Logo({ size = 22 }: { size?: number }) {
  return (
    <a href="#top" className="hx-logo" style={{ fontSize: size }}>
      hirnix
      <span
        className="hx-logo-dot"
        style={{ width: Math.round(size / 4), height: Math.round(size / 4) }}
      />
    </a>
  );
}
