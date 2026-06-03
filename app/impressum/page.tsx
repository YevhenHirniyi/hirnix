import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import uk from '@/config/i18n/uk';

export const metadata: Metadata = {
  title: 'Impressum | hirnix',
  description: 'Identifikační údaje provozovatele webu hirnix.cz.',
};

export default function ImpressumPage() {
  return (
    <>
      <Header t={uk.header} />
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Impressum
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 48 }}>
            Identifikační údaje provozovatele · Ідентифікаційні дані оператора
          </p>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Provozovatel webu</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 600, width: '40%', color: 'var(--text-muted)' }}>Název / Jméno</td>
                  <td style={{ padding: '12px 0' }}>hirnix studio</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--text-muted)' }}>IČO</td>
                  <td style={{ padding: '12px 0' }}>
                    <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>[bude doplněno]</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--text-muted)' }}>DIČ</td>
                  <td style={{ padding: '12px 0' }}>
                    <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>není plátce DPH</span>
                  </td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--text-muted)' }}>Sídlo</td>
                  <td style={{ padding: '12px 0' }}>Praha, Česká republika</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--text-muted)' }}>E-mail</td>
                  <td style={{ padding: '12px 0' }}>
                    <a href="mailto:info@hirnix.studio">info@hirnix.studio</a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 0', fontWeight: 600, color: 'var(--text-muted)' }}>Web</td>
                  <td style={{ padding: '12px 0' }}>hirnix.cz</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Odpovědnost za obsah</h2>
            <p>
              Provozovatel tohoto webu je odpovědný za obsah zveřejněný na hirnix.cz.
              Obsah je průběžně aktualizován. Přestože usilujeme o správnost a úplnost
              informací, nepřebíráme odpovědnost za jejich aktuálnost nebo přesnost.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Ochrana osobních údajů</h2>
            <p>
              Informace o zpracování osobních údajů naleznete v{' '}
              <a href="/privacy">Zásadách ochrany osobních údajů</a>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Авторські права</h2>
            <p>
              Усі матеріали сайту hirnix.cz (тексти, графіка, логотипи) є власністю
              hirnix studio. Використання без письмового дозволу заборонено.
            </p>
          </section>
        </div>
      </main>
      <Footer t={uk.footer} />
    </>
  );
}
