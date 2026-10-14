const contacts = {
  // Telegram, WhatsApp and Viber all run on the Czech number.
  phoneDisplay: '+420 607 477 611',
  telegram: 'https://t.me/+420607477611',
  whatsapp: 'https://wa.me/420607477611',
  viber: 'viber://chat?number=%2B420607477611',
  email: 'mailto:info@hirnix.studio',
  emailDisplay: 'info@hirnix.studio',
  instagram: 'https://www.instagram.com/hirnix.studio/',
  googleMaps: '',
};

/** Direct channels shown on the site, all on the Czech number. */
export const MESSENGERS = [
  { id: 'telegram', label: 'Telegram', href: contacts.telegram },
  { id: 'whatsapp', label: 'WhatsApp', href: contacts.whatsapp },
  { id: 'viber', label: 'Viber', href: contacts.viber },
] as const;

export default contacts;
