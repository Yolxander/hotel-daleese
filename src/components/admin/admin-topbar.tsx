'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';

type AdminTopbarProps = {
  title: string;
  onCreateClick?: () => void;
  onCancelClick?: () => void;
  mode: 'list' | 'create';
};

export function AdminTopbar({ title, onCreateClick, onCancelClick, mode }: AdminTopbarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
      {mode === 'list' && onCreateClick && (
        <Button onClick={onCreateClick} size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Create blog
        </Button>
      )}
      {mode === 'create' && onCancelClick && (
        <Button type="button" variant="outline" size="sm" onClick={onCancelClick} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to list
        </Button>
      )}
    </header>
  );
}
