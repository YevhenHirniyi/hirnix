import { X, Check } from 'lucide-react';
import { MeshGradient } from './MeshGradient';
import type { BeforeAfterT } from '@/config/i18n/types';

interface Props { t: BeforeAfterT }

export function BeforeAfter({ t }: Props) {
  return (
    <section className="section section-dark mesh-host" id="why">
      <div className="mesh-layer">
        <MeshGradient
          colors={['#1F2420', '#17694C', '#2F8F6B', '#1F2420']}
          speed={0.35}
          distortion={0.7}
        />
        <div className="mesh-overlay mesh-overlay-dark" />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow on-dark"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16, color: 'var(--background)' }}>
              {t.h2.pre} <span className="glue">{t.h2.mid}</span><br />
              <span style={{ color: 'var(--brand-soft)' }}>{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead" style={{ color: 'rgba(250,250,247,0.65)' }}>{t.lead}</p>
        </div>

        <div className="compare-card">
          <div className="compare-head">
            <span className="before-label">{t.beforeLabel}</span>
            <span className="after-label">{t.afterLabel}</span>
          </div>
          {t.rows.map((r, i) => (
            <div key={i} className="compare-row">
              <div className="compare-cell before">
                <X size={16} strokeWidth={2.2} />
                <span>{r.before}</span>
              </div>
              <div className="compare-cell after">
                <Check size={16} strokeWidth={2.2} style={{ color: 'var(--brand-primary)' }} />
                <span>{r.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
