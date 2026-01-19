'use client'

import { useRef } from 'react'

import { Card, CardBody, Chip, Divider, Image, Skeleton } from '@heroui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import parse from 'html-react-parser'
import {
    ArrowLeft,
    BookOpenIcon,
    CheckCircle2,
    ExternalLink,
    Github,
    Layers,
    Zap,
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { HtmlViewer, TableOfContents, useHtmlParser } from '@/features/html'

import { INTERNAL_URLS } from '@/lib'
import { dateFormatter } from '@/lib/dayjs'
import { HeroButton } from '@/shared/components'
import { useProjectDetail } from '@/shared/queries'

import NotFound from './not-found'

// --- ANIMATION VARIANTS ---
const containerVar = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
}

const itemVar = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

export default function WorkDetailPage() {
    const params = useParams()
    const slug = params?.slug as string

    const { data: project, isLoading, isFetching } = useProjectDetail(slug)
    const loadingProject = isLoading || isFetching

    const { activeId, toc } = useHtmlParser(project?.content ?? '')

    // Parallax logic for Hero Image
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    })
    const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

    if (!loadingProject && !project) {
        return <NotFound />
    }

    if (loadingProject) {
        return <WorkDetailSkeleton />
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVar}
            className="relative z-10 px-4 lg:px-8 py-24"
        >
            <motion.div className="container mx-auto max-w-7xl">
                {/* --- NAVIGATION --- */}
                <motion.div variants={itemVar} className="mb-8">
                    <Link href={INTERNAL_URLS.work} className="inline-block">
                        <HeroButton
                            variant="light"
                            className="text-text-subdued hover:text-text-default transition-colors gap-2 group"
                            startContent={
                                <ArrowLeft
                                    size={20}
                                    className="group-hover:-translate-x-1 transition-transform"
                                />
                            }
                        >
                            Back to Projects
                        </HeroButton>
                    </Link>
                </motion.div>

                {/* --- HEADER --- */}
                <motion.header variants={itemVar} className="mb-16 max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 mb-6 text-sm font-medium tracking-wide">
                        <div className="flex gap-2">
                            {/* 1. Render the visible categories */}
                            {project?.categories?.map((cate) => (
                                <div
                                    key={cate.id}
                                    className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg"
                                >
                                    {cate.display_name}
                                </div>
                            ))}
                        </div>
                        {project?.started_at && (
                            <span className="text-default-500 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-default-700" />
                                {dateFormatter(project?.started_at)} -{' '}
                                {project?.ended_at
                                    ? dateFormatter(project?.ended_at)
                                    : 'Present'}
                            </span>
                        )}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-text-default via-text-default/80 to-text-subdued mb-8 leading-[1.1]">
                        {project?.title}
                    </h1>

                    <p className="text-lg md:text-2xl text-text-subdued max-w-4xl leading-relaxed">
                        {project?.description}
                    </p>
                </motion.header>

                {/* --- HERO IMAGE (Parallax) --- */}
                <motion.div
                    variants={itemVar}
                    ref={targetRef}
                    className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/10 mb-24 relative bg-default-900/50 group"
                >
                    <motion.div
                        style={{ y: imageY, opacity: imageOpacity }}
                        className="w-full h-full"
                    >
                        <Image
                            src={project?.thumbnail_url ?? ''}
                            alt={project?.title}
                            removeWrapper
                            classNames={{
                                img: 'w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700',
                            }}
                        />
                    </motion.div>
                    {/* Gloss Overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </motion.div>

            {/* --- CONTENT GRID --- */}
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* FIX: Added col-span-4 to the TOC container */}
                <motion.div
                    variants={itemVar}
                    className="relative hidden lg:block lg:col-span-3"
                >
                    {/* 3. This div now sticks because its parent (motion.div) is tall */}
                    <div className="sticky top-28">
                        <TableOfContents toc={toc} activeId={activeId} />
                    </div>
                </motion.div>
                {/* LEFT: MAIN CONTENT */}
                <div className="lg:col-span-6 space-y-12">
                    {/* 1. The Story */}
                    {project?.long_description && (
                        <motion.section variants={itemVar}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="block p-2 rounded-lg bg-primary-50 border border-border-muted">
                                    <Layers
                                        className="text-primary-500"
                                        size={24}
                                    />
                                </span>
                                <h2 className="text-2xl font-bold">
                                    The Story
                                </h2>
                            </div>

                            <HtmlViewer content={project?.long_description} />
                        </motion.section>
                    )}

                    {/* Main content (HTML Viewer + Inner Sticky TOC) */}
                    {project?.content && (
                        <motion.section variants={itemVar}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="block p-2 rounded-lg bg-secondary-50 border border-border-muted">
                                    <BookOpenIcon
                                        className="text-secondary-500"
                                        size={24}
                                    />
                                </span>
                                <h2 className="text-2xl font-bold">
                                    About Project
                                </h2>
                            </div>
                            <HtmlViewer content={project?.content} />
                        </motion.section>
                    )}

                    {/* 2. Challenge & Solution */}
                    {(project?.challenge || project?.solution) && (
                        <motion.section
                            variants={itemVar}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {project?.challenge && (
                                <Card className="bg-background-muted border border-red-500/10 hover:border-red-500/30 transition-colors">
                                    <CardBody className="p-8">
                                        <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                            The Challenge
                                        </h3>
                                        <div className="text-text-default leading-relaxed">
                                            {parse(project.challenge)}
                                        </div>
                                    </CardBody>
                                </Card>
                            )}
                            {project?.solution && (
                                <Card className="bg-background-muted border border-emerald-500/10 hover:border-emerald-500/30 transition-colors">
                                    <CardBody className="p-8">
                                        <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                            The Solution
                                        </h3>
                                        <div className="text-text-default leading-relaxed">
                                            {parse(project.solution)}
                                        </div>
                                    </CardBody>
                                </Card>
                            )}
                        </motion.section>
                    )}

                    {/* 3. Key Features */}
                    {project?.features && (
                        <motion.section variants={itemVar}>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    <Zap
                                        className="text-yellow-400"
                                        size={24}
                                    />
                                </span>
                                <h2 className="text-2xl font-bold">
                                    Key Features
                                </h2>
                            </div>
                            {/* Fixed: Render features correctly */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Split feature string by newline if it's a string, or map if array */}
                                {(typeof project.features === 'string'
                                    ? (project.features as string).split('\n')
                                    : project.features
                                ).map((feature: string, i: number) => (
                                    <Card
                                        key={i}
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/6 transition-colors group"
                                    >
                                        <CheckCircle2
                                            className="text-purple-500 shrink-0 mt-1 group-hover:scale-110 transition-transform"
                                            size={20}
                                        />
                                        <span className="text-text-default font-medium">
                                            {feature}
                                        </span>
                                    </Card>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>

                {/* RIGHT: STICKY SIDEBAR */}
                <div className="lg:col-span-3 relative h-full">
                    <motion.div
                        variants={itemVar}
                        className="sticky top-24 h-fit space-y-8"
                    >
                        {/* Project Meta Card */}
                        <Card className="bg-background backdrop-blur-md border border-border-default shadow-sm">
                            <CardBody className="p-6 space-y-5">
                                {/* Action Buttons */}
                                {(project?.deploy_url ||
                                    project?.repository_url) && (
                                    <>
                                        <div className="flex flex-col space-y-3">
                                            {project?.deploy_url && (
                                                <HeroButton
                                                    href={project?.deploy_url}
                                                    linkProps={{
                                                        target: '_blank',
                                                    }}
                                                    className="font-bold w-full h-12 text-md shadow-md hover:shadow-primary-500/20 transition-shadow"
                                                    endContent={
                                                        <ExternalLink
                                                            size={18}
                                                        />
                                                    }
                                                    radius="full"
                                                >
                                                    Visit Live Site
                                                </HeroButton>
                                            )}
                                            {project?.repository_url && (
                                                <HeroButton
                                                    href={
                                                        project?.repository_url
                                                    }
                                                    variant="bordered"
                                                    className="border-white/20 text-text-subdued w-full h-12 text-md hover:bg-white/10"
                                                    startContent={
                                                        <Github size={20} />
                                                    }
                                                    radius="full"
                                                >
                                                    View Source
                                                </HeroButton>
                                            )}
                                        </div>

                                        <Divider className="bg-text-muted" />
                                    </>
                                )}

                                {/* Metadata */}
                                <div className="space-y-6">
                                    {project?.services && (
                                        <div>
                                            <p className="text-xs text-default-500 uppercase tracking-widest font-semibold mb-2">
                                                Services
                                            </p>
                                            <p className="text-lg text-text-default font-medium">
                                                {/* Handle Array or String */}
                                                {Array.isArray(project.services)
                                                    ? project.services.join(
                                                          ', '
                                                      )
                                                    : project.services}
                                            </p>
                                        </div>
                                    )}
                                    {project?.platform && (
                                        <div>
                                            <p className="text-xs text-default-500 uppercase tracking-widest font-semibold mb-2">
                                                Platform
                                            </p>
                                            <p className="text-lg text-text-default font-medium">
                                                {project.platform}
                                            </p>
                                        </div>
                                    )}
                                    {project?.client && (
                                        <div>
                                            <p className="text-xs text-default-500 uppercase tracking-widest font-semibold mb-2">
                                                Client
                                            </p>
                                            <p className="text-lg text-text-default font-medium">
                                                {project.client}
                                            </p>
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-xs text-default-500 uppercase tracking-widest font-semibold mb-3">
                                            Tags
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project?.tags?.map((tag) => (
                                                <Chip
                                                    key={tag.id}
                                                    size="sm"
                                                    radius="sm"
                                                    variant="flat"
                                                >
                                                    {tag.display_name}
                                                </Chip>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* CTA */}
                        <div className="p-6 rounded-3xl bg-linear-to-b from-primary-700/20 to-background border border-primary-500/60 text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h4 className="text-text-default font-bold mb-2 relative z-10">
                                Like what you see?
                            </h4>
                            <p className="text-text-subdued text-sm mb-4 relative z-10">
                                Let&lsquo;s build something extraordinary
                                together.
                            </p>
                            <Link href="/contact" className="relative z-10">
                                <span className="text-primary-500 font-semibold hover:text-primary-500 text-sm flex items-center justify-center gap-1 transition-colors">
                                    Start a conversation &rarr;
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export function WorkDetailSkeleton() {
    return (
        <div className="relative z-10 px-4 lg:px-8 py-24">
            <div className="container mx-auto max-w-7xl">
                {/* --- NAVIGATION SKELETON --- */}
                <div className="mb-8">
                    <Skeleton className="w-40 h-10 rounded-full opacity-40" />
                </div>

                {/* --- HEADER SKELETON --- */}
                <header className="mb-16 max-w-4xl">
                    {/* Categories & Date */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Skeleton className="w-24 h-6 rounded-full opacity-50" />
                        <Skeleton className="w-24 h-6 rounded-full opacity-50" />
                        <Skeleton className="w-32 h-6 rounded-full opacity-30" />
                    </div>

                    {/* Title */}
                    <div className="space-y-4 mb-8">
                        <Skeleton className="w-3/4 h-12 md:h-16 rounded-xl" />
                        <Skeleton className="w-1/2 h-12 md:h-16 rounded-xl" />
                    </div>

                    {/* Description */}
                    <div className="space-y-3 max-w-4xl">
                        <Skeleton className="w-full h-5 rounded-lg opacity-60" />
                        <Skeleton className="w-11/12 h-5 rounded-lg opacity-60" />
                        <Skeleton className="w-4/5 h-5 rounded-lg opacity-60" />
                    </div>
                </header>

                {/* --- HERO IMAGE SKELETON --- */}
                <Skeleton className="w-full aspect-video rounded-3xl mb-24 opacity-80" />
            </div>

            {/* --- CONTENT GRID SKELETON --- */}
            <div className="container mx-auto max-w-7xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* LEFT: TOC SKELETON (Hidden on mobile) */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-28 space-y-6">
                            <Skeleton className="w-32 h-6 rounded-lg opacity-40" />
                            <div className="space-y-4 pl-4 border-l border-white/10">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Skeleton
                                        key={i}
                                        className="w-full h-4 rounded-lg opacity-30"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CENTER: MAIN CONTENT SKELETON */}
                    <div className="lg:col-span-6 space-y-12">
                        {/* Story / About Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 mb-8">
                                <Skeleton className="w-10 h-10 rounded-lg" />
                                <Skeleton className="w-40 h-8 rounded-lg" />
                            </div>
                            <div className="space-y-4">
                                <Skeleton className="w-full h-4 rounded opacity-50" />
                                <Skeleton className="w-full h-4 rounded opacity-50" />
                                <Skeleton className="w-5/6 h-4 rounded opacity-50" />
                                <Skeleton className="w-full h-40 rounded-xl opacity-30 mt-4" />
                                <Skeleton className="w-full h-4 rounded opacity-50" />
                                <Skeleton className="w-4/5 h-4 rounded opacity-50" />
                            </div>
                        </div>

                        {/* Challenge & Solution Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2].map((i) => (
                                <Card
                                    key={i}
                                    className="bg-background-muted/50 border-transparent shadow-none"
                                >
                                    <CardBody className="p-8 space-y-4">
                                        <Skeleton className="w-32 h-6 rounded-lg opacity-70" />
                                        <Skeleton className="w-full h-24 rounded-lg opacity-40" />
                                    </CardBody>
                                </Card>
                            ))}
                        </div>

                        {/* Features Grid */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 mb-8">
                                <Skeleton className="w-10 h-10 rounded-lg" />
                                <Skeleton className="w-40 h-8 rounded-lg" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <Skeleton
                                        key={i}
                                        className="w-full h-16 rounded-2xl opacity-40"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SIDEBAR SKELETON */}
                    <div className="lg:col-span-3 relative h-full">
                        <div className="sticky top-24 space-y-8">
                            <Card className="bg-background/50 border-white/5">
                                <CardBody className="p-6 space-y-8">
                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <Skeleton className="w-full h-12 rounded-full" />
                                        <Skeleton className="w-full h-12 rounded-full opacity-50" />
                                    </div>

                                    <div className="my-6">
                                        <Skeleton className="w-full h-px opacity-20" />
                                    </div>

                                    {/* Metadata Fields */}
                                    <div className="space-y-6">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i}>
                                                <Skeleton className="w-20 h-3 rounded-md mb-2 opacity-40" />
                                                <Skeleton className="w-32 h-5 rounded-md opacity-80" />
                                            </div>
                                        ))}

                                        {/* Tags */}
                                        <div>
                                            <Skeleton className="w-16 h-3 rounded-md mb-3 opacity-40" />
                                            <div className="flex flex-wrap gap-2">
                                                {[1, 2, 3, 4].map((tag) => (
                                                    <Skeleton
                                                        key={tag}
                                                        className="w-16 h-7 rounded-lg opacity-50"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            {/* CTA Skeleton */}
                            <Skeleton className="w-full h-32 rounded-3xl opacity-30" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
