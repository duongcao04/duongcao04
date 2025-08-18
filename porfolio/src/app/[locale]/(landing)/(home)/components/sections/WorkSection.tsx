'use client'

import React from 'react'

import { Spinner } from '@heroui/react'
import { useTranslations } from 'next-intl'

import { useFirebaseData } from '@/hooks/useFirebase'

import { Project } from '@/types/work'

import { MotionH2 } from '../../../../../../lib/motion'
import ProjectCard from '../cards/ProjectCard'
import SectionTag from '../section-tag'

export default function WorkSection() {
    const tTag = useTranslations('app.common.tag')

    const { data: allProjects, loading } = useFirebaseData<Project>('projects')

    return (
        <>
            <SectionTag title={tTag('work')} seeMore href="/work" />
            <div className="mt-3 flex items-center justify-between">
                <div className="space-y-2">
                    <MotionH2>Recent Works</MotionH2>
                    <p className="tracking-wide text-lg opacity-75 max-w-[50vw]">
                        Am embrace an effective design process that ensures
                        flawless execution and delivers optimal outcomes,
                        perfectly aligning our efferts with your vision
                    </p>
                </div>
            </div>
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
