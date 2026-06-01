import type { SiteT } from './types';

const cz: SiteT = {
  header: {
    nav: [
      { label: 'Služby', href: '#services' },
      { label: 'Pro koho', href: '#for-whom' },
      { label: 'Jak pracujeme', href: '#process' },
      { label: 'Ukázky', href: '#examples' },
      { label: 'Otázky', href: '#faq' },
    ],
    cta: 'Bezplatná konzultace',
  },

  hero: {
    meta: {
      location: 'Praha · Česko · 2026',
      audience: '↘ Pro ukrajinský byznys',
      services: 'Web · GBP · lokální SEO',
    },
    h1: {
      pre: 'Web, ',
      italic: 'Google profil',
      mid: ' a',
      highlight: 'online přítomnost',
      after: ' pro váš byznys',
      accent: 'v Česku.',
    },
    lead: 'hirnix pomáhá ukrajinským podnikatelům v Česku vypadat profesionálně online, být srozumitelní pro místní zákazníky a získávat více poptávek přes web, Google a sociální sítě.',
    cta1: 'Probrat můj byznys',
    cta2: 'Podívat se na ukázky',
    fineprint: ['První konzultace zdarma', 'V ukrajinštině i češtině', 'Bez složité technické mluvy'],
    mockup: {
      notifTitle: 'Nová poptávka',
      notifMsg: 'Jana — manikúra v pátek v 16:00',
      notifTime: 'právě teď',
      siteNav: ['Služby', 'Mistři', 'Kontakty'],
      siteHeadline: 'Krása a péče v samém centru Prahy',
      siteLead: 'Manikúra, obočí, make-up · pracujeme ukrajinsky a česky.',
      siteCta1: 'Objednat se',
      siteCta2: 'Ceník',
      gbpName: 'Studio Mariia · Praha 2',
      gbpRating: '4.9 · 87 recenzí',
      gbpContact: 'Kontakt',
      gbpRoute: 'Trasa',
      gbpSite: 'Web',
    },
  },

  marqueeTop: ['Weby', '*ital*Google Business Profile', 'Lokální SEO', '*ital*Česká adaptace', 'Analytika', '*ital*Podpora'],
  marqueeDark: ['Spuštění za *ital*10 dní', 'Ukrajinsky i *ital*česky', 'Bez slibů *ital*top Google', 'Nabídka na míru *ital*vašemu byznysu'],

  forWhom: {
    eyebrow: 'Pro koho',
    h2: { pre: 'Místním firmám,', mid: 'které chtějí být', accent: 'viditelné.' },
    lead: 'Pracujeme s podnikateli, řemeslníky a malými firmami, které potřebují srozumitelnou online přítomnost v Česku — bez agentur, které zmizí po záloze.',
    niches: ['Salóny krásy', 'Nehtové studio', 'Kosmetičky', 'Maséři', 'Restaurace a kavárny', 'Stavební party', 'Rekonstrukce bytů', 'Úklid', 'Fotografové', 'Právní služby', 'Doručení a logistika', 'Lektoři a kurzy', 'Autoservisy', 'Místní služby'],
  },

  pain: {
    eyebrow: 'Znáte situaci?',
    h2: { pre: 'Zákazníci vás musí najít', accent: 'snadno.' },
    lead: 'Mnoho ukrajinských firem v Česku funguje přes doporučení, Instagram nebo Facebook. Ale to nestačí, když zákazník chce rychle najít služby, adresu, fotky prací nebo napsat přímo.',
    items: [
      { title: 'Váš byznys je jen na Instagramu', body: 'Zákazníci se stále ptají na to samé: jaké služby, kde se nacházíte a jak se objednat.' },
      { title: 'V Google vás nelze najít', body: 'Člověk hledá mistra, salón, opravu nebo službu v okolí — a najde konkurenci, ne vás.' },
      { title: 'Chybí česká verze', body: 'Své služby dobře vysvětlíte ukrajinskými zákazníkům, ale nevíte, jak je správně prezentovat českým klientům.' },
      { title: 'Nemáte čas se do toho pouštět', body: 'Doména, web, SEO, Google Business, analytika — to vše bere čas, který je lepší věnovat byznysu.' },
    ],
    cta: 'Ano, to je přesně můj případ',
  },

  manifesto: {
    eyebrow: 'Jak pracujeme',
    h2: { pre: 'Klidně.', mid: 'Lokálně.', accent: 'Bez přeprodeje.' },
    lead: 'Čtyři principy stojící za každým projektem hirnix. Bez agresivního marketingu, bez šablonových balíčků a bez mizení po záloze.',
    intro: 'Nestavíme jen weby — vytváříme klidnou, lokální a poctivou online přítomnost pro ukrajinské firmy v Česku. Bez agresivního marketingu. Bez šablonových balíčků. Bez mizení po záloze.',
    rows: [
      { num: '01 / Přístup', title: 'Jednoduše, bez technického chaosu.', body: 'Vysvětlujeme běžnými slovy, co děláme, proč a jak web po spuštění používat. Žádné zkratky bez kontextu.' },
      { num: '02 / Lokalita', title: 'Český trh — náš domov.', body: 'Žijeme a pracujeme v Česku. Přizpůsobujeme texty, služby a design tak, aby přirozeně oslovily místního zákazníka.' },
      { num: '03 / Upřímně', title: "Bez slibů 'top Google'.", body: 'Nezaručujeme příliv klientů za 30 dní. Místo toho budujeme reálný základ: web, Google kartu, SEO a přehlednou cestu k poptávce.' },
      { num: '04 / Tým', title: 'Malý, lidský, dostupný.', body: 'Mluvíte s těmi, kdo práci dělají, ne s manažerem přeposílajícím zprávy. Odpovídáme do několika hodin.' },
    ],
  },

  services: {
    eyebrow: 'Služby',
    h2: { pre: 'Navrhujeme řešení pro váš byznys,', mid: 'ne', accent: 'prodáváme šablonu.' },
    lead: 'Každá firma má jiné potřeby: někdo potřebuje jednoduchou vizitku, jiný kompletní online přítomnost s Google, SEO a analytikou. Proto nejprve prostudujeme vaši situaci a pak navrhneme individuální řešení.',
    services: [
      {
        num: '01 / Základní', title: 'Web nebo landing page',
        desc: 'Pro podnikatele, kteří potřebují profesionální stránku se službami, fotkami, kontakty a poptávkami.',
        items: ['Struktura pro váš byznys', 'Design v moderním stylu', 'Ukrajinská a česká verze', 'Popis služeb + portfolio', 'Kontaktní formulář', 'Telegram / WhatsApp / e-mail', 'Mobilní adaptace', 'Základní připojení domény'],
        cta: 'Probrat web',
      },
      {
        num: '02 / Nejpopulárnější', title: 'Online přítomnost na klíč',
        desc: 'Pro firmy, které chtějí nejen web, ale kompletní základ pro online vyhledávání zákazníků.',
        items: ['Web nebo landing page', 'Google Business Profile', 'Základní lokální SEO', 'Google Analytics + Search Console', 'Technické SEO nastavení', 'Struktura pro poptávky', 'Pomoc s texty', 'Návod po spuštění'],
        cta: 'Poptat nabídku',
      },
      {
        num: '03 / Rozvoj', title: 'Podpora a rozvoj',
        desc: 'Pro firmy, které web mají, ale chtějí ho pravidelně aktualizovat a online rozvíjet.',
        items: ['Aktualizace webu', 'Přidání nových služeb', 'Aktualizace fotek a textů', 'Základní SEO monitoring', 'Podpora Google Business', 'Měsíční report', 'Konzultace ohledně propagace', 'Příprava na reklamu'],
        cta: 'Dozvědět se více',
      },
    ],
  },

  stats: {
    eyebrow: 'Co získáte',
    h2: { pre: 'Srozumitelná', mid: 'online přítomnost,', accent: 'kterou lze ukázat.' },
    lead: 'Po spuštění budete mít web, který můžete posílat zákazníkům, Google kartu, která je snadno k nalezení, a českou verzi — pro místní trh.',
    stats: [
      { label: '01 / Přibližné spuštění', value: '10', accent: 'dní', desc: 'První verze webu, připravená ukázat zákazníkům.' },
      { label: '02 / Jazyky', value: '2', accent: 'UA + CZ', desc: 'Jeden byznys — dva trhy. Ukrajinskí i čeští zákazníci.' },
      { label: '03 / Základní kanály', value: '4', accent: 'dohromady', desc: 'Web, Google Business, SEO, analytika — jako jeden systém.' },
      { label: '04 / Odpověď v messengeru', value: '24', accent: 'hodin', desc: 'Pracovní dny. Bez chatbotů a automatických odpovědí.' },
    ],
  },

  process: {
    eyebrow: 'Proces',
    h2: { pre: 'Jasně, předvídatelně,', mid: 'bez zbytečného', accent: 'chaosu.' },
    lead: 'Šest přehledných kroků od první konverzace po spuštění. Vždy víte, kde se nacházíme, co se děje dál a kdy čekat další krok.',
    steps: [
      { num: '01', title: 'Bezplatná konzultace', body: 'Rozbereme váš byznys, služby, zákazníky, aktuální situaci a cíle.', when: '20–30 min · Telegram nebo videohovor' },
      { num: '02', title: 'Návrh a plán', body: 'Připravíme individuální plán: formát práce, etapy a termíny.', when: 'Po konzultaci' },
      { num: '03', title: 'Materiály a start', body: 'Pošlete fotky, texty, služby. Nemáte materiály — pomůžeme sestavit strukturu.', when: 'Den 1–2' },
      { num: '04', title: 'Design a první verze', body: 'Vytvoříme první variantu webu. Prohlédnete, dáte komentáře, opravíme.', when: 'Den 3–6' },
      { num: '05', title: 'SEO, Google a technika', body: 'Základní SEO, Google Business Profile, analytika, kontaktní formuláře, mobilní adaptace.', when: 'Den 7–9' },
      { num: '06', title: 'Spuštění a přístupy', body: 'Zkontrolujeme web, připojíme doménu, předáme přístupy a návod.', when: 'Den 10' },
    ],
  },

  examples: {
    eyebrow: 'Příklady situací',
    h2: 'S čím k nám nejčastěji přicházejí.',
    lead: 'Místo vymyšlených recenzí — typické situace, se kterými přicházejí ukrajinští podnikatelé v Česku. Pokud poznáváte svou — bude o čem mluvit.',
    problemLabel: 'Problém',
    solutionLabel: 'Co jsme udělali',
    cases: [
      { tag: 'Mistr krásy', who: 'Nehtové studio bez webu', problem: 'Je Instagram, ale chybí samostatná stránka se službami, cenami, adresou a objednávkou.', solution: 'Landing page s fotkami prací, tlačítky k objednání a základní českou verzí. Google karta s recenzemi.' },
      { tag: 'Stavební parta', who: 'Tým bez portfolia', problem: 'Práce jsou, fotky jsou, ale vše je rozházené v messengerech a nelze to ukázat potenciálnímu zákazníkovi.', solution: 'Sestavili portfolio, popsali služby, přidali kontaktní formulář a Google Business Profile.' },
      { tag: 'Místní servis', who: 'Byznys, který není vidět na Google', problem: 'Funguje přes doporučení, ale noví zákazníci ho nemohou najít online.', solution: 'Web, lokální SEO, Google karta, analytika a přehledné kontakty.' },
    ],
  },

  calc: {
    eyebrow: 'Poptávka',
    h2: { pre: 'Přizpůsobíme formát', italic: 'vaší úloze,', post: 'rozsahu a cílům.' },
    factors: ['Počet stránek', 'Počet jazyků', 'Rozsah textů', 'Dostupnost fotek', 'Google Business Profile', 'SEO nastavení', 'Integrace a formuláře', 'Urgentnost spuštění'],
    formHeading: 'Řekněte nám o byznysu.',
    nameLabel: 'Jméno a příjmení',
    namePlaceholder: 'Jana Nováková',
    bizLabel: 'Typ byznysu',
    bizPlaceholder: 'Vyberte obor…',
    bizOptions: ['Salón krásy / nehtové studio', 'Restaurace / kavárna', 'Stavba / rekonstrukce', 'Úklid', 'Foto / video', 'Právní služby', 'Doručení / logistika', 'Lektor / kurzy', 'Autoservis', 'Jiná místní služba'],
    emailLabel: 'E-mail',
    phoneLabel: 'Telefonní číslo',
    phonePlaceholder: '+420 …',
    submitLabel: 'Získat nabídku',
    sentTitlePrefix: 'Děkujeme, ',
    sentTitleFallback: 'příteli',
    sentMsg: 'Dostali jsme vaši žádost. Napíšeme na Telegram nebo e-mail do několika hodin.',
    groupFormat: 'Formát',
    groupLangs: 'Jazyky',
    groupScope: 'Rozsah',
    formatOptions: [{ v: 'jednostrankovy', l: 'Landing page' }, { v: 'nekolik-stranek', l: '3–5 stránek' }, { v: 'vicestranovy', l: 'Více stránek' }],
    langOptions: [{ v: 'ua', l: 'UA' }, { v: 'ua-cz', l: 'UA + CZ' }, { v: 'ua-cz-en', l: 'UA + CZ + EN' }],
    scopeOptions: [{ v: 'site', l: 'Jen web' }, { v: 'full', l: '+ Google + SEO' }, { v: 'full-ads', l: '+ reklama' }],
    footnote: 'Kliknutím souhlasíte se zpracováním dat. Bez spamu — jen odpověď k věci.',
    timeLabel: '~ 2 min',
  },

  about: {
    eyebrow: 'O hirnix',
    h2: { pre: 'Kdo', italic: 'za tím', post: 'stojí.' },
    para1: 'hirnix byl vytvořen pro ukrajinské podnikatele v Česku, kteří potřebují srozumitelnou, profesionální a lokálně přizpůsobenou online přítomnost — bez technického chaosu a marketingových slibů.',
    para2: 'Rozumíme, jak obtížné je adaptovat byznys na nový trh: jazyk, důvěra, Google, konkurence, čeští zákazníci a nedostatek času. Proto pomáháme vše spojit do jednoho systému: web, texty, Google profil, SEO a přehledné kanály pro poptávky.',
    checks: ['Praha, Česko', 'Komunikace v ukrajinštině', 'Jednoduché vysvětlení techniky', 'Předání přístupů po spuštění', 'Individuální přístup'],
    linkLabel: 'Napsat',
  },

  faq: {
    eyebrow: 'Otázky',
    h2: { pre: 'Časté otázky', mid: '' },
    lead: 'Vše, na co se zákazníci nejčastěji ptají ohledně termínů, procesu, české verze a podpory. Nenašli jste odpověď? Napište nám — doplníme.',
    items: [
      { q: 'Mohu web po spuštění sám upravovat?', a: 'Ano. Můžeme web postavit na platformě s jednoduchým editorem a ukázat, jak měnit texty, fotky nebo základní informace — bez vývojáře.' },
      { q: 'Co dělat, pokud nemám texty ani fotky?', a: 'To je v pořádku. Pomůžeme sestavit strukturu, poradíme, jaké fotky jsou potřeba, a můžeme pomoci s texty pro web — v ukrajinštině i češtině.' },
      { q: 'Děláte českou verzi webu?', a: 'Ano. Připravujeme web v ukrajinštině a češtině, aby byl váš byznys srozumitelný jak pro ukrajinské, tak pro místní zákazníky.' },
      { q: 'Je reálné spustit web za 10 dní?', a: 'Ano, pokud jsou materiály dodány včas a projekt nevyžaduje složitý vývoj. Pokud je rozsah větší, hned se domluvíme na reálném termínu.' },
      { q: 'Garantujete zákazníky?', a: 'Ne — a to je upřímné. Počet poptávek závisí na oboru, konkurenci, sezóně, poptávce a reklamě. Ale vytváříme základ, bez kterého se byznysu online těžko prosazuje: web, Google profil, SEO, analytiku a přehlednou cestu k poptávce.' },
      { q: 'Jak probíhá platba?', a: 'Platební podmínky se dohodnou individuálně po konzultaci a přípravě nabídky. Obvykle práce začíná po záloze a závěrečná část se hradí před spuštěním webu.' },
      { q: 'Lze objednat jen Google Business Profile nebo jen web?', a: 'Ano. Můžeme samostatně pomoci s webem, Google profilem, SEO, texty nebo podporou existujícího webu.' },
    ],
  },

  finalCta: {
    eyebrow: 'Bezplatná konzultace',
    h2: { pre: 'Připraveni zviditelnit váš byznys', italic: 'online?', accent: '' },
    lead: 'Řekněte nám o svém byznysu — poradíme, jaký formát webu a online přítomnosti se hodí právě vám. Bez závazků.',
    cta1: 'Napsat na Telegram',
    cta2: 'Zaslat e-mail',
    note1: 'Odpovídáme do několika hodin',
    note2: 'Pracujeme s firmami po celém Česku',
    labels: { email: 'E-mail', telegram: 'Telegram', location: 'Lokalita', schedule: 'Pracovní doba' },
    values: { location: 'Praha, Česko', schedule: 'Po–Pá · 09:00–19:00 CET' },
  },

  footer: {
    brand: 'Weby, Google Business Profile a lokální SEO pro ukrajinské podnikatele v Česku.',
    servicesHeading: 'Co děláme',
    servicesList: ['Web nebo landing page', 'Online přítomnost', 'Podpora a rozvoj', 'Google Business Profile', 'Lokální SEO'],
    studioHeading: 'Studio',
    studioLinks: [
      { label: 'Pro koho', href: '#for-whom' },
      { label: 'Jak pracujeme', href: '#process' },
      { label: 'Ukázky', href: '#examples' },
      { label: 'O hirnix', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactsHeading: 'Kontakty',
    telegramLabel: 'Telegram · @hirnix_studio',
    whatsappLabel: 'WhatsApp · +420 607 477 611',
    locationLabel: 'Praha, Česko',
  },
};

export default cz;
