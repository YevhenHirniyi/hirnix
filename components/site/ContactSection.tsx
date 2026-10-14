import { Mail, MessageCircle } from 'lucide-react';
import contacts, { MESSENGERS } from '@/config/contacts';
import { ContactForm } from './ContactForm';

interface Props {
  page: string;
  intent: 'connect' | 'quote';
  eyebrow: string;
  title: string;
  lead: string;
  submitLabel: string;
  askFormat?: boolean;
}

/** Closing contact block shared by every page; `#contact` is the target of all "connect" CTAs. */
export function ContactSection({ page, intent, eyebrow, title, lead, submitLabel, askFormat }: Props) {
  return (
    <section className="sx sx-contact" id="contact" aria-labelledby="contact-title">
      {/* Old single-page anchor kept so existing #cta links still land here. */}
      <span id="cta" className="sx-anchor" aria-hidden />
      <div className="container">
        <div className="sx-contact-shell">
          <div className="sx-contact-copy">
            <span className="eyebrow on-dark"><span className="dot" />{eyebrow}</span>
            <h2 id="contact-title">{title}</h2>
            <p>{lead}</p>
            <div className="sx-direct">
              <p className="sx-direct-label">Або напишіть напряму · {contacts.phoneDisplay}</p>
              {MESSENGERS.map((m) => (
                <a key={m.id} href={m.href} target="_blank" rel="noopener noreferrer" data-channel={m.id}>
                  <MessageCircle size={16} aria-hidden /> {m.label}
                </a>
              ))}
              <a href={contacts.email} data-channel="email">
                <Mail size={16} aria-hidden /> {contacts.emailDisplay}
              </a>
            </div>
          </div>
          <div className="sx-contact-card">
            <ContactForm page={page} intent={intent} submitLabel={submitLabel} askFormat={askFormat} />
          </div>
        </div>
      </div>
    </section>
  );
}
