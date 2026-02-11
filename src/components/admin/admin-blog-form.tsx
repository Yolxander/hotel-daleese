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

export function AdminBlogForm() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/admin/blog');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch {
        // ignore
      } finally {
        setListLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (title && !slug) setSlug(slugFromTitle(title));
  }, [title, slug]);

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
      setMessage({ type: 'ok', text: 'Post created.' });
      setTitle('');
      setSlug('');
      setExcerpt('');
      setContent('');
      setImage(null);
      setPosts((prev) => [data, ...prev]);
    } catch {
      setMessage({ type: 'err', text: 'Request failed' });
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setDeletingId(post.id);
    try {
      const res = await fetch(`/api/admin/blog/${post.id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || 'Failed to delete post');
        return;
      }
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } catch {
      alert('Request failed');
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Create new post</CardTitle>
          <CardDescription>Add a new blog post. It will be published immediately.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="url-slug"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
              <Textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Short summary"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Full post content"
                rows={10}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Featured image</label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              />
            </div>
            {message && (
              <p className={message.type === 'ok' ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>
                {message.text}
              </p>
            )}
            <Button type="submit" disabled={loading}>
              {loading ? 'Creating…' : 'Create post'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>All posts</CardTitle>
          <CardDescription>View and manage blog posts.</CardDescription>
        </CardHeader>
        <CardContent>
          {listLoading ? (
            <p className="text-sm text-gray-500">Loading…</p>
          ) : posts.length === 0 ? (
            <p className="text-sm text-gray-500">No posts yet.</p>
          ) : (
            <div className="overflow-x-auto rounded-md border border-gray-200">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Title</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Slug</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Date</th>
                    <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                    <th className="px-4 py-3 text-right font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post, i) => (
                    <tr
                      key={post.id}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{post.title}</td>
                      <td className="px-4 py-3 text-gray-500">{post.slug}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString()
                          : '—'}
                      </td>
                      <td className="px-4 py-3">
                        {post.published_at ? (
                          <span className="text-green-700">Published</span>
                        ) : (
                          <span className="text-amber-600">Draft</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="flex items-center justify-end gap-3">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </Link>
                          <Link
                            href={`/admin/posts/${post.id}/edit`}
                            className="text-gray-600 hover:underline"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(post)}
                            disabled={deletingId === post.id}
                            className="text-red-600 hover:underline disabled:opacity-50"
                          >
                            {deletingId === post.id ? 'Deleting…' : 'Delete'}
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
