-- First Colony Vision chat concierge: answer cache + usage/rate-limit log.
-- Public site, no auth -- rate limiting is per-IP-hash, not per-user.

create table if not exists chat_cache (
  key text primary key,
  question text not null,
  answer text not null,
  hits integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists chat_usage (
  id uuid primary key default gen_random_uuid(),
  ip_hash text not null,
  question_chars integer not null,
  cached boolean not null default false,
  revised boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists chat_usage_ip_created_idx on chat_usage (ip_hash, created_at);
create index if not exists chat_usage_created_idx on chat_usage (created_at);

alter table chat_cache enable row level security;
alter table chat_usage enable row level security;

-- No client-side access at all -- the edge function talks to these tables
-- with the service_role key, which bypasses RLS. These policies exist only
-- so anon/authenticated roles are explicitly denied, not implicitly open.
create policy "no client access to chat_cache" on chat_cache for all using (false);
create policy "no client access to chat_usage" on chat_usage for all using (false);
