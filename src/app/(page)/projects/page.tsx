import React from 'react'

import ProjectsCarousel from '@/components/carousels/projects-carousel'

import { PROJECTS } from '@/data/projects'
import { MotionDiv } from '@/lib/motion'

import Heading from './_components/heading'

function Projects() {
    return (
        <div className="relative">
            <div className="mt-40 sticky top-24">
                <Heading />
            </div>
            <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-background w-full h-[700px] rounded-[60px] shadow-2xl border flex items-center justify-center z-10"
            >
                <ProjectsCarousel data={PROJECTS} />
            </MotionDiv>
        </div>
    )
}

export default Projects
