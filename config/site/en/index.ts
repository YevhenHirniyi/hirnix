/**
 * English copy. Audience: beauty professionals and studios across Europe
 * (not a literal translation of the Ukrainian site). Same claims and limits
 * as the Ukrainian source — see the H0x / ПОГОДИТИ markers there.
 */

import type { SiteCopy } from '../copy';

export const en: SiteCopy = {
  common: {
    routes: {
      home: { label: 'Home' },
      scheduling: { label: 'Bookings & schedule', hint: 'Your working day, visits and team in one calendar' },
      clients: { label: 'Client base', hint: 'Contacts and visit history for every client' },
      team: { label: 'Services & team', hint: 'Service menu, who does what, working hours' },
      reports: { label: 'Reports & results', hint: 'Bookings, services and staff figures for any period' },
      booking: { label: 'Online booking', hint: 'A page where clients pick a service and time themselves' },
      independent: { label: 'For independent pros', hint: 'You work on your own, without a receptionist' },
      studios: { label: 'For beauty studios', hint: 'Coordinating a team of several specialists' },
      demo: { label: 'Demo' },
      conditions: { label: 'Terms' },
      contact: { label: 'Contact' },
      privacy: { label: 'Privacy policy (UA)' },
      cookies: { label: 'Cookies (UA)' },
    },
    ui: {
      skipLink: 'Skip to content',
      mainNav: 'Main menu',
      languageNav: 'Site language',
      breadcrumbs: 'Breadcrumbs',
      contactEyebrow: 'Get in touch',
      directLabel: 'Or message us directly',
      loginCabinet: 'Log in to your account',
      optional: 'optional',
    },
    seo: {
      ogTagline: 'CRM for beauty professionals and studios',
      appDescription: 'CRM for beauty professionals and studios: client base, schedule, services, team, reports and online booking.',
    },
    header: {
      featuresLabel: 'Features',
      segmentsLabel: 'Who it’s for',
      login: 'Log in',
      cta: 'Talk to us',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    footer: {
      brand: 'CRM for beauty professionals and studios: clients, bookings, services, team and results in one system.',
      featuresHeading: 'Features',
      companyHeading: 'Hirnix',
      contactsHeading: 'Contact',
      copyright: `© ${new Date().getFullYear()} Hirnix`,
    },
    assets: {
      demoNote: 'Demo data · Ukrainian interface',
      alt: {
        dashboard: 'Hirnix dashboard: today’s bookings, recent clients, popular services',
        calendarDay: 'Hirnix day calendar with bookings in three specialist columns',
        calendarWeek: 'Week calendar of one specialist with days off, a break and bookings',
        visit: 'Open booking: specialist, services with prices and durations, date, time, status and comments',
        clients: 'Client list with search, number of visits and last visit date',
        clientCard: 'Client card: number of visits, comments and booking history with statuses',
        services: 'Service menu with categories, prices and durations',
        serviceEdit: 'Service editor: photo, name, description and translations for the booking page',
        employees: 'Studio specialists with assigned services and weekly working hours',
        reports: 'Hirnix report: totals for the period and a monthly chart',
        reportsDetail: 'Report by services and specialists, and workload by day of the week',
        bookingSettings: 'Booking page settings: link, QR code, branding and languages',
        bookingStart: 'A studio’s online booking page on a phone',
        bookingMasters: 'Online booking: choosing a specialist with their speciality and bio',
        bookingServices: 'Online booking: choosing a service with photo, description, duration and price',
        bookingSummary: 'Online booking: chosen specialist and service before picking a time',
        bookingTime: 'Online booking: choosing a date and a free time slot',
      },
    },
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'Name',
      phoneLabel: 'Phone',
      phoneCountry: '',
      phoneInvalid: 'Please check the number — it looks too short or the wrong country is selected.',
      emailLabel: 'Email',
      emailPlaceholder: 'hello@example.com',
      emailInvalid: 'Please check the email address — it looks like there’s a typo.',
      contactHint: 'One contact is enough — phone or email.',
      nameRequired: 'Please tell us your name.',
      contactRequired: 'Please add a phone number or email so we can reply.',
      formatLabel: 'How you work',
      formatOptions: [
        { value: 'solo', label: 'On my own' },
        { value: 'team', label: 'Studio with a team' },
        { value: 'other', label: 'Something else' },
      ],
      detailsToggle: 'Add details (optional)',
      businessLabel: 'Business name',
      linkLabel: 'Website or Instagram',
      linkPlaceholder: 'instagram.com/…',
      commentLabel: 'What matters to you right now',
      commentPlaceholder: 'For example: where you keep bookings today, how many specialists, any questions',
      privacyNote: 'We’ll only use your contact details to reply to this request.',
      privacyLink: 'Privacy policy',
      sending: 'Sending…',
      errorTitle: 'Your request couldn’t be sent.',
      errorBody: 'Your details are still in the form — try again or message us directly:',
      retry: 'Send again',
      successTitle: 'Request received',
      successBody: 'We’ll get in touch using the contact details you gave to learn how you work and agree on the next step.',
      successContacts: 'Your contact details',
      successNext: 'While you wait, you can explore the platform.',
      successNextLink: 'View the demo',
    },
  },

  home: {
    meta: {
      title: 'Hirnix — CRM for beauty professionals and studios',
      description:
        'CRM for beauty professionals and studios: client base, schedule, services, team and reports in one system — and clients book online. First 2 weeks free.',
    },
    hero: {
      eyebrow: 'CRM for beauty professionals and studios',
      h1: 'Clients, bookings and your daily work — in one system',
      lead:
        'Keep your client base, organise your schedule, set up services and your team, and see your results. Hirnix takes care of the daily routine, and your clients can book online in the language that suits them.',
      primary: 'Talk to us',
      secondary: 'See the platform',
      trust: ['First 2 weeks free', 'Personal onboarding', 'Platform tour — no sign-up'],
    },
    workday: {
      eyebrow: 'Example',
      h2: 'One working day in Hirnix',
      lead: 'How the modules connect: from the morning schedule to the results for the period. The example uses training data.',
      steps: [
        { time: 'Morning', title: 'Today’s schedule', body: 'Pick a date and see every booking in your specialists’ columns.', link: { route: 'scheduling', label: 'How the schedule works' } },
        { time: 'During the day', title: 'New booking', body: 'Add a visit by hand or receive a booking a client made online through your link.', link: { route: 'booking', label: 'About online booking' } },
        { time: 'Before the visit', title: 'Client card', body: 'Open the contact details and past visits so you remember what you did last time.', link: { route: 'clients', label: 'About the client base' } },
        { time: 'After the visit', title: 'Booking status', body: 'Mark the visit as done, cancelled or no-show — so the client’s history stays accurate.', link: { route: 'scheduling', label: 'Booking statuses' } },
        { time: 'End of the period', title: 'Report', body: 'See which services were done most often and how your specialists worked in the chosen period.', link: { route: 'reports', label: 'What the reports show' } },
      ],
    },
    tasks: {
      eyebrow: 'What Hirnix solves',
      h2: 'Three jobs every beauty professional deals with',
      items: [
        { title: 'Organise bookings', body: 'Visits, services and each specialist’s time in one calendar — not spread across chats, a notebook and memory.' },
        { title: 'Look after clients', body: 'Contact details and visit history are kept together, so before each appointment you know who you’re working with.' },
        { title: 'Run the work and see results', body: 'Services, working hours and reports for any period show how things are going — without counting by hand.' },
      ],
    },
    features: {
      eyebrow: 'Features',
      h2: 'Five modules that work together',
      lead: 'Each one has its own page with real screens and answers to common questions.',
      items: [
        { route: 'scheduling', asset: 'calendarWeek', title: 'Bookings & schedule', body: 'A day calendar with a column for each specialist. Open a booking to see services, time, price, duration and comments.', link: 'How the schedule works' },
        { route: 'clients', asset: 'clients', title: 'Client base', body: 'Client search, contact details, past and upcoming visits, and the number of visits on each card.', link: 'Explore the client base' },
        { route: 'team', asset: 'employees', title: 'Services & team', body: 'A service menu with categories, prices and durations. Who does which service and when they can be booked.', link: 'Services and working hours' },
        { route: 'reports', asset: 'reports', title: 'Reports & results', body: 'Figures for the chosen period: popular services, specialists’ work and totals for completed visits.', link: 'What the reports show' },
        { route: 'booking', asset: 'bookingServices', title: 'Online booking', body: 'Your business page via a link or QR code: clients pick a service, specialist and time, and the booking lands in your calendar.', link: 'About online booking' },
      ],
    },
    segments: {
      eyebrow: 'Who it’s for',
      h2: 'Working on your own or with a team?',
      items: [
        {
          route: 'independent',
          tag: 'Independent pro',
          title: 'When you’re both the specialist and the receptionist',
          body: 'Your own schedule, client base, service menu and a booking page you can share on Instagram or in messengers. Less time messaging, more time working.',
          points: ['Schedule and client cards in one place', 'A booking link for your clients', 'A monthly overview of your results'],
          link: 'CRM for independent pros',
        },
        {
          route: 'studios',
          tag: 'Beauty studio',
          title: 'When several people need to work in sync',
          body: 'A shared calendar by specialist, service assignments, working hours and reports per person — so you see the whole studio at a glance.',
          points: ['Calendar with specialist columns', 'Who does which services and when', 'Reports by service and specialist'],
          link: 'CRM for beauty studios',
        },
      ],
    },
    example: {
      eyebrow: 'Training example',
      h2: 'What a set-up business looks like',
      lead: 'Until we publish approved client case studies, we show a training business. All names and figures in it are demo data.',
      facts: [
        { label: 'Specialists', value: 'several people with their own working hours' },
        { label: 'Services', value: 'categories with prices, durations and descriptions' },
        { label: 'Clients', value: 'contact details, completed and upcoming visits' },
        { label: 'Online booking', value: 'a business page to choose service, specialist and time' },
      ],
      link: 'View the demo',
    },
    onboarding: {
      eyebrow: 'Getting started',
      h2: 'How working with Hirnix begins',
      steps: [
        { title: 'We learn your needs', body: 'A short call: how you take bookings today, how many specialists you have, what to set up first.' },
        { title: 'We set up the system', body: 'Together we add your services, team and working hours in the agreed scope.' },
        { title: 'We test the first scenario', body: 'We walk through a real workflow — from booking to completed visit — so you can start with confidence.' },
      ],
    },
    terms: {
      eyebrow: 'Terms',
      h2: 'Personal onboarding and an offer built around your needs',
      body: 'We don’t squeeze your business into a template. Tell us how you work — we’ll set up Hirnix with you and prepare an offer for your format. The first 2 weeks are free.',
      needLabel: 'What helps us prepare an offer',
      needs: ['Whether you work alone or with a team', 'Which modules you need first', 'Whether an existing client list needs moving over'],
      cta: 'See the terms',
    },
    faq: {
      eyebrow: 'Questions',
      h2: 'Frequently asked questions',
      items: [
        { q: 'Does Hirnix suit me if I work alone, without a receptionist?', a: 'Yes. You keep your own schedule, clients and services in one system, and clients can book themselves through a link. “Studio” on this site doesn’t mean the product is only for teams.' },
        { q: 'How do I get started?', a: 'Send a request or message us. We’ll learn how you work, help set up your services, team and hours, and test the first real workflow with you.' },
        { q: 'Which languages does online booking support?', a: 'In the booking settings you choose the page languages, your currency and time zone. We’ll go through which languages your clients need during onboarding.' },
        { q: 'Will you help if something is unclear?', a: 'Yes. We support you through the launch and answer questions via Telegram, WhatsApp, Viber and email.' },
        { q: 'Who is behind Hirnix?', a: 'Hirnix is built by a Ukrainian team based in Europe. We are currently completing the registration of our company in the Czech Republic. Until then, onboarding terms are agreed in writing; afterwards, you sign a contract with the company.' },
        { q: 'Can I try it first?', a: 'Yes, the first 2 weeks are free. The offer for your way of working is prepared individually — a short request is all it takes.' },
      ],
    },
    contact: {
      eyebrow: 'Get in touch',
      h2: 'Let’s talk about how Hirnix fits your business',
      lead: 'Leave your contact details — we’ll tell you about the platform, show it on an example like yours and explain the terms.',
      submit: 'Talk to us',
      directLabel: 'Or message us directly',
    },
  },

  scheduling: {
    meta: {
      title: 'Appointment scheduling software for beauty pros',
      description: 'A booking calendar for beauty professionals and studios: visits by specialist, services, time, price and status of every booking. See how it works in Hirnix.',
    },
    demoAnchor: 'schedule',
    hero: { breadcrumb: 'Bookings & schedule', h1: 'Schedule and client bookings for everyday work', lead: 'See your visits, open booking details and organise your team’s work.', primary: 'Talk to us', secondary: 'See it in the demo', asset: 'calendarDay' },
    why: { eyebrow: 'Why', h2: 'Your whole working day on one screen', body: 'When bookings live in a notebook, chats and memory, it’s easy to miss a visit or forget what the client asked for. In Hirnix every booking has its place in the calendar: date, time, specialist, services and comments side by side.' },
    scenarios: {
      eyebrow: 'How it works',
      h2: 'Three moments where the schedule helps',
      items: [
        { title: 'Start the day', body: 'Pick a date and see all the day’s bookings laid out in specialist columns. To plan ahead, switch to the week view: bookings, days off and breaks of a specialist.', points: ['Day view by specialist', 'Week view for each specialist', 'Days off and breaks in the calendar'], asset: 'calendarWeek' },
        { title: 'Work with a visit', body: 'Open a booking to see everything about the visit: which services, how long it takes, the price, and comments for this particular visit.', points: ['Several services in one visit', 'Price and duration', 'Comments on the visit'], asset: 'visit' },
        { title: 'Record how the visit ended', body: 'Change the booking status: scheduled, done, cancelled or no-show. That keeps the schedule and the client’s history accurate.', points: ['A status for every booking', 'Completed visits go into the client’s history', 'Cancellations and no-shows shown separately'] },
      ],
    },
    connections: {
      eyebrow: 'Connected modules',
      h2: 'The schedule is linked to everything else',
      items: [
        { route: 'clients', title: 'Client base', body: 'From a booking you can jump to the client card and see their past visits.', link: 'Explore the client base' },
        { route: 'team', title: 'Services & team', body: 'Services with prices and durations, plus specialists’ hours, are what the schedule is built from.', link: 'Services and working hours' },
        { route: 'booking', title: 'Online booking', body: 'Bookings clients make themselves through your link appear in your calendar.', link: 'About online booking' },
      ],
    },
    proof: { eyebrow: 'In the app', h2: 'Today’s bookings — right on the home screen', body: 'After you log in, the dashboard shows today’s bookings, recent clients and popular services. Screenshot of the current Hirnix version with training data.', asset: 'dashboard', demoLink: 'Open “Schedule” in the demo' },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions about bookings and schedule',
      items: [
        { q: 'Can I add a booking by hand?', a: 'Yes. Add it in the calendar: choose the client, services, specialist and time. It’s just as easy for bookings that come in by phone or message.' },
        { q: 'Can a client book several services at once?', a: 'Yes, one visit can include several services, each with its price and duration.' },
        { q: 'How do I see one specialist’s bookings?', a: 'In the day calendar each specialist has a column, so their bookings sit right next to everyone else’s. The week view shows one specialist’s whole week.' },
        { q: 'Does Hirnix remind clients about their booking?', a: 'Yes. Before the visit the client gets a reminder via Telegram or email with the date, time, service and specialist.' },
        { q: 'What do the booking statuses mean?', a: '“Scheduled” — the visit is ahead. “Done” — it took place and goes into the client’s history and reports. “Cancelled” — it won’t happen. “No-show” — the client didn’t come.' },
      ],
    },
    cta: { h2: 'See what your working day would look like in Hirnix', lead: 'Tell us how you keep bookings today — we’ll show you the schedule for your way of working.', submit: 'Talk to us' },
  },

  clients: {
    meta: {
      title: 'Client base and visit history',
      description: 'A client base for beauty professionals and studios: client search, contact details, past and upcoming visits on one card. See how it works in Hirnix.',
    },
    demoAnchor: 'client',
    hero: { breadcrumb: 'Client base', h1: 'Client base and visit history', lead: 'Find contact details and review a client’s history before their next visit.', primary: 'Talk to us', secondary: 'See it in the demo', asset: 'clients' },
    why: { eyebrow: 'Why', h2: 'A client is more than a line in a chat', body: 'When contacts are scattered across Instagram, messengers and notes, it’s hard to remember who came, when and for which service. In Hirnix every client has one card, and visits from the calendar build up their history automatically.' },
    scenarios: {
      eyebrow: 'How it works',
      h2: 'Three moments where the client base helps',
      items: [
        { title: 'Find a client', body: 'Start typing a name or phone number in search and the list narrows down. No more scrolling through chats to find a number.', points: ['Search the client list', 'Contacts next to the name', 'Number of visits and the last one'] },
        { title: 'Prepare for a visit', body: 'Open the card before the appointment: contact details, past visits with services and upcoming bookings — all in one place.', points: ['Client contact details', 'Past visits and services', 'Upcoming bookings'], asset: 'clientCard' },
        { title: 'See the service history', body: 'The history builds itself: once a visit is marked as done in the calendar, it appears on the client card. You see how often the person came and which services they chose.', points: ['Visits saved automatically', 'Number of visits', 'Services in each visit'], asset: 'visit' },
      ],
    },
    connections: {
      eyebrow: 'Connected modules',
      h2: 'The client base doesn’t work in isolation',
      items: [
        { route: 'scheduling', title: 'Bookings & schedule', body: 'Every booking in the calendar is linked to a client card — from a visit you can open the person’s history.', link: 'How the schedule works' },
        { route: 'booking', title: 'Online booking', body: 'When a client books through your link, their contact details go into the base.', link: 'About online booking' },
        { route: 'reports', title: 'Reports & results', body: 'Clients’ completed visits feed the figures in your period reports.', link: 'What the reports show' },
      ],
    },
    proof: { eyebrow: 'In the app', h2: 'New clients — visible on the dashboard', body: 'Recent clients and today’s bookings are gathered on the main screen of your account. Screenshot of the current Hirnix version with training data.', asset: 'dashboard', demoLink: 'Open “Client” in the demo' },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions about the client base',
      items: [
        { q: 'How do I create a client card?', a: 'You can add a card manually in the “Clients” section. A card is also created when you make a booking for a new client.' },
        { q: 'Can I change a client’s contact details?', a: 'Yes, contact details are edited on the client card. The visit history is kept.' },
        { q: 'Where do I see the visit history?', a: 'On the client card: it brings together past visits with services and upcoming bookings from the calendar.' },
        { q: 'Can I move my existing client list over?', a: 'Tell us where you keep your clients today — a spreadsheet, another app or a notebook. When we discuss onboarding, we’ll explain how to move the data in your case.' },
      ],
    },
    cta: { h2: 'See how the client base works for your business', lead: 'Tell us how you keep track of clients today — we’ll show Hirnix for your way of working.', submit: 'Talk to us' },
  },

  team: {
    meta: {
      title: 'Services, specialists and working hours',
      description: 'A service menu with prices and durations, services assigned to specialists and working hours in one system. How Hirnix keeps a beauty pro or studio in sync.',
    },
    demoAnchor: 'team',
    hero: { breadcrumb: 'Services & team', h1: 'Services, specialists and working hours — in sync', lead: 'Set up what your business offers, who does each service and when they can be booked.', primary: 'Talk to us', secondary: 'See it in the demo', asset: 'employees' },
    why: { eyebrow: 'Why', h2: 'Booking starts with set-up', body: 'To book a client at the right time, the system needs to know three things: what you offer, who does it and when that person works. In Hirnix services, specialists and working hours are linked — so the schedule and online booking rely on the same data.' },
    scenarios: {
      eyebrow: 'How it works',
      h2: 'Three steps that make up a studio’s work',
      items: [
        { title: 'Describe your services', body: 'Group services into categories and add a description, price and duration. The duration decides how long the visit takes in the schedule.', points: ['Service categories', 'Price and duration for each service', 'Descriptions, including in other languages'], asset: 'services' },
        { title: 'Assign services to specialists', body: 'Set which specialist does which services. Then only the right person can be chosen in the schedule and in online booking.', points: ['Each specialist’s own service list', 'Different services for different people', 'One menu for the whole team'] },
        { title: 'Set working hours', body: 'Set each specialist’s working days and hours. The schedule shows when the person is available for booking.', points: ['A weekly schedule per specialist', 'Working days and hours', 'Bookable according to the schedule'] },
      ],
    },
    connections: {
      eyebrow: 'Connected modules',
      h2: 'Set-up that powers the schedule and booking',
      items: [
        { route: 'scheduling', title: 'Bookings & schedule', body: 'The calendar shows bookings in specialist columns, and service durations set the length of each visit.', link: 'How the schedule works' },
        { route: 'booking', title: 'Online booking', body: 'Clients see your service menu and pick a specialist who does that service.', link: 'About online booking' },
        { route: 'reports', title: 'Reports & results', body: 'Reports show which services were done most often and how your specialists worked.', link: 'What the reports show' },
      ],
    },
    proof: { eyebrow: 'In the app', h2: 'What a service card looks like', body: 'Photo, name, description and translations for the booking page — clients see the service in their own language. Screenshot of the current Hirnix version with training data.', asset: 'serviceEdit', demoLink: 'Open “Services & team” in the demo' },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions about services and team',
      items: [
        { q: 'Can different specialists do different services?', a: 'Yes. Each specialist is assigned exactly the services they do, and the right person is chosen at booking.' },
        { q: 'How are working hours taken into account?', a: 'Each specialist has working hours — days and times. They show when that person can be booked.' },
        { q: 'Can I describe services in several languages?', a: 'Yes, you can add translated names and descriptions for services — handy when your clients speak different languages.' },
        { q: 'Does this work if I’m on my own?', a: 'Yes. You set up your own service menu and hours — without a team the system works just the same.' },
      ],
    },
    cta: { h2: 'We’ll set up services and hours with you', lead: 'Tell us how many specialists and services you have — we’ll show you how it would look in Hirnix.', submit: 'Talk to us' },
  },

  reports: {
    meta: {
      title: 'Reports by service and specialist',
      description: 'Booking statistics for beauty professionals and studios: popular services and specialists’ work for any period. Which visits are counted and how to read the figures.',
    },
    demoAnchor: 'reports',
    hero: { breadcrumb: 'Reports & results', h1: 'Your results in clear reports', lead: 'See figures for bookings, services and your specialists’ work for the chosen period.', primary: 'Talk to us', secondary: 'See it in the demo', asset: 'reports' },
    why: { eyebrow: 'Why', h2: 'See how things are going — without counting by hand', body: 'Reports are built from the same visits you keep in the calendar. No need to count bookings in a notebook or spreadsheet: pick a period and see which services were done and how your specialists worked.' },
    scenarios: {
      eyebrow: 'How it works',
      h2: 'Three questions the reports answer',
      items: [
        { title: 'What happened in the period', body: 'Choose the period you want to look at. The report is based on completed visits, so upcoming and cancelled bookings don’t mix with work done.', points: ['Choose a period', 'Completed visits are counted', 'Figures within the chosen dates'] },
        { title: 'Which services are most popular', body: 'See which services were done most often. It helps you understand demand and what’s worth developing.', points: ['Service popularity', 'Number of services done', 'Most popular services first'], asset: 'reportsDetail' },
        { title: 'How your specialists worked', body: 'Review the figures available for each specialist: how many visits and services they did in the chosen period.', points: ['Figures per specialist', 'Number of visits', 'Services done'] },
      ],
    },
    connections: {
      eyebrow: 'Connected modules',
      h2: 'Where the report data comes from',
      items: [
        { route: 'scheduling', title: 'Bookings & schedule', body: 'Once a visit is marked as done, it goes into the reports for that period.', link: 'Booking statuses' },
        { route: 'team', title: 'Services & team', body: 'Your service menu and list of specialists define how the figures are broken down.', link: 'Services and working hours' },
        { route: 'clients', title: 'Client base', body: 'The same completed visits build up each client’s history.', link: 'Explore the client base' },
      ],
    },
    proof: { eyebrow: 'In the app', h2: 'A quick summary — on the dashboard', body: 'Today’s bookings, popular services and figures for recent days are visible right after you log in. All figures in the screenshot are demo data, not client results.', asset: 'dashboard', demoLink: 'Open “Results” in the demo' },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions about reports',
      items: [
        { q: 'Which bookings are counted in the reports?', a: 'Reports are based on completed visits in the chosen period. Scheduled and cancelled bookings and no-shows are not included in the figures for work done.' },
        { q: 'What do the amounts in the report mean?', a: 'They show the value of services done at the prices in your service menu. This isn’t accounting or profit: expenses and actual payments aren’t included.' },
        { q: 'Which currency are amounts shown in?', a: 'In the currency you selected in your business settings.' },
        { q: 'What if there isn’t much data yet?', a: 'Reports fill up with every completed visit. At the start there are few figures — that’s normal: the picture gets clearer once a few weeks of history build up.' },
      ],
    },
    cta: { h2: 'See which figures your business would have', lead: 'Tell us what you’d like to track — we’ll show you the reports on an example.', submit: 'Talk to us' },
  },

  booking: {
    meta: {
      title: 'Online booking for beauty pros and studios',
      description: 'An online booking page for beauty professionals and studios: via a link or QR code clients pick a service, specialist and free time, and the booking lands in your schedule.',
    },
    demoAnchor: 'booking',
    hero: { breadcrumb: 'Online booking', h1: 'Online booking connected to your schedule and client base', lead: 'Share your business page so clients can choose a service, a specialist and an available time.', primary: 'Talk to us', secondary: 'See it in the demo', asset: 'bookingStart' },
    why: { eyebrow: 'Why', h2: 'Less back-and-forth about free slots', body: 'Instead of answering every “when are you free?”, you send clients a link. They see your services and free slots and book themselves — and the booking appears in your calendar next to all the others.' },
    scenarios: {
      eyebrow: 'How it works',
      h2: 'The client’s path — from link to booking',
      items: [
        { title: 'Link or QR code', body: 'Share the booking page link on Instagram, in messengers or on your website, or print a QR code for your studio. The page is branded for your business.', points: ['Your own business page', 'A link for social media and messengers', 'A QR code for the studio'], asset: 'bookingSettings' },
        { title: 'Choosing service, specialist and time', body: 'The client picks one or more services, a specialist and a free time. Available slots follow specialists’ working hours and service durations.', points: ['Your service menu', 'Choosing a specialist', 'Free time based on the schedule'], asset: 'bookingServices' },
        { title: 'The booking in your calendar', body: 'Once the client leaves their contact details and confirms, the visit appears in your schedule and the contact goes into your client base.', points: ['The booking lands in the calendar', 'The client goes into the client base', 'You handle it like any other visit'], asset: 'calendarDay' },
      ],
    },
    connections: {
      eyebrow: 'Connected modules',
      h2: 'Online booking runs on the same data',
      items: [
        { route: 'scheduling', title: 'Bookings & schedule', body: 'Online bookings sit in the calendar alongside the ones you add by hand.', link: 'How the schedule works' },
        { route: 'clients', title: 'Client base', body: 'Contact details of clients who book online are saved in the base along with their visit history.', link: 'Explore the client base' },
        { route: 'team', title: 'Services & team', body: 'Clients see your service menu and the specialists who do them, within their working hours.', link: 'Services and working hours' },
      ],
    },
    proof: { eyebrow: 'In the app', h2: 'Free time — based on the specialist’s schedule', body: 'The client picks a date and sees only the chosen specialist’s free slots. Screenshot of the current Hirnix version with training data; business name, services and prices are demo data.', asset: 'bookingTime', demoLink: 'Open “Online booking” in the demo' },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions about online booking',
      items: [
        { q: 'Which languages is the booking page available in?', a: 'In the settings you choose the booking page languages, plus your currency and time zone. We’ll go through which languages your clients need during onboarding.' },
        { q: 'Where should I put the booking link?', a: 'Wherever your clients reach you: your Instagram profile, a reply in a messenger, your website or Google profile. For a studio you can print a QR code.' },
        { q: 'What does the client see when booking?', a: 'Your services, the specialists who do them and free times. Then they leave contact details and confirm the booking.' },
        { q: 'Can I still add bookings by hand?', a: 'Yes. Online booking doesn’t replace manual bookings: both sit in the same calendar.' },
      ],
    },
    cta: { h2: 'Let’s launch online booking for your business', lead: 'Tell us where your clients book today — we’ll set up the booking page with you.', submit: 'Talk to us' },
  },

  independent: {
    meta: {
      title: 'CRM for independent beauty professionals',
      description: 'CRM for beauty pros who work for themselves: your own schedule, client base with visit history, service menu and online booking via a link. First 2 weeks free.',
    },
    hero: { breadcrumb: 'For independent pros', h1: 'CRM for beauty pros who work for themselves', lead: 'When you serve clients, answer messages and plan the day yourself, Hirnix keeps bookings, clients and services in one place.', primary: 'Talk to us', secondary: 'See the platform', asset: 'calendarWeek' },
    story: { eyebrow: 'Sound familiar?', h2: 'You’re both the specialist and the receptionist', body: 'Between clients you need to reply on Instagram, remember when you have a free slot and not forget what you did for a regular last time. When it all lives in chats and memory, something always slips. Hirnix keeps your schedule, clients and services together — and lets clients book themselves.' },
    blocks: {
      eyebrow: 'Your day in Hirnix',
      h2: 'How Hirnix helps a pro who works alone',
      items: [
        { title: 'Your own schedule', body: 'All your bookings for the day in one calendar. Open a visit to see services, time, price and comments.', asset: 'dashboard', route: 'scheduling', link: 'How the schedule works' },
        { title: 'Every client’s history', body: 'Before a visit, open the card: contact details, past visits and the services the person chose.', asset: 'clientCard', route: 'clients', link: 'Explore the client base' },
        { title: 'Your service menu', body: 'Describe your services with price and duration — and the schedule knows how long each visit takes.', asset: 'services', route: 'team', link: 'Setting up services' },
        { title: 'Clients book themselves', body: 'Share your booking page link on Instagram or in a messenger — clients pick a service and a free time without back-and-forth.', asset: 'bookingSummary', route: 'booking', link: 'About online booking' },
        { title: 'Your month in figures', body: 'See which services you did most often and how many visits there were in the period.', asset: 'reports', route: 'reports', link: 'What the reports show' },
      ],
    },
    launch: {
      eyebrow: 'Launch',
      h2: 'How to start',
      steps: [
        { title: 'A short call', body: 'Tell us how you keep bookings and clients today.' },
        { title: 'Set-up together', body: 'We add your services and hours and set up the booking page.' },
        { title: '2 weeks free', body: 'You work in Hirnix with real bookings before you decide.' },
      ],
    },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions from pros who work alone',
      items: [
        { q: 'Isn’t this too much for one person?', a: 'No. You need the same schedule, clients and services as a studio — just without a team. We set the system up with you, so you don’t start from scratch on your own.' },
        { q: 'Can clients book while I’m working?', a: 'Yes. Clients book through your link whenever it suits them, and the booking appears in your calendar.' },
        { q: 'What about clients I keep in a notebook or spreadsheet?', a: 'Tell us where your client list is today — during onboarding we’ll explain how to move it in your case.' },
        { q: 'Can I work from my phone?', a: 'Hirnix runs in the browser, so it opens on a computer and on a phone. We’ll show you how it looks when we meet.' },
      ],
    },
    cta: { h2: 'Try Hirnix in your own work', lead: 'Tell us how you keep bookings today — we’ll set the system up for you. The first 2 weeks are free.', submit: 'Talk to us' },
  },

  studios: {
    meta: {
      title: 'CRM for beauty studios',
      description: 'CRM for beauty studios: a shared calendar by specialist, service assignments, working hours, client base and reports by service and specialist. First 2 weeks free.',
    },
    hero: { breadcrumb: 'For beauty studios', h1: 'CRM to run a beauty studio', lead: 'Services, working hours and bookings of several specialists — in sync in one system, so you see the whole studio at a glance.', primary: 'Talk to us', secondary: 'See the platform', asset: 'dashboard' },
    story: { eyebrow: 'Sound familiar?', h2: 'Several specialists — and one schedule to keep in your head', body: 'Every specialist has their own services and working days, clients write in different messengers, and bookings are scattered between chats and a notebook. To see who’s busy and who has free slots, you have to piece it together by hand. Hirnix shows the whole team’s work in one calendar.' },
    blocks: {
      eyebrow: 'Your studio in Hirnix',
      h2: 'How Hirnix keeps the team in sync',
      items: [
        { title: 'Who does which services', body: 'One service menu for the studio, with each specialist assigned exactly the services they do.', asset: 'employees', route: 'team', link: 'Services & team' },
        { title: 'Specialists’ working hours', body: 'Each specialist’s working days and hours decide when they can be booked.', asset: 'calendarWeek', route: 'team', link: 'Setting working hours' },
        { title: 'A shared calendar', body: 'The whole team’s bookings for the day in specialist columns. You see who works with whom and when.', asset: 'calendarDay', route: 'scheduling', link: 'How the schedule works' },
        { title: 'Studio clients', body: 'One client base for the whole studio: contact details and visit history, even when a client sees different specialists.', asset: 'clientCard', route: 'clients', link: 'Explore the client base' },
        { title: 'Reports by service and specialist', body: 'See which services were done most often and each specialist’s figures for the chosen period.', asset: 'reportsDetail', route: 'reports', link: 'What the reports show' },
      ],
    },
    launch: {
      eyebrow: 'Getting started',
      h2: 'How to bring your studio on board',
      steps: [
        { title: 'We learn your format', body: 'How many specialists, which services, how bookings are kept today.' },
        { title: 'We set it up together', body: 'We add services, specialists and hours in the agreed scope.' },
        { title: '2 weeks free', body: 'Your team works in Hirnix with real bookings before you decide.' },
      ],
    },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions from studios',
      items: [
        { q: 'Can specialists have different services and hours?', a: 'Yes. Each specialist gets their own services and working hours.' },
        { q: 'Does the admin see all specialists’ bookings?', a: 'Yes, the day calendar shows the whole team’s bookings in specialist columns.' },
        { q: 'Can specialists have their own access to the system?', a: 'Tell us how responsibilities are split in your studio — during onboarding we’ll show how to organise access for the team.' },
        { q: 'How many specialists can use Hirnix?', a: 'Hirnix is built for independent pros and small studios. If your team is larger, describe your format in your request and we’ll assess it separately.' },
      ],
    },
    cta: { h2: 'See what your studio’s work would look like', lead: 'Tell us how many specialists and services you have — we’ll show Hirnix on an example similar to your studio.', submit: 'Talk to us' },
  },

  demo: {
    meta: {
      title: 'Demo: how Hirnix works',
      description: 'An open tour of Hirnix with no sign-up: schedule, client card, services and team, reports and online booking on training data.',
    },
    hero: {
      breadcrumb: 'Demo',
      h1: 'See how Hirnix works',
      lead: 'A short tour of one training business — from the day’s schedule to online booking. No sign-up and no contact details needed.',
      note: 'All names, services and figures in the tour are demo data. The screenshots show the Ukrainian interface.',
      tocLabel: 'Tour sections',
    },
    chapters: [
      { id: 'schedule', route: 'scheduling', title: 'Schedule', lead: 'The working day in specialist columns and the details of each visit.', steps: ['We pick a date and see all the day’s bookings by specialist.', 'We open a booking: services, time, price, duration and comments.', 'After the visit we change the status — for example, to “done”.'], assets: ['calendarDay', 'visit'], link: 'More about bookings & schedule' },
      { id: 'client', route: 'clients', title: 'Client', lead: 'Searching the base and a card with visit history.', steps: ['We search the list for a client — by name or phone.', 'We open the card: contact details, past visits and upcoming bookings.', 'We see how often the person came and which services they chose.'], assets: ['clients', 'clientCard'], link: 'More about the client base' },
      { id: 'team', route: 'team', title: 'Services & team', lead: 'Service menu, assignments to specialists and working hours.', steps: ['We add a service: category, description, price and duration.', 'We assign the service to the specialists who do it.', 'We set working hours — when the specialist can be booked.'], assets: ['services', 'employees'], link: 'More about services & team' },
      { id: 'reports', route: 'reports', title: 'Results', lead: 'Service and specialist figures for the chosen period.', steps: ['We choose a period — the report is based on completed visits.', 'We see which services were done most often.', 'We review each specialist’s figures.'], assets: ['reports', 'reportsDetail'], link: 'More about reports' },
      { id: 'booking', route: 'booking', title: 'Online booking', lead: 'The client’s path from the link to a booking in the calendar.', steps: ['The client opens your business page via a link or QR code.', 'They choose a service, specialist and free time.', 'They confirm — and the visit appears in the calendar.'], assets: ['bookingServices', 'bookingTime'], link: 'More about online booking' },
    ],
    stepLabel: 'What happens',
    cta: { eyebrow: 'Next', h2: 'Show me Hirnix for the way I work', lead: 'Tell us how you work — we’ll walk through the same flow on an example similar to your business.', submit: 'Show it for my business' },
  },

  conditions: {
    meta: {
      title: 'Onboarding terms and a personal offer',
      description: 'How to get started with Hirnix: first 2 weeks free, personal set-up for the way you work and an offer built around the needs of your practice or studio.',
    },
    hero: {
      breadcrumb: 'Terms',
      h1: 'Onboarding terms for your business',
      lead: 'We onboard every beauty pro and every studio individually: we set the system up for the way you work and prepare an offer built around your needs.',
      primary: 'Get an offer',
      note: 'A request doesn’t commit you to anything.',
    },
    trial: { label: 'Free period', value: '2 weeks', body: 'Work in Hirnix with your own bookings and clients before you decide.' },
    product: {
      eyebrow: 'Product',
      h2: 'What’s included in Hirnix',
      lead: 'Modules that work together and are available in your account.',
      items: [
        { route: 'scheduling', title: 'Bookings & schedule', body: 'Day calendar by specialist, visit details and statuses.' },
        { route: 'clients', title: 'Client base', body: 'Search, contact details and visit history for every client.' },
        { route: 'team', title: 'Services & team', body: 'Service menu, assignments to specialists, working hours.' },
        { route: 'reports', title: 'Reports & results', body: 'Service and specialist figures for the chosen period.' },
        { route: 'booking', title: 'Online booking', body: 'A business page where clients choose service, specialist and time.' },
      ],
    },
    launch: {
      eyebrow: 'Personal onboarding',
      h2: 'We get you set up together',
      items: [
        { title: 'Set-up for your format', body: 'We help add your services, specialists and hours in the agreed scope.' },
        { title: 'Testing the first workflow', body: 'We walk through a real workflow from booking to completed visit.' },
        { title: 'Support when you need it', body: 'We answer via Telegram, WhatsApp, Viber and email during launch and day-to-day work.' },
      ],
    },
    offer: {
      eyebrow: 'Offer',
      h2: 'An offer built around your needs',
      lead: 'There’s no one-size-fits-all package. The offer reflects how you actually work.',
      items: [
        { title: 'How you work', body: 'On your own or with a team of specialists.' },
        { title: 'What you need', body: 'Which modules matter most to you first.' },
        { title: 'Launch scope', body: 'How many services and schedules to set up, and whether to move an existing client list.' },
      ],
    },
    process: {
      eyebrow: 'Next step',
      h2: 'How to get an offer',
      steps: [
        { title: 'You send a request', body: 'Your name and a phone or email. Add how you work if you’d like us to prepare in advance.' },
        { title: 'We clarify the details', body: 'We get in touch and ask a few questions about your work.' },
        { title: 'We send the offer', body: 'We explain what onboarding includes and agree the terms. The decision is yours.' },
      ],
    },
    form: { eyebrow: 'Request', h2: 'Get an offer', lead: 'Your name and a phone number or email are enough.', submit: 'Get an offer' },
    faq: {
      eyebrow: 'Questions',
      h2: 'Questions about the terms',
      items: [
        { q: 'Is there a free period?', a: 'Yes, the first 2 weeks are free. During that time you can work in Hirnix with your own bookings and clients.' },
        { q: 'Why isn’t there one package for everyone?', a: 'Beauty pros and studios work differently: different team sizes, services and set-up needs. So we prepare an offer for a specific business instead of forcing it into a template.' },
        { q: 'What do you need to prepare an offer?', a: 'Your name and a phone or email. If you also tell us how you work — alone or with a team — it’s easier to prepare the offer.' },
        { q: 'Does a request commit me to anything?', a: 'No. A request only means we’ll prepare an offer and answer your questions.' },
        { q: 'Who will I have an agreement with?', a: 'Hirnix is built by a Ukrainian team based in Europe. We are currently completing the registration of our company in the Czech Republic. Until then, onboarding terms are agreed in writing; afterwards, you sign a contract with the company.' },
        { q: 'Do you work with businesses with more than a few specialists?', a: 'Describe your format in the request — we’ll assess it separately.' },
      ],
    },
  },

  contact: {
    meta: {
      title: 'Contact and onboarding',
      description: 'Get in touch with Hirnix via Telegram, WhatsApp, Viber, phone or email. We’ll tell you about the platform, show it for the way you work and help you get started.',
    },
    hero: { breadcrumb: 'Contact', h1: 'Get in touch the way that suits you', lead: 'Message us, call or send a request — we’ll tell you about Hirnix and agree on the next step.' },
    channels: { eyebrow: 'Channels', h2: 'Direct', phoneLabel: 'Phone', messengersLabel: 'Messengers', messengersNote: 'Telegram, WhatsApp and Viber — all on the same number.', emailLabel: 'Email' },
    next: {
      eyebrow: 'What’s next',
      h2: 'What happens after you get in touch',
      steps: [
        { title: 'We contact you', body: 'Via the phone or email you gave — to learn how you work and what matters to you.' },
        { title: 'We show you Hirnix', body: 'We walk through a workflow on an example similar to your business and answer your questions.' },
        { title: 'We agree on onboarding', body: 'We prepare an offer for your needs and set the system up with you. The first 2 weeks are free.' },
      ],
    },
    login: { h2: 'Already using Hirnix?', body: 'Log in to your account to work with bookings, clients and settings.', cta: 'Log in to your account' },
    form: { eyebrow: 'Get in touch', h2: 'Send a request', lead: 'Your name and a phone or email are enough. Add a few words about your business if you like.', submit: 'Send request' },
  },
};
