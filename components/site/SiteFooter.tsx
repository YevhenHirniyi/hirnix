import { Logo } from '@/components/Header';
import contacts, { MESSENGERS } from '@/config/contacts';
import { common } from '@/config/site/uk/common';
import { FEATURE_KEYS, LOGIN_URL, ROUTES, SEGMENT_KEYS } from '@/config/site/routes';

const t = common.footer;

export function SiteFooter() {
  return (
    <footer className="hx-footer">
      <div className="container">
        <div className="hx-footer-grid">
          <div className="hx-footer-brand">
            <Logo size={22} href={ROUTES.home.path} />
            <p style={{ marginTop: 14 }}>{t.brand}</p>
          </div>

          <nav className="hx-footer-col" aria-label={t.featuresHeading}>
            <h2 className="sf-heading">{t.featuresHeading}</h2>
            <ul>
              {FEATURE_KEYS.map((k) => (
                <li key={k}><a href={ROUTES[k].path}>{ROUTES[k].label}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="hx-footer-col" aria-label={t.companyHeading}>
            <h2 className="sf-heading">{t.companyHeading}</h2>
            <ul>
              {SEGMENT_KEYS.map((k) => (
                <li key={k}><a href={ROUTES[k].path}>{ROUTES[k].label}</a></li>
              ))}
              <li><a href={ROUTES.demo.path}>{ROUTES.demo.label}</a></li>
              <li><a href={ROUTES.conditions.path}>{ROUTES.conditions.label}</a></li>
              <li><a href={ROUTES.contact.path}>{ROUTES.contact.label}</a></li>
              <li><a href={LOGIN_URL}>Увійти в кабінет</a></li>
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
            <a href={ROUTES.privacy.path}>{ROUTES.privacy.label}</a>
            <a href={ROUTES.cookies.path}>{ROUTES.cookies.label}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
