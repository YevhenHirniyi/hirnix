import {
  Sparkles, Hand, Flower, HeartPulse, Utensils, HardHat, Hammer,
  SprayCan, Camera, Scale, Truck, GraduationCap, Car, MapPin,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const NICHES: { icon: LucideIcon; name: string }[] = [
  { icon: Sparkles, name: 'Салони краси' },
  { icon: Hand, name: 'Майстри манікюру' },
  { icon: Flower, name: 'Косметологи' },
  { icon: HeartPulse, name: 'Масажисти' },
  { icon: Utensils, name: 'Ресторани та кафе' },
  { icon: HardHat, name: 'Будівельні бригади' },
  { icon: Hammer, name: 'Ремонт квартир' },
  { icon: SprayCan, name: 'Клінінг' },
  { icon: Camera, name: 'Фотографи' },
  { icon: Scale, name: 'Юридичні послуги' },
  { icon: Truck, name: 'Доставка та логістика' },
  { icon: GraduationCap, name: 'Репетитори та курси' },
  { icon: Car, name: 'Автосервіси' },
  { icon: MapPin, name: 'Локальні послуги' },
];

export function ForWhom() {
  const doubled = [...NICHES, ...NICHES];

  return (
    <section className="section section-soft" id="for-whom">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="dot" />Для кого</span>
            <h2 className="section-label" style={{ marginTop: 16 }}>
              Локальним бізнесам,<br />
              <span className="glue">які хочуть бути</span>{' '}
              <span style={{ color: 'var(--brand-primary)' }}>видимими.</span>
            </h2>
          </div>
          <p className="lead">
            Ми працюємо з підприємцями, майстрами та невеликими компаніями,
            яким потрібна зрозуміла онлайн-присутність у Чехії — без агенцій,
            що зникають після передоплати.
          </p>
        </div>

        <div className="niches-marquee">
          <div className="niches-track">
            {doubled.map((n, i) => (
              <span key={i} className="niche-chip">
                <n.icon size={14} strokeWidth={1.8} style={{ color: 'var(--brand-primary)' }} />
                {n.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
