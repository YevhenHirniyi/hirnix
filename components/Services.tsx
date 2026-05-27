import { Check, ArrowUpRight } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';

const services = [
  {
    num: '01 / Базовий',
    title: 'Сайт або лендинг',
    desc: 'Для підприємців, яким потрібна професійна сторінка з послугами, фото, контактами та заявками.',
    items: [
      'Структура під ваш бізнес',
      'Дизайн у сучасному стилі',
      'Українська та чеська версія',
      'Опис послуг + портфоліо',
      'Контактна форма',
      'Telegram / WhatsApp / email',
      'Мобільна адаптація',
      'Базове підключення домену',
    ],
    cta: 'Обговорити сайт',
    featured: false,
  },
  {
    num: '02 / Найпопулярніший',
    title: 'Онлайн-присутність під ключ',
    desc: 'Для бізнесів, які хочуть не просто сайт, а повну основу для пошуку клієнтів онлайн.',
    items: [
      'Сайт або лендинг',
      'Google Business Profile',
      'Базове локальне SEO',
      'Google Analytics + Search Console',
      'Технічне SEO-налаштування',
      'Структура під заявки',
      'Допомога з текстами',
      'Інструкція після запуску',
    ],
    cta: 'Отримати прорахунок',
    featured: true,
  },
  {
    num: '03 / Розвиток',
    title: 'Підтримка та розвиток',
    desc: 'Для бізнесів, які вже мають сайт, але хочуть регулярно оновлювати його і розвиватися онлайн.',
    items: [
      'Оновлення сайту',
      'Додавання нових послуг',
      'Оновлення фото та текстів',
      'Базовий SEO-моніторинг',
      'Підтримка Google Business',
      'Щомісячний звіт',
      'Консультації щодо просування',
      'Підготовка до реклами',
    ],
    cta: 'Дізнатися більше',
    featured: false,
  },
];

export function Services() {
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
            <span className="eyebrow"><span className="dot" />Послуги</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              Формуємо рішення<br />
              <span className="glue">під ваш бізнес,</span> а не<br />
              продаємо <span style={{ color: 'var(--brand-primary)' }}>шаблон.</span>
            </h2>
          </div>
          <p className="lead">
            Кожен бізнес має різні потреби: комусь потрібен простий сайт-візитка,
            комусь — повна онлайн-присутність із Google, SEO та аналітикою. Тому
            спочатку вивчаємо вашу ситуацію, а потім пропонуємо індивідуальне рішення.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article
              key={i}
              className={`service-card${s.featured ? ' featured' : ''}`}
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
