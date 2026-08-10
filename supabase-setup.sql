-- FlyGuide favorites table. Paste this whole file into Supabase: SQL Editor > New query > Run.
-- Safe to run more than once.

create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('spot', 'place')),
  spot_id text,
  label text,
  lat double precision,
  lng double precision,
  created_at timestamptz not null default now()
);

alter table public.favorites enable row level security;

drop policy if exists "read own favorites" on public.favorites;
create policy "read own favorites" on public.favorites
  for select using (auth.uid() = user_id);

drop policy if exists "add own favorites" on public.favorites;
create policy "add own favorites" on public.favorites
  for insert with check (auth.uid() = user_id);

drop policy if exists "remove own favorites" on public.favorites;
create policy "remove own favorites" on public.favorites
  for delete using (auth.uid() = user_id);

create unique index if not exists fav_spot_once
  on public.favorites (user_id, spot_id) where kind = 'spot';
