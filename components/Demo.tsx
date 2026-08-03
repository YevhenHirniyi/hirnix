import type { DemoT, DemoSideT } from '@/config/i18n/types';

interface Props { t: DemoT }

export function Demo({ t }: Props) {
  return (
    <section className="section section-soft" id="demo">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2.pre} <span style={{ color: 'var(--brand-primary)' }}>{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="demo-grid">
          <DemoCard side={t.client} src="/product/booking-flow.png" />
          <DemoCard side={t.business} src="/product/dashboard.png" />
        </div>
      </div>
    </section>
  );
}

function DemoCard({ side, src }: { side: DemoSideT; src: string }) {
  return (
    <div className="demo-card">
      <div className="demo-frame">
        <div className="demo-frame-bar">
          <span className="dot" style={{ background: '#E8807B' }} />
          <span className="dot" style={{ background: '#E8C77B' }} />
          <span className="dot" style={{ background: '#9AC7A0' }} />
        </div>
        <img src={src} alt={side.alt} />
      </div>
      <div>
        <span className="demo-tag">{side.tag}</span>
        <h3>{side.title}</h3>
        <p style={{ marginTop: 8 }}>{side.caption}</p>
      </div>
    </div>
  );
}
