import type { SaasSiteT } from './types';

const saasEn: SaasSiteT = {
  header: {
    nav: [
      { label: 'Features', href: '#services' },
      { label: 'How It Works', href: '#process' },
      { label: 'Demo', href: '#demo' },
      { label: 'Contact', href: '#cta' },
    ],
    cta: 'Try the Demo',
  },

  marqueeTop: ['Service Businesses', '*ital*Local Businesses', '*ital*24/7 Online Booking'],

  hero: {
    meta: {
      location: 'hirnix · CRM · 2026',
      audience: '↘ For service businesses',
      services: 'Client Booking · Business Management',
    },
    h1: {
      pre: 'Online booking and ',
      italic: 'admin',
      mid: ' for',
      highlight: 'service businesses',
      after: '',
      accent: 'No calls, no mix-ups.',
    },
    lead: 'hirnix is a booking CRM for service businesses. Clients book themselves in 30 seconds, while you see every appointment, client, and dollar of revenue on one screen.',
    cta1: 'Try the Demo',
    fineprint: ['24/7 online booking', 'One screen for the whole team', 'No install, no training'],
    mockup: {
      notifTitle: 'New booking',
      notifMsg: 'Sofiia — appointment today at 15:30',
      notifTime: 'just now',
      urlLabel: 'app.hirnix.studio',
      statsTitle: 'Today',
      stat1Label: 'Bookings', stat1Value: '12',
      stat2Label: 'Revenue', stat2Value: '$360',
      stat3Label: 'Clients', stat3Value: '8',
    },
  },

  pain: {
    eyebrow: 'Sound familiar?',
    h2: { pre: 'Manual booking is stealing', accent: 'your time.' },
    lead: 'Phone calls, notebooks, and messenger chats can’t keep up with the flow of clients — both the business and the guest lose minutes on every booking.',
    items: [
      { title: 'Endless phone calls', body: 'Bookings are taken by phone during business hours — and some calls are missed.' },
      { title: 'A paper notebook', body: 'The schedule lives in a notebook or a chat thread: easy to lose or mix up.' },
      { title: 'Double bookings', body: 'Two clients for the same slot, and confusion over staff and time.' },
      { title: 'Forgotten visits', body: 'Clients forget their appointment — empty slots and lost revenue.' },
    ],
    cta: "Yes, that's my situation",
  },

  solution: {
    eyebrow: 'The Solution',
    h2: { pre: 'hirnix takes booking', accent: 'off your plate.' },
    lead: 'One system, two sides: an online booking page for the client and an admin dashboard for the business.',
    cta: 'Try the Demo',
    client: {
      tag: 'FOR THE CLIENT',
      title: '24/7 online booking',
      desc: 'The guest picks the service, the specialist, and a free time slot — in 30 seconds, no calls.',
      items: ['Book any time of day', 'Choose the specialist and service', 'Instant confirmation after booking'],
    },
    business: {
      tag: 'FOR THE BUSINESS',
      title: 'Admin dashboard',
      desc: 'Bookings, clients, staff, services, and reports — all on one screen.',
      items: ['Booking calendar by staff member', 'Client base with visit history', 'Revenue and service reports'],
    },
  },

  process: {
    eyebrow: 'How It Works',
    h2: { pre: '5 steps', mid: 'to a', accent: 'booking.' },
    lead: 'The client-facing booking flow walks the guest through it step by step. Booking takes about 30 seconds — no calls, no waiting on hold.',
    steps: [
      { num: '01', title: 'Service', body: 'Picks what to get done.', when: 'Step 1 of 5' },
      { num: '02', title: 'Specialist', body: 'Picks a staff member.', when: 'Step 2 of 5' },
      { num: '03', title: 'Time', body: 'A free slot on the grid.', when: 'Step 3 of 5' },
      { num: '04', title: 'Contact info', body: 'Name and phone number.', when: 'Step 4 of 5' },
      { num: '05', title: 'Confirmation', body: 'Booking locked in.', when: '~30 seconds total' },
    ],
  },

  demo: {
    eyebrow: 'Demo',
    h2: { pre: "Here's what it", accent: 'looks like.' },
    lead: 'Clients book in a few clicks. The business sees everything on one screen.',
    client: {
      tag: 'Client booking',
      title: 'The whole booking on one screen',
      caption: 'Specialist, service, date and time — the client sees it all at once and confirms in one tap.',
      alt: 'hirnix online booking home screen with specialist, service, and time selected',
    },
    business: {
      tag: 'Admin dashboard',
      title: 'Business dashboard',
      caption: 'Bookings, revenue, and recent clients — instantly see what’s happening today.',
      alt: 'hirnix admin dashboard showing today’s bookings',
    },
  },

  services: {
    eyebrow: 'Features',
    h2: { pre: 'Everything for', mid: '', accent: 'day-to-day work.' },
    lead: 'Dashboard, bookings, clients, staff, services, and reports — the whole business in one tool.',
    services: [
      {
        num: '01', title: 'Dashboard',
        desc: 'Bookings, revenue, and today’s clients at a glance.',
        items: ['Real-time metrics for the day', 'Recent clients list', 'Quick jump to bookings'],
        cta: 'Try the demo',
      },
      {
        num: '02', title: 'Bookings',
        desc: 'A real-time calendar by staff member and time slot.',
        items: ['Bookings per staff member', 'Protection against double booking', 'Statuses: new, confirmed, done'],
        cta: 'Try the demo',
      },
      {
        num: '03', title: 'Clients',
        desc: 'Profiles, contacts, and visit history for every guest.',
        items: ['Full visit history', 'Contacts and notes', 'Visit count and last visit date'],
        cta: 'Try the demo',
      },
      {
        num: '04', title: 'Staff',
        desc: 'Profiles, schedule, and rating for every specialist.',
        items: ['Individual work schedule', 'Services linked to each staff member', 'Workload per specialist'],
        cta: 'Try the demo',
      },
      {
        num: '05', title: 'Services',
        desc: 'Prices and duration — the foundation for accurate booking.',
        items: ['Catalog of services and prices', 'Exact duration for scheduling', 'Grouped by category'],
        cta: 'Try the demo',
      },
      {
        num: '06', title: 'Reports',
        desc: 'Revenue, top services, and staff workload.',
        items: ['Revenue by period', 'Top services and staff', 'Workload by day'],
        cta: 'Try the demo',
      },
    ],
  },

  stats: {
    eyebrow: 'Value',
    h2: { pre: 'Faster', mid: 'admin,', accent: 'less busywork.' },
    lead: 'Less busywork for the business, less waiting for the client.',
    stats: [
      { label: '01 / Availability', value: '24/7', accent: 'online booking', desc: 'Clients book anytime, even when the salon is closed.' },
      { label: '02 / Daily overview', value: '1', accent: 'screen', desc: 'The dashboard replaces the notebook, chats, and spreadsheets.' },
      { label: '03 / Schedule', value: '0', accent: 'conflicts', desc: 'Slots are locked — no double bookings, no confusion.' },
      { label: '04 / Analytics', value: 'Live', accent: 'revenue & services', desc: 'Revenue and top services update automatically.' },
    ],
  },

  examples: {
    eyebrow: "Who It's For",
    h2: 'Built for the service industry.',
    lead: 'One tool for any business where a client books a time slot with a specialist.',
    problemLabel: 'The business',
    solutionLabel: 'What hirnix gives them',
    cases: [
      {
        tag: 'Auto repair shop', who: 'Auto Repair Shops',
        problem: 'Oil changes, tire service, and repairs, each with a different duration.',
        solution: 'Each service’s duration is factored in automatically — no schedule overlaps.',
      },
      {
        tag: 'Photo studio', who: 'Photo Studios',
        problem: 'Photo sessions, retouching, and shoots — multiple photographers and services at once.',
        solution: 'One shared calendar for every staff member and service, with full client history.',
      },
    ],
  },

  beforeAfter: {
    eyebrow: 'Why hirnix',
    h2: { pre: 'From a notebook', mid: '—', accent: 'to a system.' },
    lead: 'Before: phone calls, a notebook, and confusion. With hirnix: one calendar, confirmations, and reports.',
    beforeLabel: 'Before',
    afterLabel: 'With hirnix',
    rows: [
      { before: 'Bookings by phone during business hours', after: '24/7 online booking, no calls' },
      { before: 'Schedule in a notebook or chat', after: 'Every booking in one calendar' },
      { before: 'Double bookings and confusion', after: 'Slots are locked — no conflicts' },
      { before: 'Clients forget their visit', after: 'Confirmations cut no-shows' },
      { before: 'No analytics at all', after: 'Reports on revenue and services' },
    ],
  },

  startProcess: {
    eyebrow: 'Getting Started',
    h2: { pre: 'Live in', mid: '', accent: '4 steps.' },
    lead: 'From sign-up to your first online booking — no technical hassle.',
    steps: [
      { num: '01', title: 'Sign up', body: 'Create your business account in a couple of minutes.', when: 'Step 1 of 4' },
      { num: '02', title: 'Services & staff', body: 'Add your service list, prices, and team.', when: 'Step 2 of 4' },
      { num: '03', title: 'Booking link', body: 'Share it on Instagram, Google, or your website.', when: 'Step 3 of 4' },
      { num: '04', title: 'Take clients', body: 'Bookings appear automatically in the dashboard.', when: 'Step 4 of 4' },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    h2: { pre: 'Questions about', mid: 'online booking & the CRM' },
    lead: "How hirnix works, what it costs, and how to get started. Didn't find your answer? Message us on Telegram.",
    items: [
      { q: 'What is hirnix and who is it for?', a: 'hirnix is a booking CRM with 24/7 online booking. It is built for beauty salons and independent stylists, and works for any business where clients book time with a specialist — auto services, photo studios, and more.' },
      { q: 'How much does hirnix cost?', a: 'hirnix is currently in beta. Request demo access and we will walk you through the terms and set up your business.' },
      { q: 'How do clients book online?', a: 'You share your booking link on Instagram, Google, or your website. The client picks a service, a specialist, and a free time slot, enters their name and phone — and the booking is confirmed. It takes about 30 seconds, with no calls or DMs.' },
      { q: 'How long does it take to get started?', a: 'Creating your business account takes a couple of minutes. Then you add your services, prices, and team, share your booking link, and new bookings appear in your dashboard automatically. No install, no training.' },
      { q: 'Can two clients book the same time slot?', a: 'No. A booked slot disappears from the available times immediately, and each service’s duration is accounted for automatically — so there are no double bookings or schedule overlaps.' },
      { q: 'What do I see in the admin dashboard?', a: 'Today’s bookings and revenue, a calendar per specialist, client cards with visit history, staff schedules, your service catalog, and reports: revenue by period, top services, and specialist workload.' },
      { q: 'How do I get demo access?', a: 'Fill in the form below or message us on Telegram. We reply within a few hours, Mon–Fri 09:00–19:00 CET.' },
    ],
  },

  demoForm: {
    eyebrow: 'Request a Demo',
    heading: 'Tell us about your business.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    phoneLabel: 'Phone / Telegram',
    phonePlaceholder: '+1 …',
    emailLabel: 'Email',
    submitLabel: 'Try the Demo',
    sentTitlePrefix: 'Thanks, ',
    sentTitleFallback: 'there',
    sentMsg: 'We got your request. We will follow up by email or Telegram within a few hours.',
    errorMsg: 'Something went wrong. Please write to us on Telegram.',
    errorPhoneInvalid: 'Please enter a valid phone number',
    footnote: 'By submitting, you agree to us processing your details. No spam — just a straight reply.',
  },

  finalCta: {
    eyebrow: 'Try hirnix',
    h2: { pre: 'Speed up your business', italic: 'together ', accent: 'with hirnix.' },
    lead: 'Less time on booking, more time with clients. Tell us about your business — we’ll show you how hirnix would work for you.',
    cta1: 'Message us on Telegram',
    cta2: 'Send an email',
    note1: 'We reply within a few business hours',
    note2: 'We work with service businesses',
    labels: { email: 'Email', telegram: 'Telegram', schedule: 'Hours' },
    values: { schedule: 'Mon–Fri · 09:00–19:00 CET' },
  },

  footer: {
    brand: '24/7 online booking and an admin dashboard for service businesses.',
    servicesHeading: 'Features',
    servicesList: ['Dashboard', 'Bookings', 'Clients', 'Staff', 'Services', 'Reports'],
    studioHeading: 'hirnix',
    studioLinks: [
      { label: 'How It Works', href: '#process' },
      { label: 'Demo', href: '#demo' },
      { label: 'Why hirnix', href: '#why' },
      { label: 'Getting Started', href: '#start' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactsHeading: 'Contact',
    telegramLabel: 'Telegram · @hirnix_studio',
    whatsappLabel: 'WhatsApp · +380 99 554 25 45',
    copyright: '© 2026 hirnix. All rights reserved.',
  },
};

export default saasEn;
