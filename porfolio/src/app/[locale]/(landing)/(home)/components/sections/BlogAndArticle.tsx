'use client'

import { useEffect, useRef } from 'react'

import { Button } from '@heroui/react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { ARTICLES } from '@/database/articles'
import { MotionDiv, MotionH2 } from '@/lib/motion'

import ArticleCard from '../cards/ArticleCard'
import SectionTag from '../section-tag'

export default function BlogAndArticle() {
    const articles = ARTICLES.concat(ARTICLES.concat(ARTICLES).concat(ARTICLES))

    const [emblaRef, emblaApi] = useEmblaCarousel()
    const prevButtonRef = useRef<HTMLButtonElement | null>(null)
    const nextButtonRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                if (prevButtonRef.current)
                    prevButtonRef.current.disabled = !emblaApi.canScrollPrev()
                if (nextButtonRef.current)
                    nextButtonRef.current.disabled = !emblaApi.canScrollNext()
            }

            emblaApi.on('select', onSelect)
            onSelect()
            return () => {
                emblaApi.off('select', onSelect)
            }
        }
    }, [emblaApi])

    return (
        <>
            <div>
                <SectionTag title={'Blog'} seeMore href="/blog" />
                <div className="mt-3 flex items-center justify-between">
                    <div className="space-y-2">
                        <MotionH2>Blog and Article</MotionH2>
                        <p className="tracking-wide text-lg opacity-75 max-w-[50vw]">
                            Read engaging blogs and insightful articles with
                            tips, stories, and knowledge to inspire, inform, and
                            connect you daily.
                        </p>
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Button
                            isIconOnly
                            variant="ghost"
                            size="lg"
                            className="rounded-full"
                            onPress={() => {
                                emblaApi?.scrollPrev()
                            }}
                        >
                            <ChevronLeft />
                        </Button>
                        <Button
                            isIconOnly
                            variant="ghost"
                            size="lg"
                            className="rounded-full"
                            onPress={() => {
                                emblaApi?.scrollNext()
                            }}
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-8 relative max-w-screen pl-auto">
                <div ref={emblaRef}>
                    <div className="flex gap-5">
                        {articles.map((at, idx) => (
                            <MotionDiv
                                key={idx}
                                // initial={{ opacity: 0, y: 20 }}
                                // whileInView={{
                                //     opacity: 1,
                                //     y: 0,
                                //     transition: {
                                //         delay: idx * 0.1,
                                //         type: 'spring',
                                //         stiffness: 120,
                                //         damping: 20,
                                //     },
                                // }}
                                // viewport={{ once: true }}
                                // className="flex-shrink-0 p-2"
                            >
                                <ArticleCard key={at.id ?? idx} data={at} />
                            </MotionDiv>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
