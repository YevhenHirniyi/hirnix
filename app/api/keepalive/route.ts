import { supabase } from '@/lib/supabase';

// Called daily by Vercel Cron (see vercel.json). Supabase pauses free-tier
// projects after ~7 days without API activity, which takes the leads table
// (and the contact form's DB write) offline. A tiny query keeps it awake.
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { error } = await supabase.from('leads').select('id', { head: true, count: 'exact' }).limit(1);
  if (error) {
    console.error('Supabase keepalive error:', error.message);
    return Response.json({ ok: false, error: error.message }, { status: 502 });
  }
  return Response.json({ ok: true });
}
