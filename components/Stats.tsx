const stats = [
  {
    label: '01 / Орієнтовний запуск',
    value: '10',
    accent: 'днів',
    desc: 'Перша версія сайту, готова показувати клієнтам.',
  },
  {
    label: '02 / Мови',
    value: '2',
    accent: 'UA + CZ',
    desc: 'Один бізнес — два ринки. Українські та чеські клієнти.',
  },
  {
    label: '03 / Базові канали',
    value: '4',
    accent: 'разом',
    desc: 'Сайт, Google Business, SEO, аналітика — як єдина система.',
  },
  {
    label: '04 / Відповідь у месенджері',
    value: '24',
    accent: 'години',
    desc: 'Будні дні. Без чат-ботів і автоматичних відповідей.',
  },
];

export function Stats() {
  return (
    <section className="section section-dark" id="results">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow on-dark"><span className="dot" />Що ви отримаєте</span>
            <h2 className="section-label" style={{ marginTop: 16, color: 'var(--background)' }}>
              Зрозуміла<br />
              <span className="glue">онлайн-присутність,</span><br />
              <span style={{ color: 'var(--brand-soft)' }}>яку можна показувати.</span>
            </h2>
          </div>
          <p className="lead" style={{ color: 'rgba(250,250,247,0.65)' }}>
            Після запуску у вас буде сайт, який можна надсилати клієнтам,
            Google-картка, яку легко знайти, і чеська версія — для місцевого ринку.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-cell">
              <span className="stat-label">{s.label}</span>
              <h3 className="stat-value">
                <span>{s.value}</span>
                <span className="accent">{s.accent}</span>
              </h3>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
