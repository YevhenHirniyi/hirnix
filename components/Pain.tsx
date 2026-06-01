import { Image, SearchX, Languages, AlarmClock, ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import type { PainT } from '@/config/i18n/types';

const ICONS: LucideIcon[] = [Image, SearchX, Languages, AlarmClock];

interface Props { t: PainT }

export function Pain({ t }: Props) {
  return (
    <section className="section edge-mesh-host" id="pain">
      <EdgeMesh
        corner="bl"
        size={640}
        opacity={0.45}
        palette={['#E5F5EE', '#F1FAF5', '#FAFAF7', '#2F8F6B']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              {t.h2.pre} <span className="glue accent">{t.h2.accent}</span>
            </h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="pain-grid">
          {t.items.map((it, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="pain-card" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="icon-tile">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <a href="#cta" className="btn btn-primary btn-lg">
            {t.cta}
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
