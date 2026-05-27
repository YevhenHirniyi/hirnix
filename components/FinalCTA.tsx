import { Send, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="final-cta" id="cta">
      <div className="container">
        <div className="final-cta-shell">
          <div className="final-cta-grid">
            <div>
              <span className="eyebrow on-dark"><span className="dot" />Безкоштовна консультація</span>
              <h2 style={{ marginTop: 16 }}>
                Готові зробити<br />
                ваш бізнес<br />
                <span className="ital">видимим </span><span className="accent">онлайн?</span>
              </h2>
              <p>
                Розкажіть про свій бізнес — ми підкажемо, який формат сайту
                та онлайн-присутності підійде саме вам. Без зобов'язань.
              </p>
              <div className="actions">
                <a href="#" className="btn btn-primary btn-lg">
                  Написати в Telegram
                  <Send size={18} strokeWidth={2} />
                </a>
                <a href="mailto:hello@hirnix.cz" className="btn btn-light-on-dark btn-lg">
                  Надіслати email
                </a>
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 13, color: 'rgba(250,250,247,0.55)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand-primary)' }} />
                  Відповідаємо протягом кількох годин
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand-primary)' }} />
                  Працюємо з бізнесами по всій Чехії
                </span>
              </div>
            </div>

            <div className="contact-box">
              {[
                { icon: <Mail size={16} strokeWidth={1.8} />, label: 'Email', val: 'hello@hirnix.cz' },
                { icon: <Send size={16} strokeWidth={1.8} />, label: 'Telegram', val: '@hirnix_studio' },
                { icon: <MapPin size={16} strokeWidth={1.8} />, label: 'Локація', val: 'Прага, Чехія' },
                { icon: <Clock size={16} strokeWidth={1.8} />, label: 'Графік', val: 'Пн–Пт · 09:00–19:00 CET' },
              ].map(({ icon, label, val }) => (
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
