'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { BlogPost } from '@/lib/blog';

function slugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

type AdminCreateFormProps = {
  onSuccess: (post: BlogPost) => void;
  onCancel: () => void;
};

export function AdminCreateForm({ onSuccess, onCancel }: AdminCreateFormProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  // Auto-fill URL slug from title as the user types
  useEffect(() => {
    if (title) {
      setSlug(slugFromTitle(title));
    }
  }, [title]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.set('title', title.trim());
      formData.set('slug', slug.trim());
      formData.set('excerpt', excerpt.trim());
      formData.set('content', content.trim());
      if (image) formData.set('image', image);
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: 'err', text: data.error || 'Failed to create post' });
        return;
      }
      setMessage({ type: 'ok', text: 'Post created successfully.' });
      onSuccess(data);
    } catch {
      setMessage({ type: 'err', text: 'Request failed' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>New post</CardTitle>
          <CardDescription>
            Add a new blog post. The URL slug is filled from the title; you can edit it if needed. The post will be published immediately.
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
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your full post here…"
                rows={12}
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
            </div>
            {message && (
              <p className={message.type === 'ok' ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>
                {message.text}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button type="submit" disabled={loading}>
                {loading ? 'Publishing…' : 'Publish post'}
              </Button>
              <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
                Cancel
              </Button>
              <Button type="button" variant="ghost" disabled={loading} asChild>
                <Link href="/admin">Back to list</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
