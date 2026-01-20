'use client'

import {
    Card,
    CardBody,
    CardFooter,
    Chip,
    Image,
    Skeleton,
} from '@heroui/react'
import { ArrowUpRight, Calendar } from 'lucide-react'
import Link from 'next/link'

import { dateFormatter } from '@/lib/dayjs'
import { IPost } from '@/shared/interfaces'

export function BlogCard({ post }: { post: IPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="block h-full">
            <Card className="h-full bg-background/60 backdrop-blur-md border border-border-muted hover:border-border-default transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-900/20">
                <CardBody className="p-0 overflow-hidden relative aspect-4/3">
                    <Image
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        src={post.thumbnail_url ?? ''}
                        removeWrapper
                        radius="none"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />

                    {/* Floating Tag */}
                    {post?.tags && (
                        <div className="absolute top-4 left-4 z-20">
                            {post?.tags?.map((it) => {
                                return (
                                    <Chip
                                        key={it.id}
                                        size="sm"
                                        variant="solid"
                                        classNames={{
                                            base: 'bg-black/50 backdrop-blur-md border border-white/10 text-white',
                                        }}
                                    >
                                        {it?.display_name}
                                    </Chip>
                                )
                            })}
                        </div>
                    )}
                </CardBody>

                <CardFooter className="flex flex-col items-start p-6 gap-4">
                    <div className="w-full space-y-3">
                        <div className="flex items-center justify-between text-xs text-default-500">
                            <span className="flex items-center gap-1.5">
                                <Calendar size={12} />
                                {dateFormatter(post.published_at)}
                            </span>
                            <span>{post.reading_time}</span>
                        </div>

                        <h3 className="text-xl font-bold text-text-default group-hover:text-primary-400 transition-colors line-clamp-2">
                            {post.title}
                        </h3>

                        <p className="text-text-subdued text-sm line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="w-full pt-4 mt-auto border-t border-white/5 flex items-center text-sm font-medium text-text-subdued group-hover:text-primary-400 transition-colors">
                        Read Article
                        <ArrowUpRight
                            size={16}
                            className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                        />
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export function BlogCardSkeleton() {
    return (
        <Card className="h-105 bg-white/5 border border-white/5">
            <div className="h-60">
                <Skeleton className="w-full h-full opacity-40" />
            </div>
            <CardBody className="p-6 space-y-4">
                <div className="flex justify-between">
                    <Skeleton className="w-24 h-4 rounded opacity-30" />
                    <Skeleton className="w-16 h-4 rounded opacity-30" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="w-full h-6 rounded opacity-60" />
                    <Skeleton className="w-2/3 h-6 rounded opacity-60" />
                </div>
                <div className="space-y-2 pt-2">
                    <Skeleton className="w-full h-3 rounded opacity-20" />
                    <Skeleton className="w-full h-3 rounded opacity-20" />
                    <Skeleton className="w-4/5 h-3 rounded opacity-20" />
                </div>
            </CardBody>
        </Card>
    )
}
