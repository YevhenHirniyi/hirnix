'use client';

import { useState } from 'react';
import { Check, ChevronDown, ArrowUpRight } from 'lucide-react';

const factors = [
  'Кількість сторінок',
  'Кількість мов',
  'Обсяг текстів',
  'Наявність фото',
  'Google Business Profile',
  'SEO-налаштування',
  'Інтеграції та форми',
  'Терміновість запуску',
];

const bizOptions = [
  'Салон краси / манікюр',
  'Ресторан / кафе',
  'Будівництво / ремонт',
  'Клінінг',
  'Фото / відео',
  'Юридичні послуги',
  'Доставка / логістика',
  'Репетитор / курси',
  'Автосервіс',
  'Інший локальний сервіс',
];

function ContactForm() {
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  if (sent) {
    return (
      <div className="form-sent">
        <div className="form-sent-icon">
          <Check size={18} strokeWidth={2.5} />
        </div>
        <div>
          <div className="form-sent-title">Дякуємо, {name || 'друже'}!</div>
          <p className="form-sent-msg">
            Отримали вашу заявку. Напишемо в Telegram або на email протягом кількох годин.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="hx-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="cf-name">Ім'я та прізвище</label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Олена Коваленко"
          autoComplete="name"
        />
      </div>

      <div className="form-row">
        <label htmlFor="cf-biz">Тип бізнесу</label>
        <div className="select-wrap">
          <select
            id="cf-biz"
            required
            value={biz}
            onChange={(e) => setBiz(e.target.value)}
          >
            <option value="">Оберіть напрям…</option>
            {bizOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <ChevronDown size={16} strokeWidth={2} className="select-chevron" />
        </div>
      </div>

      <div className="form-row form-row-2">
        <div>
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@example.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="cf-phone">Номер телефону</label>
          <input
            id="cf-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+420 …"
            autoComplete="tel"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-md"
        style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}
      >
        Отримати прорахунок
        <ArrowUpRight size={16} strokeWidth={2.2} />
      </button>
    </form>
  );
}

const pillStyle = (active: boolean): React.CSSProperties => ({
  padding: '8px 14px',
  borderRadius: 999,
  border: '1px solid ' + (active ? 'var(--brand-primary)' : 'var(--border-light)'),
  background: active ? 'var(--brand-soft)' : 'var(--surface)',
  color: active ? 'var(--brand-dark)' : 'var(--text-primary)',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'background 150ms, border-color 150ms, color 150ms',
});

const groupLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  display: 'block',
  marginBottom: 8,
};

export function Calc() {
  const [pages, setPages] = useState('одна-сторінка');
  const [langs, setLangs] = useState('ua-cz');
  const [scope, setScope] = useState('full');

  return (
    <section className="section section-soft" id="calc">
      <div className="container">
        <div className="calc-shell">
          <div>
            <span className="eyebrow"><span className="dot" />Прорахунок</span>
            <h2 style={{ marginTop: 16 }}>
              Вартість залежить<br />
              <span className="ital">від задачі,</span><br />
              обсягу та цілей.
            </h2>
            <p className="lead">
              Ми не показуємо фіксовані ціни — кожен бізнес має різні потреби.
              Після короткої консультації підготуємо зрозумілий прорахунок саме
              під вашу ситуацію.
            </p>
            <div className="calc-factors mt-32">
              {factors.map((f, i) => (
                <div key={i} className="calc-factor">
                  <Check size={14} strokeWidth={2.4} style={{ color: 'var(--brand-primary)', flexShrink: 0, marginTop: 2 }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="calc-summary">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <span className="eyebrow"><span className="dot" />Залишити заявку</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>~ 2 хв</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '2px 0 4px', color: 'var(--text-primary)' }}>
              Розкажіть про <span className="ital" style={{ fontFamily: '"Times New Roman", serif', fontWeight: 400 }}>бізнес.</span>
            </h3>

            <div>
              <label style={groupLabel}>Формат</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {[
                  { v: 'одна-сторінка', l: 'Лендинг' },
                  { v: 'кілька-сторінок', l: '3–5 сторінок' },
                  { v: 'багатосторінковий', l: 'Багато сторінок' },
                ].map((o) => (
                  <button key={o.v} type="button" onClick={() => setPages(o.v)} style={pillStyle(pages === o.v)}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={groupLabel}>Мови</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {[
                  { v: 'ua', l: 'UA' },
                  { v: 'ua-cz', l: 'UA + CZ' },
                  { v: 'ua-cz-en', l: 'UA + CZ + EN' },
                ].map((o) => (
                  <button key={o.v} type="button" onClick={() => setLangs(o.v)} style={pillStyle(langs === o.v)}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={groupLabel}>Обсяг</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {[
                  { v: 'site', l: 'Тільки сайт' },
                  { v: 'full', l: '+ Google + SEO' },
                  { v: 'full-ads', l: '+ реклама' },
                ].map((o) => (
                  <button key={o.v} type="button" onClick={() => setScope(o.v)} style={pillStyle(scope === o.v)}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 18, marginTop: 4 }}>
              <ContactForm />
            </div>

            <p className="footnote">
              Натискаючи кнопку, ви погоджуєтесь з обробкою даних. Без спаму — лише відповідь по справі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
