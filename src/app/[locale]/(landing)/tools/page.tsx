import React from 'react'

import { useTranslations } from 'next-intl'

import { MotionH1, MotionH4 } from '@/lib/motion'

import ToolFilter from './components/tool-filter'
import ToolSearchbar from './components/tool-searchbar'
import Tools from './components/tools'

function ToolsPage() {
    const t = useTranslations('tools')

    return (
        <div className="container pb-28">
            <div className="mt-44 w-full flex flex-col gap-2">
                <MotionH1 className="bg-gradient-to-r from-primary-600 via-orange-600 to-yellow-600 inline-block text-transparent bg-clip-text text-7xl leading-normal">
                    {t('title')}
                </MotionH1>
                <MotionH4 className="mt-9 mb-2 text-base text-text-secondary">
                    {t('desc')}
                </MotionH4>
                <ToolSearchbar />
            </div>
            <div className="mt-5 mb-20">
                <ToolFilter />
            </div>
            <Tools />
        </div>
    )
}

export default ToolsPage
