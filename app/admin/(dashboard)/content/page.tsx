import { createClient } from '@/lib/supabase-server'
import { SiteEditor } from './_components/SiteEditor'

const CREATE_TABLE_SQL = `create table site_sections (
  id uuid primary key default gen_random_uuid(),
  section text not null,
  lang text not null default 'uk',
  data jsonb not null default '{}',
  updated_at timestamptz default now(),
  constraint site_sections_section_lang_key unique (section, lang)
);

alter table site_sections enable row level security;

create policy "Admin read" on site_sections
  for select using (auth.role() = 'authenticated');

create policy "Admin write" on site_sections
  for all using (auth.role() = 'authenticated');`

export default async function ContentPage() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('site_sections')
    .select('section, lang, data')

  if (error && error.code !== 'PGRST116') {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Контент сайту</h1>
        </div>
        <div className="bg-yellow-950/30 border border-yellow-800 rounded-2xl p-6">
          <h2 className="text-yellow-400 font-semibold mb-2">Потрібно створити таблицю</h2>
          <p className="text-gray-400 text-sm mb-4">
            Відкрийте <strong>Supabase → SQL Editor</strong> і запустіть цей скрипт:
          </p>
          <pre className="bg-gray-950 rounded-xl p-4 text-xs text-gray-300 overflow-x-auto font-mono leading-relaxed">
            {CREATE_TABLE_SQL}
          </pre>
          <p className="text-gray-500 text-xs mt-3">Помилка: {error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Контент сайту</h1>
        <p className="text-gray-500 text-sm mt-1">
          Редагуйте текст, заголовки та списки для обох мовних версій сайту
        </p>
      </div>

      <SiteEditor savedSections={data ?? []} />
    </div>
  )
}
