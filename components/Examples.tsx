import { Dot } from 'lucide-react';
import { EdgeMesh } from './MeshGradient';

const cases = [
  {
    tag: 'Майстер краси',
    who: 'Манікюр-студія без сайту',
    problem:
      'Є Instagram, але немає окремої сторінки з послугами, цінами, адресою та записом.',
    solution:
      'Лендинг із фото робіт, кнопками запису та базовою чеською версією. Google-картка з відгуками.',
  },
  {
    tag: 'Будівельна бригада',
    who: 'Команда без портфоліо',
    problem:
      'Роботи є, фото є, але все розкидано в месенджерах і нічого не показати потенційному клієнту.',
    solution:
      'Зібрали портфоліо, описали послуги, додали форму заявки і Google Business Profile.',
  },
  {
    tag: 'Локальний сервіс',
    who: 'Бізнес, який не видно в Google',
    problem:
      'Працює через рекомендації, але нові клієнти не можуть знайти його онлайн.',
    solution:
      'Сайт, локальне SEO, Google-картка, аналітика і зрозумілі контакти.',
  },
];

export function Examples() {
  return (
    <section className="section edge-mesh-host" id="examples">
      <EdgeMesh
        corner="br"
        size={660}
        opacity={0.45}
        palette={['#E5F5EE', '#2F8F6B', '#F1FAF5', '#FAFAF7']}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />Приклади ситуацій</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              З чим до нас<br />
              <span className="glue">звертаються</span> найчастіше.
            </h2>
          </div>
          <p className="lead">
            Замість вигаданих відгуків — типові ситуації, з якими приходять
            українські підприємці в Чехії. Якщо впізнаєте свою — нам буде про що поговорити.
          </p>
        </div>

        <div className="examples-grid">
          {cases.map((c, i) => (
            <article
              key={i}
              className="example-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="who-tag">
                <Dot size={14} strokeWidth={3} />
                {c.tag}
              </span>
              <h3 className="who-name">{c.who}</h3>
              <div>
                <div className="problem-label">Проблема</div>
                <p className="problem">{c.problem}</p>
              </div>
              <div className="divider" />
              <div>
                <div className="solution-label" style={{ color: 'var(--brand-primary)' }}>
                  Що зробили
                </div>
                <p className="problem">{c.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
