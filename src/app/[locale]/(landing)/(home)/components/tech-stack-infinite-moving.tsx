'use client'

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

import { type Technology } from '@/constants/techstack-list'

function TechStackInfiniteMoving({
    technology,
    tools,
}: {
    technology: Technology[]
    tools: Technology[]
}) {
    return (
        <div className="mt-8 flex flex-col items-center justify-center relative overflow-hidden space-y-3">
            <InfiniteMovingCards
                children={technology.map((item) => (
                    <li key={item.id} className="border-border">
                        <item.logo className="size-[64px]" />
                    </li>
                ))}
                direction="left"
                speed="normal"
                classNames={{
                    listWrapper: 'gap-8',
                }}
            />

            <InfiniteMovingCards
                children={tools.map((item) => (
                    <li key={item.id}>
                        <item.logo className="size-[64px]" />
                    </li>
                ))}
                direction="right"
                speed="normal"
                classNames={{
                    listWrapper: 'gap-8',
                }}
            />
        </div>
    )
}

export default TechStackInfiniteMoving
