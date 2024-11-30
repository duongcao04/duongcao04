'use client'

import React, { useCallback } from 'react'

import { InlineIcon } from '@iconify/react/dist/iconify.js'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

import { Project } from '@/data/projects'
import { MotionButton, MotionDiv } from '@/lib/motion'
import { cn } from '@/lib/utils'

import tailwindConfig from '../../../tailwind.config'

interface IProjectCard {
    data: Project
}

function FrontCard({ data }: IProjectCard) {
    return (
        <Image
            src={data.thumbnail}
            alt={data.name}
            width={1158}
            height={498}
            className="rounded-[30px] w-[1158px] h-[498px] object-cover"
        ></Image>
    )
}
function BackCard({ data }: IProjectCard) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <h1 className="font-bold text-primary">{data.name}</h1>
            <ul className="flex items-center justify-center gap-5">
                {data.technologies.map((item) => (
                    <li key={item.id}>
                        <MotionButton
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            whileHover={{
                                scale: 1.1,
                                shadow: tailwindConfig.theme.extend.boxShadow
                                    .square,
                            }}
                            whileTap={{ scale: 1 }}
                            title="Go to original website"
                        >
                            <Link href={item.originial_website}>
                                <InlineIcon icon={item.logo} fontSize={60} />
                            </Link>
                        </MotionButton>
                    </li>
                ))}
            </ul>
            <MotionDiv
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
            >
                <Button asChild>
                    <Link href={`/projects/${data.slug}`}>View detail</Link>
                </Button>
            </MotionDiv>
        </div>
    )
}

function ProjectCard({ data }: IProjectCard) {
    const frontCardVariant = {
        initial: { opacity: 1, scale: 1 },
        hover: { opacity: 0, scale: 1.05 },
    }

    const backCardVariant = {
        initial: { opacity: 0, scale: 1 },
        hover: { opacity: 1, scale: 1.05 },
    }

    return (
        <div className="w-[1158px] h-[498px]">
            <MotionDiv
                className="relative w-[1158px] h-[498px]"
                initial="initial"
                whileHover="hover"
            >
                <MotionDiv
                    variants={frontCardVariant}
                    className="absolute top-0 left-0 w-full h-full rounded-[30px]"
                >
                    <FrontCard data={data} />
                </MotionDiv>
                <MotionDiv
                    variants={backCardVariant}
                    className="absolute top-0 left-0 w-full h-full rounded-[30px] border"
                >
                    <BackCard data={data} />
                </MotionDiv>
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
