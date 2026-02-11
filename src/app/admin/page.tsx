import { cookies } from 'next/headers';
import { AdminDashboard } from '@/components/admin/admin-dashboard';
import { AdminLoginForm } from '@/components/admin/admin-login-form';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const secret = process.env.ADMIN_SECRET;
  const cookieStore = await cookies();
  const verified = cookieStore.get('admin_verified')?.value;
  const isAuthorized = !!secret && verified === secret;

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <AdminLoginForm />
      </div>
    );
  }

  return <AdminDashboard />;
}
