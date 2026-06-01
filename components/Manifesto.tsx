import { MeshGradient } from './MeshGradient';
import { AnimatedText } from './AnimatedText';
import type { ManifestoT } from '@/config/i18n/types';

interface Props { t: ManifestoT }

export function Manifesto({ t }: Props) {
  return (
    <section className="section section-dark mesh-host" id="approach">
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

        <div className="manifesto-intro">
          <AnimatedText className="manifesto-intro-text">{t.intro}</AnimatedText>
        </div>

        <div className="manifesto-list">
          {t.rows.map((r, i) => (
            <div key={i} className="manifesto-row">
              <div className="manifesto-num">{r.num}</div>
              <h3 className="manifesto-title">{r.title}</h3>
              <p className="manifesto-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
