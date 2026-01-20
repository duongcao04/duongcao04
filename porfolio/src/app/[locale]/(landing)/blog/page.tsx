'use client'

import { useState } from 'react'

import { Button, Input } from '@heroui/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

import { BlogCard, BlogCardSkeleton } from '@/features/blog'

import { useDebounce } from '@/shared/hooks'
import { postQueries } from '@/shared/queries'

import { HeroButton } from '../../../../shared/components'

// --- ANIMATION VARIANTS ---
const containerVar = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVar = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

// Filter mappings: Label -> Database Value
const CATALOG_FILTERS = [
    { label: 'All', value: undefined },
    { label: 'Development', value: 'webdev' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'DevOps', value: 'devops' },
    { label: 'Tutorials', value: 'tutorial' },
]

export default function BlogPage() {
    // Local State
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCatalog, setSelectedCatalog] = useState<string | undefined>(
        undefined
    )
    const [page, setPage] = useState(1)

    // Debounce Search (Wait 500ms before refetching)
    const debouncedSearch = useDebounce(searchQuery, 500)

    // Data Fetching
    const {
        data: { data: posts, count: totalPages },
        isLoading,
    } = useSuspenseQuery({
        ...postQueries.list({
            page,
            pageSize: 6, // 6 cards per page
            search: debouncedSearch,
            catalog: selectedCatalog,
        }),
    })

    // Handlers
    const handleSearchChange = (val: string) => {
        setSearchQuery(val)
        setPage(1) // Reset to page 1 on new search
    }

    const handleCategoryChange = (cat: string | undefined) => {
        setSelectedCatalog(cat)
        setPage(1) // Reset to page 1 on new filter
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVar}
            className="relative z-10 px-4 lg:px-8 py-24 min-h-screen"
        >
            <div className="container mx-auto max-w-7xl">
                {/* --- HERO SECTION --- */}
                <motion.header variants={itemVar} className="mb-16 max-w-3xl">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 rounded-full border border-purple-500/20">
                        The Journal
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-text-default via-text-default/90 to-text-default/80 mb-4 pb-2">
                        Thoughts, tutorials, & insights.
                    </h1>
                    <p className="text-xl text-text-subdued leading-relaxed">
                        Exploring the latest in web development, design systems,
                        and software engineering.
                    </p>
                </motion.header>

                {/* --- CONTROLS --- */}
                <motion.div variants={itemVar} className="mb-12 space-y-6">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search Bar */}
                        <div className="w-full md:w-96">
                            <Input
                                classNames={{
                                    base: 'max-w-full sm:max-w-[20rem] h-12',
                                    mainWrapper: 'h-full',
                                    input: 'text-small',
                                    inputWrapper:
                                        'h-full font-normal text-text-subdued bg-default-400/20 dark:bg-default-500/20',
                                }}
                                placeholder="Search articles..."
                                size="sm"
                                startContent={<Search size={18} />}
                                type="search"
                                value={searchQuery}
                                onValueChange={handleSearchChange}
                                isClearable
                                onClear={() => handleSearchChange('')}
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
                            {CATALOG_FILTERS?.map((cat) => (
                                <HeroButton
                                    key={cat.label}
                                    onClick={() =>
                                        handleCategoryChange(cat.value)
                                    }
                                    color={
                                        selectedCatalog === cat.value
                                            ? 'primary'
                                            : 'default'
                                    }
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        selectedCatalog === cat.value
                                            ? ''
                                            : 'bg-transparent text-text-subdued hover:bg-background-hovered hover:text-text-default'
                                    }`}
                                >
                                    {cat.label}
                                </HeroButton>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* --- POSTS GRID --- */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6]?.map((item) => (
                            <BlogCardSkeleton key={item} />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        variants={containerVar}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {posts.length > 0 ? (
                            posts?.map((post) => (
                                <motion.div key={post.id} variants={itemVar}>
                                    <BlogCard post={post} />
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-text-subdued">
                                <div className="inline-block p-4 rounded-full bg-default-100/50 mb-4">
                                    <Search size={32} />
                                </div>
                                <p>
                                    No articles found matching &quot;
                                    {searchQuery}&quot;.
                                </p>
                                <Button
                                    variant="light"
                                    color="primary"
                                    className="mt-4"
                                    onClick={() => {
                                        setSearchQuery('')
                                        setSelectedCatalog(undefined)
                                    }}
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* --- PAGINATION --- */}
                {!isLoading && posts.length > 0 && (
                    <motion.div
                        variants={itemVar}
                        className="mt-16 flex justify-center gap-4 items-center"
                    >
                        <Button
                            isIconOnly
                            variant="flat"
                            isDisabled={page === 1}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            className="bg-white/5 hover:bg-white/10"
                        >
                            <ChevronLeft size={20} />
                        </Button>

                        <span className="text-sm text-text-subdued font-mono">
                            Page {page} of {totalPages}
                        </span>

                        <Button
                            isIconOnly
                            variant="flat"
                            isDisabled={page >= (totalPages ?? 0)}
                            onClick={() => setPage((p) => p + 1)}
                            className="bg-white/5 hover:bg-white/10"
                        >
                            <ChevronRight size={20} />
                        </Button>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}
