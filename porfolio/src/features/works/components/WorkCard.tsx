'use client'

import { Card, Chip, Image } from '@heroui/react'
import { ArrowUpRightIcon } from 'lucide-react'

import { HeroButton } from '@/shared/components'
import { IProject } from '@/shared/interfaces'

type WorkCardProps = {
    data: IProject
}
export const WorkCard = ({ data }: WorkCardProps) => {
    return (
        <Card
            key={data.id}
            isPressable
            className="group w-full border border-border-muted bg-background-muted hover:bg-background transition-all duration-500 overflow-hidden rounded-4xl shadow-2xl"
        >
            {/* 1. Image Area (Top 60%) */}
            <div className="w-full aspect-video overflow-hidden relative">
                <Image
                    removeWrapper
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={data.image}
                    // Fallback image if main image fails
                    fallbackSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f12] via-[#0f0f12]/40 to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <div className="bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg">
                        {data.category}
                    </div>
                </div>
            </div>

            {/* Tags & Action Button */}
            <div className="px-6 flex items-center justify-start flex-wrap gap-2 mt-4 border-t border-white/5">
                {data.tags.slice(0, 3).map((tag) => (
                    <Chip key={tag} size="sm" radius="sm" variant="flat">
                        {tag}
                    </Chip>
                ))}
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
                    <HeroButton variant="bordered" size="sm" className="border">
                        <span className="text-xs">View details</span>
                    </HeroButton>
                    <HeroButton
                        href={data.link}
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
                </div>
            </div>
        </Card>
    )
}
