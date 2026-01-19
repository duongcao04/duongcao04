'use client'

import { Skeleton } from '@heroui/react'

export default function BlogDetailSkeleton() {
    return (
        <div className="relative z-10 px-4 lg:px-8 py-24">
            <div className="container mx-auto max-w-7xl">
                {/* Nav Skeleton */}
                <div className="mb-12">
                    <Skeleton className="w-32 h-10 rounded-full opacity-30" />
                </div>

                {/* Header Skeleton */}
                <div className="max-w-4xl mx-auto flex flex-col items-center mb-16 space-y-6">
                    <div className="flex gap-2">
                        <Skeleton className="w-20 h-6 rounded-full opacity-40" />
                        <Skeleton className="w-20 h-6 rounded-full opacity-40" />
                    </div>
                    <Skeleton className="w-full h-12 md:h-16 rounded-2xl opacity-80" />
                    <Skeleton className="w-3/4 h-12 md:h-16 rounded-2xl opacity-80" />

                    <div className="flex gap-4 mt-4">
                        <Skeleton className="w-24 h-5 rounded-lg opacity-40" />
                        <Skeleton className="w-24 h-5 rounded-lg opacity-40" />
                    </div>
                </div>

                {/* Image Skeleton */}
                <div className="max-w-5xl mx-auto mb-20">
                    <Skeleton className="w-full aspect-21/9 rounded-3xl opacity-50" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                    {/* Left Sidebar */}
                    <div className="hidden lg:flex col-span-1 flex-col gap-4 mt-8">
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton
                                key={i}
                                className="w-10 h-10 rounded-full opacity-20"
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-6">
                        <Skeleton className="w-full h-4 rounded opacity-40" />
                        <Skeleton className="w-11/12 h-4 rounded opacity-40" />
                        <Skeleton className="w-full h-4 rounded opacity-40" />
                        <Skeleton className="w-4/5 h-4 rounded opacity-40" />
                        <Skeleton className="w-full h-64 rounded-xl opacity-20 my-8" />
                        <Skeleton className="w-full h-4 rounded opacity-40" />
                        <Skeleton className="w-full h-4 rounded opacity-40" />
                        <Skeleton className="w-full h-4 rounded opacity-40" />
                    </div>

                    {/* Right Sidebar */}
                    <div className="hidden lg:block lg:col-span-3 space-y-6">
                        <Skeleton className="w-32 h-6 rounded opacity-30 mb-4" />
                        {[1, 2, 3, 4].map((i) => (
                            <Skeleton
                                key={i}
                                className="w-full h-4 rounded opacity-20"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
