'use client'

import { useTranslations } from 'next-intl'

import { useProjects } from '@/shared/queries/useProject'

import ProjectCard from '../cards/ProjectCard'
import SectionTag from '../section-tag'

export default function RecentWork() {
    const t = useTranslations('home.recentWorks')
    const { projects, isLoading } = useProjects()

    return (
        <>
            <SectionTag title={t('tagTitle')} seeMore href="/work" />
            <div className="mt-5 grid grid-cols-2 gap-5">
                {projects?.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        data={project}
                        isLoading={isLoading}
                    />
                ))}
            </div>
        </>
    )
}
