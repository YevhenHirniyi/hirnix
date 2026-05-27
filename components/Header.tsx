'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, Send } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'UA' | 'CZ'>('UA');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`hx-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container hx-header-inner">
        <Logo />
        <nav className="hx-nav">
          <a href="#services">Послуги</a>
          <a href="#for-whom">Для кого</a>
          <a href="#process">Як працюємо</a>
          <a href="#examples">Приклади</a>
          <a href="#faq">Питання</a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="hx-nav" style={{ display: 'inline-flex' }}>
            <button
              onClick={() => setLang(lang === 'UA' ? 'CZ' : 'UA')}
              className="lang-pill"
              title="Перемкнути мову (демо)"
            >
              <span style={{ fontSize: 11, opacity: 0.6 }}>{lang === 'UA' ? 'CZ' : 'UA'}</span>
              <span className="lang-current">{lang}</span>
            </button>
          </div>
          <a href="#cta" className="btn btn-dark btn-sm">
            Безкоштовна консультація
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </a>
          <button className="hx-burger" aria-label="Меню">
            <Menu size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Logo({ size = 22 }: { size?: number }) {
  return (
    <a href="#top" className="hx-logo" style={{ fontSize: size }}>
      hirnix
      <span
        className="hx-logo-dot"
        style={{
          width: Math.round(size / 4),
          height: Math.round(size / 4),
        }}
      />
    </a>
  );
}
