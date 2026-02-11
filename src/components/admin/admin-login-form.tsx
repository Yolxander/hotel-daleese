'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AdminLoginForm() {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: key.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Invalid key');
        return;
      }
      router.push('/admin');
      router.refresh();
    } catch {
      setError('Request failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 bg-white p-8 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900">Admin access</h2>
      <p className="text-sm text-gray-500">Enter the admin secret to continue.</p>
      <Input
        type="password"
        placeholder="Admin secret"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        autoFocus
        className="w-full"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Checking…' : 'Continue'}
      </Button>
    </form>
  );
}
