import React from 'react'

import { Avatar, Spinner } from '@heroui/react'
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'
import { IconEye, IconMessageCircle } from '@tabler/icons-react'
import { Image } from 'antd'
import { HomeIcon } from 'lucide-react'
import { ImageNext } from 'next/image'

import CustomMDX from '@/components/mdx-remote'

import NotFound from '@/app/not-found'
import avatar from '@/assets/img/avatar.jpg'
import { Link } from '@/i18n/navigation'
import { firebaseService } from '@/lib/firebase/services'
import { MotionH1 } from '@/lib/motion'
import { Post } from '@/types/post'

import PostTags from './_components/PostTags'

export type Props = { params: Promise<{ slug: string }> }

const fetchData = async (slug: string) => {
    let loading
    let posts: Post[] = []
    try {
        loading = true
        posts = await firebaseService.getByQuery<Post>('posts', 'slug', slug, 1)
    } catch (error) {
        console.log(error)
    } finally {
        loading = false
    }

    return {
        data: posts[0],
        loading,
    }
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params
    const { data: post, loading } = await fetchData(slug)

    if (!post) return NotFound()

    if (loading)
        return (
            <div className="w-screen h-screen">
                <Spinner size="lg" />
            </div>
        )

    const postInteractions = [
        { name: 'Total view', icon: IconEye, value: '200' },
        { name: 'Comment', icon: IconMessageCircle, value: '200' },
    ]

    return (
        <div className="mb-24">
            <BreadcrumbsImpl postTitle={post.title} />
            <section id="detail-page-heading" className="container mt-10">
                <MotionH1 className="text-5xl font-lexendDeca font-bold tracking-wider leading-normal">
                    {post.title}
                </MotionH1>
                <div className="flex items-center justify-start gap-5"></div>
                <div className="mt-10 flex items-center justify-start gap-5">
                    <Avatar
                        isBordered
                        src="https://github.com/duongcao04/duongcao04/blob/master/portfolio/src/assets/img/avatar.jpg?raw=true"
                    />
                    <div>
                        <p>Cao Hải Dương</p>
                        <p className="text-xs">Web Developer</p>
                    </div>
                </div>
                <div className="mt-10 border-t border-b border-gray-200 py-3 flex items-center justify-start gap-7">
                    {postInteractions.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex items-center justify-start gap-1.5 text-gray-500"
                            >
                                <item.icon stroke={1.5} size={24} />
                                <p className="text-sm">{item.value}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className="mt-20 max-w-screen grid place-items-center">
                <div className="container">
                    <Image
                        src={post?.thumbnail}
                        alt={post?.title}
                        className="w-full h-full object-cover"
                        wrapperClassName="w-full"
                        preview={false}
                    />
                </div>
            </section>

            <div className="border-t border-gray-200 max-w-screen-laptop mx-auto mt-14 pt-10">
                <section>
                    <CustomMDX source={post?.content} />
                </section>
                <hr className="mt-24 mb-8" />
                <PostTags />
                <section className="mt-32">
                    {/* <RelatedPosts slug={params.slug} /> */}
                </section>
            </div>
        </div>
    )
}

function BreadcrumbsImpl({ postTitle }: { postTitle?: string }) {
    return (
        <Breadcrumbs>
            <BreadcrumbItem startContent={<HomeIcon />}>
                <Link href="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link href="/blog">Blog</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{postTitle || 'Loading...'}</BreadcrumbItem>
        </Breadcrumbs>
    )
}
