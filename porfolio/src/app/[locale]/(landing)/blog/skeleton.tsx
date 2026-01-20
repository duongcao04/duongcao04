'use client'

import { Skeleton } from '@heroui/react'

import { BlogCardSkeleton } from '@/features/blog'

export default function BlogPageSkeleton() {
    return (
        <div className="relative z-10 px-4 lg:px-8 py-24 min-h-screen">
            <div className="container mx-auto max-w-7xl">
                {/* Header Skeleton */}
                <div className="mb-16 max-w-3xl space-y-6">
                    <Skeleton className="w-24 h-6 rounded-full opacity-50" />
                    <div className="space-y-3">
                        <Skeleton className="w-3/4 h-14 rounded-xl opacity-80" />
                        <Skeleton className="w-1/2 h-14 rounded-xl opacity-80" />
                    </div>
                    <Skeleton className="w-full max-w-lg h-6 rounded-lg opacity-40" />
                </div>

                {/* Controls Skeleton */}
                <div className="mb-12 flex flex-col md:flex-row justify-between gap-6">
                    <Skeleton className="w-full md:w-96 h-12 rounded-xl opacity-30" />
                    <div className="flex gap-2">
                        <Skeleton className="w-20 h-10 rounded-full opacity-30" />
                        <Skeleton className="w-24 h-10 rounded-full opacity-30" />
                        <Skeleton className="w-20 h-10 rounded-full opacity-30" />
                    </div>
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6]?.map((item) => (
                        <BlogCardSkeleton key={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
