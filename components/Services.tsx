import { Check, ArrowUpRight } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import type { ServicesT } from '@/config/i18n/types';

interface Props { t: ServicesT }

export function Services({ t }: Props) {
  const featured = t.services[1];
  return (
    <section className="section edge-mesh-host" id="services">
      <EdgeMesh
        corner="tr"
        size={720}
        opacity={0.5}
        palette={['#2F8F6B', '#E5F5EE', '#FAFAF7', '#F4F3EF']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2.pre}<br />
              {t.h2.mid && <><span className="glue">{t.h2.mid}</span><br /></>}
              <span style={{ color: 'var(--brand-primary)' }}>{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="services-grid">
          {t.services.map((s, i) => (
            <article
              key={i}
              className={`service-card${s === featured ? ' featured' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="badge-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p className="desc">{s.desc}</p>
              <ul className="includes">
                {s.items.map((it, j) => (
                  <li key={j}>
                    <Check size={14} strokeWidth={2.4} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: 2 }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#cta" className="card-cta">
                {s.cta}
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
