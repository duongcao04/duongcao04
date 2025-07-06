'use client'

import React from 'react'

import { Spinner } from '@heroui/react'
import { useTranslations } from 'next-intl'

import { useFirebaseData } from '@/hooks/useFirebase'

import { Project } from '@/types/projects'

import ProjectCard from '../cards/ProjectCard'
import SectionTag from '../section-tag'

export default function WorkSection() {
    const tTag = useTranslations('app.common.tag')

    const { data: allProjects, loading } = useFirebaseData<Project>('projects')

    return (
        <>
            <SectionTag title={tTag('work')} seeMore href="/work" />
            {!loading && (
                <div className="mt-5 flex flex-col tablet:grid tablet:grid-cols-2 gap-8">
                    {allProjects.map((project, index) => (
                        <ProjectCard key={index} data={project} />
                    ))}
                </div>
            )}
            {loading && (
                <div className="w-full h-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
        </>
    )
}
