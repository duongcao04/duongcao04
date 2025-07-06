'use client'

import React, { useEffect, useState } from 'react'

import { useTranslations } from 'next-intl'

import { useFirebaseData } from '@/hooks/useFirebase'
import { useSearchParam } from '@/hooks/useSearchParam'

import AppLoader from '@/app/loading'
import { MotionH1, MotionH4 } from '@/lib/motion'
import { Tool } from '@/types/tool'

import ToolCard from './components/tool-card'
import ToolFilter from './components/tool-filter'
import ToolSearchbar from './components/tool-searchbar'

export default function CollectionPage() {
    const t = useTranslations('collection')

    const { getSearchParam } = useSearchParam()
    const searchKeywords = getSearchParam('search')

    const { data, loading } = useFirebaseData<Tool>('tools')

    const [allTools, setAllTools] = useState(data)

    useEffect(() => {
        if (!searchKeywords) {
            setAllTools(data)
        } else {
            setAllTools(
                allTools.filter((item) =>
                    item.name?.toLowerCase()?.includes(searchKeywords)
                )
            )
        }
    }, [searchKeywords, data])

    if (loading) {
        return <AppLoader />
    }

    return (
        <div className="container pb-28">
            <div className="flex flex-col w-full gap-2 mt-32 desktop:mt-44">
                <MotionH1 className="inline-block leading-normal text-transparent bg-gradient-to-r from-primary-600 via-orange-600 to-yellow-600 bg-clip-text text-7xl">
                    {t('title')}
                </MotionH1>
                <MotionH4 className="mt-5 mb-2 text-base desktop:mt-9 text-text-secondary">
                    {t('desc')}
                </MotionH4>
                <ToolSearchbar />
            </div>
            <div className="mt-5 mb-20">
                <ToolFilter />
            </div>
            <ul className="space-y-8 desktop:grid desktop:grid-cols-3 desktop:gap-8 desktop:space-y-0">
                {allTools.map((item) => (
                    <li key={item.id}>
                        <ToolCard data={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
