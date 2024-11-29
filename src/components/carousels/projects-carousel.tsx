'use client'

import React from 'react'

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

import { Project } from '@/data/projects'
import { MotionDiv } from '@/lib/motion'

import tailwindConfig from '../../../tailwind.config'

interface IProjectCard {
    data: Project
    isTail?: boolean
}
function ProjectCard({ data, isTail = false }: IProjectCard) {
    return (
        <div className={`${isTail && 'pr-[100px]'} w-[1158px] h-[498px]`}>
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
    const [emblaRef] = useEmblaCarousel(OPTIONS)

    return (
        <div className="w-full h-full py-[100px] overflow-hidden">
            <div ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom gap-11 mx-[100px]">
                    {data.map((item, index) => {
                        const isTail = index === data.length - 1 ? true : false

                        return (
                            <ProjectCard
                                key={item.id}
                                data={item}
                                isTail={isTail}
                            />
                        )
                    })}
                </div>
                {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
            </div>
        </div>
    )
}

export default ProjectsCarousel
