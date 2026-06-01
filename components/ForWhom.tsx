import {
  Sparkles, Hand, Flower, HeartPulse, Utensils, HardHat, Hammer,
  SprayCan, Camera, Scale, Truck, GraduationCap, Car, MapPin,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import type { ForWhomT } from '@/config/i18n/types';

const ICONS: LucideIcon[] = [
  Sparkles, Hand, Flower, HeartPulse, Utensils, HardHat, Hammer,
  SprayCan, Camera, Scale, Truck, GraduationCap, Car, MapPin,
];

interface Props { t: ForWhomT }

export function ForWhom({ t }: Props) {
  const niches = t.niches.map((name, i) => ({ icon: ICONS[i % ICONS.length], name }));
  const doubled = [...niches, ...niches];

  return (
    <section className="section section-soft" id="for-whom">
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

        <div className="niches-marquee">
          <div className="niches-track">
            {doubled.map((n, i) => (
              <span key={i} className="niche-chip">
                <n.icon size={14} strokeWidth={1.8} style={{ color: 'var(--brand-primary)' }} />
                {n.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
