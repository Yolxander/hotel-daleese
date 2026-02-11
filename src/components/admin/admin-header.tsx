import Link from 'next/link';

export function AdminHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 mb-8 rounded-lg shadow-sm">
      <h1 className="text-xl font-semibold text-gray-900">Hotel Daleese – Blog Admin</h1>
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/blog" className="text-gray-600 hover:text-gray-900 hover:underline">
          View site
        </Link>
        <a href="/api/admin/logout" className="text-gray-600 hover:text-gray-900 hover:underline">
          Log out
        </a>
      </nav>
    </header>
  );
}
