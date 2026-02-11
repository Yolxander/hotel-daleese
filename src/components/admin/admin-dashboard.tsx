'use client';

import { useState, useEffect } from 'react';
import { AdminSidebar } from './admin-sidebar';
import { AdminTopbar } from './admin-topbar';
import { AdminPostsTable } from './admin-posts-table';
import { AdminCreateForm } from './admin-create-form';
import type { BlogPost } from '@/lib/blog';

export function AdminDashboard() {
  const [view, setView] = useState<'list' | 'create'>('list');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [listLoading, setListLoading] = useState(true);
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

  async function handleDelete(post: BlogPost) {
    if (!confirm('Delete "' + post.title + '"? This cannot be undone.')) return;
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

  function handleCreateSuccess(newPost: BlogPost) {
    setPosts((prev) => [newPost, ...prev]);
    setView('list');
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="ml-56 flex flex-1 flex-col min-h-screen">
        <AdminTopbar
          title={view === 'list' ? 'Blog posts' : 'New post'}
          mode={view}
          onCreateClick={() => setView('create')}
          onCancelClick={() => setView('list')}
        />
        <div className="flex flex-1 flex-col bg-white">
          {view === 'list' ? (
            <AdminPostsTable
              posts={posts}
              loading={listLoading}
              deletingId={deletingId}
              onDelete={handleDelete}
            />
          ) : (
            <AdminCreateForm onSuccess={handleCreateSuccess} onCancel={() => setView('list')} />
          )}
        </div>
      </main>
    </div>
  );
}
