'use client'

import { Card, Chip, Image, Skeleton } from '@heroui/react'
import { ArrowUpRightIcon } from 'lucide-react'

import { useRouter } from '@/i18n/navigation'
import { INTERNAL_URLS } from '@/lib'
import { HeroButton } from '@/shared/components'
import { IProject } from '@/shared/interfaces'

type WorkCardProps = {
    data: IProject
}
export const WorkCard = ({ data }: WorkCardProps) => {
    const router = useRouter()

    const CATE_DISPLAY_LIMIT = 2
    const visibleCategories = data.categories.slice(0, CATE_DISPLAY_LIMIT)
    const remainingCategories = data.categories.length - CATE_DISPLAY_LIMIT

    const TAG_DISPLAY_LIMIT = 2
    const visibleTags = data.tags.slice(0, TAG_DISPLAY_LIMIT)
    const remainingTags = data.tags.length - TAG_DISPLAY_LIMIT

    return (
        <Card
            key={data.id}
            isPressable
            className="group w-full border border-border-muted bg-background-muted hover:bg-background transition-all duration-500 overflow-hidden rounded-4xl shadow-2xl"
            onPress={() => {
                router.push(INTERNAL_URLS.workDetail(data.slug))
            }}
        >
            {/* 1. Image Area (Top 60%) */}
            <div className="w-full aspect-video overflow-hidden relative">
                <Image
                    removeWrapper
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={data.thumbnail_url ?? ''}
                    // Fallback image if main image fails
                    fallbackSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f12] via-[#0f0f12]/40 to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <div className="flex gap-2">
                        {/* 1. Render the visible categories */}
                        {visibleCategories.map((cate) => (
                            <div
                                key={cate.id}
                                className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg"
                            >
                                {cate.display_name}
                            </div>
                        ))}

                        {/* 2. Render the counter if there are extra items */}
                        {remainingCategories > 0 && (
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 rounded-full text-xs font-medium text-white shadow-lg">
                                +{remainingCategories}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Tags & Action Button */}
            <div className="px-6 flex items-center justify-start flex-wrap gap-2 mt-4 border-t border-white/5">
                {visibleTags.map((tag) => (
                    <Chip key={tag.id} size="sm" radius="sm" variant="flat">
                        {tag.display_name}
                    </Chip>
                ))}
                {remainingTags > 0 && (
                    <Chip size="sm" radius="sm" variant="flat">
                        +{remainingTags}
                    </Chip>
                )}
            </div>

            {/* 2. Content Area (Bottom 40%) */}
            <div className="pb-4 p-6 flex flex-col justify-between relative z-20 -mt-2">
                <div className="text-left space-y-2">
                    <h3 className="text-lg font-semibold text-text-default group-hover:text-primary transition-colors">
                        {data.title}
                    </h3>
                    <p className="text-sm text-text-subdued line-clamp-2 leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-start gap-4">
                    <HeroButton
                        variant="bordered"
                        size="sm"
                        className="border"
                        href={INTERNAL_URLS.workDetail(data.slug)}
                    >
                        <span className="text-xs">View details</span>
                    </HeroButton>
                    {data.deploy_url && (
                        <HeroButton
                            href={data.deploy_url}
                            linkProps={{
                                target: '_blank',
                                rel: 'noopener noreferrer',
                            }}
                            isIconOnly
                            radius="full"
                            size="sm"
                            variant="flat"
                        >
                            <ArrowUpRightIcon size={18} />
                        </HeroButton>
                    )}
                </div>
            </div>
        </Card>
    )
}

export const WorkCardSkeleton = () => {
    return (
        <Card className="w-full border border-border-muted bg-background-muted overflow-hidden rounded-4xl shadow-2xl">
            {/* 1. Image Area Skeleton */}
            <div className="w-full aspect-video relative">
                <Skeleton className="w-full h-full" />

                {/* Category Badges Overlay */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <Skeleton className="h-6 w-24 rounded-full bg-default-200/50" />
                    <Skeleton className="h-6 w-24 rounded-full bg-default-200/50" />
                </div>
            </div>

            {/* Tags Skeleton */}
            <div className="px-6 flex items-center gap-2 mt-4 border-t border-white/5 pt-2">
                <Skeleton className="h-6 w-16 rounded-lg" />
                <Skeleton className="h-6 w-20 rounded-lg" />
                <Skeleton className="h-6 w-12 rounded-lg" />
            </div>

            {/* 2. Content Area Skeleton */}
            <div className="p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                    {/* Title */}
                    <Skeleton className="h-7 w-3/5 rounded-lg" />

                    {/* Description (2 lines) */}
                    <div className="space-y-2">
                        <Skeleton className="h-3 w-full rounded-lg" />
                        <Skeleton className="h-3 w-4/5 rounded-lg" />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                    {/* View Details Button */}
                    <Skeleton className="h-8 w-28 rounded-lg" />
                    {/* Arrow Icon Button */}
                    <Skeleton className="h-8 w-8 rounded-full" />
                </div>
            </div>
        </Card>
    )
}
