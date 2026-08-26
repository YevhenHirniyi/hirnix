alter table leads add column if not exists city text;
alter table leads alter column email drop not null;
