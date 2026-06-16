create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  biz_type text,
  pages text,
  langs text,
  scope text,
  created_at timestamptz default now()
);

alter table leads enable row level security;

create policy "Admin read leads" on leads
  for select using (auth.role() = 'authenticated');

create policy "Public insert leads" on leads
  for insert with check (true);
