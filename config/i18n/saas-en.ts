import type { SaasSiteT } from './types';

const saasEn: SaasSiteT = {
  header: {
    nav: [
      { label: 'Features', href: '#services' },
      { label: 'How It Works', href: '#process' },
      { label: 'Demo', href: '#demo' },
      { label: 'Who It’s For', href: '#examples' },
      { label: 'Contact', href: '#cta' },
    ],
    cta: 'Try the Demo',
  },

  marqueeTop: ['Hair Salons', '*ital*Beauty Studios', '*ital*24/7 Online Booking'],

  hero: {
    meta: {
      location: 'hirnix · CRM · 2026',
      audience: '↘ For service businesses',
      services: 'Hair Salons · Beauty Studios',
    },
    h1: {
      pre: 'Online booking and ',
      italic: 'admin',
      mid: ' for',
      highlight: 'service businesses',
      after: '',
      accent: 'No calls, no mix-ups.',
    },
    lead: 'hirnix is a booking CRM for hair salons and beauty studios. Clients book themselves in 30 seconds, while you see every appointment, client, and dollar of revenue on one screen.',
    cta1: 'Try the Demo',
    fineprint: ['24/7 online booking', 'One screen for the whole team', 'No install, no training'],
    mockup: {
      notifTitle: 'New booking',
      notifMsg: 'Olga — haircut today at 2:00 PM',
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
      title: 'Picking a date and free time slot',
      caption: 'A clear grid of open slots and a step-by-step flow — no calls, no waiting.',
      alt: 'hirnix online booking date and time selection screen',
    },
    business: {
      tag: 'Admin dashboard',
      title: 'Salon dashboard',
      caption: 'Bookings, revenue, and recent clients — instantly see what’s happening today.',
      alt: 'hirnix admin dashboard showing today’s bookings',
    },
  },

  services: {
    eyebrow: 'Features',
    h2: { pre: 'Everything for', mid: '', accent: 'day-to-day work.' },
    lead: 'Dashboard, bookings, clients, staff, services, and reports — the whole salon in one tool.',
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
    lead: 'One tool for any salon where a client books a time slot with a specialist.',
    problemLabel: 'The business',
    solutionLabel: 'What hirnix gives them',
    cases: [
      {
        tag: 'Hair salon', who: 'Hair Salons',
        problem: 'Cuts, styling, and coloring, each with a different duration.',
        solution: 'Each service’s duration is factored in automatically — no schedule overlaps.',
      },
      {
        tag: 'Beauty studio', who: 'Beauty Studios',
        problem: 'Manicures, skincare, and treatments — multiple staff and services at once.',
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
      { num: '01', title: 'Sign up', body: 'Create your salon account in a couple of minutes.', when: 'Step 1 of 4' },
      { num: '02', title: 'Services & staff', body: 'Add your service list, prices, and team.', when: 'Step 2 of 4' },
      { num: '03', title: 'Booking link', body: 'Share it on Instagram, Google, or your website.', when: 'Step 3 of 4' },
      { num: '04', title: 'Take clients', body: 'Bookings appear automatically in the dashboard.', when: 'Step 4 of 4' },
    ],
  },

  demoForm: {
    eyebrow: 'Request a Demo',
    heading: 'Tell us about your salon.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    bizLabel: 'Business type',
    bizPlaceholder: 'Select your type…',
    bizOptions: ['Hair salon', 'Beauty studio', 'Other'],
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    phonePlaceholder: '+1 …',
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
    h2: { pre: 'Speed up your salon', italic: 'together ', accent: 'with hirnix.' },
    lead: 'Less time on booking, more time with clients. Tell us about your business — we’ll show you how hirnix would work for you.',
    cta1: 'Message us on Telegram',
    cta2: 'Send an email',
    note1: 'We reply within a few business hours',
    note2: 'We work with hair salons and beauty studios',
    labels: { email: 'Email', telegram: 'Telegram', schedule: 'Hours' },
    values: { schedule: 'Mon–Fri · 09:00–19:00 CET' },
  },

  footer: {
    brand: '24/7 online booking and an admin dashboard for hair salons and beauty studios.',
    servicesHeading: 'Features',
    servicesList: ['Dashboard', 'Bookings', 'Clients', 'Staff', 'Services', 'Reports'],
    studioHeading: 'hirnix',
    studioLinks: [
      { label: 'How It Works', href: '#process' },
      { label: 'Demo', href: '#demo' },
      { label: "Who It's For", href: '#examples' },
      { label: 'Why hirnix', href: '#why' },
      { label: 'Getting Started', href: '#start' },
    ],
    contactsHeading: 'Contact',
    telegramLabel: 'Telegram · @hirnix_studio',
    whatsappLabel: 'WhatsApp · +380 99 554 25 45',
    copyright: '© 2026 hirnix. All rights reserved.',
  },
};

export default saasEn;
