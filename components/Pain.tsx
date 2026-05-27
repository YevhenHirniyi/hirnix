import { Image, SearchX, Languages, AlarmClock, ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';

const items: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Image,
    title: 'Ваш бізнес є тільки в Instagram',
    body: 'Клієнти постійно питають одне й те саме: які послуги, яка ціна, де ви знаходитесь і як записатися.',
  },
  {
    icon: SearchX,
    title: 'Вас складно знайти в Google',
    body: 'Людина шукає майстра, салон, ремонт або послугу поруч — але знаходить конкурентів, а не вас.',
  },
  {
    icon: Languages,
    title: 'Немає чеської версії',
    body: 'Ви добре пояснюєте свої послуги українською, але не знаєте, як правильно подати їх для чеських клієнтів.',
  },
  {
    icon: AlarmClock,
    title: 'Немає часу розбиратися',
    body: 'Домен, сайт, SEO, Google Business, аналітика — усе це забирає час, який краще витратити на бізнес.',
  },
];

export function Pain() {
  return (
    <section className="section edge-mesh-host" id="pain">
      <EdgeMesh
        corner="bl"
        size={640}
        opacity={0.45}
        palette={['#E5F5EE', '#F1FAF5', '#FAFAF7', '#2F8F6B']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />Знайома ситуація?</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              Клієнти мають<br />
              знаходити вас <span className="glue">легко.</span>
            </h2>
          </div>
          <p className="lead">
            Багато українських бізнесів у Чехії працюють через рекомендації,
            Instagram або Facebook. Але цього часто недостатньо, коли клієнт
            хоче швидко знайти послуги, адресу, фото робіт або написати напряму.
          </p>
        </div>

        <div className="pain-grid">
          {items.map((it, i) => (
            <div key={i} className="pain-card" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="icon-tile">
                <it.icon size={20} strokeWidth={1.8} />
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
          <a href="#cta" className="btn btn-primary btn-lg">
            Так, це про мій бізнес
            <ArrowUpRight size={18} strokeWidth={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
