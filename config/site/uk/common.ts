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

  /** Caption under every product screenshot. */
  assets: {
    demoNote: 'Демонстраційні дані',
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
