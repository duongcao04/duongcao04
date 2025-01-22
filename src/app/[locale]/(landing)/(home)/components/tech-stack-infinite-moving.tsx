'use client'

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

import { type Technology } from '@/constants/techstack-list'

import ViteIcon from '../../../../../components/icons/skill-icons/vite-icon'

export default function TechStackInfiniteMoving({
    technology,
    tools,
}: {
    technology: Technology[]
    tools: Technology[]
}) {
    return (
        <div className="mt-8 flex flex-col items-center justify-center relative overflow-hidden space-y-4">
            <InfiniteMovingCards
                children={technology.map((item) => (
                    <li key={item.id} className="border-border">
                        <item.logo className="size-[80px]" />
                    </li>
                ))}
                direction="left"
                speed="normal"
                classNames={{
                    divWrapper: 'max-w-lg',
                    listWrapper: 'gap-8',
                }}
            />

            <InfiniteMovingCards
                children={tools.map((item) => (
                    <li key={item.id} className="size-[80px]">
                        <item.logo className="w-full h-full" />
                    </li>
                ))}
                direction="right"
                speed="normal"
                classNames={{
                    divWrapper: 'max-w-lg',
                    listWrapper: 'gap-8',
                }}
            />
        </div>
    )
}
