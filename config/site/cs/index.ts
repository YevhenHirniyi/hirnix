/**
 * Czech copy. Audience: beauty professionals and studios in the Czech
 * Republic (not a literal translation of the Ukrainian site). Same claims and
 * limits as the Ukrainian source — see the H0x / ПОГОДИТИ markers there.
 */

import type { SiteCopy } from '../copy';

export const cs: SiteCopy = {
  common: {
    routes: {
      home: { label: 'Úvod' },
      scheduling: { label: 'Rezervace a rozvrh', hint: 'Pracovní den, návštěvy a tým v jednom kalendáři' },
      clients: { label: 'Databáze klientů', hint: 'Kontakty a historie návštěv každého klienta' },
      team: { label: 'Služby a tým', hint: 'Ceník služeb, kdo co dělá a pracovní doba' },
      reports: { label: 'Přehledy a výsledky', hint: 'Rezervace, služby a výkon týmu za zvolené období' },
      booking: { label: 'Online rezervace', hint: 'Stránka, kde si klient sám vybere službu a čas' },
      independent: { label: 'Pro samostatné profesionály', hint: 'Pracujete sami, bez recepce' },
      studios: { label: 'Pro beauty studia', hint: 'Koordinace práce více specialistů' },
      demo: { label: 'Demo' },
      conditions: { label: 'Podmínky' },
      contact: { label: 'Kontakt' },
      privacy: { label: 'Ochrana osobních údajů (UA)' },
      cookies: { label: 'Cookies (UA)' },
    },
    ui: {
      skipLink: 'Přejít na obsah',
      mainNav: 'Hlavní menu',
      languageNav: 'Jazyk webu',
      breadcrumbs: 'Drobečková navigace',
      contactEyebrow: 'Kontakt',
      directLabel: 'Nebo nám napište přímo',
      loginCabinet: 'Přihlásit se do účtu',
      optional: 'nepovinné',
    },
    seo: {
      ogTagline: 'CRM pro beauty mistry a studia',
      appDescription: 'CRM a rezervační systém pro beauty mistry a studia: databáze klientů, rozvrh, služby, tým, přehledy a online rezervace.',
    },
    header: {
      featuresLabel: 'Funkce',
      segmentsLabel: 'Pro koho',
      login: 'Přihlásit',
      cta: 'Domluvit se na spuštění',
      openMenu: 'Otevřít menu',
      closeMenu: 'Zavřít menu',
    },
    footer: {
      brand: 'CRM pro beauty mistry a studia: klienti, rezervace, služby, tým a výsledky v jednom systému.',
      featuresHeading: 'Funkce',
      companyHeading: 'Hirnix',
      contactsHeading: 'Kontakt',
      copyright: `© ${new Date().getFullYear()} Hirnix`,
    },
    assets: {
      demoNote: 'Ukázková data · rozhraní v angličtině',
      alt: {
        dashboard: 'Přehled Hirnix: dnešní rezervace, poslední klienti, oblíbené služby',
        calendarDay: 'Denní kalendář Hirnix s rezervacemi ve sloupcích tří specialistek',
        calendarWeek: 'Týdenní kalendář jedné specialistky s volnými dny, přestávkou a rezervacemi',
        visit: 'Otevřená rezervace: specialistka, služby s cenou a délkou, datum, čas, stav a komentáře',
        clients: 'Seznam klientů s vyhledáváním, počtem návštěv a datem poslední návštěvy',
        clientCard: 'Karta klienta: počet návštěv, komentáře a historie rezervací se stavy',
        services: 'Ceník služeb s kategoriemi, cenami a délkou',
        serviceEdit: 'Úprava služby: fotka, název, popis a překlady pro rezervační stránku',
        employees: 'Specialistky studia s přiřazenými službami a týdenní pracovní dobou',
        reports: 'Přehled Hirnix: souhrn za období a graf po měsících',
        reportsDetail: 'Přehled podle služeb a specialistek a vytížení podle dnů v týdnu',
        bookingSettings: 'Nastavení rezervační stránky: odkaz, QR kód, vzhled a jazyky',
        bookingStart: 'Online rezervační stránka studia v telefonu',
        bookingMasters: 'Online rezervace: výběr specialistky se zaměřením a popisem',
        bookingServices: 'Online rezervace: výběr služby s fotkou, popisem, délkou a cenou',
        bookingSummary: 'Online rezervace: vybraná specialistka a služba před výběrem času',
        bookingTime: 'Online rezervace: výběr data a volného termínu',
      },
    },
    form: {
      nameLabel: 'Jak vás můžeme oslovovat',
      namePlaceholder: 'Jméno',
      phoneLabel: 'Telefon',
      phoneCountry: 'CZ',
      phoneInvalid: 'Zkontrolujte číslo — zdá se, že chybí číslice nebo je vybraná jiná země.',
      emailLabel: 'E-mail',
      emailPlaceholder: 'hello@example.com',
      emailInvalid: 'Zkontrolujte e-mailovou adresu — zdá se, že je v ní překlep.',
      contactHint: 'Stačí jeden kontakt — telefon nebo e-mail.',
      nameRequired: 'Uveďte prosím, jak vás oslovovat.',
      contactRequired: 'Uveďte telefon nebo e-mail, abychom vám mohli odpovědět.',
      formatLabel: 'Jak pracujete',
      formatOptions: [
        { value: 'solo', label: 'Pracuji samostatně' },
        { value: 'team', label: 'Studio s týmem' },
        { value: 'other', label: 'Jinak' },
      ],
      detailsToggle: 'Přidat podrobnosti (nepovinné)',
      businessLabel: 'Název podniku',
      linkLabel: 'Web nebo Instagram',
      linkPlaceholder: 'instagram.com/…',
      commentLabel: 'Co je pro vás teď důležité',
      commentPlaceholder: 'Například: kde teď vedete rezervace, kolik máte specialistů, jaké máte otázky',
      privacyNote: 'Kontakt použijeme jen k odpovědi na tento dotaz.',
      privacyLink: 'Ochrana osobních údajů',
      sending: 'Odesíláme…',
      errorTitle: 'Dotaz se nepodařilo odeslat.',
      errorBody: 'Vaše údaje zůstaly ve formuláři — zkuste to znovu nebo nám napište přímo:',
      retry: 'Odeslat znovu',
      successTitle: 'Dotaz jsme přijali',
      successBody: 'Ozveme se vám na uvedený kontakt, zjistíme, jak pracujete, a domluvíme další krok.',
      successContacts: 'Vaše kontakty',
      successNext: 'Než se ozveme, můžete si prohlédnout platformu.',
      successNextLink: 'Zobrazit demo',
    },
  },

  home: {
    meta: {
      title: 'Hirnix — CRM a rezervační systém pro beauty studia',
      description:
        'CRM pro beauty mistry a studia v Česku: databáze klientů, rozvrh, služby, tým a přehledy v jednom systému — a klienti se objednávají online. První 2 týdny zdarma.',
    },
    hero: {
      eyebrow: 'CRM pro beauty mistry a studia',
      h1: 'Klienti, rezervace a každodenní práce — v jednom systému',
      lead:
        'Veďte databázi klientů, organizujte rozvrh, nastavte služby a práci týmu a sledujte výsledky. Hirnix vám pomůže s každodenní agendou a klienti se k vám objednají online — i v češtině.',
      primary: 'Domluvit se na spuštění',
      secondary: 'Prohlédnout platformu',
      trust: ['První 2 týdny zdarma', 'Individuální spuštění', 'Prohlídka platformy bez registrace'],
    },
    workday: {
      eyebrow: 'Příklad',
      h2: 'Jeden pracovní den v Hirnixu',
      lead: 'Jak spolu moduly souvisí: od ranního rozvrhu po výsledky za období. Příklad je postavený na ukázkových datech.',
      steps: [
        { time: 'Ráno', title: 'Dnešní rozvrh', body: 'Vyberete datum a vidíte všechny rezervace ve sloupcích jednotlivých specialistů.', link: { route: 'scheduling', label: 'Jak funguje rozvrh' } },
        { time: 'Během dne', title: 'Nová rezervace', body: 'Přidáte návštěvu ručně, nebo přijde rezervace, kterou si klient udělal online přes váš odkaz.', link: { route: 'booking', label: 'O online rezervaci' } },
        { time: 'Před návštěvou', title: 'Karta klienta', body: 'Otevřete kontakty a předchozí návštěvy, abyste věděli, co jste dělali minule.', link: { route: 'clients', label: 'O databázi klientů' } },
        { time: 'Po návštěvě', title: 'Stav rezervace', body: 'Označíte návštěvu jako hotovou, zrušenou nebo nedostavení — historie klienta tak zůstane přesná.', link: { route: 'scheduling', label: 'Stavy rezervací' } },
        { time: 'Na konci období', title: 'Přehled', body: 'Uvidíte, které služby byly nejčastější a jak pracovali specialisté za zvolené období.', link: { route: 'reports', label: 'Co ukazují přehledy' } },
      ],
    },
    tasks: {
      eyebrow: 'Co Hirnix řeší',
      h2: 'Tři úkoly, které řeší každý beauty profesionál',
      items: [
        { title: 'Mít pořádek v rezervacích', body: 'Návštěvy, služby a čas každého specialisty v jednom kalendáři — ne rozházené mezi chaty, diář a paměť.' },
        { title: 'Starat se o klienty', body: 'Kontakty a historie návštěv jsou pohromadě, takže před každým termínem víte, s kým pracujete.' },
        { title: 'Řídit práci a vidět výsledky', body: 'Služby, pracovní doba a přehledy za období ukazují, jak se daří — bez ručního počítání.' },
      ],
    },
    features: {
      eyebrow: 'Funkce',
      h2: 'Pět modulů, které spolu fungují',
      lead: 'Každý má vlastní stránku se skutečnými obrazovkami a odpověďmi na časté otázky.',
      items: [
        { route: 'scheduling', asset: 'calendarWeek', title: 'Rezervace a rozvrh', body: 'Denní kalendář se sloupcem pro každého specialistu. Otevřete rezervaci a uvidíte služby, čas, cenu, délku i komentář.', link: 'Jak funguje rozvrh' },
        { route: 'clients', asset: 'clients', title: 'Databáze klientů', body: 'Vyhledávání klientů, kontakty, minulé i budoucí návštěvy a počet návštěv na kartě.', link: 'Prohlédnout databázi klientů' },
        { route: 'team', asset: 'employees', title: 'Služby a tým', body: 'Ceník služeb s kategoriemi, cenami a délkou. Kdo dělá kterou službu a kdy se k němu dá objednat.', link: 'Služby a pracovní doba' },
        { route: 'reports', asset: 'reports', title: 'Přehledy a výsledky', body: 'Čísla za zvolené období: oblíbenost služeb, práce specialistů a souhrny dokončených návštěv.', link: 'Co ukazují přehledy' },
        { route: 'booking', asset: 'bookingServices', title: 'Online rezervace', body: 'Stránka vašeho podniku přes odkaz nebo QR kód: klient si vybere službu, specialistu a čas a rezervace se objeví ve vašem kalendáři.', link: 'O online rezervaci' },
      ],
    },
    segments: {
      eyebrow: 'Pro koho',
      h2: 'Pracujete sami, nebo s týmem?',
      items: [
        {
          route: 'independent',
          tag: 'Samostatný profesionál',
          title: 'Když jste specialista i recepce zároveň',
          body: 'Vlastní rozvrh, databáze klientů, ceník služeb a rezervační stránka, kterou sdílíte na Instagramu nebo v messengeru. Méně psaní, víc času na práci.',
          points: ['Rozvrh a karty klientů na jednom místě', 'Odkaz na rezervaci pro klienty', 'Přehled výsledků za měsíc'],
          link: 'CRM pro samostatné profesionály',
        },
        {
          route: 'studios',
          tag: 'Beauty studio',
          title: 'Když je potřeba sladit práci více lidí',
          body: 'Společný kalendář podle specialistů, přiřazení služeb, pracovní doba a přehledy za každého — abyste viděli práci celého studia.',
          points: ['Kalendář se sloupci specialistů', 'Kdo dělá které služby a kdy pracuje', 'Přehledy podle služeb a specialistů'],
          link: 'CRM pro beauty studia',
        },
      ],
    },
    example: {
      eyebrow: 'Ukázkový podnik',
      h2: 'Jak vypadá nastavený podnik',
      lead: 'Dokud nezveřejníme schválené případové studie klientů, ukazujeme ukázkový podnik. Všechna jména a čísla v něm jsou smyšlená.',
      facts: [
        { label: 'Specialisté', value: 'několik lidí s vlastní pracovní dobou' },
        { label: 'Služby', value: 'kategorie s cenami, délkou a popisy' },
        { label: 'Klienti', value: 'kontakty, dokončené i budoucí návštěvy' },
        { label: 'Online rezervace', value: 'stránka podniku s výběrem služby, specialisty a času' },
      ],
      link: 'Zobrazit demo',
    },
    onboarding: {
      eyebrow: 'Spuštění',
      h2: 'Jak začíná práce s Hirnixem',
      steps: [
        { title: 'Zjistíme, co potřebujete', body: 'Krátký rozhovor: jak teď vedete rezervace, kolik máte specialistů a co nastavit jako první.' },
        { title: 'Nastavíme systém', body: 'Společně doplníme služby, tým a pracovní dobu v dohodnutém rozsahu.' },
        { title: 'Vyzkoušíme první scénář', body: 'Projdeme skutečný postup — od rezervace po dokončenou návštěvu —, abyste začali s jistotou.' },
      ],
    },
    terms: {
      eyebrow: 'Podmínky',
      h2: 'Individuální spuštění a nabídka podle vašich potřeb',
      body: 'Váš podnik nenaroubujeme na šablonu. Řekněte nám, jak pracujete — Hirnix nastavíme společně a připravíme nabídku přesně pro váš způsob práce. První 2 týdny jsou zdarma.',
      needLabel: 'Co nám pomůže připravit nabídku',
      needs: ['Zda pracujete sami, nebo s týmem', 'Které moduly potřebujete nejdřív', 'Zda je potřeba převést stávající databázi klientů'],
      cta: 'Zobrazit podmínky',
    },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Časté otázky',
      items: [
        { q: 'Hodí se Hirnix, když pracuji sama, bez recepce?', a: 'Ano. Vlastní rozvrh, klienty i služby máte v jednom systému a klienti se mohou objednat sami přes odkaz. Slovo „studio“ na webu neznamená, že je produkt jen pro týmy.' },
        { q: 'Jak začít?', a: 'Pošlete dotaz nebo nám napište. Zjistíme, jak pracujete, pomůžeme nastavit služby, tým a pracovní dobu a společně vyzkoušíme první skutečný scénář.' },
        { q: 'V jakých jazycích funguje online rezervace?', a: 'V nastavení rezervací vyberete jazyky stránky, měnu a časové pásmo podniku. Rezervační stránka je dostupná mimo jiné v češtině; které jazyky potřebují vaši klienti, probereme při spuštění.' },
        { q: 'Pomůžete, když si nebudu vědět rady?', a: 'Ano. Provedeme vás spuštěním a odpovídáme na otázky přes Telegram, WhatsApp, Viber a e-mail.' },
        { q: 'Kdo stojí za Hirnixem?', a: 'Hirnix vyvíjí ukrajinský tým v Evropě. Právě dokončujeme registraci společnosti v Česku. Do té doby podmínky spuštění sjednáváme písemně, poté uzavřete smlouvu se společností.' },
        { q: 'Můžu si to nejdřív vyzkoušet?', a: 'Ano, první 2 týdny jsou zdarma. Nabídku pro váš způsob práce připravujeme individuálně — stačí krátký dotaz.' },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      h2: 'Probereme, jak se Hirnix hodí pro váš podnik',
      lead: 'Nechte nám kontakt — řekneme vám o platformě, ukážeme ji na příkladu podobném vašemu a vysvětlíme podmínky.',
      submit: 'Domluvit se na spuštění',
      directLabel: 'Nebo nám napište přímo',
    },
  },

  scheduling: {
    meta: {
      title: 'Rezervační systém a rozvrh pro beauty profesionály',
      description: 'Rezervační kalendář pro beauty mistry a studia: návštěvy podle specialistů, služby, čas, cena a stav každé rezervace. Podívejte se, jak to funguje v Hirnixu.',
    },
    demoAnchor: 'schedule',
    hero: { breadcrumb: 'Rezervace a rozvrh', h1: 'Rozvrh a rezervace klientů pro každodenní práci', lead: 'Sledujte návštěvy, otevírejte detaily rezervací a organizujte práci týmu.', primary: 'Domluvit se na spuštění', secondary: 'Zobrazit v demu', asset: 'calendarDay' },
    why: { eyebrow: 'Proč', h2: 'Celý pracovní den na jedné obrazovce', body: 'Když rezervace žijí v diáři, chatech a paměti, snadno se stane, že návštěvu přehlédnete nebo zapomenete, co si klient objednal. V Hirnixu má každá rezervace své místo v kalendáři: datum, čas, specialista, služby a komentář pohromadě.' },
    scenarios: {
      eyebrow: 'Jak to funguje',
      h2: 'Tři situace, kdy rozvrh pomáhá',
      items: [
        { title: 'Začít den', body: 'Vyberte datum a uvidíte všechny rezervace dne rozložené do sloupců specialistů. Pro plánování dopředu přepněte na týden: rezervace, volné dny i přestávky specialisty.', points: ['Denní zobrazení podle specialistů', 'Týdenní zobrazení pro každého specialistu', 'Volné dny a přestávky v kalendáři'], asset: 'calendarWeek' },
        { title: 'Pracovat s návštěvou', body: 'Otevřete rezervaci a uvidíte vše o návštěvě: jaké služby, jak dlouho trvá, kolik stojí a komentář přímo k této návštěvě.', points: ['Více služeb v jedné návštěvě', 'Cena a délka', 'Komentář k návštěvě'], asset: 'visit' },
        { title: 'Zaznamenat, jak návštěva skončila', body: 'Měňte stav rezervace: naplánováno, hotovo, zrušeno nebo nedostavení. Rozvrh i historie klienta tak zůstanou přesné.', points: ['Stav u každé rezervace', 'Dokončené návštěvy jdou do historie klienta', 'Zrušení a nedostavení zvlášť'] },
      ],
    },
    connections: {
      eyebrow: 'Propojení s dalšími moduly',
      h2: 'Rozvrh je propojený s celou prací',
      items: [
        { route: 'clients', title: 'Databáze klientů', body: 'Z rezervace se dostanete na kartu klienta a jeho předchozí návštěvy.', link: 'Prohlédnout databázi klientů' },
        { route: 'team', title: 'Služby a tým', body: 'Služby s cenou a délkou a pracovní doba specialistů — z toho se rozvrh skládá.', link: 'Služby a pracovní doba' },
        { route: 'booking', title: 'Online rezervace', body: 'Rezervace, které si klienti udělají sami přes váš odkaz, se objeví ve vašem kalendáři.', link: 'O online rezervaci' },
      ],
    },
    proof: { eyebrow: 'V aplikaci', h2: 'Dnešní rezervace — hned na úvodní obrazovce', body: 'Po přihlášení přehled ukáže dnešní rezervace, poslední klienty a oblíbené služby. Snímek aktuální verze Hirnixu s ukázkovými daty.', asset: 'dashboard', demoLink: 'Otevřít „Rozvrh“ v demu' },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky k rezervacím a rozvrhu',
      items: [
        { q: 'Můžu přidat rezervaci ručně?', a: 'Ano. Rezervaci přidáte v kalendáři: vyberete klienta, služby, specialistu a čas. Stejně snadno zapíšete rezervace, které přijdou telefonem nebo zprávou.' },
        { q: 'Může se klient objednat na více služeb najednou?', a: 'Ano, jedna návštěva může obsahovat více služeb, u každé vidíte cenu a délku.' },
        { q: 'Jak zobrazím rezervace jednoho specialisty?', a: 'V denním kalendáři má každý specialista svůj sloupec, takže jeho rezervace vidíte vedle ostatních. Týdenní zobrazení ukáže celý týden jednoho specialisty.' },
        { q: 'Připomíná Hirnix klientům jejich termín?', a: 'Ano. Před návštěvou dostane klient připomínku přes Telegram nebo e-mail s datem, časem, službou a specialistou.' },
        { q: 'Co znamenají stavy rezervace?', a: '„Naplánováno“ — návštěva teprve bude. „Hotovo“ — proběhla a jde do historie klienta i přehledů. „Zrušeno“ — neproběhne. „Nedostavení“ — klient nepřišel.' },
      ],
    },
    cta: { h2: 'Podívejte se, jak by vypadal váš pracovní den v Hirnixu', lead: 'Řekněte nám, jak teď vedete rezervace — ukážeme vám rozvrh pro váš způsob práce.', submit: 'Domluvit se na spuštění' },
  },

  clients: {
    meta: {
      title: 'Databáze klientů a historie návštěv',
      description: 'Databáze klientů pro beauty mistry a studia: vyhledávání, kontakty, minulé i budoucí návštěvy na jedné kartě. Podívejte se, jak to funguje v Hirnixu.',
    },
    demoAnchor: 'client',
    hero: { breadcrumb: 'Databáze klientů', h1: 'Databáze klientů a historie návštěv', lead: 'Najděte kontakty a projděte si historii klienta před jeho další návštěvou.', primary: 'Domluvit se na spuštění', secondary: 'Zobrazit v demu', asset: 'clients' },
    why: { eyebrow: 'Proč', h2: 'Klient není jen řádek v chatu', body: 'Když jsou kontakty rozházené mezi Instagramem, messengery a poznámkami, těžko si vzpomenete, kdo přišel, kdy a na jakou službu. V Hirnixu má každý klient jednu kartu a návštěvy z kalendáře se do jeho historie skládají samy.' },
    scenarios: {
      eyebrow: 'Jak to funguje',
      h2: 'Tři situace, kdy databáze klientů pomáhá',
      items: [
        { title: 'Najít klienta', body: 'Začněte psát jméno nebo telefon do vyhledávání a seznam se zúží. Už žádné procházení chatů kvůli jednomu číslu.', points: ['Vyhledávání v seznamu klientů', 'Kontakty hned u jména', 'Počet návštěv a datum poslední'] },
        { title: 'Připravit se na návštěvu', body: 'Před termínem otevřete kartu: kontakty, předchozí návštěvy se službami a budoucí rezervace — vše na jednom místě.', points: ['Kontakty klienta', 'Předchozí návštěvy a služby', 'Budoucí rezervace'], asset: 'clientCard' },
        { title: 'Vidět historii péče', body: 'Historie se skládá sama: jakmile v kalendáři označíte návštěvu jako hotovou, objeví se na kartě klienta. Vidíte, kolikrát člověk přišel a jaké služby si vybíral.', points: ['Návštěvy se ukládají automaticky', 'Počet návštěv', 'Služby v každé návštěvě'], asset: 'visit' },
      ],
    },
    connections: {
      eyebrow: 'Propojení s dalšími moduly',
      h2: 'Databáze klientů nefunguje izolovaně',
      items: [
        { route: 'scheduling', title: 'Rezervace a rozvrh', body: 'Každá rezervace v kalendáři je propojená s kartou klienta — z návštěvy otevřete jeho historii.', link: 'Jak funguje rozvrh' },
        { route: 'booking', title: 'Online rezervace', body: 'Když se klient objedná přes váš odkaz, jeho kontakty se uloží do databáze.', link: 'O online rezervaci' },
        { route: 'reports', title: 'Přehledy a výsledky', body: 'Dokončené návštěvy klientů tvoří čísla v přehledech za období.', link: 'Co ukazují přehledy' },
      ],
    },
    proof: { eyebrow: 'V aplikaci', h2: 'Noví klienti — vidět už na přehledu', body: 'Poslední klienti a dnešní rezervace jsou na hlavní obrazovce účtu. Snímek aktuální verze Hirnixu s ukázkovými daty.', asset: 'dashboard', demoLink: 'Otevřít „Klient“ v demu' },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky k databázi klientů',
      items: [
        { q: 'Jak vytvořím kartu klienta?', a: 'Kartu můžete přidat ručně v sekci „Klienti“. Vytvoří se také, když zakládáte rezervaci pro nového klienta.' },
        { q: 'Můžu změnit kontakty klienta?', a: 'Ano, kontakty upravíte na kartě klienta. Historie návštěv zůstane zachovaná.' },
        { q: 'Kde vidím historii návštěv?', a: 'Na kartě klienta: jsou tam předchozí návštěvy se službami a budoucí rezervace z kalendáře.' },
        { q: 'Můžu převést svou stávající databázi klientů?', a: 'Řekněte nám, kde teď klienty vedete — v tabulce, jiné aplikaci nebo diáři. Při domluvě o spuštění vysvětlíme, jak data převést ve vašem případě.' },
      ],
    },
    cta: { h2: 'Podívejte se, jak databáze klientů funguje u vás', lead: 'Řekněte nám, jak teď vedete klienty — ukážeme Hirnix pro váš způsob práce.', submit: 'Domluvit se na spuštění' },
  },

  team: {
    meta: {
      title: 'Služby, specialisté a pracovní doba',
      description: 'Ceník služeb s cenami a délkou, služby přiřazené specialistům a pracovní doba v jednom systému. Jak Hirnix sladí práci beauty profesionála nebo studia.',
    },
    demoAnchor: 'team',
    hero: { breadcrumb: 'Služby a tým', h1: 'Služby, specialisté a pracovní doba — v souladu', lead: 'Nastavte, co podnik nabízí, kdo jednotlivé služby dělá a kdy se k němu dá objednat.', primary: 'Domluvit se na spuštění', secondary: 'Zobrazit v demu', asset: 'employees' },
    why: { eyebrow: 'Proč', h2: 'Rezervace začíná nastavením', body: 'Aby systém objednal klienta na správný čas, musí vědět tři věci: co nabízíte, kdo to dělá a kdy ten člověk pracuje. V Hirnixu jsou služby, specialisté a pracovní doba propojené — rozvrh i online rezervace proto vycházejí ze stejných dat.' },
    scenarios: {
      eyebrow: 'Jak to funguje',
      h2: 'Tři kroky, ze kterých se skládá práce studia',
      items: [
        { title: 'Popsat služby', body: 'Seskupte služby do kategorií, přidejte popis, cenu a délku. Délka určuje, kolik času návštěva v rozvrhu zabere.', points: ['Kategorie služeb', 'Cena a délka každé služby', 'Popisy i v dalších jazycích'], asset: 'services' },
        { title: 'Přiřadit služby specialistům', body: 'Určete, kdo dělá které služby. V rozvrhu i při rezervaci se pak dá vybrat jen ten, kdo službu opravdu dělá.', points: ['Vlastní seznam služeb u každého', 'Různé služby u různých lidí', 'Jeden ceník pro celý tým'] },
        { title: 'Nastavit pracovní dobu', body: 'Zadejte pracovní dny a hodiny každého specialisty. Rozvrh ukazuje, kdy se k němu dá objednat.', points: ['Týdenní rozvrh specialisty', 'Pracovní dny a hodiny', 'Objednání podle pracovní doby'] },
      ],
    },
    connections: {
      eyebrow: 'Propojení s dalšími moduly',
      h2: 'Nastavení, které pohání rozvrh i rezervace',
      items: [
        { route: 'scheduling', title: 'Rezervace a rozvrh', body: 'Kalendář ukazuje rezervace ve sloupcích specialistů a délka služeb určuje délku návštěvy.', link: 'Jak funguje rozvrh' },
        { route: 'booking', title: 'Online rezervace', body: 'Klient vidí váš ceník a vybírá specialistu, který danou službu dělá.', link: 'O online rezervaci' },
        { route: 'reports', title: 'Přehledy a výsledky', body: 'Přehledy ukazují, které služby byly nejčastější a jak pracovali specialisté.', link: 'Co ukazují přehledy' },
      ],
    },
    proof: { eyebrow: 'V aplikaci', h2: 'Takhle vypadá karta služby', body: 'Fotka, název, popis a překlady pro rezervační stránku — klient uvidí službu ve svém jazyce. Snímek aktuální verze Hirnixu s ukázkovými daty.', asset: 'serviceEdit', demoLink: 'Otevřít „Služby a tým“ v demu' },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky ke službám a týmu',
      items: [
        { q: 'Můžou různí specialisté dělat různé služby?', a: 'Ano. Každému specialistovi přiřadíte přesně ty služby, které dělá, a při rezervaci se vybere ten správný.' },
        { q: 'Jak se zohledňuje pracovní doba?', a: 'Každý specialista má pracovní dobu — dny a hodiny. Ukazuje, kdy se k němu dá objednat.' },
        { q: 'Můžu popsat služby ve více jazycích?', a: 'Ano, ke službám přidáte překlady názvů a popisů — hodí se, když vaši klienti mluví různými jazyky.' },
        { q: 'Hodí se to, když pracuji sama?', a: 'Ano. Nastavíte si vlastní ceník a pracovní dobu — bez týmu systém funguje stejně.' },
      ],
    },
    cta: { h2: 'Služby a pracovní dobu nastavíme s vámi', lead: 'Řekněte nám, kolik máte specialistů a služeb — ukážeme, jak by to vypadalo v Hirnixu.', submit: 'Domluvit se na spuštění' },
  },

  reports: {
    meta: {
      title: 'Přehledy podle služeb a specialistů',
      description: 'Statistiky rezervací pro beauty mistry a studia: oblíbenost služeb a práce specialistů za zvolené období. Které návštěvy se počítají a jak číst čísla.',
    },
    demoAnchor: 'reports',
    hero: { breadcrumb: 'Přehledy a výsledky', h1: 'Výsledky práce v přehledných reportech', lead: 'Sledujte čísla rezervací, služeb a práce specialistů za zvolené období.', primary: 'Domluvit se na spuštění', secondary: 'Zobrazit v demu', asset: 'reports' },
    why: { eyebrow: 'Proč', h2: 'Vidíte, jak se daří — bez ručního počítání', body: 'Přehledy vznikají ze stejných návštěv, které vedete v kalendáři. Nemusíte nic přepočítávat v diáři ani tabulce: zvolíte období a vidíte, které služby se dělaly a jak pracovali specialisté.' },
    scenarios: {
      eyebrow: 'Jak to funguje',
      h2: 'Tři otázky, na které přehledy odpovídají',
      items: [
        { title: 'Co se dělo za období', body: 'Vyberte období, které chcete vidět. Přehled vychází z dokončených návštěv, takže budoucí a zrušené rezervace se nemíchají s odvedenou prací.', points: ['Výběr období', 'Počítají se dokončené návštěvy', 'Čísla v rámci zvolených dat'] },
        { title: 'Které služby jsou nejoblíbenější', body: 'Podívejte se, které služby byly nejčastější. Pomůže vám to pochopit poptávku a co stojí za to rozvíjet.', points: ['Oblíbenost služeb', 'Počet provedených služeb', 'Nejoblíbenější služby nahoře'], asset: 'reportsDetail' },
        { title: 'Jak pracovali specialisté', body: 'Projděte si dostupná čísla každého specialisty: kolik návštěv a služeb udělal za zvolené období.', points: ['Čísla za každého specialistu', 'Počet návštěv', 'Provedené služby'] },
      ],
    },
    connections: {
      eyebrow: 'Propojení s dalšími moduly',
      h2: 'Odkud se data v přehledech berou',
      items: [
        { route: 'scheduling', title: 'Rezervace a rozvrh', body: 'Jakmile návštěvu označíte jako hotovou, započítá se do přehledů za dané období.', link: 'Stavy rezervací' },
        { route: 'team', title: 'Služby a tým', body: 'Ceník služeb a seznam specialistů určují, podle čeho se čísla člení.', link: 'Služby a pracovní doba' },
        { route: 'clients', title: 'Databáze klientů', body: 'Ze stejných dokončených návštěv se skládá historie každého klienta.', link: 'Prohlédnout databázi klientů' },
      ],
    },
    proof: { eyebrow: 'V aplikaci', h2: 'Rychlé shrnutí — na přehledu', body: 'Dnešní rezervace, oblíbené služby a čísla za poslední dny vidíte hned po přihlášení. Všechna čísla na snímku jsou ukázková, nejde o výsledky klientů.', asset: 'dashboard', demoLink: 'Otevřít „Výsledky“ v demu' },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky k přehledům',
      items: [
        { q: 'Které rezervace se v přehledech počítají?', a: 'Přehledy vycházejí z dokončených návštěv ve zvoleném období. Naplánované a zrušené rezervace ani nedostavení se do čísel odvedené práce nepočítají.' },
        { q: 'Co znamenají částky v přehledu?', a: 'Ukazují hodnotu provedených služeb podle cen ve vašem ceníku. Nejde o účetnictví ani zisk: náklady a skutečné platby v nich nejsou.' },
        { q: 'V jaké měně se částky zobrazují?', a: 'V měně, kterou jste zvolili v nastavení podniku — například v korunách.' },
        { q: 'Co když je zatím málo dat?', a: 'Přehledy se plní s každou dokončenou návštěvou. Na začátku je čísel málo — to je normální: obrázek se zpřesní, jakmile se v systému nasbírá historie za pár týdnů.' },
      ],
    },
    cta: { h2: 'Podívejte se, jaká čísla by měl váš podnik', lead: 'Řekněte nám, co chcete sledovat — ukážeme vám přehledy na příkladu.', submit: 'Domluvit se na spuštění' },
  },

  booking: {
    meta: {
      title: 'Online rezervace pro beauty mistry a studia',
      description: 'Online rezervační stránka pro beauty mistry a studia: přes odkaz nebo QR kód si klient vybere službu, specialistu a volný termín a rezervace se objeví ve vašem rozvrhu.',
    },
    demoAnchor: 'booking',
    hero: { breadcrumb: 'Online rezervace', h1: 'Online rezervace propojená s vaším rozvrhem a databází klientů', lead: 'Sdílejte stránku svého podniku, aby si klient mohl vybrat službu, specialistu a volný čas.', primary: 'Domluvit se na spuštění', secondary: 'Zobrazit v demu', asset: 'bookingStart' },
    why: { eyebrow: 'Proč', h2: 'Méně psaní o volných termínech', body: 'Místo odpovídání na každé „kdy máte volno?“ pošlete klientovi odkaz. Uvidí vaše služby a volné termíny a objedná se sám — a rezervace se objeví ve vašem kalendáři vedle všech ostatních.' },
    scenarios: {
      eyebrow: 'Jak to funguje',
      h2: 'Cesta klienta — od odkazu k rezervaci',
      items: [
        { title: 'Odkaz nebo QR kód', body: 'Sdílejte odkaz na rezervační stránku na Instagramu, v messengeru nebo na webu, případně si vytiskněte QR kód do studia. Stránka je v designu vašeho podniku.', points: ['Vlastní stránka podniku', 'Odkaz pro sociální sítě a messengery', 'QR kód do studia'], asset: 'bookingSettings' },
        { title: 'Výběr služby, specialisty a času', body: 'Klient si vybere jednu nebo více služeb, specialistu a volný čas. Volné termíny respektují pracovní dobu specialistů i délku služeb.', points: ['Váš ceník služeb', 'Výběr specialisty', 'Volný čas podle rozvrhu'], asset: 'bookingServices' },
        { title: 'Rezervace ve vašem kalendáři', body: 'Jakmile klient vyplní kontakty a rezervaci potvrdí, návštěva se objeví ve vašem rozvrhu a kontakt v databázi klientů.', points: ['Rezervace jde do kalendáře', 'Klient jde do databáze', 'Pracujete s ní jako s každou jinou'], asset: 'calendarDay' },
      ],
    },
    connections: {
      eyebrow: 'Propojení s dalšími moduly',
      h2: 'Online rezervace pracuje se stejnými daty',
      items: [
        { route: 'scheduling', title: 'Rezervace a rozvrh', body: 'Online rezervace jsou v kalendáři spolu s těmi, které zadáte ručně.', link: 'Jak funguje rozvrh' },
        { route: 'clients', title: 'Databáze klientů', body: 'Kontakty klientů, kteří se objednali online, se uloží do databáze i s historií návštěv.', link: 'Prohlédnout databázi klientů' },
        { route: 'team', title: 'Služby a tým', body: 'Klient vidí váš ceník a specialisty, kteří služby dělají, v rámci jejich pracovní doby.', link: 'Služby a pracovní doba' },
      ],
    },
    proof: { eyebrow: 'V aplikaci', h2: 'Volný čas — podle rozvrhu specialisty', body: 'Klient vybere datum a vidí jen volné termíny zvoleného specialisty. Snímek aktuální verze Hirnixu s ukázkovými daty; název podniku, služby a ceny jsou smyšlené.', asset: 'bookingTime', demoLink: 'Otevřít „Online rezervace“ v demu' },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky k online rezervaci',
      items: [
        { q: 'V jakých jazycích je rezervační stránka?', a: 'V nastavení vyberete jazyky rezervační stránky, měnu a časové pásmo. Stránka je dostupná mimo jiné v češtině; které jazyky potřebují vaši klienti, probereme při spuštění.' },
        { q: 'Kam dát odkaz na rezervaci?', a: 'Všude, kde vás klienti kontaktují: do profilu na Instagramu, do odpovědi v messengeru, na web nebo do profilu na Googlu. Do studia si můžete vytisknout QR kód.' },
        { q: 'Co klient při rezervaci vidí?', a: 'Vaše služby, specialisty, kteří je dělají, a volné termíny. Pak vyplní kontakty a rezervaci potvrdí.' },
        { q: 'Můžu dál přidávat rezervace ručně?', a: 'Ano. Online rezervace ruční zadávání nenahrazuje: obojí je ve stejném kalendáři.' },
      ],
    },
    cta: { h2: 'Spusťme online rezervace pro váš podnik', lead: 'Řekněte nám, kde se k vám klienti teď objednávají — rezervační stránku nastavíme spolu.', submit: 'Domluvit se na spuštění' },
  },

  independent: {
    meta: {
      title: 'CRM pro samostatné beauty profesionály',
      description: 'CRM pro beauty mistry, kteří pracují na sebe: vlastní rozvrh, databáze klientů s historií návštěv, ceník služeb a online rezervace přes odkaz. První 2 týdny zdarma.',
    },
    hero: { breadcrumb: 'Pro samostatné profesionály', h1: 'CRM pro mistra, který pracuje na sebe', lead: 'Když klienty obsluhujete, odpovídáte na zprávy a plánujete den sami, Hirnix drží rezervace, klienty a služby na jednom místě.', primary: 'Domluvit se na spuštění', secondary: 'Prohlédnout platformu', asset: 'calendarWeek' },
    story: { eyebrow: 'Znáte to?', h2: 'Jste specialista i recepce zároveň', body: 'Mezi klienty je potřeba odepsat na Instagramu, vzpomenout si, kdy máte volno, a nezapomenout, co jste stálé klientce dělali minule. Když je všechno v chatech a v hlavě, něco se vždycky ztratí. Hirnix drží rozvrh, klienty a služby pohromadě — a klienti se mohou objednat sami.' },
    blocks: {
      eyebrow: 'Váš den v Hirnixu',
      h2: 'Jak Hirnix pomáhá mistrovi, který pracuje sám',
      items: [
        { title: 'Vlastní rozvrh', body: 'Všechny rezervace dne v jednom kalendáři. Otevřete návštěvu a uvidíte služby, čas, cenu i komentář.', asset: 'dashboard', route: 'scheduling', link: 'Jak funguje rozvrh' },
        { title: 'Historie každého klienta', body: 'Před návštěvou otevřete kartu: kontakty, předchozí návštěvy a služby, které si klient vybíral.', asset: 'clientCard', route: 'clients', link: 'Prohlédnout databázi klientů' },
        { title: 'Váš ceník služeb', body: 'Popište služby s cenou a délkou — rozvrh pak sám ví, kolik času každá návštěva zabere.', asset: 'services', route: 'team', link: 'Nastavení služeb' },
        { title: 'Klienti se objednávají sami', body: 'Sdílejte odkaz na rezervační stránku na Instagramu nebo v messengeru — klient si vybere službu a volný čas bez dopisování.', asset: 'bookingSummary', route: 'booking', link: 'O online rezervaci' },
        { title: 'Výsledky za měsíc', body: 'Podívejte se, které služby jste dělali nejčastěji a kolik návštěv bylo za období.', asset: 'reports', route: 'reports', link: 'Co ukazují přehledy' },
      ],
    },
    launch: {
      eyebrow: 'Spuštění',
      h2: 'Jak začít',
      steps: [
        { title: 'Krátký rozhovor', body: 'Řekněte nám, jak teď vedete rezervace a klienty.' },
        { title: 'Nastavení společně', body: 'Doplníme vaše služby a pracovní dobu a nastavíme rezervační stránku.' },
        { title: '2 týdny zdarma', body: 'Pracujete v Hirnixu se skutečnými rezervacemi, než se rozhodnete.' },
      ],
    },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky od mistrů, kteří pracují sami',
      items: [
        { q: 'Není to na jednoho člověka moc složité?', a: 'Ne. Potřebujete stejný rozvrh, klienty a služby jako studio — jen bez týmu. Systém nastavíme s vámi, takže nezačínáte od nuly sami.' },
        { q: 'Můžou se klienti objednávat, i když zrovna pracuji?', a: 'Ano. Klient se objedná přes váš odkaz, kdy se mu to hodí, a rezervace se objeví ve vašem kalendáři.' },
        { q: 'Co s klienty, které mám v diáři nebo tabulce?', a: 'Řekněte nám, kde teď databázi máte — při spuštění vysvětlíme, jak ji ve vašem případě převést.' },
        { q: 'Můžu pracovat z telefonu?', a: 'Hirnix běží v prohlížeči, takže se otevře na počítači i v telefonu. Ukážeme vám, jak to vypadá, při seznámení.' },
      ],
    },
    cta: { h2: 'Vyzkoušejte Hirnix ve své práci', lead: 'Řekněte nám, jak teď vedete rezervace — systém nastavíme pro vás. První 2 týdny jsou zdarma.', submit: 'Domluvit se na spuštění' },
  },

  studios: {
    meta: {
      title: 'CRM a rezervační systém pro beauty studia',
      description: 'CRM pro kosmetická a beauty studia: společný kalendář podle specialistů, přiřazení služeb, pracovní doba, databáze klientů a přehledy. První 2 týdny zdarma.',
    },
    hero: { breadcrumb: 'Pro beauty studia', h1: 'CRM pro řízení beauty studia', lead: 'Služby, pracovní doba a rezervace více specialistů — sladěné v jednom systému, abyste viděli práci celého studia.', primary: 'Domluvit se na spuštění', secondary: 'Prohlédnout platformu', asset: 'dashboard' },
    story: { eyebrow: 'Znáte to?', h2: 'Několik specialistů — a jeden rozvrh, který musíte držet v hlavě', body: 'Každý specialista má své služby a pracovní dny, klienti píšou do různých messengerů a rezervace jsou rozházené mezi chaty a diářem. Abyste zjistili, kdo je vytížený a kdo má volno, musíte to skládat ručně. Hirnix ukáže práci celého týmu v jednom kalendáři.' },
    blocks: {
      eyebrow: 'Studio v Hirnixu',
      h2: 'Jak Hirnix sladí práci týmu',
      items: [
        { title: 'Kdo dělá které služby', body: 'Jeden ceník pro celé studio a každému specialistovi přiřazené přesně ty služby, které dělá.', asset: 'employees', route: 'team', link: 'Služby a tým' },
        { title: 'Pracovní doba specialistů', body: 'Pracovní dny a hodiny každého specialisty určují, kdy se k němu dá objednat.', asset: 'calendarWeek', route: 'team', link: 'Nastavení pracovní doby' },
        { title: 'Společný kalendář', body: 'Rezervace celého týmu na den ve sloupcích specialistů. Vidíte, kdo s kým a kdy pracuje.', asset: 'calendarDay', route: 'scheduling', link: 'Jak funguje rozvrh' },
        { title: 'Klienti studia', body: 'Jedna databáze klientů pro celé studio: kontakty a historie návštěv, i když klient chodí k různým specialistům.', asset: 'clientCard', route: 'clients', link: 'Prohlédnout databázi klientů' },
        { title: 'Přehledy podle služeb a specialistů', body: 'Podívejte se, které služby byly nejčastější a jaká čísla má každý specialista za zvolené období.', asset: 'reportsDetail', route: 'reports', link: 'Co ukazují přehledy' },
      ],
    },
    launch: {
      eyebrow: 'Spuštění',
      h2: 'Jak zapojit studio',
      steps: [
        { title: 'Zjistíme váš formát', body: 'Kolik specialistů, jaké služby, jak se teď vedou rezervace.' },
        { title: 'Nastavíme to společně', body: 'Doplníme služby, specialisty a pracovní dobu v dohodnutém rozsahu.' },
        { title: '2 týdny zdarma', body: 'Tým pracuje v Hirnixu se skutečnými rezervacemi, než se rozhodnete.' },
      ],
    },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky od studií',
      items: [
        { q: 'Můžou mít specialisté různé služby a pracovní dobu?', a: 'Ano. Každý specialista má své služby a vlastní pracovní dobu.' },
        { q: 'Vidí recepce rezervace všech specialistů?', a: 'Ano, denní kalendář ukazuje rezervace celého týmu ve sloupcích specialistů.' },
        { q: 'Můžou mít specialisté vlastní přístup do systému?', a: 'Řekněte nám, jak máte rozdělené povinnosti — při spuštění ukážeme, jak přístup pro tým zorganizovat.' },
        { q: 'Kolik specialistů může v Hirnixu pracovat?', a: 'Hirnix je stavěný pro samostatné mistry a menší studia. Pokud máte větší tým, popište svůj formát v dotazu a posoudíme ho zvlášť.' },
      ],
    },
    cta: { h2: 'Podívejte se, jak by vypadala práce vašeho studia', lead: 'Řekněte nám, kolik máte specialistů a služeb — ukážeme Hirnix na příkladu podobném vašemu studiu.', submit: 'Domluvit se na spuštění' },
  },

  demo: {
    meta: {
      title: 'Demo: jak funguje Hirnix',
      description: 'Otevřená prohlídka Hirnixu bez registrace: rozvrh, karta klienta, služby a tým, přehledy a online rezervace na ukázkových datech.',
    },
    hero: {
      breadcrumb: 'Demo',
      h1: 'Podívejte se, jak Hirnix funguje',
      lead: 'Krátká prohlídka jednoho ukázkového podniku — od denního rozvrhu po online rezervaci. Bez registrace a bez zanechání kontaktu.',
      note: 'Všechna jména, služby a čísla v prohlídce jsou ukázková. Snímky zachycují anglické rozhraní.',
      tocLabel: 'Části prohlídky',
    },
    chapters: [
      { id: 'schedule', route: 'scheduling', title: 'Rozvrh', lead: 'Pracovní den ve sloupcích specialistů a detail každé návštěvy.', steps: ['Vybereme datum a vidíme všechny rezervace dne podle specialistů.', 'Otevřeme rezervaci: služby, čas, cena, délka a komentář.', 'Po návštěvě změníme stav — například na „hotovo“.'], assets: ['calendarDay', 'visit'], link: 'Více o rezervacích a rozvrhu' },
      { id: 'client', route: 'clients', title: 'Klient', lead: 'Vyhledávání v databázi a karta s historií návštěv.', steps: ['Najdeme klienta v seznamu — podle jména nebo telefonu.', 'Otevřeme kartu: kontakty, předchozí návštěvy a budoucí rezervace.', 'Vidíme, kolikrát člověk přišel a jaké služby si vybíral.'], assets: ['clients', 'clientCard'], link: 'Více o databázi klientů' },
      { id: 'team', route: 'team', title: 'Služby a tým', lead: 'Ceník služeb, přiřazení specialistům a pracovní doba.', steps: ['Přidáme službu: kategorie, popis, cena a délka.', 'Přiřadíme službu specialistům, kteří ji dělají.', 'Nastavíme pracovní dobu — kdy se dá ke specialistovi objednat.'], assets: ['services', 'employees'], link: 'Více o službách a týmu' },
      { id: 'reports', route: 'reports', title: 'Výsledky', lead: 'Čísla služeb a specialistů za zvolené období.', steps: ['Zvolíme období — přehled vychází z dokončených návštěv.', 'Vidíme, které služby byly nejčastější.', 'Procházíme čísla každého specialisty.'], assets: ['reports', 'reportsDetail'], link: 'Více o přehledech' },
      { id: 'booking', route: 'booking', title: 'Online rezervace', lead: 'Cesta klienta od odkazu k rezervaci v kalendáři.', steps: ['Klient otevře stránku podniku přes odkaz nebo QR kód.', 'Vybere službu, specialistu a volný čas.', 'Potvrdí rezervaci — a návštěva se objeví v kalendáři.'], assets: ['bookingServices', 'bookingTime'], link: 'Více o online rezervaci' },
    ],
    stepLabel: 'Co se děje',
    cta: { eyebrow: 'Dál', h2: 'Ukažte mi Hirnix pro můj způsob práce', lead: 'Řekněte nám, jak pracujete — projdeme stejný postup na příkladu podobném vašemu podniku.', submit: 'Ukázat pro můj podnik' },
  },

  conditions: {
    meta: {
      title: 'Podmínky spuštění a individuální nabídka',
      description: 'Jak začít s Hirnixem: první 2 týdny zdarma, individuální nastavení pro váš způsob práce a nabídka podle potřeb mistra nebo studia.',
    },
    hero: {
      breadcrumb: 'Podmínky',
      h1: 'Podmínky spuštění pro váš podnik',
      lead: 'Každého mistra i každé studio zapojujeme individuálně: systém nastavíme pro váš způsob práce a připravíme nabídku podle vašich potřeb.',
      primary: 'Získat nabídku',
      note: 'Dotaz vás k ničemu nezavazuje.',
    },
    trial: { label: 'Zkušební období zdarma', value: '2 týdny', body: 'Pracujte v Hirnixu se svými rezervacemi a klienty, než se rozhodnete.' },
    product: {
      eyebrow: 'Produkt',
      h2: 'Co Hirnix obsahuje',
      lead: 'Moduly, které spolu fungují a máte je ve svém účtu.',
      items: [
        { route: 'scheduling', title: 'Rezervace a rozvrh', body: 'Denní kalendář podle specialistů, detaily a stavy návštěv.' },
        { route: 'clients', title: 'Databáze klientů', body: 'Vyhledávání, kontakty a historie návštěv každého klienta.' },
        { route: 'team', title: 'Služby a tým', body: 'Ceník služeb, přiřazení specialistům, pracovní doba.' },
        { route: 'reports', title: 'Přehledy a výsledky', body: 'Čísla služeb a specialistů za zvolené období.' },
        { route: 'booking', title: 'Online rezervace', body: 'Stránka podniku, kde si klient vybere službu, specialistu a čas.' },
      ],
    },
    launch: {
      eyebrow: 'Individuální spuštění',
      h2: 'Zapojíme vás společně',
      items: [
        { title: 'Nastavení pro váš formát', body: 'Pomůžeme doplnit služby, specialisty a pracovní dobu v dohodnutém rozsahu.' },
        { title: 'Vyzkoušení prvního scénáře', body: 'Projdeme skutečný postup od rezervace po dokončenou návštěvu.' },
        { title: 'Podpora na dosah', body: 'Odpovídáme přes Telegram, WhatsApp, Viber a e-mail během spuštění i běžného provozu.' },
      ],
    },
    offer: {
      eyebrow: 'Nabídka',
      h2: 'Nabídka podle vašich potřeb',
      lead: 'Žádný univerzální balíček pro všechny. Nabídka vychází z toho, jak skutečně pracujete.',
      items: [
        { title: 'Způsob práce', body: 'Pracujete sami, nebo s týmem specialistů.' },
        { title: 'Potřebné funkce', body: 'Které moduly jsou pro vás nejdůležitější.' },
        { title: 'Rozsah spuštění', body: 'Kolik služeb a rozvrhů nastavit a zda převádět stávající databázi klientů.' },
      ],
    },
    process: {
      eyebrow: 'Další krok',
      h2: 'Jak získat nabídku',
      steps: [
        { title: 'Pošlete dotaz', body: 'Jméno a telefon nebo e-mail. Způsob práce uveďte, pokud chcete, abychom se připravili předem.' },
        { title: 'Upřesníme podrobnosti', body: 'Ozveme se vám a položíme pár otázek k vaší práci.' },
        { title: 'Pošleme nabídku', body: 'Vysvětlíme, co spuštění obsahuje, a domluvíme podmínky. Rozhodnutí je na vás.' },
      ],
    },
    form: { eyebrow: 'Dotaz', h2: 'Získat nabídku', lead: 'Stačí jméno a telefon nebo e-mail.', submit: 'Získat nabídku' },
    faq: {
      eyebrow: 'Otázky',
      h2: 'Otázky k podmínkám',
      items: [
        { q: 'Je k dispozici zkušební období zdarma?', a: 'Ano, první 2 týdny jsou zdarma. Během nich můžete v Hirnixu pracovat se svými rezervacemi a klienty.' },
        { q: 'Proč nemáte jeden balíček pro všechny?', a: 'Mistři a studia pracují různě: jiný počet lidí, služeb i potřeb na nastavení. Proto připravujeme nabídku pro konkrétní podnik, místo abychom ho tlačili do šablony.' },
        { q: 'Co potřebujete k přípravě nabídky?', a: 'Jméno a telefon nebo e-mail. Když rovnou uvedete, jak pracujete — sami, nebo s týmem —, nabídka se připraví snáz.' },
        { q: 'Zavazuje mě dotaz k něčemu?', a: 'Ne. Dotaz jen znamená, že připravíme nabídku a odpovíme na vaše otázky.' },
        { q: 'S kým uzavírám dohodu?', a: 'Hirnix vyvíjí ukrajinský tým v Evropě. Právě dokončujeme registraci společnosti v Česku. Do té doby podmínky spuštění sjednáváme písemně, poté uzavřete smlouvu se společností.' },
        { q: 'Pracujete i s podniky s více specialisty?', a: 'Popište svůj formát v dotazu — posoudíme ho zvlášť.' },
      ],
    },
  },

  contact: {
    meta: {
      title: 'Kontakt a spuštění',
      description: 'Ozvěte se Hirnixu přes Telegram, WhatsApp, Viber, telefon nebo e-mail. Řekneme vám o platformě, ukážeme ji pro váš způsob práce a pomůžeme se spuštěním.',
    },
    hero: { breadcrumb: 'Kontakt', h1: 'Ozvěte se nám, jak vám to vyhovuje', lead: 'Napište do messengeru, zavolejte nebo pošlete dotaz — řekneme vám o Hirnixu a domluvíme další krok.' },
    channels: { eyebrow: 'Kanály', h2: 'Přímo', phoneLabel: 'Telefon', messengersLabel: 'Messengery', messengersNote: 'Telegram, WhatsApp i Viber — na stejném čísle.', emailLabel: 'E-mail' },
    next: {
      eyebrow: 'Co dál',
      h2: 'Co se stane po vašem dotazu',
      steps: [
        { title: 'Ozveme se vám', body: 'Na uvedený telefon nebo e-mail — zjistíme, jak pracujete a co je pro vás důležité.' },
        { title: 'Ukážeme vám Hirnix', body: 'Projdeme postup na příkladu podobném vašemu podniku a odpovíme na otázky.' },
        { title: 'Domluvíme spuštění', body: 'Připravíme nabídku podle vašich potřeb a systém nastavíme s vámi. První 2 týdny jsou zdarma.' },
      ],
    },
    login: { h2: 'Už Hirnix používáte?', body: 'Přihlaste se do svého účtu a pracujte s rezervacemi, klienty a nastavením.', cta: 'Přihlásit se do účtu' },
    form: { eyebrow: 'Kontakt', h2: 'Pošlete dotaz', lead: 'Stačí jméno a telefon nebo e-mail. Pokud chcete, připište pár slov o svém podniku.', submit: 'Odeslat dotaz' },
  },
};
