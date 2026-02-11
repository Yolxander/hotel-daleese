import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AdminLayout } from '@/components/admin/admin-layout';
import { AdminPostEditForm } from '@/components/admin/admin-post-edit-form';

export const dynamic = 'force-dynamic';

export default async function AdminPostEditPage({ params }: { params: { id: string } }) {
  const secret = process.env.ADMIN_SECRET;
  const cookieStore = await cookies();
  const verified = cookieStore.get('admin_verified')?.value;
  const isAuthorized = !!secret && verified === secret;

  if (!isAuthorized) {
    redirect('/admin');
  }

  return (
    <AdminLayout title="Edit post" backHref="/admin" backLabel="Back to list">
      <AdminPostEditForm postId={params.id} />
    </AdminLayout>
  );
}
