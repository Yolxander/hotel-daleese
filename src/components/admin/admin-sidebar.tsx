'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, ExternalLink, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AdminSidebar() {
  const pathname = usePathname();
  const isBlogSection = pathname === '/admin' || pathname?.startsWith('/admin/posts');

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-56 flex-col border-r border-gray-200 bg-white shadow-sm">
      <div className="flex h-14 items-center border-b border-gray-200 px-4">
        <span className="text-lg font-semibold text-gray-900">Hotel Daleese</span>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        <Link
          href="/admin"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium',
            isBlogSection ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          )}
        >
          <FileText className="h-5 w-5" />
          Blog posts
        </Link>
      </nav>
      <div className="border-t border-gray-200 p-3">
        <a
          href="/blog"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          <ExternalLink className="h-5 w-5" />
          View site
        </a>
        <a
          href="/api/admin/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          <LogOut className="h-5 w-5" />
          Log out
        </a>
      </div>
    </aside>
  );
}
