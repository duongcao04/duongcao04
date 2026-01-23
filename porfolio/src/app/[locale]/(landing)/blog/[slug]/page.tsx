'use client'

import {
    Avatar,
    Button,
    Card,
    CardBody,
    Divider,
    Image,
    Tooltip,
} from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    ArrowLeft,
    Calendar,
    Clock,
    Facebook,
    Linkedin,
    Share2,
    Twitter,
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// You would likely import these from your shared components
import { HtmlViewer, TableOfContents, useHtmlParser } from '@/features/html'

import { dateFormatter } from '@/lib/dayjs'
import { HeroButton } from '@/shared/components'
import { IPost } from '@/shared/interfaces'
import { postQueries } from '@/shared/queries'

import NotFound from './not-found'
import BlogDetailSkeleton from './skeleton'

// --- ANIMATION VARIANTS ---
const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const itemVar = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

export default function BlogDetailPage() {
    const params = useParams()
    const slug = params?.slug as string
    const {
        data: post,
        isLoading,
        isFetching,
    } = useQuery({ ...postQueries.detail(slug) })
    const loadingPost = isLoading || isFetching
    // Parse content for TOC
    const { activeId, toc } = useHtmlParser(post?.content ?? '')

    // Reading Progress Bar
    const { scrollYProgress } = useScroll()
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

    if (loadingPost) return <BlogDetailSkeleton />
    if (!post) return <NotFound />

    return (
        <>
            {/* READING PROGRESS BAR (Fixed at top) */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
                style={{ scaleX }}
            />

            <motion.article
                initial="hidden"
                animate="visible"
                variants={containerVar}
                className="relative z-10 px-4 lg:px-8 py-24"
            >
                <div className="container mx-auto max-w-7xl">
                    {/* --- TOP NAV --- */}
                    <motion.div variants={itemVar} className="mb-12">
                        <Link href="/blog" className="inline-block">
                            <HeroButton
                                variant="light"
                                className="text-text-subdued hover:text-text-default gap-2 group"
                                startContent={
                                    <ArrowLeft
                                        size={20}
                                        className="group-hover:-translate-x-1 transition-transform"
                                    />
                                }
                            >
                                Back to Journal
                            </HeroButton>
                        </Link>
                    </motion.div>

                    {/* --- HEADER --- */}
                    <motion.header
                        variants={itemVar}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 text-sm text-primary-400 mb-6 font-semibold uppercase tracking-widest">
                            {post.tags?.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full"
                                >
                                    {tag.display_name}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-text-default via-text-default/90 to-text-default/80 mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-default-500">
                            <div className="flex items-center gap-2">
                                <Avatar
                                    src={post.author?.avatar_url ?? ''}
                                    size="sm"
                                />
                                <span className="text-text-subdued">
                                    {post.author?.name}
                                </span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-default-700" />
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{dateFormatter(post.published_at)}</span>
                            </div>
                            <span className="w-1 h-1 rounded-full bg-default-700" />
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{post.reading_time}</span>
                            </div>
                        </div>
                    </motion.header>

                    {/* --- HERO IMAGE --- */}
                    <motion.div
                        variants={itemVar}
                        className="max-w-5xl mx-auto mb-20"
                    >
                        <div className="relative aspect-21/9 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/10">
                            <Image
                                src={post.thumbnail_url ?? ''}
                                alt={post.title}
                                classNames={{
                                    img: 'w-full h-full object-cover',
                                }}
                                removeWrapper
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-20" />
                        </div>
                    </motion.div>

                    {/* --- MAIN GRID --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                        {/* LEFT: SOCIALS (Desktop) */}
                        <motion.aside
                            variants={itemVar}
                            className="hidden lg:flex lg:col-span-1 flex-col gap-6 sticky top-32 h-fit"
                        >
                            <p className="text-xs font-bold text-default-500 uppercase writing-mode-vertical text-center mb-2">
                                Share
                            </p>
                            <Tooltip
                                content="Share on Twitter"
                                placement="right"
                            >
                                <Button
                                    isIconOnly
                                    variant="flat"
                                    radius="full"
                                    className="bg-white/5 hover:bg-white/10 text-default-500 hover:text-[#1DA1F2]"
                                >
                                    <Twitter size={20} />
                                </Button>
                            </Tooltip>
                            <Tooltip
                                content="Share on LinkedIn"
                                placement="right"
                            >
                                <Button
                                    isIconOnly
                                    variant="flat"
                                    radius="full"
                                    className="bg-white/5 hover:bg-white/10 text-default-500 hover:text-[#0A66C2]"
                                >
                                    <Linkedin size={20} />
                                </Button>
                            </Tooltip>
                            <Tooltip
                                content="Share on Facebook"
                                placement="right"
                            >
                                <Button
                                    isIconOnly
                                    variant="flat"
                                    radius="full"
                                    className="bg-white/5 hover:bg-white/10 text-default-500 hover:text-[#1877F2]"
                                >
                                    <Facebook size={20} />
                                </Button>
                            </Tooltip>
                            <Button
                                isIconOnly
                                variant="flat"
                                radius="full"
                                className="bg-white/5 hover:bg-white/10 text-default-500 hover:text-text-default mt-4"
                            >
                                <Share2 size={20} />
                            </Button>
                        </motion.aside>

                        {/* CENTER: CONTENT */}
                        <motion.div
                            variants={itemVar}
                            className="lg:col-span-8 max-w-5xl mx-auto"
                        >
                            <HtmlViewer content={post.content} />

                            <Divider className="my-12 bg-border-default" />

                            {/* Author Bio */}
                            <div className="bg-background-muted rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left border border-border-default">
                                <Avatar
                                    src={post.author?.avatar_url ?? ''}
                                    className="w-20 h-20 aspect-square!"
                                    classNames={{
                                        img: 'w-20 aspect-square!',
                                    }}
                                    isBordered
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-text-default mb-2">
                                        Written by {post.author?.name}
                                    </h3>
                                    <p className="text-default-500 mb-4 text-sm">
                                        Software Engineer passionate about
                                        building scalable web applications and
                                        intuitive user interfaces. Lover of
                                        clean code, biodiversity, and Japanese
                                        sports history.
                                    </p>
                                    <Button
                                        size="sm"
                                        variant="bordered"
                                        className="border-white/20 text-default-400 hover:text-text-default"
                                    >
                                        View Profile
                                    </Button>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: TOC (Desktop) */}
                        <motion.aside
                            variants={itemVar}
                            className="hidden lg:block lg:col-span-3"
                        >
                            <div className="sticky top-32 space-y-8">
                                <div>
                                    <h4 className="text-sm font-bold text-text-default uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                        Table of Contents
                                    </h4>
                                    <TableOfContents
                                        toc={toc}
                                        activeId={activeId}
                                    />
                                </div>

                                {/* Related Posts Preview */}
                                <div className="pt-8 border-t border-white/10">
                                    <h4 className="text-sm font-bold text-default-500 uppercase tracking-wider mb-4">
                                        Read Next
                                    </h4>
                                    <div className="flex flex-col gap-4">
                                        {post.related_posts?.map(
                                            (rp: IPost, i: number) => (
                                                <Link
                                                    key={i}
                                                    href={`/blog/${rp.slug}`}
                                                    className="group"
                                                >
                                                    <Card className="bg-transparent border border-border-default hover:bg-background-hovered transition-colors shadow-none">
                                                        <CardBody className="p-3">
                                                            <p className="text-sm font-medium text-text-subdued group-hover:text-primary-400 transition-colors line-clamp-2">
                                                                {rp.title}
                                                            </p>
                                                        </CardBody>
                                                    </Card>
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </motion.article>
        </>
    )
}
