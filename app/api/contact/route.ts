import { supabase } from '@/lib/supabase';
import { ROUTES } from '@/config/site/routes';
import { common } from '@/config/site/uk/common';

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;

/** Trims a value to a bounded string, or null when it is empty or not a string. */
function str(value: unknown, max = 500): string | null {
  if (typeof value !== 'string') return null;
  const s = value.trim().slice(0, max);
  return s || null;
}

const isPhone = (v: string) => /^\+?\d{9,15}$/.test(v.replace(/[\s()\-.]/g, ''));
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

interface Lead {
  name: string;
  email: string | null;
  phone: string | null;
  business: string | null;
  businessLink: string | null;
  workFormat: string | null;
  comment: string | null;
  intent: string | null;
  source: string | null;
  context: Record<string, string>;
  requestId: string | null;
}

/**
 * Accepts the multi-page site's form ({ name, phone, email, …, context }) and
 * the legacy landing-page form ({ name, email, phone, source }) that /en still
 * posts. At least one valid contact — phone or email — is required.
 */
function parseLead(body: Record<string, unknown>): Lead | { error: string } {
  const name = str(body.name, 120);
  if (!name) return { error: 'Missing name' };

  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  if (!email && !phone) return { error: 'Missing contact' };
  if ((email && !isEmail(email)) || (phone && !isPhone(phone))) return { error: 'Invalid contact' };

  const rawContext = (body.context && typeof body.context === 'object' ? body.context : {}) as Record<string, unknown>;
  const context: Record<string, string> = {};
  for (const key of ['page', 'cta', 'locale', ...UTM_KEYS]) {
    const v = str(rawContext[key], 200);
    if (v) context[key] = v;
  }

  return {
    name,
    email,
    phone,
    business: str(body.business ?? body.biz, 200),
    businessLink: str(body.link, 300),
    workFormat: str(body.format, 40),
    comment: str(body.comment, 2000),
    intent: str(body.intent, 40),
    source: context.page ?? str(body.source, 60),
    context,
    requestId: str(body.requestId, 64),
  };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const lead = parseLead(body);
  if ('error' in lead) {
    return Response.json({ error: lead.error }, { status: 400 });
  }

  // A lead is delivered through three independent channels (Supabase, Google
  // Sheets, Telegram). Each one is best-effort: the request only fails when
  // none of them received the lead, so one service being down (e.g. a paused
  // Supabase project) never shows the visitor an error.
  let savedToDb = false;
  let sentToSheets = false;
  let sentToTelegram = false;

  // 1. Save to Supabase
  const legacyRow = {
    name: lead.name,
    biz_type: lead.business,
    email: lead.email,
    phone: lead.phone,
    scope: lead.workFormat,
    source: lead.source,
  };
  const fullRow = {
    ...legacyRow,
    work_format: lead.workFormat,
    business_link: lead.businessLink,
    comment: lead.comment,
    intent: lead.intent,
    context: Object.keys(lead.context).length ? lead.context : null,
    request_id: lead.requestId,
  };

  try {
    let { error: dbError } = await supabase.from('leads').insert(fullRow);

    // Same request_id already stored: a double-click or a retry after a lost
    // response. The lead was delivered the first time — don't notify twice.
    if (dbError?.code === '23505') {
      return Response.json({ ok: true, duplicate: true });
    }

    // The contact-model migration may not be applied yet — fall back to the
    // original columns rather than losing the lead.
    if (dbError && /column|schema cache/i.test(dbError.message ?? '')) {
      ({ error: dbError } = await supabase.from('leads').insert(legacyRow));
    }

    if (dbError) console.error('Supabase error:', dbError.message);
    else savedToDb = true;
  } catch (err) {
    console.error('Supabase error:', err);
  }

  // 2. Send to Google Sheet
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetsSecret = process.env.GOOGLE_SHEETS_SECRET;

  if (sheetsUrl && sheetsSecret) {
    try {
      const res = await fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: sheetsSecret,
          createdAt: new Date().toISOString(),
          name: lead.name,
          biz: lead.business ?? '',
          email: lead.email ?? '',
          phone: lead.phone ?? '',
          format: lead.workFormat ?? '',
          link: lead.businessLink ?? '',
          comment: lead.comment ?? '',
          intent: lead.intent ?? '',
          source: lead.source ?? '',
          cta: lead.context.cta ?? '',
          requestId: lead.requestId ?? '',
        }),
      });
      if (res.ok) sentToSheets = true;
      else console.error('Google Sheets webhook error:', res.status, await res.text());
    } catch (err) {
      console.error('Google Sheets webhook error:', err);
    }
  }

  // 3. Send Telegram notification
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    const formatLabel: Record<string, string> = { solo: 'Працює самостійно', team: 'Студія з командою', other: 'Інший формат' };
    const intentLabel: Record<string, string> = { connect: 'Обговорити підключення', quote: 'Запит пропозиції' };
    const sourceLabel: Record<string, string> = {
      'saas-uk': 'Лендинг CRM · UA',
      'saas-en': 'Лендинг CRM · EN',
    };
    // Page ids from the route map ('P11') → readable page name.
    for (const [key, route] of Object.entries(ROUTES)) {
      sourceLabel[route.id] = common.routes[key as keyof typeof common.routes].label;
    }
    const pageLabel = [sourceLabel[lead.source ?? ''] ?? lead.source, lead.context.locale?.toUpperCase()]
      .filter(Boolean).join(' · ');
    const utm = UTM_KEYS.map((k) => lead.context[k]).filter(Boolean).join(' / ');

    // HTML parse mode with escaped values: with Markdown, a name or email
    // containing `_` or `*` made Telegram reject the whole message.
    const v = (s: unknown) => escapeHtml(String(s ?? '—'));
    const line = (label: string, value: string | null | undefined) => (value ? [`${label} ${v(value)}`] : []);
    const text = [
      `🆕 <b>${v(intentLabel[lead.intent ?? ''] ?? 'Нова заявка')}</b> · hirnix.studio`,
      '',
      `👤 <b>Ім'я:</b> ${v(lead.name)}`,
      `📞 <b>Телефон:</b> ${v(lead.phone ?? '—')}`,
      `📧 <b>Email:</b> ${v(lead.email ?? '—')}`,
      ...line('🧩 <b>Формат:</b>', lead.workFormat ? formatLabel[lead.workFormat] ?? lead.workFormat : null),
      ...line('💼 <b>Бізнес:</b>', lead.business),
      ...line('🔗 <b>Посилання:</b>', lead.businessLink),
      ...line('📝 <b>Коментар:</b>', lead.comment),
      '',
      `🏷 <b>Сторінка:</b> ${v(pageLabel || '—')}`,
      ...line('🎯 <b>Кнопка:</b>', lead.context.cta),
      ...line('📣 <b>UTM:</b>', utm),
      `🕐 ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Prague' })}`,
      ...(savedToDb ? [] : ['', '⚠️ <b>Не збережено в базу (Supabase недоступний)</b>']),
    ].join('\n');

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      });
      if (res.ok) sentToTelegram = true;
      else console.error('Telegram notification error:', res.status, await res.text());
    } catch (err) {
      console.error('Telegram notification error:', err);
    }
  }

  if (!savedToDb && !sentToSheets && !sentToTelegram) {
    return Response.json({ error: 'Lead not delivered' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
