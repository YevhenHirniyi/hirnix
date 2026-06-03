import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, biz, email, phone, pages, langs, scope } = body;

  if (!name || !email) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // 1. Save to Supabase
  const { error: dbError } = await supabase.from('leads').insert({
    name,
    biz_type: biz,
    email,
    phone: phone || null,
    pages,
    langs,
    scope,
  });

  if (dbError) {
    console.error('Supabase error:', dbError.message);
    return Response.json({ error: 'DB error' }, { status: 500 });
  }

  // 2. Send Telegram notification
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

    const text = [
      '🆕 *Нова заявка з hirnix.studio*',
      '',
      `👤 *Ім'я:* ${name}`,
      `💼 *Бізнес:* ${biz || '—'}`,
      `📧 *Email:* ${email}`,
      `📞 *Телефон:* ${phone || '—'}`,
      '',
      `📄 *Формат:* ${pageLabel[pages] ?? pages}`,
      `🌐 *Мови:* ${langs?.toUpperCase() ?? '—'}`,
      `📦 *Обсяг:* ${scopeLabel[scope] ?? scope}`,
      '',
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
