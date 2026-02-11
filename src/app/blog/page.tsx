import { unstable_noStore } from 'next/cache';
import { FooterComponent } from '@/components/footer';
import { Navbar } from '@/components/Navbar';
import { TravelBlogPostComponent } from '@/components/blog/travel-blog-post';
import { getPosts } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  unstable_noStore();
  const posts = await getPosts();
  const list = posts.map((p) => ({
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    image_url: p.image_url,
    published_at: p.published_at,
  }));

  return (
    <div>
      <Navbar />
      <TravelBlogPostComponent posts={list} />
      <FooterComponent />
    </div>
  );
}
