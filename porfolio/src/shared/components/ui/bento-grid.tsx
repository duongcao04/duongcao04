'use client'

import { cn } from '@heroui/react'

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                // Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols (or 4 for denser bento)
                'grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto',
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                // Base styles for every cell
                'row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-0 bg-transparent justify-between flex flex-col space-y-4',
                className
            )}
        >
            {children}
        </div>
    )
}
