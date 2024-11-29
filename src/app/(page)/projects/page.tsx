import React from 'react'

import ProjectsCarousel from '@/components/carousels/projects-carousel'

import { PROJECTS } from '@/data/projects'

// import { MotionH1 } from '@/lib/motion'

function Projects() {
    return (
        <div>
            {/* <MotionH1
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
            >
                Projects
            </MotionH1>
            <p className="mt-5 text-xl leading-relaxed">
                <span>
                    I have learned technologies like HTML5, CSS3,
                    Javascript/Typescript, Nodejs, Expressjs, MongoDB, MySQL,
                    etc.
                </span>
                <br />
                <span>
                    My experiences are shown through the projects below.
                </span>
            </p> */}
            <div className="mt-10 w-full h-[700px] rounded-[60px] shadow-2xl border flex items-center justify-center">
                <ProjectsCarousel data={PROJECTS} />
            </div>
        </div>
    )
}

export default Projects
