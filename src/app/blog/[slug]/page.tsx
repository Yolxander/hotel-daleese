import { notFound } from 'next/navigation';
import Image from 'next/image';
import { unstable_noStore } from 'next/cache';
import { Cormorant_Garamond } from 'next/font/google';
import { ArticleSection } from '@/components/blog/article-section';
import { Navbar } from '@/components/Navbar';
import { FooterComponent } from '@/components/footer';
import { getPostBySlug } from '@/lib/blog';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] });

const DEFAULT_IMAGE =
  'https://kvirwlcodrpwnwzvfcqr.supabase.co/storage/v1/object/public/hotel-daleese/uploads/Casa%20Turul/Blog/671fd74a7475b.jpeg';

function formatDate(iso: string | null): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  unstable_noStore();
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = post.image_url || DEFAULT_IMAGE;

  return (
    <div>
      <Navbar />
      <section
        className={`container mx-auto px-4 py-16 ${cormorantGaramond.className} md:mt-[200px] mt-[50px] md:mt-[200px] mt-[50px]`}
      >
        <div className="space-y-8">
          <h1 className="max-w-4xl mx-auto text-center text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {post.title}
          </h1>
          <p className="text-center text-gray-500 font-light text-[20px]">{formatDate(post.published_at)}</p>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={post.title}
              className="object-cover"
              width={1600}
              height={900}
              priority
              unoptimized={imageUrl.includes('supabase')}
            />
          </div>
        </div>
      </section>
      <ArticleSection content={post.content} />
      <FooterComponent />
    </div>
  );
}
