-- FlyGuide database setup. Paste this whole file into Supabase: SQL Editor > New query > Run.
-- Safe to run more than once, and safe to run on top of the earlier favorites-only version.

-- Favorites: saved spots and saved places
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
create policy "read own favorites" on public.favorites for select using (auth.uid() = user_id);
drop policy if exists "add own favorites" on public.favorites;
create policy "add own favorites" on public.favorites for insert with check (auth.uid() = user_id);
drop policy if exists "remove own favorites" on public.favorites;
create policy "remove own favorites" on public.favorites for delete using (auth.uid() = user_id);
create unique index if not exists fav_spot_once on public.favorites (user_id, spot_id) where kind = 'spot';

-- Catch log: each fish with the conditions snapshot the engine saw
create table if not exists public.catches (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  spot_id text not null,
  species text not null,
  length_in numeric,
  fly text,
  score int,
  tide text,
  wind text,
  temp text,
  moon text,
  mode text,
  caught_at timestamptz not null default now()
);
alter table public.catches enable row level security;
drop policy if exists "read own catches" on public.catches;
create policy "read own catches" on public.catches for select using (auth.uid() = user_id);
drop policy if exists "add own catches" on public.catches;
create policy "add own catches" on public.catches for insert with check (auth.uid() = user_id);
drop policy if exists "remove own catches" on public.catches;
create policy "remove own catches" on public.catches for delete using (auth.uid() = user_id);

-- Grade the guide: one report per angler per spot per day
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  spot_id text not null,
  day date not null,
  grade int not null check (grade between 0 and 3),
  score_called int,
  created_at timestamptz not null default now(),
  unique (user_id, spot_id, day)
);
alter table public.reports enable row level security;
drop policy if exists "read own reports" on public.reports;
create policy "read own reports" on public.reports for select using (auth.uid() = user_id);
drop policy if exists "add own reports" on public.reports;
create policy "add own reports" on public.reports for insert with check (auth.uid() = user_id);

-- The record: anonymous aggregate anyone can read, no user data exposed
create or replace function public.fg_hit_rate()
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'n', count(*),
    'hits', count(*) filter (where grade >= 2),
    'n8', count(*) filter (where score_called >= 75),
    'hits8', count(*) filter (where grade >= 2 and score_called >= 75)
  ) from public.reports;
$$;
grant execute on function public.fg_hit_rate() to anon, authenticated;
