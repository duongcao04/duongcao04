'use client'

import React from 'react'

import { Button } from '@heroui/react'
import { useTranslations } from 'next-intl'

import { WORKS } from '@/database/works'
import { MotionH2 } from '@/lib/motion'

import RecentWorkCard from '../cards/RecentWorkCard'
import SectionTag from '../section-tag'

export default function RecentWork() {
    const tWorks = useTranslations('home.recentWorks')
    const leftCol = WORKS.filter((_, idx) => idx % 2 === 0)
    const rightCol = WORKS.filter((_, idx) => idx % 2 !== 0)

    return (
        <>
            <SectionTag title={tWorks('tagTitle')} seeMore href="/work" />
            <div className="mt-5 grid grid-cols-2 gap-5">
                {leftCol.map((work, idx) => {
                    return (
                        <div key={idx}>
                            <RecentWorkCard data={work} />
                        </div>
                    )
                })}
                {rightCol.map((work, idx) => {
                    return (
                        <div key={idx}>
                            <RecentWorkCard data={work} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
