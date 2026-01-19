'use client'

import { useTranslations } from 'next-intl'

import ToolCard from '@/features/collection/components/ToolCard'
import ToolFilter from '@/features/collection/components/ToolFiler'
import ToolSearchbar from '@/features/collection/components/ToolSearchbar'

import AppLoader from '@/app/loading'
import { MotionH1, MotionH4 } from '@/lib'

export default function CollectionPage() {
    const t = useTranslations('collection')

    if (false) {
        return <AppLoader />
    }

    return (
        <div className="container pb-28">
            <div className="flex flex-col w-full gap-2 mt-32 desktop:mt-44">
                <MotionH1 className="inline-block leading-normal text-transparent bg-linear-to-r from-primary-600 via-orange-600 to-yellow-600 bg-clip-text text-7xl">
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
                {[].map((item) => (
                    <li key={item}>
                        <ToolCard data={item} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
