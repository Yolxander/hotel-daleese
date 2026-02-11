import { NextRequest, NextResponse } from 'next/server';
import { createPost, getPostsForAdmin } from '@/lib/blog';
import { createBucketIfNotExists, uploadBuffer } from '@/lib/supabase-storage';

const BLOG_BUCKET = 'blog-posts';

function checkAdminSecret(request: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return false;
  const header = request.headers.get('x-admin-secret') || request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  if (header === secret) return true;
  const cookie = request.cookies.get('admin_verified')?.value;
  return cookie === secret;
}

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  if (!checkAdminSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const posts = await getPostsForAdmin();
    return NextResponse.json(posts);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!checkAdminSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let title: string;
  let slug: string;
  let excerpt: string;
  let content: string;
  let image_url: string | null = null;

  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    title = (formData.get('title') as string)?.trim() || '';
    slug = (formData.get('slug') as string)?.trim() || '';
    excerpt = (formData.get('excerpt') as string)?.trim() || '';
    content = (formData.get('content') as string)?.trim() || '';
    const file = formData.get('image') as File | null;
    if (file && file.size > 0) {
      try {
        await createBucketIfNotExists(BLOG_BUCKET, true);
        const buffer = Buffer.from(await file.arrayBuffer());
        const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
        const filePath = `${Date.now()}.${ext}`;
        image_url = await uploadBuffer(BLOG_BUCKET, filePath, buffer, {
          contentType: file.type || (ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'png' ? 'image/png' : 'image/webp'),
          upsert: true,
        });
      } catch (err) {
        console.error('Image upload failed:', err);
        const message = err instanceof Error ? err.message : 'Image upload failed';
        return NextResponse.json({ error: message }, { status: 500 });
      }
    }
  } else {
    const body = await request.json();
    title = (body.title as string)?.trim() || '';
    slug = (body.slug as string)?.trim() || '';
    excerpt = (body.excerpt as string)?.trim() || '';
    content = (body.content as string)?.trim() || '';
    if (body.image_url != null) image_url = body.image_url as string;
  }

  if (!title || !slug) {
    return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
  }

  try {
    const post = await createPost({
      title,
      slug,
      excerpt: excerpt || '',
      content: content || '',
      image_url,
      published_at: new Date().toISOString(),
    });
    return NextResponse.json(post);
  } catch (e) {
    console.error('Create post error:', e);
    const message = e instanceof Error ? e.message : 'Failed to create post';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
