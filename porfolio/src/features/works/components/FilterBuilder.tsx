'use client'

import { Chip, Skeleton } from '@heroui/react'

import { ScrollArea, ScrollBar } from '@/shared/components'
import { useCategories } from '@/shared/queries'

export const FilterBuilder = () => {
    const { data: categories, isLoading, isFetching } = useCategories()
    const loadingCategories = isLoading || isFetching

    return (
        <ScrollArea className="pb-3">
            <ScrollBar orientation="horizontal" />
            {!loadingCategories && (
                <div className="flex items-center justify-center gap-2">
                    {categories?.map((cate, index) => (
                        <Chip
                            key={cate.id}
                            variant="bordered"
                            className={`cursor-pointer transition-all border hover:border-purple-500/50 hover:bg-white/5 ${
                                index === 0
                                    ? 'bg-white/10 border-purple-500/50 text-text-default'
                                    : 'border-white/10 text-default-400'
                            }`}
                            size="lg"
                        >
                            {cate.display_name}
                        </Chip>
                    ))}
                </div>
            )}
            {loadingCategories && <FilterBuilderSkeleton />}
        </ScrollArea>
    )
}

export const FilterBuilderSkeleton = () => {
    return (
        <div className="flex items-center justify-center gap-2">
            {/* Create 5 fake category chips with varying widths */}
            {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                    key={i}
                    className="h-8 w-24 rounded-full bg-white/5"
                    // Optional: Vary width slightly for realism
                    style={{ width: i % 2 === 0 ? '100px' : '130px' }}
                />
            ))}
        </div>
    )
}
