import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero, Marquee } from '@/components/Hero';
import { ForWhom } from '@/components/ForWhom';
import { Pain } from '@/components/Pain';
import { Manifesto } from '@/components/Manifesto';
import { Services } from '@/components/Services';
import { Stats } from '@/components/Stats';
import { Process } from '@/components/Process';
import { Examples } from '@/components/Examples';
import { Calc } from '@/components/Calc';
import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />

      <Marquee
        items={[
          'Сайти',
          '*ital*Google Business Profile',
          'Локальне SEO',
          '*ital*Чеська адаптація',
          'Аналітика',
          '*ital*Підтримка',
        ]}
      />

      <Hero />

      <Marquee
        dark
        separator="plus"
        items={[
          'Запуск за *ital*10 днів',
          'Українською та *ital*чеською',
          'Без обіцянок *ital*топ Google',
          'Прорахунок під *ital*ваш бізнес',
        ]}
      />

      <ForWhom />
      <Pain />
      <Manifesto />
      <Services />
      <Stats />
      <Process />
      <Examples />
      <Calc />
      <About />
      <FAQ />
      <FinalCTA />

      <Footer />
    </>
  );
}
