/**
 * Polish copy. Audience: beauty professionals and salons in Poland
 * (not a literal translation of the Ukrainian site).
 * The booking page has a Polish version; the CRM itself is UK/EN only
 * (as of 2026-10-17) — never claim a Polish-language app. Screenshots on
 * non-Ukrainian pages show the English interface. Same claims and limits as
 * the Ukrainian source otherwise — see the H0x / ПОГОДИТИ markers there.
 */

import type { SiteCopy } from '../copy';

export const pl: SiteCopy = {
  common: {
    routes: {
      home: { label: 'Strona główna' },
      scheduling: { label: 'Rezerwacje i grafik', hint: 'Dzień pracy, wizyty i zespół w jednym kalendarzu' },
      clients: { label: 'Baza klientów', hint: 'Kontakty i historia wizyt każdego klienta' },
      team: { label: 'Usługi i zespół', hint: 'Cennik usług, kto co wykonuje, godziny pracy' },
      reports: { label: 'Raporty i wyniki', hint: 'Liczby rezerwacji, usług i pracy specjalistów za dowolny okres' },
      booking: { label: 'Rezerwacja online', hint: 'Strona, na której klienci sami wybierają usługę i termin' },
      independent: { label: 'Dla specjalistów', hint: 'Pracujesz samodzielnie, bez recepcji' },
      studios: { label: 'Dla salonów beauty', hint: 'Koordynacja zespołu kilku specjalistów' },
      demo: { label: 'Demo' },
      conditions: { label: 'Warunki' },
      contact: { label: 'Kontakt' },
      privacy: { label: 'Polityka prywatności (UA)' },
      cookies: { label: 'Cookies (UA)' },
    },
    ui: {
      skipLink: 'Przejdź do treści',
      mainNav: 'Menu główne',
      languageNav: 'Język strony',
      breadcrumbs: 'Ścieżka nawigacji',
      contactEyebrow: 'Kontakt',
      directLabel: 'Albo napisz do nas bezpośrednio',
      loginCabinet: 'Zaloguj się do konta',
      optional: 'opcjonalnie',
    },
    seo: {
      ogTagline: 'CRM dla specjalistów beauty i salonów',
      appDescription: 'CRM dla specjalistów beauty i salonów: baza klientów, grafik, usługi, zespół, raporty i rezerwacja online.',
    },
    header: {
      featuresLabel: 'Funkcje',
      segmentsLabel: 'Dla kogo',
      login: 'Zaloguj się',
      cta: 'Porozmawiajmy',
      openMenu: 'Otwórz menu',
      closeMenu: 'Zamknij menu',
    },
    footer: {
      brand: 'CRM dla specjalistów beauty i salonów: klienci, rezerwacje, usługi, zespół i wyniki w jednym systemie.',
      featuresHeading: 'Funkcje',
      companyHeading: 'Hirnix',
      contactsHeading: 'Kontakt',
      copyright: `© ${new Date().getFullYear()} Hirnix`,
    },
    assets: {
      demoNote: 'Dane demonstracyjne · interfejs w języku angielskim',
      alt: {
        dashboard: 'Pulpit Hirnix: dzisiejsze rezerwacje, ostatni klienci, popularne usługi',
        calendarDay: 'Kalendarz dzienny Hirnix z rezerwacjami w kolumnach trzech specjalistów',
        calendarWeek: 'Kalendarz tygodniowy jednego specjalisty z dniami wolnymi, przerwą i rezerwacjami',
        visit: 'Otwarta rezerwacja: specjalista, usługi z ceną i czasem trwania, data, godzina, status i komentarze',
        clients: 'Lista klientów z wyszukiwarką, liczbą wizyt i datą ostatniej wizyty',
        clientCard: 'Karta klienta: liczba wizyt, komentarze i historia rezerwacji ze statusami',
        services: 'Cennik usług z kategoriami, cenami i czasem trwania',
        serviceEdit: 'Edycja usługi: zdjęcie, nazwa, opis i tłumaczenia dla strony rezerwacji',
        employees: 'Specjaliści salonu z przypisanymi usługami i tygodniowymi godzinami pracy',
        reports: 'Raport Hirnix: podsumowanie okresu i wykres miesięczny',
        reportsDetail: 'Raport według usług i specjalistów oraz obłożenie według dni tygodnia',
        bookingSettings: 'Ustawienia strony rezerwacji: link, kod QR, wygląd i języki',
        bookingStart: 'Strona rezerwacji online salonu na telefonie',
        bookingMasters: 'Rezerwacja online: wybór specjalisty z jego specjalizacją i opisem',
        bookingServices: 'Rezerwacja online: wybór usługi ze zdjęciem, opisem, czasem trwania i ceną',
        bookingSummary: 'Rezerwacja online: wybrany specjalista i usługa przed wyborem godziny',
        bookingTime: 'Rezerwacja online: wybór daty i wolnego terminu',
      },
    },
    form: {
      nameLabel: 'Imię',
      namePlaceholder: 'Imię',
      phoneLabel: 'Telefon',
      phoneCountry: 'PL',
      phoneInvalid: 'Sprawdź numer — wygląda na za krótki albo wybrano zły kraj.',
      emailLabel: 'E-mail',
      emailPlaceholder: 'hello@example.com',
      emailInvalid: 'Sprawdź adres e-mail — wygląda na to, że jest w nim literówka.',
      contactHint: 'Wystarczy jeden kontakt — telefon albo e-mail.',
      nameRequired: 'Podaj, jak masz na imię.',
      contactRequired: 'Dodaj telefon albo e-mail, żebyśmy mogli odpowiedzieć.',
      formatLabel: 'Jak pracujesz',
      formatOptions: [
        { value: 'solo', label: 'Samodzielnie' },
        { value: 'team', label: 'Salon z zespołem' },
        { value: 'other', label: 'Inaczej' },
      ],
      detailsToggle: 'Dodaj szczegóły (opcjonalnie)',
      businessLabel: 'Nazwa firmy',
      linkLabel: 'Strona lub Instagram',
      linkPlaceholder: 'instagram.com/…',
      commentLabel: 'Co jest dla Ciebie teraz ważne',
      commentPlaceholder: 'Na przykład: gdzie teraz prowadzisz rezerwacje, ilu masz specjalistów, jakie masz pytania',
      privacyNote: 'Twoich danych kontaktowych użyjemy tylko, aby odpowiedzieć na to zgłoszenie.',
      privacyLink: 'Polityka prywatności',
      sending: 'Wysyłanie…',
      errorTitle: 'Nie udało się wysłać zgłoszenia.',
      errorBody: 'Twoje dane zostały w formularzu — spróbuj ponownie albo napisz do nas bezpośrednio:',
      retry: 'Wyślij ponownie',
      successTitle: 'Zgłoszenie przyjęte',
      successBody: 'Skontaktujemy się z Tobą przez podane dane, żeby poznać Twój sposób pracy i ustalić kolejny krok.',
      successContacts: 'Twoje dane kontaktowe',
      successNext: 'W międzyczasie możesz obejrzeć platformę.',
      successNextLink: 'Zobacz demo',
    },
  },

  home: {
    meta: {
      title: 'Hirnix — CRM dla specjalistów beauty i salonów',
      description:
        'CRM dla specjalistów beauty i salonów: baza klientów, grafik, usługi, zespół i raporty w jednym systemie, a klienci rezerwują online. Pierwsze 2 tygodnie gratis.',
    },
    hero: {
      eyebrow: 'CRM dla specjalistów beauty i salonów',
      h1: 'Klienci, rezerwacje i codzienna praca — w jednym systemie',
      lead:
        'Prowadź bazę klientów, układaj grafik, ustaw usługi i zespół, sprawdzaj wyniki. Hirnix przejmuje codzienną rutynę, a klienci rezerwują online w wygodnym dla siebie języku — także po polsku.',
      highlights: [],
      primary: 'Porozmawiajmy',
      secondary: 'Zobacz platformę',
      trust: ['Pierwsze 2 tygodnie gratis', 'Indywidualne wdrożenie', 'Prezentacja bez rejestracji'],
    },
    workday: {
      eyebrow: 'Przykład',
      h2: 'Jeden dzień pracy w Hirnix',
      lead: 'Jak łączą się moduły: od porannego grafiku po wyniki za okres. Przykład pokazuje dane szkoleniowe.',
      steps: [
        { time: 'Rano', title: 'Grafik na dziś', body: 'Wybierz datę i zobacz wszystkie rezerwacje w kolumnach specjalistów.', link: { route: 'scheduling', label: 'Jak działa grafik' } },
        { time: 'W ciągu dnia', title: 'Nowa rezerwacja', body: 'Dodaj wizytę ręcznie albo odbierz rezerwację, którą klient zrobił online przez Twój link.', link: { route: 'booking', label: 'O rezerwacji online' } },
        { time: 'Przed wizytą', title: 'Karta klienta', body: 'Otwórz dane kontaktowe i poprzednie wizyty, żeby pamiętać, co było robione ostatnio.', link: { route: 'clients', label: 'O bazie klientów' } },
        { time: 'Po wizycie', title: 'Status rezerwacji', body: 'Oznacz wizytę jako zrealizowaną, odwołaną lub nieodbytą — historia klienta zostaje rzetelna.', link: { route: 'scheduling', label: 'Statusy rezerwacji' } },
        { time: 'Koniec okresu', title: 'Raport', body: 'Zobacz, które usługi były wykonywane najczęściej i jak pracowali specjaliści w wybranym okresie.', link: { route: 'reports', label: 'Co pokazują raporty' } },
      ],
    },
    features: {
      eyebrow: 'Funkcje',
      h2: 'Pięć modułów, które działają razem',
      lead: 'Każdy ma własną stronę z prawdziwymi ekranami i odpowiedziami na częste pytania.',
      items: [
        { route: 'scheduling', asset: 'calendarWeek', title: 'Rezerwacje i grafik', body: 'Kalendarz dzienny z kolumną dla każdego specjalisty. Otwórz rezerwację, by zobaczyć usługi, godzinę, cenę, czas trwania i komentarze.', link: 'Jak działa grafik' },
        { route: 'clients', asset: 'clients', title: 'Baza klientów', body: 'Wyszukiwanie klientów, dane kontaktowe, poprzednie i nadchodzące wizyty oraz liczba wizyt na każdej karcie.', link: 'Poznaj bazę klientów' },
        { route: 'team', asset: 'employees', title: 'Usługi i zespół', body: 'Cennik usług z kategoriami, cenami i czasem trwania. Kto wykonuje którą usługę i kiedy można się do niego zapisać.', link: 'Usługi i godziny pracy' },
        { route: 'reports', asset: 'reports', title: 'Raporty i wyniki', body: 'Liczby za wybrany okres: popularne usługi, praca specjalistów i podsumowanie zrealizowanych wizyt.', link: 'Co pokazują raporty' },
        { route: 'booking', asset: 'bookingServices', title: 'Rezerwacja online', body: 'Strona Twojego biznesu pod linkiem lub kodem QR: klienci wybierają usługę, specjalistę i godzinę, a rezerwacja trafia do kalendarza.', link: 'O rezerwacji online' },
      ],
    },
    segments: {
      eyebrow: 'Dla kogo',
      h2: 'Pracujesz sama, sam czy z zespołem?',
      items: [
        {
          route: 'independent',
          tag: 'Specjalista',
          title: 'Gdy jesteś jednocześnie specjalistą i recepcją',
          body: 'Własny grafik, baza klientów, cennik usług i strona rezerwacji, którą udostępnisz na Instagramie lub w komunikatorach. Mniej pisania, więcej czasu na pracę.',
          points: ['Grafik i karty klientów w jednym miejscu', 'Link do rezerwacji dla klientów', 'Miesięczne podsumowanie wyników'],
          link: 'CRM dla specjalistów',
        },
        {
          route: 'studios',
          tag: 'Salon beauty',
          title: 'Gdy kilka osób musi pracować zgodnie',
          body: 'Wspólny kalendarz według specjalistów, przypisane usługi, godziny pracy i raporty dla każdej osoby — cały salon widzisz na jednym ekranie.',
          points: ['Kalendarz z kolumnami specjalistów', 'Kto wykonuje które usługi i kiedy', 'Raporty według usług i specjalistów'],
          link: 'CRM dla salonów beauty',
        },
      ],
    },
    example: {
      eyebrow: 'Przykład szkoleniowy',
      h2: 'Jak wygląda skonfigurowany biznes',
      lead: 'Dopóki nie opublikujemy zatwierdzonych historii klientów, pokazujemy biznes szkoleniowy. Wszystkie nazwy i liczby w nim to dane demonstracyjne.',
      facts: [
        { label: 'Specjaliści', value: 'kilka osób z własnymi godzinami pracy' },
        { label: 'Usługi', value: 'kategorie z cenami, czasem trwania i opisami' },
        { label: 'Klienci', value: 'dane kontaktowe, zrealizowane i nadchodzące wizyty' },
        { label: 'Rezerwacja online', value: 'strona biznesu z wyborem usługi, specjalisty i godziny' },
      ],
      link: 'Zobacz demo',
    },
    onboarding: {
      eyebrow: 'Start',
      h2: 'Jak zaczyna się praca z Hirnix',
      steps: [
        { title: 'Poznajemy Twoje potrzeby', body: 'Krótka rozmowa: jak dziś przyjmujesz rezerwacje, ilu masz specjalistów, co ustawić najpierw.' },
        { title: 'Konfigurujemy system', body: 'Razem dodajemy usługi, zespół i godziny pracy w uzgodnionym zakresie.' },
        { title: 'Sprawdzamy pierwszy scenariusz', body: 'Przechodzimy prawdziwy proces — od rezerwacji do zrealizowanej wizyty — żeby start był spokojny i pewny.' },
      ],
    },
    terms: {
      eyebrow: 'Warunki',
      h2: 'Indywidualne wdrożenie i oferta dopasowana do Twoich potrzeb',
      body: 'Nie wciskamy Twojego biznesu w szablon. Opowiedz, jak pracujesz — skonfigurujemy Hirnix razem z Tobą i przygotujemy ofertę dla Twojego modelu pracy. Pierwsze 2 tygodnie są bezpłatne.',
      needLabel: 'Co pomoże nam przygotować ofertę',
      needs: ['Czy pracujesz samodzielnie, czy z zespołem', 'Których modułów potrzebujesz najpierw', 'Czy trzeba przenieść obecną listę klientów'],
      cta: 'Zobacz warunki',
    },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Najczęstsze pytania',
      items: [
        { q: 'Czy Hirnix sprawdzi się, jeśli pracuję sama, bez recepcji?', a: 'Tak. Grafik, klientów i usługi prowadzisz w jednym systemie, a klienci mogą zapisywać się sami przez link. Słowo „salon” na tej stronie nie znaczy, że produkt jest tylko dla zespołów.' },
        { q: 'Jak zacząć?', a: 'Wyślij zgłoszenie albo napisz do nas. Poznamy Twój sposób pracy, pomożemy ustawić usługi, zespół i godziny oraz sprawdzimy z Tobą pierwszy prawdziwy proces.' },
        { q: 'W jakich językach działa rezerwacja online?', a: 'W ustawieniach wybierasz języki strony rezerwacji, walutę i strefę czasową. Obecnie dostępne są: polski, angielski, czeski i ukraiński.' },
        { q: 'Czy pomożecie, jeśli coś będzie niejasne?', a: 'Tak. Wspieramy Cię przy starcie i odpowiadamy na pytania przez Telegram, WhatsApp, Viber i e-mail.' },
        { q: 'Kto stoi za Hirnix?', a: 'Hirnix tworzy ukraiński zespół działający w Europie. Obecnie kończymy rejestrację naszej firmy w Czechach. Do tego czasu warunki wdrożenia uzgadniamy pisemnie, a później podpisujesz umowę z firmą.' },
        { q: 'Czy mogę najpierw spróbować?', a: 'Tak, pierwsze 2 tygodnie są bezpłatne. Ofertę dla Twojego sposobu pracy przygotowujemy indywidualnie — wystarczy krótkie zgłoszenie.' },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      h2: 'Porozmawiajmy, jak Hirnix pasuje do Twojego biznesu',
      lead: 'Zostaw dane kontaktowe — opowiemy o platformie, pokażemy ją na przykładzie podobnym do Twojego i wyjaśnimy warunki.',
      submit: 'Porozmawiajmy',
      directLabel: 'Albo napisz do nas bezpośrednio',
    },
  },

  scheduling: {
    meta: {
      title: 'Grafik i rezerwacje dla specjalistów beauty',
      description: 'Kalendarz rezerwacji dla specjalistów beauty i salonów: wizyty według specjalistów, usługi, godzina, cena i status każdej rezerwacji. Zobacz, jak to działa w Hirnix.',
    },
    demoAnchor: 'schedule',
    hero: { breadcrumb: 'Rezerwacje i grafik', h1: 'Grafik i rezerwacje klientów na co dzień', lead: 'Przeglądaj wizyty, otwieraj szczegóły rezerwacji i organizuj pracę zespołu.', primary: 'Porozmawiajmy', secondary: 'Zobacz w demo', asset: 'calendarDay' },
    why: { eyebrow: 'Po co', h2: 'Cały dzień pracy na jednym ekranie', body: 'Gdy rezerwacje są w zeszycie, czatach i pamięci, łatwo przegapić wizytę albo zapomnieć, o co prosił klient. W Hirnix każda rezerwacja ma swoje miejsce w kalendarzu: data, godzina, specjalista, usługi i komentarze obok siebie.' },
    scenarios: {
      eyebrow: 'Jak to działa',
      h2: 'Trzy momenty, w których pomaga grafik',
      items: [
        { title: 'Początek dnia', body: 'Wybierz datę i zobacz wszystkie rezerwacje dnia w kolumnach specjalistów. Żeby planować naprzód, przełącz na widok tygodnia: rezerwacje, dni wolne i przerwy specjalisty.', points: ['Widok dnia według specjalistów', 'Widok tygodnia dla każdego specjalisty', 'Dni wolne i przerwy w kalendarzu'], asset: 'calendarWeek' },
        { title: 'Praca z wizytą', body: 'Otwórz rezerwację, by zobaczyć wszystko o wizycie: jakie usługi, ile trwa, jaka cena i komentarze do tej konkretnej wizyty.', points: ['Kilka usług w jednej wizycie', 'Cena i czas trwania', 'Komentarze do wizyty'], asset: 'visit' },
        { title: 'Zapisz, jak zakończyła się wizyta', body: 'Zmień status rezerwacji: zaplanowana, zrealizowana, odwołana lub nieodbyta. Dzięki temu grafik i historia klienta są rzetelne.', points: ['Status dla każdej rezerwacji', 'Zrealizowane wizyty trafiają do historii klienta', 'Odwołania i nieobecności widoczne osobno'] },
      ],
    },
    connections: {
      eyebrow: 'Powiązane moduły',
      h2: 'Grafik jest połączony z resztą',
      items: [
        { route: 'clients', title: 'Baza klientów', body: 'Z rezerwacji przejdziesz do karty klienta i zobaczysz jego poprzednie wizyty.', link: 'Poznaj bazę klientów' },
        { route: 'team', title: 'Usługi i zespół', body: 'Usługi z cenami i czasem trwania oraz godziny pracy specjalistów — z tego powstaje grafik.', link: 'Usługi i godziny pracy' },
        { route: 'booking', title: 'Rezerwacja online', body: 'Rezerwacje, które klienci robią sami przez Twój link, pojawiają się w kalendarzu.', link: 'O rezerwacji online' },
      ],
    },
    proof: { eyebrow: 'W aplikacji', h2: 'Dzisiejsze rezerwacje — od razu na ekranie głównym', body: 'Po zalogowaniu pulpit pokazuje dzisiejsze rezerwacje, ostatnich klientów i popularne usługi. Zrzut ekranu aktualnej wersji Hirnix z danymi szkoleniowymi.', asset: 'dashboard', demoLink: 'Otwórz „Grafik” w demo' },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania o rezerwacje i grafik',
      items: [
        { q: 'Czy mogę dodać rezerwację ręcznie?', a: 'Tak. Dodaj ją w kalendarzu: wybierz klienta, usługi, specjalistę i godzinę. Tak samo łatwo zapiszesz rezerwacje z telefonu lub wiadomości.' },
        { q: 'Czy klient może zarezerwować kilka usług naraz?', a: 'Tak, jedna wizyta może obejmować kilka usług, każdą z własną ceną i czasem trwania.' },
        { q: 'Jak zobaczyć rezerwacje jednego specjalisty?', a: 'W kalendarzu dziennym każdy specjalista ma swoją kolumnę, więc jego rezerwacje są obok rezerwacji pozostałych. Widok tygodnia pokazuje cały tydzień jednego specjalisty.' },
        { q: 'Czy Hirnix przypomina klientom o wizycie?', a: 'Tak. Przed wizytą klient dostaje przypomnienie przez Telegram lub e-mail z datą, godziną, usługą i specjalistą.' },
        { q: 'Co oznaczają statusy rezerwacji?', a: '„Zaplanowana” — wizyta jest przed nami. „Zrealizowana” — odbyła się i trafia do historii klienta oraz raportów. „Odwołana” — nie odbędzie się. „Nieodbyta” — klient nie przyszedł.' },
      ],
    },
    cta: { h2: 'Zobacz, jak wyglądałby Twój dzień pracy w Hirnix', lead: 'Opowiedz, jak dziś prowadzisz rezerwacje — pokażemy grafik dla Twojego sposobu pracy.', submit: 'Porozmawiajmy' },
  },

  clients: {
    meta: {
      title: 'Baza klientów i historia wizyt',
      description: 'Baza klientów dla specjalistów beauty i salonów: wyszukiwanie, dane kontaktowe, poprzednie i nadchodzące wizyty na jednej karcie. Zobacz, jak to działa w Hirnix.',
    },
    demoAnchor: 'client',
    hero: { breadcrumb: 'Baza klientów', h1: 'Baza klientów i historia wizyt', lead: 'Znajdź dane kontaktowe i przejrzyj historię klienta przed jego kolejną wizytą.', primary: 'Porozmawiajmy', secondary: 'Zobacz w demo', asset: 'clients' },
    why: { eyebrow: 'Po co', h2: 'Klient to coś więcej niż wiersz w czacie', body: 'Gdy kontakty są rozrzucone po Instagramie, komunikatorach i notatkach, trudno pamiętać, kto przyszedł, kiedy i na jaką usługę. W Hirnix każdy klient ma jedną kartę, a wizyty z kalendarza same budują jego historię.' },
    scenarios: {
      eyebrow: 'Jak to działa',
      h2: 'Trzy momenty, w których pomaga baza klientów',
      items: [
        { title: 'Znajdź klienta', body: 'Zacznij wpisywać imię lub numer telefonu w wyszukiwarce, a lista się zawęzi. Koniec z przewijaniem czatów w poszukiwaniu numeru.', points: ['Wyszukiwanie na liście klientów', 'Kontakty obok imienia', 'Liczba wizyt i ostatnia wizyta'] },
        { title: 'Przygotuj się do wizyty', body: 'Otwórz kartę przed wizytą: dane kontaktowe, poprzednie wizyty z usługami i nadchodzące rezerwacje — wszystko w jednym miejscu.', points: ['Dane kontaktowe klienta', 'Poprzednie wizyty i usługi', 'Nadchodzące rezerwacje'], asset: 'clientCard' },
        { title: 'Zobacz historię usług', body: 'Historia buduje się sama: gdy wizyta zostanie oznaczona w kalendarzu jako zrealizowana, pojawia się na karcie klienta. Widzisz, jak często ktoś przychodził i jakie usługi wybierał.', points: ['Wizyty zapisują się automatycznie', 'Liczba wizyt', 'Usługi w każdej wizycie'], asset: 'visit' },
      ],
    },
    connections: {
      eyebrow: 'Powiązane moduły',
      h2: 'Baza klientów nie działa w oderwaniu',
      items: [
        { route: 'scheduling', title: 'Rezerwacje i grafik', body: 'Każda rezerwacja w kalendarzu jest powiązana z kartą klienta — z wizyty otworzysz historię tej osoby.', link: 'Jak działa grafik' },
        { route: 'booking', title: 'Rezerwacja online', body: 'Gdy klient rezerwuje przez Twój link, jego dane kontaktowe trafiają do bazy.', link: 'O rezerwacji online' },
        { route: 'reports', title: 'Raporty i wyniki', body: 'Zrealizowane wizyty klientów zasilają liczby w raportach za okres.', link: 'Co pokazują raporty' },
      ],
    },
    proof: { eyebrow: 'W aplikacji', h2: 'Nowi klienci — widoczni na pulpicie', body: 'Ostatni klienci i dzisiejsze rezerwacje są zebrane na głównym ekranie konta. Zrzut ekranu aktualnej wersji Hirnix z danymi szkoleniowymi.', asset: 'dashboard', demoLink: 'Otwórz „Klient” w demo' },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania o bazę klientów',
      items: [
        { q: 'Jak utworzyć kartę klienta?', a: 'Kartę możesz dodać ręcznie w sekcji „Klienci”. Karta powstaje też, gdy tworzysz rezerwację dla nowego klienta.' },
        { q: 'Czy mogę zmienić dane kontaktowe klienta?', a: 'Tak, dane kontaktowe edytujesz na karcie klienta. Historia wizyt zostaje zachowana.' },
        { q: 'Gdzie zobaczę historię wizyt?', a: 'Na karcie klienta: zbiera poprzednie wizyty z usługami i nadchodzące rezerwacje z kalendarza.' },
        { q: 'Czy mogę przenieść obecną listę klientów?', a: 'Powiedz nam, gdzie dziś trzymasz klientów — w arkuszu, innej aplikacji czy zeszycie. Przy rozmowie o wdrożeniu wyjaśnimy, jak przenieść dane w Twoim przypadku.' },
      ],
    },
    cta: { h2: 'Zobacz, jak baza klientów sprawdzi się w Twoim biznesie', lead: 'Opowiedz, jak dziś prowadzisz ewidencję klientów — pokażemy Hirnix dla Twojego sposobu pracy.', submit: 'Porozmawiajmy' },
  },

  team: {
    meta: {
      title: 'Usługi, specjaliści i godziny pracy',
      description: 'Cennik usług z cenami i czasem trwania, usługi przypisane do specjalistów i godziny pracy w jednym systemie. Jak Hirnix porządkuje pracę specjalisty lub salonu.',
    },
    demoAnchor: 'team',
    hero: { breadcrumb: 'Usługi i zespół', h1: 'Usługi, specjaliści i godziny pracy — w zgodzie', lead: 'Ustaw, co oferuje Twój biznes, kto wykonuje każdą usługę i kiedy można się do niego zapisać.', primary: 'Porozmawiajmy', secondary: 'Zobacz w demo', asset: 'employees' },
    why: { eyebrow: 'Po co', h2: 'Rezerwacja zaczyna się od konfiguracji', body: 'Żeby zapisać klienta na właściwą godzinę, system musi wiedzieć trzy rzeczy: co oferujesz, kto to wykonuje i kiedy ta osoba pracuje. W Hirnix usługi, specjaliści i godziny pracy są ze sobą powiązane — grafik i rezerwacja online opierają się na tych samych danych.' },
    scenarios: {
      eyebrow: 'Jak to działa',
      h2: 'Trzy kroki, z których składa się praca salonu',
      items: [
        { title: 'Opisz usługi', body: 'Pogrupuj usługi w kategorie i dodaj opis, cenę i czas trwania. Czas trwania decyduje, ile wizyta zajmie w grafiku.', points: ['Kategorie usług', 'Cena i czas trwania każdej usługi', 'Opisy, także w innych językach'], asset: 'services' },
        { title: 'Przypisz usługi specjalistom', body: 'Ustal, który specjalista wykonuje które usługi. Wtedy w grafiku i w rezerwacji online da się wybrać tylko właściwą osobę.', points: ['Własna lista usług każdego specjalisty', 'Różne usługi dla różnych osób', 'Jeden cennik dla całego zespołu'] },
        { title: 'Ustaw godziny pracy', body: 'Ustaw dni i godziny pracy każdego specjalisty. Grafik pokazuje, kiedy dana osoba jest dostępna do rezerwacji.', points: ['Tygodniowy grafik każdego specjalisty', 'Dni i godziny pracy', 'Rezerwacje zgodnie z grafikiem'] },
      ],
    },
    connections: {
      eyebrow: 'Powiązane moduły',
      h2: 'Konfiguracja, na której działa grafik i rezerwacja',
      items: [
        { route: 'scheduling', title: 'Rezerwacje i grafik', body: 'Kalendarz pokazuje rezerwacje w kolumnach specjalistów, a czas trwania usług wyznacza długość każdej wizyty.', link: 'Jak działa grafik' },
        { route: 'booking', title: 'Rezerwacja online', body: 'Klienci widzą Twój cennik i wybierają specjalistę, który wykonuje daną usługę.', link: 'O rezerwacji online' },
        { route: 'reports', title: 'Raporty i wyniki', body: 'Raporty pokazują, które usługi były wykonywane najczęściej i jak pracowali specjaliści.', link: 'Co pokazują raporty' },
      ],
    },
    proof: { eyebrow: 'W aplikacji', h2: 'Jak wygląda karta usługi', body: 'Zdjęcie, nazwa, opis i tłumaczenia dla strony rezerwacji — klienci widzą usługę w swoim języku. Zrzut ekranu aktualnej wersji Hirnix z danymi szkoleniowymi.', asset: 'serviceEdit', demoLink: 'Otwórz „Usługi i zespół” w demo' },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania o usługi i zespół',
      items: [
        { q: 'Czy różni specjaliści mogą wykonywać różne usługi?', a: 'Tak. Każdemu specjaliście przypisujesz dokładnie te usługi, które wykonuje, a przy rezerwacji wybierana jest właściwa osoba.' },
        { q: 'Jak uwzględniane są godziny pracy?', a: 'Każdy specjalista ma godziny pracy — dni i godziny. Pokazują one, kiedy można się do tej osoby zapisać.' },
        { q: 'Czy mogę opisać usługi w kilku językach?', a: 'Tak, możesz dodać tłumaczenia nazw i opisów usług dla języków strony rezerwacji — obecnie polskiego, angielskiego, czeskiego i ukraińskiego.' },
        { q: 'Czy to działa, jeśli pracuję w pojedynkę?', a: 'Tak. Ustawiasz własny cennik i godziny — bez zespołu system działa tak samo.' },
      ],
    },
    cta: { h2: 'Skonfigurujemy z Tobą usługi i godziny pracy', lead: 'Powiedz, ilu masz specjalistów i jakie usługi — pokażemy, jak to wyglądałoby w Hirnix.', submit: 'Porozmawiajmy' },
  },

  reports: {
    meta: {
      title: 'Raporty według usług i specjalistów',
      description: 'Statystyki rezerwacji dla specjalistów beauty i salonów: popularne usługi i praca specjalistów za dowolny okres. Które wizyty są liczone i jak czytać liczby.',
    },
    demoAnchor: 'reports',
    hero: { breadcrumb: 'Raporty i wyniki', h1: 'Wyniki pracy w czytelnych raportach', lead: 'Sprawdzaj liczby rezerwacji, usług i pracy specjalistów za wybrany okres.', primary: 'Porozmawiajmy', secondary: 'Zobacz w demo', asset: 'reports' },
    why: { eyebrow: 'Po co', h2: 'Wiedz, jak idzie — bez liczenia ręcznie', body: 'Raporty powstają z tych samych wizyt, które prowadzisz w kalendarzu. Nie trzeba liczyć rezerwacji w zeszycie czy arkuszu: wybierz okres i zobacz, jakie usługi zostały wykonane i jak pracowali specjaliści.' },
    scenarios: {
      eyebrow: 'Jak to działa',
      h2: 'Trzy pytania, na które odpowiadają raporty',
      items: [
        { title: 'Co wydarzyło się w okresie', body: 'Wybierz okres, który chcesz przeanalizować. Raport opiera się na zrealizowanych wizytach, więc przyszłe i odwołane rezerwacje nie mieszają się z wykonaną pracą.', points: ['Wybór okresu', 'Liczone są zrealizowane wizyty', 'Liczby w wybranych datach'] },
        { title: 'Które usługi są najpopularniejsze', body: 'Zobacz, które usługi były wykonywane najczęściej. To pomaga zrozumieć popyt i zdecydować, co warto rozwijać.', points: ['Popularność usług', 'Liczba wykonanych usług', 'Najpopularniejsze usługi na górze'], asset: 'reportsDetail' },
        { title: 'Jak pracowali specjaliści', body: 'Przejrzyj liczby dostępne dla każdego specjalisty: ile wizyt i usług zrealizował w wybranym okresie.', points: ['Liczby dla każdego specjalisty', 'Liczba wizyt', 'Wykonane usługi'] },
      ],
    },
    connections: {
      eyebrow: 'Powiązane moduły',
      h2: 'Skąd biorą się dane w raportach',
      items: [
        { route: 'scheduling', title: 'Rezerwacje i grafik', body: 'Gdy wizyta zostanie oznaczona jako zrealizowana, trafia do raportów za dany okres.', link: 'Statusy rezerwacji' },
        { route: 'team', title: 'Usługi i zespół', body: 'Twój cennik i lista specjalistów wyznaczają, jak dzielą się liczby.', link: 'Usługi i godziny pracy' },
        { route: 'clients', title: 'Baza klientów', body: 'Te same zrealizowane wizyty budują historię każdego klienta.', link: 'Poznaj bazę klientów' },
      ],
    },
    proof: { eyebrow: 'W aplikacji', h2: 'Szybkie podsumowanie — na pulpicie', body: 'Dzisiejsze rezerwacje, popularne usługi i liczby z ostatnich dni widać od razu po zalogowaniu. Wszystkie liczby na zrzucie to dane demonstracyjne, nie wyniki klientów.', asset: 'dashboard', demoLink: 'Otwórz „Wyniki” w demo' },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania o raporty',
      items: [
        { q: 'Które rezerwacje są liczone w raportach?', a: 'Raporty opierają się na zrealizowanych wizytach w wybranym okresie. Zaplanowane i odwołane rezerwacje oraz nieobecności nie wchodzą do liczb wykonanej pracy.' },
        { q: 'Co oznaczają kwoty w raporcie?', a: 'Pokazują wartość wykonanych usług według cen z Twojego cennika. To nie jest księgowość ani zysk: wydatki i faktyczne płatności nie są uwzględniane.' },
        { q: 'W jakiej walucie pokazywane są kwoty?', a: 'W walucie wybranej w ustawieniach biznesu, na przykład w złotych.' },
        { q: 'Co, jeśli danych jest jeszcze mało?', a: 'Raporty zapełniają się z każdą zrealizowaną wizytą. Na początku liczb jest niewiele — to normalne: obraz staje się wyraźniejszy po kilku tygodniach historii.' },
      ],
    },
    cta: { h2: 'Zobacz, jakie liczby miałby Twój biznes', lead: 'Powiedz, co chcesz śledzić — pokażemy raporty na przykładzie.', submit: 'Porozmawiajmy' },
  },

  booking: {
    meta: {
      title: 'Rezerwacja online dla specjalistów beauty i salonów',
      description: 'Strona rezerwacji online dla specjalistów beauty i salonów: przez link lub kod QR klienci wybierają usługę, specjalistę i wolny termin, a rezerwacja trafia do grafiku.',
    },
    demoAnchor: 'booking',
    hero: { breadcrumb: 'Rezerwacja online', h1: 'Rezerwacja online połączona z grafikiem i bazą klientów', lead: 'Udostępnij stronę swojego biznesu, by klienci sami wybierali usługę, specjalistę i wolny termin — także po polsku.', primary: 'Porozmawiajmy', secondary: 'Zobacz w demo', asset: 'bookingStart' },
    why: { eyebrow: 'Po co', h2: 'Mniej pisania o wolnych terminach', body: 'Zamiast odpowiadać na każde „kiedy masz wolne?”, wysyłasz klientom link. Widzą Twoje usługi i wolne terminy i zapisują się sami — a rezerwacja pojawia się w kalendarzu obok pozostałych.' },
    scenarios: {
      eyebrow: 'Jak to działa',
      h2: 'Droga klienta — od linku do rezerwacji',
      items: [
        { title: 'Link lub kod QR', body: 'Udostępnij link do strony rezerwacji na Instagramie, w komunikatorach lub na swojej stronie albo wydrukuj kod QR do salonu. Strona ma wygląd Twojego biznesu.', points: ['Własna strona biznesu', 'Link do social mediów i komunikatorów', 'Kod QR do salonu'], asset: 'bookingSettings' },
        { title: 'Wybór usługi, specjalisty i godziny', body: 'Klient wybiera jedną lub kilka usług, specjalistę i wolną godzinę. Dostępne terminy wynikają z godzin pracy specjalistów i czasu trwania usług.', points: ['Twój cennik usług', 'Wybór specjalisty', 'Wolne terminy według grafiku'], asset: 'bookingServices' },
        { title: 'Rezerwacja w Twoim kalendarzu', body: 'Gdy klient zostawi dane kontaktowe i potwierdzi, wizyta pojawia się w grafiku, a kontakt trafia do bazy klientów.', points: ['Rezerwacja trafia do kalendarza', 'Klient trafia do bazy', 'Obsługujesz ją jak każdą inną wizytę'], asset: 'calendarDay' },
      ],
    },
    connections: {
      eyebrow: 'Powiązane moduły',
      h2: 'Rezerwacja online działa na tych samych danych',
      items: [
        { route: 'scheduling', title: 'Rezerwacje i grafik', body: 'Rezerwacje online są w kalendarzu obok tych, które dodajesz ręcznie.', link: 'Jak działa grafik' },
        { route: 'clients', title: 'Baza klientów', body: 'Dane kontaktowe klientów rezerwujących online zapisują się w bazie razem z historią wizyt.', link: 'Poznaj bazę klientów' },
        { route: 'team', title: 'Usługi i zespół', body: 'Klienci widzą Twój cennik i specjalistów, którzy wykonują usługi, w ich godzinach pracy.', link: 'Usługi i godziny pracy' },
      ],
    },
    proof: { eyebrow: 'W aplikacji', h2: 'Wolne terminy — według grafiku specjalisty', body: 'Klient wybiera datę i widzi tylko wolne terminy wybranego specjalisty. Zrzut ekranu aktualnej wersji Hirnix z danymi szkoleniowymi; nazwa biznesu, usługi i ceny to dane demonstracyjne.', asset: 'bookingTime', demoLink: 'Otwórz „Rezerwacja online” w demo' },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania o rezerwację online',
      items: [
        { q: 'W jakich językach dostępna jest strona rezerwacji?', a: 'W ustawieniach wybierasz języki strony rezerwacji, walutę i strefę czasową. Obecnie dostępne są: polski, angielski, czeski i ukraiński.' },
        { q: 'Gdzie umieścić link do rezerwacji?', a: 'Tam, gdzie piszą do Ciebie klienci: w profilu na Instagramie, w odpowiedzi w komunikatorze, na stronie lub w profilu Google. Do salonu możesz wydrukować kod QR.' },
        { q: 'Co widzi klient przy rezerwacji?', a: 'Twoje usługi, specjalistów, którzy je wykonują, i wolne terminy. Potem zostawia dane kontaktowe i potwierdza rezerwację.' },
        { q: 'Czy nadal mogę dodawać rezerwacje ręcznie?', a: 'Tak. Rezerwacja online nie zastępuje ręcznych rezerwacji: obie są w tym samym kalendarzu.' },
      ],
    },
    cta: { h2: 'Uruchommy rezerwację online dla Twojego biznesu', lead: 'Powiedz, jak dziś zapisują się Twoi klienci — skonfigurujemy z Tobą stronę rezerwacji.', submit: 'Porozmawiajmy' },
  },

  independent: {
    meta: {
      title: 'CRM dla samodzielnych specjalistów beauty',
      description: 'CRM dla specjalistów beauty pracujących na swoim: własny grafik, baza klientów z historią wizyt, cennik usług i rezerwacja online przez link. Pierwsze 2 tygodnie gratis.',
    },
    hero: { breadcrumb: 'Dla specjalistów', h1: 'CRM dla specjalistów beauty, którzy pracują na swoim', lead: 'Gdy samodzielnie obsługujesz klientów, odpowiadasz na wiadomości i planujesz dzień, Hirnix trzyma rezerwacje, klientów i usługi w jednym miejscu.', primary: 'Porozmawiajmy', secondary: 'Zobacz platformę', asset: 'calendarWeek' },
    story: { eyebrow: 'Brzmi znajomo?', h2: 'Jesteś jednocześnie specjalistą i recepcją', body: 'Między klientami trzeba odpisać na Instagramie, pamiętać, kiedy masz wolne okienko, i nie zapomnieć, co ostatnio robiło się stałej klientce. Gdy wszystko jest w czatach i w pamięci, coś zawsze umyka. Hirnix trzyma grafik, klientów i usługi razem — a klienci zapisują się sami.' },
    blocks: {
      eyebrow: 'Twój dzień w Hirnix',
      h2: 'Jak Hirnix pomaga specjaliście pracującemu samodzielnie',
      items: [
        { title: 'Własny grafik', body: 'Wszystkie rezerwacje dnia w jednym kalendarzu. Otwórz wizytę, by zobaczyć usługi, godzinę, cenę i komentarze.', asset: 'dashboard', route: 'scheduling', link: 'Jak działa grafik' },
        { title: 'Historia każdego klienta', body: 'Przed wizytą otwórz kartę: dane kontaktowe, poprzednie wizyty i usługi, które wybierała ta osoba.', asset: 'clientCard', route: 'clients', link: 'Poznaj bazę klientów' },
        { title: 'Twój cennik usług', body: 'Opisz usługi z ceną i czasem trwania — grafik wie, ile trwa każda wizyta.', asset: 'services', route: 'team', link: 'Konfiguracja usług' },
        { title: 'Klienci zapisują się sami', body: 'Udostępnij link do strony rezerwacji na Instagramie lub w komunikatorze — klienci wybierają usługę i wolną godzinę bez zbędnej korespondencji.', asset: 'bookingSummary', route: 'booking', link: 'O rezerwacji online' },
        { title: 'Twój miesiąc w liczbach', body: 'Zobacz, które usługi były wykonywane najczęściej i ile było wizyt w danym okresie.', asset: 'reports', route: 'reports', link: 'Co pokazują raporty' },
      ],
    },
    launch: {
      eyebrow: 'Start',
      h2: 'Jak zacząć',
      steps: [
        { title: 'Krótka rozmowa', body: 'Opowiedz, jak dziś prowadzisz rezerwacje i klientów.' },
        { title: 'Wspólna konfiguracja', body: 'Dodajemy Twoje usługi i godziny oraz ustawiamy stronę rezerwacji.' },
        { title: '2 tygodnie gratis', body: 'Pracujesz w Hirnix z prawdziwymi rezerwacjami, zanim podejmiesz decyzję.' },
      ],
    },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania od specjalistów pracujących samodzielnie',
      items: [
        { q: 'Czy to nie za dużo dla jednej osoby?', a: 'Nie. Potrzebujesz tego samego grafiku, klientów i usług co salon — tylko bez zespołu. Konfigurujemy system razem z Tobą, więc nie zaczynasz od zera w pojedynkę.' },
        { q: 'Czy klienci mogą się zapisywać, gdy pracuję?', a: 'Tak. Klienci rezerwują przez Twój link, kiedy im wygodnie, a rezerwacja pojawia się w kalendarzu.' },
        { q: 'Co z klientami, których mam w zeszycie lub arkuszu?', a: 'Powiedz nam, gdzie dziś jest Twoja lista klientów — przy wdrożeniu wyjaśnimy, jak ją przenieść w Twoim przypadku.' },
        { q: 'Czy mogę pracować z telefonu?', a: 'Hirnix działa w przeglądarce, więc otwiera się na komputerze i na telefonie. Pokażemy, jak to wygląda, podczas rozmowy.' },
      ],
    },
    cta: { h2: 'Wypróbuj Hirnix we własnej pracy', lead: 'Opowiedz, jak dziś prowadzisz rezerwacje — skonfigurujemy system dla Ciebie. Pierwsze 2 tygodnie są bezpłatne.', submit: 'Porozmawiajmy' },
  },

  studios: {
    meta: {
      title: 'CRM dla salonów beauty',
      description: 'CRM dla salonów beauty: wspólny kalendarz według specjalistów, przypisane usługi, godziny pracy, baza klientów i raporty według usług i specjalistów. 2 tygodnie gratis.',
    },
    hero: { breadcrumb: 'Dla salonów beauty', h1: 'CRM do prowadzenia salonu beauty', lead: 'Usługi, godziny pracy i rezerwacje kilku specjalistów — zgrane w jednym systemie, żeby cały salon był widoczny na jednym ekranie.', primary: 'Porozmawiajmy', secondary: 'Zobacz platformę', asset: 'dashboard' },
    story: { eyebrow: 'Brzmi znajomo?', h2: 'Kilku specjalistów — i jeden grafik do trzymania w głowie', body: 'Każdy specjalista ma swoje usługi i dni pracy, klienci piszą w różnych komunikatorach, a rezerwacje są rozrzucone między czatami i zeszytem. Żeby zobaczyć, kto jest zajęty, a kto ma wolne okienka, trzeba to składać ręcznie. Hirnix pokazuje pracę całego zespołu w jednym kalendarzu.' },
    blocks: {
      eyebrow: 'Twój salon w Hirnix',
      h2: 'Jak Hirnix zgrywa pracę zespołu',
      items: [
        { title: 'Kto wykonuje które usługi', body: 'Jeden cennik dla salonu, a każdy specjalista ma przypisane dokładnie te usługi, które wykonuje.', asset: 'employees', route: 'team', link: 'Usługi i zespół' },
        { title: 'Godziny pracy specjalistów', body: 'Dni i godziny pracy każdego specjalisty decydują, kiedy można się do niego zapisać.', asset: 'calendarWeek', route: 'team', link: 'Ustawianie godzin pracy' },
        { title: 'Wspólny kalendarz', body: 'Rezerwacje całego zespołu na dany dzień w kolumnach specjalistów. Widzisz, kto z kim i kiedy pracuje.', asset: 'calendarDay', route: 'scheduling', link: 'Jak działa grafik' },
        { title: 'Klienci salonu', body: 'Jedna baza klientów dla całego salonu: dane kontaktowe i historia wizyt, nawet gdy klient chodzi do różnych specjalistów.', asset: 'clientCard', route: 'clients', link: 'Poznaj bazę klientów' },
        { title: 'Raporty według usług i specjalistów', body: 'Zobacz, które usługi były wykonywane najczęściej, i liczby każdego specjalisty za wybrany okres.', asset: 'reportsDetail', route: 'reports', link: 'Co pokazują raporty' },
      ],
    },
    launch: {
      eyebrow: 'Start',
      h2: 'Jak wdrożyć Hirnix w salonie',
      steps: [
        { title: 'Poznajemy Twój model pracy', body: 'Ilu specjalistów, jakie usługi, jak dziś prowadzone są rezerwacje.' },
        { title: 'Konfigurujemy razem', body: 'Dodajemy usługi, specjalistów i godziny w uzgodnionym zakresie.' },
        { title: '2 tygodnie gratis', body: 'Twój zespół pracuje w Hirnix z prawdziwymi rezerwacjami, zanim podejmiesz decyzję.' },
      ],
    },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania od salonów',
      items: [
        { q: 'Czy specjaliści mogą mieć różne usługi i godziny?', a: 'Tak. Każdy specjalista ma własne usługi i godziny pracy.' },
        { q: 'Czy administrator widzi rezerwacje wszystkich specjalistów?', a: 'Tak, kalendarz dzienny pokazuje rezerwacje całego zespołu w kolumnach specjalistów.' },
        { q: 'Czy specjaliści mogą mieć własny dostęp do systemu?', a: 'Opowiedz, jak w Twoim salonie podzielone są obowiązki — przy wdrożeniu pokażemy, jak zorganizować dostęp dla zespołu.' },
        { q: 'Ilu specjalistów może korzystać z Hirnix?', a: 'Hirnix jest stworzony dla samodzielnych specjalistów i małych salonów. Jeśli Twój zespół jest większy, opisz swój model pracy w zgłoszeniu, a ocenimy go osobno.' },
      ],
    },
    cta: { h2: 'Zobacz, jak wyglądałaby praca Twojego salonu', lead: 'Powiedz, ilu masz specjalistów i jakie usługi — pokażemy Hirnix na przykładzie podobnym do Twojego salonu.', submit: 'Porozmawiajmy' },
  },

  demo: {
    meta: {
      title: 'Demo: jak działa Hirnix',
      description: 'Otwarta prezentacja Hirnix bez rejestracji: grafik, karta klienta, usługi i zespół, raporty i rezerwacja online na danych szkoleniowych.',
    },
    hero: {
      breadcrumb: 'Demo',
      h1: 'Zobacz, jak działa Hirnix',
      lead: 'Krótka prezentacja jednego biznesu szkoleniowego — od grafiku dnia po rezerwację online. Bez rejestracji i bez podawania danych.',
      note: 'Wszystkie imiona, usługi i liczby w prezentacji to dane demonstracyjne. Zrzuty ekranu pokazują interfejs w języku angielskim.',
      tocLabel: 'Sekcje prezentacji',
    },
    chapters: [
      { id: 'schedule', route: 'scheduling', title: 'Grafik', lead: 'Dzień pracy w kolumnach specjalistów i szczegóły każdej wizyty.', steps: ['Wybieramy datę i widzimy wszystkie rezerwacje dnia według specjalistów.', 'Otwieramy rezerwację: usługi, godzina, cena, czas trwania i komentarze.', 'Po wizycie zmieniamy status — na przykład na „zrealizowana”.'], assets: ['calendarDay', 'visit'], link: 'Więcej o rezerwacjach i grafiku' },
      { id: 'client', route: 'clients', title: 'Klient', lead: 'Wyszukiwanie w bazie i karta z historią wizyt.', steps: ['Szukamy klienta na liście — po imieniu lub numerze telefonu.', 'Otwieramy kartę: dane kontaktowe, poprzednie wizyty i nadchodzące rezerwacje.', 'Widzimy, jak często ktoś przychodził i jakie usługi wybierał.'], assets: ['clients', 'clientCard'], link: 'Więcej o bazie klientów' },
      { id: 'team', route: 'team', title: 'Usługi i zespół', lead: 'Cennik usług, przypisanie do specjalistów i godziny pracy.', steps: ['Dodajemy usługę: kategoria, opis, cena i czas trwania.', 'Przypisujemy usługę specjalistom, którzy ją wykonują.', 'Ustawiamy godziny pracy — kiedy można się zapisać do specjalisty.'], assets: ['services', 'employees'], link: 'Więcej o usługach i zespole' },
      { id: 'reports', route: 'reports', title: 'Wyniki', lead: 'Liczby według usług i specjalistów za wybrany okres.', steps: ['Wybieramy okres — raport opiera się na zrealizowanych wizytach.', 'Widzimy, które usługi były wykonywane najczęściej.', 'Przeglądamy liczby każdego specjalisty.'], assets: ['reports', 'reportsDetail'], link: 'Więcej o raportach' },
      { id: 'booking', route: 'booking', title: 'Rezerwacja online', lead: 'Droga klienta od linku do rezerwacji w kalendarzu.', steps: ['Klient otwiera stronę Twojego biznesu przez link lub kod QR.', 'Wybiera usługę, specjalistę i wolny termin.', 'Potwierdza — a wizyta pojawia się w kalendarzu.'], assets: ['bookingServices', 'bookingTime'], link: 'Więcej o rezerwacji online' },
    ],
    stepLabel: 'Co się dzieje',
    cta: { eyebrow: 'Dalej', h2: 'Pokażcie mi Hirnix dla mojego sposobu pracy', lead: 'Opowiedz, jak pracujesz — przejdziemy ten sam proces na przykładzie podobnym do Twojego biznesu.', submit: 'Pokażcie to dla mojego biznesu' },
  },

  conditions: {
    meta: {
      title: 'Warunki wdrożenia i indywidualna oferta',
      description: 'Jak zacząć z Hirnix: pierwsze 2 tygodnie gratis, indywidualna konfiguracja pod Twój sposób pracy i oferta dopasowana do potrzeb specjalisty lub salonu.',
    },
    hero: {
      breadcrumb: 'Warunki',
      h1: 'Warunki wdrożenia dla Twojego biznesu',
      lead: 'Każdego specjalistę i każdy salon wdrażamy indywidualnie: konfigurujemy system pod Twój sposób pracy i przygotowujemy ofertę dopasowaną do Twoich potrzeb.',
      primary: 'Otrzymaj ofertę',
      note: 'Zgłoszenie do niczego nie zobowiązuje.',
    },
    trial: { label: 'Okres bezpłatny', value: '2 tygodnie', body: 'Pracuj w Hirnix z własnymi rezerwacjami i klientami, zanim podejmiesz decyzję.' },
    product: {
      eyebrow: 'Produkt',
      h2: 'Co zawiera Hirnix',
      lead: 'Moduły, które działają razem i są dostępne na Twoim koncie.',
      items: [
        { route: 'scheduling', title: 'Rezerwacje i grafik', body: 'Kalendarz dzienny według specjalistów, szczegóły i statusy wizyt.' },
        { route: 'clients', title: 'Baza klientów', body: 'Wyszukiwanie, dane kontaktowe i historia wizyt każdego klienta.' },
        { route: 'team', title: 'Usługi i zespół', body: 'Cennik usług, przypisanie do specjalistów, godziny pracy.' },
        { route: 'reports', title: 'Raporty i wyniki', body: 'Liczby według usług i specjalistów za wybrany okres.' },
        { route: 'booking', title: 'Rezerwacja online', body: 'Strona biznesu, na której klienci wybierają usługę, specjalistę i godzinę.' },
      ],
    },
    launch: {
      eyebrow: 'Indywidualne wdrożenie',
      h2: 'Uruchamiamy wszystko razem',
      items: [
        { title: 'Konfiguracja pod Twój model', body: 'Pomagamy dodać usługi, specjalistów i godziny w uzgodnionym zakresie.' },
        { title: 'Test pierwszego procesu', body: 'Przechodzimy prawdziwy proces od rezerwacji do zrealizowanej wizyty.' },
        { title: 'Wsparcie, gdy go potrzebujesz', body: 'Odpowiadamy przez Telegram, WhatsApp, Viber i e-mail przy starcie i w codziennej pracy.' },
      ],
    },
    offer: {
      eyebrow: 'Oferta',
      h2: 'Oferta dopasowana do Twoich potrzeb',
      lead: 'Nie ma jednego pakietu dla wszystkich. Oferta odzwierciedla to, jak naprawdę pracujesz.',
      items: [
        { title: 'Jak pracujesz', body: 'Samodzielnie czy z zespołem specjalistów.' },
        { title: 'Czego potrzebujesz', body: 'Które moduły są dla Ciebie najważniejsze na start.' },
        { title: 'Zakres startu', body: 'Ile usług i grafików skonfigurować i czy przenieść obecną listę klientów.' },
      ],
    },
    process: {
      eyebrow: 'Kolejny krok',
      h2: 'Jak otrzymać ofertę',
      steps: [
        { title: 'Wysyłasz zgłoszenie', body: 'Imię i telefon lub e-mail. Dodaj, jak pracujesz, jeśli chcesz, żebyśmy przygotowali się wcześniej.' },
        { title: 'Doprecyzowujemy szczegóły', body: 'Kontaktujemy się i zadajemy kilka pytań o Twoją pracę.' },
        { title: 'Wysyłamy ofertę', body: 'Wyjaśniamy, co obejmuje wdrożenie, i uzgadniamy warunki. Decyzja należy do Ciebie.' },
      ],
    },
    form: { eyebrow: 'Zgłoszenie', h2: 'Otrzymaj ofertę', lead: 'Wystarczy imię i numer telefonu lub e-mail.', submit: 'Otrzymaj ofertę' },
    faq: {
      eyebrow: 'Pytania',
      h2: 'Pytania o warunki',
      items: [
        { q: 'Czy jest okres bezpłatny?', a: 'Tak, pierwsze 2 tygodnie są bezpłatne. W tym czasie możesz pracować w Hirnix z własnymi rezerwacjami i klientami.' },
        { q: 'Dlaczego nie ma jednego pakietu dla wszystkich?', a: 'Specjaliści i salony pracują różnie: inna wielkość zespołu, inne usługi i potrzeby konfiguracji. Dlatego przygotowujemy ofertę dla konkretnego biznesu, zamiast wciskać go w szablon.' },
        { q: 'Czego potrzebujecie, żeby przygotować ofertę?', a: 'Imienia i telefonu lub e-maila. Jeśli powiesz też, jak pracujesz — samodzielnie czy z zespołem — łatwiej przygotować ofertę.' },
        { q: 'Czy zgłoszenie mnie do czegoś zobowiązuje?', a: 'Nie. Zgłoszenie oznacza tylko, że przygotujemy ofertę i odpowiemy na Twoje pytania.' },
        { q: 'Z kim zawieram umowę?', a: 'Hirnix tworzy ukraiński zespół działający w Europie. Obecnie kończymy rejestrację naszej firmy w Czechach. Do tego czasu warunki wdrożenia uzgadniamy pisemnie, a później podpisujesz umowę z firmą.' },
        { q: 'Czy pracujecie z firmami, które mają więcej niż kilku specjalistów?', a: 'Opisz swój model pracy w zgłoszeniu — ocenimy go osobno.' },
      ],
    },
  },

  contact: {
    meta: {
      title: 'Kontakt i wdrożenie',
      description: 'Skontaktuj się z Hirnix przez Telegram, WhatsApp, Viber, telefon lub e-mail. Opowiemy o platformie, pokażemy ją dla Twojego sposobu pracy i pomożemy zacząć.',
    },
    hero: { breadcrumb: 'Kontakt', h1: 'Skontaktuj się w wygodny dla siebie sposób', lead: 'Napisz, zadzwoń lub wyślij zgłoszenie — opowiemy o Hirnix i ustalimy kolejny krok.' },
    channels: { eyebrow: 'Kanały', h2: 'Bezpośrednio', phoneLabel: 'Telefon', messengersLabel: 'Komunikatory', messengersNote: 'Telegram, WhatsApp i Viber — wszystkie pod tym samym numerem.', emailLabel: 'E-mail' },
    next: {
      eyebrow: 'Co dalej',
      h2: 'Co się dzieje po kontakcie',
      steps: [
        { title: 'Kontaktujemy się z Tobą', body: 'Przez podany telefon lub e-mail — żeby poznać Twój sposób pracy i to, co jest dla Ciebie ważne.' },
        { title: 'Pokazujemy Hirnix', body: 'Przechodzimy proces na przykładzie podobnym do Twojego biznesu i odpowiadamy na pytania.' },
        { title: 'Uzgadniamy wdrożenie', body: 'Przygotowujemy ofertę pod Twoje potrzeby i konfigurujemy system razem z Tobą. Pierwsze 2 tygodnie są bezpłatne.' },
      ],
    },
    login: { h2: 'Korzystasz już z Hirnix?', body: 'Zaloguj się do konta, by pracować z rezerwacjami, klientami i ustawieniami.', cta: 'Zaloguj się do konta' },
    form: { eyebrow: 'Kontakt', h2: 'Wyślij zgłoszenie', lead: 'Wystarczy imię i telefon lub e-mail. Jeśli chcesz, dodaj kilka słów o swoim biznesie.', submit: 'Wyślij zgłoszenie' },
  },
};
