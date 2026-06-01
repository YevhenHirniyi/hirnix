import { Dot } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import type { ExamplesT } from '@/config/i18n/types';

interface Props { t: ExamplesT }

export function Examples({ t }: Props) {
  return (
    <section className="section edge-mesh-host" id="examples">
      <EdgeMesh
        corner="br"
        size={660}
        opacity={0.45}
        palette={['#E5F5EE', '#2F8F6B', '#F1FAF5', '#FAFAF7']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2}
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="examples-grid">
          {t.cases.map((c, i) => (
            <article
              key={i}
              className="example-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="who-tag">
                <Dot size={14} strokeWidth={3} />
                {c.tag}
              </span>
              <h3 className="who-name">{c.who}</h3>
              <div>
                <div className="problem-label">{t.problemLabel}</div>
                <p className="problem">{c.problem}</p>
              </div>
              <div className="divider" />
              <div>
                <div className="solution-label" style={{ color: 'var(--brand-primary)' }}>
                  {t.solutionLabel}
                </div>
                <p className="problem">{c.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
