import { ArrowUpRight, Bell, CalendarCheck, Wallet, Users, Lock } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import type { SaasHeroT, SaasHeroMockupT } from '@/config/i18n/types';

interface Props { t: SaasHeroT }

export function SaasHero({ t }: Props) {
  const h = t.h1;
  return (
    <section className="hero edge-mesh-host" id="top">
      <EdgeMesh corner="tr" size={760} opacity={0.55} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-meta-row">
          <div className="meta-block">
            <span>· 01 / hirnix</span>
            <strong>{t.meta.location}</strong>
          </div>
          <div className="meta-block meta-block--right">
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

          <SaasHeroMockup m={t.mockup} />
        </div>
      </div>
    </section>
  );
}

function SaasHeroMockup({ m }: { m: SaasHeroMockupT }) {
  return (
    <div className="hero-mockup">
      <div className="mk-card mk-notif">
        <div className="mk-notif-icon">
          <Bell size={14} strokeWidth={2} />
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
            {m.urlLabel}
          </div>
        </div>
        <img
          src="/product/confirmation.png"
          alt="hirnix — підтвердження онлайн-запису"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>

      <div className="mk-card mk-gbp">
        <div className="mk-gbp-header">
          <div className="mk-gbp-avatar">HX</div>
          <div>
            <div className="mk-gbp-title">{m.statsTitle}</div>
            <div className="mk-gbp-rating">
              <span style={{ color: 'var(--text-muted)' }}>{m.stat1Value} {m.stat1Label.toLowerCase()}</span>
            </div>
          </div>
        </div>
        <div className="mk-gbp-actions">
          <div className="mk-gbp-action">
            <CalendarCheck size={12} strokeWidth={2} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.stat1Value}</span>
            {m.stat1Label}
          </div>
          <div className="mk-gbp-action">
            <Wallet size={12} strokeWidth={2} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.stat2Value}</span>
            {m.stat2Label}
          </div>
          <div className="mk-gbp-action">
            <Users size={12} strokeWidth={2} />
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m.stat3Value}</span>
            {m.stat3Label}
          </div>
        </div>
      </div>
    </div>
  );
}
