/**
 * Copy shared by every page: header, footer, contact form, asset captions.
 *
 * Review markers used across config/site/uk/*:
 *   // H0x  — public claim backed by the capability registry (H01–H13).
 *   // ПОГОДИТИ — wording that depends on an open owner decision (§17 of the
 *                 strategy) and must be confirmed before release.
 */

export const common = {
  /** Menu labels and dropdown hints for every page in the route map. */
  routes: {
    home: { label: 'Головна' },
    scheduling: { label: 'Записи та розклад', hint: 'Робочий день, візити й майстри в календарі' },
    clients: { label: 'Клієнтська база', hint: 'Контакти й історія візитів кожного клієнта' },
    team: { label: 'Послуги та команда', hint: 'Каталог послуг, виконавці й графіки' },
    reports: { label: 'Звіти та результати', hint: 'Показники записів, послуг і майстрів за період' },
    booking: { label: 'Онлайн-запис', hint: 'Сторінка, де клієнт сам обирає послугу й час' },
    independent: { label: 'Для приватних майстрів', hint: 'Працюєте самостійно, без адміністратора' },
    studios: { label: 'Для б’юті-студій', hint: 'Організація роботи кількох майстрів' },
    demo: { label: 'Демо' },
    conditions: { label: 'Умови' },
    contact: { label: 'Контакти' },
    privacy: { label: 'Політика конфіденційності' },
    cookies: { label: 'Cookies' },
  },

  /** Small interface strings used by shared components. */
  ui: {
    skipLink: 'Перейти до змісту',
    mainNav: 'Основне меню',
    languageNav: 'Мова сайту',
    breadcrumbs: 'Навігаційний ланцюжок',
    contactEyebrow: 'Звернення',
    directLabel: 'Або напишіть напряму',
    loginCabinet: 'Увійти в кабінет',
    optional: 'необовʼязково',
  },

  seo: {
    ogTagline: 'CRM для майстрів і б’юті-студій',
    appDescription: 'CRM для майстрів і б’юті-студій: клієнтська база, розклад, послуги, робота майстрів, звіти та онлайн-запис.',
  },

  header: {
    featuresLabel: 'Можливості',
    segmentsLabel: 'Для кого',
    login: 'Увійти',
    cta: 'Показати на моїх послугах',
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

  /** Caption under every product screenshot. */
  assets: {
    demoNote: 'Демонстраційні дані',
    alt: {
      dashboard: 'Дашборд Hirnix: записи на сьогодні, останні клієнти, популярні послуги',
      calendarDay: 'Денний календар Hirnix: записи по колонках трьох майстрів',
      calendarWeek: 'Тижневий календар майстра з вихідними, перервою та записами',
      visit: 'Відкритий запис: майстер, послуги з цінами й тривалістю, дата, час, статус і коментарі',
      clients: 'Список клієнтів із пошуком, кількістю візитів і датою останнього візиту',
      clientCard: 'Картка клієнта: кількість візитів, коментарі та історія записів зі статусами',
      services: 'Каталог послуг із категоріями, цінами й тривалістю',
      serviceEdit: 'Редагування послуги: фото, назва, опис і переклади для сторінки бронювання',
      employees: 'Майстри студії з призначеними послугами та тижневим графіком роботи',
      reports: 'Звіт Hirnix: підсумки за період і графік по місяцях',
      reportsDetail: 'Звіт по послугах і майстрах та завантаженість по днях тижня',
      bookingSettings: 'Налаштування сторінки бронювання: посилання, QR-код, оформлення та мови',
      bookingStart: 'Сторінка онлайн-запису студії на телефоні',
      bookingMasters: 'Онлайн-запис: вибір майстра зі спеціалізацією та описом',
      bookingServices: 'Онлайн-запис: вибір послуги з фото, описом, тривалістю й ціною',
      bookingSummary: 'Онлайн-запис: обрані майстер і послуга перед вибором часу',
      bookingTime: 'Онлайн-запис: вибір дати та вільного часу',
    },
  },

  form: {
    nameLabel: 'Як до вас звертатися',
    namePlaceholder: 'Імʼя',
    phoneLabel: 'Телефон',
    /** Country preselected in the phone field (ISO code). */
    phoneCountry: 'UA',
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
