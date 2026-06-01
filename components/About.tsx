import { Check, ArrowUpRight } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';
import contacts from '@/config/contacts';
import type { AboutT } from '@/config/i18n/types';

interface Props { t: AboutT }

export function About({ t }: Props) {
  return (
    <section className="section edge-mesh-host" id="about">
      <EdgeMesh
        corner="tl"
        size={720}
        opacity={0.5}
        palette={['#2F8F6B', '#F1FAF5', '#E5F5EE', '#FAFAF7']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-copy">
          <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
          <h2 style={{ marginTop: 16 }}>
            {t.h2.pre} <span className="ital">{t.h2.italic}</span><br />
            {t.h2.post}
          </h2>
          <p>{t.para1}</p>
          <p>{t.para2}</p>
          <div className="about-checks">
            {t.checks.map((item, i) => (
              <div key={i} className="about-check">
                <Check size={14} strokeWidth={2.4} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: 3 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'var(--brand-primary)', textDecoration: 'none' }}
            >
              {t.linkLabel} <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
