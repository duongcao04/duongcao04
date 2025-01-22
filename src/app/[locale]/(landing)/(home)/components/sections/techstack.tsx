import React from 'react'

import { useTranslations } from 'next-intl'

import { DATABASES, TECHNOLOGIES, TOOLS } from '@/constants/techstack-list'
import { MotionH2, MotionH3 } from '@/lib/motion'

import TechStackInfiniteMoving from '../tech-stack-infinite-moving'

const combineTools = [...DATABASES, ...TOOLS]

function Technologies() {
    return (
        <div className="space-y-14">
            <ul className="flex items-center justify-center gap-8">
                {combineTools.map((item) => (
                    <li key={item.id} className="size-[64px]">
                        <item.logo className="w-full h-full" />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center gap-8">
                {TECHNOLOGIES.map((item) => (
                    <li key={item.id} className="size-[64px]">
                        <item.logo className="w-full h-full" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function TechStack() {
    const t = useTranslations('home.techStack')

    return (
        <div className="container mt-5 flex flex-col items-center">
            <MotionH2 className="text-2xl desktop:text-4xl text-center font-preahvihear">
                {t('title')}
            </MotionH2>
            <MotionH3 className="text-base desktop:text-lg font-normal text-text-secondary text-center mt-4 leading-normal max-w-[700px]">
                {t('desc')}
            </MotionH3>
            <div className="hidden desktop:block mt-11">
                <Technologies />
            </div>
            <div className="block desktop:hidden">
                <TechStackInfiniteMoving
                    technology={TECHNOLOGIES}
                    tools={combineTools}
                />
            </div>
        </div>
    )
}
