export interface NavItem { label: string; href: string }

export interface HeaderT {
  nav: NavItem[];
  cta: string;
}

export interface HeroMockupT {
  notifTitle: string;
  notifMsg: string;
  notifTime: string;
  siteNav: [string, string, string];
  siteHeadline: string;
  siteLead: string;
  siteCta1: string;
  siteCta2: string;
  gbpName: string;
  gbpRating: string;
  gbpContact: string;
  gbpRoute: string;
  gbpSite: string;
}

export interface HeroT {
  h1: { pre: string; italic: string; mid: string; highlight: string; after: string; accent: string };
  meta: { location: string; audience: string; services: string };
  lead: string;
  cta1: string;
  cta2: string;
  fineprint: [string, string, string];
  mockup: HeroMockupT;
}

export interface ForWhomT {
  eyebrow: string;
  h2: { pre: string; mid: string; accent: string };
  lead: string;
  niches: string[];
}

export interface PainT {
  eyebrow: string;
  h2: { pre: string; accent: string };
  lead: string;
  items: Array<{ title: string; body: string }>;
  cta: string;
}

export interface ManifestoT {
  eyebrow: string;
  h2: { pre: string; mid: string; accent: string };
  lead: string;
  intro: string;
  rows: Array<{ num: string; title: string; body: string }>;
}

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  items: string[];
  cta: string;
}

export interface ServicesT {
  eyebrow: string;
  h2: { pre: string; mid: string; accent: string };
  lead: string;
  services: ServiceItem[];
}

export interface StatItem { label: string; value: string; accent: string; desc: string }

export interface StatsT {
  eyebrow: string;
  h2: { pre: string; mid: string; accent: string };
  lead: string;
  stats: StatItem[];
}

export interface StepItem { num: string; title: string; body: string; when: string }

export interface ProcessT {
  eyebrow: string;
  h2: { pre: string; mid: string; accent: string };
  lead: string;
  steps: StepItem[];
}

export interface CaseItem { tag: string; who: string; problem: string; solution: string }

export interface ExamplesT {
  eyebrow: string;
  h2: string;
  lead: string;
  problemLabel: string;
  solutionLabel: string;
  cases: CaseItem[];
}

export interface CalcT {
  eyebrow: string;
  h2: { pre: string; italic: string; post: string };
  factors: string[];
  formHeading: string;
  formEyebrow: string;
  nameLabel: string;
  namePlaceholder: string;
  bizLabel: string;
  bizPlaceholder: string;
  bizOptions: string[];
  emailLabel: string;
  phoneLabel: string;
  phonePlaceholder: string;
  submitLabel: string;
  sentTitlePrefix: string;
  sentTitleFallback: string;
  sentMsg: string;
  errorMsg: string;
  errorPhoneInvalid: string;
  groupFormat: string;
  groupLangs: string;
  groupScope: string;
  formatOptions: Array<{ v: string; l: string }>;
  langOptions: Array<{ v: string; l: string }>;
  scopeOptions: Array<{ v: string; l: string }>;
  footnote: string;
  timeLabel: string;
}

export interface AboutT {
  eyebrow: string;
  h2: { pre: string; italic: string; post: string };
  para1: string;
  para2: string;
  checks: string[];
  linkLabel: string;
}

export interface FAQItem { q: string; a: string }

export interface FAQT {
  eyebrow: string;
  h2: { pre: string; mid: string };
  lead: string;
  items: FAQItem[];
}

export interface FinalCTAT {
  eyebrow: string;
  h2: { pre: string; italic: string; accent: string };
  lead: string;
  cta1: string;
  cta2: string;
  note1: string;
  note2: string;
  labels: { email: string; telegram: string; location?: string; schedule: string };
  values: { location?: string; schedule: string };
}

export interface FooterT {
  brand: string;
  servicesHeading: string;
  servicesList: string[];
  studioHeading: string;
  studioLinks: NavItem[];
  contactsHeading: string;
  telegramLabel: string;
  whatsappLabel: string;
  locationLabel?: string;
  copyright: string;
}

// ============ SaaS landing (hirnix booking CRM) ============

export interface SaasHeroMockupT {
  notifTitle: string;
  notifMsg: string;
  notifTime: string;
  urlLabel: string;
  statsTitle: string;
  stat1Label: string; stat1Value: string;
  stat2Label: string; stat2Value: string;
  stat3Label: string; stat3Value: string;
}

export interface SaasHeroT {
  h1: { pre: string; italic: string; mid: string; highlight: string; after: string; accent: string };
  meta: { location: string; audience: string; services: string };
  lead: string;
  cta1: string;
  fineprint: [string, string, string];
  mockup: SaasHeroMockupT;
}

export interface SolutionCardT { tag: string; title: string; desc: string; items: string[] }

export interface SolutionT {
  eyebrow: string;
  h2: { pre: string; accent: string };
  lead: string;
  cta: string;
  client: SolutionCardT;
  business: SolutionCardT;
}

export interface DemoSideT { tag: string; title: string; caption: string; alt: string }

export interface DemoT {
  eyebrow: string;
  h2: { pre: string; accent: string };
  lead: string;
  client: DemoSideT;
  business: DemoSideT;
}

export interface BeforeAfterRow { before: string; after: string }

export interface BeforeAfterT {
  eyebrow: string;
  h2: { pre: string; mid: string; accent: string };
  lead: string;
  beforeLabel: string;
  afterLabel: string;
  rows: BeforeAfterRow[];
}

export interface DemoFormT {
  eyebrow: string;
  heading: string;
  nameLabel: string;
  namePlaceholder: string;
  bizLabel: string;
  bizPlaceholder: string;
  bizOptions: string[];
  emailLabel: string;
  phoneLabel: string;
  phonePlaceholder: string;
  submitLabel: string;
  sentTitlePrefix: string;
  sentTitleFallback: string;
  sentMsg: string;
  errorMsg: string;
  errorPhoneInvalid: string;
  footnote: string;
}

export interface SaasSiteT {
  header: HeaderT;
  marqueeTop: string[];
  hero: SaasHeroT;
  pain: PainT;
  solution: SolutionT;
  process: ProcessT;
  demo: DemoT;
  services: ServicesT;
  stats: StatsT;
  examples: ExamplesT;
  beforeAfter: BeforeAfterT;
  startProcess: ProcessT;
  demoForm: DemoFormT;
  finalCta: FinalCTAT;
  footer: FooterT;
}

export interface SiteT {
  header: HeaderT;
  hero: HeroT;
  marqueeTop: string[];
  marqueeDark: string[];
  forWhom: ForWhomT;
  pain: PainT;
  manifesto: ManifestoT;
  services: ServicesT;
  stats: StatsT;
  process: ProcessT;
  examples: ExamplesT;
  calc: CalcT;
  about: AboutT;
  faq: FAQT;
  finalCta: FinalCTAT;
  footer: FooterT;
}
