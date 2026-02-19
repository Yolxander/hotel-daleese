'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RichTextEditor } from './rich-text-editor';
import { FeaturedImagePreview } from './featured-image-preview';
import type { BlogPost } from '@/lib/blog';

function slugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function AdminPostEditForm({ postId }: { postId: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/admin/blog/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
          setTitle(data.title);
          setSlug(data.slug);
          setExcerpt(data.excerpt ?? '');
          setContent(data.content ?? '');
        } else {
          setPost(null);
        }
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [postId]);

  useEffect(() => {
    if (post && title !== post.title) {
      const suggested = slugFromTitle(title);
      if (slug === post.slug || slug === slugFromTitle(post.title)) setSlug(suggested);
    }
  }, [title, post, slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!post) return;
    setMessage(null);
    setSaving(true);
    try {
      const formData = new FormData();
      formData.set('title', title.trim());
      formData.set('slug', slug.trim());
      formData.set('excerpt', excerpt.trim());
      formData.set('content', content.trim());
      if (image) formData.set('image', image);
      const res = await fetch(`/api/admin/blog/${postId}`, {
        method: 'PATCH',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: 'err', text: data.error || 'Failed to update post' });
        return;
      }
      setMessage({ type: 'ok', text: 'Post updated.' });
      setPost(data);
      setImage(null);
    } catch {
      setMessage({ type: 'err', text: 'Request failed' });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-12 text-center">
        <p className="text-red-600">Post not found.</p>
        <Link href="/admin" className="text-blue-600 hover:underline">
          Back to admin
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Edit post</CardTitle>
          <CardDescription>
            Update the blog post below. The URL slug is filled from the title; you can edit it if needed. Leave featured image empty to keep the current one.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Best beaches in Costa Rica"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">URL slug</label>
                <Input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="e.g. best-beaches-costa-rica"
                  required
                  className="w-full"
                />
                <p className="mt-1 text-xs text-gray-500">Used in the post URL. Filled from the title; use lowercase letters and hyphens.</p>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Short summary</label>
                <Textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A brief description shown on the blog list"
                  rows={2}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Content</label>
                <RichTextEditor
                  value={content}
                  onChange={setContent}
                  placeholder="Write your full post here…"
                  minHeight="240px"
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">Featured image</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                  className="w-full"
                />
                <FeaturedImagePreview
                  currentUrl={post.image_url}
                  selectedFile={image}
                />
                {post.image_url && !image && (
                  <p className="mt-1 text-xs text-gray-500">Current image is set. Upload a new file to replace.</p>
                )}
              </div>
              {message && (
                <p className={message.type === 'ok' ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>
                  {message.text}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" disabled={saving}>
                  {saving ? 'Saving…' : 'Save changes'}
                </Button>
                <Button type="button" variant="ghost" disabled={saving} asChild>
                  <Link href="/admin">Back to list</Link>
                </Button>
              </div>
            </form>
        </CardContent>
      </Card>
    </div>
  );
}
