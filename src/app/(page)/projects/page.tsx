import React from 'react'

import ProjectsCarousel from '@/components/carousels/projects-carousel'

import { PROJECTS } from '@/data/projects'

import Heading from './_components/heading'

function Projects() {
    return (
        <div className="relative">
            <div className="mt-40 sticky top-32 -z-10">
                <Heading />
            </div>
            <div className="bg-background w-full h-[700px] rounded-[60px] shadow-2xl border flex items-center justify-center z-10">
                <ProjectsCarousel data={PROJECTS} />
            </div>
        </div>
    )
}

export default Projects
