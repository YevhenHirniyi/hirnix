import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import saasUk from '@/config/i18n/saas-uk';

export const metadata: Metadata = {
  title: 'Політика конфіденційності | hirnix',
  description: 'Політика конфіденційності hirnix.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header t={saasUk.header} langs={['uk', 'en']} anchorHome="/" />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Політика конфіденційності
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>
            Чинна з 1 червня 2026 р. · Версія 1.0
          </p>

          <section>
            <h3>1. Хто ми</h3>
            <p>
              Ця Політика конфіденційності стосується сайту <strong>hirnix.studio</strong>, що
              належить та управляється hirnix studio (надалі — «ми», «hirnix»).
              Контактний email: <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>.
            </p>

            <h3>2. Які дані ми збираємо</h3>
            <p>Ми можемо збирати такі категорії персональних даних:</p>
            <ul>
              <li><strong>Контактні дані</strong> — ім&apos;я, email, номер телефону (якщо ви залишаєте заявку через форму).</li>
              <li><strong>Технічні дані</strong> — IP-адреса, тип браузера, операційна система, реферер, час відвідування (через аналітику).</li>
              <li><strong>Дані листування</strong> — повідомлення, надіслані через Telegram, WhatsApp або email.</li>
            </ul>

            <h3>3. Мета обробки даних</h3>
            <ul>
              <li>Відповідь на ваш запит або заявку.</li>
              <li>Підготовка пропозиції та комунікація щодо проєкту.</li>
              <li>Аналіз відвідуваності сайту для його покращення.</li>
            </ul>

            <h3>4. Правова підстава (GDPR)</h3>
            <p>
              Обробка ваших даних здійснюється на підставі:
            </p>
            <ul>
              <li>Виконання договору або підготовки до його укладення (ст. 6(1)(б) GDPR).</li>
              <li>Законного інтересу (аналітика, ст. 6(1)(f) GDPR).</li>
              <li>Вашої згоди (якщо ви дали згоду на cookies, ст. 6(1)(а) GDPR).</li>
            </ul>

            <h3>5. Кому ми передаємо дані</h3>
            <p>
              Ми не продаємо ваші дані третім особам. Дані можуть передаватися лише
              сервісам, необхідним для роботи сайту та комунікації (наприклад, хостинг,
              аналітика Google Analytics). Усі треті сторони діють відповідно до GDPR.
            </p>

            <h3>6. Зберігання даних</h3>
            <p>
              Контактні дані зберігаються протягом часу, необхідного для надання послуги,
              або до вашого запиту про видалення. Технічні дані (аналітика) — до 26 місяців.
            </p>

            <h3>7. Ваші права</h3>
            <p>Відповідно до GDPR ви маєте право:</p>
            <ul>
              <li>Отримати доступ до своїх персональних даних.</li>
              <li>Вимагати їх виправлення або видалення.</li>
              <li>Обмежити або заперечити проти обробки.</li>
              <li>Перенести свої дані (портативність).</li>
              <li>Відкликати згоду в будь-який момент.</li>
              <li>Подати скаргу до Úřad pro ochranu osobních údajů (ÚOOÚ).</li>
            </ul>
            <p>
              Для реалізації прав звертайтесь: <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>.
            </p>

            <h3>8. Cookies</h3>
            <p>
              Детальніше про використання cookies — у нашій{' '}
              <a href="/cookies">Політиці cookies</a>.
            </p>

            <h3>9. Зміни до Політики</h3>
            <p>
              Ми залишаємо за собою право оновлювати цю Політику. Актуальна версія завжди
              доступна на цій сторінці.
            </p>
          </section>
        </div>
      </main>
      <Footer t={saasUk.footer} />
    </>
  );
}
