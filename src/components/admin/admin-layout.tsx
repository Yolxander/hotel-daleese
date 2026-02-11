'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { AdminSidebar } from './admin-sidebar';

type AdminLayoutProps = {
  title: string;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
};

export function AdminLayout({ title, backHref, backLabel = 'Back to list', children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="ml-56 flex flex-1 flex-col min-h-screen">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          {backHref && (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link href={backHref}>
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </Link>
            </Button>
          )}
        </header>
        <div className="flex flex-1 flex-col bg-white">{children}</div>
      </main>
    </div>
  );
}
