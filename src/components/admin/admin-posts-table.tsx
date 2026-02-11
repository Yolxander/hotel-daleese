'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

type AdminPostsTableProps = {
  posts: BlogPost[];
  loading: boolean;
  deletingId: string | null;
  onDelete: (post: BlogPost) => void;
};

export function AdminPostsTable({ posts, loading, deletingId, onDelete }: AdminPostsTableProps) {
  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center p-12">
        <p className="text-gray-500">Loading posts…</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-12 text-center">
        <p className="text-gray-500">No blog posts yet.</p>
        <p className="text-sm text-gray-400">Click “Create blog” above to add your first post.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 text-left font-medium text-gray-700">Title</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Date</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Status</th>
            <th className="px-4 py-3 text-right font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => (
            <tr
              key={post.id}
              className={i % 2 === 0 ? 'border-b border-gray-100 bg-white' : 'border-b border-gray-100 bg-gray-50/50'}
            >
              <td className="px-4 py-3 font-medium text-gray-900">{post.title}</td>
              <td className="px-4 py-3 text-gray-500">
                {post.published_at
                  ? new Date(post.published_at).toLocaleDateString()
                  : '—'}
              </td>
              <td className="px-4 py-3">
                {post.published_at ? (
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                    Published
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    Draft
                  </span>
                )}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    title="View on site"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only">View</span>
                  </Link>
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    title="Edit post"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only">Edit</span>
                  </Link>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(post)}
                    disabled={deletingId === post.id}
                    className="text-red-600 hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
                    title="Delete post"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only md:not-sr-only">{deletingId === post.id ? 'Deleting…' : 'Delete'}</span>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
