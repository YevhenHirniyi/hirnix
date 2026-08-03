import type { SiteT } from './types';

const en: SiteT = {
  header: {
    nav: [
      { label: 'Services', href: '#services' },
      { label: 'Who We Help', href: '#for-whom' },
      { label: 'Process', href: '#process' },
      { label: 'Work', href: '#examples' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Free Consultation',
  },

  hero: {
    meta: {
      location: 'Remote · Worldwide · 2026',
      audience: '↘ For local service businesses',
      services: 'Website · Google Business · Local SEO',
    },
    h1: {
      pre: 'A website, ',
      italic: 'Google presence',
      mid: ' and',
      highlight: 'online visibility',
      after: ' for your',
      accent: 'local business.',
    },
    lead: 'hirnix helps local service businesses look professional online, get found by nearby customers, and generate more inquiries — through a clean website, Google Business Profile, and SEO.',
    cta1: 'Talk About My Business',
    cta2: 'See Our Work',
    fineprint: ['First consultation is free', 'No tech jargon', 'Clear timelines, no surprises'],
    mockup: {
      notifTitle: 'New booking',
      notifMsg: 'Sarah — manicure Friday at 4 PM',
      notifTime: 'just now',
      siteNav: ['Services', 'Gallery', 'Contact'],
      siteHeadline: 'Beauty & care in the heart of the city',
      siteLead: 'Nails, brows, makeup · appointments available this week.',
      siteCta1: 'Book now',
      siteCta2: 'Pricing',
      gbpName: 'Studio Bella · Downtown',
      gbpRating: '4.9 · 124 reviews',
      gbpContact: 'Contact',
      gbpRoute: 'Directions',
      gbpSite: 'Website',
    },
  },

  marqueeTop: ['Websites', '*ital*Google Business Profile', 'Local SEO', '*ital*Fast Launch', 'Analytics', '*ital*Ongoing Support'],
  marqueeDark: ['Live in *ital*10 days', 'Built for *ital*your niche', 'No *ital*"#1 on Google" promises', 'Tailored to *ital*your market'],

  forWhom: {
    eyebrow: 'Who We Help',
    h2: { pre: 'Local businesses', mid: 'that want to be', accent: 'found.' },
    lead: 'We work with service providers, solo operators, and small teams who need a clear online presence — without agencies that disappear after the deposit.',
    niches: ['Beauty salons', 'Nail studios', 'Estheticians', 'Massage therapists', 'Restaurants & cafes', 'Construction crews', 'Home renovation', 'Cleaning services', 'Photographers', 'Legal services', 'Delivery & logistics', 'Tutors & coaches', 'Auto repair shops', 'Local services'],
  },

  pain: {
    eyebrow: 'Sound familiar?',
    h2: { pre: 'Your customers should find you', accent: 'easily.' },
    lead: 'Many local businesses rely on word-of-mouth, Instagram, or Facebook. But that is rarely enough when a new customer wants to quickly find your services, address, portfolio, or a way to book.',
    items: [
      { title: 'Your business only lives on Instagram', body: 'Customers keep asking the same questions: what do you offer, how much does it cost, where are you, and how do I book?' },
      { title: "You're hard to find on Google", body: 'Someone nearby is searching for exactly what you offer — and they are finding your competitors, not you.' },
      { title: 'No professional website', body: 'You do great work, but there is nowhere to send new clients that looks credible, clear, and easy to navigate.' },
      { title: 'No time to figure it all out', body: 'Domain, website, SEO, Google Business, analytics — it all takes time you would rather spend running your business.' },
    ],
    cta: "Yes, that's my situation",
  },

  manifesto: {
    eyebrow: 'How We Work',
    h2: { pre: 'Calm.', mid: 'Focused.', accent: 'No reselling.' },
    lead: 'Four principles behind every hirnix project. No aggressive upselling, no one-size-fits-all packages, no disappearing after you pay.',
    intro: 'We do not just build websites — we build a clear, honest online presence for local businesses. No aggressive marketing. No cookie-cutter packages. No ghosting after the first payment.',
    rows: [
      { num: '01 / Approach', title: 'Plain talk, no tech overload.', body: 'We explain what we are doing, why, and how to use the site after launch — in plain language, without jargon or unnecessary complexity.' },
      { num: '02 / Focus', title: 'Built for your market.', body: 'We take the time to understand your niche, your customers, and your local competition before writing a single line of copy or designing a page.' },
      { num: '03 / Honest', title: 'No "#1 on Google" promises.', body: 'We do not guarantee a flood of leads in 30 days. We build the real foundation: a website, Google listing, SEO, and a clear path to new inquiries.' },
      { num: '04 / Team', title: 'Small, human, responsive.', body: 'You talk directly to the people doing the work — not a project manager relaying messages. We reply within a few hours on business days.' },
    ],
  },

  services: {
    eyebrow: 'Services',
    h2: { pre: 'We build the right solution for your business,', mid: 'not', accent: 'a template.' },
    lead: 'Every business is different: some need a simple one-page site, others want a complete online presence with Google, SEO, and analytics. We start by understanding your situation, then propose the right fit.',
    services: [
      {
        num: '01 / Starter', title: 'Website or landing page',
        desc: 'For service providers who need a professional online home with services, photos, contact, and a booking link.',
        items: ['Structure tailored to your business', 'Modern, clean design', 'Services + portfolio section', 'Contact form', 'Telegram / WhatsApp / email', 'Mobile-optimized', 'Domain setup', 'English copy included'],
        cta: 'Discuss your website',
      },
      {
        num: '02 / Most Popular', title: 'Full online presence',
        desc: 'For businesses that want more than a website — a complete foundation for getting found and chosen online.',
        items: ['Website or landing page', 'Google Business Profile', 'Basic local SEO', 'Google Analytics + Search Console', 'Technical SEO setup', 'Conversion-focused structure', 'Copywriting help', 'Post-launch guide'],
        cta: 'Get a quote',
      },
      {
        num: '03 / Growth', title: 'Ongoing support & growth',
        desc: 'For businesses with an existing site who want regular updates, fresh content, and steady online growth.',
        items: ['Website updates', 'New service pages', 'Photo & copy refresh', 'Basic SEO monitoring', 'Google Business upkeep', 'Monthly report', 'Growth consultations', 'Ads preparation'],
        cta: 'Learn more',
      },
    ],
  },

  stats: {
    eyebrow: 'What You Get',
    h2: { pre: 'A clear', mid: 'online presence', accent: "you're proud to share." },
    lead: 'After launch you will have a site you can send to clients, a Google listing customers can find, and a solid foundation for local growth.',
    stats: [
      { label: '01 / Estimated launch', value: '10', accent: 'days', desc: 'First version of your site, ready to share with customers.' },
      { label: '02 / Languages', value: '2+', accent: 'supported', desc: 'We build multilingual sites for businesses serving diverse clients.' },
      { label: '03 / Core channels', value: '4', accent: 'together', desc: 'Website, Google Business, SEO, analytics — working as one system.' },
      { label: '04 / Response time', value: '24', accent: 'hours', desc: 'Business days. No chatbots, no automated replies.' },
    ],
  },

  process: {
    eyebrow: 'Process',
    h2: { pre: 'Clear, predictable,', mid: 'without the', accent: 'chaos.' },
    lead: 'Six straightforward steps from first conversation to launch. We always tell you where things stand, what happens next, and when to expect it.',
    steps: [
      { num: '01', title: 'Free consultation', body: 'We learn about your business, services, customers, current situation, and goals.', when: '20–30 min · Zoom or Telegram' },
      { num: '02', title: 'Proposal & quote', body: 'We put together a custom plan: scope, deliverables, timeline, and pricing.', when: 'After consultation' },
      { num: '03', title: 'Materials & kickoff', body: 'You send photos, copy, and service details. No content yet? We help you structure it.', when: 'Day 1–2' },
      { num: '04', title: 'Design & first version', body: 'We build the first version of your site. You review, give feedback, we revise.', when: 'Day 3–6' },
      { num: '05', title: 'SEO, Google & tech', body: 'Basic SEO, Google Business Profile, analytics, contact forms, mobile optimization.', when: 'Day 7–9' },
      { num: '06', title: 'Launch & handover', body: 'We test everything, connect your domain, hand over full access, and leave you a how-to guide.', when: 'Day 10' },
    ],
  },

  examples: {
    eyebrow: 'Real Scenarios',
    h2: 'The situations we most often step into.',
    lead: 'Instead of made-up testimonials — real scenarios local business owners bring to us. If yours sounds familiar, we have a lot to talk about.',
    problemLabel: 'Problem',
    solutionLabel: 'What we did',
    cases: [
      { tag: 'Beauty studio', who: 'Nail salon without a website', problem: 'Has Instagram, but no dedicated page with services, pricing, location, and booking. New clients have nowhere to land.', solution: 'Landing page with portfolio photos, booking buttons, and a Google Business listing with reviews.' },
      { tag: 'Contractor', who: 'Construction crew without a portfolio', problem: 'Great work and plenty of photos — but everything is scattered across chats with no way to present it to new clients.', solution: 'Built a portfolio, wrote clear service descriptions, added a lead form and Google Business Profile.' },
      { tag: 'Local service', who: 'Business invisible on Google', problem: 'Runs entirely on referrals, but new customers searching nearby cannot find them at all.', solution: 'Website, local SEO, Google Business listing, analytics, and clear contact information.' },
    ],
  },

  calc: {
    eyebrow: 'Get a Quote',
    h2: { pre: 'We scope the project', italic: 'to your goals,', post: 'timeline, and budget.' },
    factors: ['Number of pages', 'Languages needed', 'Amount of copy', 'Existing photos', 'Google Business Profile', 'SEO setup', 'Integrations & forms', 'Launch urgency'],
    formHeading: 'Tell us about your business.',
    formEyebrow: 'Request a quote',
    nameLabel: 'Full name',
    namePlaceholder: 'Jane Smith',
    bizLabel: 'Business type',
    bizPlaceholder: 'Select your niche…',
    bizOptions: ['Beauty salon / nail studio', 'Restaurant / cafe', 'Construction / renovation', 'Cleaning service', 'Photography / video', 'Legal services', 'Delivery / logistics', 'Tutoring / coaching', 'Auto repair shop', 'Other local service'],
    emailLabel: 'Email',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+1 (555) ...',
    submitLabel: 'Get a quote',
    sentTitlePrefix: 'Thanks, ',
    sentTitleFallback: 'there',
    sentMsg: 'We got your request. We will follow up by email or Telegram within a few hours.',
    errorMsg: 'Something went wrong. Please write to us on Telegram.',
    errorPhoneInvalid: 'Please enter a valid phone number',
    groupFormat: 'Format',
    groupLangs: 'Languages',
    groupScope: 'Scope',
    formatOptions: [{ v: 'landing', l: 'Landing page' }, { v: 'multi-page', l: '3–5 pages' }, { v: 'full-site', l: 'Full site' }],
    langOptions: [{ v: 'en', l: 'EN' }, { v: 'en-2nd', l: 'EN + 2nd lang' }, { v: 'multi', l: 'Multi-language' }],
    scopeOptions: [{ v: 'site', l: 'Site only' }, { v: 'full', l: '+ Google + SEO' }, { v: 'full-ads', l: '+ Ads setup' }],
    footnote: 'By submitting, you agree to us processing your details. No spam — just a straight reply.',
    timeLabel: '~ 2 min',
  },

  about: {
    eyebrow: 'About hirnix',
    h2: { pre: "Who's", italic: 'behind', post: 'this.' },
    para1: 'hirnix is a boutique web design studio built for local service businesses that need a clear, professional, and conversion-focused online presence — without the tech overwhelm or vague agency promises.',
    para2: 'We understand how hard it is to stand out locally: competition, Google rankings, trust signals, and a never-ending task list. So we help you pull it all together — website, copy, Google Business Profile, SEO, and a clear way for customers to reach you.',
    checks: ['Remote-friendly, worldwide', 'Plain-language communication', 'No jargon, no unnecessary complexity', 'Full access handover after launch', 'Individual approach, no templates'],
    linkLabel: 'Get in touch',
  },

  faq: {
    eyebrow: 'Questions',
    h2: { pre: 'Frequently asked questions', mid: '' },
    lead: "Everything clients ask about timelines, process, content, and support. Didn't find your answer? Reach out — we'll add it.",
    items: [
      { q: 'Can I edit the site myself after launch?', a: 'Yes. We can build your site on a platform with a simple editor and show you how to update text, photos, or basic information — no developer required.' },
      { q: "What if I don't have copy or photos yet?", a: "That's fine. We help you structure the content, guide you on what photos you'll need, and can assist with writing in English or another language." },
      { q: 'Is a 10-day launch really possible?', a: "Yes, if materials are provided on time and the project doesn't require complex custom development. For larger scopes, we agree on a realistic timeline upfront." },
      { q: 'Do you guarantee customers or leads?', a: "No — and that's honest. The number of inquiries depends on your niche, competition, season, and marketing. What we build is a real foundation: website, Google listing, SEO, analytics, and a clear path for customers to reach you." },
      { q: 'How does payment work?', a: 'Payment terms are agreed after the consultation and scoping session. Typically we start after a deposit, with the final payment before launch.' },
      { q: 'Can I order just a Google Business Profile or just a website?', a: 'Yes. We can help with just the website, just the Google listing, SEO, copywriting, or support for an existing site.' },
      { q: 'Do you work with businesses outside of Europe?', a: 'Yes. We work remotely with local businesses anywhere — US, UK, Canada, Australia, and beyond. Everything is handled online.' },
    ],
  },

  finalCta: {
    eyebrow: 'Free Consultation',
    h2: { pre: 'Ready to make your business', italic: 'easy to find ', accent: 'online?' },
    lead: "Tell us about your business — we'll recommend the right format and approach for your market. No commitment required.",
    cta1: 'Message us on Telegram',
    cta2: 'Send an email',
    note1: 'We reply within a few business hours',
    note2: 'We work with businesses worldwide',
    labels: { email: 'Email', telegram: 'Telegram', location: 'Location', schedule: 'Hours' },
    values: { location: 'Remote · Worldwide', schedule: 'Mon–Fri · 09:00–18:00 CET' },
  },

  footer: {
    brand: 'Websites, Google Business Profile, and local SEO for service businesses worldwide.',
    servicesHeading: 'What We Do',
    servicesList: ['Website or landing page', 'Full online presence', 'Ongoing support & growth', 'Google Business Profile', 'Local SEO'],
    studioHeading: 'Studio',
    studioLinks: [
      { label: 'Who We Help', href: '#for-whom' },
      { label: 'How We Work', href: '#process' },
      { label: 'Our Work', href: '#examples' },
      { label: 'About hirnix', href: '#approach' },
      { label: 'FAQ', href: '#faq' },
    ],
    contactsHeading: 'Contact',
    telegramLabel: 'Telegram · @hirnix_studio',
    whatsappLabel: 'WhatsApp · +420 607 477 611',
    locationLabel: 'Remote · Worldwide',
    copyright: '© 2026 hirnix. All rights reserved.',
  },
};

export default en;
