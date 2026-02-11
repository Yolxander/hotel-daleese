import { NextRequest, NextResponse } from 'next/server';
import { getPostById, updatePost, deletePost } from '@/lib/blog';
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

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAdminSecret(_request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const id = params.id;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }
  try {
    const post = await getPostById(id);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAdminSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const id = params.id;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }

  const existing = await getPostById(id);
  if (!existing) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  let title: string | undefined;
  let slug: string | undefined;
  let excerpt: string | undefined;
  let content: string | undefined;
  let image_url: string | null | undefined = undefined;

  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const t = (formData.get('title') as string)?.trim();
    const s = (formData.get('slug') as string)?.trim();
    const e = (formData.get('excerpt') as string)?.trim();
    const c = (formData.get('content') as string)?.trim();
    if (t !== undefined && t !== '') title = t;
    if (s !== undefined && s !== '') slug = s;
    if (e !== undefined) excerpt = e;
    if (c !== undefined) content = c;
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
    if (body.title != null) title = (body.title as string)?.trim();
    if (body.slug != null) slug = (body.slug as string)?.trim();
    if (body.excerpt != null) excerpt = body.excerpt as string;
    if (body.content != null) content = body.content as string;
    if (body.image_url !== undefined) image_url = body.image_url as string | null;
  }

  const updates: { title?: string; slug?: string; excerpt?: string; content?: string; image_url?: string | null } = {};
  if (title !== undefined) updates.title = title;
  if (slug !== undefined) updates.slug = slug;
  if (excerpt !== undefined) updates.excerpt = excerpt;
  if (content !== undefined) updates.content = content;
  if (image_url !== undefined) updates.image_url = image_url;

  if (Object.keys(updates).length === 0) {
    return NextResponse.json(existing);
  }

  if (title !== undefined && !title) {
    return NextResponse.json({ error: 'Title cannot be empty' }, { status: 400 });
  }
  if (slug !== undefined && !slug) {
    return NextResponse.json({ error: 'Slug cannot be empty' }, { status: 400 });
  }

  try {
    const post = await updatePost(id, updates);
    if (!post) {
      return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAdminSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const id = params.id;
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }
  try {
    const ok = await deletePost(id);
    if (!ok) {
      return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
