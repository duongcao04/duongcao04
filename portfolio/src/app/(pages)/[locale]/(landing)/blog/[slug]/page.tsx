import React from 'react'

import { BreadcrumbItem, Breadcrumbs, Chip } from '@heroui/react'
import { Image } from 'antd'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

import ReturnBackButton from '@/components/common/ReturnBackButton'
import CustomMDX from '@/components/mdx-remote'

import { GET } from '@/app/api/posts/[slug]/route'
import NotFound from '@/app/not-found'
import envConfig from '@/config/config'
import { MotionH1 } from '@/lib/motion'
import { Post } from '@/models/Post'

import RelatedPosts from './_components/RelatedPosts'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
    const posts: { slug: string }[] = await fetch(
        `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
    ).then((r) => r.json())
    return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
    const data = await GET(params.slug)
    const post: Post = await data.json()

    if (!post) {
        return { title: 'Post Not Found' }
    }
    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: post.thumbnail,
        },
    }
}

function BreadcrumbsImpl() {
    return (
        <Breadcrumbs>
            <BreadcrumbItem startContent={<HomeIcon />}>Home</BreadcrumbItem>
            <BreadcrumbItem>Blog</BreadcrumbItem>
            <BreadcrumbItem>What is Next.js?</BreadcrumbItem>
        </Breadcrumbs>
    )
}
export default async function BlogDetailPage({ params }: Props) {
    const data = await GET(params.slug)
    const post: Post = await data.json()

    if (!post) return NotFound()

    return (
        <div className="mb-24">
            <BreadcrumbsImpl />
            <section id="detail-page-heading" className="container mt-3">
                <ReturnBackButton />
                <MotionH1 className="mt-12 text-6xl font-lexendDeca font-semibold tracking-wider leading-normal bg-gradient-to-br from-primary-900 via-primary-600 to-primary-900 bg-clip-text text-transparent">
                    {post.title}
                </MotionH1>
                <div className="mt-32">
                    <p>Link</p>
                    <Link href={'https://shop.yangis.dev'}>View website</Link>
                </div>
            </section>

            <section className="mt-8">
                <div className="w-full aspect-video">
                    <Image
                        src={post?.thumbnail}
                        alt={post?.title}
                        className="w-full h-full aspect-video object-cover"
                        preview={false}
                    />
                </div>
            </section>
            <div className="max-w-screen-laptop mx-auto mt-16">
                <section>
                    <CustomMDX source={post?.content} />
                </section>
                <hr className="mt-24 mb-8" />
                <PostTags />
                <section className="mt-32">
                    <RelatedPosts slug={params.slug} />
                </section>
            </div>
        </div>
    )
}
function PostTags() {
    return (
        <div className="flex items-center justify-start gap-5">
            <p className="text-xl font-semibold">Post Tags:</p>
            <ul className="flex items-center justify-start gap-3 flex-wrap">
                {['#Useful', '#Website', '#Coding', '#Technology'].map(
                    (tag, index) => (
                        <li key={index}>
                            <Chip
                                classNames={{
                                    base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                                    content:
                                        'drop-shadow shadow-black text-white',
                                }}
                                size="lg"
                                variant="shadow"
                            >
                                {tag}
                            </Chip>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}
