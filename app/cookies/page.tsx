import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { pageMetadata } from '@/config/seo';
import saasUk from '@/config/i18n/saas-uk';

export const metadata: Metadata = pageMetadata({
  path: '/cookies',
  locale: 'uk',
  title: 'Cookies',
  description:
    'Як hirnix використовує файли cookie: необхідні та аналітичні cookies, їх призначення і керування налаштуваннями у браузері.',
});

export default function CookiesPage() {
  return (
    <>
      <Header t={saasUk.header} langs={['uk', 'en']} anchorHome="/" />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Cookies
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>
            Чинна з 1 червня 2026 р.
          </p>

          <section>
            <h3>Що таке cookies?</h3>
            <p>
              Cookies — це невеликі текстові файли, які зберігаються у вашому браузері під час
              відвідування сайту. Вони допомагають сайту функціонувати та аналізувати трафік.
            </p>

            <h3>Які cookies ми використовуємо?</h3>

            <h4>Необхідні cookies</h4>
            <p>
              Забезпечують коректну роботу сайту. Не потребують вашої згоди і не можуть бути
              вимкнені. До них належать cookies для підтримки сесії та безпеки.
            </p>

            <h4>Аналітичні cookies</h4>
            <p>
              Ми використовуємо <strong>Google Analytics</strong> для аналізу анонімізованого
              трафіку — скільки людей відвідує сайт, звідки вони приходять і які сторінки
              переглядають. IP-адреси анонімізуються. Ці cookies активуються лише за вашої згоди.
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginTop: 8 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600 }}>Cookie</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600 }}>Термін</th>
                  <th style={{ textAlign: 'left', padding: '8px 0', fontWeight: 600 }}>Мета</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '8px 0' }}>_ga</td>
                  <td style={{ padding: '8px 0' }}>2 роки</td>
                  <td style={{ padding: '8px 0' }}>Google Analytics — розрізнення відвідувачів</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0' }}>_ga_*</td>
                  <td style={{ padding: '8px 0' }}>2 роки</td>
                  <td style={{ padding: '8px 0' }}>Google Analytics — збереження стану сесії</td>
                </tr>
              </tbody>
            </table>

            <h3>Управління cookies</h3>
            <p>
              Ви можете в будь-який момент змінити або відкликати згоду на cookies через
              налаштування браузера або звернувшись до нас за адресою{' '}
              <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>.
            </p>
            <p>
              Інструкції для популярних браузерів:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/uk/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/uk-ua/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            </ul>

            <h3>Більше інформації</h3>
            <p>
              Детальніше про обробку персональних даних — у нашій{' '}
              <a href="/privacy">Політиці конфіденційності</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer t={saasUk.footer} />
    </>
  );
}
