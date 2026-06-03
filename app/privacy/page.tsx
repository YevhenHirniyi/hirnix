import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import uk from '@/config/i18n/uk';

export const metadata: Metadata = {
  title: 'Політика конфіденційності | hirnix',
  description: 'Політика конфіденційності hirnix studio. Zásady ochrany osobních údajů.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header t={uk.header} />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Політика конфіденційності
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>
            Чинна з 1 червня 2026 р. · Версія 1.0
          </p>

          {/* Ukrainian */}
          <section style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>🇺🇦 Українська версія</h2>

            <h3>1. Хто ми</h3>
            <p>
              Ця Політика конфіденційності стосується сайту <strong>hirnix.cz</strong>, що
              належить та управляється hirnix studio (надалі — «ми», «hirnix»).
              Контактний email: <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>.
            </p>

            <h3>2. Які дані ми збираємо</h3>
            <p>Ми можемо збирати такі категорії персональних даних:</p>
            <ul>
              <li><strong>Контактні дані</strong> — ім'я, email, номер телефону (якщо ви залишаєте заявку через форму).</li>
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

          {/* Czech */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', marginBottom: 48 }} />
          <section>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>🇨🇿 Česká verze</h2>

            <h3>1. Kdo jsme</h3>
            <p>
              Tyto zásady ochrany osobních údajů se vztahují na web <strong>hirnix.cz</strong>,
              provozovaný hirnix studio. Kontaktní e-mail: <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>.
            </p>

            <h3>2. Jaké údaje zpracováváme</h3>
            <ul>
              <li><strong>Kontaktní údaje</strong> — jméno, e-mail, telefonní číslo (pokud vyplníte formulář).</li>
              <li><strong>Technické údaje</strong> — IP adresa, typ prohlížeče, operační systém, čas návštěvy (prostřednictvím analytiky).</li>
              <li><strong>Komunikační údaje</strong> — zprávy zaslané přes Telegram, WhatsApp nebo e-mail.</li>
            </ul>

            <h3>3. Účel zpracování</h3>
            <ul>
              <li>Odpověď na váš dotaz nebo poptávku.</li>
              <li>Příprava nabídky a komunikace k projektu.</li>
              <li>Analýza návštěvnosti webu za účelem jeho zlepšení.</li>
            </ul>

            <h3>4. Právní základ (GDPR)</h3>
            <ul>
              <li>Plnění smlouvy nebo kroky před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR).</li>
              <li>Oprávněný zájem (analytika, čl. 6 odst. 1 písm. f) GDPR).</li>
              <li>Váš souhlas (cookies, čl. 6 odst. 1 písm. a) GDPR).</li>
            </ul>

            <h3>5. Předávání údajů třetím stranám</h3>
            <p>
              Vaše údaje neprodáváme. Mohou být sdíleny pouze se službami nezbytnými pro
              provoz webu (hosting, Google Analytics). Všechny třetí strany jednají v souladu s GDPR.
            </p>

            <h3>6. Doba uchovávání</h3>
            <p>
              Kontaktní údaje jsou uchovávány po dobu nezbytnou pro poskytnutí služby nebo
              do vašeho požadavku na výmaz. Technické údaje (analytika) — do 26 měsíců.
            </p>

            <h3>7. Vaše práva</h3>
            <p>Podle GDPR máte právo na:</p>
            <ul>
              <li>Přístup ke svým osobním údajům.</li>
              <li>Opravu nebo výmaz údajů.</li>
              <li>Omezení nebo námitku proti zpracování.</li>
              <li>Přenositelnost údajů.</li>
              <li>Odvolání souhlasu kdykoli.</li>
              <li>Podání stížnosti u Úřadu pro ochranu osobních údajů (ÚOOÚ).</li>
            </ul>
            <p>
              Kontakt: <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>.
            </p>

            <h3>8. Cookies</h3>
            <p>
              Více informací o cookies naleznete v naší{' '}
              <a href="/cookies">Zásadách cookies</a>.
            </p>

            <h3>9. Změny zásad</h3>
            <p>
              Tyto zásady můžeme aktualizovat. Aktuální verze je vždy dostupná na této stránce.
            </p>
          </section>
        </div>
      </main>
      <Footer t={uk.footer} />
    </>
  );
}
