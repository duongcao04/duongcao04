import React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { PROJECTS } from '@/data/projects'
import { MotionDiv } from '@/lib/motion'

import ProjectCard, { ReverseProjectCard } from '../cards/project-card'

function ActionButton() {
    return (
        <MotionDiv
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: 1 }}
            whileTap={{ scale: 1, rotate: 0 }}
            className="w-fit"
        >
            <Button variant={'gradient'} size={'xl'} asChild>
                <Link href={'/projects'} className="text-foreground text-xl">
                    Explorer All Project
                </Link>
            </Button>
        </MotionDiv>
    )
}

function Projects() {
    return (
        <>
            <ul className="mt-32 space-y-60">
                {PROJECTS.map((item, index) => {
                    let isOdd = false
                    if (index % 2 === 0) {
                        isOdd = true
                    }

                    return (
                        <li key={item.id}>
                            {isOdd && <ProjectCard data={item} />}
                            {!isOdd && <ReverseProjectCard data={item} />}
                        </li>
                    )
                })}
            </ul>
            <div className="mt-48 flex items-center justify-center">
                <ActionButton />
            </div>
        </>
    )
}

export default Projects
