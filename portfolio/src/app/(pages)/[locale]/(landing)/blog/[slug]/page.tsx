import React from 'react'

import { Avatar, Spinner } from '@heroui/react'
import { IconEye, IconMessageCircle } from '@tabler/icons-react'
import { Image } from 'antd'
import { HomeIcon } from 'lucide-react'
import { getLocale } from 'next-intl/server'
import ReactMarkdown from 'react-markdown'

import CustomizeBreadcrumbs from '@/components/common/CustomizeBreadcrumbs'

import NotFound from '@/app/not-found'
import { firebaseService } from '@/lib/firebase/services'
import { MotionH1 } from '@/lib/motion'
import { Post } from '@/types/post'
import { formatSemiFullDate } from '@/utils/format'

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
    const locale = await getLocale()
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

    const breadcrumbs = [
        {
            href: '',
            label: 'a',
            icon: HomeIcon,
        },
        {
            href: '',
            label: 'a',
            icon: HomeIcon,
        },
    ]

    return (
        <div className="mb-24">
            <section id="detail-page-heading" className="container mt-10">
                <CustomizeBreadcrumbs data={breadcrumbs} />
                <MotionH1 className="text-lg tablet:text-5xl font-lexendDeca font-bold tracking-wider leading-normal">
                    {post.title}
                </MotionH1>
                <p className="mt-10 space-x-2">
                    <span>{formatSemiFullDate(post.createdAt, locale)}</span>
                    <span>•</span>
                    <span>5 min read</span>
                </p>
                <div className="mt-7 flex items-center justify-start gap-5">
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
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => (
                                <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-6 pb-3 border-b border-gray-200">
                                    {children}
                                </h1>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-5 tracking-tight">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-gray-700 leading-7 mb-6 text-[16px]">
                                    {children}
                                </p>
                            ),
                            code: ({ children }) => (
                                <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-x-auto my-6">
                                    <code className="text-sm font-mono text-gray-800 leading-relaxed">
                                        {children}
                                    </code>
                                </pre>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-semibold text-gray-900">
                                    {children}
                                </strong>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 my-6 rounded-r-lg">
                                    <div className="text-gray-800 italic">
                                        {children}
                                    </div>
                                </blockquote>
                            ),
                            ul: ({ children }) => (
                                <ul className="space-y-3 my-6 text-gray-700">
                                    {children}
                                </ul>
                            ),
                            li: ({ children }) => (
                                <li className="leading-7">{children}</li>
                            ),
                            hr: () => (
                                <hr className="border-0 h-px bg-gray-200 my-12" />
                            ),
                            a: ({ href, children }) => (
                                <a
                                    href={href}
                                    className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {children}
                                </a>
                            ),
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
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
