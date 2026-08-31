import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, biz, email, phone, pages, langs, scope, source } = body;

  if (!name || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

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

  let { error: dbError } = await supabase.from('leads').insert(leadRow);

  // The `source` column may not exist yet if the latest migration hasn't been
  // applied — fall back to inserting without it rather than losing the lead.
  if (dbError && dbError.message?.includes('source')) {
    const { source: _source, ...withoutSource } = leadRow;
    void _source;
    ({ error: dbError } = await supabase.from('leads').insert(withoutSource));
  }

  if (dbError) {
    console.error('Supabase error:', dbError.message);
    return Response.json({ error: 'DB error' }, { status: 500 });
  }

  // 2. Send to Google Sheet (best-effort — a failure here must not lose the lead)
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const sheetsSecret = process.env.GOOGLE_SHEETS_SECRET;

  if (sheetsUrl && sheetsSecret) {
    try {
      await fetch(sheetsUrl, {
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

    const text = [
      '🆕 *Нова заявка з hirnix.studio*',
      '',
      `👤 *Ім'я:* ${name}`,
      `💼 *Бізнес:* ${biz || '—'}`,
      `📧 *Email:* ${email}`,
      `📞 *Телефон:* ${phone || '—'}`,
      ...(pages || langs || scope
        ? [
            '',
            `📄 *Формат:* ${pageLabel[pages] ?? pages ?? '—'}`,
            `🌐 *Мови:* ${langs?.toUpperCase() ?? '—'}`,
            `📦 *Обсяг:* ${scopeLabel[scope] ?? scope ?? '—'}`,
          ]
        : []),
      '',
      `🏷 *Джерело:* ${sourceLabel[source] ?? source ?? 'Сайт студії'}`,
      `🕐 ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Prague' })}`,
    ].join('\n');

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    });
  }

  return Response.json({ ok: true });
}
