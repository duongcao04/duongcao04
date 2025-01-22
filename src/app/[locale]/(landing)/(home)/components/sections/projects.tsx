import React from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { PROJECTS } from '@/data/projects'
import { MotionDiv } from '@/lib/motion'

import MobileProjectCard from '../cards/mobile-project-card'
import ProjectCard from '../cards/project-card'

function ActionButton({ text }: { text: string }) {
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
                    {text}
                </Link>
            </Button>
        </MotionDiv>
    )
}

function Projects() {
    const t = useTranslations('home.projects')

    return (
        <>
            <ul className="mt-24 desktop:mt-32 space-y-44 desktop:space-y-60">
                {PROJECTS.map((item, index) => {
                    let isOdd = false
                    if (index % 2 !== 0) {
                        isOdd = true
                    }

                    return (
                        <li key={item.id}>
                            <div className="hidden desktop:block">
                                <ProjectCard data={item} isOpposite={isOdd} />
                            </div>
                            <div className="block desktop:hidden">
                                <MobileProjectCard
                                    data={item}
                                    isOpposite={isOdd}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className="mt-28 desktop:mt-48 flex items-center justify-center">
                <ActionButton text={t('explorerAllProjectButton')} />
            </div>
        </>
    )
}

export default Projects
