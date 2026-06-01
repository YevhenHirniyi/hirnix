'use client';

import { useState } from 'react';
import { Check, ChevronDown, ArrowUpRight, Loader2 } from 'lucide-react';
import type { CalcT } from '@/config/i18n/types';

interface ContactFormProps {
  t: CalcT;
  pages: string;
  langs: string;
  scope: string;
}

function ContactForm({ t, pages, langs, scope }: ContactFormProps) {
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, biz, email, phone, pages, langs, scope }),
      });

      if (!res.ok) throw new Error('server');
      setSent(true);
    } catch {
      setError('Щось пішло не так. Напишіть нам у Telegram.');
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="form-sent">
        <div className="form-sent-icon">
          <Check size={18} strokeWidth={2.5} />
        </div>
        <div>
          <div className="form-sent-title">{t.sentTitlePrefix}{name || t.sentTitleFallback}!</div>
          <p className="form-sent-msg">{t.sentMsg}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="hx-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="cf-name">{t.nameLabel}</label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.namePlaceholder}
          autoComplete="name"
        />
      </div>

      <div className="form-row">
        <label htmlFor="cf-biz">{t.bizLabel}</label>
        <div className="select-wrap">
          <select
            id="cf-biz"
            required
            value={biz}
            onChange={(e) => setBiz(e.target.value)}
          >
            <option value="">{t.bizPlaceholder}</option>
            {t.bizOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <ChevronDown size={16} strokeWidth={2} className="select-chevron" />
        </div>
      </div>

      <div className="form-row form-row-2">
        <div>
          <label htmlFor="cf-email">{t.emailLabel}</label>
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
          <label htmlFor="cf-phone">{t.phoneLabel}</label>
          <input
            id="cf-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.phonePlaceholder}
            autoComplete="tel"
          />
        </div>
      </div>

      {error && (
        <p style={{ fontSize: 13, color: 'var(--brand-primary)', margin: 0 }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-md"
        style={{ width: '100%', justifyContent: 'center', marginTop: 6, opacity: loading ? 0.7 : 1 }}
      >
        {loading
          ? <Loader2 size={16} strokeWidth={2} style={{ animation: 'spin 1s linear infinite' }} />
          : t.submitLabel}
        {!loading && <ArrowUpRight size={16} strokeWidth={2.2} />}
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

interface Props { t: CalcT }

export function Calc({ t }: Props) {
  const [pages, setPages] = useState(t.formatOptions[0].v);
  const [langs, setLangs] = useState(t.langOptions[1].v);
  const [scope, setScope] = useState(t.scopeOptions[1].v);

  return (
    <section className="section section-soft" id="calc">
      <div className="container">
        <div className="calc-shell">
          <div>
            <span className="eyebrow"><span className="dot" />{t.eyebrow}</span>
            <h2 style={{ marginTop: 16 }}>
              {t.h2.pre}<br />
              <span className="ital">{t.h2.italic}</span><br />
              {t.h2.post}
            </h2>
            <div className="calc-factors mt-32">
              {t.factors.map((f, i) => (
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
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>{t.timeLabel}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, margin: '2px 0 4px', color: 'var(--text-primary)' }}>
              <span className="ital" style={{ fontFamily: '"Times New Roman", serif', fontWeight: 400 }}>{t.formHeading}</span>
            </h3>

            <div>
              <label style={groupLabel}>{t.groupFormat}</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {t.formatOptions.map((o) => (
                  <button key={o.v} type="button" onClick={() => setPages(o.v)} style={pillStyle(pages === o.v)}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={groupLabel}>{t.groupLangs}</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {t.langOptions.map((o) => (
                  <button key={o.v} type="button" onClick={() => setLangs(o.v)} style={pillStyle(langs === o.v)}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={groupLabel}>{t.groupScope}</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {t.scopeOptions.map((o) => (
                  <button key={o.v} type="button" onClick={() => setScope(o.v)} style={pillStyle(scope === o.v)}>
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 18, marginTop: 4 }}>
              <ContactForm t={t} pages={pages} langs={langs} scope={scope} />
            </div>

            <p className="footnote">{t.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
