import { supabase } from '@/lib/supabase';

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(request: Request) {
  const body = await request.json();
  const { name, biz, email, phone, pages, langs, scope, source } = body;

  if (!name || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // A lead is delivered through three independent channels (Supabase, Google
  // Sheets, Telegram). Each one is best-effort: the request only fails when
  // none of them received the lead, so one service being down (e.g. a paused
  // Supabase project) never shows the visitor an error.
  let savedToDb = false;
  let sentToSheets = false;
  let sentToTelegram = false;

  // 1. Save to Supabase
  const leadRow = {
    name,
    biz_type: biz,
    email,
    phone: phone || null,
    pages,
    langs,
    scope,
    source: source || null,
  };

  try {
    let { error: dbError } = await supabase.from('leads').insert(leadRow);

    // The `source` column may not exist yet if the latest migration hasn't been
    // applied — fall back to inserting without it rather than losing the lead.
    if (dbError && dbError.message?.includes('source')) {
      const { source: _source, ...withoutSource } = leadRow;
      void _source;
      ({ error: dbError } = await supabase.from('leads').insert(withoutSource));
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
          name,
          biz: biz || '',
          email,
          phone: phone || '',
          pages: pages || '',
          langs: langs || '',
          scope: scope || '',
          source: source || '',
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
    const pageLabel: Record<string, string> = {
      'одна-сторінка': 'Лендинг', 'кілька-сторінок': '3–5 сторінок', 'багатосторінковий': 'Багато сторінок',
      'jednostrankovy': 'Landing page', 'nekolik-stranek': '3–5 stránek', 'vicestranovy': 'Více stránek',
    };
    const scopeLabel: Record<string, string> = {
      site: 'Тільки сайт / Jen web',
      full: '+ Google + SEO',
      'full-ads': '+ реклама / reklama',
    };
    const sourceLabel: Record<string, string> = {
      'saas-uk': 'Лендинг CRM · UA',
      'saas-en': 'Лендинг CRM · EN',
    };

    // HTML parse mode with escaped values: with Markdown, a name or email
    // containing `_` or `*` made Telegram reject the whole message.
    const v = (s: unknown) => escapeHtml(String(s ?? '—'));
    const text = [
      '🆕 <b>Нова заявка з hirnix.studio</b>',
      '',
      `👤 <b>Ім'я:</b> ${v(name)}`,
      `💼 <b>Бізнес:</b> ${v(biz || '—')}`,
      `📧 <b>Email:</b> ${v(email)}`,
      `📞 <b>Телефон:</b> ${v(phone || '—')}`,
      ...(pages || langs || scope
        ? [
            '',
            `📄 <b>Формат:</b> ${v(pageLabel[pages] ?? pages)}`,
            `🌐 <b>Мови:</b> ${v(langs?.toUpperCase())}`,
            `📦 <b>Обсяг:</b> ${v(scopeLabel[scope] ?? scope)}`,
          ]
        : []),
      '',
      `🏷 <b>Джерело:</b> ${v(sourceLabel[source] ?? source ?? 'Сайт студії')}`,
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
