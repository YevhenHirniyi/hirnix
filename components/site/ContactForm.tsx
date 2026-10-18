'use client';

import { useEffect, useId, useRef, useState } from 'react';
import PhoneInput, { isValidPhoneNumber, type Country } from 'react-phone-number-input';
import { ArrowUpRight, Check, ChevronDown, Loader2, RotateCcw } from 'lucide-react';
import contacts, { MESSENGERS } from '@/config/contacts';
import type { SiteCopy } from '@/config/site/copy';

type Field = 'name' | 'phone' | 'email' | 'contact';

interface Props {
  t: SiteCopy['common']['form'];
  optionalLabel: string;
  locale: string;
  demoHref: string;
  privacyHref: string;
  /** Page id from the route map (e.g. 'P01'), sent as request context. */
  page: string;
  /** What the visitor is asking for: 'connect' | 'quote'. */
  intent: 'connect' | 'quote';
  submitLabel: string;
  /** Show the "Формат роботи" question (conditions page only, where it helps prepare the offer). */
  askFormat?: boolean;
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

function newRequestId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function ContactForm({ t, optionalLabel, locale, demoHref, privacyHref, page, intent, submitLabel, askFormat = false }: Props) {
  const uid = useId();
  const [name, setName] = useState('');
  // E.164 value from the country-code picker (same widget as the old landing form).
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [format, setFormat] = useState('');
  const [business, setBusiness] = useState('');
  const [link, setLink] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | 'sent'>('idle');

  // Kept across retries so a repeated submit of the same data is recognised
  // server-side as one lead (F03); reset only after a confirmed success.
  const requestId = useRef<string>('');
  // Which CTA brought the visitor to the form, and allowed campaign params —
  // so they never have to re-explain where they came from.
  const cta = useRef<string>('');
  const utm = useRef<Record<string, string>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const v = params.get(key);
      if (v) utm.current[key] = v.slice(0, 200);
    }
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cta]');
      if (el?.dataset.cta) cta.current = el.dataset.cta;
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus();
  }, [status]);

  const ids = {
    name: `${uid}-name`,
    nameErr: `${uid}-name-err`,
    phone: `${uid}-phone`,
    phoneErr: `${uid}-phone-err`,
    email: `${uid}-email`,
    emailErr: `${uid}-email-err`,
    contactHint: `${uid}-contact-hint`,
    contactErr: `${uid}-contact-err`,
    format: `${uid}-format`,
    details: `${uid}-details`,
  };

  // Both fields are offered; one valid contact is enough to submit.
  const validate = (): Partial<Record<Field, string>> => {
    const next: Partial<Record<Field, string>> = {};
    if (!name.trim()) next.name = t.nameRequired;
    if (phone && !isValidPhoneNumber(phone)) next.phone = t.phoneInvalid;
    if (email.trim() && !isEmail(email)) next.email = t.emailInvalid;
    if (!phone && !email.trim()) next.contact = t.contactRequired;
    return next;
  };

  const clearError = (...fields: Field[]) =>
    setErrors((e) => (fields.some((f) => e[f]) ? { ...e, ...Object.fromEntries(fields.map((f) => [f, undefined])) } : e));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const found = validate();
    setErrors(found);
    if (found.name) { nameRef.current?.focus(); return; }
    if (found.phone || found.contact) { document.getElementById(ids.phone)?.focus(); return; }
    if (found.email) { emailRef.current?.focus(); return; }

    if (!requestId.current) requestId.current = newRequestId();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestId: requestId.current,
          name,
          phone: phone ?? '',
          email,
          format: askFormat ? format : undefined,
          business,
          link,
          comment,
          intent,
          context: { page, cta: cta.current, locale, ...utm.current },
        }),
      });
      const data = await res.json().catch(() => null);
      // Success is shown only once the server confirms it accepted the lead (F04).
      if (!res.ok || !data?.ok) throw new Error('not accepted');
      requestId.current = '';
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="cf-success" ref={successRef} tabIndex={-1} role="status">
        <div className="cf-success-icon"><Check size={20} strokeWidth={2.5} aria-hidden /></div>
        <h3>{t.successTitle}</h3>
        <p>{t.successBody}</p>
        <p className="cf-success-meta">
          {t.successContacts}: <strong>{[phone, email.trim()].filter(Boolean).join(' · ')}</strong>
        </p>
        <p className="cf-success-next">
          {t.successNext}{' '}
          <a href={demoHref}>{t.successNextLink}</a>
        </p>
      </div>
    );
  }

  const sending = status === 'sending';

  return (
    <form className="cf" onSubmit={onSubmit} noValidate aria-busy={sending}>
      <div className="cf-field">
        <label htmlFor={ids.name}>{t.nameLabel}</label>
        <input
          ref={nameRef}
          id={ids.name}
          type="text"
          autoComplete="name"
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => { setName(e.target.value); clearError('name'); }}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? ids.nameErr : undefined}
          required
        />
        {errors.name && <p className="cf-error" id={ids.nameErr}>{errors.name}</p>}
      </div>

      <div className="cf-pair">
        <div className="cf-field">
          <label htmlFor={ids.phone}>{t.phoneLabel}</label>
          <PhoneInput
            id={ids.phone}
            defaultCountry={t.phoneCountry ? (t.phoneCountry as Country) : undefined}
            international
            autoComplete="tel"
            value={phone}
            onChange={(v) => { setPhone(v); clearError('phone', 'contact'); }}
            aria-invalid={!!(errors.phone || errors.contact)}
            aria-describedby={[errors.phone && ids.phoneErr, errors.contact ? ids.contactErr : ids.contactHint].filter(Boolean).join(' ') || undefined}
          />
          {errors.phone && <p className="cf-error" id={ids.phoneErr}>{errors.phone}</p>}
        </div>

        <div className="cf-field">
          <label htmlFor={ids.email}>{t.emailLabel}</label>
          <input
            ref={emailRef}
            id={ids.email}
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="off"
            spellCheck={false}
            placeholder={t.emailPlaceholder}
            value={email}
            onChange={(e) => { setEmail(e.target.value); clearError('email', 'contact'); }}
            aria-invalid={!!(errors.email || errors.contact)}
            aria-describedby={[errors.email && ids.emailErr, errors.contact ? ids.contactErr : ids.contactHint].filter(Boolean).join(' ')}
          />
          {errors.email && <p className="cf-error" id={ids.emailErr}>{errors.email}</p>}
        </div>
      </div>
      {errors.contact
        ? <p className="cf-error cf-pair-note" id={ids.contactErr}>{errors.contact}</p>
        : <p className="cf-hint cf-pair-note" id={ids.contactHint}>{t.contactHint}</p>}

      {askFormat && (
        <div className="cf-field">
          <label htmlFor={ids.format}>{t.formatLabel} <span className="cf-optional">— {optionalLabel}</span></label>
          <div className="cf-select">
            <select id={ids.format} value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="">—</option>
              {t.formatOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <ChevronDown size={16} aria-hidden />
          </div>
        </div>
      )}

      <details className="cf-details" id={ids.details}>
        <summary>{t.detailsToggle}</summary>
        <div className="cf-details-body">
          <div className="cf-field">
            <label htmlFor={`${uid}-biz`}>{t.businessLabel}</label>
            <input id={`${uid}-biz`} type="text" autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)} />
          </div>
          <div className="cf-field">
            <label htmlFor={`${uid}-link`}>{t.linkLabel}</label>
            <input id={`${uid}-link`} type="text" inputMode="url" autoCapitalize="off" spellCheck={false} placeholder={t.linkPlaceholder} value={link} onChange={(e) => setLink(e.target.value)} />
          </div>
          <div className="cf-field">
            <label htmlFor={`${uid}-comment`}>{t.commentLabel}</label>
            <textarea id={`${uid}-comment`} rows={3} placeholder={t.commentPlaceholder} value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
        </div>
      </details>

      {status === 'error' && (
        <div className="cf-alert" role="alert">
          <strong>{t.errorTitle}</strong>
          <p>
            {t.errorBody}{' '}
            {MESSENGERS.map((m) => (
              <span key={m.id}>
                <a href={m.href} target="_blank" rel="noopener noreferrer">{m.label}</a>{' · '}
              </span>
            ))}
            <a href={contacts.email}>{contacts.emailDisplay}</a>
          </p>
        </div>
      )}

      <button type="submit" className="btn btn-primary btn-lg cf-submit" disabled={sending}>
        {sending ? (
          <><Loader2 size={18} className="cf-spin" aria-hidden />{t.sending}</>
        ) : status === 'error' ? (
          <><RotateCcw size={16} aria-hidden />{t.retry}</>
        ) : (
          <>{submitLabel}<ArrowUpRight size={18} strokeWidth={2.2} aria-hidden /></>
        )}
      </button>

      <p className="cf-privacy">
        {t.privacyNote} <a href={privacyHref}>{t.privacyLink}</a>
      </p>
    </form>
  );
}
