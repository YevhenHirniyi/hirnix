import { ArrowUpRight, Mail } from 'lucide-react';
import { Logo } from './Header';
import contacts from '@/config/contacts';
import type { FooterT } from '@/config/i18n/types';

interface Props { t: FooterT }

export function Footer({ t }: Props) {
  return (
    <footer className="hx-footer">
      <div className="container">
        <div className="hx-footer-grid">
          <div className="hx-footer-brand">
            <Logo size={22} />
            <p style={{ marginTop: 14 }}>{t.brand}</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a
                href={contacts.email}
                aria-label="Email"
                style={{
                  width: 38, height: 38, borderRadius: 999,
                  border: '1px solid var(--border-light)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-primary)',
                }}
              >
                <Mail size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="hx-footer-col">
            <h4>{t.servicesHeading}</h4>
            <ul>
              {t.servicesList.map((item) => (
                <li key={item}>
                  <a href="#services">
                    {item} <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hx-footer-col">
            <h4>{t.studioHeading}</h4>
            <ul>
              {t.studioLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="hx-footer-col">
            <h4>{t.contactsHeading}</h4>
            <ul>
              <li><a href={contacts.email}>{contacts.emailDisplay}</a></li>
              <li>
                <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
                  {t.telegramLabel}
                </a>
              </li>
              <li>
                <a href={contacts.whatsapp} target="_blank" rel="noopener noreferrer">
                  {t.whatsappLabel}
                </a>
              </li>
              <li><span>{t.locationLabel}</span></li>
            </ul>
          </div>
        </div>

        <div className="hx-footer-bottom">
          <div>© 2026 hirnix. Усі права захищені.</div>
          <div className="legal">
            <a href="/privacy">Privacy</a>
            <a href="/cookies">Cookies</a>
            <a href="/impressum">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
