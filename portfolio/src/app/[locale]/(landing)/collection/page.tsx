import React from 'react'

import { useTranslations } from 'next-intl'

import { TOOLS } from '@/data/tools'
import { MotionH1, MotionH4 } from '@/lib/motion'

import ToolCard from './components/tool-card'
import ToolFilter from './components/tool-filter'
import ToolSearchbar from './components/tool-searchbar'

export default function CollectionPage() {
    const t = useTranslations('collection')

    return (
        <div className="container pb-28">
            <div className="mt-32 desktop:mt-44 w-full flex flex-col gap-2">
                <MotionH1 className="bg-gradient-to-r from-primary-600 via-orange-600 to-yellow-600 inline-block text-transparent bg-clip-text text-7xl leading-normal">
                    {t('title')}
                </MotionH1>
                <MotionH4 className="mt-5 desktop:mt-9 mb-2 text-base text-text-secondary">
                    {t('desc')}
                </MotionH4>
                <ToolSearchbar />
            </div>
            <div className="mt-5 mb-20">
                <ToolFilter />
            </div>
            <ul className="desktop:grid desktop:grid-cols-3 desktop:gap-8 space-y-8 desktop:space-y-0">
                {TOOLS.map((item) => (
                    <li key={item.id}>
                        <ToolCard data={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
