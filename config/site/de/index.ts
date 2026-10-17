/**
 * German copy. Audience: beauty professionals and studios in German-speaking
 * countries (not a literal translation of the Ukrainian site).
 * IMPORTANT: neither the CRM nor the booking page has a German interface yet
 * (booking page: UA/EN/CZ/PL, CRM: UK/EN as of 2026-10-17) — never claim
 * German-language booking or app. Same claims and limits as the Ukrainian
 * source otherwise — see the H0x / ПОГОДИТИ markers there.
 */

import type { SiteCopy } from '../copy';

export const de: SiteCopy = {
  common: {
    routes: {
      home: { label: 'Start' },
      scheduling: { label: 'Termine & Kalender', hint: 'Arbeitstag, Termine und Team in einem Kalender' },
      clients: { label: 'Kundenkartei', hint: 'Kontakte und Besuchshistorie jeder Kundin' },
      team: { label: 'Leistungen & Team', hint: 'Leistungskatalog, Zuständigkeiten, Arbeitszeiten' },
      reports: { label: 'Auswertungen', hint: 'Termine, Leistungen und Team-Kennzahlen für jeden Zeitraum' },
      booking: { label: 'Online-Terminbuchung', hint: 'Eine Seite, auf der Kunden Leistung und Zeit selbst wählen' },
      independent: { label: 'Für Selbstständige', hint: 'Sie arbeiten allein, ohne Rezeption' },
      studios: { label: 'Für Beauty-Studios', hint: 'Die Arbeit mehrerer Mitarbeitender abstimmen' },
      demo: { label: 'Demo' },
      conditions: { label: 'Konditionen' },
      contact: { label: 'Kontakt' },
      privacy: { label: 'Datenschutz (UA)' },
      cookies: { label: 'Cookies (UA)' },
    },
    ui: {
      skipLink: 'Zum Inhalt springen',
      mainNav: 'Hauptmenü',
      languageNav: 'Sprache der Website',
      breadcrumbs: 'Brotkrümelnavigation',
      contactEyebrow: 'Kontakt',
      directLabel: 'Oder schreiben Sie uns direkt',
      loginCabinet: 'Zum Kundenkonto',
      optional: 'optional',
    },
    seo: {
      ogTagline: 'CRM für Beauty-Profis und Studios',
      appDescription: 'CRM und Terminbuchung für Beauty-Profis und Studios: Kundenkartei, Kalender, Leistungen, Team, Auswertungen und Online-Buchung.',
    },
    header: {
      featuresLabel: 'Funktionen',
      segmentsLabel: 'Für wen',
      login: 'Anmelden',
      cta: 'Gespräch vereinbaren',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
    },
    footer: {
      brand: 'CRM für Beauty-Profis und Studios: Kunden, Termine, Leistungen, Team und Ergebnisse in einem System.',
      featuresHeading: 'Funktionen',
      companyHeading: 'Hirnix',
      contactsHeading: 'Kontakt',
      copyright: `© ${new Date().getFullYear()} Hirnix`,
    },
    assets: {
      demoNote: 'Demodaten · ukrainische Oberfläche',
      alt: {
        dashboard: 'Hirnix-Dashboard: heutige Termine, neue Kunden, beliebte Leistungen',
        calendarDay: 'Hirnix-Tageskalender mit Terminen in drei Mitarbeiterspalten',
        calendarWeek: 'Wochenkalender einer Mitarbeiterin mit freien Tagen, Pause und Terminen',
        visit: 'Geöffneter Termin: Mitarbeiterin, Leistungen mit Preis und Dauer, Datum, Uhrzeit, Status und Kommentare',
        clients: 'Kundenliste mit Suche, Anzahl der Besuche und letztem Besuch',
        clientCard: 'Kundenkarte: Anzahl der Besuche, Kommentare und Terminhistorie mit Status',
        services: 'Leistungskatalog mit Kategorien, Preisen und Dauer',
        serviceEdit: 'Leistung bearbeiten: Foto, Name, Beschreibung und Übersetzungen für die Buchungsseite',
        employees: 'Mitarbeitende des Studios mit zugeordneten Leistungen und Wochenarbeitszeiten',
        reports: 'Hirnix-Auswertung: Summen für den Zeitraum und Monatsdiagramm',
        reportsDetail: 'Auswertung nach Leistungen und Mitarbeitenden sowie Auslastung nach Wochentagen',
        bookingSettings: 'Einstellungen der Buchungsseite: Link, QR-Code, Design und Sprachen',
        bookingStart: 'Online-Buchungsseite eines Studios auf dem Smartphone',
        bookingMasters: 'Online-Buchung: Auswahl einer Mitarbeiterin mit Spezialisierung und Beschreibung',
        bookingServices: 'Online-Buchung: Auswahl einer Leistung mit Foto, Beschreibung, Dauer und Preis',
        bookingSummary: 'Online-Buchung: gewählte Mitarbeiterin und Leistung vor der Zeitwahl',
        bookingTime: 'Online-Buchung: Auswahl von Datum und freiem Termin',
      },
    },
    form: {
      nameLabel: 'Wie dürfen wir Sie ansprechen',
      namePlaceholder: 'Name',
      phoneLabel: 'Telefon',
      phoneCountry: 'DE',
      phoneInvalid: 'Bitte prüfen Sie die Nummer — es fehlen Ziffern oder das Land stimmt nicht.',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'hallo@beispiel.de',
      emailInvalid: 'Bitte prüfen Sie die E-Mail-Adresse — sie scheint einen Tippfehler zu enthalten.',
      contactHint: 'Ein Kontakt genügt — Telefon oder E-Mail.',
      nameRequired: 'Bitte geben Sie an, wie wir Sie ansprechen dürfen.',
      contactRequired: 'Bitte geben Sie Telefon oder E-Mail an, damit wir antworten können.',
      formatLabel: 'Wie Sie arbeiten',
      formatOptions: [
        { value: 'solo', label: 'Ich arbeite allein' },
        { value: 'team', label: 'Studio mit Team' },
        { value: 'other', label: 'Anders' },
      ],
      detailsToggle: 'Details hinzufügen (optional)',
      businessLabel: 'Name des Studios',
      linkLabel: 'Website oder Instagram',
      linkPlaceholder: 'instagram.com/…',
      commentLabel: 'Was ist Ihnen gerade wichtig',
      commentPlaceholder: 'Zum Beispiel: wo Sie Termine heute verwalten, wie viele Mitarbeitende, welche Fragen Sie haben',
      privacyNote: 'Wir nutzen Ihre Kontaktdaten nur, um auf diese Anfrage zu antworten.',
      privacyLink: 'Datenschutz',
      sending: 'Wird gesendet…',
      errorTitle: 'Die Anfrage konnte nicht gesendet werden.',
      errorBody: 'Ihre Angaben stehen noch im Formular — versuchen Sie es erneut oder schreiben Sie uns direkt:',
      retry: 'Erneut senden',
      successTitle: 'Anfrage erhalten',
      successBody: 'Wir melden uns über die angegebenen Kontaktdaten, um zu erfahren, wie Sie arbeiten, und den nächsten Schritt abzustimmen.',
      successContacts: 'Ihre Kontaktdaten',
      successNext: 'In der Zwischenzeit können Sie sich die Plattform ansehen.',
      successNextLink: 'Demo ansehen',
    },
  },

  home: {
    meta: {
      title: 'Hirnix — CRM und Terminbuchung für Beauty-Studios',
      description:
        'CRM für Beauty-Profis und Studios: Kundenkartei, Kalender, Leistungen, Team und Auswertungen in einem System — Kunden buchen online. Die ersten 2 Wochen kostenlos.',
    },
    hero: {
      eyebrow: 'CRM für Beauty-Profis und Studios',
      h1: 'Kunden, Termine und Ihr Arbeitsalltag — in einem System',
      lead:
        'Führen Sie Ihre Kundenkartei, organisieren Sie den Kalender, richten Sie Leistungen und Team ein und behalten Sie die Ergebnisse im Blick. Hirnix übernimmt die tägliche Routine, und Ihre Kunden buchen ihre Termine online selbst.',
      primary: 'Gespräch vereinbaren',
      secondary: 'Plattform ansehen',
      trust: ['Die ersten 2 Wochen kostenlos', 'Persönliche Einrichtung', 'Plattform-Tour ohne Anmeldung'],
    },
    workday: {
      eyebrow: 'Beispiel',
      h2: 'Ein Arbeitstag mit Hirnix',
      lead: 'Wie die Module zusammenhängen: vom Kalender am Morgen bis zur Auswertung für den Zeitraum. Das Beispiel nutzt Demodaten.',
      steps: [
        { time: 'Morgens', title: 'Kalender für heute', body: 'Sie wählen ein Datum und sehen alle Termine in den Spalten Ihrer Mitarbeitenden.', link: { route: 'scheduling', label: 'So funktioniert der Kalender' } },
        { time: 'Im Laufe des Tages', title: 'Neuer Termin', body: 'Sie tragen einen Termin selbst ein oder erhalten eine Buchung, die eine Kundin online über Ihren Link gemacht hat.', link: { route: 'booking', label: 'Zur Online-Buchung' } },
        { time: 'Vor dem Termin', title: 'Kundenkarte', body: 'Sie öffnen Kontaktdaten und frühere Besuche und wissen, was beim letzten Mal gemacht wurde.', link: { route: 'clients', label: 'Zur Kundenkartei' } },
        { time: 'Nach dem Termin', title: 'Terminstatus', body: 'Sie markieren den Termin als erledigt, storniert oder nicht erschienen — so bleibt die Kundenhistorie korrekt.', link: { route: 'scheduling', label: 'Terminstatus' } },
        { time: 'Am Ende des Zeitraums', title: 'Auswertung', body: 'Sie sehen, welche Leistungen am häufigsten gebucht wurden und wie Ihr Team im gewählten Zeitraum gearbeitet hat.', link: { route: 'reports', label: 'Was die Auswertungen zeigen' } },
      ],
    },
    tasks: {
      eyebrow: 'Was Hirnix löst',
      h2: 'Drei Aufgaben, die jeder Beauty-Profi kennt',
      items: [
        { title: 'Termine organisieren', body: 'Termine, Leistungen und die Zeit jeder Mitarbeiterin in einem Kalender — statt verteilt auf Chats, Terminbuch und Gedächtnis.' },
        { title: 'Kunden betreuen', body: 'Kontaktdaten und Besuchshistorie liegen zusammen, sodass Sie vor jedem Termin wissen, mit wem Sie arbeiten.' },
        { title: 'Arbeit steuern und Ergebnisse sehen', body: 'Leistungen, Arbeitszeiten und Auswertungen zeigen, wie es läuft — ohne Rechnen von Hand.' },
      ],
    },
    features: {
      eyebrow: 'Funktionen',
      h2: 'Fünf Module, die zusammenarbeiten',
      lead: 'Jedes hat eine eigene Seite mit echten Screenshots und Antworten auf häufige Fragen.',
      items: [
        { route: 'scheduling', asset: 'calendarWeek', title: 'Termine & Kalender', body: 'Ein Tageskalender mit einer Spalte pro Mitarbeiterin. Öffnen Sie einen Termin und sehen Sie Leistungen, Zeit, Preis, Dauer und Kommentar.', link: 'So funktioniert der Kalender' },
        { route: 'clients', asset: 'clients', title: 'Kundenkartei', body: 'Kundensuche, Kontaktdaten, frühere und kommende Termine sowie die Anzahl der Besuche auf jeder Karte.', link: 'Zur Kundenkartei' },
        { route: 'team', asset: 'employees', title: 'Leistungen & Team', body: 'Ein Leistungskatalog mit Kategorien, Preisen und Dauer. Wer welche Leistung anbietet und wann gebucht werden kann.', link: 'Leistungen und Arbeitszeiten' },
        { route: 'reports', asset: 'reports', title: 'Auswertungen', body: 'Kennzahlen für den gewählten Zeitraum: beliebte Leistungen, Arbeit des Teams und Summen erledigter Termine.', link: 'Was die Auswertungen zeigen' },
        { route: 'booking', asset: 'bookingServices', title: 'Online-Terminbuchung', body: 'Ihre Studioseite per Link oder QR-Code: Kunden wählen Leistung, Mitarbeiterin und Zeit, und der Termin landet in Ihrem Kalender.', link: 'Zur Online-Buchung' },
      ],
    },
    segments: {
      eyebrow: 'Für wen',
      h2: 'Arbeiten Sie allein oder im Team?',
      items: [
        {
          route: 'independent',
          tag: 'Selbstständig',
          title: 'Wenn Sie Fachkraft und Rezeption in einem sind',
          body: 'Eigener Kalender, Kundenkartei, Leistungskatalog und eine Buchungsseite, die Sie auf Instagram oder im Messenger teilen. Weniger Nachrichten schreiben, mehr Zeit für die Arbeit.',
          points: ['Kalender und Kundenkarten an einem Ort', 'Ein Buchungslink für Ihre Kunden', 'Monatsübersicht Ihrer Ergebnisse'],
          link: 'CRM für Selbstständige',
        },
        {
          route: 'studios',
          tag: 'Beauty-Studio',
          title: 'Wenn mehrere Menschen abgestimmt arbeiten müssen',
          body: 'Ein gemeinsamer Kalender nach Mitarbeitenden, Zuordnung der Leistungen, Arbeitszeiten und Auswertungen pro Person — so sehen Sie das ganze Studio auf einen Blick.',
          points: ['Kalender mit Mitarbeiterspalten', 'Wer welche Leistungen anbietet und wann', 'Auswertungen nach Leistung und Mitarbeitenden'],
          link: 'CRM für Beauty-Studios',
        },
      ],
    },
    example: {
      eyebrow: 'Demo-Studio',
      h2: 'So sieht ein eingerichtetes Studio aus',
      lead: 'Solange wir keine freigegebenen Kundenbeispiele veröffentlicht haben, zeigen wir ein Demo-Studio. Alle Namen und Zahlen darin sind fiktiv.',
      facts: [
        { label: 'Mitarbeitende', value: 'mehrere Personen mit eigenen Arbeitszeiten' },
        { label: 'Leistungen', value: 'Kategorien mit Preisen, Dauer und Beschreibungen' },
        { label: 'Kunden', value: 'Kontaktdaten, erledigte und kommende Termine' },
        { label: 'Online-Buchung', value: 'eine Studioseite zur Wahl von Leistung, Mitarbeiterin und Zeit' },
      ],
      link: 'Demo ansehen',
    },
    onboarding: {
      eyebrow: 'Einrichtung',
      h2: 'So beginnt die Arbeit mit Hirnix',
      steps: [
        { title: 'Wir klären Ihren Bedarf', body: 'Ein kurzes Gespräch: wie Sie Termine heute verwalten, wie viele Mitarbeitende Sie haben, was zuerst eingerichtet werden soll.' },
        { title: 'Wir richten das System ein', body: 'Gemeinsam tragen wir Leistungen, Team und Arbeitszeiten im vereinbarten Umfang ein.' },
        { title: 'Wir testen den ersten Ablauf', body: 'Wir gehen einen echten Ablauf durch — von der Buchung bis zum erledigten Termin —, damit Sie sicher starten.' },
      ],
    },
    terms: {
      eyebrow: 'Konditionen',
      h2: 'Persönliche Einrichtung und ein Angebot nach Ihrem Bedarf',
      body: 'Wir pressen Ihr Studio in keine Schablone. Erzählen Sie uns, wie Sie arbeiten — wir richten Hirnix gemeinsam mit Ihnen ein und erstellen ein Angebot genau für Ihre Arbeitsweise. Die ersten 2 Wochen sind kostenlos.',
      needLabel: 'Was uns hilft, ein Angebot zu erstellen',
      needs: ['Ob Sie allein oder im Team arbeiten', 'Welche Module Sie zuerst brauchen', 'Ob eine bestehende Kundenliste übernommen werden soll'],
      cta: 'Konditionen ansehen',
    },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Häufige Fragen',
      items: [
        { q: 'Passt Hirnix auch, wenn ich allein arbeite, ohne Rezeption?', a: 'Ja. Sie führen Kalender, Kunden und Leistungen in einem System, und Kunden buchen selbst über einen Link. „Studio“ auf dieser Website heißt nicht, dass das Produkt nur für Teams ist.' },
        { q: 'Wie fange ich an?', a: 'Senden Sie eine Anfrage oder schreiben Sie uns. Wir klären, wie Sie arbeiten, helfen beim Einrichten von Leistungen, Team und Arbeitszeiten und testen gemeinsam den ersten echten Ablauf.' },
        { q: 'In welchen Sprachen gibt es die Online-Buchung?', a: 'In den Einstellungen wählen Sie die Sprachen der Buchungsseite, Ihre Währung und Zeitzone. Derzeit stehen Ukrainisch, Englisch, Tschechisch und Polnisch zur Verfügung; eine deutsche Buchungsseite gibt es noch nicht.' },
        { q: 'Helfen Sie, wenn etwas unklar ist?', a: 'Ja. Wir begleiten Sie beim Start und beantworten Fragen über Telegram, WhatsApp, Viber und E-Mail.' },
        { q: 'Wer steht hinter Hirnix?', a: 'Hirnix wird von einem ukrainischen Team in Europa entwickelt. Derzeit schließen wir die Registrierung unseres Unternehmens in Tschechien ab. Bis dahin vereinbaren wir die Konditionen schriftlich, danach schließen Sie einen Vertrag mit dem Unternehmen.' },
        { q: 'Kann ich Hirnix zuerst ausprobieren?', a: 'Ja, die ersten 2 Wochen sind kostenlos. Das Angebot für Ihre Arbeitsweise erstellen wir individuell — eine kurze Anfrage genügt.' },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      h2: 'Lassen Sie uns besprechen, wie Hirnix zu Ihrem Studio passt',
      lead: 'Hinterlassen Sie Ihre Kontaktdaten — wir stellen Ihnen die Plattform vor, zeigen sie an einem Beispiel wie Ihrem und erklären die Konditionen.',
      submit: 'Gespräch vereinbaren',
      directLabel: 'Oder schreiben Sie uns direkt',
    },
  },

  scheduling: {
    meta: {
      title: 'Terminplaner und Kalender für Beauty-Profis',
      description: 'Ein Terminkalender für Beauty-Profis und Studios: Termine nach Mitarbeitenden, Leistungen, Zeit, Preis und Status jedes Termins. So funktioniert es in Hirnix.',
    },
    demoAnchor: 'schedule',
    hero: { breadcrumb: 'Termine & Kalender', h1: 'Kalender und Kundentermine für den Arbeitsalltag', lead: 'Behalten Sie Termine im Blick, öffnen Sie Details und organisieren Sie die Arbeit Ihres Teams.', primary: 'Gespräch vereinbaren', secondary: 'In der Demo ansehen', asset: 'calendarDay' },
    why: { eyebrow: 'Warum', h2: 'Der ganze Arbeitstag auf einem Bildschirm', body: 'Wenn Termine im Buch, in Chats und im Kopf stehen, wird schnell ein Termin übersehen oder vergessen, was die Kundin wollte. In Hirnix hat jeder Termin seinen Platz im Kalender: Datum, Zeit, Mitarbeiterin, Leistungen und Kommentar nebeneinander.' },
    scenarios: {
      eyebrow: 'So funktioniert es',
      h2: 'Drei Momente, in denen der Kalender hilft',
      items: [
        { title: 'Den Tag beginnen', body: 'Wählen Sie ein Datum und sehen Sie alle Termine des Tages in den Spalten Ihrer Mitarbeitenden. Für die Planung schalten Sie auf die Woche um: Termine, freie Tage und Pausen einer Person.', points: ['Tagesansicht nach Mitarbeitenden', 'Wochenansicht pro Person', 'Freie Tage und Pausen im Kalender'], asset: 'calendarWeek' },
        { title: 'Mit einem Termin arbeiten', body: 'Öffnen Sie einen Termin und sehen Sie alles dazu: welche Leistungen, wie lange, welcher Preis und den Kommentar zu genau diesem Termin.', points: ['Mehrere Leistungen in einem Termin', 'Preis und Dauer', 'Kommentar zum Termin'], asset: 'visit' },
        { title: 'Festhalten, wie der Termin endete', body: 'Ändern Sie den Status: geplant, erledigt, storniert oder nicht erschienen. So bleiben Kalender und Kundenhistorie korrekt.', points: ['Status für jeden Termin', 'Erledigte Termine gehen in die Kundenhistorie', 'Stornos und No-Shows getrennt sichtbar'] },
      ],
    },
    connections: {
      eyebrow: 'Verbundene Module',
      h2: 'Der Kalender ist mit allem verbunden',
      items: [
        { route: 'clients', title: 'Kundenkartei', body: 'Vom Termin aus öffnen Sie die Kundenkarte und sehen frühere Besuche.', link: 'Zur Kundenkartei' },
        { route: 'team', title: 'Leistungen & Team', body: 'Leistungen mit Preis und Dauer sowie die Arbeitszeiten — daraus entsteht der Kalender.', link: 'Leistungen und Arbeitszeiten' },
        { route: 'booking', title: 'Online-Terminbuchung', body: 'Termine, die Kunden selbst über Ihren Link buchen, erscheinen in Ihrem Kalender.', link: 'Zur Online-Buchung' },
      ],
    },
    proof: { eyebrow: 'In der App', h2: 'Die Termine des Tages — direkt auf dem Startbildschirm', body: 'Nach dem Login zeigt das Dashboard heutige Termine, neue Kunden und beliebte Leistungen. Screenshot der aktuellen Hirnix-Version mit Demodaten.', asset: 'dashboard', demoLink: '„Kalender“ in der Demo öffnen' },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen zu Terminen und Kalender',
      items: [
        { q: 'Kann ich Termine selbst eintragen?', a: 'Ja. Tragen Sie den Termin im Kalender ein: Kundin, Leistungen, Mitarbeiterin und Zeit wählen. Genauso einfach für Termine, die per Telefon oder Nachricht kommen.' },
        { q: 'Kann eine Kundin mehrere Leistungen auf einmal buchen?', a: 'Ja, ein Termin kann mehrere Leistungen enthalten, jeweils mit Preis und Dauer.' },
        { q: 'Wie sehe ich die Termine einer bestimmten Person?', a: 'Im Tageskalender hat jede Mitarbeiterin eine eigene Spalte, ihre Termine stehen direkt neben denen der anderen. Die Wochenansicht zeigt die ganze Woche einer Person.' },
        { q: 'Erinnert Hirnix Kunden an ihren Termin?', a: 'Ja. Vor dem Termin erhält die Kundin eine Erinnerung per Telegram oder E-Mail mit Datum, Uhrzeit, Leistung und Mitarbeiterin.' },
        { q: 'Was bedeuten die Terminstatus?', a: '„Geplant“ — der Termin steht bevor. „Erledigt“ — er hat stattgefunden und geht in Kundenhistorie und Auswertungen ein. „Storniert“ — er findet nicht statt. „Nicht erschienen“ — die Kundin ist nicht gekommen.' },
      ],
    },
    cta: { h2: 'Sehen Sie, wie Ihr Arbeitstag in Hirnix aussehen würde', lead: 'Erzählen Sie uns, wie Sie Termine heute verwalten — wir zeigen Ihnen den Kalender für Ihre Arbeitsweise.', submit: 'Gespräch vereinbaren' },
  },

  clients: {
    meta: {
      title: 'Kundenkartei und Besuchshistorie',
      description: 'Eine Kundenkartei für Beauty-Profis und Studios: Suche, Kontaktdaten, frühere und kommende Termine auf einer Karte. So funktioniert es in Hirnix.',
    },
    demoAnchor: 'client',
    hero: { breadcrumb: 'Kundenkartei', h1: 'Kundenkartei und Besuchshistorie', lead: 'Finden Sie Kontaktdaten und sehen Sie die Historie vor dem nächsten Besuch.', primary: 'Gespräch vereinbaren', secondary: 'In der Demo ansehen', asset: 'clients' },
    why: { eyebrow: 'Warum', h2: 'Eine Kundin ist mehr als eine Zeile im Chat', body: 'Wenn Kontakte über Instagram, Messenger und Notizen verstreut sind, weiß man kaum noch, wer wann für welche Leistung da war. In Hirnix hat jede Kundin eine Karte, und die Termine aus dem Kalender ergeben automatisch ihre Historie.' },
    scenarios: {
      eyebrow: 'So funktioniert es',
      h2: 'Drei Momente, in denen die Kundenkartei hilft',
      items: [
        { title: 'Eine Kundin finden', body: 'Tippen Sie Namen oder Telefonnummer in die Suche, und die Liste grenzt sich ein. Kein Durchscrollen von Chats mehr, um eine Nummer zu finden.', points: ['Suche in der Kundenliste', 'Kontaktdaten neben dem Namen', 'Anzahl der Besuche und letzter Besuch'] },
        { title: 'Den Termin vorbereiten', body: 'Öffnen Sie die Karte vor dem Termin: Kontaktdaten, frühere Besuche mit Leistungen und kommende Termine — alles an einem Ort.', points: ['Kontaktdaten der Kundin', 'Frühere Besuche und Leistungen', 'Kommende Termine'], asset: 'clientCard' },
        { title: 'Die Behandlungshistorie sehen', body: 'Die Historie entsteht von selbst: Sobald ein Termin im Kalender als erledigt markiert ist, erscheint er auf der Kundenkarte. Sie sehen, wie oft die Kundin da war und welche Leistungen sie gewählt hat.', points: ['Termine werden automatisch gespeichert', 'Anzahl der Besuche', 'Leistungen je Termin'], asset: 'visit' },
      ],
    },
    connections: {
      eyebrow: 'Verbundene Module',
      h2: 'Die Kundenkartei arbeitet nicht für sich allein',
      items: [
        { route: 'scheduling', title: 'Termine & Kalender', body: 'Jeder Termin ist mit einer Kundenkarte verknüpft — vom Termin aus öffnen Sie die Historie.', link: 'So funktioniert der Kalender' },
        { route: 'booking', title: 'Online-Terminbuchung', body: 'Bucht eine Kundin über Ihren Link, landen ihre Kontaktdaten in der Kartei.', link: 'Zur Online-Buchung' },
        { route: 'reports', title: 'Auswertungen', body: 'Erledigte Termine Ihrer Kunden bilden die Kennzahlen in den Auswertungen.', link: 'Was die Auswertungen zeigen' },
      ],
    },
    proof: { eyebrow: 'In der App', h2: 'Neue Kunden — schon im Dashboard sichtbar', body: 'Neue Kunden und heutige Termine stehen auf dem Startbildschirm Ihres Kontos. Screenshot der aktuellen Hirnix-Version mit Demodaten.', asset: 'dashboard', demoLink: '„Kunde“ in der Demo öffnen' },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen zur Kundenkartei',
      items: [
        { q: 'Wie lege ich eine Kundenkarte an?', a: 'Sie können eine Karte im Bereich „Kunden“ selbst anlegen. Sie entsteht auch, wenn Sie einen Termin für eine neue Kundin eintragen.' },
        { q: 'Kann ich Kontaktdaten ändern?', a: 'Ja, Kontaktdaten bearbeiten Sie auf der Kundenkarte. Die Besuchshistorie bleibt erhalten.' },
        { q: 'Wo sehe ich die Besuchshistorie?', a: 'Auf der Kundenkarte: Dort stehen frühere Besuche mit Leistungen und kommende Termine aus dem Kalender.' },
        { q: 'Kann ich meine bestehende Kundenliste übernehmen?', a: 'Erzählen Sie uns, wo Sie Ihre Kunden heute führen — Tabelle, andere App oder Terminbuch. Beim Einrichtungsgespräch erklären wir, wie die Daten in Ihrem Fall übernommen werden.' },
      ],
    },
    cta: { h2: 'Sehen Sie, wie die Kundenkartei bei Ihnen funktioniert', lead: 'Erzählen Sie uns, wie Sie Ihre Kunden heute führen — wir zeigen Hirnix für Ihre Arbeitsweise.', submit: 'Gespräch vereinbaren' },
  },

  team: {
    meta: {
      title: 'Leistungen, Mitarbeitende und Arbeitszeiten',
      description: 'Leistungskatalog mit Preisen und Dauer, Zuordnung zu Mitarbeitenden und Arbeitszeiten in einem System. Wie Hirnix die Arbeit von Beauty-Profis und Studios abstimmt.',
    },
    demoAnchor: 'team',
    hero: { breadcrumb: 'Leistungen & Team', h1: 'Leistungen, Mitarbeitende und Arbeitszeiten — aufeinander abgestimmt', lead: 'Legen Sie fest, was Ihr Studio anbietet, wer welche Leistung ausführt und wann gebucht werden kann.', primary: 'Gespräch vereinbaren', secondary: 'In der Demo ansehen', asset: 'employees' },
    why: { eyebrow: 'Warum', h2: 'Buchung beginnt mit der Einrichtung', body: 'Um eine Kundin zur richtigen Zeit einzuplanen, muss das System drei Dinge wissen: was Sie anbieten, wer es ausführt und wann diese Person arbeitet. In Hirnix sind Leistungen, Mitarbeitende und Arbeitszeiten verknüpft — Kalender und Online-Buchung nutzen dieselben Daten.' },
    scenarios: {
      eyebrow: 'So funktioniert es',
      h2: 'Drei Schritte, aus denen die Arbeit im Studio besteht',
      items: [
        { title: 'Leistungen beschreiben', body: 'Gruppieren Sie Leistungen in Kategorien, ergänzen Sie Beschreibung, Preis und Dauer. Die Dauer bestimmt, wie lange der Termin im Kalender dauert.', points: ['Leistungskategorien', 'Preis und Dauer jeder Leistung', 'Beschreibungen auch in anderen Sprachen'], asset: 'services' },
        { title: 'Leistungen zuordnen', body: 'Legen Sie fest, wer welche Leistungen ausführt. Im Kalender und bei der Buchung ist dann nur auswählbar, wer die Leistung wirklich anbietet.', points: ['Eigene Leistungsliste pro Person', 'Unterschiedliche Leistungen je Mitarbeiterin', 'Ein Katalog für das ganze Team'] },
        { title: 'Arbeitszeiten festlegen', body: 'Hinterlegen Sie Arbeitstage und -zeiten jeder Person. Der Plan zeigt, wann sie gebucht werden kann.', points: ['Wochenplan pro Person', 'Arbeitstage und -zeiten', 'Buchbar laut Arbeitsplan'] },
      ],
    },
    connections: {
      eyebrow: 'Verbundene Module',
      h2: 'Einstellungen, die Kalender und Buchung steuern',
      items: [
        { route: 'scheduling', title: 'Termine & Kalender', body: 'Der Kalender zeigt Termine in Mitarbeiterspalten, die Dauer der Leistungen bestimmt die Länge des Termins.', link: 'So funktioniert der Kalender' },
        { route: 'booking', title: 'Online-Terminbuchung', body: 'Kunden sehen Ihren Leistungskatalog und wählen eine Person, die diese Leistung anbietet.', link: 'Zur Online-Buchung' },
        { route: 'reports', title: 'Auswertungen', body: 'Auswertungen zeigen, welche Leistungen am häufigsten gebucht wurden und wie das Team gearbeitet hat.', link: 'Was die Auswertungen zeigen' },
      ],
    },
    proof: { eyebrow: 'In der App', h2: 'So sieht eine Leistungskarte aus', body: 'Foto, Name, Beschreibung und Übersetzungen für die Buchungsseite. Screenshot der aktuellen Hirnix-Version mit Demodaten.', asset: 'serviceEdit', demoLink: '„Leistungen & Team“ in der Demo öffnen' },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen zu Leistungen und Team',
      items: [
        { q: 'Können verschiedene Mitarbeitende verschiedene Leistungen anbieten?', a: 'Ja. Jeder Person werden genau die Leistungen zugeordnet, die sie ausführt, und bei der Buchung wird die passende Person gewählt.' },
        { q: 'Wie werden Arbeitszeiten berücksichtigt?', a: 'Für jede Person gibt es einen Arbeitsplan — Tage und Uhrzeiten. Er zeigt, wann sie gebucht werden kann.' },
        { q: 'Kann ich Leistungen in mehreren Sprachen beschreiben?', a: 'Ja, Sie können Namen und Beschreibungen für die Sprachen der Buchungsseite übersetzen — derzeit Ukrainisch, Englisch, Tschechisch und Polnisch.' },
        { q: 'Passt das auch, wenn ich allein arbeite?', a: 'Ja. Sie richten Ihren eigenen Leistungskatalog und Arbeitsplan ein — ohne Team funktioniert das System genauso.' },
      ],
    },
    cta: { h2: 'Wir richten Leistungen und Arbeitszeiten mit Ihnen ein', lead: 'Erzählen Sie uns, wie viele Mitarbeitende und Leistungen Sie haben — wir zeigen, wie das in Hirnix aussähe.', submit: 'Gespräch vereinbaren' },
  },

  reports: {
    meta: {
      title: 'Auswertungen nach Leistung und Mitarbeitenden',
      description: 'Terminstatistik für Beauty-Profis und Studios: beliebte Leistungen und Arbeit des Teams für jeden Zeitraum. Welche Termine zählen und wie man die Zahlen liest.',
    },
    demoAnchor: 'reports',
    hero: { breadcrumb: 'Auswertungen', h1: 'Ihre Ergebnisse in klaren Auswertungen', lead: 'Sehen Sie Kennzahlen zu Terminen, Leistungen und der Arbeit Ihres Teams für den gewählten Zeitraum.', primary: 'Gespräch vereinbaren', secondary: 'In der Demo ansehen', asset: 'reports' },
    why: { eyebrow: 'Warum', h2: 'Sehen, wie es läuft — ohne Rechnen von Hand', body: 'Auswertungen entstehen aus denselben Terminen, die Sie im Kalender führen. Nichts muss im Terminbuch oder in einer Tabelle nachgezählt werden: Zeitraum wählen und sehen, welche Leistungen erbracht wurden und wie das Team gearbeitet hat.' },
    scenarios: {
      eyebrow: 'So funktioniert es',
      h2: 'Drei Fragen, die die Auswertungen beantworten',
      items: [
        { title: 'Was im Zeitraum passiert ist', body: 'Wählen Sie den Zeitraum. Die Auswertung basiert auf erledigten Terminen, sodass kommende und stornierte Termine nicht mit erbrachter Arbeit vermischt werden.', points: ['Zeitraum wählen', 'Erledigte Termine zählen', 'Kennzahlen innerhalb der gewählten Daten'] },
        { title: 'Welche Leistungen am beliebtesten sind', body: 'Sehen Sie, welche Leistungen am häufigsten gebucht wurden. Das zeigt, wo die Nachfrage liegt und was sich auszubauen lohnt.', points: ['Beliebtheit der Leistungen', 'Anzahl erbrachter Leistungen', 'Beliebteste Leistungen zuerst'], asset: 'reportsDetail' },
        { title: 'Wie das Team gearbeitet hat', body: 'Sehen Sie die verfügbaren Kennzahlen jeder Person: wie viele Termine und Leistungen im gewählten Zeitraum.', points: ['Kennzahlen pro Person', 'Anzahl der Termine', 'Erbrachte Leistungen'] },
      ],
    },
    connections: {
      eyebrow: 'Verbundene Module',
      h2: 'Woher die Daten der Auswertungen kommen',
      items: [
        { route: 'scheduling', title: 'Termine & Kalender', body: 'Sobald ein Termin als erledigt markiert ist, fließt er in die Auswertung des Zeitraums ein.', link: 'Terminstatus' },
        { route: 'team', title: 'Leistungen & Team', body: 'Leistungskatalog und Mitarbeiterliste bestimmen, wonach die Kennzahlen aufgeschlüsselt werden.', link: 'Leistungen und Arbeitszeiten' },
        { route: 'clients', title: 'Kundenkartei', body: 'Dieselben erledigten Termine ergeben die Historie jeder Kundin.', link: 'Zur Kundenkartei' },
      ],
    },
    proof: { eyebrow: 'In der App', h2: 'Kurzer Überblick — im Dashboard', body: 'Heutige Termine, beliebte Leistungen und Kennzahlen der letzten Tage sehen Sie direkt nach dem Login. Alle Zahlen im Screenshot sind Demodaten, keine Kundenergebnisse.', asset: 'dashboard', demoLink: '„Ergebnisse“ in der Demo öffnen' },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen zu Auswertungen',
      items: [
        { q: 'Welche Termine zählen in den Auswertungen?', a: 'Auswertungen basieren auf erledigten Terminen im gewählten Zeitraum. Geplante und stornierte Termine sowie No-Shows zählen nicht zur erbrachten Arbeit.' },
        { q: 'Was bedeuten die Beträge in der Auswertung?', a: 'Sie zeigen den Wert erbrachter Leistungen zu den Preisen in Ihrem Katalog. Das ist keine Buchhaltung und kein Gewinn: Ausgaben und tatsächliche Zahlungen sind nicht enthalten.' },
        { q: 'In welcher Währung werden Beträge angezeigt?', a: 'In der Währung, die Sie in den Studioeinstellungen gewählt haben.' },
        { q: 'Was, wenn es noch wenig Daten gibt?', a: 'Auswertungen füllen sich mit jedem erledigten Termin. Am Anfang gibt es wenige Zahlen — das ist normal: Das Bild wird klarer, sobald sich einige Wochen Historie angesammelt haben.' },
      ],
    },
    cta: { h2: 'Sehen Sie, welche Kennzahlen Ihr Studio hätte', lead: 'Erzählen Sie uns, was Sie verfolgen möchten — wir zeigen Ihnen die Auswertungen an einem Beispiel.', submit: 'Gespräch vereinbaren' },
  },

  booking: {
    meta: {
      title: 'Online-Terminbuchung für Beauty-Profis und Studios',
      description: 'Eine Online-Buchungsseite für Beauty-Profis und Studios: per Link oder QR-Code wählen Kunden Leistung, Mitarbeiterin und freien Termin — der Termin landet in Ihrem Kalender.',
    },
    demoAnchor: 'booking',
    hero: { breadcrumb: 'Online-Terminbuchung', h1: 'Online-Buchung, verbunden mit Ihrem Kalender und Ihrer Kundenkartei', lead: 'Teilen Sie Ihre Studioseite, damit Kunden Leistung, Mitarbeiterin und freie Zeit selbst wählen.', primary: 'Gespräch vereinbaren', secondary: 'In der Demo ansehen', asset: 'bookingStart' },
    why: { eyebrow: 'Warum', h2: 'Weniger Hin und Her um freie Termine', body: 'Statt jede „Wann hast du Zeit?“-Nachricht zu beantworten, schicken Sie einen Link. Kunden sehen Ihre Leistungen und freien Zeiten und buchen selbst — und der Termin erscheint in Ihrem Kalender neben allen anderen.' },
    scenarios: {
      eyebrow: 'So funktioniert es',
      h2: 'Der Weg der Kundin — vom Link zum Termin',
      items: [
        { title: 'Link oder QR-Code', body: 'Teilen Sie den Link zur Buchungsseite auf Instagram, im Messenger oder auf Ihrer Website, oder drucken Sie einen QR-Code fürs Studio. Die Seite trägt das Design Ihres Studios.', points: ['Eigene Studioseite', 'Link für Social Media und Messenger', 'QR-Code fürs Studio'], asset: 'bookingSettings' },
        { title: 'Leistung, Person und Zeit wählen', body: 'Die Kundin wählt eine oder mehrere Leistungen, eine Mitarbeiterin und eine freie Zeit. Freie Zeiten richten sich nach Arbeitsplänen und Dauer der Leistungen.', points: ['Ihr Leistungskatalog', 'Auswahl der Mitarbeiterin', 'Freie Zeit laut Arbeitsplan'], asset: 'bookingServices' },
        { title: 'Der Termin in Ihrem Kalender', body: 'Hat die Kundin ihre Kontaktdaten angegeben und bestätigt, erscheint der Termin in Ihrem Kalender und der Kontakt in Ihrer Kundenkartei.', points: ['Der Termin landet im Kalender', 'Die Kundin landet in der Kartei', 'Sie arbeiten damit wie mit jedem Termin'], asset: 'calendarDay' },
      ],
    },
    connections: {
      eyebrow: 'Verbundene Module',
      h2: 'Die Online-Buchung nutzt dieselben Daten',
      items: [
        { route: 'scheduling', title: 'Termine & Kalender', body: 'Online-Buchungen stehen im Kalender neben selbst eingetragenen Terminen.', link: 'So funktioniert der Kalender' },
        { route: 'clients', title: 'Kundenkartei', body: 'Kontaktdaten von Kunden, die online buchen, werden mit ihrer Besuchshistorie gespeichert.', link: 'Zur Kundenkartei' },
        { route: 'team', title: 'Leistungen & Team', body: 'Kunden sehen Ihren Leistungskatalog und die Personen, die die Leistungen anbieten — innerhalb ihrer Arbeitszeiten.', link: 'Leistungen und Arbeitszeiten' },
      ],
    },
    proof: { eyebrow: 'In der App', h2: 'Freie Zeiten — laut Arbeitsplan', body: 'Die Kundin wählt ein Datum und sieht nur die freien Zeiten der gewählten Mitarbeiterin. Screenshot der aktuellen Hirnix-Version mit Demodaten; Studioname, Leistungen und Preise sind fiktiv.', asset: 'bookingTime', demoLink: '„Online-Buchung“ in der Demo öffnen' },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen zur Online-Buchung',
      items: [
        { q: 'In welchen Sprachen gibt es die Buchungsseite?', a: 'In den Einstellungen wählen Sie die Sprachen der Buchungsseite, Ihre Währung und Zeitzone. Derzeit stehen Ukrainisch, Englisch, Tschechisch und Polnisch zur Verfügung; eine deutsche Buchungsseite gibt es noch nicht.' },
        { q: 'Wo platziere ich den Buchungslink?', a: 'Überall, wo Kunden Sie erreichen: im Instagram-Profil, in Messenger-Antworten, auf Ihrer Website oder im Google-Profil. Fürs Studio können Sie einen QR-Code drucken.' },
        { q: 'Was sieht die Kundin beim Buchen?', a: 'Ihre Leistungen, die Personen, die sie anbieten, und freie Zeiten. Danach gibt sie ihre Kontaktdaten an und bestätigt.' },
        { q: 'Kann ich weiterhin Termine selbst eintragen?', a: 'Ja. Die Online-Buchung ersetzt das manuelle Eintragen nicht: Beides steht im selben Kalender.' },
      ],
    },
    cta: { h2: 'Starten wir die Online-Buchung für Ihr Studio', lead: 'Erzählen Sie uns, wie Kunden heute bei Ihnen buchen — wir richten die Buchungsseite gemeinsam ein.', submit: 'Gespräch vereinbaren' },
  },

  independent: {
    meta: {
      title: 'CRM für selbstständige Beauty-Profis',
      description: 'CRM für Beauty-Profis, die selbstständig arbeiten: eigener Kalender, Kundenkartei mit Besuchshistorie, Leistungskatalog und Online-Buchung per Link. Die ersten 2 Wochen kostenlos.',
    },
    hero: { breadcrumb: 'Für Selbstständige', h1: 'CRM für Beauty-Profis, die selbstständig arbeiten', lead: 'Wenn Sie Kunden selbst betreuen, Nachrichten beantworten und den Tag planen, hält Hirnix Termine, Kunden und Leistungen an einem Ort.', primary: 'Gespräch vereinbaren', secondary: 'Plattform ansehen', asset: 'calendarWeek' },
    story: { eyebrow: 'Kommt Ihnen bekannt vor?', h2: 'Sie sind Fachkraft und Rezeption in einem', body: 'Zwischen zwei Kundinnen müssen Sie auf Instagram antworten, an freie Zeiten denken und nicht vergessen, was Sie bei der Stammkundin zuletzt gemacht haben. Wenn alles in Chats und im Kopf steckt, geht immer etwas verloren. Hirnix hält Kalender, Kunden und Leistungen zusammen — und Kunden können selbst buchen.' },
    blocks: {
      eyebrow: 'Ihr Tag mit Hirnix',
      h2: 'Wie Hirnix Selbstständigen hilft',
      items: [
        { title: 'Ihr eigener Kalender', body: 'Alle Termine des Tages in einem Kalender. Öffnen Sie einen Termin und sehen Sie Leistungen, Zeit, Preis und Kommentar.', asset: 'dashboard', route: 'scheduling', link: 'So funktioniert der Kalender' },
        { title: 'Die Historie jeder Kundin', body: 'Öffnen Sie vor dem Termin die Karte: Kontaktdaten, frühere Besuche und gewählte Leistungen.', asset: 'clientCard', route: 'clients', link: 'Zur Kundenkartei' },
        { title: 'Ihr Leistungskatalog', body: 'Beschreiben Sie Leistungen mit Preis und Dauer — der Kalender weiß dann, wie lange jeder Termin dauert.', asset: 'services', route: 'team', link: 'Leistungen einrichten' },
        { title: 'Kunden buchen selbst', body: 'Teilen Sie den Link zu Ihrer Buchungsseite auf Instagram oder im Messenger — Kunden wählen Leistung und freie Zeit ohne Hin und Her.', asset: 'bookingSummary', route: 'booking', link: 'Zur Online-Buchung' },
        { title: 'Ihr Monat in Zahlen', body: 'Sehen Sie, welche Leistungen Sie am häufigsten erbracht haben und wie viele Termine es im Zeitraum gab.', asset: 'reports', route: 'reports', link: 'Was die Auswertungen zeigen' },
      ],
    },
    launch: {
      eyebrow: 'Start',
      h2: 'So fangen Sie an',
      steps: [
        { title: 'Kurzes Gespräch', body: 'Erzählen Sie uns, wie Sie Termine und Kunden heute verwalten.' },
        { title: 'Gemeinsam einrichten', body: 'Wir tragen Ihre Leistungen und Arbeitszeiten ein und richten die Buchungsseite ein.' },
        { title: '2 Wochen kostenlos', body: 'Sie arbeiten mit echten Terminen in Hirnix, bevor Sie sich entscheiden.' },
      ],
    },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen von Selbstständigen',
      items: [
        { q: 'Ist das nicht zu viel für eine Person?', a: 'Nein. Sie brauchen denselben Kalender, dieselben Kunden und Leistungen wie ein Studio — nur ohne Team. Wir richten das System mit Ihnen ein, Sie fangen also nicht allein bei null an.' },
        { q: 'Können Kunden buchen, während ich arbeite?', a: 'Ja. Kunden buchen über Ihren Link, wann es ihnen passt, und der Termin erscheint in Ihrem Kalender.' },
        { q: 'Was ist mit Kunden aus meinem Terminbuch oder meiner Tabelle?', a: 'Erzählen Sie uns, wo Ihre Kundenliste heute ist — bei der Einrichtung erklären wir, wie sie in Ihrem Fall übernommen wird.' },
        { q: 'Kann ich vom Smartphone aus arbeiten?', a: 'Hirnix läuft im Browser und öffnet sich am Computer wie auf dem Smartphone. Wir zeigen Ihnen beim Kennenlernen, wie es aussieht.' },
      ],
    },
    cta: { h2: 'Probieren Sie Hirnix in Ihrem Alltag aus', lead: 'Erzählen Sie uns, wie Sie Termine heute verwalten — wir richten das System für Sie ein. Die ersten 2 Wochen sind kostenlos.', submit: 'Gespräch vereinbaren' },
  },

  studios: {
    meta: {
      title: 'CRM und Terminbuchung für Beauty-Studios',
      description: 'CRM für Kosmetik- und Beauty-Studios: gemeinsamer Kalender nach Mitarbeitenden, Zuordnung der Leistungen, Arbeitszeiten, Kundenkartei und Auswertungen. Die ersten 2 Wochen kostenlos.',
    },
    hero: { breadcrumb: 'Für Beauty-Studios', h1: 'CRM zur Organisation eines Beauty-Studios', lead: 'Leistungen, Arbeitszeiten und Termine mehrerer Mitarbeitender — abgestimmt in einem System, damit Sie das ganze Studio im Blick haben.', primary: 'Gespräch vereinbaren', secondary: 'Plattform ansehen', asset: 'dashboard' },
    story: { eyebrow: 'Kommt Ihnen bekannt vor?', h2: 'Mehrere Mitarbeitende — und ein Kalender, den man im Kopf behalten muss', body: 'Jede Person hat eigene Leistungen und Arbeitstage, Kunden schreiben in verschiedene Messenger, und Termine sind zwischen Chats und Terminbuch verteilt. Wer ausgelastet ist und wer noch Zeit hat, müssen Sie von Hand zusammensuchen. Hirnix zeigt die Arbeit des ganzen Teams in einem Kalender.' },
    blocks: {
      eyebrow: 'Ihr Studio in Hirnix',
      h2: 'Wie Hirnix das Team abstimmt',
      items: [
        { title: 'Wer welche Leistungen anbietet', body: 'Ein Leistungskatalog für das Studio, und jeder Person sind genau die Leistungen zugeordnet, die sie ausführt.', asset: 'employees', route: 'team', link: 'Leistungen & Team' },
        { title: 'Arbeitszeiten des Teams', body: 'Arbeitstage und -zeiten jeder Person bestimmen, wann sie gebucht werden kann.', asset: 'calendarWeek', route: 'team', link: 'Arbeitszeiten festlegen' },
        { title: 'Ein gemeinsamer Kalender', body: 'Die Termine des ganzen Teams für den Tag in Mitarbeiterspalten. Sie sehen, wer wann mit wem arbeitet.', asset: 'calendarDay', route: 'scheduling', link: 'So funktioniert der Kalender' },
        { title: 'Kunden des Studios', body: 'Eine Kundenkartei für das ganze Studio: Kontaktdaten und Besuchshistorie, auch wenn eine Kundin zu verschiedenen Personen geht.', asset: 'clientCard', route: 'clients', link: 'Zur Kundenkartei' },
        { title: 'Auswertungen nach Leistung und Person', body: 'Sehen Sie, welche Leistungen am häufigsten gebucht wurden und welche Kennzahlen jede Person im Zeitraum hat.', asset: 'reportsDetail', route: 'reports', link: 'Was die Auswertungen zeigen' },
      ],
    },
    launch: {
      eyebrow: 'Einrichtung',
      h2: 'So binden Sie Ihr Studio an',
      steps: [
        { title: 'Wir klären Ihr Format', body: 'Wie viele Mitarbeitende, welche Leistungen, wie Termine heute verwaltet werden.' },
        { title: 'Wir richten es gemeinsam ein', body: 'Wir tragen Leistungen, Mitarbeitende und Arbeitszeiten im vereinbarten Umfang ein.' },
        { title: '2 Wochen kostenlos', body: 'Ihr Team arbeitet mit echten Terminen in Hirnix, bevor Sie sich entscheiden.' },
      ],
    },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen von Studios',
      items: [
        { q: 'Können Mitarbeitende unterschiedliche Leistungen und Arbeitszeiten haben?', a: 'Ja. Jede Person hat eigene Leistungen und einen eigenen Arbeitsplan.' },
        { q: 'Sieht die Rezeption die Termine aller Mitarbeitenden?', a: 'Ja, der Tageskalender zeigt die Termine des ganzen Teams in Mitarbeiterspalten.' },
        { q: 'Können Mitarbeitende einen eigenen Zugang haben?', a: 'Erzählen Sie uns, wie die Aufgaben bei Ihnen verteilt sind — bei der Einrichtung zeigen wir, wie Sie den Zugang für das Team organisieren.' },
        { q: 'Wie viele Mitarbeitende können mit Hirnix arbeiten?', a: 'Hirnix ist für Selbstständige und kleinere Studios gemacht. Haben Sie ein größeres Team, beschreiben Sie Ihr Format in der Anfrage — wir prüfen es gesondert.' },
      ],
    },
    cta: { h2: 'Sehen Sie, wie die Arbeit Ihres Studios aussehen würde', lead: 'Erzählen Sie uns, wie viele Mitarbeitende und Leistungen Sie haben — wir zeigen Hirnix an einem Beispiel wie Ihrem Studio.', submit: 'Gespräch vereinbaren' },
  },

  demo: {
    meta: {
      title: 'Demo: so funktioniert Hirnix',
      description: 'Eine offene Tour durch Hirnix ohne Anmeldung: Kalender, Kundenkarte, Leistungen und Team, Auswertungen und Online-Buchung mit Demodaten.',
    },
    hero: {
      breadcrumb: 'Demo',
      h1: 'Sehen Sie, wie Hirnix funktioniert',
      lead: 'Eine kurze Tour durch ein Demo-Studio — vom Tageskalender bis zur Online-Buchung. Ohne Anmeldung und ohne Kontaktdaten.',
      note: 'Alle Namen, Leistungen und Zahlen in der Tour sind Demodaten. Die Screenshots zeigen die ukrainische Oberfläche.',
      tocLabel: 'Abschnitte der Tour',
    },
    chapters: [
      { id: 'schedule', route: 'scheduling', title: 'Kalender', lead: 'Der Arbeitstag in Mitarbeiterspalten und die Details jedes Termins.', steps: ['Wir wählen ein Datum und sehen alle Termine des Tages nach Mitarbeitenden.', 'Wir öffnen einen Termin: Leistungen, Zeit, Preis, Dauer und Kommentar.', 'Nach dem Termin ändern wir den Status — zum Beispiel auf „erledigt“.'], assets: ['calendarDay', 'visit'], link: 'Mehr zu Terminen & Kalender' },
      { id: 'client', route: 'clients', title: 'Kundin', lead: 'Suche in der Kartei und eine Karte mit Besuchshistorie.', steps: ['Wir suchen eine Kundin in der Liste — nach Name oder Telefon.', 'Wir öffnen die Karte: Kontaktdaten, frühere Besuche und kommende Termine.', 'Wir sehen, wie oft sie da war und welche Leistungen sie gewählt hat.'], assets: ['clients', 'clientCard'], link: 'Mehr zur Kundenkartei' },
      { id: 'team', route: 'team', title: 'Leistungen & Team', lead: 'Leistungskatalog, Zuordnung zu Mitarbeitenden und Arbeitszeiten.', steps: ['Wir legen eine Leistung an: Kategorie, Beschreibung, Preis und Dauer.', 'Wir ordnen sie den Personen zu, die sie ausführen.', 'Wir legen Arbeitszeiten fest — wann eine Person gebucht werden kann.'], assets: ['services', 'employees'], link: 'Mehr zu Leistungen & Team' },
      { id: 'reports', route: 'reports', title: 'Ergebnisse', lead: 'Kennzahlen zu Leistungen und Mitarbeitenden für den gewählten Zeitraum.', steps: ['Wir wählen einen Zeitraum — die Auswertung basiert auf erledigten Terminen.', 'Wir sehen, welche Leistungen am häufigsten gebucht wurden.', 'Wir sehen die Kennzahlen jeder Person.'], assets: ['reports', 'reportsDetail'], link: 'Mehr zu Auswertungen' },
      { id: 'booking', route: 'booking', title: 'Online-Buchung', lead: 'Der Weg der Kundin vom Link bis zum Termin im Kalender.', steps: ['Die Kundin öffnet Ihre Studioseite per Link oder QR-Code.', 'Sie wählt Leistung, Mitarbeiterin und freie Zeit.', 'Sie bestätigt — und der Termin erscheint im Kalender.'], assets: ['bookingServices', 'bookingTime'], link: 'Mehr zur Online-Buchung' },
    ],
    stepLabel: 'Was passiert',
    cta: { eyebrow: 'Weiter', h2: 'Zeigen Sie mir Hirnix für meine Arbeitsweise', lead: 'Erzählen Sie uns, wie Sie arbeiten — wir gehen denselben Ablauf an einem Beispiel wie Ihrem Studio durch.', submit: 'Für mein Studio zeigen' },
  },

  conditions: {
    meta: {
      title: 'Konditionen und persönliches Angebot',
      description: 'So starten Sie mit Hirnix: die ersten 2 Wochen kostenlos, persönliche Einrichtung für Ihre Arbeitsweise und ein Angebot nach dem Bedarf Ihres Studios.',
    },
    hero: {
      breadcrumb: 'Konditionen',
      h1: 'Konditionen für Ihr Studio',
      lead: 'Wir richten Hirnix für jede Selbstständige und jedes Studio individuell ein: passend zu Ihrer Arbeitsweise, mit einem Angebot nach Ihrem Bedarf.',
      primary: 'Angebot anfragen',
      note: 'Eine Anfrage ist unverbindlich.',
    },
    trial: { label: 'Kostenloser Zeitraum', value: '2 Wochen', body: 'Arbeiten Sie mit Ihren eigenen Terminen und Kunden in Hirnix, bevor Sie sich entscheiden.' },
    product: {
      eyebrow: 'Produkt',
      h2: 'Was in Hirnix enthalten ist',
      lead: 'Module, die zusammenarbeiten und in Ihrem Konto verfügbar sind.',
      items: [
        { route: 'scheduling', title: 'Termine & Kalender', body: 'Tageskalender nach Mitarbeitenden, Termindetails und Status.' },
        { route: 'clients', title: 'Kundenkartei', body: 'Suche, Kontaktdaten und Besuchshistorie jeder Kundin.' },
        { route: 'team', title: 'Leistungen & Team', body: 'Leistungskatalog, Zuordnung zu Mitarbeitenden, Arbeitszeiten.' },
        { route: 'reports', title: 'Auswertungen', body: 'Kennzahlen zu Leistungen und Mitarbeitenden für den gewählten Zeitraum.' },
        { route: 'booking', title: 'Online-Terminbuchung', body: 'Eine Studioseite, auf der Kunden Leistung, Person und Zeit wählen.' },
      ],
    },
    launch: {
      eyebrow: 'Persönliche Einrichtung',
      h2: 'Wir richten alles gemeinsam ein',
      items: [
        { title: 'Einrichtung für Ihr Format', body: 'Wir helfen, Leistungen, Mitarbeitende und Arbeitszeiten im vereinbarten Umfang einzutragen.' },
        { title: 'Test des ersten Ablaufs', body: 'Wir gehen einen echten Ablauf von der Buchung bis zum erledigten Termin durch.' },
        { title: 'Ansprechbar, wenn Sie uns brauchen', body: 'Wir antworten über Telegram, WhatsApp, Viber und E-Mail — beim Start und im Alltag.' },
      ],
    },
    offer: {
      eyebrow: 'Angebot',
      h2: 'Ein Angebot nach Ihrem Bedarf',
      lead: 'Es gibt kein Einheitspaket für alle. Das Angebot richtet sich danach, wie Sie tatsächlich arbeiten.',
      items: [
        { title: 'Arbeitsweise', body: 'Ob Sie allein oder mit einem Team arbeiten.' },
        { title: 'Benötigte Funktionen', body: 'Welche Module Ihnen zuerst wichtig sind.' },
        { title: 'Umfang der Einrichtung', body: 'Wie viele Leistungen und Arbeitspläne einzurichten sind und ob eine Kundenliste übernommen wird.' },
      ],
    },
    process: {
      eyebrow: 'Nächster Schritt',
      h2: 'So erhalten Sie ein Angebot',
      steps: [
        { title: 'Sie senden eine Anfrage', body: 'Name und Telefon oder E-Mail. Ihre Arbeitsweise, wenn wir uns vorbereiten sollen.' },
        { title: 'Wir klären Details', body: 'Wir melden uns und stellen ein paar Fragen zu Ihrer Arbeit.' },
        { title: 'Wir senden das Angebot', body: 'Wir erklären, was die Einrichtung umfasst, und stimmen die Konditionen ab. Die Entscheidung liegt bei Ihnen.' },
      ],
    },
    form: { eyebrow: 'Anfrage', h2: 'Angebot anfragen', lead: 'Name und Telefon oder E-Mail genügen.', submit: 'Angebot anfragen' },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Fragen zu den Konditionen',
      items: [
        { q: 'Gibt es einen kostenlosen Zeitraum?', a: 'Ja, die ersten 2 Wochen sind kostenlos. In dieser Zeit arbeiten Sie mit Ihren eigenen Terminen und Kunden in Hirnix.' },
        { q: 'Warum gibt es kein Einheitspaket?', a: 'Selbstständige und Studios arbeiten unterschiedlich: andere Teamgröße, Leistungen und Einrichtungsbedarf. Deshalb erstellen wir ein Angebot für den konkreten Betrieb, statt ihn in eine Schablone zu pressen.' },
        { q: 'Was brauchen Sie für ein Angebot?', a: 'Name und Telefon oder E-Mail. Wenn Sie gleich angeben, ob Sie allein oder im Team arbeiten, lässt sich das Angebot leichter vorbereiten.' },
        { q: 'Verpflichtet mich die Anfrage zu etwas?', a: 'Nein. Die Anfrage bedeutet nur, dass wir ein Angebot erstellen und Ihre Fragen beantworten.' },
        { q: 'Mit wem schließe ich die Vereinbarung?', a: 'Hirnix wird von einem ukrainischen Team in Europa entwickelt. Derzeit schließen wir die Registrierung unseres Unternehmens in Tschechien ab. Bis dahin vereinbaren wir die Konditionen schriftlich, danach schließen Sie einen Vertrag mit dem Unternehmen.' },
        { q: 'Arbeiten Sie auch mit größeren Betrieben?', a: 'Beschreiben Sie Ihr Format in der Anfrage — wir prüfen es gesondert.' },
      ],
    },
  },

  contact: {
    meta: {
      title: 'Kontakt und Einrichtung',
      description: 'Kontaktieren Sie Hirnix per Telegram, WhatsApp, Viber, Telefon oder E-Mail. Wir stellen die Plattform vor, zeigen sie für Ihre Arbeitsweise und helfen beim Start.',
    },
    hero: { breadcrumb: 'Kontakt', h1: 'Melden Sie sich, wie es Ihnen passt', lead: 'Schreiben Sie im Messenger, rufen Sie an oder senden Sie eine Anfrage — wir stellen Ihnen Hirnix vor und stimmen den nächsten Schritt ab.' },
    channels: { eyebrow: 'Kanäle', h2: 'Direkt', phoneLabel: 'Telefon', messengersLabel: 'Messenger', messengersNote: 'Telegram, WhatsApp und Viber — alle unter derselben Nummer.', emailLabel: 'E-Mail' },
    next: {
      eyebrow: 'Wie es weitergeht',
      h2: 'Was nach Ihrer Anfrage passiert',
      steps: [
        { title: 'Wir melden uns', body: 'Über das angegebene Telefon oder die E-Mail — um zu erfahren, wie Sie arbeiten und was Ihnen wichtig ist.' },
        { title: 'Wir zeigen Ihnen Hirnix', body: 'Wir gehen einen Ablauf an einem Beispiel wie Ihrem Studio durch und beantworten Ihre Fragen.' },
        { title: 'Wir vereinbaren die Einrichtung', body: 'Wir erstellen ein Angebot nach Ihrem Bedarf und richten das System mit Ihnen ein. Die ersten 2 Wochen sind kostenlos.' },
      ],
    },
    login: { h2: 'Sie nutzen Hirnix bereits?', body: 'Melden Sie sich in Ihrem Konto an, um mit Terminen, Kunden und Einstellungen zu arbeiten.', cta: 'Zum Kundenkonto' },
    form: { eyebrow: 'Kontakt', h2: 'Anfrage senden', lead: 'Name und Telefon oder E-Mail genügen. Wenn Sie möchten, schreiben Sie ein paar Worte zu Ihrem Studio.', submit: 'Anfrage senden' },
  },
};
