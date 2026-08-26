'use client';

import { useState } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { Check, ArrowUpRight, Loader2 } from 'lucide-react';
import type { DemoFormT } from '@/config/i18n/types';

interface Props { t: DemoFormT; source: string }

export function DemoLeadForm({ t, source }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (phone && !isValidPhoneNumber(phone)) {
      setError(t.errorPhoneInvalid);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone: phone || '', source }),
      });

      if (!res.ok) throw new Error('server');
      setSent(true);
    } catch {
      setError(t.errorMsg);
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
    <>
      <span className="eyebrow on-dark" style={{ marginBottom: 20, display: 'inline-flex' }}><span className="dot" />{t.eyebrow}</span>

      <form className="hx-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="lf-name">{t.nameLabel}</label>
          <input
            id="lf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            autoComplete="name"
          />
        </div>

        <div className="form-row">
          <label>{t.phoneLabel}</label>
          <PhoneInput
            defaultCountry="UA"
            value={phone}
            onChange={setPhone}
            placeholder={t.phonePlaceholder}
            international
          />
        </div>

        <div className="form-row">
          <label htmlFor="lf-email">{t.emailLabel}</label>
          <input
            id="lf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@example.com"
            autoComplete="email"
          />
        </div>

        {error && (
          <p style={{ fontSize: 13, color: 'var(--color-error-on-dark)', margin: 0 }}>{error}</p>
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
    </>
  );
}
