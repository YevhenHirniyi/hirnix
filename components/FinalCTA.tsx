import { Send, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import contacts from '@/config/contacts';
import type { FinalCTAT } from '@/config/i18n/types';

interface Props { t: FinalCTAT }

export function FinalCTA({ t }: Props) {
  const contactRows = [
    { icon: <Mail size={16} strokeWidth={1.8} />, label: t.labels.email, val: contacts.emailDisplay },
    { icon: <Send size={16} strokeWidth={1.8} />, label: t.labels.telegram, val: '@hirnix_studio' },
    { icon: <MapPin size={16} strokeWidth={1.8} />, label: t.labels.location, val: t.values.location },
    { icon: <Clock size={16} strokeWidth={1.8} />, label: t.labels.schedule, val: t.values.schedule },
  ];

  return (
    <section className="final-cta" id="cta">
      <div className="container">
        <div className="final-cta-shell">
          <div className="final-cta-grid">
            <div>
              <span className="eyebrow on-dark"><span className="dot" />{t.eyebrow}</span>
              <h2 style={{ marginTop: 16 }}>
                {t.h2.pre}<br />
                <span className="ital">{t.h2.italic}</span>
                {t.h2.accent && <span className="accent">{t.h2.accent}</span>}
              </h2>
              <p>{t.lead}</p>
              <div className="actions">
                <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                  {t.cta1}
                  <Send size={18} strokeWidth={2} />
                </a>
                <a href={contacts.email} className="btn btn-light-on-dark btn-lg">
                  {t.cta2}
                </a>
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 13, color: 'rgba(250,250,247,0.55)' }}>
                {[t.note1, t.note2].map((note) => (
                  <span key={note} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand-primary)' }} />
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="contact-box">
              {contactRows.map(({ icon, label, val }) => (
                <div key={label} className="contact-row">
                  <div className="ico">{icon}</div>
                  <div>
                    <span className="label">{label}</span>
                    <span className="val">{val}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
