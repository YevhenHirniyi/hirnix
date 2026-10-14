-- Contact model of the multi-page site: optional details and non-PII context
-- about where the request came from (phone/email reuse the existing columns).
alter table leads add column if not exists work_format text;    -- solo | team | other
alter table leads add column if not exists business_link text;
alter table leads add column if not exists comment text;
alter table leads add column if not exists intent text;         -- connect | quote | ...
alter table leads add column if not exists context jsonb;       -- page, cta, locale, allowed utm_* params
alter table leads add column if not exists request_id text;

-- A retried or double-clicked submit carries the same request_id; the unique
-- index lets the API recognise the duplicate instead of creating a second lead.
create unique index if not exists leads_request_id_key on leads (request_id);
