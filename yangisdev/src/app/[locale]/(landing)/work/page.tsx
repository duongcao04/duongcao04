'use client'

import { useFirebaseData } from '@/hooks/useFirebase'

import AppLoader from '@/app/loading'
import { MotionH1, MotionH4 } from '@/lib/motion'
import { Project } from '@/types/work'

import ProjectCard from './_components/ProjectCard'

export default function WorkPage() {
    const { data: allProjects, loading } = useFirebaseData<Project>('projects')

    if (loading) {
        return <AppLoader />
    }

    return (
        <div className="container pb-28">
            <div className="flex flex-col items-center gap-5 w-full mt-32 desktop:mt-16">
                <MotionH1 className="font-saira text-center inline-block leading-none text-transparent bg-gradient-to-r from-primary-600 via-orange-600 to-yellow-600 bg-clip-text text-7xl">
                    Work Showcase
                </MotionH1>
                <MotionH4 className="text-center text-sm text-text-secondary max-w-3xl tracking-wider leading-relaxed">
                    Each project reflects my approach to solving real-world
                    problems through clean, efficient code, modern development
                    tools, and purposeful, user-centered design.
                </MotionH4>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-5">
                {allProjects.map((project) => {
                    return <ProjectCard data={project} key={project.id} />
                })}
            </div>
        </div>
    )
}
