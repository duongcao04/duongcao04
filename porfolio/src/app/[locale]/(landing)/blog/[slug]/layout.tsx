import { Suspense } from 'react'

import { Metadata } from 'next'

import AppLoader from '@/app/loading'
import { createClient } from '@/lib/supabase/server'

// 1. Generate Static Params (Server-Side Build)
export async function generateStaticParams() {
    try {
        const supabase = createClient()

        // Fetch only slugs for published posts
        const { data: posts } = await supabase
            .from('posts')
            .select('slug')
            .eq('is_published', true)

        if (!posts) return []

        return posts.map((post) => ({
            slug: post.slug,
        }))
    } catch (error) {
        console.error('Error generating static params:', error)
        return []
    }
}

// 2. Generate Metadata (Server-Side SEO)
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    try {
        const { slug } = await params
        const supabase = createClient()

        // Fetch minimal data needed for SEO
        const { data: post } = await supabase
            .from('posts')
            .select('title, excerpt, thumbnail_url')
            .eq('slug', slug)
            .single()

        if (!post) {
            return {
                title: 'Post Not Found',
                description: 'The article you are looking for does not exist.',
            }
        }

        return {
            title: `${post.title} | Yangis.dev`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                // Supabase returns snake_case by default
                images: post.thumbnail_url ? [post.thumbnail_url] : [],
            },
        }
    } catch (error) {
        console.error('Error generating metadata:', error)
        return { title: 'Error Loading Post' }
    }
}

// 3. Layout Component
export default function DetailPostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense fallback={<AppLoader />}>
            <div className="-mt-20">
                <div className="min-h-screen w-full bg-white relative">
                    {/* Diagonal Cross Grid Top Background */}
                    <div
                        className="absolute inset-0 z-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
                linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
              `,
                            backgroundSize: '40px 40px',
                            WebkitMaskImage:
                                'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
                            maskImage:
                                'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
                        }}
                    />
                    {/* Content Wrapper */}
                    <div className="relative z-10">{children}</div>
                </div>
            </div>
        </Suspense>
    )
}
