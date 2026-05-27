import { MeshGradient } from './MeshGradient';
import { AnimatedText } from './AnimatedText';

const rows = [
  {
    num: '01 / Підхід',
    title: 'Просто, без технічного хаосу.',
    body: 'Пояснюємо звичайними словами, що робимо, навіщо і як користуватись сайтом після запуску. Жодних абревіатур без контексту.',
  },
  {
    num: '02 / Локальність',
    title: 'Чеський ринок — наш дім.',
    body: 'Ми живемо й працюємо в Чехії. Адаптуємо тексти, послуги та оформлення так, щоб вони звучали природно для місцевого клієнта.',
  },
  {
    num: '03 / Чесно',
    title: 'Без обіцянок «топ Google».',
    body: 'Ми не гарантуємо потоку клієнтів за 30 днів. Натомість будуємо реальну базу: сайт, Google-картку, SEO та зрозумілий шлях до заявки.',
  },
  {
    num: '04 / Команда',
    title: "Маленька, людська, на зв'язку.",
    body: 'Ви говорите з тими, хто робить роботу, а не з менеджером, що передає повідомлення. Відповідаємо протягом кількох годин.',
  },
];

const intro =
  'Ми будуємо не просто сайти — а спокійну, локальну та чесну онлайн-присутність для українського бізнесу в Чехії. Без агресивного маркетингу. Без шаблонних пакетів. Без зникнень після передоплати.';

export function Manifesto() {
  return (
    <section className="section section-dark mesh-host" id="approach">
      <div className="mesh-layer">
        <MeshGradient
          colors={['#1F2420', '#17694C', '#2F8F6B', '#1F2420']}
          speed={0.35}
          distortion={0.7}
        />
        <div className="mesh-overlay mesh-overlay-dark" />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow on-dark"><span className="dot" />Як ми працюємо</span>
            <h2 className="section-label" style={{ marginTop: 16, color: 'var(--background)' }}>
              Спокійно. <span className="glue">Локально.</span><br />
              <span style={{ color: 'var(--brand-soft)' }}>Без перепродажу.</span>
            </h2>
          </div>
          <p className="lead" style={{ color: 'rgba(250,250,247,0.65)' }}>
            Чотири принципи, які стоять за кожним проєктом hirnix.
            Без агресивного маркетингу, без шаблонних пакетів і без зникнень після передоплати.
          </p>
        </div>

        <div className="manifesto-intro">
          <AnimatedText className="manifesto-intro-text">{intro}</AnimatedText>
        </div>

        <div className="manifesto-list">
          {rows.map((r, i) => (
            <div key={i} className="manifesto-row">
              <div className="manifesto-num">{r.num}</div>
              <h3 className="manifesto-title">{r.title}</h3>
              <p className="manifesto-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
