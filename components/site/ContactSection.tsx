import { Mail, MessageCircle } from 'lucide-react';
import contacts, { MESSENGERS } from '@/config/contacts';
import { getCopy } from '@/config/site/copy';
import { localePath, type Locale } from '@/config/site/i18n';
import { ROUTES } from '@/config/site/routes';
import { ContactForm } from './ContactForm';

interface Props {
  locale: Locale;
  page: string;
  intent: 'connect' | 'quote';
  eyebrow: string;
  title: string;
  lead: string;
  submitLabel: string;
}

/**
 * Closing contact block shared by every page; `#contact` is the target of all "connect" CTAs.
 * Direct channels come after the form in the DOM so on mobile they sit below it;
 * on desktop the grid places them under the copy.
 */
export function ContactSection({ locale, page, intent, eyebrow, title, lead, submitLabel }: Props) {
  const c = getCopy(locale).common;
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
          </div>
          <div className="sx-contact-card">
            <ContactForm
              t={c.form}
              optionalLabel={c.ui.optional}
              locale={locale}
              demoHref={localePath(locale, ROUTES.demo.path)}
              privacyHref={ROUTES.privacy.path}
              page={page}
              intent={intent}
              submitLabel={submitLabel}
            />
          </div>
          <div className="sx-direct">
            <p className="sx-direct-label">{c.ui.directLabel}<span className="sx-direct-sep"> · </span><span className="sx-direct-phone">{contacts.phoneDisplay}</span></p>
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
      </div>
    </section>
  );
}
