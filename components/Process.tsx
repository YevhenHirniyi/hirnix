import { ArrowUpRight } from 'lucide-react';
import type { ProcessT } from '@/config/i18n/types';

interface Props { t: ProcessT }

export function Process({ t }: Props) {
  return (
    <section className="section section-soft" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2.pre}<br />
              <span className="glue">{t.h2.mid}</span>{' '}
              <span style={{ color: 'var(--brand-primary)' }}>{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="process-shell">
          {t.steps.map((s, i) => (
            <article key={i} className="process-step">
              <div className="num-row">
                <span>STEP / {s.num}</span>
                <ArrowUpRight size={16} strokeWidth={2} style={{ color: 'var(--text-muted)' }} />
              </div>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="when">→ {s.when}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
