create table if not exists site_sections (
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
  for all using (auth.role() = 'authenticated');
