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
      audience: '↘ Pro místní firmy a živnostníky',
      services: 'Web · Google Business · lokální SEO',
    },
    h1: {
      pre: 'Web, ',
      italic: 'Google profil',
      mid: ' a',
      highlight: 'online přítomnost',
      after: ' pro váš byznys',
      accent: 'v Česku.',
    },
    lead: 'hirnix pomáhá místním firmám a živnostníkům vypadat profesionálně online, být snadno k nalezení na Google a získávat více poptávek přes web, mapy a sociální sítě.',
    cta1: 'Probrat můj byznys',
    cta2: 'Podívat se na ukázky',
    fineprint: ['První konzultace zdarma', 'Bez složité technické mluvy', 'Jasné termíny, žádná překvapení'],
    mockup: {
      notifTitle: 'Nová poptávka',
      notifMsg: 'Jana — manikúra v pátek v 16:00',
      notifTime: 'právě teď',
      siteNav: ['Služby', 'Galerie', 'Kontakt'],
      siteHeadline: 'Krása a péče v samém centru Prahy',
      siteLead: 'Manikúra, obočí, make-up · termíny k dispozici tento týden.',
      siteCta1: 'Objednat se',
      siteCta2: 'Ceník',
      gbpName: 'Studio Bella · Praha 2',
      gbpRating: '4.9 · 112 recenzí',
      gbpContact: 'Kontakt',
      gbpRoute: 'Trasa',
      gbpSite: 'Web',
    },
  },

  marqueeTop: ['Weby', '*ital*Google Business Profile', 'Lokální SEO', '*ital*Rychlé spuštění', 'Analytika', '*ital*Průběžná podpora'],
  marqueeDark: ['Spuštění za *ital*10 dní', 'Postaveno pro *ital*váš obor', 'Bez slibů *ital*top Google', 'Řešení na míru *ital*vašemu byznysu'],

  forWhom: {
    eyebrow: 'Pro koho',
    h2: { pre: 'Místním firmám,', mid: 'které chtějí být', accent: 'k nalezení.' },
    lead: 'Pracujeme s podnikateli, živnostníky a malými firmami, které potřebují srozumitelnou online přítomnost — bez agentur, které zmizí po záloze.',
    niches: ['Nehtová studia', 'Kosmetičky', 'Maséři', 'Restaurace a kavárny', 'Stavební firmy', 'Rekonstrukce bytů', 'Úklidové služby', 'Fotografové', 'Právní služby', 'Doprava a logistika', 'Lektoři a koučové', 'Autoservisy', 'Místní služby'],
  },

  pain: {
    eyebrow: 'Znáte situaci?',
    h2: { pre: 'Zákazníci by vás měli najít', accent: 'snadno.' },
    lead: 'Mnoho místních firem spoléhá na doporučení, Instagram nebo Facebook. Ale to nestačí, když zákazník chce rychle najít vaše služby, adresu, fotky prací nebo způsob, jak se přímo objednat.',
    items: [
      { title: 'Váš byznys žije jen na Instagramu', body: 'Zákazníci se stále ptají na totéž: jaké služby nabízíte, kolik to stojí, kde se nacházíte a jak se objednat.' },
      { title: 'Na Google vás nelze najít', body: 'Někdo v okolí hledá přesně to, co nabízíte — a nachází vaši konkurenci, ne vás.' },
      { title: 'Nemáte profesionální web', body: 'Odvádíte skvělou práci, ale není kam nové zákazníky poslat — stránka, která vypadá věrohodně, přehledně a jednoduše.' },
      { title: 'Nemáte čas se do toho pouštět', body: 'Doména, web, SEO, Google Business, analytika — to vše zabírá čas, který raději věnujete svému byznysu.' },
    ],
    cta: 'Ano, to je přesně můj případ',
  },

  manifesto: {
    eyebrow: 'Jak pracujeme',
    h2: { pre: 'Klidně.', mid: 'Srozumitelně.', accent: 'Bez přeprodeje.' },
    lead: 'Čtyři principy stojící za každým projektem hirnix. Bez agresivního marketingu, bez šablonových balíčků a bez mizení po záloze.',
    intro: 'Nestavíme jen weby — vytváříme přehlednou, poctivou a lokálně zaměřenou online přítomnost pro místní firmy. Bez agresivního marketingu. Bez šablonových balíčků. Bez mizení po první platbě.',
    rows: [
      { num: '01 / Přístup', title: 'Jednoduše, bez technického chaosu.', body: 'Vysvětlujeme běžnými slovy, co děláme, proč a jak web po spuštění používat. Žádné zkratky bez kontextu.' },
      { num: '02 / Zaměření', title: 'Stavíme pro váš trh.', body: 'Před tím, než napíšeme jediný text nebo navrhneme stránku, pochopíme váš obor, vaše zákazníky a místní konkurenci.' },
      { num: '03 / Upřímně', title: 'Bez slibů "top Google".', body: 'Nezaručujeme příliv klientů za 30 dní. Místo toho budujeme reálný základ: web, Google kartu, SEO a přehlednou cestu k poptávce.' },
      { num: '04 / Tým', title: 'Malý, lidský, dostupný.', body: 'Mluvíte přímo s těmi, kdo práci dělají, ne s manažerem přeposílajícím zprávy. Odpovídáme do několika hodin v pracovní dny.' },
    ],
  },

  services: {
    eyebrow: 'Služby',
    h2: { pre: 'Navrhujeme řešení pro váš byznys,', mid: 'ne', accent: 'prodáváme šablonu.' },
    lead: 'Každá firma má jiné potřeby: někdo potřebuje jednoduchou vizitku, jiný kompletní online přítomnost s Google, SEO a analytikou. Proto nejprve pochopíme vaši situaci a pak navrhneme řešení na míru.',
    services: [
      {
        num: '01 / Základní', title: 'Web nebo landing page',
        desc: 'Pro živnostníky a firmy, které potřebují profesionální online prezentaci se službami, fotkami, kontakty a formulářem.',
        items: ['Struktura přizpůsobená vašemu byznysu', 'Moderní, čistý design', 'Sekce služeb + portfolio', 'Kontaktní formulář', 'Telegram / WhatsApp / e-mail', 'Mobilní optimalizace', 'Nastavení domény', 'Texty v češtině'],
        cta: 'Probrat web',
      },
      {
        num: '02 / Nejpopulárnější', title: 'Kompletní online přítomnost',
        desc: 'Pro firmy, které chtějí víc než jen web — kompletní základ pro to, aby je zákazníci našli a vybrali.',
        items: ['Web nebo landing page', 'Google Business Profile', 'Základní lokální SEO', 'Google Analytics + Search Console', 'Technické SEO nastavení', 'Struktura zaměřená na konverze', 'Pomoc s texty', 'Návod po spuštění'],
        cta: 'Poptat nabídku',
      },
      {
        num: '03 / Rozvoj', title: 'Průběžná podpora a rozvoj',
        desc: 'Pro firmy, které web mají, ale chtějí ho pravidelně aktualizovat a online dál rozvíjet.',
        items: ['Aktualizace webu', 'Přidání nových stránek', 'Obnova fotek a textů', 'Základní SEO monitoring', 'Správa Google Business', 'Měsíční report', 'Konzultace k propagaci', 'Příprava na reklamu'],
        cta: 'Dozvědět se více',
      },
    ],
  },

  stats: {
    eyebrow: 'Co získáte',
    h2: { pre: 'Přehledná', mid: 'online přítomnost,', accent: 'na kterou jste hrdí.' },
    lead: 'Po spuštění budete mít web, který můžete posílat zákazníkům, Google kartu, která je snadno k nalezení, a pevný základ pro místní růst.',
    stats: [
      { label: '01 / Přibližné spuštění', value: '10', accent: 'dní', desc: 'První verze webu, připravená ukázat zákazníkům.' },
      { label: '02 / Jazyky', value: '2+', accent: 'k dispozici', desc: 'Vícejazyčné weby pro firmy obsluující různé zákazníky.' },
      { label: '03 / Základní kanály', value: '4', accent: 'dohromady', desc: 'Web, Google Business, SEO, analytika — jako jeden systém.' },
      { label: '04 / Odpověď', value: '24', accent: 'hodin', desc: 'Pracovní dny. Bez chatbotů a automatických odpovědí.' },
    ],
  },

  process: {
    eyebrow: 'Proces',
    h2: { pre: 'Jasně, předvídatelně,', mid: 'bez zbytečného', accent: 'chaosu.' },
    lead: 'Šest přehledných kroků od první konverzace po spuštění. Vždy víte, kde se nacházíme, co se děje dál a kdy čekat další krok.',
    steps: [
      { num: '01', title: 'Bezplatná konzultace', body: 'Rozbereme váš byznys, služby, zákazníky, aktuální situaci a cíle.', when: '20–30 min · Zoom nebo Telegram' },
      { num: '02', title: 'Návrh a nabídka', body: 'Připravíme individuální plán: rozsah, termíny a cenu.', when: 'Po konzultaci' },
      { num: '03', title: 'Materiály a start', body: 'Pošlete fotky, texty a popis služeb. Nemáte podklady — pomůžeme sestavit strukturu.', when: 'Den 1–2' },
      { num: '04', title: 'Design a první verze', body: 'Vytvoříme první verzi webu. Prohlédnete, dáte zpětnou vazbu, opravíme.', when: 'Den 3–6' },
      { num: '05', title: 'SEO, Google a technika', body: 'Základní SEO, Google Business Profile, analytika, kontaktní formuláře, mobilní optimalizace.', when: 'Den 7–9' },
      { num: '06', title: 'Spuštění a předání', body: 'Vše zkontrolujeme, připojíme doménu, předáme přístupy a průvodce.', when: 'Den 10' },
    ],
  },

  examples: {
    eyebrow: 'Příklady situací',
    h2: 'Situace, do kterých nejčastěji vstupujeme.',
    lead: 'Místo vymyšlených recenzí — typické situace, se kterými místní podnikatelé přicházejí. Pokud poznáváte svou — máme o čem mluvit.',
    problemLabel: 'Problém',
    solutionLabel: 'Co jsme udělali',
    cases: [
      { tag: 'Kosmetička', who: 'Nehtové studio bez webu', problem: 'Má Instagram, ale chybí samostatná stránka se službami, cenami, adresou a možností objednání. Noví zákazníci nemají kam přijít.', solution: 'Landing page s fotkami prací, tlačítky k objednání a Google Business profilem s recenzemi.' },
      { tag: 'Řemeslník', who: 'Stavební firma bez portfolia', problem: 'Skvělá práce a spousta fotek — ale vše je rozházené v messengerech a nelze to ukázat potenciálnímu zákazníkovi.', solution: 'Sestavili portfolio, popsali služby, přidali kontaktní formulář a Google Business Profile.' },
      { tag: 'Místní servis', who: 'Byznys neviditelný na Google', problem: 'Funguje přes doporučení, ale noví zákazníci hledající v okolí ho vůbec nenajdou.', solution: 'Web, lokální SEO, Google karta, analytika a přehledné kontaktní informace.' },
    ],
  },

  calc: {
    eyebrow: 'Poptávka',
    h2: { pre: 'Přizpůsobíme rozsah', italic: 'vašim cílům,', post: 'termínům a rozpočtu.' },
    factors: ['Počet stránek', 'Počet jazyků', 'Rozsah textů', 'Dostupnost fotek', 'Google Business Profile', 'SEO nastavení', 'Integrace a formuláře', 'Urgentnost spuštění'],
    formHeading: 'Řekněte nám o svém byznysu.',
    formEyebrow: 'Zanechat poptávku',
    nameLabel: 'Jméno a příjmení',
    namePlaceholder: 'Jana Nováková',
    bizLabel: 'Typ byznysu',
    bizPlaceholder: 'Vyberte obor…',
    bizOptions: ['Nehtové studio', 'Restaurace / kavárna', 'Stavba / rekonstrukce', 'Úklidové služby', 'Foto / video', 'Právní služby', 'Doprava / logistika', 'Lektor / kouč', 'Autoservis', 'Jiná místní služba'],
    emailLabel: 'E-mail',
    phoneLabel: 'Telefonní číslo',
    phonePlaceholder: '+420 …',
    submitLabel: 'Získat nabídku',
    sentTitlePrefix: 'Děkujeme, ',
    sentTitleFallback: 'příteli',
    sentMsg: 'Dostali jsme vaši poptávku. Ozveme se e-mailem nebo na Telegram do několika hodin.',
    errorMsg: 'Něco se pokazilo. Napište nám na Telegram.',
    errorPhoneInvalid: 'Zadejte platné telefonní číslo',
    groupFormat: 'Formát',
    groupLangs: 'Jazyky',
    groupScope: 'Rozsah',
    formatOptions: [{ v: 'landing', l: 'Landing page' }, { v: 'nekolik-stranek', l: '3–5 stránek' }, { v: 'vicestranovy', l: 'Celý web' }],
    langOptions: [{ v: 'cz', l: 'CZ' }, { v: 'cz-en', l: 'CZ + EN' }, { v: 'multi', l: 'Vícejazyčný' }],
    scopeOptions: [{ v: 'site', l: 'Jen web' }, { v: 'full', l: '+ Google + SEO' }, { v: 'full-ads', l: '+ reklama' }],
    footnote: 'Odesláním souhlasíte se zpracováním údajů. Bez spamu — pouze věcná odpověď.',
    timeLabel: '~ 2 min',
  },

  about: {
    eyebrow: 'O hirnix',
    h2: { pre: 'Kdo', italic: 'za tím', post: 'stojí.' },
    para1: 'hirnix je butikové webové studio pro místní firmy a živnostníky, kteří potřebují přehlednou, profesionální a konverzně zaměřenou online přítomnost — bez technického chaosu a vágních agenturních slibů.',
    para2: 'Rozumíme, jak těžké je prosadit se lokálně: konkurence, Google, důvěra zákazníků a nekonečný seznam úkolů. Proto pomáháme vše spojit dohromady — web, texty, Google Business Profile, SEO a přehledný způsob, jak vás zákazníci mohou kontaktovat.',
    checks: ['Praha, Česko', 'Komunikace v češtině', 'Jednoduché vysvětlení bez žargonu', 'Předání přístupů po spuštění', 'Individuální přístup, žádné šablony'],
    linkLabel: 'Napsat',
  },

  faq: {
    eyebrow: 'Otázky',
    h2: { pre: 'Časté otázky', mid: '' },
    lead: 'Vše, na co se zákazníci nejčastěji ptají ohledně termínů, procesu, obsahu a podpory. Nenašli jste odpověď? Napište nám — doplníme.',
    items: [
      { q: 'Mohu web po spuštění sám upravovat?', a: 'Ano. Můžeme web postavit na platformě s jednoduchým editorem a ukázat, jak měnit texty, fotky nebo základní informace — bez vývojáře.' },
      { q: 'Co dělat, pokud nemám texty ani fotky?', a: 'To je v pořádku. Pomůžeme sestavit strukturu, poradíme, jaké fotky jsou potřeba, a můžeme pomoci i s texty.' },
      { q: 'Je reálné spustit web za 10 dní?', a: 'Ano, pokud jsou podklady dodány včas a projekt nevyžaduje složitý vývoj. U většího rozsahu se hned domluvíme na reálném termínu.' },
      { q: 'Garantujete zákazníky nebo poptávky?', a: 'Ne — a to je upřímné. Počet poptávek závisí na oboru, konkurenci, sezóně a marketingu. Co zaručujeme je pevný základ: web, Google karta, SEO, analytika a přehledná cesta pro zákazníky k vám.' },
      { q: 'Jak probíhá platba?', a: 'Platební podmínky se dohodnou individuálně po konzultaci. Obvykle práce začíná po záloze a závěrečná část se hradí před spuštěním webu.' },
      { q: 'Lze objednat jen Google Business Profile nebo jen web?', a: 'Ano. Můžeme samostatně pomoci s webem, Google profilem, SEO, texty nebo průběžnou podporou existujícího webu.' },
      { q: 'Pracujete i s firmami mimo Prahu?', a: 'Ano. Pracujeme vzdáleně s firmami po celém Česku — vše řešíme online přes videohovor nebo Telegram.' },
    ],
  },

  finalCta: {
    eyebrow: 'Bezplatná konzultace',
    h2: { pre: 'Připraveni, aby váš byznys', italic: 'snadno našli ', accent: 'online?' },
    lead: 'Řekněte nám o svém byznysu — poradíme, jaký formát webu a online přítomnosti se hodí právě vám. Bez závazků.',
    cta1: 'Napsat na Telegram',
    cta2: 'Zaslat e-mail',
    note1: 'Odpovídáme do několika hodin v pracovní dny',
    note2: 'Pracujeme s firmami po celém Česku',
    labels: { email: 'E-mail', telegram: 'Telegram', location: 'Lokalita', schedule: 'Pracovní doba' },
    values: { location: 'Praha, Česko', schedule: 'Po–Pá · 09:00–18:00 CET' },
  },

  footer: {
    brand: 'Weby, Google Business Profile a lokální SEO pro místní firmy a živnostníky v Česku.',
    servicesHeading: 'Co děláme',
    servicesList: ['Web nebo landing page', 'Kompletní online přítomnost', 'Průběžná podpora a rozvoj', 'Google Business Profile', 'Lokální SEO'],
    studioHeading: 'Studio',
    studioLinks: [
      { label: 'Pro koho', href: '#for-whom' },
      { label: 'Jak pracujeme', href: '#process' },
      { label: 'Ukázky', href: '#examples' },
      { label: 'O hirnix', href: '#approach' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactsHeading: 'Kontakt',
    telegramLabel: 'Telegram · @hirnix_studio',
    whatsappLabel: 'WhatsApp · +420 607 477 611',
    locationLabel: 'Praha, Česko',
    copyright: '© 2026 hirnix. Všechna práva vyhrazena.',
  },
};

export default cz;
