import { Logo } from '@/components/Header';
import contacts, { MESSENGERS } from '@/config/contacts';
import { getCopy } from '@/config/site/copy';
import { localePath, type Locale } from '@/config/site/i18n';
import { FEATURE_KEYS, LOGIN_URL, ROUTES, SEGMENT_KEYS, type RouteKey } from '@/config/site/routes';

export function SiteFooter({ locale }: { locale: Locale }) {
  const c = getCopy(locale).common;
  const t = c.footer;
  const link = (k: RouteKey) => <a href={localePath(locale, ROUTES[k].path)}>{c.routes[k].label}</a>;

  return (
    <footer className="hx-footer">
      <div className="container">
        <div className="hx-footer-grid">
          <div className="hx-footer-brand">
            <Logo size={22} href={localePath(locale, '/')} />
            <p style={{ marginTop: 14 }}>{t.brand}</p>
          </div>

          <nav className="hx-footer-col" aria-label={t.featuresHeading}>
            <h2 className="sf-heading">{t.featuresHeading}</h2>
            <ul>
              {FEATURE_KEYS.map((k) => (
                <li key={k}>{link(k)}</li>
              ))}
            </ul>
          </nav>

          <nav className="hx-footer-col" aria-label={t.companyHeading}>
            <h2 className="sf-heading">{t.companyHeading}</h2>
            <ul>
              {SEGMENT_KEYS.map((k) => (
                <li key={k}>{link(k)}</li>
              ))}
              <li>{link('demo')}</li>
              <li>{link('conditions')}</li>
              <li>{link('contact')}</li>
              <li><a href={LOGIN_URL}>{c.ui.loginCabinet}</a></li>
            </ul>
          </nav>

          <div className="hx-footer-col">
            <h2 className="sf-heading">{t.contactsHeading}</h2>
            <ul>
              <li><span>{contacts.phoneDisplay}</span></li>
              {MESSENGERS.map((m) => (
                <li key={m.id}><a href={m.href} target="_blank" rel="noopener noreferrer">{m.label}</a></li>
              ))}
              <li><a href={contacts.email}>{contacts.emailDisplay}</a></li>
            </ul>
          </div>
        </div>

        <div className="hx-footer-bottom">
          <div>{t.copyright}</div>
          <div className="legal">
            {/* Legal pages exist in Ukrainian only for now. */}
            <a href={ROUTES.privacy.path}>{c.routes.privacy.label}</a>
            <a href={ROUTES.cookies.path}>{c.routes.cookies.label}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
