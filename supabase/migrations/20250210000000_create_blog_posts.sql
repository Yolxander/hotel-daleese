-- Blog posts table for Hotel Daleese admin-created content
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null default '',
  image_url text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS: allow public read (select), restrict write to service role (API only)
alter table public.blog_posts enable row level security;

drop policy if exists "Allow public read access on blog_posts" on public.blog_posts;
create policy "Allow public read access on blog_posts"
  on public.blog_posts for select
  using (true);

drop policy if exists "Service role only for insert" on public.blog_posts;
create policy "Service role only for insert"
  on public.blog_posts for insert
  with check (false);

drop policy if exists "Service role only for update" on public.blog_posts;
create policy "Service role only for update"
  on public.blog_posts for update
  using (false);

drop policy if exists "Service role only for delete" on public.blog_posts;
create policy "Service role only for delete"
  on public.blog_posts for delete
  using (false);

-- Optional: index for slug lookups
create index if not exists blog_posts_slug_idx on public.blog_posts (slug);
create index if not exists blog_posts_published_at_idx on public.blog_posts (published_at desc);
