import { ArrowUpRight, Send, Camera, Briefcase, Mail } from 'lucide-react';
import { Logo } from './Header';

export function Footer() {
  return (
    <footer className="hx-footer">
      <div className="container">
        <div className="hx-footer-big" aria-hidden="true">
          hirnix<span className="dot" />
        </div>
        <div className="hx-footer-grid">
          <div className="hx-footer-brand">
            <Logo size={22} />
            <p style={{ marginTop: 14 }}>
              Сайти, Google Business Profile та локальне SEO для українських
              підприємців у Чехії.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: <Send size={16} strokeWidth={1.8} />, label: 'Telegram', href: '#' },
                { icon: <Camera size={16} strokeWidth={1.8} />, label: 'Instagram', href: '#' },
                { icon: <Briefcase size={16} strokeWidth={1.8} />, label: 'LinkedIn', href: '#' },
                { icon: <Mail size={16} strokeWidth={1.8} />, label: 'Email', href: 'mailto:hello@hirnix.cz' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: 999,
                    border: '1px solid var(--border-light)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-primary)',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="hx-footer-col">
            <h4>Що ми робимо</h4>
            <ul>
              {[
                'Сайт або лендинг',
                'Онлайн-присутність',
                'Підтримка та розвиток',
                'Google Business Profile',
                'Локальне SEO',
              ].map((item) => (
                <li key={item}>
                  <a href="#services">
                    {item} <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hx-footer-col">
            <h4>Студія</h4>
            <ul>
              <li><a href="#for-whom">Для кого</a></li>
              <li><a href="#process">Як працюємо</a></li>
              <li><a href="#examples">Приклади</a></li>
              <li><a href="#about">Про hirnix</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="hx-footer-col">
            <h4>Контакти</h4>
            <ul>
              <li><a href="mailto:hello@hirnix.cz">hello@hirnix.cz</a></li>
              <li><a href="#">Telegram · @hirnix</a></li>
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Прага, Чехія</a></li>
            </ul>
          </div>
        </div>

        <div className="hx-footer-bottom">
          <div>© 2026 hirnix. Усі права захищені.</div>
          <div className="legal">
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
