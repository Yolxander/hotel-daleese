// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import {ArticleSection} from "@/components/blog/article-section";
import {Navbar} from "@/components/Navbar";

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '700'] })

// Sample blog post data for demonstration purposes
const blogPosts = [
    {
        title: 'When is the best time to travel to Costa Rica?',
        date: '2024-03-15',
        slug: 'best-time-to-travel-costa-rica',
        content: 'Costa Rica offers two distinct seasons: the dry season and the green season...',
        imageUrl: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Blog/671fd74a7475b.jpeg',
    },
    {
        title: 'Top 10 must-visit places in Costa Rica',
        date: '2024-04-10',
        slug: 'must-visit-places-costa-rica',
        content: 'From beautiful beaches to lush rainforests, here are the top places to visit...',
        imageUrl: 'https://path/to/another/image.jpg',
    },
    // Add more blog posts here
]

// Get static paths for dynamic routing
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

// Fetch the blog post based on the slug
function getPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug)
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <div>
        <Navbar />
            <section className={`container mx-auto px-4 py-16 ${cormorantGaramond.className} md:mt-[200px] mt-[50px] md:h-[90vh] h-[110vh] md:mt-[200px] mt-[50px]`}>
            <div className="space-y-8">
                <h1 className="max-w-4xl mx-auto text-center text-4xl md:text-5xl lg:text-6xl tracking-tight">
                    When is the best time to travel to Costa Rica?
                </h1>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                        src="https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Blog/671fd74a7475b.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761675979&Signature=iGbHxggQGFm%2BQLVSj2zSx6zsKy1lRv2CVumjbGVuSLksUS%2BEQm3KQWT52DubXbBibfaH2nLmhKXBakp3PWSEnRulz41VUcoqtNGnv6AHcwgLVaHDNVy16OVWgGrGb1fXn%2BBjsz0xmeuO7SrYZMEhwWyGVOjkRvLJnLMcXI5tiDM25BiYjWvHJrfI%2F92teRLhBD1G97VXdF6lTH%2FRVlkA%2FADVWqs1rf1GcVoUOdiwasp9sHoq5zn8Ei%2BJVvrfWDzBgJrBLXu4YYn2w9kgQlEQcZwYZ8%2BP1jfZHxqgbaxb6IFKKJZGx4q5Dyb%2FZKknLfjYXjRkAV7BvgnOzDXpuwwuug%3D%3D"
                        alt="Scenic view of Arenal Volcano in Costa Rica with misty clouds and lush rainforest"
                        className="object-cover"
                        width={1600}
                        height={900}
                        priority
                    />
                </div>
            </div>
        </section>
        <ArticleSection />

        </div>
    )
}
