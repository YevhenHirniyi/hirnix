import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Безкоштовна консультація',
    body: 'Розбираємо ваш бізнес, послуги, клієнтів, поточну ситуацію і цілі.',
    when: '20–30 хв · Telegram або відеодзвінок',
  },
  {
    num: '02',
    title: 'Пропозиція та прорахунок',
    body: 'Готуємо індивідуальний план: етапи, терміни та фінальна вартість.',
    when: 'Після консультації',
  },
  {
    num: '03',
    title: 'Матеріали та старт',
    body: 'Ви надсилаєте фото, тексти, послуги. Немає матеріалів — допомагаємо зібрати структуру.',
    when: 'День 1–2',
  },
  {
    num: '04',
    title: 'Дизайн і перша версія',
    body: 'Створюємо перший варіант сайту. Ви переглядаєте, даєте коментарі, ми вносимо правки.',
    when: 'День 3–6',
  },
  {
    num: '05',
    title: 'SEO, Google і техніка',
    body: 'Базове SEO, Google Business Profile, аналітика, форми заявок, мобільна адаптація.',
    when: 'День 7–9',
  },
  {
    num: '06',
    title: 'Запуск і доступи',
    body: 'Перевіряємо сайт, підключаємо домен, передаємо доступи та інструкцію.',
    when: 'День 10',
  },
];

export function Process() {
  return (
    <section className="section section-soft" id="process">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />Процес</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              Чітко, передбачувано,<br />
              <span className="glue">без зайвого</span>{' '}
              <span style={{ color: 'var(--brand-primary)' }}>хаосу.</span>
            </h2>
          </div>
          <p className="lead">
            Шість зрозумілих кроків від першої розмови до запуску.
            Ми завжди скажемо, де ми зараз, що відбувається далі і коли чекати наступний крок.
          </p>
        </div>

        <div className="process-shell">
          {steps.map((s, i) => (
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
