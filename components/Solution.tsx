import { Check, ArrowUpRight } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import type { SolutionT, SolutionCardT } from '@/config/i18n/types';

interface Props { t: SolutionT }

export function Solution({ t }: Props) {
  return (
    <section className="section edge-mesh-host" id="solution">
      <EdgeMesh
        corner="tr"
        size={680}
        opacity={0.45}
        palette={['#E5F5EE', '#2F8F6B', '#F1FAF5', '#FAFAF7']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2.pre} <span style={{ color: 'var(--brand-primary)' }}>{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="solution-grid">
          <SolutionCard c={t.client} cta={t.cta} featured={false} />
          <SolutionCard c={t.business} cta={t.cta} featured />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ c, cta, featured }: { c: SolutionCardT; cta: string; featured: boolean }) {
  return (
    <article className={`service-card${featured ? ' featured' : ''}`}>
      <div className="badge-num">{c.tag}</div>
      <h3>{c.title}</h3>
      <p className="desc">{c.desc}</p>
      <ul className="includes">
        {c.items.map((it, j) => (
          <li key={j}>
            <Check size={14} strokeWidth={2.4} style={{ color: featured ? 'var(--brand-soft)' : 'var(--brand-primary)', flexShrink: 0, marginTop: 2 }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a href="#cta" className="card-cta">
        {cta}
        <ArrowUpRight size={14} strokeWidth={2.2} />
      </a>
    </article>
  );
}
