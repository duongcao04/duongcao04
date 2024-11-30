'use client'

import React, { useCallback } from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Project } from '@/data/projects'
import { MotionButton, MotionDiv } from '@/lib/motion'
import { cn } from '@/lib/utils'

import tailwindConfig from '../../../tailwind.config'

interface IProjectCard {
    data: Project
}
function ProjectCard({ data }: IProjectCard) {
    return (
        <div className={`w-[1158px] h-[498px]`}>
            <MotionDiv
                whileHover={{
                    boxShadow: tailwindConfig.theme.extend.boxShadow.square,
                    y: -20,
                }}
                className="w-[1158px] h-[498px] rounded-[30px]"
            >
                <Image
                    src={data.thumbnail}
                    alt={data.name}
                    width={1260}
                    height={600}
                    className="rounded-[30px] w-[1158px] h-[498px] object-cover"
                ></Image>
            </MotionDiv>
        </div>
    )
}

interface ProjectsCarouselProps {
    data: Project[]
}
function ProjectsCarousel({ data }: ProjectsCarouselProps) {
    const OPTIONS: EmblaOptionsType = { loop: false }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const actionBtnStyles =
        'absolute top-[50%] bg-white dark:bg-black p-4 rounded-full border-8 border-[#58585869] shadow-xl'

    return (
        <div className="w-full h-full py-[100px] overflow-hidden">
            <div ref={emblaRef} className="relative">
                <div className="flex touch-pan-y touch-pinch-zoom gap-11 mx-[100px]">
                    {data.map((item) => (
                        <ProjectCard key={item.id} data={item} />
                    ))}
                </div>
                <MotionButton
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollPrev}
                    className={cn(actionBtnStyles, 'left-10')}
                >
                    <FaArrowLeft size={32} className="text-primary" />
                </MotionButton>
                <MotionButton
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollNext}
                    className={cn(actionBtnStyles, 'right-10')}
                >
                    <FaArrowRight size={32} className="text-primary" />
                </MotionButton>
            </div>
        </div>
    )
}

export default ProjectsCarousel
