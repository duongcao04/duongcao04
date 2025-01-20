import React from 'react'

import { useTranslations } from 'next-intl'

import { DATABASES, TECHNOLOGIES, TOOLS } from '@/constants/techstack-list'
import { MotionH2, MotionH3 } from '@/lib/motion'

function Technologies() {
    const combineTools = [...DATABASES, ...TOOLS]

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

function TechStack() {
    const t = useTranslations('home.techStack')

    return (
        <div className="mt-5 flex flex-col items-center">
            <MotionH2 className="text-center font-preahvihear">
                {t('title')}
            </MotionH2>
            <MotionH3 className="text-center mt-4 leading-relaxed tracking-wide max-w-[700px]">
                {t('desc')}
            </MotionH3>
            <div className="mt-11">
                <Technologies />
            </div>
        </div>
    )
}

export default TechStack
