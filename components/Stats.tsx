import type { StatsT } from '@/config/i18n/types';

interface Props { t: StatsT }

export function Stats({ t }: Props) {
  return (
    <section className="section section-dark" id="results">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow on-dark"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16, color: 'var(--background)' }}>
              {t.h2.pre}<br />
              <span className="glue">{t.h2.mid}</span><br />
              <span style={{ color: 'var(--brand-soft)' }}>{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead" style={{ color: 'rgba(250,250,247,0.65)' }}>{t.lead}</p>
        </div>

        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <div key={i} className="stat-cell">
              <span className="stat-label">{s.label}</span>
              <h3 className="stat-value">
                <span>{s.value}</span>
                <span className="accent">{s.accent}</span>
              </h3>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
