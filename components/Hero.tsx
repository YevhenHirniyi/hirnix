import { ArrowUpRight, Bell, Lock, Phone, Navigation, Globe } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';

export function Hero() {
  return (
    <section className="hero edge-mesh-host" id="top">
      <EdgeMesh corner="tr" size={760} opacity={0.55} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-meta-row">
          <div className="meta-block">
            <span>· 01 / hirnix studio</span>
            <strong>Прага · Чехія · 2026</strong>
          </div>
          <div className="meta-block" style={{ alignItems: 'flex-end', textAlign: 'right' }}>
            <span>↘ Для українського бізнесу</span>
            <strong>Сайт · GBP · локальне SEO</strong>
          </div>
        </div>

        <h1 className="hero-title">
          Сайт, <span className="ital">Google-профіль</span> і<br />
          <span className="hl">онлайн-присутність</span><br />
          для вашого бізнесу <span className="accent">в&nbsp;Чехії.</span>
        </h1>

        <div className="hero-grid">
          <div className="hero-lead-block">
            <p className="hero-lead">
              hirnix допомагає українським підприємцям у Чехії виглядати
              професійно онлайн, бути зрозумілими для місцевих клієнтів і
              отримувати більше заявок через сайт, Google та соціальні мережі.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary btn-lg">
                Обговорити мій бізнес
                <ArrowUpRight size={18} strokeWidth={2.2} />
              </a>
              <a href="#examples" className="btn btn-secondary btn-lg">
                Подивитися приклади
              </a>
            </div>
            <div className="hero-fineprint">
              <span><span className="bullet" />Перша консультація безкоштовна</span>
              <span><span className="bullet" />Українською мовою</span>
              <span><span className="bullet" />Без складної технічної мови</span>
            </div>
          </div>

          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="hero-mockup">
      <div className="mk-lang">
        <span className="lang-active">UA</span>
        <span className="lang-inactive">CZ</span>
      </div>

      <div className="mk-card mk-notif">
        <div className="mk-notif-icon">
          <Bell size={18} strokeWidth={2} />
        </div>
        <div className="mk-notif-body">
          <div className="mk-notif-title">Нова заявка</div>
          <div className="mk-notif-msg">Олена — манікюр у п'ятницю о 16:00</div>
        </div>
        <div className="mk-notif-time">щойно</div>
      </div>

      <div className="mk-card mk-browser" style={{ flex: 1 }}>
        <div className="mk-browser-bar">
          <span className="dot" style={{ background: '#E8807B' }} />
          <span className="dot" style={{ background: '#E8C77B' }} />
          <span className="dot" style={{ background: '#9AC7A0' }} />
          <div className="url">
            <span className="lock"><Lock size={10} strokeWidth={2.4} /></span>
            studio-mariia.cz
          </div>
        </div>
        <div className="mk-browser-body">
          <div className="mk-site-head">
            <div className="mk-site-logo">studio mariia<span className="dot" /></div>
            <div className="mk-site-nav">
              <span>Послуги</span>
              <span>Майстри</span>
              <span>Контакти</span>
            </div>
          </div>
          <div className="mk-site-hero">
            Краса і догляд<br /><span className="accent">у самому центрі Праги</span>
          </div>
          <div className="mk-site-lead">
            Манікюр, брови, макіяж · працюємо українською та чеською.
          </div>
          <div className="mk-cta-row">
            <span className="mk-mini-btn">Записатися</span>
            <span className="mk-mini-btn ghost">Прайс</span>
          </div>
          <div className="mk-gallery">
            <div /><div /><div />
          </div>
        </div>
      </div>

      <div className="mk-card mk-gbp">
        <div className="mk-gbp-header">
          <div className="mk-gbp-avatar">SM</div>
          <div>
            <div className="mk-gbp-title">Studio Mariia · Praha 2</div>
            <div className="mk-gbp-rating">
              <span className="stars">★★★★★</span>
              <span style={{ color: 'var(--text-muted)' }}>4.9 · 87 відгуків</span>
            </div>
          </div>
        </div>
        <div className="mk-gbp-actions">
          <div className="mk-gbp-action"><Phone size={12} strokeWidth={2} />Зв'язок</div>
          <div className="mk-gbp-action"><Navigation size={12} strokeWidth={2} />Маршрут</div>
          <div className="mk-gbp-action"><Globe size={12} strokeWidth={2} />Сайт</div>
        </div>
      </div>
    </div>
  );
}

interface MarqueeProps {
  items: string[];
  dark?: boolean;
  separator?: 'cross' | 'plus';
}

export function Marquee({ items, dark, separator = 'cross' }: MarqueeProps) {
  const star = (
    <svg className="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5Z" fill="currentColor" />
    </svg>
  );
  const plus = (
    <svg className="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
  const sep = separator === 'plus' ? plus : star;
  const list = [...items, ...items, ...items];

  return (
    <div className={`marquee${dark ? ' dark' : ''}`}>
      <div className="marquee-track">
        {list.map((it, i) => (
          <span key={i} className="marquee-item">
            {it.includes('*ital*') ? (
              <span>
                {it.split('*ital*')[0]}
                <span className="ital">{it.split('*ital*')[1]}</span>
                {it.split('*ital*')[2] || ''}
              </span>
            ) : (
              <span>{it}</span>
            )}
            {sep}
          </span>
        ))}
      </div>
    </div>
  );
}
