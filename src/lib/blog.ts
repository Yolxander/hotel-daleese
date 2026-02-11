/**
 * Blog posts: read/write via Supabase (blog_posts table).
 * Use getSupabaseClient() from supabase-storage (service role for writes).
 */

import { getSupabaseClient } from './supabase-storage';

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type BlogPostInsert = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string | null;
  published_at?: string | null;
};

/**
 * Fetch all published blog posts (published_at not null), newest first.
 */
export async function getPosts(): Promise<BlogPost[]> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        '[blog] getPosts: Supabase client not initialized. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY) in .env.local'
      );
    }
    return [];
  }
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, content, image_url, published_at, created_at, updated_at')
    .order('published_at', { ascending: false });
  if (error) {
    console.error('[blog] getPosts error:', error.message, error.details);
    return [];
  }
  // Filter to published only (published_at not null)
  const rows = (data ?? []) as BlogPost[];
  return rows.filter((p) => p.published_at != null);
}

/**
 * Fetch a single blog post by slug. Returns null if not found.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return null;
  }
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
  return data as BlogPost | null;
}

/**
 * Create a new blog post. Uses service role (bypasses RLS).
 * @throws Error with message from Supabase when insert fails
 */
export async function createPost(row: BlogPostInsert): Promise<BlogPost> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    throw new Error('Supabase client not initialized. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local');
  }
  const insertPayload = {
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? '',
    content: row.content ?? '',
    image_url: row.image_url ?? null,
    published_at: row.published_at ?? new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  // Supabase client has no generated types for blog_posts; cast required
  const { data, error } = await supabase
    .from('blog_posts')
    .insert(insertPayload as never)
    .select()
    .single();
  if (error) {
    console.error('Error creating blog post:', error);
    throw new Error(error.message || 'Failed to create post');
  }
  return data as BlogPost;
}

/**
 * Fetch all posts (including drafts) for admin list. Uses service role.
 */
export async function getPostsForAdmin(): Promise<BlogPost[]> {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return [];
  }
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, content, image_url, published_at, created_at, updated_at')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching blog posts for admin:', error);
    return [];
  }
  return (data ?? []) as BlogPost[];
}

/**
 * Fetch a single blog post by id (for admin edit). Returns null if not found.
 */
export async function getPostById(id: string): Promise<BlogPost | null> {
  const supabase = getSupabaseClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) {
    console.error('Error fetching blog post by id:', error);
    return null;
  }
  return data as BlogPost | null;
}

export type BlogPostUpdate = {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  image_url?: string | null;
  published_at?: string | null;
};

/**
 * Update a blog post by id. Uses service role.
 */
export async function updatePost(id: string, updates: BlogPostUpdate): Promise<BlogPost | null> {
  const supabase = getSupabaseClient();
  if (!supabase) return null;
  const payload = { ...updates, updated_at: new Date().toISOString() };
  const { data, error } = await supabase
    .from('blog_posts')
    .update(payload as never)
    .eq('id', id)
    .select()
    .single();
  if (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
  return data as BlogPost;
}

/**
 * Delete a blog post by id. Uses service role.
 */
export async function deletePost(id: string): Promise<boolean> {
  const supabase = getSupabaseClient();
  if (!supabase) return false;
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
  return true;
}
