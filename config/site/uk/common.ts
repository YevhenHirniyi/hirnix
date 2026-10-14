/**
 * Copy shared by every page: header, footer, contact form, asset captions.
 *
 * Review markers used across config/site/uk/*:
 *   // H0x  — public claim backed by the capability registry (H01–H13).
 *   // ПОГОДИТИ — wording that depends on an open owner decision (§17 of the
 *                 strategy) and must be confirmed before release.
 */

export const common = {
  header: {
    featuresLabel: 'Можливості',
    segmentsLabel: 'Для кого',
    login: 'Увійти',
    cta: 'Обговорити підключення',
    openMenu: 'Відкрити меню',
    closeMenu: 'Закрити меню',
  },

  footer: {
    brand: 'CRM для майстрів і б’юті-студій: клієнти, записи, послуги, команда та результати роботи в одній системі.',
    featuresHeading: 'Можливості',
    companyHeading: 'Hirnix',
    contactsHeading: 'Звʼязок',
    copyright: `© ${new Date().getFullYear()} Hirnix`,
  },

  /** Placeholder frames until real screenshots with training data exist (A01–A08). */
  assets: {
    A01: { title: 'Денний календар із кількома майстрами', alt: 'Денний календар Hirnix: колонки майстрів і записи на обрану дату' },
    A02: { title: 'Деталі візиту з послугами та статусом', alt: 'Відкритий запис: послуги, час, ціна, тривалість, статус і коментар' },
    A03: { title: 'Пошук у клієнтській базі', alt: 'Список клієнтів Hirnix із полем пошуку' },
    A04: { title: 'Картка клієнта з історією візитів', alt: 'Картка клієнта: контакти, попередні та майбутні візити' },
    A05: { title: 'Послуга: категорія, ціна, тривалість', alt: 'Редактор послуги з категорією, ціною та тривалістю' },
    A06: { title: 'Графік і призначені послуги майстра', alt: 'Робочий графік майстра та список призначених йому послуг' },
    A07: { title: 'Звіт за період', alt: 'Звіт Hirnix за обраний період: послуги та майстри' },
    A08: { title: 'Клієнтський запис і результат у календарі', alt: 'Сторінка онлайн-запису та створений запис у календарі' },
    demoNote: 'Демонстраційні дані',
    placeholderNote: 'Тут буде знімок поточного інтерфейсу',
  },

  form: {
    nameLabel: 'Як до вас звертатися',
    namePlaceholder: 'Імʼя',
    phoneLabel: 'Телефон',
    phoneInvalid: 'Перевірте номер — схоже, в ньому бракує цифр або обрано не ту країну.',
    emailLabel: 'Email',
    emailPlaceholder: 'hello@example.com',
    emailInvalid: 'Перевірте адресу email — схоже, в ній помилка.',
    contactHint: 'Достатньо одного з контактів — телефону або email.',
    nameRequired: 'Вкажіть, як до вас звертатися.',
    contactRequired: 'Вкажіть телефон або email, щоб ми могли відповісти.',

    formatLabel: 'Формат роботи',
    formatOptions: [
      { value: 'solo', label: 'Працюю самостійно' },
      { value: 'team', label: 'Студія з командою' },
      { value: 'other', label: 'Інший формат' },
    ],

    detailsToggle: 'Додати деталі (необовʼязково)',
    businessLabel: 'Назва бізнесу',
    linkLabel: 'Сайт або Instagram',
    linkPlaceholder: 'instagram.com/…',
    commentLabel: 'Що для вас зараз важливо',
    commentPlaceholder: 'Наприклад: де зараз ведете записи, скільки майстрів, які питання є',

    // ПОГОДИТИ — text depends on the approved personal-data processing model (F09).
    privacyNote: 'Контакт використаємо лише для відповіді на це звернення.',
    privacyLink: 'Політика конфіденційності',

    sending: 'Надсилаємо…',
    errorTitle: 'Не вдалося надіслати звернення.',
    errorBody: 'Ваші дані збережені у формі — спробуйте ще раз або напишіть нам напряму:',
    retry: 'Надіслати ще раз',

    successTitle: 'Звернення отримано',
    // ПОГОДИТИ — publish the actual response-time standard here once it exists (F06, §17).
    successBody: 'Ми звʼяжемося з вами за вказаними контактами, щоб уточнити формат роботи й домовитися про наступний крок.',
    successContacts: 'Ваші контакти',
    successNext: 'Поки чекаєте — можна переглянути платформу.',
    successNextLink: 'Подивитися демо',
  },
};
