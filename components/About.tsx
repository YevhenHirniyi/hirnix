import { Check, MapPin, ArrowUpRight } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';

const checks = [
  'Прага, Чехія',
  'Комунікація українською',
  'Адаптація під чеський ринок',
  'Просте пояснення техніки',
  'Передача доступів після запуску',
  'Індивідуальний підхід',
];

export function About() {
  return (
    <section className="section edge-mesh-host" id="about">
      <EdgeMesh
        corner="tl"
        size={720}
        opacity={0.5}
        palette={['#2F8F6B', '#F1FAF5', '#E5F5EE', '#FAFAF7']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-shell">
          <div className="about-copy">
            <span className="eyebrow"><span className="dot" />Про hirnix</span>
            <h2 style={{ marginTop: 16 }}>
              Хто <span className="ital">за цим</span><br />
              стоїть.
            </h2>
            <p>
              hirnix створений для українських підприємців у Чехії, яким потрібна
              зрозуміла, професійна й локально адаптована онлайн-присутність — без
              технічного хаосу й маркетингових обіцянок.
            </p>
            <p>
              Ми розуміємо, як складно адаптувати бізнес до нового ринку: мова,
              довіра, Google, конкуренція, чеські клієнти й нестача часу. Тому
              допомагаємо зібрати все в одну систему: сайт, тексти, Google-профіль,
              SEO та зручні канали для заявок.
            </p>
            <div className="about-checks">
              {checks.map((t, i) => (
                <div key={i} className="about-check">
                  <Check size={14} strokeWidth={2.4} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: 3 }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card">
            <div className="portrait-slot">
              <span className="city-tag">
                <MapPin size={12} strokeWidth={2} style={{ color: 'var(--brand-primary)' }} />
                Praha · Чехія
              </span>
              <span className="placeholder-label">Фото команди</span>
            </div>
            <div className="langs">
              <span className="lang primary">Українська</span>
              <span className="lang">Čeština</span>
              <span className="lang">English</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTop: '1px solid var(--border-light)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
                HIRNIX · STUDIO · CZ
              </div>
              <a
                href="#cta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--brand-primary)', textDecoration: 'none' }}
              >
                Написати <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
