'use client'

import { useCallback, useEffect, useState } from 'react'

import { Button, Skeleton } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

// Hooks & Components
import { BlogCard } from '@/features/blog'

// Using the modern card we built
import { postQueries } from '@/shared/queries'

// If you specifically want the old ArticleCard, import it instead,
// but BlogCard is likely the better fit for the new style.

export default function BlogAndArticle() {
    // 1. Fetch Data
    const { data, isLoading } = useQuery({
        ...postQueries.list({ pageSize: 6, page: 1 }),
    })
    const posts = data?.data ?? []

    // 2. Carousel Setup
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: false,
        skipSnaps: false,
        dragFree: true,
    })

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onSelect = useCallback((api: typeof emblaApi) => {
        setPrevBtnDisabled(!api?.canScrollPrev())
        setNextBtnDisabled(!api?.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )

    return (
        <section className="relative z-10 py-24 border-t border-white/5 bg-white/1 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-lg bg-secondary-500/10 border border-secondary-500/20 text-secondary-500">
                                <BookOpen size={16} />
                            </span>
                            <span className="text-sm font-semibold tracking-widest text-secondary-500 uppercase">
                                The Journal
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-default-500 pb-2">
                            Latest Insights
                        </h2>

                        <p className="text-lg text-default-500 leading-relaxed max-w-xl">
                            Read engaging blogs and insightful articles with
                            tips, stories, and knowledge to inspire and connect
                            you daily.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <Button
                            isIconOnly
                            variant="bordered"
                            radius="full"
                            isDisabled={prevBtnDisabled}
                            onPress={scrollPrev}
                            className="border-default-200 text-default-500 hover:text-foreground hover:border-foreground disabled:opacity-30"
                        >
                            <ArrowLeft size={20} />
                        </Button>
                        <Button
                            isIconOnly
                            variant="bordered"
                            radius="full"
                            isDisabled={nextBtnDisabled}
                            onPress={scrollNext}
                            className="border-default-200 text-default-500 hover:text-foreground hover:border-foreground disabled:opacity-30"
                        >
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>

                {/* --- CAROUSEL --- */}
                {isLoading ? (
                    <div className="flex gap-6 overflow-hidden">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="min-w-87.5 w-87.5 h-100">
                                <Skeleton className="w-full h-full rounded-3xl opacity-20" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        className="overflow-hidden -mx-4 px-4 py-4"
                        ref={emblaRef}
                    >
                        <div className="flex gap-6 touch-pan-y">
                            {posts?.map((post, idx) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: idx * 0.1,
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true }}
                                    className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                                >
                                    <div className="h-full transform hover:-translate-y-2 transition-transform duration-500">
                                        <BlogCard post={post} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="text-sm font-semibold text-secondary-500 hover:text-secondary-400 transition-colors"
                    >
                        View All Articles &rarr;
                    </Link>
                </div>
            </div>
        </section>
    )
}
