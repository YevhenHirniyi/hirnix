import { ArrowUpRight, Bell, Lock, Phone, Navigation, Globe } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import type { HeroT, HeroMockupT } from '@/config/i18n/types';

interface Props { t: HeroT }

export function Hero({ t }: Props) {
  const h = t.h1;
  return (
    <section className="hero edge-mesh-host" id="top">
      <EdgeMesh corner="tr" size={760} opacity={0.55} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-meta-row">
          <div className="meta-block">
            <span>· 01 / hirnix studio</span>
            <strong>{t.meta.location}</strong>
          </div>
          <div className="meta-block" style={{ alignItems: 'flex-end', textAlign: 'right' }}>
            <span>{t.meta.audience}</span>
            <strong>{t.meta.services}</strong>
          </div>
        </div>

        <h1 className="hero-title">
          {h.pre}<span className="ital">{h.italic}</span>{h.mid}<br />
          <span className="hl">{h.highlight}</span><br />
          {h.after} <span className="accent">{h.accent}</span>
        </h1>

        <div className="hero-grid">
          <div className="hero-lead-block">
            <p className="hero-lead">{t.lead}</p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary btn-lg">
                {t.cta1}
                <ArrowUpRight size={18} strokeWidth={2.2} />
              </a>
            </div>
            <div className="hero-fineprint">
              {t.fineprint.map((f, i) => (
                <span key={i}><span className="bullet" />{f}</span>
              ))}
            </div>
          </div>

          <HeroMockup m={t.mockup} />
        </div>
      </div>
    </section>
  );
}

function HeroMockup({ m }: { m: HeroMockupT }) {
  return (
    <div className="hero-mockup">
      <div className="mk-lang">
        <span className="lang-active">UA</span>
        <span className="lang-inactive">CZ</span>
      </div>

      <div className="mk-card mk-notif">
        <div className="mk-notif-icon">
          <Bell size={18} strokeWidth={2} />
        </div>
        <div className="mk-notif-body">
          <div className="mk-notif-title">{m.notifTitle}</div>
          <div className="mk-notif-msg">{m.notifMsg}</div>
        </div>
        <div className="mk-notif-time">{m.notifTime}</div>
      </div>

      <div className="mk-card mk-browser" style={{ flex: 1 }}>
        <div className="mk-browser-bar">
          <span className="dot" style={{ background: '#E8807B' }} />
          <span className="dot" style={{ background: '#E8C77B' }} />
          <span className="dot" style={{ background: '#9AC7A0' }} />
          <div className="url">
            <span className="lock"><Lock size={10} strokeWidth={2.4} /></span>
            studio-mariia.cz
          </div>
        </div>
        <div className="mk-browser-body">
          <div className="mk-site-head">
            <div className="mk-site-logo">studio mariia<span className="dot" /></div>
            <div className="mk-site-nav">
              {m.siteNav.map((label) => <span key={label}>{label}</span>)}
            </div>
          </div>
          <div className="mk-site-hero">
            {m.siteHeadline.includes(' у ') || m.siteHeadline.includes(' v ')
              ? (() => {
                  const parts = m.siteHeadline.split(/( у | v )/);
                  return <>{parts[0]}<br /><span className="accent">{parts.slice(1).join('')}</span></>;
                })()
              : m.siteHeadline}
          </div>
          <div className="mk-site-lead">{m.siteLead}</div>
          <div className="mk-cta-row">
            <span className="mk-mini-btn">{m.siteCta1}</span>
            <span className="mk-mini-btn ghost">{m.siteCta2}</span>
          </div>
          <div className="mk-gallery">
            <div /><div /><div />
          </div>
        </div>
      </div>

      <div className="mk-card mk-gbp">
        <div className="mk-gbp-header">
          <div className="mk-gbp-avatar">SM</div>
          <div>
            <div className="mk-gbp-title">{m.gbpName}</div>
            <div className="mk-gbp-rating">
              <span className="stars">★★★★★</span>
              <span style={{ color: 'var(--text-muted)' }}>{m.gbpRating}</span>
            </div>
          </div>
        </div>
        <div className="mk-gbp-actions">
          <div className="mk-gbp-action"><Phone size={12} strokeWidth={2} />{m.gbpContact}</div>
          <div className="mk-gbp-action"><Navigation size={12} strokeWidth={2} />{m.gbpRoute}</div>
          <div className="mk-gbp-action"><Globe size={12} strokeWidth={2} />{m.gbpSite}</div>
        </div>
      </div>
    </div>
  );
}

interface MarqueeProps {
  items: string[];
  dark?: boolean;
  separator?: 'cross' | 'plus';
}

export function Marquee({ items, dark, separator = 'cross' }: MarqueeProps) {
  const star = (
    <svg className="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5Z" fill="currentColor" />
    </svg>
  );
  const plus = (
    <svg className="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
  const sep = separator === 'plus' ? plus : star;
  const list = [...items, ...items, ...items];

  return (
    <div className={`marquee${dark ? ' dark' : ''}`}>
      <div className="marquee-track">
        {list.map((it, i) => (
          <span key={i} className="marquee-item">
            {it.includes('*ital*') ? (
              <span>
                {it.split('*ital*')[0]}
                <span className="ital">{it.split('*ital*')[1]}</span>
                {it.split('*ital*')[2] || ''}
              </span>
            ) : (
              <span>{it}</span>
            )}
            {sep}
          </span>
        ))}
      </div>
    </div>
  );
}
