'use client'

import { Card, CardBody, Skeleton } from '@heroui/react'

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
